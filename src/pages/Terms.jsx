import { nanoid } from "nanoid";

export default function Terms() {
  let data = [
    "1.Service Offerings: Clearly list all diagnostic tests and services provided by Mirror Diagnostic on the website, along with relevant descriptions, prices, and any associated terms.",
    "2.Booking Process: Outline the procedure for booking diagnostic tests or services through the website, including the requirement to provide personal information such as name, email, phone number, visiting time, and date",
    "3.Data Collection: Explain that personal information provided by customers during the booking process will be collected and stored securely. Specify the types of data collected and the purpose of its collection, emphasizing that it will only be used for the purpose of scheduling appointments and providing services",
    "4.Data Storage and Security: Ensure customers that their personal data will be stored securely and protected from unauthorized access or disclosure. Describe the measures taken to safeguard the confidentiality and integrity of customer data, including encryption, access controls, and regular security audits",
    "5.Data Usage: Explicitly state that the personal information collected will not be used for any purpose other than scheduling appointments and providing services to customers. Assure customers that their data will not be shared with third parties or used for marketing or promotional activities without their consent",
    "6.Data Retention: Specify the retention period for customer data, outlining how long it will be stored and when it will be securely deleted or anonymized once it is no longer needed for its intended purpose",
    "7.Customer Consent: Require customers to explicitly consent to the collection, storage, and usage of their personal information for the purpose of scheduling appointments and providing services. Provide an option for customers to withdraw their consent and request the deletion of their data if desired",
  ];
  return (
    <div className="relative w-full h-full mt-[100px]">
      <h1 className="text-[3rem] font-bold text-blue-primary-dark border-b-[2px] py-5 border-black/3">
        Terms & Conditions
      </h1>
      <p className="text-[2rem] my-[3rem] mb-[6rem]">
        This website is operated by Mirror Diagnostic. Throughout the website:
        https://www.mirrordiagnostic.in, the terms “we”, “us” and “our” refer to
        Mirror Diagnostic. Mirror Diagnostic offers this website, including all
        information, tools and services available from this site to you, the
        user, conditioned upon your acceptance of all terms, conditions,
        policies and notices stated here. By visiting our site and/ or
        purchasing something from us, you engage in our “Service” and agree to
        be bound by the following terms and conditions (“Terms of Service”,
        “Terms”), including those additional terms and conditions and policies
        referenced herein and/or available by hyperlink. These Terms of Service
        apply to all users of the site, including without limitation users who
        are browsers, vendors, customers, merchants, and/ or contributors of
        content. Please read these Terms of Service carefully before accessing
        or using our website. By accessing or using any part of the site, you
        agree to be bound by these Terms of Service. If you do not agree to all
        the terms and conditions of this agreement, then you may not access the
        website or use any services. If these Terms of Service are considered an
        offer, acceptance is expressly limited to these Terms of Service. Any
        new features or tools which are added to the current store shall also be
        subject to the Terms of Service. You can review the most current version
        of the Terms of Service at any time on this page. We reserve the right
        to update, change or replace any part of these Terms of Service by
        posting updates and/or changes to our website. It is your responsibility
        to check this page periodically for changes. Your continued use of or
        access to the website following the posting of any changes constitutes
        acceptance of those changes.
      </p>
      <ul className="mt-[3rem]">
        {data.map((item) => {
          let id = nanoid();
          let items = item.split(":");
          return (
            <li className="my-[3rem]" key={id}>
              <h1 className="text-[3rem] font-semibold">{items[0]}</h1>
              <p className="text-[2rem]">{items[1]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
