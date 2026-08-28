import Link from 'next/link';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

export default function RematchPage() {
  return (
    <main>
      <section className="dark-hero rematch-hero">
        <div className="page-wrap">
          <SiteHeader dark />
          <div className="split-hero rematch-split">
            <div>
              <p className="section-label lime-label">REMATCH · FREE BETA</p>
              <h1>Stop choosing cards in the checkout line.</h1>
              <p className="hero-copy">Rematch looks at how you already spend, then finds the benefits, category bonuses, and real-world value you may be leaving behind.</p>
              <div className="hero-actions">
                <Link className="button primary" href="#start">Start my Rematch</Link>
                <Link className="quiet-link" href="#how">See how it works ↓</Link>
              </div>
              <div className="trust-row"><span>No bank login</span><span>Recent statements only</span><span>You choose what to share</span></div>
            </div>
            <div className="report-preview">
              <div className="report-top"><span>YOUR REMATCH</span><span>3 AHA MOMENTS</span></div>
              <div className="report-number"><small>ESTIMATED VALUE FOUND</small><strong>$47<em>/mo</em></strong></div>
              <div className="report-line"><i>01</i><p><b>Groceries</b><span>1× → 4× available</span></p><strong>+1,830 pts</strong></div>
              <div className="report-line"><i>02</i><p><b>Unused credit</b><span>Expires this month</span></p><strong>+$10</strong></div>
              <div className="report-line"><i>03</i><p><b>Annual fee</b><span>Value what you use</span></p><strong>Review</strong></div>
              <small className="example-note">Illustrative report format. Your findings depend on your cards and spending.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="light-section" id="how">
        <div className="page-wrap">
          <div className="section-heading narrow">
            <p className="section-label">FROM SPEND TO FOUND VALUE</p>
            <h2>Three steps. One prioritized answer.</h2>
            <p>No generic “best card” list. Rematch starts with the cards and purchases already in your life.</p>
          </div>
          <div className="steps-grid">
            <article><span>1</span><h3>Share recent statements</h3><p>Add your name, email, and one or more recent card statements. No bank password or account connection.</p></article>
            <article><span>2</span><h3>We rematch your spending</h3><p>We compare real categories and benefits—not a made-up spending profile.</p></article>
            <article><span>3</span><h3>Get the useful part</h3><p>See what was missed, what may expire, and the specific action worth considering next.</p></article>
          </div>
        </div>
      </section>

      <section className="findings-section">
        <div className="page-wrap">
          <div className="section-heading"><p className="section-label">WHAT REMATCH LOOKS FOR</p><h2>The quiet leaks that add up.</h2></div>
          <div className="finding-grid">
            <article><span>01</span><h3>Category misses</h3><p>Purchases earning 1× when a card you already have may earn more.</p></article>
            <article><span>02</span><h3>Expiring value</h3><p>Credits and benefits with deadlines that are easy to forget.</p></article>
            <article><span>03</span><h3>Annual-fee reality</h3><p>What you truly used—not every theoretical perk in the brochure.</p></article>
            <article><span>04</span><h3>Price-path opportunities</h3><p>Cases where a different legitimate booking path may cost less.</p></article>
          </div>
        </div>
      </section>

      <section className="intake-section" id="start">
        <div className="page-wrap intake-grid">
          <div>
            <p className="section-label lime-label">START YOUR FREE BETA</p>
            <h2>Let’s see what your spending has been trying to tell you.</h2>
            <p>Share only what is needed for the review. Before uploading, remove full card numbers, security codes, bank login details, Social Security numbers, or other information unrelated to your transactions.</p>
            <Link className="data-link" href="/data-terms">Read the beta data terms →</Link>
          </div>
          <form className="intake-form">
            <label htmlFor="full-name">Name</label>
            <input id="full-name" name="name" type="text" placeholder="Your name" required />
            <label htmlFor="rematch-email">Email</label>
            <input id="rematch-email" name="email" type="email" placeholder="you@email.com" required />
            <label htmlFor="statements">Recent statement files</label>
            <input id="statements" name="statements" type="file" accept=".pdf,image/*" multiple required />
            <label className="consent-check"><input type="checkbox" required /><span>I have read and agree to the <Link href="/data-terms">beta data terms</Link>.</span></label>
            <button type="submit">Submit my Rematch</button>
            <small>By submitting, you confirm the files are yours to share. Beta processing is completed by the didjuno team.</small>
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
