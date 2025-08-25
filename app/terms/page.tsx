import React from "react";
import type { Metadata } from "next";

// Metadata for the page (SEO and browser tab title)
export const metadata: Metadata = {
  title: "Terms of Service | Fillout",
  description:
    "Read the Terms of Service for using the Fillout platform and services.",
};

// --- Reusable Components for Consistent Styling ---

// Section component for main numbered titles (e.g., "1. Acceptance of Terms")
const Section: React.FC<{
  number: number;
  title: string;
  children: React.ReactNode;
}> = ({ number, title, children }) => (
  <section className="mt-10">
    <h2 className="text-xl font-bold text-gray-900">
      {number}. {title}
    </h2>
    <div className="mt-4 space-y-4 text-base text-gray-700 leading-relaxed">
      {children}
    </div>
  </section>
);

// Subsection component for non-numbered subheadings (e.g., "Fillout Account Creation")
const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="mt-6">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <div className="mt-4 space-y-4">{children}</div>
  </div>
);

// A simple component to bold text, making the main content cleaner
const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <strong className="font-semibold text-gray-800">{children}</strong>
);

// --- Main Page Component ---
export default function TermsOfServicePage() {
  return (
    <div className="bg-white font-sans">
      <main className="max-w-4xl mx-auto px-4 pt-32 md:pt-28 py-16 sm:py-24">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-semibold text-gray-800 tracking-wide border-b border-gray-300 inline-block pb-1">
            Fillout™ Terms of Service
          </h1>
        </div>

        <p className="mb-8 text-base text-gray-600">
          Effective Date: July 2, 2022
        </p>

        {/* Introductory Paragraph */}
        <div className="text-base text-gray-700 leading-relaxed">
          <p>
            Fillout is a platform provided and operated by Restly, Inc., a
            Delaware corporation (“<Strong>Fillout</Strong>,” “
            <Strong>we</Strong>,” “<Strong>us</Strong>,” and/or “
            <Strong>our</Strong>”), located at https://www.fillout.com/
            (including all the areas available through such platform, the “
            <Strong>Site</Strong>”) and the Services (as defined below). Before
            using our Services, please carefully read these Terms of Service (“
            <Strong>Terms</Strong>” or “<Strong>Agreement</Strong>”). These
            Terms govern your use of the Services.
          </p>
        </div>

        {/* Section 1: Acceptance of Terms */}
        <Section number={1} title="Acceptance of Terms">
          <p>
            By creating an account or using the Services, you (“
            <Strong>User</Strong>” or “<Strong>you</Strong>”) acknowledge and
            agree to these legally binding Terms. You also agree to the Fillout
            Privacy Policy (“<Strong>Privacy Policy</Strong>”) and all other
            operational rules, policies, and procedures that may be published or
            otherwise made available on the Services, which are incorporated by
            reference.
          </p>
          <p>
            You agree to use the Services only for lawful purposes... and comply
            with this Agreement.
          </p>
        </Section>

        {/* --- NEWLY ADDED SECTIONS --- */}

        {/* Section 2: Fillout Form Building Services */}
        <Section number={2} title="Fillout Form Building Services">
          <p>
            Fillout provides services for building dynamic, multi-step web forms
            (“<Strong>Forms</Strong>”) and related services, features, content,
            applications or products, together with the Site, the “
            <Strong>Services</Strong>”). Our Services may change from time to
            time and we reserve the right to modify, suspend, or discontinue the
            Services (including, but not limited to, the availability of any
            feature, integration, or Content), whether temporarily or
            permanently, at any time for any reason. You agree that Fillout
            shall not be liable to you or to any third party for any
            modification, suspension, or discontinuation of the Services. We may
            also impose limits on certain features and services or restrict your
            access to parts or all of the Services without notice or liability.
          </p>
          <p>
            We may make Forms and certain software tools available to you in
            order to access and use the Services in accordance with these Terms.
            Depending on your subscription plan for the Services, you may choose
            to have us store the data, materials, or other input that you
            collect through use of the Forms (“<Strong>Form Input</Strong>”) or
            you may choose to store the Form Input on your own systems or with a
            cloud infrastructure provider of your choice.
          </p>
        </Section>

        {/* Section 3: Fillout Account Creation, Use, and Conduct */}
        <Section number={3} title="Fillout Account Creation, Use, and Conduct">
          <SubSection title="Fillout Account Creation">
            <p>
              In order to use certain aspects of the Services, Users are
              required to have a Fillout account (“<Strong>Account</Strong>,” as
              further defined below) and provide certain information about such
              Account holder as prompted by the account registration form. You
              must be at least eighteen (18) years of age, or the age of
              majority in your applicable state, to register an account.
            </p>
            <p>
              You represent and warrant that the information in your Account,
              and any other information you otherwise provide to us, is
              accurate, current, and complete information, and agree to update
              it and keep it accurate, current, and complete. We reserve the
              right to suspend or terminate your Account or your access to the
              Services if any information provided to us proves to be untrue,
              inaccurate, not current, or incomplete. You are solely responsible
              for maintaining the confidentiality of your Account and log-in
              credentials, and you agree to accept responsibility for all
              activities, charges, and damages that occur under your Account.
              EACH INDIVIDUAL USER MUST MAINTAIN AN INDIVIDUAL USER ACCOUNT WITH
              UNIQUE LOG-IN CREDENTIALS, INCLUDING USERNAME AND PASSWORD, IF
              APPLICABLE. You shall not directly or indirectly modify,
              translate, or otherwise create derivative works of any part of the
              Services; You shall not directly or indirectly license, copy,
              sell, rent, lease, distribute, or otherwise transfer any of the
              rights that you receive hereunder or commercially exploit the
              Services, in whole or in part; You shall not directly or
              indirectly take any action that constitutes unsolicited or
              unauthorized advertising or promotional material or any junk mail,
              spam, or chain letters; You shall not directly or indirectly
              suggest or otherwise create a false appearance of affiliation with
              Fillout or indicate that Fillout otherwise endorses, sponsors, or
              is affiliated with any products or services, nor impersonate any
              person or entity, including any employee or representative of
              Fillout; You shall not directly or indirectly introduce into the
              Services any materials containing software viruses or any other
              computer codes, files, or programs that are designed or intended
              to disrupt, damage, limit, or interfere with the proper function
              of any software, hardware, or telecommunications equipment or to
              damage or obtain unauthorized access to any system, data,
              password, or other information of Fillout or any third party; You
              shall not directly or indirectly take any action that imposes or
              may impose (as determined by Fillout in its sole discretion) an
              unreasonable or disproportionately large load on Fillout’s or its
              third-party providers’ infrastructure; interfere or attempt to
              interfere with the proper working of the Service or any activities
              conducted on the Service; run any form of auto-responder or “spam”
              on the Service; or use manual or automated software, devices, or
              other processes to “crawl” or “spider” any page of the Site; You
              shall not sell or otherwise transfer your Account; and You are
              prohibited from using the Services in a manner that: constitutes a
              direct or specific threat of violence to others; is in furtherance
              of illegal activities; is harassing, hateful, libelous,
              defamatory, abusive, vulgar, obscene, or constitutes spam; is
              pornographic, predatory, sexually graphic, racist, offensive,
              harmful to a minor, or would otherwise violate the rights of any
              third party or give rise to civil or criminal liability. If for
              any reason, we determine that you have failed to follow these
              rules, we reserve the right to prohibit any and all current or
              future use of the Services by you. If we have reason to suspect,
              or learn that anyone is violating these Terms, we may investigate
              and/or take legal action as necessary including bringing a lawsuit
              for damages caused by the violation. We reserve the right to
              investigate and take appropriate legal action, including without
              limitation, cooperating with and assisting law enforcement or
              government agencies in any resulting investigations of illegal
              conduct.
            </p>
          </SubSection>
        </Section>
        {/* 
  This is a self-contained section. You can place this JSX snippet
  after the previous section in your main page component.
*/}
        <section className="mt-10">
          {/* Section 4 Main Title */}
          <h2 className="text-xl font-bold text-gray-900">
            4. Fillout Forms and User Submissions
          </h2>

          <div className="mt-4 space-y-6 text-base text-gray-700 leading-relaxed">
            {/* --- Subsection: Protection of PII --- */}
            <div>
              <h3 className="font-semibold text-gray-800 underline">
                Protection of Personally Identifiable Information (PII)
              </h3>
              <div className="mt-4 space-y-4">
                <p>
                  Fillout maintains administrative, physical, and technical
                  safeguards for protection of the security, confidentiality and
                  integrity of the personally identifiable information of an
                  identified or identifiable natural person (“
                  <strong className="font-semibold">PII</strong>”). However,
                  Fillout has no control over the nature, scope, or origin of,
                  or the means by which a User acquires, any PII that such User
                  may submit or upload to the Services or Form Input that User
                  may collect through the Services. You are solely responsible
                  for ensuring your compliance with any and all applicable laws,
                  rules, or regulations applicable to the types of data,
                  including PII, that you submit or make available to, or
                  request or collect through, the Services. You represent and
                  warrant to us that when you submit or make available any PII
                  to, or request or collect through, the Services, you have
                  obtained all necessary prior written consents, approvals, or
                  authorizations from such natural persons to share such PII
                  with Fillout (as applicable pursuant to your subscription plan
                  for Services) and you agree to provide all copies of each such
                  consent, approval, or authorization to Fillout upon reasonable
                  request.
                </p>
              </div>
            </div>

            {/* --- Subsection: Acknowledgment of Platform --- */}
            <div>
              <h3 className="font-semibold text-gray-800 underline">
                Acknowledgment of Platform
              </h3>
              <div className="mt-4 space-y-4">
                <p>
                  Fillout is not responsible for any loss or damage arising out
                  of any decisions ultimately made or implemented based on your
                  use of the Services. You understand and agree that any
                  guidance Fillout provides as part of the Services is for
                  informational purposes only. You understand and acknowledge
                  that Fillout does not guarantee: the existence, quality,
                  safety or legality of any content or information made
                  available on or through the Services.
                </p>
              </div>
            </div>

            {/* --- Subsection: User Interactions --- */}
            <div>
              <h3 className="font-semibold text-gray-800 underline">
                User Interactions with other Fillout Users; Dispute Resolution
              </h3>
              <div className="mt-4 space-y-4">
                <p>
                  Subject to the terms of the Fillout Privacy Policy, your
                  direct interactions (if any) with other Users of the Services
                  or Forms, and any other terms, conditions, warranties, or
                  representations associated with such dealings, are solely
                  between you and that individual user. You further understand
                  and agree that the Services merely enable the building and
                  submission of Forms to be used by you in order to make
                  available to others, and that Fillout is not involved in any
                  actual transactions enabled by your use of the Forms, and that
                  it is not responsible for any loss or damage incurred as the
                  result of any such dealings. For details about our information
                  collection practices, please see our Privacy Policy.{" "}
                  <span className="uppercase">
                    If there is a dispute between you and any third party
                    (including, without limitation, any user of the service),
                    Fillout is under no obligation to become involved, and you
                    hereby release Fillout from any claims, demands, or damages
                    of any kind and of any nature arising out of or relating to
                    any such dispute.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <>
          {/* --- Section 5: Availability of the Fillout Services --- */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">
              5. Availability of the Fillout Services
            </h2>
            <div className="mt-4 space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                While we use reasonable efforts to keep the Services accessible,
                the Services may be unavailable from time to time for any reason
                including, without limitation, system down time for routine
                maintenance. You further acknowledge that there may be
                interruptions in the Services or events on third-party sites
                that may affect your use of the Services that are beyond our
                control to prevent or correct. Accordingly, we cannot accept any
                responsibility for any connectivity issues that you may
                experience when using the Services or for any delays or loss of
                material, data, transactions or other information caused by
                system outages, whether planned or unplanned.
              </p>
            </div>
          </section>

          {/* --- Section 6: Access/License for Use of the Services --- */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">
              6. Access/License for Use of the Services
            </h2>
            <div className="mt-4 space-y-6 text-base text-gray-700 leading-relaxed">
              {/* Subsection: Fillout License to Users */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Fillout License to Users
                </h3>
                <div className="mt-4 space-y-4">
                  <p>
                    You have a limited, revocable, non-exclusive,
                    non-transferable, non-sublicensable license to use the
                    Services and our Content solely for legally permitted
                    activities related to our Services as outlined in these
                    Terms. You agree to respect all legal or proprietary
                    notices, information, and restrictions contained in any
                    content accessed through the Services.
                  </p>
                </div>
              </div>

              {/* Subsection: License to Fillout to User Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  License to Fillout to User Content
                </h3>
                <div className="mt-4 space-y-4">
                  <p>
                    In using the Services, you may be able to: (a) create Forms,
                    (b) post, upload, or otherwise make available certain
                    information or documentation, or (c) request or collect Form
                    Input, in each case through the Services, in order to use,
                    or continue using, the Services (collectively, “
                    <strong className="font-semibold">User Content</strong>”).
                    You understand and agree that you are responsible for
                    whatever material you submit or collect through the Services
                    and that you, not Fillout, have full responsibility for your
                    User Content, including its legality, reliability, accuracy,
                    appropriateness, originality, and copyright. By submitting
                    User Content to the Services, you grant us and our service
                    providers and business partners a nonexclusive, royalty-
                    free, sub-licensable, and transferable (in whole or in part)
                    worldwide license to use, modify, display, reproduce, and
                    distribute such User Content (as defined below) on and
                    through the Services in order to provide the Services.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
        <>
          {/* --- Section 7: Payments --- */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">7. Payments</h2>
            <div className="mt-4 space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                In order to use certain features of the Services, you may be
                required to pay for the applicable subscription plan selected on
                the Site or via an order form for the Services (“
                <strong className="font-semibold">Fees</strong>”). Fillout
                charges the Fees on a recurring basis at the selected time
                interval for your paid subscription plan (either monthly or
                annually in advance) to the payment method that you designate
                with Fillout. If your payment falls or if your payment
                information expires, you will be notified by Fillout and access
                to the Services will be suspended until payment is received.
                Fillout reserves the right to restrict access to your Account or
                terminate your Account for nonpayment if such nonpayment is not
                corrected within thirty (30) days. If you dispute any charges,
                you must inform us in writing within thirty (30) days of being
                billed by us. All payments are final and non-refundable.
              </p>
            </div>
          </section>

          {/* --- Section 8: Term and Termination of Usage --- */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">
              8. Term and Termination of Usage
            </h2>
            <div className="mt-4 space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                Subject to this section, this Agreement shall remain in full
                force and effect while you use the Services. You may terminate
                your Account in accordance with your selected subscription plan
                through your account settings or by sending us an email at{" "}
                <a
                  href="mailto:support@fillout.com"
                  className="text-blue-600 hover:underline"
                >
                  support@fillout.com
                </a>
                .
              </p>
              <p>
                If you are a paid subscriber of the Services, your paid
                subscription will be automatically renewed and the payment
                method on file with your Account will be automatically charged
                to your designated payment method for each new subscription
                period in your subscription plan unless you notify us in writing
                of your intent to cancel your paid subscription at least 30 days
                prior to your next subscription billing period.
              </p>
              <p>
                We may suspend or cancel your Account without notice to you if
                you violate this Agreement, or for any reason at all. If your
                Account is cancelled, we reserve the right to remove your
                account information along with any account settings from our
                servers with NO liability or notice to you. Once your account
                information and account settings are removed, you will not be
                able to recover this data from your Account.
              </p>
              <p>
                Upon termination of your Account, your license to use our
                Services (including any Forms) terminates. All provisions of
                these Terms that by their nature should survive termination
                shall survive termination, including, without limitation,
                ownership provisions, warranty disclaimers, and limitations of
                liability. You acknowledge and understand that our rights
                regarding any content you submitted to the website before your
                Account was terminated shall survive termination. For the
                avoidance of doubt, we may retain certain User Content in our
                backups, archives and disaster recovery systems in order to
                comply with applicable legal requirements or until such User
                Content is deleted in the ordinary course of business.
                Termination will not limit any of Fillout’s rights or remedies
                at law or equity.
              </p>
            </div>
          </section>
        </>
        <>
          {/* --- Section 9: Advertisements and Third-Party Sites or Services --- */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">
              9. Advertisements and Third-Party Sites or Services
            </h2>
            <div className="mt-4 space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                The Services may contain links to other websites or resources on
                the internet, or integrations with Fillout’s third-party service
                providers, such as cloud infrastructure providers. Links on the
                Services to third party websites, if any, are provided only as a
                convenience to you and such links are not under the control of
                Fillout. If you use these links, you will leave the Services.
                The inclusion or integration of third-party services or links in
                the Services does not imply control of, endorsement by, or
                affiliation with Fillout. Your dealings with third parties are
                solely between you and such third parties. You agree that we
                will not be responsible or liable for any content, goods or
                services provided on or through these outside websites or
                integrated services or for your use or inability to use such
                websites or services. You will use these links or integrated
                services at your own risk.
              </p>
            </div>
          </section>

          {/* --- Section 10: Fillout Intellectual Property and User Content --- */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">
              10. Fillout Intellectual Property and User Content
            </h2>
            <div className="mt-4 space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                Through the Services, we may make accessible various content,
                including, but not limited to, videos, photographs, images,
                artwork, graphics, audio clips, comments, data, text, software,
                scripts, campaigns, other material and information, and
                associated trademarks and copyrightable works (collectively, “
                <strong className="font-semibold">Content</strong>”).
              </p>

              {/* Subsection: Our Intellectual Property Rights and Content */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Our Intellectual Property Rights and Content
                </h3>
                <div className="mt-4 space-y-4">
                  <p>
                    We own all rights, title and interest, including any
                    patents, inventions, copyrights, trademarks, domain names,
                    trade secrets, know-how and any other intellectual property
                    or proprietary rights (collectively, “
                    <strong className="font-semibold">
                      Intellectual Property
                    </strong>
                    ”) in and to the Site and Services, or we are an authorized
                    licensee for all Intellectual Property used for purposes of
                    providing the Site and Services. All right, title, and
                    interest in and to the Intellectual Property are and will
                    remain with Fillout or its licensors. You will not use such
                    Intellectual Property to develop competitive Services or
                    sell, design, reverse engineer, decompile or disable any of
                    the Services or software or change, translate, or otherwise
                    create derivative works based off our Content. All other
                    Content viewed through the Services is the property of its
                    respective owner.
                  </p>
                  <p>
                    We, including our affiliates, may ask you for your voluntary
                    Feedback (as further defined below) on your experience with
                    the Services. We shall become the owner of any User reviews,
                    comments, suggestions or other feedback regarding the
                    Services submitted through the Services or on Fillout’s
                    social media pages, if applicable (collectively, “
                    <strong className="font-semibold">Feedback</strong>”) and we
                    may share with any of our affiliates. Without limitation, we
                    will have exclusive ownership of all present and future
                    existing rights to the Feedback of every kind and nature
                    everywhere and will be entitled to use the Feedback for any
                    commercial or other purpose whatsoever, including to
                    advertise and promote Fillout, without compensation to you
                    or any other person sending the Feedback. You specifically
                    waive any “moral rights” in and to the Feedback. You agree
                    that any Feedback you submit to us is truthful and accurate
                    and does not violate the rights of any third party.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      </main>
    </div>
  );
}
