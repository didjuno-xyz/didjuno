import Link from 'next/link';
import { Brand } from './SiteHeader';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Brand />
        <p>Know what changed. Know what you’re missing.</p>
      </div>
      <div className="footer-links">
        <div>
          <strong>Explore</strong>
          <Link href="/daily">The Daily</Link>
          <Link href="/rematch">Rematch</Link>
          <Link href="/data-terms">Data terms</Link>
        </div>
        <div>
          <strong>Follow</strong>
          <a href="https://x.com/didjuno_xyz">X / Twitter</a>
          <a href="https://www.linkedin.com/company/didjuno">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
