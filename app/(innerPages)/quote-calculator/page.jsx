import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import Cta from "@/components/innerpages/features/Cta";
import QuoteCalculator from "@/components/innerpages/QuoteCalculator";
import Hero4 from "@/components/innerpages/features/Hero4";
export const metadata = {
  title:
    "Integrations || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
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
