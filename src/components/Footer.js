import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Master logo.svg";
import Insta from "../assets/images/Instagram.svg";
import FB from "../assets/images/Facebook.svg";
import Linked from "../assets/images/linkedIN.svg";
import Twitter from "../assets/images/twitter.svg";
import { useState } from "react";

export const PrivacyModal = ({ showPrivacyModal, closePrivacyModal }) => {
  return (
    <div
      className={`modal fade px-3 ${showPrivacyModal ? "show" : ""}`}
      style={{
        display: showPrivacyModal ? "block" : "none",
        backgroundColor: "#FEFEFF",
      }}
      tabIndex="-1"
      role="dialog"
      onClick={closePrivacyModal}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-3">
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn-close"
              onClick={closePrivacyModal}
            ></button>
          </div>
          <div className="modal-body ">
            <div className="gap-4" role="alert">
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                PRIVACY POLICY{" "}
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                INTRODUCTION
              </p>
              <p style={{ fontSize: "10px" }}>
                LegalMo [8thGear Partners Limited] (“we” or “us” or “our”)
                respects the privacy of our users (“user” or “you”). This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website
                [https://www.legalmo.biz/] quizzes, forms and survey platforms
                including any other media form, media channel, mobile website,
                or mobile application related or connected thereto
                (collectively, the “Site”). Please read this privacy policy
                carefully. If you do not agree with the terms of this privacy
                policy, please do not access the site. We reserve the right to
                make changes to this Privacy Policy at any time and for any
                reason. We will alert you about any changes by updating the
                “Last Updated” date of this Privacy Policy. Any changes or
                modifications will be effective immediately upon posting the
                updated Privacy Policy on the Site, and you waive the right to
                receive specific notice of each such change or modification. You
                are encouraged to periodically review this Privacy Policy to
                stay informed of updates. You will be deemed to have been made
                aware of, will be subject to, and will be deemed to have
                accepted the changes in any revised Privacy Policy by your
                continued use of the Site after the date such revised Privacy
                Policy is posted.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                COLLECTION OF YOUR INFORMATION
              </p>
              <p className="" style={{ fontSize: "10px" }}>
                We may collect information about you in a variety of ways. The
                information we may collect on the Site includes:
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Personal Data
              </p>
              <p style={{ fontSize: "10px" }}>
                Personally identifiable information, such as your name, shipping
                address, email address, and telephone number, and demographic
                information, such as your age, gender, hometown, and interests,
                that you voluntarily give to us [when you register with the Site
                [or our mobile application,] or] when you choose to participate
                in various activities related to the Site [and our mobile
                application], such as online chat and message boards. You are
                under no obligation to provide us with personal information of
                any kind, however, your refusal to do so may prevent you from
                using certain features of the Site [and our mobile application].
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Derivative Data
              </p>
              <p style={{ fontSize: "10px" }}>
                The information our servers automatically collect when you
                access the Site, such as your IP address, your browser type,
                your operating system, your access times, and the pages you have
                viewed directly before and after accessing the Site. [If you are
                using our mobile application, this information may also include
                your device name and type, your operating system, your phone
                number, your country, your likes and replies to a post, and
                other interactions with the application and other users via
                server log files, as well as any other information you choose to
                provide.]
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Financial Data
              </p>
              <p style={{ fontSize: "10px" }}>
                Financial information, such as data related to your payment
                method (e.g. valid credit card number, card brand, expiration
                date) that we may collect when you purchase, order, return,
                exchange, or request information about our services from the
                Site [or our mobile application]. We store only very limited, if
                any, financial information that we collect. Otherwise, all
                financial information is stored by our payment processor,
                [Paystack] and you are encouraged to review their privacy policy
                and contact them directly for responses to your questions.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Facebook Permissions
              </p>
              <p style={{ fontSize: "10px" }}>
                The Site [and our mobile application] may by default access your
                Facebook basic account information, including your name, email,
                gender, birthday, current city, and profile picture URL, as well
                as other information that you choose to make public. We may also
                request access to other permissions related to your account,
                such as friends, check ins, and likes, and you may choose to
                grant or deny us access to each individual permission. For more
                information regarding Facebook permissions, refer to the
                Facebook Permissions Reference page.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Data From Social Networks
              </p>
              <p style={{ fontSize: "10px" }}>
                User information from social networking sites, such as [Apple’s
                Game Center, Facebook, Google+, Instagram, Pinterest, Twitter],
                including your name, your social network username, location,
                gender, birth date, email address, profile picture, and public
                data for contacts, if you connect your account to such social
                networks. [If you are using our mobile application, this
                information may also include the contact information of anyone
                you invite to use and/or join our mobile application]
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Mobile Device Data
              </p>
              <p style={{ fontSize: "10px" }}>
                Device information, such as your mobile device ID, model, and
                manufacturer, and information about the location of your device,
                if you access the Site from a mobile device.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Third-Party Data
              </p>
              <p style={{ fontSize: "10px" }}>
                Information from third parties, such as personal information or
                network friends, if you connect your account to the third party
                and grant the Site permission to access this information
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Data From Contests, Giveaways, and Surveys
              </p>
              <p style={{ fontSize: "10px" }}>
                Personal and other information you may provide when entering
                contests or giveaways and/or responding to surveys.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Mobile Application Information
              </p>
              <p style={{ fontSize: "10px" }}>
                If you connect using our mobile application:
              </p>
              <ol type="a" style={{ fontSize: "10px" }}>
                <li>
                  Geo-Location Information:We may request access or permission
                  to and track location-based information from your mobile
                  device, either continuously or while you are using our mobile
                  application, to provide location-based services. If you wish
                  to change our access or permissions, you may do so in your
                  device’s settings.
                </li>
                <li>
                  Mobile Device Access:We may request access or permission to
                  certain features from your mobile device, including your
                  mobile device’s [bluetooth, calendar, camera, contacts,
                  microphone, reminders, sensors, SMS messages, social media
                  accounts, storage,] and other features. If you wish to change
                  our access or permissions, you may do so in your device’s
                  settings.
                </li>{" "}
                <li>
                  Mobile Device Data:We may collect device information (such as
                  your mobile device ID, model and manufacturer), operating
                  system, version information and IP address.
                </li>
                <li>
                  Push Notifications:We may request to send you push
                  notifications regarding your account or the Application. If
                  you wish to opt-out from receiving these types of
                  communications, you may turn them off in your device’s
                  settings.
                </li>{" "}
              </ol>

              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                USE OF YOUR INFORMATION
              </p>
              <p style={{ fontSize: "10px" }}>
                Having accurate information about you permits us to provide you
                with a smooth, efficient, and customized experience.
                Specifically, we may use information collected about you via the
                Site [or our mobile application] to:
              </p>
              <ol type="a" style={{ fontSize: "10px" }}>
                <li>Administer sweepstakes, promotions, and contests.</li>
                <li>Assist law enforcement and respond to subpoena.</li>
                <li>
                  Compile anonymous statistical data and analysis for use
                  internally or with third parties.
                </li>
                <li>Create and manage your account.</li>
                <li>
                  Deliver targeted advertising, coupons, newsletters, and other
                  information regarding promotions and the Site [and our mobile
                  application] to you.
                </li>
                <li>Email you regarding your account or order.</li>
                <li>Enable user-to-user communications.</li>
                <li>
                  Fulfill and manage purchases, orders, payments, and other
                  transactions related to the Site [and our mobile application].
                </li>
                <li>
                  Generate a personal profile about you to make future visits to
                  the Site [and our mobile application] more personalized.
                </li>
                <li>
                  Increase the efficiency and operation of the Site [and our
                  mobile application].
                </li>
                <li>
                  Monitor and analyze usage and trends to improve your
                  experience with the Site [and our mobile application].
                </li>
                <li>
                  Notify you of updates to the Site [and our mobile
                  applications].
                </li>
                <li>
                  Offer new products, services, [mobile applications,] and/or
                  recommendations to you.
                </li>
                <li>Perform other business activities as needed.</li>
                <li>
                  Prevent fraudulent transactions, monitor against theft, and
                  protect against criminal activity.
                </li>
                <li>Process payments and refunds.</li>
                <li>
                  Request feedback and contact you about your use of the Site
                  [and our mobile application].
                </li>
                <li>Resolve disputes and troubleshoot problems.</li>
                <li>Respond to product and customer service requests.</li>
                <li>Send you a newsletter.</li>
                <li>
                  Solicit support for the Site [and our mobile application].
                </li>
              </ol>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                USE OF YOUR INFORMATION
              </p>
              <p style={{ fontSize: "10px" }}>
                We may share information we have collected about you in certain
                situations. Your information may be disclosed as follows:
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                By Law or to Protect Rights
              </p>
              <p style={{ fontSize: "10px" }}>
                If we believe the release of information about you is necessary
                to respond to legal process, to investigate or remedy potential
                violations of our policies, or to protect the rights, property,
                and safety of others, we may share your information as permitted
                or required by any applicable law, rule, or regulation. This
                includes exchanging information with other entities for fraud
                protection and credit risk reduction.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Third-Party Service Providers
              </p>
              <p style={{ fontSize: "10px" }}>
                We may share your information with third parties that perform
                services for us or on our behalf, including payment processing,
                data analysis, email delivery, hosting services, customer
                service, and marketing assistance.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Marketing Communications
              </p>
              <p style={{ fontSize: "10px" }}>
                With your consent, or with an opportunity for you to withdraw
                consent, we may share your information with third parties for
                marketing purposes, as permitted by law.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Interactions with Other Users
              </p>
              <p style={{ fontSize: "10px" }}>
                If you interact with other users of the Site [and our mobile
                application], those users may see your name, profile photo, and
                descriptions of your activity, including sending invitations to
                other users, chatting with other users, liking posts, following
                blogs.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Online Postings
              </p>
              <p style={{ fontSize: "10px" }}>
                When you post comments, contributions or other content to the
                Site [or our mobile applications], your posts may be viewed by
                all users and may be publicly distributed outside the Site [and
                our mobile application] in perpetuity.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Third-Party Advertisers
              </p>
              <p style={{ fontSize: "10px" }}>
                We may use third-party advertising companies to serve ads when
                you visit the Site [or our mobile application]. These companies
                may use information about your visits to the Site [and our
                mobile application] and other websites that are contained in web
                cookies in order to provide advertisements about goods and
                services of interest to you.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Affiliates
              </p>
              <p style={{ fontSize: "10px" }}>
                We may share your information with our affiliates, in which case
                we will require those affiliates to honour this Privacy Policy.
                Affiliates include our parent company and any subsidiaries,
                joint venture partners or other companies that we control or
                that are under common control with us.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Business Partners
              </p>
              <p style={{ fontSize: "10px" }}>
                We may share your information with our business partners to
                offer you certain products, services or promotions.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Social Media Contacts
              </p>
              <p style={{ fontSize: "10px" }}>
                If you connect to the Site [or our mobile application] through a
                social network, your contacts on the social network will see
                your name, profile photo, and descriptions of your activity.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Other Third Parties
              </p>
              <p style={{ fontSize: "10px" }}>
                We may share your information with advertisers and investors for
                the purpose of conducting general business analysis. We may also
                share your information with such third parties for marketing
                purposes, as permitted by law.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Sale or Bankruptcy
              </p>
              <p style={{ fontSize: "10px" }}>
                If we reorganize or sell all or a portion of our assets, undergo
                a merger, or are acquired by another entity, we may transfer
                your information to the successor entity. If we go out of
                business or enter bankruptcy, your information would be an asset
                transferred or acquired by a third party. You acknowledge that
                such transfers may occur and that the transferee may decline
                honour commitments we made in this Privacy Policy. We are not
                responsible for the actions of third parties with whom you share
                personal or sensitive data, and we have no authority to manage
                or control third-party solicitations. If you no longer wish to
                receive correspondence, emails or other communications from
                third parties, you are responsible for contacting the third
                party directly.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                TRACKING TECHNOLOGIES
              </p>
              <p style={{ fontSize: "10px" }}>Cookies and Web Beacons</p>
              <p style={{ fontSize: "10px" }}>
                We may use cookies, web beacons, tracking pixels, and other
                tracking technologies on the Site [and our mobile application]
                to help customize the Site [and our mobile application] and
                improve your experience. When you access the Site [or our mobile
                application], your personal information is not collected through
                the use of tracking technology. Most browsers are set to accept
                cookies by default. You can remove or reject cookies, but be
                aware that such action could affect the availability and
                functionality of the Site [or our mobile application]. You may
                not decline web beacons. However, they can be rendered
                ineffective by declining all cookies or by modifying your web
                browser’s settings to notify you each time a cookie is tendered,
                permitting you to accept or decline cookies on an individual
                basis. We may use cookies, web beacons, tracking pixels, and
                other tracking technologies on the Site [and our mobile
                application] to help customize the Site [and our mobile
                application] and improve your experience. For more information
                on how we use cookies, please refer to our Cookie Policy posted
                on the Site, which is incorporated into this Privacy Policy. By
                using the Site, you agree to be bound by our Cookie Policy.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Website Analytics
              </p>
              <p style={{ fontSize: "10px" }}>
                We may also partner with selected third-party vendors[, such as
                [Adobe Analytics,] [Cloudflare,] [Google Analytics,] tracking
                technologies and remarketing services on the Site [and our
                mobile application] through the use of first-party cookies and
                third-party cookies, to, among other things, analyze and track
                users’ use of the Site [and our mobile application], determine
                the popularity of certain content and better understand online
                activity. By accessing the Site, [our mobile application,], you
                consent to the collection and use of your information by these
                third-party vendors. You are encouraged to review their privacy
                policy and contact them directly for responses to your
                questions. We do not transfer personal information to these
                third-party vendors. However, if you do not want any information
                to be collected and used by tracking technologies, you can visit
                the third-party vendor or the Network Advertising Initiative
                Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool. You
                should be aware that getting a new computer, installing a new
                browser, upgrading an existing browser, or erasing or otherwise
                altering your browser’s cookies files may also clear certain
                opt-out cookies, plug-ins, or settings.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                THIRD-PARTY WEBSITES
              </p>
              <p style={{ fontSize: "10px" }}>
                The Site [and our mobile application] may contain links to
                third-party websites and applications of interest, including
                advertisements and external services, that are not affiliated
                with us. Once you have used these links to leave the Site [or
                our mobile application], any information you provide to these
                third parties is not covered by this Privacy Policy, and we
                cannot guarantee the safety and privacy of your information.
                Before visiting and providing any information to any third-party
                websites, you should inform yourself of the privacy policies and
                practices (if any) of the third-party responsible for that
                website, and should take those steps necessary to, in your
                discretion, protect the privacy of your information. We are not
                responsible for the content or privacy and security practices
                and policies of any third parties, including other sites,
                services or applications that may be linked to or from the Site
                [or our mobile application].
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                SECURITY OF YOUR INFORMATION
              </p>
              <p style={{ fontSize: "10px" }}>
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we have taken
                reasonable steps to secure the personal information you provide
                to us, please be aware that despite our efforts, no security
                measures are perfect or impenetrable, and no method of data
                transmission can be guaranteed against any interception or other
                type of misuse. Any information disclosed online is vulnerable
                to interception and misuse by unauthorized parties. Therefore,
                we cannot guarantee complete security if you provide personal
                information.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                POLICY FOR CHILDREN
              </p>
              <p style={{ fontSize: "10px" }}>
                We do not knowingly solicit information from or market to
                children under the age of 13. If you become aware of any data we
                have collected from children under age 13, please contact us
                using the contact information provided below.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                CONTROLS FOR DO-NOT-TRACK FEATURES
              </p>
              <p style={{ fontSize: "10px" }}>
                Most web browsers and some mobile operating systems [and our
                mobile applications] include a Do-Not-Track (“DNT”) feature or
                setting you can activate to signal your privacy preference not
                to have data about your online browsing activities monitored and
                collected. No uniform technology standard for recognizing and
                implementing DNT signals has been finalized. As such, we do not
                currently respond to DNT browser signals or any other mechanism
                that automatically communicates your choice not to be tracked
                online. If a standard for online tracking is adopted that we
                must follow in the future, we will inform you about that
                practice in a revised version of this Privacy Policy./Most web
                browsers and some mobile operating systems [and our mobile
                applications] include a Do-Not-Track (“DNT”) feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. If you set the DNT signal on your browser, we will
                respond to such DNT browser signals.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                OPTIONS REGARDING YOUR INFORMATION
              </p>
              <p style={{ fontSize: "10px" }}>[Account Information]</p>
              <p style={{ fontSize: "10px" }}>
                You may at any time review or change the information in your
                account or terminate your account by:
              </p>
              <ol type="a" style={{ fontSize: "10px" }}>
                <li>
                  Logging into your account settings and updating your account.
                </li>
                <li>
                  Contacting us using the contact information provided below.
                </li>
                <li>[Other]</li>
              </ol>
              <p style={{ fontSize: "10px" }}>
                Upon your request to terminate your account, we will deactivate
                or delete your account and information from our active
                databases. However, some information may be retained in our
                files to prevent fraud, troubleshoot problems, assist with any
                investigations, enforce our Terms of Use and/or comply with
                legal requirements.]
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                Emails and Communications
              </p>
              <p style={{ fontSize: "10px" }}>
                If you no longer wish to receive correspondence, emails, or
                other communications from us, you may opt-out by:
              </p>
              <ol type="a" style={{ fontSize: "10px" }}>
                <li>
                  If you no longer wish to receive correspondence, emails, or
                  other communications from us, you may opt-out by:
                </li>
                <li>
                  Logging into your account settings and updating your
                  preferences.
                </li>
                <li>
                  Contacting us using the contact information provided below.
                </li>
              </ol>
              <p style={{ fontSize: "10px" }}>
                If you no longer wish to receive correspondence, emails, or
                other communications from third parties, you are responsible for
                contacting the third party directly.
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                NIGERIAN PRIVACY RIGHTS
              </p>
              <p style={{ fontSize: "10px" }}>
                Nigeria's principal data protection legislation is the Nigeria
                Data Protection Regulation 2019 (“NDPR”). The NDPR was issued by
                the National Information Technology Development Agency
                (“NITDA/the Agency”) on 25 January 2019 pursuant to Section 32
                of the NITDA Act 2007 as subsidiary legislation to the NITDA Act
                2007
              </p>
              <p style={{ fontSize: "10px" }}>
                The NDPR mandates all organizations that process the personal
                data of more than 1000 data subjects in a period of 6 months and
                2000 Data Subjects in a period of 12 months to submit a Data
                Protection Audit report to NITDA not later than 15th March every
                year.
              </p>
              <p style={{ fontSize: "10px" }}>
                Please read details here [Nigeria Data Protection Regulation]
              </p>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                CONTACT US
              </p>
              <p style={{ fontSize: "10px" }}>
                If you have questions or comments about this Privacy Policy,
                please contact us at:
              </p>
              {/* <p style={{ fontSize: "10px" }}>
                LegalMo [8thGear Partners Limited]
              </p> */}
              <div>
                <ul
                  className=""
                  style={{ fontSize: "10px", listStyle: "none" }}
                >
                  <li>LegalMO [8thGear Partners Limited] </li>
                  <li>No 41, CMD Road Magodo, Lagos State 100248 Nigeria </li>
                  <li style={{ color: "#7e7e7f" }}>
                    Phone:{" "}
                    <a
                      href="tel:+2348094818884"
                      className="text-decoration-none"
                      style={{ color: "#7e7e7f" }}
                    >
                      08094818884
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@legalmo.biz">info@legalmo.biz</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="modal-body ">
            <div className="gap-4" role="alert">
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                PRIVACY POLICY{" "}
              </p>
              <p style={{ fontSize: "10px" }}>
                This Privacy Policy was created to inform visitors of LegalMO, a
                website owned by LegalMO of its privacy policies. This notice
                pertains exclusively to information collected by, on or through
                our website. This notice shall describe the following:
              </p>
              <ol type="a" style={{ fontSize: "10px" }}>
                <li>information to be collected;</li>
                <li>How this information will be used; </li>{" "}
                <li>How this information may be shared; </li>
                <li>
                  Your rights to limit information collected or shared;
                </li>{" "}
                <li>
                  security measures we have in place to protect your
                  information; and{" "}
                </li>{" "}
                <li>
                  How you can correct inaccuracies in the information shared
                  with us.
                </li>
              </ol>
              <p style={{ fontSize: "12px", fontWeight: "600" }}>
                {" "}
                WHAT INFORMATION WILL BE COLLECTED?
              </p>
              <p style={{ fontSize: "10px" }}>
                In an effort to schedule consultations and sign up for
                newsletters, users may be asked to submit some personal
                information. This information may include names, email
                addresses, mailing addresses, phone numbers, as well as
                sensitive banking information for retaining services. In
                addition to information volunteered by users, LegalMO may
                collect additional information that the user’s browser sends
                when visiting this Site (“Log Data”). This Log Data may include
                information such as the user’s computer’s Internet Protocol
                (“IP”) address, browser type, browser version, the pages of our
                Site that were visited, the time and date of visit, the time
                spent on those pages and other statistics. In addition, we may
                use third Party services such as Google Analytics that collect,
                monitor and analyze this information in order to improve our
                services to you and reach a larger audience. LegalMo may use
                cookies and similar tracking techniques to recognize you for
                functional, marketing, and analytics purposes to improve our
                service. Users may instruct their browser to refuse all cookies
                or to indicate when a cookie is being sent. However, not
                accepting cookies may limit portions of our Site.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export const TermsModal = ({ showTermsModal, closeTermsModal }) => {
  return (
    <div
      className={`modal fade px-3 ${showTermsModal ? "show" : ""}`}
      style={{
        display: showTermsModal ? "block" : "none",
        backgroundColor: "#FEFEFF",
      }}
      tabIndex="-1"
      role="dialog"
      onClick={closeTermsModal}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-3">
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn-close"
              onClick={closeTermsModal}
            ></button>
          </div>
          <div className="modal-body ">
            <div className="gap-1" role="alert">
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                TERMS OF USE
              </p>
              <div>
                <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                  AGREEMENT TO OUR LEGAL TERMS
                </p>
                <p style={{ fontSize: "10px" }}>
                  {" "}
                  We are LegalMO [8thGear Partners Limited]('Company', 'we',
                  'us', or 'our'), a company registered in Nigeria at No 41, CMD
                  Road, Magodo, Lagos State 100248. We operate the website
                  http://www.legalmo.biz (the 'Site'), as well as any other
                  related products and services that refer or link to these
                  legal terms (the 'Legal Terms') (collectively, the
                  'Services').
                </p>
              </div>
              <div>
                <p style={{ fontSize: "10px" }}>
                  We provide Startups and SMEs access to affordable legal
                  services You can contact us by phone at 08137686118, email at
                  Legalmoplatform@gmail.com, or by mail to No 41, CMD Road,
                  Magodo, Lagos State 100248, Nigeria.{" "}
                </p>
                <p style={{ fontSize: "10px" }}>
                  These Legal Terms constitute a legally binding agreement made
                  between you, whether personally or on behalf of an entity
                  ('you'), and LegalMO, concerning your access to and use of the
                  Services. You agree that by accessing the Services, you have
                  read, understood, and agreed to be bound by all of these Legal
                  Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN
                  YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU
                  MUST DISCONTINUE USE IMMEDIATELY.
                </p>
              </div>
              <div>
                <p style={{ fontSize: "10px" }}>
                  We will provide you with prior notice of any scheduled changes
                  to the Services you are using. The modified Legal Terms will
                  become effective upon posting or notifying you by
                  legalmoplatform@gmail.com, as stated in the email message. By
                  continuing to use the Services after the effective date of any
                  changes, you agree to be bound by the modified terms.
                </p>{" "}
                <p style={{ fontSize: "10px" }}>
                  The Services are intended for users who are at least 18 years
                  old. Persons under the age of 18 are not permitted to use or
                  register for the Services. We recommend that you print a copy
                  of these Legal Terms for your records.
                </p>
              </div>
              <p className="" style={{ fontSize: "12px", fontWeight: "600" }}>
                TABLE OF CONTENTS
              </p>

              <ol type="1" style={{ fontSize: "10px", color: "#032773" }}>
                <li>OUR SERVICES</li>
                <li>INTELLECTUAL PROPERTY RIGHTS</li>{" "}
                <li>USERS PRESENTATION </li>
                <li>USERS REGISTRATION</li> <li>PURCHASES AND PAYMENT</li>{" "}
                <li>POLICY</li> <li>PROHIBITED ACTIVITIES</li>
                <li>USER GENERATED CONTRIBUTIONS</li>{" "}
                <li>CONTRIBUTION LICENSE </li>
                <li>GUIDELINES FOR REVIEW</li> <li>SERVICES MANAGEMENT</li>{" "}
                <li>PRIVACY POLICY</li> <li>TERM AND TERMINATION</li>
                <li>MODIFICATIONS AND INTERRUPTIONS</li> <li>GOVERNING LAW</li>
                <li>DISPUTE RESOLUTION</li> <li>CORRECTIONS</li>{" "}
                <li>DISCLAIMER</li> <li>LIMITATIONS OF LIABILITY</li>
                <li>INDEMNIFICATION</li> <li>USER DATA </li>
                <li>
                  ELECTRONIC COMMUNICATIONS, TRANSACTIONS AND SIGNATURES
                </li>{" "}
                <li>MISCELLANEOUS</li> <li>CONTACT US</li>
              </ol>

              <div>
                <div>
                  <p
                    className=""
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    1. OUR SERVICES
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    The information provided when using the Services is not
                    intended for distribution to or use by any person or entity
                    in any jurisdiction or country where such distribution or
                    use would be contrary to law or regulation or which would
                    subject us to any registration requirement within such
                    jurisdiction or country. Accordingly, those persons who
                    choose to access the Services from other locations do so on
                    their own initiative and are solely responsible for
                    compliance with local laws, if and to the extent local laws
                    are applicable.{" "}
                  </p>
                </div>
                <div>
                  <p
                    className=""
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    2. INTELLECTUAL PROPERTY RIGHTS
                  </p>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    Our intellectual property{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    We are the owner or the licensee of all intellectual
                    property rights in our Services, including all source code,
                    databases, functionality, software, website designs, audio,
                    video, text, photographs, and graphics in the Services
                    (collectively, the 'Content'), as well as the trademarks,
                    service marks, and logos contained therein (the 'Marks').
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    {" "}
                    Our Content and Marks are protected by copyright and
                    trademark laws (and various other intellectual property
                    rights and unfair competition laws) and treaties in Nigeria
                    and around the world. The Content and Marks are provided in
                    or through the Services 'AS IS' for your internal business
                    purpose only.
                  </p>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    Your use of our Services
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    Your use of our Services Subject to your compliance with
                    these Legal Terms, including the “PROHIBITED ACTIVITIES”
                    section below, we grant you a non-exclusive,
                    non-transferable, revocable license to:
                  </p>
                  <ul style={{ fontSize: "10px" }}>
                    <li>access the Services; and</li>
                    <li>
                      download or print a copy of any portion of the Content to
                      which you have properly gained access.
                    </li>
                  </ul>

                  <p style={{ fontSize: "10px" }}>
                    {" "}
                    solely for your internal business purpose.
                  </p>
                  <p className="" style={{ fontSize: "10px" }}>
                    {" "}
                    Except as set out in this section or elsewhere in our Legal
                    Terms, no part of the Services and no Content or Marks may
                    be copied, reproduced, aggregated, republished, uploaded,
                    posted, publicly displayed, encoded, translated,
                    transmitted, distributed, sold, licensed, or otherwise
                    exploited for any commercial purpose whatsoever, without our
                    express prior written permission. If you wish to make any
                    use of the Services, Content, or Marks other than as set out
                    in this section or elsewhere in our Legal Terms, please
                    address your request to: Legalmoplatform@gmail.com. If we
                    ever grant you the permission to post, reproduce, or
                    publicly display any part of our Services or Content, you
                    must identify us as the owners or licensors of the Services,
                    Content, or Marks and ensure that any copyright or
                    proprietary notice appears or is visible on posting,
                    reproducing, or displaying our Content. We reserve all
                    rights not expressly granted to you in and to the Services,
                    Content, and Marks. Any breach of these Intellectual
                    Property Rights will constitute a material breach of our
                    Legal Terms and your right to use our Services will
                    terminate immediately.
                  </p>

                  <p
                    className=""
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    Your submissions
                  </p>
                  <p className="" style={{ fontSize: "10px" }}>
                    Please review this section and the 'PROHIBITED ACTIVITIES'
                    section carefully prior to using our Services to understand
                    the (a) rights you give us and (b) obligations you have when
                    you post or upload any content through the Services.{" "}
                  </p>
                  <p
                    className=""
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  ></p>
                  <p
                    className=""
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    Submissions
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    By directly sending us any question, comment, suggestion,
                    idea, feedback, or other information about the Services (
                    'Submissions'), you agree to assign to us all intellectual
                    property rights in such Submission. You agree that we shall
                    own this Submission and be entitled to its unrestricted use
                    and dissemination for any lawful purpose, commercial or
                    otherwise, without acknowledgment or compensation to you.{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    You are responsible for what you post or upload: By sending
                    us Submissions through any part of the Services you:{" "}
                  </p>
                  <ul style={{ fontSize: "10px" }}>
                    <li>
                      confirm that you have read and agree with our 'PROHIBITED
                      ACTIVITIES' and will not post, send, publish, upload, or
                      transmit through the Services any Submission that is
                      illegal, harassing, hateful, harmful, defamatory, obscene,
                      bullying, abusive, discriminatory, threatening to any
                      person or group, sexually explicit, false, inaccurate,
                      deceitful, or misleading;{" "}
                    </li>
                    <li>
                      {" "}
                      to the extent permissible by applicable law, waive any and
                      all moral rights to any such Submission;
                    </li>
                    <li>
                      {" "}
                      warrant that any such Submission are original to you or
                      that you have the necessary rights and licenses to submit
                      such Submissions and that you have full authority to grant
                      us the above-mentioned rights in relation to your
                      Submissions; and{" "}
                    </li>
                    <li>
                      {" "}
                      warrant and represent that your Submissions do not
                      constitute confidential information.{" "}
                    </li>
                  </ul>
                  <p style={{ fontSize: "10px" }}>
                    You are solely responsible for your Submissions and you
                    expressly agree to reimburse us for any and all losses that
                    we may suffer because of your breach of (a)this section, (b)
                    any third party’s intellectual property rights, or (c)
                    applicable law.
                  </p>
                </div>
                <div>
                  <p
                    className=""
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    USER REPRESENTATIONS
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    3. USER REPRESENTATIONS By using the Services, you represent
                    and warrant that:{" "}
                  </p>
                  <ol type="(1)" style={{ fontSize: "10px" }}>
                    <li>
                      all registration information you submit will be true,
                      accurate, current, and complete;
                    </li>
                    <li>
                      you will maintain the accuracy of such information and
                      promptly update such registration information as
                      necessary;
                    </li>
                    <li>
                      you have the legal capacity and you agree to comply with
                      these Legal Terms;
                    </li>
                    <li>
                      {" "}
                      you will not access the Services through automated or
                      non-human means, whether through a bot, script or
                      otherwise;
                    </li>
                    <li>
                      you will not use the Services for any illegal or
                      unauthorized purpose; and{" "}
                    </li>
                    <li>
                      your use of the Services will not violate any applicable
                      law or regulation.
                    </li>
                    <li>
                      <b>
                        you will not have any contact or provide services to any
                        company (that is any company you provide service for on
                        this platform) outside of this platform without
                        informing LegalMO [8thGear Partners Limited] in writing.
                      </b>
                    </li>
                  </ol>
                  <p style={{ fontSize: "10px" }}>
                    If you provide any information that is untrue, inaccurate,
                    not current, or incomplete, we have the right to suspend or
                    terminate your account and refuse any and all current or
                    future use of the Services (or any portion thereof).{" "}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    4. USER REGISTRATION{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    You may be required to register to use the Services. You
                    agree to keep your password confidential and will be
                    responsible for all use of your account and password. We
                    reserve the right to remove, reclaim, or change a username
                    you select if we determine, in our sole discretion, that
                    such username is inappropriate, obscene, or otherwise
                    objectionable.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    5. PURCHASES AND PAYMENT
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    {" "}
                    We accept the following forms of payment:
                  </p>
                  <ul style={{ fontSize: "10px" }}>
                    <li> Visa </li>
                    <li> Mastercard</li>
                  </ul>
                  <p style={{ fontSize: "10px" }}>
                    You agree to provide current, complete, and accurate
                    purchase and account information for all purchases made via
                    the Services. You further agree to promptly update account
                    and payment information, including email address, payment
                    method, and payment card expiration date, so that we can
                    complete your transactions and contact you as needed. Sales
                    tax will be added to the price of purchases as deemed
                    required by us. We may change prices at any time. All
                    payments shall be in Naira. You agree to pay all charges at
                    the prices then in effect for your purchases and any
                    applicable shipping fees, and you authorize us to charge
                    your chosen payment provider for any such amounts upon
                    placing your order.{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    If your order is subject to recurring charges, then you
                    consent to our charging your payment method on a recurring
                    basis without requiring your prior approval for each
                    recurring charge, until such time as you cancel the
                    applicable order.{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    We reserve the right to refuse any order placed through the
                    Services. We may, in our sole discretion, limit or cancel
                    quantities purchased per person, per household, or per
                    order. These restrictions may include orders placed by or
                    under the same customer account, the same payment method,
                    and/or orders that use the same billing or shipping address.
                    We reserve the right to limit or prohibit orders that, in
                    our sole judgement, appear to be placed by dealers,
                    resellers, or distributors.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>POLICY</p>
                  <p style={{ fontSize: "10px" }}>
                    All sales are final and no refund will be used
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    PROHIBITED ACTIVITIES
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    You may not access or use the Services for any purpose other
                    than that for which we make the Services available. The
                    Services may not be used in connection with any commercial
                    endeavors except those that are specifically endorsed or
                    approved by us.
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    {" "}
                    As a user of the Services, you agree not to:{" "}
                  </p>
                  <ul style={{ fontSize: "10px" }}>
                    <li>
                      Systematically retrieve data or other content from the
                      Services to create or compile, directly or indirectly, a
                      collection, compilation, database, or directory without
                      written permission from us.{" "}
                    </li>
                    <li>
                      Trick, defraud, or mislead us and other users, especially
                      in any attempt to learn sensitive account information such
                      as user passwords.
                    </li>
                    <li>
                      {" "}
                      Circumvent, disable, or otherwise interfere with
                      security-related features of the Services, including
                      features that prevent or restrict the use or copying of
                      any Content or enforce limitations on the use of the
                      Services and/or the Content contained therein.{" "}
                    </li>
                    <li>
                      Disparage, tarnish, or otherwise harm, in our opinion, us
                      and/or the Services.{" "}
                    </li>
                    <li>
                      Use any information obtained from the Services in order to
                      harass, abuse, or harm another person.
                    </li>
                    <li>
                      {" "}
                      Make improper use of our support services or submit false
                      reports of abuse or misconduct.
                    </li>
                    <li>
                      {" "}
                      Use the Services in a manner inconsistent with any
                      applicable laws or regulations.{" "}
                    </li>
                    <li>
                      Engage in unauthorized framing of or linking to the
                      Services.
                    </li>
                    <li>
                      {" "}
                      Upload or transmit (or attempt to upload or to transmit)
                      viruses, Trojan horses, or other material, including
                      excessive use of capital letters and spamming(continuous
                      posting of repetitive text), that interferes with any
                      party’s uninterrupted use and enjoyment of the Services or
                      modifies, impairs, disrupts, alters, or interferes with
                      the use, features, functions, operation, or maintenance of
                      the Services.{" "}
                    </li>
                    <li>
                      Engage in any automated use of the system, such as using
                      scripts to send comments or messages, or using any data
                      mining, robots, or similar data gathering and extraction
                      tools.{" "}
                    </li>
                    <li>
                      Delete the copyright or other proprietary rights notice
                      from any Content.{" "}
                    </li>
                    <li>
                      Attempt to impersonate another user or person or use the
                      username of another user.
                    </li>
                    <li>
                      Upload or transmit (or attempt to upload or to transmit)
                      any material that acts as a passive or active information
                      collection or transmission mechanism, including without
                      limitation, clear graphics interchange formats ( 'gifs'),
                      1×1pixels, web bugs, cookies, or other similar devices
                      (sometimes referred to as 'spyware' or 'passive collection
                      mechanisms' or 'pcms').{" "}
                    </li>
                    <li>
                      Interfere with, disrupt, or create an undue burden on the
                      Services or the networks or services connected to the
                      Services.{" "}
                    </li>
                    <li>
                      Harass, annoy, intimidate, or threaten any of our
                      employees or agents engaged in providing any portion of
                      the Services to you.
                    </li>
                    <li>
                      Attempt to bypass any measures of the Services designed to
                      prevent or restrict access to the Services, or any portion
                      of the Services.{" "}
                    </li>
                    <li>
                      Copy or adapt the Services' software, including but not
                      limited to Flash, PHP, HTML, JavaScript, or other code.
                      Except as permitted by applicable law, decipher,
                      decompile, disassemble, or reverse engineer any of the
                      software comprising or in any way making up apart of the
                      Services.
                    </li>
                    <li>
                      Except as may be the result of standard search engine or
                      Internet browser usage, use, launch, develop, or
                      distribute any automated system, including without
                      limitation, any spider, robot, cheat utility, scraper, or
                      offline reader that accesses the Services, or use or
                      launch any unauthorized script or other software.
                    </li>
                    <li>
                      Use a buying agent or purchasing agent to make purchases
                      on the Services.{" "}
                    </li>
                    <li>
                      Make any unauthorized use of the Services, including
                      collecting usernames and/or email addresses of users by
                      electronic or other means for the purpose of sending
                      unsolicited email, or creating user accounts by automated
                      means or under false pretenses.
                    </li>
                    <li>
                      Use the Services as part of any effort to compete with us
                      or otherwise use the Services and/or the Content for any
                      revenue-generating endeavor or commercial enterprise.{" "}
                    </li>
                    <li>
                      Use the Services to advertise or offer to sell goods and
                      services.{" "}
                    </li>
                    <li>Sell or otherwise transfer your profile.</li>
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    8. USER GENERATED CONTRIBUTIONS
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    {" "}
                    The Services does not offer users to submit or post content.
                    We may provide you with the opportunity to create, submit,
                    post, display, transmit, perform, publish, distribute, or
                    broadcast content and materials to us or on the Services,
                    including but not limited to text, writings, video, audio,
                    photographs, graphics, comments, suggestions, or personal
                    information or other material (collectively,
                    'Contributions'). Contributions may be viewable by other
                    users of the Services and through third-party websites. When
                    you create or make available any Contributions, you thereby
                    represent and warrant that:{" "}
                  </p>
                  <ul style={{ fontSize: "10px" }}>
                    <li>
                      The creation, distribution, transmission, public display,
                      or performance, and the accessing, downloading, or copying
                      of your Contributions do not and will not infringe the
                      proprietary rights, including but not limited to the
                      copyright, patent, trademark, trade secret, or moral
                      rights of any third party.
                    </li>
                    <li>
                      {" "}
                      You are the creator and owner of or have the necessary
                      licences , rights, consents, releases, and permissions to
                      use and to authorize us, the Services, and other users of
                      the Services to use your Contributions in any manner
                      contemplated by the Services and these Legal Terms.{" "}
                    </li>
                    <li>
                      You have the written consent, release, and/or permission
                      of each and every identifiable individual person in your
                      Contributions to use the name or likeness of each and
                      every such identifiable individual person to enable
                      inclusion and use of your Contributions in any manner
                      contemplated by the Services and these Legal Terms.{" "}
                    </li>
                    <li>
                      Your Contributions are not false, inaccurate, or
                      misleading.{" "}
                    </li>
                    <li>
                      Your Contributions are not unsolicited or unauthorised
                      advertising, promotional materials, pyramid schemes, chain
                      letters, spam, mass mailings, or other forms of
                      solicitation.{" "}
                    </li>
                    <li>
                      Your Contributions are not obscene, lewd, lascivious,
                      filthy, violent, harassing, libelous, slanderous, or
                      otherwise objectionable (as determined by us).{" "}
                    </li>
                    <li>
                      Your Contributions do not ridicule, mock, disparage,
                      intimidate, or abuse anyone.{" "}
                    </li>
                    <li>
                      Your Contributions are not used to harass or threaten (in
                      the legal sense of those terms) any other person and to
                      promote violence against a specific person or class of
                      people.
                    </li>
                    <li>
                      {" "}
                      Your Contributions do not violate any applicable law,
                      regulation, or rule.
                    </li>
                    <li>
                      {" "}
                      Your Contributions do not violate the privacy or publicity
                      rights of any third party.{" "}
                    </li>
                    <li>
                      Your Contributions do not violate any applicable law
                      concerning child pornography, or otherwise intended to
                      protect the health or well-being of minors.
                    </li>
                    <li>
                      {" "}
                      Your Contributions do not include any offensive comments
                      that are connected to race, national origin, gender,
                      sexual preference, or physical handicap.{" "}
                    </li>
                    <li>
                      Your Contributions do not otherwise violate, or link to
                      material that violates, any provision of these Legal
                      Terms, or any applicable law or regulation.{" "}
                    </li>
                  </ul>
                  <p style={{ fontSize: "10px" }}>
                    Any use of the Services in violation of the foregoing
                    violates these Legal Terms and may result in, among other
                    things, termination or suspension of your rights to use the
                    Services.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    9. CONTRIBUTION LICENSE
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    {" "}
                    You and Services agree that we may access, store, process,
                    and use any information and personal data that you provide
                    and your choices (including settings). By submitting
                    suggestions or other feedback regarding the Services, you
                    agree that we can use and share such feedback for any
                    purpose without compensation to you.{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    We do not assert any ownership over your Contributions. You
                    retain full ownership of all of your Contributions and any
                    intellectual property rights or other proprietary rights
                    associated with your Contributions. We are not liable for
                    any statements or representations in your Contributions
                    provided by you in any area on the Services. You are solely
                    responsible for your Contributions to the Services and you
                    expressly agree to exonerate us from any and all
                    responsibility and to refrain from any legal action against
                    us regarding your Contributions. 10. GUIDELINES FOR REVIEWS
                    We may provide you areas on the Services to leave reviews or
                    ratings. When posting a review, you must comply with the
                    following criteria: (1) you should have firsthand experience
                    with the person/entity being reviewed; (2) your reviews
                    should not contain offensive profanity, or abusive, racist,
                    offensive, or hateful language; (3) your reviews should not
                    contain discriminatory references based on religion, race,
                    gender, national origin, age, marital status, sexual
                    orientation, or disability; (4) your reviews should not
                    contain references to illegal activity; (5) you should not
                    be affiliated with competitors if posting negative reviews;
                    (6) you should not make any conclusions as to the legality
                    of conduct; (7) you may not post any false or misleading
                    statements; and (8) you may not organise a campaign
                    encouraging others to post reviews, whether positive or
                    negative. We may accept, reject, or remove reviews in our
                    sole discretion. We have absolutely no obligation to screen
                    reviews or to delete reviews, even if anyone considers
                    reviews objectionable or inaccurate. Reviews are not
                    endorsed by us, and do not necessarily represent our
                    opinions or the views of any of our affiliates or partners.
                    We do not assume liability for any review or for any claims,
                    liabilities, or losses resulting from any review. By posting
                    a review, you hereby grant to us a perpetual, non-exclusive,
                    worldwide, royalty-free, fully paid, assignable, and
                    sublicensable right and licence to reproduce, modify,
                    translate, transmit by any means, display, perform, and/or
                    distribute all content relating to review.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    {" "}
                    10. GUIDELINES FOR REVIEWS
                  </p>

                  <p style={{ fontSize: "10px" }}>
                    We may provide you areas on the Services to leave reviews or
                    ratings. When posting a review, you must comply with the
                    following criteria: (1) you should have firsthand experience
                    with the person/entity being reviewed; (2) your reviews
                    should not contain offensive profanity, or abusive, racist,
                    offensive, or hateful language; (3) your reviews should not
                    contain discriminatory references based on religion, race,
                    gender, national origin, age, marital status, sexual
                    orientation, or disability; (4) your reviews should not
                    contain references to illegal activity; (5) you should not
                    be affiliated with competitors if posting negative reviews;
                    (6) you should not make any conclusions as to the legality
                    of conduct; (7) you may not post any false or misleading
                    statements; and (8) you may not organise a campaign
                    encouraging others to post reviews, whether positive or
                    negative.{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    We may accept, reject, or remove reviews in our sole
                    discretion. We have absolutely no obligation to screen
                    reviews or to delete reviews, even if anyone considers
                    reviews objectionable or inaccurate. Reviews are not
                    endorsed by us, and do not necessarily represent our
                    opinions or the views of any of our affiliates or partners.
                    We do not assume liability for any review or for any claims,
                    liabilities, or losses resulting from any review. By posting
                    a review, you hereby grant to us a perpetual, non-exclusive,
                    worldwide, royalty-free, fully paid, assignable, and
                    sublicensable right and licence to reproduce, modify,
                    translate, transmit by any means, display, perform, and/or
                    distribute all content relating to review.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    11. SERVICES MANAGEMENT{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    We reserve the right, but not the obligation, to: (1)
                    monitor the Services for violations of these Legal Terms;
                    (2) take appropriate legal action against anyone who, in our
                    sole discretion, violates the law or these Legal Terms,
                    including without limitation, reporting such user to law
                    enforcement authorities; (3) in our sole discretion and
                    without limitation, refuse, restrict access to, limit the
                    availability of, or disable (to the extent technologically
                    feasible) any of your Contributions or any portion thereof;
                    (4) in our sole discretion and without limitation, notice,
                    or liability, to remove from the Services or otherwise
                    disable all files and content that are excessive in size or
                    are in any way burdensome to our systems; and (5) otherwise
                    manage the Services in a manner designed to protect our
                    rights and property and to facilitate the proper functioning
                    of the Services.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    12. PRIVACY POLICY
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    We care about data privacy and security. By using the
                    Services, you agree to be bound by our Privacy Policy posted
                    on the Services, which is incorporated into these Legal
                    Terms. Please be advised the Services are hosted in Nigeria.
                    If you access the Services from any other region of the
                    world with laws or other requirements governing personal
                    data collection, use, or disclosure that differ from
                    applicable laws in Nigeria, then through your continued use
                    of the Services, you are transferring your data to Nigeria,
                    and you expressly consent to have your data transferred to
                    and processed in Nigeria.{" "}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    13. TERM AND TERMINATION{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    These Legal Terms shall remain in full force and effect
                    while you use the Services. WITHOUT LIMITING ANY OTHER
                    PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN
                    OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY
                    ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING
                    CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR
                    NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
                    REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE
                    LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
                    TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR
                    DELETE YOU ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU
                    POSTED AT ANYTIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                    If we terminate or suspend your account for any reason, you
                    are prohibited from registering and creating a new account
                    under your name, a fake or borrowed name, or the name of any
                    third party, even if you may be acting on behalf of the
                    third party. In addition to terminating or suspending your
                    account, we reserve the right to take appropriate legal
                    action, including without limitation pursuing civil,
                    criminal, and injunctive redress.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    14. MODIFICATIONS AND INTERRUPTIONS{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    We reserve the right to change, modify, or remove the
                    contents of the Services at anytime or for any reason at our
                    sole discretion without notice. However, we have no
                    obligation to update any information on our Services. We
                    also reserve the right to modify or discontinue all or part
                    of the Services without notice at any time.{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    We will not be liable to you or any third party for any
                    modification, price change, suspension, or discontinuance of
                    the Services.{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    We cannot guarantee the Services will be available at all
                    times. We may experience hardware, software, or other
                    problems or need to perform maintenance related to the
                    Services, resulting in interruptions, delays, or errors. We
                    reserve the right to change, revise, update, suspend,
                    discontinue, or otherwise modify the Services at any time or
                    for any reason without notice to you. You agree that we have
                    no liability whatsoever for any loss, damage, or
                    inconvenience caused by your inability to access or use the
                    Services during any downtime or discontinuance of the
                    Services. Nothing in these Legal Terms will be construed to
                    obligate us to maintain and support the Services or to
                    supply any corrections, updates, or releases in connection
                    therewith.{" "}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    15. GOVERNING LAW{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    These Legal Terms shall be governed by and defined following
                    the laws of Nigeria. LegalMO [8thGear Partners Limited] and
                    yourself irrevocably consent that the courts of Nigeria
                    shall have exclusive jurisdiction to resolve any dispute
                    which may arise in connection with these Legal Terms.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    {" "}
                    16. DISPUTE RESOLUTION{" "}
                  </p>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    {" "}
                    Binding Arbitration{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    Any dispute arising out of or in connection with these Legal
                    Terms, including any question regarding its existence,
                    validity, or termination, shall be referred to and finally
                    resolved by the Lagos Court of Arbitration according to the
                    The Arbitration and Conciliation Act 1988, which, as a
                    result of referring to it, is considered as the part of this
                    clause. The number of arbitrators shall be two (2). The
                    seat, or legal place, or arbitration shall be Lagos,
                    Nigeria. The language of the proceedings shall be English.
                    The governing law of these Legal Terms shall be substantive
                    law of Nigeria.
                  </p>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    {" "}
                    Restrictions
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    {" "}
                    The Parties agree that any arbitration shall be limited to
                    the Dispute between the Parties individually. To the full
                    extent permitted by law, (a) no arbitration shall be joined
                    with any other proceeding; (b) there is no right or
                    authority for any Dispute to be arbitrated on a class-action
                    basis or to utilize class action procedures; and (c) there
                    is no right or authority for any Dispute to be brought in a
                    purported representative capacity on behalf of the general
                    public or any other persons.{" "}
                  </p>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    Exceptions to Arbitration{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    {" "}
                    The Parties agree that the following Disputes are not
                    subject to the above provisions concerning binding
                    arbitration: (a) any Disputes seeking to enforce or protect,
                    or concerning the validity of, any of the intellectual
                    property rights of a Party; (b) any Dispute related to, or
                    arising from, allegations of theft,{" "}
                    <b>
                      providing services for this platform’s user outside the
                      platform without LegalMO’s prior notice,
                    </b>{" "}
                    piracy, invasion of privacy, or unauthorized use; and (c)
                    any claim for injunctive relief. If this provision is found
                    to be illegal or unenforceable, then neither Party will
                    elect to arbitrate any Dispute falling within that portion
                    of this provision found to be illegal or unenforceable and
                    such Dispute shall be decided by a court of competent
                    jurisdiction within the courts listed for jurisdiction
                    above, and the Parties agree to submit to the personal
                    jurisdiction of that court.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    17. CORRECTIONS
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    There may be information on the Services that contains
                    typographical errors, inaccuracies, or omissions, including
                    descriptions, pricing, availability, and various other
                    information. We reserve the right to correct any errors,
                    inaccuracies, or omissions and to change or update the
                    information on the Services at any time, without prior
                    notice.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    {" "}
                    18. DISCLAIMER{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE
                    BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT
                    YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE
                    DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION
                    WITH THE SERVICES AND YOUR USE THERE OF, INCLUDING, WITHOUT
                    LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE
                    MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR
                    COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY
                    WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND
                    WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1)
                    ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,
                    (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
                    WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
                    SERVICES, (3) ANY UNAUTHORISED ACCESS TO OR USE OF OUR
                    SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
                    AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY
                    INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
                    SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE
                    WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY
                    THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY
                    CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND
                    INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
                    TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIATHE SERVICES. WE
                    DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY
                    FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD
                    PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY
                    WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR
                    OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY
                    WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN
                    YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
                    AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY
                    MEDIUMOR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST
                    JUDGEMENT AND EXERCISE CAUTION WHERE APPROPRIATE.{" "}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    19. LIMITATIONS OF LIABILITY{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS
                    BELIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                    CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                    DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA,
                    OROTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN
                    IF WEHAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED
                    HEREIN,OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND
                    REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE
                    LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE
                    SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
                    CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW
                    LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR
                    LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU,
                    SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT
                    APPLY TO YOU, AND YOU MAY HAVE ADDITIONALRIGHTS.{" "}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    20. INDEMNIFICATION{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    You agree to defend, indemnify, and hold us harmless,
                    including our subsidiaries, affiliates, and all of our
                    respective officers, agents, partners, and employees, from
                    and against any loss, damage, liability, claim, or demand,
                    including reasonable attorneys’ fees and expenses, made by
                    any third party due to or arising out of: (1)use of the
                    Services; (2) breach of these Legal Terms; (3) any breach of
                    your representations and warranties set forth in these Legal
                    Terms; (4) your violation of the rights of a third party,
                    including but not limited to intellectual property rights;
                    or (5)any overt harmful act toward any other user of the
                    Services with whom you connected via the Services.
                    Notwithstanding the foregoing, we reserve the right, at your
                    expense, to assume the exclusive defence and control of any
                    matter for which you are required to indemnify us, and you
                    agree to cooperate, at your expense, without defence of such
                    claims. We will use reasonable efforts to notify you of any
                    such claim, action, or proceeding which is subject to this
                    indemnification upon becoming aware of it.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    21. USER DATA{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    We will maintain certain data that you transmit to the
                    Services for the purpose of managing the performance of the
                    Services, as well as data relating to your use of the
                    Services. Although we perform regular routine backups of
                    data, you are solely responsible for all data that you
                    transmit or that relates to any activity you have undertaken
                    using the Services. You agree that we shall have no
                    liability to you for any loss or corruption of any such
                    data, and you hereby waive any right of action against us
                    arising from any such loss or corruption of such data.{" "}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS,AND SIGNATURES
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    Visiting the Services, sending us emails, and completing
                    online forms constitute electronic communications. You
                    consent to receive electronic communications, and you agree
                    that all agreements, notices, disclosures, and other
                    communications we provide to you electronically, via email
                    and on the Services, satisfy any legal requirement that such
                    communication be in writing. YOU HEREBY AGREE TO THE USE OF
                    ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS,
                    AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS
                    OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE
                    SERVICES. You hereby waive any rights or requirements under
                    any statutes, regulations, rules, ordinances, or other laws
                    in any jurisdiction which require an original signature or
                    delivery or retention of non-electronic records, or to
                    payments or the granting of credits by any means other than
                    electronic means.{" "}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    23. MISCELLANEOUS{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    These Legal Terms and any policies or operating rules posted
                    by us on the Services or in respect to the Services
                    constitute the entire agreement and understanding between
                    you and us. Our failure to exercise or enforce any right or
                    provision of these Legal Terms shall not operate as a waiver
                    of such right or provision. These Legal Terms operate to the
                    fullest extent permissible by law. We may assign any or all
                    of our rights and obligations to others at any time. We
                    shall not be responsible or liable for any loss, damage,
                    delay, or failure to act caused by any cause beyond our
                    reasonable control. If any provision or part of a provision
                    of these Legal Terms is determined to be unlawful, void, or
                    unenforceable, that provision or part of the provision is
                    deemed severable from these Legal Terms and does not affect
                    the validity and enforceability of any remaining provisions.
                    There is no joint venture, partnership, employment or agency
                    relationship created between you and us as a result of these
                    Legal Terms or use of the Services. You agree that these
                    Legal Terms will not be construed against us by virtue of
                    having drafted them. You hereby waive any and all defences
                    you may have based on the electronic form of these Legal
                    Terms and the lack of signing by the parties hereto to
                    execute these Legal Terms.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    {" "}
                    24. CONTACT US{" "}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    In order to resolve a complaint regarding the Services or to
                    receive further information regarding use of the Services,
                    please contact us at:{" "}
                  </p>
                  <ul
                    className=""
                    style={{ fontSize: "10px", listStyle: "none" }}
                  >
                    <li>LegalMO [8thGear Partners Limited] </li>
                    <li>No 41, CMD Road Magodo, Lagos State 100248 Nigeria </li>
                    <li style={{ color: "#7e7e7f" }}>
                      Phone:{" "}
                      <a
                        href="tel:+2348094818884"
                        className="text-decoration-none"
                        style={{ color: "#7e7e7f" }}
                      >
                        08094818884
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@legalmo.biz">info@legalmo.biz</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [showContactButtons, setShowContactButtons] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const togglePrivacyModal = () => {
    setShowPrivacyModal(!showPrivacyModal);
  };

  const closePrivacyModal = () => {
    setShowPrivacyModal(false);
  };

  const [showTermsModal, setShowTermsModal] = useState(false);
  const toggleTermsModal = () => {
    setShowTermsModal(!showTermsModal);
  };
  const closeTermsModal = () => {
    setShowTermsModal(false);
  };

  const toggleContactButtons = () => {
    setShowContactButtons(!showContactButtons);
  };
  return (
    <>
      <div
        className="p-md-5 p-4 position-relative"
        style={{ background: "#878787" }}
      >
        <div className="px-lg-5 mx-xl-5">
          <div className="general-footer row py-2 py-md-5 ">
            <div className="col">
              <img src={Logo} alt="logo" className="footer-image" />
            </div>
            <div className=" col d-flex  flex-column text-white gap-2 align-items-md-center ">
              <p className="text-white pe-lg-2">Quick links</p>
              <div className="d-flex flex-column gap-4">
                <Link
                  to="/about-us"
                  className="text-white text-decoration-none"
                >
                  About
                </Link>
                <Link
                  className="text-white text-decoration-none"
                  onClick={toggleContactButtons}
                >
                  Contact
                </Link>
                {showContactButtons && (
                  <div
                    role="group"
                    aria-label="Basic example"
                    className="btn-group position-absolute footer-btn"
                  >
                    {/* <button type="button" className="btn btn-primary">
                    Send an Email
                  </button> */}
                    <a
                      href="mailto:info@legalmo.biz"
                      className="btn btn-primary"
                    >
                      Send an Email
                    </a>

                    <div
                      className="my-2"
                      style={{ borderLeft: "1px solid white" }}
                    ></div>
                    {/* <button type="button" className="btn btn-primary">
                      Speak to an Agent
                    </button> */}
                    <a href="tel:+2348094818884" className="btn btn-primary">
                      Speak to an Agent
                    </a>
                  </div>
                )}
                <a
                  onClick={toggleTermsModal}
                  className="text-white text-decoration-none"
                >
                  Terms of use
                </a>
                <a
                  onClick={togglePrivacyModal}
                  className="text-white text-decoration-none"
                >
                  Privacy policy
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-4 mt-5 mt-sm-0 d-flex align-items-center flex-column text-white gap-3 ">
              <p className="text-white">Follow us</p>
              <div className="d-flex gap-4">
                <img src={FB} alt="social" />
                <img src={Insta} alt="social" />
                <img src={Linked} alt="social" />
                <img src={Twitter} alt="social" />
              </div>
            </div>
          </div>

          <p className="d-sm-none text-white text-center mt-5 p-small">
            ©All rights reserved 2023, LegalMO.
          </p>
          <p className="d-none d-sm-flex text-white mt-5 p-small">
            ©All rights reserved 2023, LegalMO.
          </p>
        </div>
      </div>
      <PrivacyModal
        showPrivacyModal={showPrivacyModal}
        closePrivacyModal={closePrivacyModal}
      />

      <TermsModal
        showTermsModal={showTermsModal}
        closeTermsModal={closeTermsModal}
      />
    </>
  );
};

export default Footer;
