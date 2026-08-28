import Link from 'next/link';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

export default function DataTermsPage() {
  return (
    <main>
      <section className="terms-hero">
        <div className="page-wrap">
          <SiteHeader dark />
          <div className="terms-title">
            <p className="section-label lime-label">PLAIN ENGLISH FIRST</p>
            <h1>Rematch beta data terms</h1>
            <p>What we collect, why we need it, where it goes, and the choices you have.</p>
          </div>
        </div>
      </section>

      <section className="terms-section">
        <div className="terms-wrap">
          <aside className="draft-notice">
            <strong>Draft for launch review</strong>
            <p>Complete every bracketed item and have qualified counsel review this page before accepting public uploads.</p>
          </aside>

          <div className="terms-meta">
            <span>Effective date: <b>[EFFECTIVE DATE]</b></span>
            <span>Operator: <b>[LEGAL ENTITY NAME]</b></span>
            <span>Privacy contact: <b>[PRIVACY EMAIL]</b></span>
          </div>

          <article className="plain-summary">
            <p className="section-label">THE SHORT VERSION</p>
            <h2>Your statements are for your Rematch—not for selling ads.</h2>
            <ul>
              <li>We ask for your name, email, and the statements you choose to upload.</li>
              <li>We use them to organize and complete your Rematch and communicate with you.</li>
              <li>Files are stored in Google Drive; confirmation and service emails are sent using Resend.</li>
              <li>We do not ask for a bank login. Remove full card numbers and unrelated sensitive information before uploading.</li>
              <li>You can ask us to delete your uploaded files and associated personal information, subject to limited legal or operational exceptions.</li>
            </ul>
            <p>This summary is for convenience. The full terms below control.</p>
          </article>

          <article className="legal-copy">
            <h2>1. Scope and acceptance</h2>
            <p>These Rematch Beta Data Terms and Privacy Notice (“Data Terms”) describe how [LEGAL ENTITY NAME], doing business as didjuno (“didjuno,” “we,” “us,” or “our”), collects, uses, stores, and shares information when you join or use the Rematch beta. They also supplement any general website terms or privacy notice we publish.</p>
            <p>By submitting the Rematch intake form or uploading a statement, you confirm that you have read and agree to these Data Terms, that you are at least 18 years old, and that you have the right to provide the information you submit.</p>

            <h2>2. Information we collect</h2>
            <p><b>Information you provide.</b> We collect your name, email address, uploaded statement files, transaction information and account metadata visible in those files, and communications you send to us.</p>
            <p><b>Service information.</b> Our website and service providers may collect basic technical records such as IP address, browser type, device type, timestamps, and form or email delivery events needed to operate, secure, and troubleshoot the beta.</p>
            <p><b>Please do not provide unnecessary sensitive information.</b> Before uploading, redact or remove full payment-card numbers, card security codes, bank usernames or passwords, Social Security or government identification numbers, medical information, and any information unrelated to the transactions you want reviewed. We do not need your bank login credentials.</p>

            <h2>3. How we use information</h2>
            <p>We use the information described above to:</p>
            <ul>
              <li>create and organize your client folder and receive the files you upload;</li>
              <li>review spending, card benefits, earning categories, and potential missed value for your Rematch;</li>
              <li>send confirmations, questions, results, and service-related messages;</li>
              <li>operate, secure, debug, and improve the beta;</li>
              <li>prevent misuse and comply with applicable law; and</li>
              <li>use aggregated or de-identified insights that do not reasonably identify you to understand and improve the service.</li>
            </ul>
            <p>We will not use your statement data for targeted advertising or sell it for money.</p>

            <h2>4. Where information is processed</h2>
            <p><b>Google Drive.</b> Our intake currently creates a client folder in an authenticated didjuno Google Drive account and stores the statement files you submit there. Google processes this information as a service provider under its applicable terms and privacy commitments.</p>
            <p><b>Resend.</b> We use Resend to send confirmation and service emails. Resend may process your email address, message content, delivery metadata, and related technical information. See <a href="https://resend.com/legal/privacy-policy">Resend’s privacy policy</a> and <a href="https://resend.com/legal/dpa">data processing addendum</a>.</p>
            <p><b>Website and operational providers.</b> We may use hosting, form, security, analytics, and support providers needed to operate the beta. Before launch, we will update this section or a linked subprocessors list with the providers actually in use.</p>

            <h2>5. Who can access or receive information</h2>
            <p>Access is limited to authorized didjuno team members and service providers that need the information to perform the purposes described above. We may also disclose information:</p>
            <ul>
              <li>when you direct or consent to the disclosure;</li>
              <li>to comply with law, legal process, or a valid government request;</li>
              <li>to protect the rights, safety, and security of users, didjuno, or others; or</li>
              <li>as part of a financing, merger, acquisition, reorganization, or sale of assets, subject to appropriate notice and protections where required.</li>
            </ul>

            <h2>6. Retention and deletion</h2>
            <p>We retain identifiable statement files while we complete your Rematch and for <b>[RETENTION PERIOD]</b> after delivery so we can answer follow-up questions, unless you request deletion sooner or a longer period is required for security, dispute resolution, or legal compliance. After that period, we will delete or de-identify the information in accordance with our written retention process.</p>
            <p>You may request deletion by emailing <b>[PRIVACY EMAIL]</b>. We will verify the request and act within the period required by applicable law. Residual copies may remain temporarily in provider backups or logs until they cycle out under the provider’s normal processes.</p>

            <h2>7. Security</h2>
            <p>We use reasonable administrative, technical, and organizational safeguards appropriate to the beta and the information involved, including access restrictions and authenticated service accounts. No storage or transmission system is completely secure, so we cannot guarantee absolute security.</p>
            <p>If we learn of a breach affecting your information, we will investigate and provide notice when required by applicable law.</p>

            <h2>8. Your choices and rights</h2>
            <p>Depending on where you live, you may have rights to request access to, correction of, deletion of, or a copy of your personal information; to object to or restrict certain processing; to withdraw consent where processing relies on consent; or to appeal a decision. You may also complain to your local data-protection authority.</p>
            <p>To make a request, contact <b>[PRIVACY EMAIL]</b>. You may unsubscribe from marketing email using the link in any such message. Service emails about an active Rematch may still be required to complete your request.</p>

            <h2>9. International processing</h2>
            <p>didjuno and its providers may process information in countries other than the one where you live, including the United States. Where required, we will use an appropriate transfer mechanism and safeguards.</p>

            <h2>10. Children</h2>
            <p>Rematch is not intended for anyone under 18. We do not knowingly collect personal information from children through the beta.</p>

            <h2>11. Changes to these terms</h2>
            <p>We may update these Data Terms as the beta, providers, or law changes. We will post the revised version and update its effective date. If a change materially affects how we use previously collected information, we will provide additional notice or seek consent where required.</p>

            <h2>12. Contact</h2>
            <p>Questions or requests can be sent to <b>[PRIVACY EMAIL]</b> or mailed to:</p>
            <p><b>[LEGAL ENTITY NAME]<br />[MAILING ADDRESS]<br />[JURISDICTION]</b></p>
          </article>

          <div className="terms-cta">
            <div><h2>Ready when the terms are.</h2><p>Review what you share, redact what we do not need, then start your Rematch.</p></div>
            <Link className="button primary" href="/rematch#start">Back to Rematch</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
