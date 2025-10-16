import React from 'react';
import Container from '../components/ui/Container';

const PrivacyPolicy: React.FC = () => {
  const websiteName = "Elkay Cinematics"; 
  const contactEmail = "kimeulucas198@gmail.com"; 
  const effectiveDate = "May 30, 2025";
  const governingJurisdiction = "Kenya";

  return (
    <div className="pt-20 pb-16 bg-white text-gray-800">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Privacy Policy
        </h1>

        <p className="mb-6 text-sm text-gray-600 text-center">
          Last Updated: <strong className="text-blue-600">{effectiveDate}</strong>
        </p>

        <p className="mb-6 text-lg">
          This Privacy Policy describes how <strong className="text-blue-600">{websiteName}</strong> ("we," "us," or "our") collects, uses, and discloses your information when you visit our website at [Your Website URL - e.g., www.yourwebsite.com] (the "Website"). By using our Website, you agree to the collection and use of information in accordance with this policy.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We collect various types of information for different purposes to provide and improve our services to you.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
          Personal Data
        </h3>
        <p className="mb-4">
          While using our Website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            Contact Information: Name, email address, phone number, and any other contact details you voluntarily provide when using our contact form or other communication channels.
          </li>
          <li>
            Inquiry Details: Information you provide about your project, service interest, or any other message you send to us.
          </li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
          Usage Data
        </h3>
        <p className="mb-6">
          We may also collect information on how the Website is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Website that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          <strong className="text-blue-600">{websiteName}</strong> uses the collected data for various purposes:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>To provide and maintain our Website.</li>
          <li>To respond to your inquiries and provide customer support.</li>
          <li>To understand and analyze how you use our Website and to improve its functionality and user experience.</li>
          <li>To monitor the usage of our Website.</li>
          <li>To detect, prevent, and address technical issues.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          3. Disclosure of Your Information
        </h2>
        <p className="mb-4">
          We may share your information in the following situations:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            With Your Consent: We may disclose your Personal Data for any purpose with your consent.
          </li>
          <li>
            Service Providers: We may employ third-party companies and individuals to facilitate our Website ("Service Providers"), to provide the Website on our behalf, to perform Website-related services, or to assist us in analyzing how our Website is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. (e.g., EmailJS for sending contact form emails).
          </li>
          <li>
            Legal Requirements: We may disclose your Personal Data in the good faith belief that such action is necessary to:
            <ul className="list-circle list-inside ml-4 mt-2">
              <li>Comply with a legal obligation.</li>
              <li>Protect and defend the rights or property of {websiteName}.</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Website.</li>
              <li>Protect the personal safety of users of the Website or the public.</li>
              <li>Protect against legal liability.</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          4. Security of Data
        </h2>
        <p className="mb-6">
          The security of your data is important to us. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. Remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          5. Your Data Protection Rights
        </h2>
        <p className="mb-4">
          Depending on your location and applicable laws, you may have certain data protection rights. In accordance with data protection laws in <strong className="text-blue-600">{governingJurisdiction}</strong> (e.g., Data Protection Act, 2019 in Kenya), your rights may include:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            The right to access: You have the right to request copies of your Personal Data.
          </li>
          <li>
            The right to rectification: You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.
          </li>
          <li>
            The right to erasure: You have the right to request that we erase your Personal Data, under certain conditions.
          </li>
          <li>
            The right to restrict processing: You have the right to request that we restrict the processing of your Personal Data, under certain conditions.
          </li>
          <li>
            The right to object to processing: You have the right to object to our processing of your Personal Data, under certain conditions.
          </li>
          <li>
            The right to data portability: You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
          </li>
        </ul>
        <p className="mb-6">
          If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          6. Links to Other Sites
        </h2>
        <p className="mb-6">
          Our Website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          7. Children's Privacy
        </h2>
        <p className="mb-6">
          Our Website does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          8. Changes to This Privacy Policy
        </h2>
        <p className="mb-6">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          9. Contact Us
        </h2>
        <p className="mb-6">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>By email: <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a></li>
        </ul>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;