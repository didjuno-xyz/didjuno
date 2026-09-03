import { Resend } from 'resend';

function resend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('Email delivery is not configured');
  return new Resend(key);
}

function sender() {
  return process.env.RESEND_FROM_EMAIL || 'didjuno <onboarding@resend.dev>';
}

export async function sendRematchEmails(input: {
  name: string;
  email: string;
  driveUrl: string;
}) {
  const notifyEmail = process.env.NOAH_NOTIFY_EMAIL;
  if (!notifyEmail) throw new Error('Missing NOAH_NOTIFY_EMAIL');

  const client = resend();
  await Promise.all([
    client.emails.send({
      from: sender(),
      to: input.email,
      subject: 'Your didjuno Rematch is in',
      text: `Hi ${input.name},\n\nWe received your statements for your didjuno Rematch. We’ll follow up by email with your personalized review.\n\n— didjuno`,
    }),
    client.emails.send({
      from: sender(),
      to: notifyEmail,
      subject: `New didjuno Rematch: ${input.name}`,
      text: `${input.name} (${input.email}) submitted statements.\n\nDrive folder: ${input.driveUrl}`,
    }),
  ]);
}
