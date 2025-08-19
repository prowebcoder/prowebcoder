"use client";

import { closeBookModal } from "@/utlis/toggleBookModal";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { InlineWidget } from "react-calendly";

export default function BookModal() {
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        containerRef.current.contains(event.target) &&
        elementRef.current &&
        !elementRef.current.contains(event.target)
      ) {
        closeBookModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeBookModal();
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      id="uc-book-modal"
      data-uc-modal="overlay: true"
      className="uc-modal"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-modal-dialog  bg-secondary text-dark dark:bg-gray-800 dark:text-white rounded-1-5"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90"
          type="button"
          onClick={closeBookModal}
        >
          <i className="unicon-close" />
        </button>

        <div className="panel vstack gap-2 md:gap-4 text-center">
          <div className="panel vstack px-3 md:px-4 py-4 md:py-8 m-0 lg:mx-auto">
            <h4 className="h5 lg:h4 m-0 mb-4">Schedule your 30-minute call now</h4>

            {/* ✅ Calendly Inline Widget */}
            <InlineWidget
              url="https://calendly.com/pro-webcoder/30min"
              styles={{ height: "650px", width: "700px" }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "00a2ff",
                textColor: "000000",
              }}
            />

            <p className="fs-7 opacity-70 mt-2 text-center">
              Pick a time that works best for you, and we’ll take care of the rest 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
