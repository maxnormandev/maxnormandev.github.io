import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use | Theme Park Tourist</title>
        <meta name="description" content="Terms of Use for Theme Park Tourist travel planning website." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">📜 Terms of Use</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p>
            By using this website, you agree to the following terms:
          </p>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Personal Use Only</h2>
            <p>
              Content is provided for personal, non-commercial use. You may not copy, reproduce, or redistribute 
              content without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Accuracy of Information</h2>
            <p>
              While we aim to provide accurate and timely information, theme park policies, ticketing, and schedules 
              may change without notice. Always confirm with official sources.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">External Links</h2>
            <p>
              Our site may include links to third-party websites. We are not responsible for the content, accuracy, 
              or practices of these external sites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Affiliate Disclosure</h2>
            <p>
              Some links may be affiliate links. This means we may earn a small commission if you make a purchase 
              through them, at no extra cost to you. We only recommend products and services we believe are useful 
              to travelers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p>
              Use of this site is at your own risk. We disclaim liability for any direct, indirect, incidental, or 
              consequential damages arising from use of the site or reliance on its content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
