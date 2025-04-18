export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground mt-2">Last updated: April 18, 2025</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-2">Introduction</h2>
          <p>
            This Privacy Policy outlines how I collect, use, and protect your information when you visit my portfolio
            website. I respect your privacy and am committed to protecting your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Information I Collect</h2>
          <p className="mb-4">I collect minimal personal information through this website:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Messages sent through the contact form:</strong> When you use the contact form, your name, email,
              subject, and message are processed to respond to your inquiries.
            </li>
            <li>
              <strong>Messages sent through the chat interface:</strong> When you use the ChatWithMe feature, your
              messages are processed through the OpenAI API.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with my website, such as pages visited and
              time spent on the site.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">How I Use Your Information</h2>
          <p className="mb-4">I use the collected information for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>To provide and maintain the chat feature and contact functionality</li>
            <li>To respond to your inquiries and messages</li>
            <li>To improve my website and user experience</li>
            <li>To analyze usage patterns and optimize performance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Media and Content</h2>
          <p className="mb-4">This website contains various media elements:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Images and Carousels:</strong> The website displays images, including photo carousels in journey
              posts. These images are stored on my server and loaded when you visit the relevant pages.
            </li>
            <li>
              <strong>Interactive Elements:</strong> Features like animated buttons and other
              interactive elements use JavaScript to enhance your experience.
            </li>
            <li>
              <strong>Embedded Content:</strong> Some pages may contain embedded content (e.g., videos, images) from
              other websites that may collect data about your interaction with that embedded content.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Third-Party Services</h2>
          <p className="mb-4">This website uses the following third-party services:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Vercel:</strong> For hosting and analytics
            </li>
            <li>
              <strong>OpenAI:</strong> For processing chat messages
            </li>
            <li>
              <strong>Email Service Provider(Gmail):</strong> For processing contact form submissions
            </li>
          </ul>
          <p className="mt-4">
            Each of these services has their own privacy policies that govern how they use your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Cookies and Local Storage</h2>
          <p className="mb-4">This website uses cookies and local storage for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>To remember your theme preference (light/dark mode)</li>
            <li>To improve site functionality and user experience</li>
          </ul>
          <p className="mt-4">
            You can control cookie settings through your browser preferences. Disabling cookies may affect some
            functionality of the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Data Security</h2>
          <p>
            I implement appropriate security measures to protect your personal information. However, no method of
            transmission over the Internet or electronic storage is 100% secure. While I strive to use commercially
            acceptable means to protect your personal data, I cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Your Rights</h2>
          <p className="mb-4">Depending on your location, you may have the following rights regarding your data:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>The right to access information I have about you</li>
            <li>The right to request that I delete any personal information I have about you</li>
            <li>The right to object to processing of your personal data</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Changes to This Privacy Policy</h2>
          <p>
            I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact me using the contact form on this
            website or at thezayhub@gmail.com.
          </p>
        </section>
      </div>
    </div>
  )
}

  