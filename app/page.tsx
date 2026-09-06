import Link from 'next/link';
import { NewsletterForm } from './components/NewsletterForm';

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="didjuno home">
      <img src="/didjuno-mark.png" alt="" />
      <span>did<span>juno</span></span>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="home-shell">
      <section className="home-hero">
        <nav className="site-nav">
          <Brand />
          <div className="nav-links">
            <Link href="/weekly">The Weekly</Link>
            <Link href="/rematch">Rematch</Link>
            <Link href="/data-terms">Data terms</Link>
          </div>
        </nav>

        <div className="home-intro">
          <p className="marker-hook">did juno<span>?</span></p>
          <h1>Know what changed.<br />Know what you’re missing.</h1>
          <p>Two fast ways to get more from the cards and spending you already have.</p>
        </div>

        <div className="choice-grid" aria-label="Choose how didjuno helps">
          <article className="choice-card weekly-card">
            <p className="eyebrow">Every week · under 5 minutes</p>
            <h2>Get one useful <span className="aha">aha</span> before your day starts.</h2>
            <p>What changed, what it could be worth, and the one action to remember.</p>
            <NewsletterForm className="mini-signup" inputId="home-email" />
            <Link className="text-link" href="/weekly">See the newsletter →</Link>
          </article>

          <article className="choice-card rematch-card">
            <p className="eyebrow">Personalized · free beta</p>
            <h2>See what your real spending could earn instead.</h2>
            <p>Upload recent statements. Rematch finds expiring benefits, category misses, and annual-fee reality.</p>
            <div className="card-actions">
              <Link className="button primary" href="/rematch#start">Start my Rematch</Link>
              <Link className="text-link" href="/rematch">See how it works →</Link>
            </div>
          </article>
        </div>

        <div className="proof-strip">
          <span>One clear takeaway</span>
          <span>No bank login</span>
          <span>Built for real spending</span>
        </div>
      </section>
    </main>
  );
}
