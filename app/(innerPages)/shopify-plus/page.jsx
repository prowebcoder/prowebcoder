import Header2 from "@/components/headers/Header2";
import { features7 } from "@/data/features";
import Footer2 from "@/components/footers/Footer2";
import Cta from "@/components/innerpages/features/Cta";
import Brands2 from "@/components/common/Brands2";
import Hero3 from "@/components/innerpages/features/Hero3";
import Image from "next/image";
export const metadata = {
  title:
    "Prowebcoder | Shopify experts, WordPress developers, BigCommerce specialists, and mobile app developers.",
  description:
    "Web development services specializing in Shopify, WordPress, BigCommerce, and mobile app development. Our team delivers high-quality solutions for startups and enterprises.",

};
export default function ShopifyPlus() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
         <Hero3></Hero3>
         <div id="hero_header" className="hero-header section panel overflow-hidden">
             
               <div className="section-outer panel pt-9 lg:pt-5 pb-6 xl:pb-9">
                 <div className="container max-w-xl">
                   <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
                 
                     <div className="sticky-scene panel vstack gap-4 sm:gap-6 xl:gap-8">
                       {features7.map((feature) => (
                         <div
                           key={feature.id}
                           id={feature.featureID}
                           className="feature-item panel px-3 lg:px-4 py-4 rounded-2 bg-secondary dark:bg-gray-800"
                           data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                         >
                           <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                             <div className="order-0 lg:order-1">
                               <div className="panel w-100 rounded lg:rounded-2 overflow-hidden ">
                                 <Image
                                   src={feature.imgSrc}
                                   width={780}
                                   height={728}
                                   alt={feature.imgAlt}
                                 />
                               </div>
                             </div>
                             <div className="order-1 lg:order-0 col-12 sm:col-5">
                               <div className="panel vstack justify-center gap-4 h-100">
                                 <div>
                                   <div className="panel vstack gap-2">
                                     <span className="fs-6 fw-bold m-0 text-primary">
                                       {feature.id.toString().padStart(2, "0")}.
                                     </span>
                                     <h3 className="h4 lg:h2 m-0">{feature.title}</h3>
                                     <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                       {feature.description}
                                     </p>
                                     {feature.link && (
                                       <a
                                         href={feature.link.href}
                                         className="uc-link fw-bold hstack gap-narrow"
                                       >
                                         <span>{feature.link.text}</span>
                                         <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                       </a>
                                     )}
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
               </div>
             </div>
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
