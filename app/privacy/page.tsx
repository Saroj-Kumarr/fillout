import React from "react";
import type { Metadata } from "next";

// Metadata for the page (SEO and browser tab)
export const metadata: Metadata = {
  title: "Privacy Policy | Fillout",
  description:
    "Learn about how Fillout handles your privacy, data collection, and user rights.",
};

// --- Reusable Components for Consistent Styling ---

// Main section component (H2 title)
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="mt-12">
    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
    <div className="mt-5 space-y-5 text-base text-gray-700 leading-relaxed">
      {children}
    </div>
  </section>
);

// Subsection component (H3 title)
const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="mt-6">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <div className="mt-4 space-y-4">{children}</div>
  </div>
);

// --- Data for the Summary Section ---
const summaryData = [
  {
    category:
      "Identifiers, such as contact details, real name, alias, address, telephone number, unique personal identifiers, online identifiers, IP address, email address, and account name.",
    collect: "Yes",
    disclose: "Yes",
    sell: "No",
  },
  {
    category:
      "Categories of PI described in the California Consumer Privacy Act (including name, email, phone number, mailing address, birthday)",
    collect: "Yes",
    disclose: "Yes",
    sell: "No",
  },
  {
    category:
      "Commercial information: (Transaction information, purchase history, financial details, and payment information)",
    collect: "Yes (through third-party payment processors only)",
    disclose: "Yes",
    sell: "No",
  },
  {
    category: "Geolocation data: (device location)",
    collect: "Yes",
    disclose: "Yes",
    sell: "No",
  },
  {
    category:
      "Internet or other electronic network activity information: (Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements)",
    collect: "No",
    disclose: "Yes",
    sell: "No",
  },
  {
    category:
      "Inferences drawn from other personal information to create a profile about a consumer: (for example, an individual’s preferences and characteristics)",
    collect: "No",
    disclose: "No",
    sell: "No",
  },
];

// --- Final Page Component ---
export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <main className="max-w-4xl mx-auto pt-32 md:pt-28 px-4 py-16 sm:py-24">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Fillout™ Privacy Policy
          </h1>
          <p className="mt-3 text-base text-gray-500">
            Last modified: April 15, 2025
          </p>
        </div>

        {/* Introductory Content */}
        <div className="space-y-6 text-base text-gray-700 leading-relaxed">
          <p>
            Restly, Inc., d.b.a. Fillout... (together with the Site, the
            “Services”).
          </p>
          <p>
            Fillout respects and protects the privacy of the users... we may
            collect from you.
          </p>
          <p>By using the Services, you agree to this Privacy Policy...</p>
        </div>

        {/* Summary of Data Collection Section */}
        <Section title="Summary of Data Collection, Disclosure and Sale">
          <p>Here is a short summary of data... on our privacy practices.</p>
          <div className="mt-6 space-y-8 text-base">
            {summaryData.map((item, index) => (
              <div key={index}>
                <p className="font-medium text-gray-800">{item.category}</p>
                <div className="mt-3 space-y-2 text-gray-600">
                  <p>Do we collect? {item.collect}</p>
                  <p>
                    Will we disclose this data as part of our business?{" "}
                    {item.disclose}
                  </p>
                  <p>Will we sell this data? {item.sell}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* --- NEWLY ADDED SECTIONS --- */}

        <Section title="Types of Information Collected">
          <SubSection title="Personal Data">
            <p>
              &apos;Personal Data&quot; is information by which you may be
              personally identified. Fillout may collect the following Personal
              Data from you:
            </p>
            <div className="pl-4 mt-4 space-y-2 text-gray-700">
              <p>Name;</p>
              <p>Email;</p>
              <p>Financial information for payment processing; and</p>
              <p>
                Username and/or Password (Optional to log in to the Services).
              </p>
            </div>
            <p>
              Your payment information may be collected by third-party vendors,
              including our payment processor, Stripe. Such identifying
              information is not collected or stored by Fillout.
            </p>
            <p>
              In addition to the Services storing the data that is submitted by
              third parties through the Forms, you may choose to store such data
              externally from the Services. With respect to the data that you or
              your designated data storage provider stores, you shall be solely
              responsible for your own data storage practices of any such data
              that you collect from third parties through the Forms.
            </p>
            <p>
              Additionally, an End User may request certain information from
              you, including personal information, through a Form created
              through the Services. If you have any questions about the content
              of any Form, please contact the person or entity that created the
              Form as they may have their own privacy policies. Fillout is not
              responsible for the content of any Form, or for the content of any
              responses submitted to any Form.
            </p>
          </SubSection>
        </Section>

        <Section title="How we collect information">
          <p>We collect information about you in a couple of ways:</p>
          <div className="space-y-4 mt-4">
            <p>
              (1) when you provide it to us directly through an interaction with
              us; for example
            </p>
            <div className="pl-6 space-y-2">
              <p>When you register for the Services;</p>
              <p>When you fill out feedback forms and surveys;</p>
              <p>When you enter contests;</p>
              <p>When you participate in forums;</p>
              <p>When you pay for Services;</p>
              <p>
                When you contact us for service requests via email or live chat
              </p>
            </div>
            <p>
              (2) through automated collection methods like cookies or log
              files;
            </p>
            <p>
              (3) when we obtain the information through a third party,
              including third party data verification entities, payment
              processors, or when you choose to login via a connected email
              address.
            </p>
          </div>
        </Section>

        <Section title="Why we collect and how we use your information. (Legal Basis)">
          <p>
            We collect and use your Personal Data when we have a legitimate
            purpose to do so, including the following reasons:
          </p>
          <div className="pl-4 space-y-3 mt-4">
            <p>to verify your eligibility to use the Services;</p>
            <p>
              when it is necessary for the general functioning of the Services,
              including to facilitate payment or to contact you;
            </p>
            <p>
              when it is necessary in connection with any contract you have
              entered into with us (including our terms of service) or to take
              steps prior to entering into a contract with us;
            </p>
            <p>
              when we have obtained your or a third party&apos;s prior consent;
            </p>
            <p>
              when we have a legitimate interest in processing your information
              for the purpose of providing or improving our Services;
            </p>
          </div>
        </Section>

        <Section title="Accessing and Controlling Your Information">
          <p>
            If you would like to prevent us from collecting your information
            completely, you should cease use of our Services. You can also
            control certain data via these other methods:
          </p>
          <div className="space-y-4 mt-4">
            <p>
              <strong className="font-semibold text-gray-800">
                Correction capabilities:
              </strong>{" "}
              You have the ability to access and correct any inaccuracies in
              your personally identifiable information by emailing us at our
              email address provided in the Questions and Comments section
              below...
            </p>
            <p>
              <strong className="font-semibold text-gray-800">
                Opt-out of non-essential electronic communications:
              </strong>{" "}
              You may opt out of receiving newsletters and other non-essential
              messages by using the &apos;unsubscribe&apos; function included in
              all such messages...
            </p>
            <p>
              <strong className="font-semibold text-gray-800">
                Optional information:
              </strong>{" "}
              You can always choose not to fill in non-mandatory fields when you
              submit any form linked to our services.
            </p>
          </div>
          <p className="mt-6">
            Residents of certain states in the United States have statutory data
            rights. We attempt to provide the same control and rights over your
            data no matter where you choose to live in the United States. As an
            End User of the Services, you have the following control over your
            data:
          </p>
          <div className="space-y-4 mt-4">
            <p>
              <strong className="font-semibold text-gray-800">
                Right to access:
              </strong>{" "}
              You have the right to access (and obtain a copy of, if required)
              the categories of personal information that we hold about you...
            </p>
          </div>
        </Section>
        <>
          {/* --- Section: Changes to the Privacy Policy --- */}
          <section className="mt-10">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
              Changes to the Privacy Policy
            </h2>
            <div className="mt-4 space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                It is our policy to post any changes we make to our Privacy
                Policy on this page of the Site. If we make material changes to
                how we treat our End Users&apos; or Visitors&apos; Personal
                Data, we will notify you by email to the primary email address
                specified in your account or through a prominent notice on the
                Site. Such changes will be effective when posted. The date the
                Privacy Policy was last revised is identified at the top of the
                page. Your continued use of our Services following the posting
                of any modification to this Privacy Policy shall constitute your
                acceptance of the amendments to this Privacy Policy. You can
                choose to discontinue use of the Service if you do not accept
                any modified version of this Privacy Policy.
              </p>
            </div>
          </section>

          {/* --- Section: Questions and Comments --- */}
          <section className="mt-10">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
              Questions and Comments
            </h2>
            <div className="mt-4 space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                If you have any questions or comments about this Privacy Policy,
                or if you would like to file a request about the data we hold or
                file a deletion request, please contact our Privacy team by
                email at{" "}
                <a
                  href="mailto:privacy@fillout.com"
                  className="text-blue-600 hover:underline"
                >
                  privacy@fillout.com
                </a>{" "}
                or by mail at:
              </p>
              <address className="not-italic mt-4 space-y-1">
                <span>Restly, Inc., d.b.a. Fillout</span>
                <span>Attn: Privacy Team</span>
                <span>9450 SW Gemini Dr</span>
                <span>PMB 39088</span>
                <span>Beaverton, Oregon 97008.</span>
              </address>
            </div>
          </section>

          {/* --- Section: Representation for Data Subjects in the EU --- */}
          <section className="mt-10">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
              Representation for Data Subjects in the EU
            </h2>
            <div className="mt-4 space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                We value your privacy and your rights as a data subject and have
                therefore appointed Prighter Group with its local partners as
                our privacy representative and your point of contact in the EU.
              </p>
            </div>
          </section>
        </>
        <>
          {/* 
    This content continues directly from the "Representation for Data Subjects in the EU" section.
    You can place this inside that section's wrapping div.
  */}
          <p className="mt-4">
            Prighter Group gives you an easy way to exercise your
            privacy-related rights (e.g. requests to access or erase personal
            data). If you want to contact us via our representative Prighter
            Group or make use of your data subject rights, please visit{" "}
            <a
              href="https://prighter.com/q/11880772674"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://prighter.com/q/11880772674
            </a>
          </p>

          {/* --- Section: Accessing and Deleting Your Data --- */}
          <section className="mt-10">
            <h2 className="text-lg font-bold text-gray-900">
              Accessing and Deleting Your Data
            </h2>
            <div className="mt-4 space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                If you would like to access a copy of your data, you may submit
                a request via email at{" "}
                <a
                  href="mailto:privacy@fillout.com"
                  className="text-blue-600 hover:underline"
                >
                  privacy@fillout.com
                </a>
                . We will provide you with the requested information within a
                reasonable time frame, in compliance with applicable laws.
              </p>
              <p>
                Should you wish to delete your account data, please send an
                email to{" "}
                <a
                  href="mailto:privacy@fillout.com"
                  className="text-blue-600 hover:underline"
                >
                  privacy@fillout.com
                </a>
                .
              </p>
            </div>
          </section>

          {/* --- Final Disclosure Sections --- */}
          <div className="mt-12 space-y-10 border-t border-gray-200 pt-10">
            {/* Google APIs Disclosure */}
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 underline">
                Fillout™ Google APIs Limited Use Disclosure
              </h3>
              <div className="mt-4 text-base text-gray-700 leading-relaxed">
                <p className="mb-3">Effective Date: April 15, 2025</p>
                <p>
                  Fillout&apos;s use and transfer to any other app of
                  information received from Google APIs will adhere to{" "}
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Google API Services User Data Policy
                  </a>
                  , including the Limited Use requirements.
                </p>
              </div>
            </div>

            {/* Google Workspace APIs Disclosure */}
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 underline">
                Fillout™ Google Workspace APIs Limited Use of User Data
              </h3>
              <div className="mt-4 text-base text-gray-700 leading-relaxed">
                <p className="mb-3">Effective Date: April 15, 2025</p>
                <p>
                  Fillout’s use and transfer to any other app of information
                  received from Google Workspace APIs will adhere to{" "}
                  <a
                    href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Google Workspace APIs User Data and Developer Policy
                  </a>
                  . User data obtained through Google Workspace APIs will not be
                  used to develop, improve, or train generalized AI and/or
                  machine learning models.
                </p>
              </div>
            </div>
          </div>
        </>
      </main>
    </div>
  );
}
