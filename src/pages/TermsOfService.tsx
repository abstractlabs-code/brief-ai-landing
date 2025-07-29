import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: January 2024</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Briefly, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Service</h2>
              <p className="text-gray-700 mb-4">
                Briefly is an AI-powered meeting summarization service. You may use our service to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Upload and process meeting recordings</li>
                <li>Generate AI-powered summaries and insights</li>
                <li>Share summaries with team members</li>
                <li>Access historical meeting data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Obligations</h2>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Upload content that violates any laws or regulations</li>
                <li>Share login credentials with unauthorized parties</li>
                <li>Attempt to reverse engineer our AI algorithms</li>
                <li>Use the service for illegal or harmful activities</li>
                <li>Overload our systems with excessive requests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibent text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                The service and its original content, features, and functionality are and will remain 
                the exclusive property of Briefly and its licensors. You retain ownership of your meeting 
                content, but grant us a license to process it for summarization purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                In no event shall Briefly, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and bar access to the service immediately, 
                without prior notice or liability, under our sole discretion, for any reason whatsoever 
                and without limitation, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
              <p className="text-gray-700">
                Questions about the Terms of Service should be sent to us at:
                <br />
                Email: legal@briefly.ai
                <br />
                Address: 123 Tech Street, San Francisco, CA 94105
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;