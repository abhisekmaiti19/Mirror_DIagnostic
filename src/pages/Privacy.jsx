import { nanoid } from "nanoid";

export default function Privacy() {
  let data = [
    "1.Data Collection: Describe the types of personal information collected from visitors to the website, including name, email, phone number, visiting time, and date, when booking diagnostic tests or services",
    "2.Purpose of Data Collection: Clearly state the purpose for which personal information is collected, emphasizing that it is solely for the purpose of scheduling appointments and providing diagnostic services to customers",
    "3.Data Usage: Explain how the collected personal information will be used, highlighting that it will only be used internally by Mirror Diagnostic and will not be shared with third parties or used for marketing purposes without explicit consent",
    "4.Data Storage and Security: Detail the measures taken to ensure the security and confidentiality of customer data, including encryption, access controls, and regular security audits, to protect it from unauthorized access, disclosure, or misuse",
    "5.Data Retention: Specify the retention period for customer data, indicating how long it will be stored and when it will be securely deleted or anonymized once it is no longer needed for its intended purpose",
    "6.Customer Rights: Inform customers of their rights regarding their personal information, including the right to access, rectify, or delete their data, and provide instructions on how to exercise these rights",
    "7.Updates to Privacy Policy: State that the privacy policy may be updated from time to time to reflect changes in regulations or business practices, and provide the date of the last update. Encourage visitors to review the privacy policy periodically for any changes",
  ];
  return (
    <div className="relative w-full h-full mt-[100px]">
      <h1 className="text-[3rem] font-bold text-blue-primary-dark border-b-[2px] py-5 border-black/3">
        PRIVACY POLICY
      </h1>
      <p className="text-[2rem] my-[2rem]">
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You. We use Your Personal data to provide and improve the Service. By
        using the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy.
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
