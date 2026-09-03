import { google } from 'googleapis';

function serviceAccountAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!email || !key) {
    throw new Error('Newsletter storage is not configured');
  }

  return new google.auth.JWT({
    email,
    key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

function driveAuth() {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Rematch storage is not configured');
  }

  const client = new google.auth.OAuth2(clientId, clientSecret);
  client.setCredentials({ refresh_token: refreshToken });
  return client;
}

function clientsFolderId() {
  const value = process.env.GOOGLE_DRIVE_CLIENTS_FOLDER_ID;
  if (!value) throw new Error('Missing GOOGLE_DRIVE_CLIENTS_FOLDER_ID');
  return value;
}

function slugify(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60) || 'tester';
}

async function findOrCreateFolder(
  drive: ReturnType<typeof google.drive>,
  name: string,
  parentId: string,
) {
  const escaped = name.replace(/'/g, "\\'");
  const listed = await drive.files.list({
    q: `'${parentId}' in parents and name = '${escaped}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: 'files(id)',
    spaces: 'drive',
  });
  const existing = listed.data.files?.[0]?.id;
  if (existing) return existing;

  const created = await drive.files.create({
    requestBody: {
      name,
      mimeType: 'application/vnd.google-apps.folder',
      parents: [parentId],
    },
    fields: 'id',
  });
  if (!created.data.id) throw new Error('Could not create Drive folder');
  return created.data.id;
}

export async function createClientFolders(name: string) {
  const drive = google.drive({ version: 'v3', auth: driveAuth() });
  const rootId = clientsFolderId();
  const base = slugify(name);
  let handle = base;

  for (let suffix = 2; ; suffix += 1) {
    const escaped = handle.replace(/'/g, "\\'");
    const listed = await drive.files.list({
      q: `'${rootId}' in parents and name = '${escaped}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
      fields: 'files(id)',
      spaces: 'drive',
    });
    if (!listed.data.files?.length) break;
    handle = `${base}-${suffix}`;
  }

  const clientFolderId = await findOrCreateFolder(drive, handle, rootId);
  const statementsFolderId = await findOrCreateFolder(drive, 'Statements', clientFolderId);
  return { clientFolderId, statementsFolderId };
}

export async function uploadStatement(
  folderId: string,
  fileName: string,
  mimeType: string,
  buffer: Buffer,
) {
  const drive = google.drive({ version: 'v3', auth: driveAuth() });
  const { Readable } = await import('node:stream');
  await drive.files.create({
    requestBody: { name: fileName, parents: [folderId] },
    media: { mimeType, body: Readable.from(buffer) },
    fields: 'id',
  });
}

export function driveFolderUrl(folderId: string) {
  return `https://drive.google.com/drive/folders/${folderId}`;
}

export async function addNewsletterSubscriber(email: string) {
  const sheetId = process.env.GOOGLE_SHEETS_NEWSLETTER_ID;
  if (!sheetId) throw new Error('Newsletter storage is not configured');

  const sheets = google.sheets({ version: 'v4', auth: serviceAccountAuth() });
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'A:B',
    valueInputOption: 'RAW',
    requestBody: { values: [[new Date().toISOString(), email]] },
  });
}
