import React from "react";

import Image from "next/image";
export default function Steps() {
    const steps = [
        {
            id: 1,
            icon: "/assets/images/common/icons/database.svg",
            title: "Planning & Discovery",
            description: "We discuss your goals, audience, and requirements to create a clear roadmap."
        },
        {
            id: 2,
            icon: "/assets/images/common/icons/content.svg",
            title: "Design & Prototyping",
            description: "We craft beautiful UI/UX designs and interactive mockups for your approval."
        },
        {
            id: 3,
            icon: "/assets/images/common/icons/div.svg",
            title: "Development",
            description: "Our developers bring the designs to life with clean, scalable code."
        },
        {
            id: 4,
            icon: "/assets/images/common/icons/target.svg",
            title: "Testing & Launch",
            description: "We rigorously test your website/app and launch it for the world to see."
        },
    ];

    return (
        <section className="section panel bg-white dark:bg-gray-900 xl:pb-10 sm:pb-4">
            <div className="section-outer panel py-2 sm:py-2 xl:py-2">
                <div className="container sm:max-w-lg xl:max-w-xl">
                    <div className="text-center vstack gap-2 mb-5">
                        
                        <h2 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                            Our Process
                        </h2>
                        <p className="text-gray-600 fs-6">
                            We make it simple — here’s how we turn your idea into a live website or app.
                        </p>
                    </div>
                    <div className="row hstack justify-between items-start gap-6 sm:gap-8 xl:gap-10 position-relative">
                        {steps.map((step, index) => (
                            <div key={step.id} className="vstack items-center text-center flex-1  steps-items position-relative p-2 md:p-4 lg:p-2 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-white dark:bg-opacity-5 dark:text-white">
                                <div className="cstack w-48px h-48px bg-primary rounded-circle mb-4">
                                    <Image
                                                      className="icon icon-1 text-white image-filter-white"
                                                      alt="feature-icon"
                                                      src={step.icon}
                                                      width="40"
                                                      height="40"
                                                    />
                                   
                                </div>
                                {index < steps.length - 1 && (
                                    <div
                                        className={`hidden md:block position-absolute top-6 w-[calc(25%-3rem)] h-[1px] bg-gray-300`}
                                        style={{
                                            left: `calc((100% / ${steps.length}) * ${index} + 3rem)`
                                        }}
                                    ></div>
                                )}
                                <h3 className="fw-semibold fs-5 mb-1">{step.title}</h3>
                                <p className="text-gray-600 fs-6 lh-md">{step.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
