import Link from 'next/link';

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="didjuno home">
      <img src="/didjuno-mark.png" alt="" />
      <span>did<span>juno</span></span>
    </Link>
  );
}

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  return (
    <nav className={`site-nav ${dark ? 'nav-dark' : 'nav-light'}`}>
      <Brand />
      <div className="nav-links">
        <Link href="/weekly">The Weekly</Link>
        <Link href="/rematch">Rematch</Link>
        <Link href="/data-terms">Data terms</Link>
      </div>
    </nav>
  );
}
