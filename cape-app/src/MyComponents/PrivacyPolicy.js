import React from 'react';
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
    localStorage.clear();
  localStorage.setItem("show", false);
    return (
        <div class="container">
            <h1>Privacy Policy</h1>
            <br />
            <p>
                Our team members built the CAPE - Coding Analysis for programming enthuasists app as a Free app. This SERVICE is provided by CAPE.us at no cost and is intended for use as is. This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service. If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Nova - learn languages unless otherwise defined in this Privacy Policy.
            </p>
            <br />
            <h3>Information Collection and Use</h3>
            <br />
            <p>
                For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to hello@CAPE.co. The information that I request will be retained on your device and is not collected by me in any way.The app does use third party services that may collect information used to identify you. Link to privacy policy of third-party service providers used by the app.
            </p>
            <br />
            <h3>Log Data</h3>
            <br />
            <p>
                I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.
            </p>
            <br />
            <h3>Cookies</h3>
            <br />
            <p>
                Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.

            </p>
            <br />
            <h3>Service Providers</h3><br />
            <p>I may employ third-party companies and individuals due to the following reasons: <br />
                ●	To facilitate our Service;<br />
                ●	To provide the Service on our behalf;<br />
                ●	To perform Service-related services; or <br />
                ●	To assist us in analyzing how our Service is used.
                I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.

            </p>
            <br />
            <h3>Security</h3>
            <br />
            <p>
                I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
            </p>
            <br />
            <h3>Links to Other Sites</h3>
            <br />
            <p>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
            <br />
            <h3>Children’s Privacy</h3>
            <br />
            <p>
                These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.
            </p>
            <br />
            <h3>Changes to This Privacy Policy</h3>
            <br />
            <p>
                I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.
                This policy is effective as of 10 May 2022.

            </p>
            <br />
            <h3>Contact Us</h3>
            <br />
            <p>If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at <Link to="/contact">this.</Link></p>
        </div>
    )
}