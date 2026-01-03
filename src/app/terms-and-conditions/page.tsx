import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions",
}
export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: October 12, 2025</p>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using this application, you accept and agree to be bound by the terms
              and provision of this agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Use License</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Permission is granted to temporarily access the materials on this application for
              personal, non-commercial transitory viewing only. This is the grant of a license, not
              a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained in the application</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>
                Transfer the materials to another person or mirror the materials on any other server
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed">
              When you create an account with us, you must provide information that is accurate,
              complete, and current at all times. Failure to do so constitutes a breach of the
              Terms, which may result in immediate termination of your account. You are responsible
              for safeguarding the password that you use to access the service and for any
              activities or actions under your password.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Prohibited Uses</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You may use the service only for lawful purposes and in accordance with these Terms.
              You agree not to use the service:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                In any way that violates any applicable national or international law or regulation
              </li>
              <li>
                To transmit, or procure the sending of, any advertising or promotional material
                without our prior written consent
              </li>
              <li>
                To impersonate or attempt to impersonate the Company, a Company employee, another
                user, or any other person or entity
              </li>
              <li>
                In any way that infringes upon the rights of others, or in any way is illegal,
                threatening, fraudulent, or harmful
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              The service and its original content, features, and functionality are and will remain
              the exclusive property of the Company and its licensors. The service is protected by
              copyright, trademark, and other laws of both the United States and foreign countries.
              Our trademarks may not be used in connection with any product or service without the
              prior written consent of the Company.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              The materials on this application are provided on an 'as is' basis. We make no
              warranties, expressed or implied, and hereby disclaim and negate all other warranties
              including, without limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of intellectual property or
              other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              7. Limitations of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall the Company or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business
              interruption) arising out of the use or inability to use the materials on this
              application, even if the Company or a Company authorized representative has been
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              8. Modifications to Service
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to withdraw or amend our service, and any service or material we
              provide via the application, in our sole discretion without notice. We will not be
              liable if for any reason all or any part of the service is unavailable at any time or
              for any period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws
              of the jurisdiction in which the Company operates, and you irrevocably submit to the
              exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any
              time. If a revision is material, we will try to provide at least 30 days' notice prior
              to any new terms taking effect. What constitutes a material change will be determined
              at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="text-gray-700 mt-2">
              Email: <span className="text-blue-600">legal@yourcompany.com</span>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            By using this application, you acknowledge that you have read and understand these Terms
            and Conditions and agree to be bound by them.
          </p>
        </div>
      </div>
    </div>
  )
}
