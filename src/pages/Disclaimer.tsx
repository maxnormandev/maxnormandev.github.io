import { Helmet } from "react-helmet";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | Theme Park Tourist</title>
        <meta name="description" content="Legal disclaimer for Theme Park Tourist - an independent travel planning resource." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p>
            This website provides general travel planning information and advice for visitors to Orlando, Florida. 
            The content is created for informational and educational purposes only. While we strive to keep information 
            accurate and up to date, we make no guarantees about completeness, reliability, or accuracy.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Not Affiliated</h2>
            <p>
              This site is an independent resource and is not affiliated with, authorized by, endorsed by, or in any 
              way officially connected with The Walt Disney Company, Universal Parks & Resorts, or any of their 
              subsidiaries or affiliates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            <p>
              All trademarks, service marks, trade names, product names, and logos mentioned are the property of their 
              respective owners. References are made strictly for descriptive and informational purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Advice Only</h2>
            <p>
              The information provided here should not be taken as professional travel, legal, or financial advice. 
              Visitors should verify details (such as park hours, ticket prices, and policies) directly with official 
              sources before making decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Liability</h2>
            <p>
              We are not responsible for any loss, injury, inconvenience, or damages resulting from reliance on 
              information provided on this site.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
