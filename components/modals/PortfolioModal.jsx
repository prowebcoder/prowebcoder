"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { closePortfolioModal } from "@/utlis/togglePortfolioModal";

export default function PortfolioModal() {
  const containerRef = useRef(null);
  const elementRef = useRef(null);

  const [project, setProject] = useState(null);
  const [imgHeight, setImgHeight] = useState(null);

  // Receive project payload
  useEffect(() => {
    const handler = (e) => {
      setProject(e.detail || null);
      setImgHeight(null); // reset when new project opens
    };
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

  // Load actual image to get height
  useEffect(() => {
    if (project?.popImage) {
      const img = new window.Image();
      img.src = `/${project.popImage}`;
      img.onload = () => {
        setImgHeight(img.height); // store real image height
      };
    }
  }, [project?.popImage]);

  return (
    <div
      ref={containerRef}
      id="uc-portfolio-modal"
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
                    <div className="row justify-start items-start child-cols-12 col-match g-0">
                      {/* Left: Details */}
                      <div className="p-4 md:p-6 gap-2 lg:col-4 md:gap-2 overflow-y-auto ">
                        <h3 className="h5 lg:h4 m-0">{project?.name ?? "Project"}</h3>

               {project?.details ? (
  <div
    className="fs-6 text-opacity-70"
    dangerouslySetInnerHTML={{ __html: project.details }}
  />
) : (
  <p className="fs-6 text-opacity-50">No additional details available.</p>
)}


                        {Array.isArray(project?.categories) &&
                          project.categories.length > 0 && (
                            <div className="hstack flex-wrap gap-2 g-2">
                              {project.categories.map((c, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 rounded-full bg-gray-100  rounded-default dark:bg-dark-2 text-12 fs-8 text-dark dark:text-white text-opacity-70"
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
                      <div
                        className="bg-gray-50 dark:bg-dark-2 flex items-center justify-center lg:col-8 relative"
                        style={{ minHeight: imgHeight ? `${imgHeight}px` : "300px" }}
                      >
                        {project?.popImage && (
                          <div
                            className="w-full"
                            style={{
                              height: imgHeight ? `${imgHeight}px` : "100%",
                              backgroundImage: `url(/${project.popImage})`,
                              backgroundSize: "contain",
                              backgroundPosition: "top",
                              backgroundRepeat: "no-repeat",
                            }}
                          />
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
