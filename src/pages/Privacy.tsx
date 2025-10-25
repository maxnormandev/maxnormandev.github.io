import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Theme Park Tourist</title>
        <meta name="description" content="Privacy Policy for Theme Park Tourist travel planning website." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">🔒 Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p>
            We respect your privacy. Any personal information collected will be handled in accordance with applicable 
            data protection laws.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information Collection</h2>
            <p>
              Currently, this website does not collect personal information. If we implement features that collect 
              data (such as email subscriptions or contact forms), this policy will be updated accordingly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Analytics</h2>
            <p>
              We may use cookies and analytics tools to improve user experience and understand site usage. These 
              technologies help us provide better content and services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the 
              privacy practices of these external sites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p>
              While we strive to protect any information that may be collected, no method of transmission over the 
              internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page 
              with an updated revision date.
            </p>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
