"use client";
import Link from "next/link";
import Image from "next/image";
export default function Hero2() {
  return (
    <div
      id="hero_header"
      className="hero-header hero-five-scene section panel overflow-hidden"
    >
      <div className="position-cover bg-gradient-to-t from-secondary to-white dark:from-gray-800 dark:to-gray-900" />
      <div className="section-outer panel pb-6 sm:pb-8 pt-9 xl:pt-10 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center lg:justify-between items-center g-6 lg:g-0">
               <div className="sm:col-auto lg:order-2">
                <div
                  className="hero-scroll-scene panel sm:w-550px sm:h-600px lg:w-450px lg:h-500px xl:w-600px xl:h-650px"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-3 h-100 overflow-hidden">
                    <Image
                      className="media-cover image"
                      alt="image"
                      src="/assets/images/template/service_hero.png"
                      width="500"
                      height="560"
                    />
                  </figure>
                  <div
                    className="hero-five-contries position-absolute sm:w-300px lg:w-250px xl:w-450px d-none sm:d-block"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                    style={{ top: "20%" }}
                  >
                  
                  </div>
                 
                </div>
              </div>
              <div className="sm:col-8 lg:col-6">
                <div
                  className="panel vstack gap-2 text-center lg:text-start rtl:lg:text-end xl:me-4"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h1 className="h3 sm:display-7 xl:display-7 fw-light mb-1 xl:mb-2">
                   Why Search for a Web Development Agency When You Can Have a <b>Full-Stack Partner</b>? 
                  </h1>
                  <p className="fs-6 xl:fs-4">
                  Award Winning Web Development Services for Your Business
                    <br className="d-none lg:d-block" />
                    
                  </p>
             
                  <div className="vstack md:hstack justify-center lg:justify-start gap-2 mt-2 xl:mt-4">

                     <Image
                        alt="Avatar-image"
                        className=" border-secondary dark:border-gray-900"
                        src="/assets/images/template/awards.webp"
                        width="1156"
                        height="211"
                      />
                    
                 
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
