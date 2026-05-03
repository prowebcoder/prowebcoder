"use client";

import { FiVideo } from "react-icons/fi";

/** Play / video glyph for “View Demo” CTAs on Shopify landing pages */
export function DemoVideoIcon({ className = "tw-h-4 tw-w-4" }) {
  return <FiVideo className={`tw-shrink-0 ${className}`} aria-hidden />;
}
