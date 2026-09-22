import type { Metadata } from "next";
import Link from "next/link";
import LegalPageTemplate from "@/components/legal/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Sigma Business Finance uses cookies on this website.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPageTemplate
      eyebrow="Legal"
      title="Cookie Policy"
      description="This policy explains what cookies are, and how we use them on this website."
      lastUpdated="18 September 2026"
      sections={[
        {
          heading: "1. What are cookies",
          body: (
            <p>
              Cookies are small text files that a website places on your
              device when you visit it. They&rsquo;re widely used to make
              websites work, or to work more efficiently, as well as to
              provide information to the owners of the site.
            </p>
          ),
        },
        {
          heading: "2. How we use cookies",
          body: (
            <p>
              We keep our use of cookies to a minimum. This website
              currently only uses strictly necessary cookies required for
              the site to function correctly — for example, to remember your
              preferences as you navigate between pages during a single
              visit. We do not currently use analytics, advertising or
              social media tracking cookies.
            </p>
          ),
        },
        {
          heading: "3. Strictly necessary cookies",
          body: (
            <p>
              These cookies are essential for the website to work properly
              and cannot be switched off. They are usually only set in
              response to actions you take, such as navigating between
              pages, and do not store any personally identifiable
              information.
            </p>
          ),
        },
        {
          heading: "4. Analytics and marketing cookies",
          body: (
            <p>
              We don&rsquo;t currently set analytics or marketing cookies on
              this website. If that changes in the future — for example, if
              we add website analytics to help us understand how the site is
              used — we will update this policy and ask for your consent
              first, where required by law.
            </p>
          ),
        },
        {
          heading: "5. Third-party links",
          body: (
            <p>
              Our WhatsApp chat button and any social media links take you
              to third-party services outside this website. Those services
              may set their own cookies once you leave our site, in
              accordance with their own cookie and privacy policies, which
              we&rsquo;d encourage you to review.
            </p>
          ),
        },
        {
          heading: "6. Managing cookies",
          body: (
            <p>
              Most web browsers let you control cookies through their
              settings, including blocking or deleting them. Because
              strictly necessary cookies are required for the website to
              function, blocking them may affect how parts of the site work.
            </p>
          ),
        },
        {
          heading: "7. Changes to this policy",
          body: (
            <p>
              We may update this policy from time to time, for example if
              the cookies we use change. The &ldquo;last updated&rdquo; date
              at the top of this page shows when it was last revised. See
              also our{" "}
              <Link href="/privacy" className="text-primary-700 hover:underline">
                Privacy Policy
              </Link>{" "}
              for more on how we handle personal information.
            </p>
          ),
        },
        {
          heading: "8. Contact us",
          body: (
            <p>
              If you have any questions about this policy, please contact us
              on{" "}
              <a href="tel:01518373528" className="text-primary-700 hover:underline">
                0151 837 3528
              </a>{" "}
              or{" "}
              <a
                href="mailto:contact@sigmabusinessfinance.co.uk"
                className="text-primary-700 hover:underline"
              >
                contact@sigmabusinessfinance.co.uk
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
