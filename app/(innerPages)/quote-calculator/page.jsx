import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Cta from "@/components/innerpages/features/Cta";
import QuoteCalculator from "@/components/innerpages/QuoteCalculator";
import Hero4 from "@/components/innerpages/features/Hero4";
export const metadata = {
  title:
    "Quote Calculator | Prowebcoder | Shopify experts, WordPress developers, BigCommerce specialists, and mobile app developers.",
  description:
    "Web development services specializing in Shopify, WordPress, BigCommerce, and mobile app development. Our team delivers high-quality solutions for startups and enterprises.",

};
export default function IntegrationPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero4/>
        <QuoteCalculator/>
 
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
