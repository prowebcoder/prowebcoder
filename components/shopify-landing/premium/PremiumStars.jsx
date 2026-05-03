"use client";

import { FaStar } from "react-icons/fa";

/** Compact star row for hero and review cards (filled gold stars). */
export function PremiumStars({ value = "4.9", reviewCount, subtle = false, className = "" }) {
  const dim = subtle ? "tw-text-[#d4a008]" : "tw-text-[#FFD23F]";
  const label = subtle ? "tw-text-slate-600" : "tw-text-white/90";
  const muted = subtle ? "tw-text-slate-500" : "tw-text-white/55";
  return (
    <div className={`tw-flex tw-flex-wrap tw-items-center tw-justify-start tw-gap-2.5 ${className}`}>
      <div className={`tw-flex tw-items-center tw-gap-0.5 ${dim}`} aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <FaStar key={i} className="tw-h-4 tw-w-4" />
        ))}
      </div>
      <span className={`tw-text-sm tw-font-bold ${label}`}>{value}</span>
      {reviewCount ? <span className={`tw-text-sm ${muted}`}>Shopify App Store · {reviewCount} reviews</span> : null}
    </div>
  );
}
