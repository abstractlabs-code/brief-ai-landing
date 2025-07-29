import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: January 2024</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support. This may include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Name and email address</li>
                <li>Meeting recordings and transcriptions</li>
                <li>Usage data and preferences</li>
                <li>Device and browser information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process meeting recordings and generate summaries</li>
                <li>Send you technical notices and support messages</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to collect usage information, 
                improve our services, and provide personalized experiences. See our Cookie Policy for details.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services for analytics, cloud storage, and AI processing. 
                These services have their own privacy policies governing the use of your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights (GDPR)</h2>
              <p className="text-gray-700 mb-4">If you are in the European Union, you have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your data</li>
                <li>Restrict processing</li>
                <li>Data portability</li>
                <li>Object to processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy, please contact us at: 
                <br />
                Email: privacy@briefly.ai
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

export default PrivacyPolicy;