import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
export const metadata = {
  title:
    "Prowebcoder | Shopify experts, WordPress developers, BigCommerce specialists, and mobile app developers.",
  description:
    "Prowebcoder - Web development services specializing in Shopify, WordPress, BigCommerce, and mobile app development. Our team delivers high-quality solutions for startups and enterprises.",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap"></div>
        <Footer2 />
      </div>
    </>
  );
}
