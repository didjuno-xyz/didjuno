import { NextRequest, NextResponse } from 'next/server';
import { addNewsletterSubscriber } from '@/lib/google';

export const runtime = 'nodejs';
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  try {
    const fields = body as { email?: unknown; company?: unknown };
    const email = typeof fields.email === 'string' ? fields.email.trim().toLowerCase() : '';
    if (!EMAIL.test(email)) {
      return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
    }
    if (fields.company) return NextResponse.json({ ok: true });

    await addNewsletterSubscriber(email);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Newsletter signup failed', error);
    return NextResponse.json({ error: 'We could not add you right now. Please try again.' }, { status: 500 });
  }
}
