import PageHero from '@/components/brand/page-hero'
import PageShell from '@/components/brand/page-shell'

export const metadata = {
  title: 'Terms & Conditions — Royce White for U.S. Senate',
  description:
    'Terms of Service governing your access to and use of the Royce White for Senate website.',
}

const SECTIONS = [
  {
    n: '1',
    heading: 'Introduction',
    body: [
      'Last Updated 01/04/2025',
      'Our aim is to keep this Agreement as readable as possible, but in some cases for legal reasons, some of the language is required “legalese”.',
    ],
  },
  {
    n: '2',
    heading: 'Your Acceptance of this Agreement',
    body: [
      'These terms of service are entered into by and between You and Royce White for Senate, d/b/a Royce White for Senate. (“Company,” “we,” “our,” or “us”). The following terms and conditions, together with any documents they expressly incorporate by reference (collectively “Terms of Service”), govern your access to and use of roycewhite.us, including any content, functionality, and services offered on or through lesjonesroofing.com (the “Website”).',
      'Please read the Terms of Service carefully before you start to use the Website.',
      'By using the Website [or by clicking to accept or agree to the Terms of Service when this option is made available to you], you accept and agree to be bound and abide by these Terms of Service and our Privacy Policy, incorporated herein by reference. If you do not want to agree to these Terms of Service, you must not access or use the Website.',
      'You must be at least 13 years old to use this Website. However, children of all ages may use the Website if enabled by a parent or legal guardian. If you are under 18, you represent that you have your parent or guardian’s permission to use the Website. Please have them read these Terms of Service with you.',
      'If you are a parent or legal guardian of a user under the age of 18, by allowing your child to use the Website, you are subject to the terms of these Terms of Service and responsible for your child’s activity on the Website.',
      'BY ACCESSING AND USING THIS WEBSITE, YOU:',
    ],
    list: [
      'ACCEPT AND AGREE TO BE BOUND AND COMPLY WITH THESE TERMS OF SERVICE;',
      'YOU REPRESENT AND WARRANT THAT YOU ARE THE LEGAL AGE OF MAJORITY UNDER APPLICABLE LAW TO FORM A BINDING CONTRACT WITH US; AND,',
      'YOU AGREE IF YOU ACCESS THE WEBSITE FROM A JURISDICTION WHERE IT IS NOT PERMITTED, YOU DO SO AT YOUR OWN RISK.',
    ],
  },
  {
    n: '3',
    heading: 'Updates to Terms of Service',
    body: [
      'We may revise and update these Terms of Service from time to time in our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Website thereafter.',
      'Continuing to use the Website following the posting of revised Terms of Service means that you accept and agree to the changes. You are expected to check this page each time you access this Website so you are aware of any changes, as they are binding on you.',
    ],
  },
  {
    n: '4',
    heading: 'Your Responsibilities',
    body: [
      'You are required to ensure that all persons who access the Website are aware of this Agreement and comply with it. It is a condition of your use of the Website that all the information you provide on the Website is correct, current, and complete.',
      'YOU ARE SOLELY AND ENTIRELY RESPONSIBLE FOR YOUR USE OF THE WEBSITE AND YOUR COMPUTER, INTERNET AND DATA SECURITY.',
    ],
  },
  {
    n: '5',
    heading: 'Prohibited Activities',
    body: ['You may use the Website only for lawful purposes and in accordance with these Terms of Service. You agree not to use the Website:'],
    list: [
      'In any way that violates any applicable federal, state, local or international law or regulation (including, without limitation, any laws regarding the exports of data software to and from the U.S. or other countries).',
      'For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information or otherwise.',
      'To send, knowingly receive, upload, download, use, or re-use any material that does not comply with the Submission Standards set out in these Terms of Service.',
      'To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail,” “chain letter,” “spam,” or any other similar solicitation.',
      'To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other persona or entity (including, without limitation, by using email addresses associated with any of the foregoing).',
      'To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of the website, or which as determined by us, may harm the Company or users of the website, or expose them to liability.',
    ],
    bodyAfter: ['Additionally, you agree not to:'],
    listAfter: [
      'Use the Website in any manner that could disable, overburden, damage, or impair the site or interfere with any other party’s use of the Website, including their ability to engage in real-time activities through the Website.',
      'Use any robot, spider, or other automatic device, process, or means to access the Website for any purpose, including monitoring or copying any of the material on the Website.',
      'Use any manual process to monitor or copy any of the material on the Website, or for any other purpose not expressly authorized in these Terms of Service, without our prior written consent.',
      'Use any device, software, or routine that interferes with the proper working of the Website.',
      'Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.',
      'Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website, the server on which the Website is stored, or any server, computer, or database connected to the Website.',
      'Attack the Website via a denial-of-service attack or a distributed denial-of-service attack.',
      'Otherwise attempting to interfere with the proper working of the Website.',
    ],
  },
  {
    n: '6',
    heading: 'Intellectual Property Rights',
    body: [
      'The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Company, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.',
      'These Terms of Service permit you to use the Website for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website, except as follows:',
    ],
    list: [
      'Your computer may temporarily store copies of such material in RAM incidental to your accessing and viewing those materials.',
      'You may store files that are automatically cached by your Web browser for display enhancement purposes.',
      'You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use and not for further reproduction, publication or distribution.',
    ],
    bodyAfter: ['You must not:'],
    listAfter: [
      'Modify copies of any materials from this site.',
      'Delete or alter any of the copyright, trademark, or other proprietary rights notices from copies of materials from this site.',
    ],
    bodyTail: [
      'You must not access or use for any commercial purposes any part of the website or any services or materials available through the Website.',
      'If you print, copy, modify, download, or otherwise use or provide any other person with access to any part of the Website in breach of the Terms of Service, your right to use the Website will stop immediately and you must, at our option, return or destroy any copies of the materials you have made. No right, title, or interest in or to the Website or any content on the Website is transferred to you, and all rights not expressly granted are reserved by the Company. Any use of the Website not expressly permitted by these Terms of Service is a breach of these Terms of Service and may violate copyright, trademark, and other laws.',
    ],
  },
  {
    n: '7',
    heading: 'Our Rights',
    body: ['We have the right, without provision of notice to:'],
    list: [
      'Take appropriate legal action, including, without limitation, referral to or cooperation with law enforcement or regulatory authorities, or notifying the harmed party of any illegal or unauthorized use of the Website; and',
      'Terminate or suspend your access to all or part of the Website for any or no reason, including, without limitation, any violation of these Terms of Service.',
    ],
    bodyTail: [
      'YOU WAIVE AND HOLD HARMLESS COMPANY AND ITS PARENT, SUBSIDIARIES, AFFILIATES, AND THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, SUPPLIERS, AND SUCCESSORS FROM ANY AND ALL CLAIMS RESULTING FROM ANY ACTION TAKEN BY THE COMPANY AND ANY OF THE FOREGOING PARTIES RELATING TO ANY, INVESTIGATIONS BY EITHER THE COMPANY OR BY LAW ENFORCEMENT AUTHORITIES.',
    ],
  },
  {
    n: '8',
    heading: 'Third-Party Links and Content',
    body: [
      'For your convenience, this Website may provide links or pointers to third-party sites or third-party content. We make no representations about any other websites or third-party content that may be accessed from this Website. If you choose to access any such sites, you do so at your own risk. We have no control over the third-party content or any such third-party sites and accept no responsibility for such sites or for any loss or damage that may arise from your use of them. You are subject to any terms and conditions of such third-party sites.',
    ],
  },
  {
    n: '9',
    heading: 'Payment and Fees',
    body: [
      'You may be required to purchase or pay a fee to access our services. We accept Checks, Visa, Mastercard, American Express and Wire Transfer for all purchases. However, Company does not guarantee the availability of any payment method at any moment and Company may add, remove or suspend any payment method temporarily or permanently at Company’s sole discretion. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Website and to promptly update account and payment information, including email address, payment method, and payment card expiration date, in order to complete your purchases and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in USD.',
      'You agree to pay all charges or fees at the prices then in effect for your purchases, and you authorize us to charge your chosen payment provider for any such amounts upon making your purchase.',
      'We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment. We also reserve the right to refuse any order placed through the Website.',
    ],
  },
  {
    n: '10',
    heading: 'Disclaimers, Liability and Indemnification',
    body: [
      'YOU UNDERSTAND AND AGREE THAT YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY GOODS, DIGITAL PRODUCTS, SERVICES, INFORMATION OR ITEMS FOUND OR ATTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY GOODS, SERVICES, DIGITAL PRODUCTS, INFORMATION OR ITEMS FOUND OR ATTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.',
      'YOU ACKNOWLEDGE AND AGREE THAT COMPANY OR ITS RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, SUPPLIERS, OR SUCCESSORS MAKE NO WARRANTY, REPRESENTATION, OR ENDORSEMENT WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, SUITABILITY, ACCURACY, CURRENCY, OR AVAILABILITY OF THE WEBSITE OR ITS CONTENTS OR THAT ANY GOODS, SERVICES, DIGITAL PRODUCTS, INFORMATION OR ITEMS FOUND OR ATTAINED THROUGH THE WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR WEBSITE OR THE SERVER THAT MAKES IT AVAILABLE OR CONTENT ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR DESTRUCTIVE CODE.',
    ],
    subSections: [
      {
        title: 'How We Limit Our Liability to You',
        body: [
          'EXCEPT WHERE SUCH EXCLUSIONS ARE PROHIBITED BY LAW, IN NO EVENT SHALL THE COMPANY NOR ITS RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, SUPPLIERS, OR SUCCESSORS BE LIABLE UNDER THESE TERMS OF SERVICE TO YOU OR ANY THIRD-PARTY FOR ANY CONSEQUENTIAL, INDIRECT, INCIDENTAL, EXEMPLARY, SPECIAL, OR PUNITIVE DAMAGES WHATSOEVER, INCLUDING ANY DAMAGES FOR BUSINESS INTERRUPTION, LOSS OF USE, DATA, REVENUE OR PROFIT, COST OF CAPITAL, LOSS OF BUSINESS OPPORTUNITY, LOSS OF GOODWILL, WHETHER ARISING OUT OF BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), ANY OTHER THEORY OF LIABILITY, OR OTHERWISE, REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE AND WHETHER OR NOT THE COMPANY WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
        ],
      },
      {
        title: 'Indemnification',
        body: [
          'To the maximum extent permitted by applicable law, you agree to defend, indemnify, and hold harmless Company, its parent, subsidiaries, affiliates, and their respective directors, officers, employees, agents, service providers, contractors, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys’ fees) arising out of or relating to your breach of these Terms of Service or your use of the Website including, but not limited to, third-party sites and content, any use of the Website’s content and services other than as expressly authorized in these Terms of Service or any use of any goods, digital products and information purchased from this Website.',
        ],
      },
    ],
  },
  {
    n: '11',
    heading: 'Dispute Resolution',
    body: [
      'At Company’s sole discretion, it may require you to submit any disputes arising from these Terms of Service or use of the Website, including disputes arising from or concerning their interpretation, violation, invalidity, non-performance, or termination, to final and binding arbitration under the Rules of Arbitration of the American Arbitration Association applying Minnesota law. (If multiple jurisdictions, under applicable laws).',
      'ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OF USE OR THE WEBSITE MUST BE COMMENCED WITHIN 1 YEAR(S) AFTER THE CAUSE OF ACTION ACCRUES; OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.',
    ],
  },
  {
    n: '12',
    heading: 'Privacy Policy',
    body: [
      'Your provision of personal information through the Website is governed by our privacy policy located at https://lesjonesroofing.com/privacy-policy/ (the “Privacy Policy“).',
    ],
  },
  {
    n: '13',
    heading: 'Governing Law',
    body: [
      'The Website and these Terms of Service will be governed by and construed in accordance with the laws of the State of Minnesota and any applicable federal laws applicable therein, without giving effect to any choice or conflict of law provision, principle, or rule and notwithstanding your domicile, residence, or physical location. Any action or proceeding arising out of or relating to this Website and/or under these Terms of Service will be instituted in the courts of the State of Minnesota, and each party irrevocably submits to the exclusive jurisdiction of such courts in any such action or proceeding. You waive any and all objections to the exercise of jurisdiction over you by such courts and to the venue of such courts.',
      'The parties agree that the United Nations Convention on Contracts for the International Sale of Goods will not govern these Terms of Service or the rights and obligations of the parties under these Terms of Service.',
    ],
  },
  {
    n: '14',
    heading: 'Severability',
    body: [
      'If any provision of these Terms of Service is illegal or unenforceable under applicable law, the remainder of the provision will be amended to achieve as closely as possible the effect of the original term and all other provisions of these Terms of Service will continue in full force and effect.',
    ],
  },
  {
    n: '15',
    heading: 'Entire Terms of Service',
    body: [
      'These Terms of Service constitute the entire and only Terms of Service between the parties in relation to its subject matter and replaces and extinguishes all prior or simultaneous Terms of Services, undertakings, arrangements, understandings or statements of any nature made by the parties or any of them whether oral or written (and, if written, whether or not in draft form) with respect to such subject matter. Each of the parties acknowledges that they are not relying on any statements, warranties or representations given or made by any of them in relation to the subject matter of these Terms of Service, save those expressly set out in these Terms of Service, and that they shall have no rights or remedies with respect to such subject matter otherwise than under these Terms of Service save to the extent that they arise out of the fraud or fraudulent misrepresentation of another party. No variation of these Terms of Service shall be effective unless it is in writing and signed by or on behalf of Company.',
    ],
  },
  {
    n: '16',
    heading: 'Waiver',
    body: [
      'No failure to exercise, and no delay in exercising, on the part of either party, any right or any power hereunder shall operate as a waiver thereof, nor shall any single or partial exercise of any right or power hereunder preclude further exercise of that or any other right hereunder.',
    ],
  },
  {
    n: '17',
    heading: 'Notice',
    body: [
      'We may provide any notice to you under these Terms of Service by: (i) sending a message to the email address you provide to us and consent to us using; or (ii) by posting to the Website. Notices sent by email will be effective when we send the email and notices we provide by posting will be effective upon posting. It is your responsibility to keep your email address current.',
      'To give us notice under these Terms of Service, you must contact us as follows: (i) by personal delivery, overnight courier or registered or certified mail to Rocye White for Senate  P.O. Box 5473 Hopkins, MN 55343, Bloomington, MN, 55420, US. We may update the address for notices to us by posting a notice on this Website. Notices provided by personal delivery will be effective immediately once personally received by an authorized representative of Company. Notices provided by overnight courier or registered or certified mail will be effective once received and where confirmation has been provided to evidence the receipt of the notice.',
    ],
  },
]

const TermsConditionsPage = () => {
  return (
    <PageShell>
      <PageHero
        eyebrow="/terms-conditions — Terms of Service"
        number="001"
        title={
          <>
            Terms of{' '}
            <em className="not-italic italic text-liberty">Service.</em>
          </>
        }
        lede="By using the Website [or by clicking to accept or agree to the Terms of Service when this option is made available to you], you accept and agree to be bound and abide by these Terms of Service and our Privacy Policy, incorporated herein by reference. If you do not want to agree to these Terms of Service, you must not access or use the Website."
      />

      <section className="relative bg-parchment py-14 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay-light opacity-60 pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.05] top-[60px] right-10 text-[200px]"
        >
          002
        </span>

        <div className="relative mx-auto max-w-[900px] px-6 lg:px-12">
          <p className="brand-section-label text-patriot mb-8">/002 — Terms of Service</p>

          <div className="space-y-12">
            {SECTIONS.map((s) => (
              <article key={s.n} className="border-l-2 border-patriot/20 pl-6 lg:pl-8">
                <h2 className="font-display font-extrabold text-[26px] lg:text-[32px] leading-[1.2] text-navy-900 mb-6">
                  <span className="font-mono text-[14px] tracking-[0.1em] text-patriot mr-3">
                    /{s.n.padStart(2, '0')}
                  </span>
                  {s.heading}
                </h2>

                <div className="space-y-5 text-[15px] lg:text-[16px] leading-[1.75] text-ink/85 font-light">
                  {s.body.map((p) => (
                    <p key={p.slice(0, 50)}>{p}</p>
                  ))}

                  {s.list && (
                    <ul className="list-disc pl-6 space-y-3 marker:text-patriot">
                      {s.list.map((item) => (
                        <li key={item.slice(0, 50)}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {s.bodyAfter?.map((p) => <p key={p.slice(0, 50)}>{p}</p>)}

                  {s.listAfter && (
                    <ul className="list-disc pl-6 space-y-3 marker:text-patriot">
                      {s.listAfter.map((item) => (
                        <li key={item.slice(0, 50)}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {s.bodyTail?.map((p) => <p key={p.slice(0, 50)}>{p}</p>)}

                  {s.subSections?.map((sub) => (
                    <div key={sub.title} className="mt-8">
                      <h3 className="font-display font-bold text-[20px] leading-[1.3] text-navy-900 mb-4">
                        {sub.title}
                      </h3>
                      <div className="space-y-4">
                        {sub.body.map((p) => (
                          <p key={p.slice(0, 50)}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default TermsConditionsPage
