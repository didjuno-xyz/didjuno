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
          <div className="terms-meta">
            <span>Effective date: <b>September 10, 2026</b></span>
            <span>Operator: <b>The founders of didjuno</b></span>
            <span>Privacy contact: <b>didjunoxyz@gmail.com</b></span>
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
            <p>These Rematch Beta Data Terms and Privacy Notice (“Data Terms”) describe how didjuno (“didjuno,” “we,” “us,” or “our”) collects, uses, stores, and shares information when you join or use the Rematch beta. didjuno is operated by its founders as an unincorporated partnership; we have not yet formed a separate legal entity. They also supplement any general website terms or privacy notice we publish.</p>
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
            <p><b>Google Drive.</b> Our intake creates a client folder in an authenticated didjuno Google Drive account and uploads the statement files you submit there. This access is upload-only: didjuno does not read, list, search, or modify any pre-existing files or folders in any Google account other than the ones our intake creates for you. Google processes this information as a service provider under its applicable terms and privacy commitments.</p>
            <p><b>Google API Services User Data Policy — Limited Use disclosure.</b> didjuno’s use and transfer of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements. Information obtained through Google Drive access is used solely to store your submitted statement files so we can prepare your Rematch review and send related confirmation emails. It is never used to train generalized or non-personalized AI/ML models, never used for advertising or ad targeting, never used to make credit, lending, or insurance eligibility determinations, and never sold or transferred to data brokers or other third parties for their own purposes.</p>
            <p><b>Resend.</b> We use Resend to send confirmation and service emails. Resend may process your email address, message content, delivery metadata, and related technical information. See <a href="https://resend.com/legal/privacy-policy">Resend’s privacy policy</a> and <a href="https://resend.com/legal/dpa">data processing addendum</a>.</p>
            <p><b>Anthropic and OpenAI.</b> To prepare your Rematch review, statement content and transaction information may be sent to Anthropic’s and OpenAI’s APIs for analysis. These providers process this information as service providers to didjuno and do not use it to serve their own advertising. See <a href="https://www.anthropic.com/legal/privacy">Anthropic’s privacy policy</a> and <a href="https://openai.com/policies/privacy-policy">OpenAI’s privacy policy</a>.</p>
            <p><b>Website and operational providers.</b> We may use hosting, form, security, analytics, and support providers needed to operate the beta. If the providers we use change, we will update this section.</p>

            <h2>5. Who can access or receive information</h2>
            <p>Access to your uploaded files and personal information is limited to didjuno’s two founders and the service providers named in Section 4 (Google Drive, Resend, Anthropic, and OpenAI) that need the information to perform the purposes described above. We do not share your information with any other third party for their own purposes. We may also disclose information:</p>
            <ul>
              <li>when you direct or consent to the disclosure;</li>
              <li>to comply with law, legal process, or a valid government request;</li>
              <li>to protect the rights, safety, and security of users, didjuno, or others; or</li>
              <li>as part of a financing, merger, acquisition, reorganization, or sale of assets, subject to appropriate notice and protections where required.</li>
            </ul>

            <h2>6. Retention and deletion</h2>
            <p>We retain your uploaded statement files and associated personal information until you ask us to delete them. We do not currently delete files automatically after a fixed period, unless a shorter period is required for security, dispute resolution, or legal compliance.</p>
            <p>You may request deletion at any time by emailing <b>didjunoxyz@gmail.com</b>. We will verify the request and act within the period required by applicable law. Residual copies may remain temporarily in provider backups or logs until they cycle out under the provider’s normal processes.</p>

            <h2>7. Security</h2>
            <p>We use reasonable administrative, technical, and organizational safeguards appropriate to the beta and the information involved, including access restrictions and authenticated service accounts. No storage or transmission system is completely secure, so we cannot guarantee absolute security.</p>
            <p>If we learn of a breach affecting your information, we will investigate and provide notice when required by applicable law.</p>

            <h2>8. Your choices and rights</h2>
            <p>Depending on where you live, you may have rights to request access to, correction of, deletion of, or a copy of your personal information; to object to or restrict certain processing; to withdraw consent where processing relies on consent; or to appeal a decision. You may also complain to your local data-protection authority.</p>
            <p>To make a request, contact <b>didjunoxyz@gmail.com</b>. You may unsubscribe from marketing email using the link in any such message. Service emails about an active Rematch may still be required to complete your request.</p>

            <h2>9. International processing</h2>
            <p>didjuno’s founders are based in the United States (California) and Australia, and our users may be located anywhere. didjuno and its providers may process information in countries other than the one where you live, including the United States and Australia. Where required, we will use an appropriate transfer mechanism and safeguards.</p>

            <h2>10. Children</h2>
            <p>Rematch is not intended for anyone under 18. We do not knowingly collect personal information from children through the beta.</p>

            <h2>11. Changes to these terms</h2>
            <p>We may update these Data Terms as the beta, providers, or law changes. We will post the revised version and update its effective date. If a change materially affects how we use previously collected information, we will provide additional notice or seek consent where required.</p>

            <h2>12. Contact</h2>
            <p>didjuno is operated by its founders, based in California, USA and Australia, as an unincorporated partnership with no separate legal entity formed as of the effective date above. We are an online-only team and do not maintain a public mailing address. Questions or requests can be sent to <b>didjunoxyz@gmail.com</b>.</p>
            <p>Because we operate across California and Australia and serve users everywhere, we do not designate a single governing jurisdiction. Depending on where you live, local law — such as the California Consumer Privacy Act or Australia’s Privacy Act 1988 — may give you specific rights, as described in Section 8.</p>
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
