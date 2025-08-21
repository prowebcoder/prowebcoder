"use client";

import { useEffect, useRef, useState } from "react";
import { closeBookModal } from "@/utlis/toggleBookModal";
import { usePathname } from "next/navigation";

export default function BookModal() {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const elementRef = useRef(null);

  const [embedDomain, setEmbedDomain] = useState("localhost");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEmbedDomain(window.location.hostname || "localhost");
    }
  }, []);

  // Close on outside click of the inner dialog
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on route change
  useEffect(() => {
    closeBookModal();
  }, [pathname]);

  const baseUrl = "https://calendly.com/pro-webcoder/30min";
  // You can tweak colors or hide bits via query params below
  const calendlyUrl = `${baseUrl}?embed_domain=${encodeURIComponent(
    embedDomain
  )}&embed_type=Inline&hide_gdpr_banner=1`;

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
        className="uc-modal-dialog lg:max-w-750px bg-white text-dark dark:bg-gray-800 dark:text-white rounded-1-5"
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

        <div className="panel vstack gap-2 md:gap-4 p-3 md:p-5">
          <h4 className="h5 lg:h4 m-0 text-center">Schedule your 30-minute call</h4>

          {/* Loader while the Calendly iframe initializes */}
          {!loaded && (
            <div className="vstack items-center justify-center py-6">
              <div className="spinner-border animate-spin h-6 w-6 rounded-full border-2 border-current border-r-transparent" />
              <p className="fs-7 opacity-70 mt-2">Loading scheduler…</p>
            </div>
          )}

          {/* Calendly Inline (iframe) */}
          <div className="w-full">
            <iframe
              title="Calendly Scheduler"
              src={calendlyUrl}
              onLoad={() => setLoaded(true)}
              style={{
                width: "100%",
                height: "720px", // adjust as needed
                border: "0",
                display: "block",
              }}
              allow="transparency"
            />
          </div>

          {/* Fallback link if iframe is blocked for any reason */}
          <p className="fs-7 opacity-70 text-center mt-2">
            If the scheduler doesn’t load,{" "}
            <a
              className="uc-link underline"
              href={baseUrl}
              target="_blank"
              rel="noreferrer"
            >
              open Calendly in a new tab
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
