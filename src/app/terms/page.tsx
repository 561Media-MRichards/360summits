import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for 360Summits virtual summit production services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="pt-20">
      <section className="bg-pastel-cream py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold text-slate-900 md:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-slate-500">Last updated: March 6, 2026</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 space-y-10 text-slate-600 leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">

          <div>
            <h2>1. Agreement to Terms</h2>
            <p>By accessing or using the 360Summits website at 360summits.com ("Site"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access the Site or use our services.</p>
          </div>

          <div>
            <h2>2. Services</h2>
            <p>360Summits provides virtual summit production services including event planning, web design, email marketing, speaker coordination, and related digital marketing services ("Services"). The specific scope of Services for each client is defined in individual service agreements or proposals.</p>
          </div>

          <div>
            <h2>3. Use of the Site</h2>
            <p>You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use the Site in any way that violates applicable local, state, national, or international law</li>
              <li>Attempt to gain unauthorized access to any portion of the Site or any systems connected to the Site</li>
              <li>Use the Site to transmit any unsolicited promotional or advertising material</li>
              <li>Impersonate or attempt to impersonate 360Summits, a 360Summits employee, or any other person</li>
            </ul>
          </div>

          <div>
            <h2>4. Intellectual Property</h2>
            <p>The Site and its contents, features, and functionality — including text, graphics, logos, icons, images, and software — are owned by 360Summits and are protected by United States and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on the Site without our prior written consent.</p>
          </div>

          <div>
            <h2>5. Client Content</h2>
            <p>When you provide content to 360Summits in connection with our Services (including text, images, video, and other materials), you represent that you own or have the necessary rights to use and authorize us to use that content. You retain ownership of your content, and grant 360Summits a non-exclusive license to use it solely for providing the Services.</p>
          </div>

          <div>
            <h2>6. Payment Terms</h2>
            <p>Payment terms for Services are outlined in individual service agreements or proposals. Unless otherwise specified, invoices are due upon receipt. 360Summits reserves the right to suspend or terminate Services for accounts with overdue balances.</p>
          </div>

          <div>
            <h2>7. Disclaimer of Warranties</h2>
            <p>The Site and Services are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. 360Summits does not guarantee specific results from the use of our Services, including but not limited to registration numbers, revenue, or email list growth. Past performance metrics referenced on the Site are illustrative and not guarantees of future results.</p>
          </div>

          <div>
            <h2>8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, 360Summits shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or Services. Our total liability for any claim arising from these Terms or our Services shall not exceed the amount paid by you to 360Summits in the twelve (12) months preceding the claim.</p>
          </div>

          <div>
            <h2>9. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless 360Summits, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys&apos; fees) arising from your use of the Site, violation of these Terms, or infringement of any third-party rights.</p>
          </div>

          <div>
            <h2>10. Termination</h2>
            <p>We may terminate or suspend your access to the Site at any time, without prior notice, for any reason. Termination of Services is governed by the terms of your individual service agreement.</p>
          </div>

          <div>
            <h2>11. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the state or federal courts located in Palm Beach County, Florida.</p>
          </div>

          <div>
            <h2>12. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of the Site after any changes constitutes acceptance of the new Terms.</p>
          </div>

          <div>
            <h2>13. Contact</h2>
            <p>If you have questions about these Terms of Service, contact us at:</p>
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
