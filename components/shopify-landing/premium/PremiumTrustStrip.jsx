"use client";

import { motion } from "framer-motion";
import { FiLock, FiShield, FiTrendingUp, FiZap } from "react-icons/fi";
import { SiShopify } from "react-icons/si";

const DEFAULT_ITEMS = [
  { icon: SiShopify, label: "Built for Shopify", sub: "Online Store 2.0" },
  { icon: FiShield, label: "Data & uptime", sub: "Merchant-safe flows" },
  { icon: FiLock, label: "Checkout-safe", sub: "No sketchy scripts" },
  { icon: FiTrendingUp, label: "Proof in analytics", sub: "Lift you can trace" },
  { icon: FiZap, label: "Fast install", sub: "Most stores same day" },
];

/** Icon tile + top accent bar per landing accent */
const ACCENT_STYLES = {
  violet: {
    bar: "tw-from-violet-500 tw-to-fuchsia-500",
    iconWrap: "tw-bg-violet-50 tw-text-violet-700 tw-ring-2 tw-ring-violet-100/80",
  },
  amber: {
    bar: "tw-from-amber-400 tw-to-orange-500",
    iconWrap: "tw-bg-amber-50 tw-text-amber-800 tw-ring-2 tw-ring-amber-100/90",
  },
  emerald: {
    bar: "tw-from-emerald-400 tw-to-teal-600",
    iconWrap: "tw-bg-emerald-50 tw-text-emerald-800 tw-ring-2 tw-ring-emerald-100/90",
  },
  indigo: {
    bar: "tw-from-indigo-500 tw-to-sky-500",
    iconWrap: "tw-bg-indigo-50 tw-text-indigo-800 tw-ring-2 tw-ring-indigo-100/90",
  },
};

/**
 * @param {{ items?: typeof DEFAULT_ITEMS, headline?: string, accent?: keyof typeof ACCENT_STYLES }} props
 */
export default function PremiumTrustStrip({ items = DEFAULT_ITEMS, headline = "Why merchants trust this app", accent = "violet" }) {
  const tone = ACCENT_STYLES[accent] || ACCENT_STYLES.violet;

  return (
    <section className="tw-relative tw-overflow-hidden tw-border-y tw-border-slate-200 tw-bg-gradient-to-b tw-from-white tw-via-slate-50/90 tw-to-white tw-py-16 lg:tw-py-20">
      <div className="tw-pointer-events-none tw-absolute tw-inset-0 tw-bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(139,92,246,0.06),transparent)]" aria-hidden />
      <div className="tw-relative tw-mx-auto tw-max-w-7xl tw-px-5 lg:tw-px-8">
        <div className="tw-mx-auto tw-mb-3 tw-flex tw-justify-center">
          <span className={`tw-h-1 tw-w-14 tw-rounded-full tw-bg-gradient-to-r ${tone.bar}`} aria-hidden />
        </div>
        <p className="tw-text-center tw-text-xs tw-font-bold tw-tracking-[0.22em] tw-text-violet-600">TRUST & SECURITY</p>
        <h2 className="tw-mx-auto tw-mt-3 tw-max-w-3xl tw-text-center tw-text-xl tw-font-semibold tw-tracking-tight tw-text-slate-900 md:tw-text-2xl lg:tw-text-[1.65rem] tw-leading-snug">
          {headline}
        </h2>
        <p className="tw-mx-auto tw-mt-3 tw-max-w-2xl tw-text-center tw-text-sm tw-leading-relaxed tw-text-slate-600 md:tw-text-base">
          Enterprise-style guardrails shipped as product defaults — not a PDF you read after something breaks.
        </p>

        <div className="pwc-lp-nav-scroll tw-mt-12 tw-flex tw-snap-x tw-snap-mandatory tw-gap-4 tw-overflow-x-auto tw-pb-1 tw-pl-0.5 lg:tw-grid lg:tw-grid-cols-5 lg:tw-gap-5 lg:tw-overflow-visible lg:tw-pb-0">
          {items.map(({ icon: Icon, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="tw-snap-center tw-flex tw-min-w-[240px] tw-shrink-0 tw-flex-col tw-rounded-2xl tw-border tw-border-slate-200/90 tw-bg-white tw-p-6 tw-text-center tw-shadow-[0_4px_24px_rgba(15,23,42,0.06)] tw-ring-1 tw-ring-slate-900/[0.03] tw-transition-[box-shadow,transform,border-color] hover:tw--translate-y-0.5 hover:tw-border-slate-300 hover:tw-shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)] lg:tw-min-w-0"
            >
              <div
                className={`tw-mx-auto tw-flex tw-h-14 tw-w-14 tw-items-center tw-justify-center tw-rounded-2xl ${tone.iconWrap}`}
              >
                <Icon className="tw-h-7 tw-w-7" aria-hidden />
              </div>
              <p className="tw-mt-4 tw-text-sm tw-font-semibold tw-leading-snug tw-text-slate-900 md:tw-text-base">{label}</p>
              <p className="tw-mt-2 tw-text-xs tw-leading-relaxed tw-text-slate-600 md:tw-text-sm">{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
