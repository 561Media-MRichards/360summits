import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for 360Summits — how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <section className="bg-pastel-lavender py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold text-slate-900 md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-slate-500">Last updated: March 6, 2026</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 space-y-10 text-slate-600 leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">

          <div>
            <h2>1. Introduction</h2>
            <p>360Summits ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at 360summits.com ("Site") or use our services.</p>
          </div>

          <div>
            <h2>2. Information We Collect</h2>
            <p><strong className="text-slate-900">Information you provide directly:</strong></p>
            <ul>
              <li>Name, email address, and phone number when you submit our contact form</li>
              <li>Business information and summit goals shared during discovery calls</li>
              <li>Payment and billing information when you engage our services</li>
              <li>Any other information you voluntarily provide through communication with us</li>
            </ul>
            <p className="mt-4"><strong className="text-slate-900">Information collected automatically:</strong></p>
            <ul>
              <li>Browser type, operating system, and device information</li>
              <li>IP address and approximate geographic location</li>
              <li>Pages visited, time spent on pages, and referring URLs</li>
              <li>Cookies and similar tracking technologies (see Section 6)</li>
            </ul>
          </div>

          <div>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver and manage our virtual summit production services</li>
              <li>Send you relevant information about our services, with your consent</li>
              <li>Improve our website, services, and user experience</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>Analyze usage patterns to optimize site performance</li>
            </ul>
          </div>

          <div>
            <h2>4. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul>
              <li><strong className="text-slate-900">Service providers:</strong> Third-party vendors who help us operate our business (email providers, hosting, analytics), bound by confidentiality agreements</li>
              <li><strong className="text-slate-900">Summit partners:</strong> If you register for a virtual summit, your registration information may be shared with event hosts and speakers as described at the time of registration</li>
              <li><strong className="text-slate-900">Legal requirements:</strong> When required by law, court order, or governmental authority</li>
              <li><strong className="text-slate-900">Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </div>

          <div>
            <h2>5. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes described in this policy, or as required by law. Contact form submissions are retained for up to 24 months. Client records are retained for the duration of the business relationship plus 3 years.</p>
          </div>

          <div>
            <h2>6. Cookies and Tracking</h2>
            <p>Our Site may use cookies and similar technologies to enhance your experience. These include:</p>
            <ul>
              <li><strong className="text-slate-900">Essential cookies:</strong> Required for the Site to function properly</li>
              <li><strong className="text-slate-900">Analytics cookies:</strong> Help us understand how visitors interact with the Site</li>
              <li><strong className="text-slate-900">Marketing cookies:</strong> Used to deliver relevant content and measure campaign effectiveness</li>
            </ul>
            <p className="mt-3">You can control cookies through your browser settings. Disabling certain cookies may affect Site functionality.</p>
          </div>

          <div>
            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li><strong className="text-slate-900">Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong className="text-slate-900">Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong className="text-slate-900">Deletion:</strong> Request deletion of your personal information, subject to legal obligations</li>
              <li><strong className="text-slate-900">Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong className="text-slate-900">Portability:</strong> Request your data in a structured, machine-readable format</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:info@360summits.com" className="text-purple-light hover:underline">info@360summits.com</a>.</p>
          </div>

          <div>
            <h2>8. Data Security</h2>
            <p>We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
          </div>

          <div>
            <h2>9. Third-Party Links</h2>
            <p>Our Site may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.</p>
          </div>

          <div>
            <h2>10. Children&apos;s Privacy</h2>
            <p>Our Site and Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 18, we will take steps to delete that information.</p>
          </div>

          <div>
            <h2>11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this page periodically. Your continued use of the Site after any changes constitutes acceptance of the updated policy.</p>
          </div>

          <div>
            <h2>12. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy or our data practices, contact us at:</p>
            <p className="mt-2">
              <strong className="text-slate-900">360Summits</strong><br />
              125 NW 13th St Suite B8, Boca Raton, FL 33432<br />
              <a href="mailto:info@360summits.com" className="text-purple-light hover:underline">info@360summits.com</a><br />
              <a href="tel:+17144361234" className="text-purple-light hover:underline">(714) 436-1234</a>
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
