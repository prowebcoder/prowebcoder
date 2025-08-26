import Header1 from "@/components/headers/Header1";
import Footer2 from "@/components/footers/Footer2";
import Brands from "@/components/common/Brands2";
import Portfolio from "@/components/common/Portfolio";
import Breadcumb from "@/components/otherPages/Breadcumb";
import ReviewsPage from "@/components/innerpages/ReviewsPage";
export const metadata = {
  title:
    "Portfolio | Prowebcoder | Shopify experts, WordPress developers, BigCommerce specialists, and mobile app developers.",
  description:
    "Web development services specializing in Shopify, WordPress, BigCommerce, and mobile app development. Our team delivers high-quality solutions for startups and enterprises.",

};
export default function ContactPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header1 />
        <div id="wrapper" className="wrap">
      <Breadcumb></Breadcumb>
<ReviewsPage />
          {/* <ContactLinks /> */}
        
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pb-8 sm:pb-9 xl:pb-9">
              <h5
                className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                Trusted by well-known brands.
              </h5>
              <div
                className="block-panel panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                  <Brands />
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <Footer2 />
      </div>
    </>
  );
}
