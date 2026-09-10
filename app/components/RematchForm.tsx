'use client';

import Link from 'next/link';
import { FormEvent, useRef, useState } from 'react';

export function RematchForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);

  function syncFileInput(nextFiles: File[]) {
    const input = fileInputRef.current;
    if (!input) return;
    const transfer = new DataTransfer();
    nextFiles.forEach((file) => transfer.items.add(file));
    input.files = transfer.files;
  }

  function addFiles(newFiles: File[]) {
    setFiles((current) => {
      const merged = [...current, ...newFiles].filter(
        (file, index, all) => all.findIndex((f) => f.name === file.name && f.size === file.size) === index,
      );
      syncFileInput(merged);
      return merged;
    });
  }

  function removeFile(index: number) {
    setFiles((current) => {
      const next = current.filter((_, i) => i !== index);
      syncFileInput(next);
      return next;
    });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const total = files.reduce((sum, file) => sum + file.size, 0);
    if (!files.length || total > 4 * 1024 * 1024) {
      setStatus('error');
      setMessage(!files.length ? 'Attach at least one PDF or CSV statement.' : 'Your files must be 4 MB or less in total.');
      return;
    }

    const data = new FormData(form);
    data.delete('files');
    files.forEach((file) => data.append('files', file));

    setStatus('submitting');
    setMessage('');
    try {
      const response = await fetch('/api/beta-signup', { method: 'POST', body: data });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || 'Something went wrong.');
      form.reset();
      setFiles([]);
      syncFileInput([]);
      setStatus('success');
      setMessage('Your Rematch is in. Check your email for confirmation.');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className="intake-form form-result success" role="status">
        <strong>You’re in.</strong>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <form className="intake-form" ref={formRef} onSubmit={submit}>
      <label htmlFor="full-name">Name</label>
      <input id="full-name" name="name" type="text" placeholder="Your name" required />
      <label htmlFor="rematch-email">Email</label>
      <input id="rematch-email" name="email" type="email" placeholder="you@email.com" required />
      <label htmlFor="statements">Recent statement files</label>
      <label className="file-picker" htmlFor="statements">
        {files.length ? `Add more files (${files.length} selected)` : 'Choose PDF or CSV files'}
      </label>
      <input
        id="statements"
        ref={fileInputRef}
        name="files"
        className="file-input"
        type="file"
        accept=".pdf,.csv,application/pdf,text/csv"
        multiple
        required={files.length === 0}
        onChange={(event) => {
          addFiles(Array.from(event.target.files || []));
          event.target.value = '';
        }}
      />
      {files.length > 0 && (
        <ul className="file-list">
          {files.map((file, index) => (
            <li key={`${file.name}-${file.size}-${index}`}>
              <span>{file.name}</span>
              <button type="button" onClick={() => removeFile(index)} aria-label={`Remove ${file.name}`}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="file-note">PDF or CSV · up to 6 files · 4 MB total</p>
      <input className="honeypot" type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="consent-check">
        <input type="checkbox" required />
        <span>I have read and agree to the <Link href="/data-terms">beta data terms</Link>.</span>
      </label>
      {status === 'error' && <p className="form-error" role="alert">{message}</p>}
      <button type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Submitting securely…' : 'Submit my Rematch'}</button>
      <small>By submitting, you confirm the files are yours to share. Beta processing is completed by the didjuno team.</small>
    </form>
  );
}
