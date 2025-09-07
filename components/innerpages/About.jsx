import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute  rotate-45"
          style={{ top: "20%", left: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
            src="/assets/images/template/star-1.svg"
          />
        </div>
        <div
          className="position-absolute  rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
            src="/assets/images/template/star-2.svg"
          />
        </div>
      </div>
      <div className="section-outer panel pt-12 lg:pt-10 pb-1 sm:pb-2 lg:pb-1">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-4 mb-0 sm:mb-1 lg:mb-1 max-w-850px mx-auto text-center">
                    <section className="bg-gradient-to-b from-secondary to-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get Your Project Quote
            <span className="text-primary"> Instantly</span>
          </h1>
         <p className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70 mb-4">
           Professional web development services with transparent pricing. Select your requirements and get an accurate quote in minutes.
              </p>
          <div className="hstack flex flex-wrap justify-center gap-4 text-xs text-muted-foreground py-20">
            <div className="hstack flex items-center fs-8 gap-1  text-opacity-70 text-dark dark:text-white">
              <svg className="icon-box w-20px h-20px gap-8 rounded-1-5 cstack  text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              No Hidden Fees
            </div>
           <div className="hstack flex items-center fs-8 gap-1  text-opacity-70 text-dark dark:text-white">
              <svg className="icon-box w-20px h-20px gap-8 rounded-1-5 cstack  text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Fixed Price Guarantee
            </div>
           <div className="hstack flex items-center fs-8 gap-1  text-opacity-70 text-dark dark:text-white">
              <svg className="icon-box w-20px h-20px gap-8 rounded-1-5 cstack text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Expert Consultation
            </div>
          </div>
        </div>
      </section>
              <h1 className="h3 sm:h1 lg:display-4 xl:display-5 m-0">
               
              </h1>
              
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
}
