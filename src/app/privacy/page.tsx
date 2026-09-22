import type { Metadata } from "next";
import Link from "next/link";
import LegalPageTemplate from "@/components/legal/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sigma Business Finance collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPageTemplate
      eyebrow="Legal"
      title="Privacy Policy"
      description="This policy explains what personal information we collect, why we collect it, and the rights you have over it."
      lastUpdated="18 September 2026"
      sections={[
        {
          heading: "1. Who we are",
          body: (
            <p>
              Sigma Business Finance Ltd (company number 15732726, registered
              office Commerce Park, Campbeltown Road, Birkenhead, CH41 9HP) is the data
              controller for the personal information described in this
              policy. Our ICO registration number is{" "}
              <span className="font-medium text-neutral-900">
                [ICO registration number]
              </span>
              .
            </p>
          ),
        },
        {
          heading: "2. Information we collect",
          body: (
            <>
              <p>We collect information you give us directly, including:</p>
              <ul className="list-disc pl-5">
                <li>
                  Contact details — such as your name, company name, email
                  address and phone number, when you submit an eligibility
                  check, apply for funding, or contact us.
                </li>
                <li>
                  Business and funding details — such as how long you&rsquo;ve
                  been trading, the amount and purpose of funding you&rsquo;re
                  looking for, and how soon you need it.
                </li>
                <li>
                  Any other information you choose to share with us, for
                  example in an email, phone call or application form.
                </li>
              </ul>
              <p>
                We may also collect limited technical information
                automatically when you browse this website — see our{" "}
                <Link href="/cookie-policy" className="text-primary-700 hover:underline">
                  Cookie Policy
                </Link>{" "}
                for details.
              </p>
            </>
          ),
        },
        {
          heading: "3. How we use your information",
          body: (
            <>
              <p>We use your information to:</p>
              <ul className="list-disc pl-5">
                <li>
                  Assess your eligibility and match you with suitable lenders
                  from our panel;
                </li>
                <li>
                  Share your enquiry with the relevant lender(s) or partner
                  broker(s) so they can consider your application;
                </li>
                <li>Respond to your questions and provide customer support;</li>
                <li>
                  Keep records for our own regulatory, accounting and
                  administrative purposes; and
                </li>
                <li>
                  Improve this website and our services, and, where you have
                  agreed to hear from us, let you know about other products
                  that may be relevant to you.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "4. Our lawful basis for processing",
          body: (
            <p>
              We process your information because it is necessary to take
              steps at your request before entering into an agreement (for
              example, matching you with a lender), because we have a
              legitimate interest in operating and improving our brokerage
              service, and, where required, because you have given us your
              consent — which you can withdraw at any time.
            </p>
          ),
        },
        {
          heading: "5. Who we share your information with",
          body: (
            <p>
              As a credit broker, we share the information relevant to your
              enquiry with lenders and partner brokers on our panel so they
              can assess whether they can help you. We may also share
              information with service providers who support our website and
              operations (for example, hosting or IT providers) under
              contracts that require them to keep your data secure. We do
              not sell your personal information to third parties.
            </p>
          ),
        },
        {
          heading: "6. How long we keep your information",
          body: (
            <p>
              We keep your information for as long as necessary to provide
              our service to you, to meet our legal and regulatory
              obligations, and to resolve any disputes. Retention periods
              vary depending on the type of information and the purpose it
              was collected for.
            </p>
          ),
        },
        {
          heading: "7. Your rights",
          body: (
            <>
              <p>Under UK data protection law, you have the right to:</p>
              <ul className="list-disc pl-5">
                <li>Ask us for a copy of the personal information we hold about you;</li>
                <li>Ask us to correct inaccurate or incomplete information;</li>
                <li>Ask us to delete your information, in certain circumstances;</li>
                <li>Ask us to restrict or object to how we use your information;</li>
                <li>Ask us to transfer your information to another organisation; and</li>
                <li>Withdraw any consent you have previously given us.</li>
              </ul>
              <p>
                To exercise any of these rights, contact us using the details
                below. You also have the right to complain to the
                Information Commissioner&rsquo;s Office (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-700 hover:underline"
                >
                  ico.org.uk
                </a>
                , though we&rsquo;d welcome the chance to resolve any concerns
                directly first.
              </p>
            </>
          ),
        },
        {
          heading: "8. Keeping your information secure",
          body: (
            <p>
              We use appropriate technical and organisational measures to
              protect your personal information against unauthorised access,
              loss or misuse. No method of transmission over the internet is
              completely secure, but we work to protect your information at
              every stage we control.
            </p>
          ),
        },
        {
          heading: "9. Children",
          body: (
            <p>
              Our services are intended for businesses and individuals aged
              18 or over. We do not knowingly collect personal information
              from children.
            </p>
          ),
        },
        {
          heading: "10. Changes to this policy",
          body: (
            <p>
              We may update this policy from time to time, for example to
              reflect changes in our services or the law. The &ldquo;last
              updated&rdquo; date at the top of this page shows when it was
              last revised.
            </p>
          ),
        },
        {
          heading: "11. Contact us",
          body: (
            <p>
              If you have any questions about this policy or how we handle
              your information, please contact us on{" "}
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
