export default function Privacy() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
            Last updated: November 4, 2025
          </p>

          <div className="space-y-8 text-zinc-600 dark:text-zinc-400">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We collect information that you provide directly to us, including when you create an account, 
                use our services, or communicate with us. This may include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communications with us</li>
                <li>Usage data and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                3. Information Sharing
              </h2>
              <p className="mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Service providers who perform services on our behalf</li>
                <li>Professional advisors such as lawyers and accountants</li>
                <li>Law enforcement when required by law</li>
                <li>Other parties with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                4. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                5. Your Rights
              </h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Export your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                6. Cookies and Tracking
              </h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing 
                activities. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                7. Children's Privacy
              </h2>
              <p>
                Our services are not directed to children under 13. We do not knowingly collect personal 
                information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by 
                posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                9. Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <p className="mt-4">
                Email: privacy@yourcompany.com<br />
                Address: 123 Business Street, Suite 100, San Francisco, CA 94102
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

