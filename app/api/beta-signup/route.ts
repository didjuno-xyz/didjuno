import { NextRequest, NextResponse } from 'next/server';
import { createClientFolders, driveFolderUrl, uploadStatement } from '@/lib/google';
import { sendRematchEmails } from '@/lib/email';

export const runtime = 'nodejs';
export const maxDuration = 60;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_TYPES = new Set(['application/pdf', 'text/csv', 'application/vnd.ms-excel']);
const MAX_TOTAL_BYTES = 4 * 1024 * 1024;
const MAX_FILES = 6;

export async function POST(request: NextRequest) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid form submission.' }, { status: 400 });
  }

  try {
    const name = typeof data.get('name') === 'string' ? String(data.get('name')).trim() : '';
    const email = typeof data.get('email') === 'string' ? String(data.get('email')).trim().toLowerCase() : '';
    const files = data.getAll('files').filter((item): item is File => item instanceof File);

    if (data.get('company')) return NextResponse.json({ ok: true });
    if (!name) return NextResponse.json({ error: 'Enter your name.' }, { status: 400 });
    if (!EMAIL.test(email)) return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
    if (!files.length) return NextResponse.json({ error: 'Attach at least one PDF or CSV statement.' }, { status: 400 });
    if (files.length > MAX_FILES) return NextResponse.json({ error: `Attach no more than ${MAX_FILES} files.` }, { status: 400 });

    const total = files.reduce((sum, file) => sum + file.size, 0);
    if (total > MAX_TOTAL_BYTES) {
      return NextResponse.json({ error: 'Your files must be 4 MB or less in total for the beta.' }, { status: 400 });
    }
    for (const file of files) {
      const extensionOkay = /\.(pdf|csv)$/i.test(file.name);
      if (!extensionOkay || (file.type && !ALLOWED_TYPES.has(file.type))) {
        return NextResponse.json({ error: `${file.name}: use a PDF or CSV file.` }, { status: 400 });
      }
    }

    const { clientFolderId, statementsFolderId } = await createClientFolders(name);
    for (const file of files) {
      await uploadStatement(
        statementsFolderId,
        file.name,
        file.type || 'application/octet-stream',
        Buffer.from(await file.arrayBuffer()),
      );
    }

    const driveUrl = driveFolderUrl(clientFolderId);
    await sendRematchEmails({ name, email, driveUrl });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Rematch submission failed', error);
    return NextResponse.json({ error: 'We could not submit your Rematch. Please try again.' }, { status: 500 });
  }
}
