'use client';

import { FormEvent, useState } from 'react';

type Props = {
  className: 'mini-signup' | 'signup-panel' | 'band-form';
  inputId: string;
  heading?: string;
  eyebrow?: string;
  note?: string;
};

export function NewsletterForm({ className, inputId, heading, eyebrow, note }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || 'Something went wrong.');
      setStatus('success');
      setEmail('');
      setMessage('You’re on the list. Watch for your first aha.');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return <div className={`form-result success ${className}`} role="status">{message}</div>;
  }

  return (
    <form className={className} onSubmit={submit}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {heading && <h2>{heading}</h2>}
      <label className={className === 'signup-panel' ? '' : 'sr-only'} htmlFor={inputId}>Email address</label>
      <input id={inputId} type="email" placeholder="you@email.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
      <input className="honeypot" type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Joining…' : 'Get the Weekly'}</button>
      {note && <small>{note}</small>}
      {status === 'error' && <p className="form-error" role="alert">{message}</p>}
    </form>
  );
}
