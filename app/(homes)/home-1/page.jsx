import Brands from "@/components/common/Brands";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Facts from "@/components/homes/home-4/Facts";
import Blog from "@/components/homes/home-5/Blog";
import Cta from "@/components/homes/home-5/Cta";
import Faq from "@/components/homes/home-5/Faq";
import Features from "@/components/homes/home-5/Features";
import Hero from "@/components/homes/home-5/Hero";
import Howworks from "@/components/homes/home-5/Howworks";
import Pricing from "@/components/homes/home-5/Pricing";
import Support from "@/components/homes/home-5/Support";
import Team from "@/components/homes/home-5/Team";
import Testimonials from "@/components/homes/home-5/Testimonials";
import React from "react";
export const metadata = {
  title:
    "Prowebcoder | Shopify experts, WordPress developers, BigCommerce specialists, and mobile app developers.",
  description:
    "Web development services specializing in Shopify, WordPress, BigCommerce, and mobile app development. Our team delivers high-quality solutions for startups and enterprises.",
};
export default function HomePage5() {
  return (
    <>
      <div className=" page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        <Header4 />
        <div id="wrapper" className="wrap">
          <Hero />
          <div
            id="companies_sponsores"
            className="companies-sponsores section panel overflow-hidden rounded-bottom-3 bg-secondary dark:bg-gray-700 dark:bg-opacity-50"
          >
            <div className="section-outer panel pb-4 sm:pb-8 xl:pb-9">
              <div className="container sm:max-w-lg xl:max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
                    data-anime="onview: -100; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
                  >
                    <p className="fs-6 sm:fs-5 lg:fs-4 xl:fs-3 fw-medium">
                      1800+ customers large and small rely on us for trust
                      transformation
                    </p>
                    <div className="block-panel panel">
                      <div className="element-brands text-black dark:text-white mask-x">
                        <Brands />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Features />
          <hr className="w-100 m-0 d-block lg:d-none" />
           <Facts />
          <Cta />
          <Howworks />
         
          <Pricing />
          
          <Faq />
          <Support />
          <Team />
          {/* <Blog /> */}
        </div>
        <Footer4 />
      </div>
    </>
  );
}
