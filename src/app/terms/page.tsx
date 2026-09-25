import type { Metadata } from "next";
import Link from "next/link";
import LegalPageTemplate from "@/components/legal/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Terms of Business",
  description:
    "The terms and conditions that apply when you use the Sigma Business Finance website or our credit broking services.",
};

export default function TermsPage() {
  return (
    <LegalPageTemplate
      eyebrow="Legal"
      title="Terms of Business"
      description="Please read these terms carefully before using our website or asking us to help you find funding."
      lastUpdated="18 September 2026"
      sections={[
        {
          heading: "1. Who we are",
          body: (
            <p>
              This website is operated by Sigma Business Finance Ltd
              (&ldquo;Sigma&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
              &ldquo;our&rdquo;), a company registered in England &amp; Wales
              under company number 15732726, with its registered office at
              Commerce Park, Campbeltown Road, Birkenhead, CH41 9HP. These terms apply
              whenever you browse this website or ask us to help you find
              business funding.
            </p>
          ),
        },
        {
          heading: "2. Agreeing to these terms",
          body: (
            <p>
              By using this website, submitting an enquiry, or asking us to
              check your eligibility for funding, you agree to be bound by
              these terms. If you do not agree with any part of them, please
              stop using the website and do not submit an enquiry.
            </p>
          ),
        },
        {
          heading: "3. Our role as a credit broker",
          body: (
            <>
              <p>
                Sigma Business Finance is a credit broker, not a lender.
                We work with a panel of
                specialist lenders and, where appropriate, introduce you to
                a lender or another broker who we reasonably believe can
                help with your funding requirements. We do not charge you a
                fee for this introduction service.
              </p>
              <p>
                We will receive commission from lenders. Different lenders
                pay different amounts depending on different commission
                models. For transparency, we work with the following
                commission models: fixed fee, fixed rate of commission,
                percentage of the amount you borrow, and rate for risk,
                which is based on the risk profile of the business. Further
                details of the commission model, calculation, and amount
                will be disclosed throughout the customer journey.
              </p>
              <p>
                Any funding you take out is a separate agreement between you
                and the lender concerned, and will be subject to that
                lender&rsquo;s own terms, rates and approval criteria.
              </p>
            </>
          ),
        },
        {
          heading: "4. Eligibility checks",
          body: (
            <p>
              Where we say an eligibility check has &ldquo;no impact on your
              credit score&rdquo;, this refers to the initial soft search we
              or our lending partners may carry out to give you an
              indication of the options available to you. If you go on to
              formally apply for a funding product, the lender may carry out
              a full credit check, which could be visible to other lenders
              and may affect your credit file.
            </p>
          ),
        },
        {
          heading: "5. No financial advice and no guarantee of funding",
          body: (
            <p>
              Nothing on this website, and nothing we say to you, constitutes
              financial, legal or tax advice. Submitting an enquiry does not
              guarantee that you will be offered funding, or offered funding
              on the terms you expect — all lending is subject to the
              relevant lender&rsquo;s own assessment and approval process.
            </p>
          ),
        },
        {
          heading: "6. Using this website",
          body: (
            <p>
              You may use this website for lawful purposes only. You must
              not misuse the website by knowingly introducing viruses or
              other malicious material, attempt to gain unauthorised access
              to it, or use it in a way that could damage, disable or
              impair its operation.
            </p>
          ),
        },
        {
          heading: "7. Intellectual property",
          body: (
            <p>
              Unless otherwise stated, all content on this website —
              including text, graphics, logos and images — is owned by or
              licensed to Sigma Business Finance Ltd. You may view and print
              pages for your own personal, non-commercial use, but you must
              not otherwise copy, reproduce or republish any part of this
              website without our prior written consent.
            </p>
          ),
        },
        {
          heading: "8. Links to other websites",
          body: (
            <p>
              This website may contain links to third-party websites,
              including lenders and partners. We are not responsible for the
              content or privacy practices of any website we do not operate,
              and including a link does not imply our endorsement of it.
            </p>
          ),
        },
        {
          heading: "9. Limitation of liability",
          body: (
            <p>
              We take reasonable care to keep the information on this
              website accurate and up to date, but we make no warranties or
              guarantees about its completeness or accuracy. To the extent
              permitted by law, we are not liable for any loss or damage
              arising from your use of, or inability to use, this website.
              Nothing in these terms excludes or limits our liability for
              death or personal injury caused by our negligence, fraud, or
              any other liability that cannot be excluded under English law.
            </p>
          ),
        },
        {
          heading: "10. Changes to these terms",
          body: (
            <p>
              We may update these terms from time to time to reflect changes
              to our services or to comply with legal requirements. The
              &ldquo;last updated&rdquo; date at the top of this page shows
              when these terms were last revised.
            </p>
          ),
        },
        {
          heading: "11. Governing law",
          body: (
            <p>
              These terms are governed by the laws of England &amp; Wales,
              and any disputes relating to them will be subject to the
              exclusive jurisdiction of the courts of England &amp; Wales.
            </p>
          ),
        },
        {
          heading: "12. Contact us",
          body: (
            <p>
              If you have any questions about these terms, please contact us
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
              . See also our{" "}
              <Link href="/privacy" className="text-primary-700 hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/cookie-policy" className="text-primary-700 hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
