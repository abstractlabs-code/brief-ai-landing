import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: January 2024</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                analyzing how you use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are necessary for the website to function properly. They enable core functionality 
                  such as security, network management, and accessibility.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously. This helps us improve our service.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies enable the website to provide enhanced functionality and personalization. 
                  They may be set by us or by third party providers.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Targeting Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies may be set through our site by our advertising partners to build a profile 
                  of your interests and show you relevant content.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services such as Google Analytics, which may place cookies on your device. 
                These services help us analyze website traffic and improve user experience.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Google Analytics - for website analytics</li>
                <li>Intercom - for customer support chat</li>
                <li>Stripe - for payment processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                <li>Third-party tools: You can use browser extensions to manage cookies</li>
                <li>Opt-out links: Some third-party services provide direct opt-out options</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Please note that disabling certain cookies may impact the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookie Retention</h2>
              <p className="text-gray-700 mb-4">
                Cookies are stored for different periods depending on their purpose:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Session cookies: Deleted when you close your browser</li>
                <li>Persistent cookies: Remain for a set period (typically 30 days to 2 years)</li>
                <li>Essential cookies: May remain longer to ensure proper website function</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time. We will notify you of any significant 
                changes by posting the new policy on this page and updating the "last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicy;