import Link from 'next/link';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { NewsletterForm } from '../components/NewsletterForm';

const issues = [
  {
    tag: 'USE IT',
    kicker: 'Amex Gold dining credit',
    title: <>Buffalo Wild Wings can now trigger up to <mark>$10</mark> back each month.</>,
    body: 'Enroll first, then use an eligible Amex Gold card. A small credit is only valuable if it fits something you already buy.',
    takeaway: 'Aha: set one monthly reminder before the credit expires.',
    href: 'https://global.americanexpress.com/card-benefits/detail/dining-credit/gold',
    source: 'Check current Amex terms',
  },
  {
    tag: 'CHECK IT',
    kicker: 'Marriott Bonvoy Boundless',
    title: <>Eligible 2026 airline purchases could return up to <mark>$100</mark>.</>,
    body: 'The offer described by Chase is split into two eligible windows. Activation, timing, and eligibility matter.',
    takeaway: 'Aha: check your card before paying an airline directly.',
    href: 'https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/boundless',
    source: 'Check current Chase terms',
  },
  {
    tag: 'PRICE IT',
    kicker: 'A real United checkout',
    title: <>The same Economy Plus seat appeared <mark>$42.77 lower</mark> through a bundle.</>,
    body: 'One session showed $174.99 in the seat map and $132.22 through the bundle flow. Prices vary, but the habit travels.',
    takeaway: 'Aha: compare both paths before you upgrade.',
  },
  {
    tag: 'VALUE IT',
    kicker: 'A real annual-fee review',
    title: <>A companion certificate covered a roughly <mark>$750</mark> family ticket.</>,
    body: 'Unused rideshare and hotel credits were counted at zero. The honest value of a card is what you actually use.',
    takeaway: 'Aha: audit your renewal with your behavior, not the brochure.',
  },
];

export default function DailyPage() {
  return (
    <main>
      <section className="dark-hero compact-hero">
        <div className="page-wrap">
          <SiteHeader dark />
          <div className="split-hero">
            <div>
              <p className="marker-hook">did juno<span>?</span></p>
              <p className="section-label lime-label">THE FIVE-MINUTE DAILY</p>
              <h1>One quick <span className="lime-text">aha.</span><br />No rewards rabbit hole.</h1>
              <p className="hero-copy">Know what changed, what it could be worth, and the one useful action to remember—before your day gets busy.</p>
            </div>
            <NewsletterForm
              className="signup-panel"
              inputId="daily-email"
              eyebrow="Free every morning"
              heading="Start with tomorrow’s aha."
              note="No spam. Unsubscribe anytime."
            />
          </div>
        </div>
      </section>

      <section className="light-section">
        <div className="page-wrap">
          <div className="section-heading">
            <p className="section-label">WHAT IT LOOKS LIKE</p>
            <h2>Four quick hits. Four useful habits.</h2>
            <p>Real examples, compressed to the part worth remembering. Lime means didjuno found the value.</p>
          </div>
          <div className="issue-grid">
            {issues.map((issue) => (
              <article className="issue-card" key={issue.kicker}>
                <div className="issue-meta"><span>{issue.tag}</span><small>UNDER 5 MIN</small></div>
                <p className="issue-kicker">{issue.kicker}</p>
                <h3>{issue.title}</h3>
                <p>{issue.body}</p>
                <strong>{issue.takeaway}</strong>
                {issue.href && <a className="source-link" href={issue.href}>{issue.source} ↗</a>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="promise-section">
        <div className="page-wrap promise-grid">
          <div><span>01</span><h3>What changed</h3><p>The benefit, rule, offer, or pricing wrinkle worth knowing now.</p></div>
          <div><span>02</span><h3>What it’s worth</h3><p>A number, not a cloud of points jargon.</p></div>
          <div><span>03</span><h3>What to do next</h3><p>One practical move you can remember and use.</p></div>
        </div>
      </section>

      <section className="conversion-band">
        <div className="page-wrap conversion-inner">
          <div><p className="marker-hook">did juno<span>?</span></p><h2>Tomorrow’s aha takes five minutes.</h2></div>
          <NewsletterForm className="band-form" inputId="band-email" />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
