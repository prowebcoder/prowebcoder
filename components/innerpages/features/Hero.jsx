import { features6 } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute rotate-45"
          style={{
            top: "30%",
            left: "18%",
          }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            src="/assets/images/template/star-1.svg"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
          />
        </div>
        <div
          className="position-absolute rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            src="/assets/images/template/star-2.svg"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-5 pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
            <div
              className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-900px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              
              <p className="fs-5 sm:fs-7 text-dark dark:text-white text-opacity-70">
              
    At <b>Prowebcoder</b>, we deliver <b>full-stack development</b> and <b>digital solutions</b> that help businesses grow across every major platform and tech stack — including  {" "}
     <b>Shopify development</b>, <b>Squarespace customization</b>, <b>Magento</b>, <b>BigCommerce</b>, <b>WordPress development</b>, <b>Webflow</b>, <b>Wix</b>, 
    <b>React</b>, <b>Next.js</b>, <b>JavaScript</b>, <b>AI-powered applications</b>, and <b>Flutter mobile app development</b>.
 <br></br>
 <br></br>
    We provide robust and secure <b>custom API development</b> that enables your applications to communicate seamlessly and perform at scale. Our expertise includes 
    <b>RESTful APIs</b>, <b>GraphQL APIs</b>, <b>custom endpoints</b>, and <b>middleware integrations</b> to ensure flexibility, speed, and security across your systems.
 <br></br>
 <br></br>

 
    Whether you’re launching a new <b>e-commerce store</b>, building a <b>SaaS product</b>, developing a <b>mobile app</b>, or streamlining <b>digital workflows</b>, 
    our solutions are engineered for <b>performance</b>, <b>scalability</b>, and <b>security</b>.
 <br></br>
    At <b>Prowebcoder</b>, we don’t just build websites and apps—we craft <b>digital experiences</b> that drive growth, enhance customer engagement, and keep your business ahead.
 </p>
            </div>
            <div className="sticky-scene panel vstack gap-4 sm:gap-6 xl:gap-8">
              {features6.map((feature) => (
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
  );
}
