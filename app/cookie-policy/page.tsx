"use client";

import React from "react";

const CookiePolicy: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

      <p className="mb-4">
        Welcome to our Cookie Policy. This policy explains how our restaurant
        website (`&quot;we`&quot;, `&quot;us`&quot;, `&quot;our`&quot;) uses
        cookies and similar technologies to enhance your browsing experience. By
        using our website, you consent to the use of cookies in accordance with
        this Cookie Policy.
      </p>

      <h2 className="text-2xl font-bold mb-4">What are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files that are stored on your device (computer,
        smartphone, tablet) when you visit a website. They help websites
        recognize your device and remember information about your visit, such as
        your preferences and actions. Cookies can improve your browsing
        experience by allowing websites to tailor content to your interests.
      </p>

      <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
      <p className="mb-4">
        Our restaurant website uses cookies for various purposes, including:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Essential Cookies:</strong> These cookies are necessary for
          the website to function properly. They allow you to navigate our site
          and use its features, such as accessing secure areas.
        </li>
        <li>
          <strong>Performance Cookies:</strong> These cookies help us understand
          how visitors interact with our website by collecting information about
          traffic and user behavior. This helps us improve our site’s
          performance and provide a better user experience.
        </li>
        <li>
          <strong>Functionality Cookies:</strong> These cookies enable us to
          remember your preferences, such as your language settings or login
          details, to provide a more personalized experience.
        </li>
        <li>
          <strong>Marketing Cookies:</strong> We may use these cookies to show
          you relevant ads and promotions, both on our website and on other
          platforms. These cookies track your browsing habits to deliver content
          based on your interests.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
      <p className="mb-4">
        We may also use third-party cookies from services such as Google
        Analytics to analyze website traffic and help us improve our site.
        Third-party cookies are managed by external providers, and their cookie
        policies apply to how they use your data.
      </p>

      <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
      <p className="mb-4">
        You can control the use of cookies on our website by adjusting your
        browser settings. Most browsers allow you to refuse cookies or alert you
        when cookies are being used. Please note that if you choose to disable
        cookies, certain features of our website may not function properly.
      </p>

      <h2 className="text-2xl font-bold mb-4">Changes to Our Cookie Policy</h2>
      <p className="mb-4">
        We may update this Cookie Policy from time to time to reflect changes in
        our practices or for legal and regulatory reasons. We encourage you to
        review this policy periodically to stay informed about our use of
        cookies.
      </p>

      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our Cookie Policy, please contact us at:
        <br />
        Email:{" "}
        <a
          href="mailto:info@foodking.net"
          className="text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          info@foodking.net
        </a>
        <br />
        Phone: +8802984757291
      </p>
    </div>
  );
};

export default CookiePolicy;
