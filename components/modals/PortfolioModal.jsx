"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { closePortfolioModal } from "@/utlis/togglePortfolioModal";

export default function PortfolioModal() {
  const containerRef = useRef(null);
  const elementRef = useRef(null);

  const [project, setProject] = useState(null);

  // Receive project payload
  useEffect(() => {
    const handler = (e) => setProject(e.detail || null);
    window.addEventListener("portfolio:open", handler);
    return () => window.removeEventListener("portfolio:open", handler);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        containerRef.current.contains(event.target) &&
        elementRef.current &&
        !elementRef.current.contains(event.target)
      ) {
        setProject(null);
        closePortfolioModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setProject(null);
        closePortfolioModal();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      ref={containerRef}
      id="uc-portfolio-modal"
      data-uc-modal="overlay: true"
      className="uc-modal"
      style={{ display: "block" }}
      tabIndex={-1}
      aria-hidden={!project}
    >
      <div
        ref={elementRef}
        className="uc-modal-dialog lg:max-w-5xl bg-white text-dark dark:bg-gray-800 dark:text-white rounded-1-5 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Close (X) */}
        <button
          type="button"
          onClick={() => {
            setProject(null);
            closePortfolioModal();
          }}
          className="uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90"
        >
          <i className="unicon-close" />
        </button>

        {/* Flex container */}

        <div className="section-outer panel">
          <div className="container container-full">
            <div className="section-inner panel">
              <div className="row child-cols-12 col-match g-0">
                <div className="container container-full">
                  <div className="panel">
                    <div className="row justify-start items-start child-cols-12 lg:child-cols-6 col-match  g-0">
                      {/* Left: Details */}
                      <div className="p-4 md:p-6  gap-3 lg:child-cols-4 md:gap-4 overflow-y-auto ">
                        <h3 className="h5 lg:h4 m-0">
                          {project?.name ?? "Project"}
                        </h3>

                        {project?.details ? (
                          <p className="fs-6 text-opacity-70">
                            {project.details}
                          </p>
                        ) : (
                          <p className="fs-6 text-opacity-50">
                            No additional details available.
                          </p>
                        )}

                        {Array.isArray(project?.categories) &&
                          project.categories.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {project.categories.map((c, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-2 text-sm"
                                >
                                  {c}
                                </span>
                              ))}
                            </div>
                          )}

                        {project?.link && (
                          <Link
                            href={project.link}
                            target="_blank"
                            className="btn btn-md btn-primary rounded-default mt-2"
                          >
                            Visit Website
                          </Link>
                        )}
                      </div>

                      {/* Right: Image */}
                      {/* Right: Image */}
                      <div className=" bg-gray-50 dark:bg-dark-2 flex items-center justify-center lg:child-cols-8 h-screen relative">
                        {project?.popImage && (
                          <div className="h-screen" style={{ width: '100%', height: '100%', backgroundImage: `url(/${project.popImage})`, backgroundSize: 'contain', backgroundPosition: 'center' , backgroundRepeat: 'no-repeat' }}>
                            {/* <Image
                              src={`/${project.popImage}`}
                              alt={project?.name || "Project image"}
                              width={800}
                              height={100}
                              className="object-contain"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              priority
                            /> */}
                          </div>
                        )}
                      </div>
                    </div>
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
