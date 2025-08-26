import Header1 from "@/components/headers/Header1";

import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/innerpages/features/Hero";
import Hero2 from "@/components/innerpages/features/Hero2";
import KeyFeatures from "@/components/innerpages/features/KeyFeatures";
import Faq from "@/components/homes/home-2/Faq";
import Testimonials from "@/components/homes/home-3/Testimonials";
import Cta from "@/components/innerpages/features/Cta";
import Brands2 from "@/components/common/Brands2";
export const metadata = {
  title:
    "Prowebcoder | Shopify experts, WordPress developers, BigCommerce specialists, and mobile app developers.",
  description:
    "Web development services specializing in Shopify, WordPress, BigCommerce, and mobile app development. Our team delivers high-quality solutions for startups and enterprises.",

};
export default function FeaturesPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header1 />
        <div id="wrapper" className="wrap">
           <Hero2/>
          <Hero />
         
          {/* <KeyFeatures />
          <div className="pt-6 xl:pt-9"></div>
          <Faq />
          <Testimonials /> */}
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
              <h3
                className="h3 sm:h2 text-center mb-4 sm:mb-6 xl:mb-8"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                1800+ customers large and small rely on us for trust transformation


              </h3>
              <div
                className="block-panel panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                  <Brands2 />
                </div>
              </div>
            </div>
          </div>
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
