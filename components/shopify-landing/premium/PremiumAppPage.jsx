"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheck, FiGrid, FiShield, FiUsers, FiZap } from "react-icons/fi";
import { DemoVideoIcon } from "./DemoVideoIcon";
import { SiShopify } from "react-icons/si";
import { Reveal } from "../Reveal";
import { AppVideoSection, hasAppVideo } from "../AppVideoSection";
import { ACCENTS } from "./accent";
import PremiumBeforeAfter from "./PremiumBeforeAfter";
import PremiumLandingFooter from "./PremiumLandingFooter";
import { PremiumStars } from "./PremiumStars";
import PremiumTrustStrip from "./PremiumTrustStrip";
import {
  BlockMockAnalytics,
  BlockMockGallery,
  BlockMockKanban,
  HeroMockCart,
  HeroMockGeneric,
  HeroMockTrust,
  HeroMockWishlist,
} from "./premiumMocks";

const ICONS = {
  grid: FiGrid,
  users: FiUsers,
  shield: FiShield,
  zap: FiZap,
};

const LOGO_SRC = "/assets/images/common/white1.webp";

const DEFAULT_ANNOUNCEMENT = {
  text: "Built for Shopify · free trials on every ProWebCoder app · human support",
  href: "/shopify-apps",
  linkLabel: "View all apps →",
};

function pickHeroMock(key) {
  switch (key) {
    case "cart":
      return <HeroMockCart />;
    case "trust":
      return <HeroMockTrust />;
    case "generic":
      return <HeroMockGeneric />;
    default:
      return <HeroMockWishlist />;
  }
}

function pickBlockMock(key) {
  switch (key) {
    case "kanban":
      return <BlockMockKanban />;
    case "gallery":
      return <BlockMockGallery />;
    default:
      return <BlockMockAnalytics />;
  }
}

/**
 * @param {object} config — built in ./configs/*.js
 */
export default function PremiumAppPage({ config }) {
  const a = ACCENTS[config.accent] || ACCENTS.violet;
  const showVideo = hasAppVideo({ youtubeUrlOrId: config.video?.youtube, vimeoId: config.video?.vimeo });
  const [annual, setAnnual] = useState(true);
  const installCta = config.hero?.primaryCta || "Install on Shopify";
  const secondaryCta = config.hero?.secondaryCta || "View Demo";
  const faqLight = config.faqSurface === "light";
  const announcement = { ...DEFAULT_ANNOUNCEMENT, ...config.announcement };
  const rating = config.rating || { value: "4.9", reviewCount: "400+" };
  const announceTint =
    config.accent === "amber" ? "tw-bg-amber-500/25" : config.accent === "emerald" ? "tw-bg-emerald-500/20" : "tw-bg-violet-600/35";

  return (
    <div className="tw-bg-white tw-text-slate-900">
      <header className="tw-sticky tw-top-0 tw-z-50 tw-border-b tw-border-white/10 tw-bg-[#0B0E14]">
        <div className={`tw-border-b tw-border-white/10 tw-py-2.5 tw-text-center tw-text-[13px] tw-text-white/90 ${announceTint}`}>
          <span className="tw-inline tw-font-medium">{announcement.text}</span>
          {announcement.href ? (
            <Link href={announcement.href} className="tw-ml-2 tw-inline tw-font-semibold tw-text-white tw-underline tw-decoration-white/40 tw-underline-offset-4 hover:tw-decoration-white">
              {announcement.linkLabel || "Learn more"}
            </Link>
          ) : null}
        </div>
        <div className="tw-mx-auto tw-flex tw-h-[4.25rem] tw-max-w-7xl tw-items-center tw-justify-between tw-gap-3 tw-bg-[#0B0E14] tw-px-4 sm:tw-px-5 lg:tw-px-8">
          <Link href="/" className="tw-flex tw-min-w-0 tw-items-center tw-gap-2.5 tw-text-white sm:tw-gap-3">
            <Image src={LOGO_SRC} alt="ProWebCoder" width={150} height={48} className="tw-h-7 tw-w-auto tw-shrink-0 tw-object-contain sm:tw-h-8" priority />
            <span className="tw-hidden tw-truncate tw-border-l tw-border-white/20 tw-pl-2.5 tw-text-xs tw-font-semibold tw-tracking-tight tw-text-white/95 sm:tw-pl-3 sm:tw-text-sm md:tw-inline md:tw-max-w-[9rem] lg:tw-max-w-[14rem] xl:tw-max-w-[18rem]">
              {config.appName}
            </span>
          </Link>
          <nav className="tw-hidden tw-items-center tw-gap-5 md:tw-flex lg:tw-gap-7" aria-label="On this page">
            {[
              ["Features", "#features"],
              ["Proof", "#proof"],
              ["Reviews", "#reviews"],
              ["Pricing", "#pricing"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="tw-text-xs tw-font-medium tw-text-white/65 tw-transition-colors hover:tw-text-white lg:tw-text-sm">
                {label}
              </a>
            ))}
          </nav>
          <div className="tw-flex tw-shrink-0 tw-items-center tw-gap-2 sm:tw-gap-2.5">
            {showVideo ? (
              <motion.a
                href="#product-video"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="tw-inline-flex tw-items-center tw-gap-1.5 tw-rounded-full tw-border tw-border-white/20 tw-bg-white/5 tw-px-3 tw-py-2 tw-text-xs tw-font-semibold tw-text-white/90 hover:tw-bg-white/10 sm:tw-px-4 sm:tw-text-sm"
              >
                <DemoVideoIcon className="tw-h-3.5 tw-w-3.5 sm:tw-h-4 sm:tw-w-4" />
                View Demo
              </motion.a>
            ) : null}
            <motion.a
              href={config.shopifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`tw-inline-flex tw-items-center tw-gap-1.5 tw-rounded-full tw-px-3 tw-py-2 tw-text-xs tw-font-semibold tw-shadow-lg sm:tw-px-5 sm:tw-text-sm ${a.btn}`}
            >
              <SiShopify className="tw-h-3.5 tw-w-3.5 tw-shrink-0 sm:tw-h-4 sm:tw-w-4" aria-hidden />
              <span className="tw-max-w-[6.5rem] tw-truncate sm:tw-max-w-none">{installCta}</span>
            </motion.a>
          </div>
        </div>
      </header>

      {/* Hero — dark navy + gradient glow */}
      <section className="tw-relative tw-overflow-hidden tw-bg-[#0B0E14] tw-pt-10 tw-pb-20 lg:tw-pt-14 lg:tw-pb-28">
        <div className={`tw-pointer-events-none tw-absolute tw-inset-0 ${a.heroBgClass || ""}`} />
        <div className={`tw-pointer-events-none tw-absolute tw--right-20 tw-top-32 tw-h-96 tw-w-96 tw-rounded-full ${a.glow} tw-blur-3xl`} />

        <div className="tw-relative tw-mx-auto tw-grid tw-max-w-7xl tw-items-center tw-gap-14 tw-px-5 lg:tw-grid-cols-2 lg:tw-gap-16 lg:tw-px-8">
          <div>
            <Reveal>
              {config.hero?.eyebrow ? (
                <p className={`tw-mb-5 tw-inline-flex tw-items-center tw-rounded-full tw-border tw-px-3 tw-py-1 tw-text-xs tw-font-semibold ${a.pill}`}>
                  {config.hero.eyebrow}
                </p>
              ) : null}
              <h1 className="tw-text-balance tw-text-4xl tw-font-semibold tw-tracking-tight tw-text-white tw-leading-[1.08] md:tw-text-5xl lg:tw-text-[3.35rem]">
                {config.hero.title}{" "}
                {config.hero.titleHighlight ? (
                  <span className={`tw-bg-gradient-to-r ${a.gradientText} tw-bg-clip-text tw-text-transparent`}>
                    {config.hero.titleHighlight}
                  </span>
                ) : null}
              </h1>
              {config.hero?.kicker ? (
                <p className={`tw-mt-5 tw-max-w-xl tw-text-lg tw-font-semibold tw-leading-snug md:tw-text-xl ${a.kickerText || "tw-text-white/80"}`}>
                  {config.hero.kicker}
                </p>
              ) : null}
              <p className={`tw-max-w-xl tw-text-lg tw-leading-relaxed tw-text-slate-400 ${config.hero?.kicker ? "tw-mt-4" : "tw-mt-6"}`}>{config.hero.subtitle}</p>
              <div className="tw-mt-6 tw-flex tw-flex-wrap tw-items-center tw-gap-4">
                <PremiumStars value={rating.value} reviewCount={rating.reviewCount} />
                <span className="tw-hidden tw-h-4 tw-w-px tw-bg-white/20 sm:tw-inline-block" aria-hidden />
                <span className="tw-inline-flex tw-items-center tw-gap-1.5 tw-rounded-full tw-border tw-border-white/15 tw-bg-white/5 tw-px-3 tw-py-1 tw-text-xs tw-font-semibold tw-text-white/85">
                  <SiShopify className="tw-h-3.5 tw-w-3.5" aria-hidden />
                  Built for Shopify
                </span>
              </div>
              <div className="tw-mt-9 tw-flex tw-flex-wrap tw-items-center tw-gap-4">
                <motion.a
                  href={config.shopifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-7 tw-py-3.5 tw-text-sm tw-font-semibold ${a.btn}`}
                >
                  {installCta}
                </motion.a>
                <motion.a
                  href={showVideo ? "#product-video" : "#screens"}
                  whileHover={{ scale: 1.02 }}
                  className={`tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded-full tw-px-7 tw-py-3.5 tw-text-sm tw-font-semibold ${a.btnGhost}`}
                >
                  {showVideo ? <DemoVideoIcon /> : null}
                  {secondaryCta}
                </motion.a>
              </div>
              {config.hero.note ? (
                <p className="tw-mt-8 tw-text-sm tw-text-white/45">{config.hero.note}</p>
              ) : null}
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <div id="screens" className="tw-scroll-mt-28">
              {pickHeroMock(config.heroMock)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stack / persona strip — reads as deliberate chips, not washed-out labels */}
      <section className="tw-border-y tw-border-slate-200 tw-bg-white tw-py-12 lg:tw-py-14">
        <div className="tw-mx-auto tw-max-w-7xl tw-px-5 lg:tw-px-8">
          <p className="tw-text-center tw-text-xs tw-font-semibold tw-tracking-[0.2em] tw-text-slate-500">WHERE THIS APP SHINES</p>
          <div className="pwc-lp-nav-scroll tw-mt-7 tw-flex tw-snap-x tw-snap-mandatory tw-justify-start tw-gap-3 tw-overflow-x-auto tw-py-1 md:tw-flex-wrap md:tw-justify-center md:tw-overflow-visible">
            {config.logos.map((name) => (
              <span
                key={name}
                className="tw-snap-start tw-inline-flex tw-shrink-0 tw-items-center tw-rounded-full tw-border tw-border-slate-200/95 tw-bg-gradient-to-b tw-from-white tw-to-slate-50/90 tw-px-5 tw-py-2.5 tw-text-sm tw-font-semibold tw-tracking-tight tw-text-slate-800 tw-shadow-[0_2px_12px_rgba(15,23,42,0.06)] tw-ring-1 tw-ring-slate-900/[0.04] tw-transition-[transform,box-shadow,border-color] hover:tw--translate-y-0.5 hover:tw-border-slate-300 hover:tw-shadow-[0_8px_28px_-8px_rgba(15,23,42,0.12)] md:tw-snap-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <PremiumTrustStrip headline={config.trustStripHeadline || "Why merchants trust ProWebCoder"} accent={config.accent} />

      <AppVideoSection
        youtubeUrlOrId={config.video?.youtube}
        vimeoId={config.video?.vimeo || undefined}
        eyebrow="Product tour"
        title={config.videoSectionTitle || "See it running on a real storefront"}
        subtitle={config.videoSectionSubtitle || "Drop your Loom, Vimeo, or YouTube link via env — section hides until configured."}
        variant="light"
      />

      {/* 3 icon features */}
      <section id="features" className="tw-scroll-mt-24 tw-py-24">
        <div className="tw-mx-auto tw-max-w-7xl tw-px-5 lg:tw-px-8">
          <Reveal className="tw-mx-auto tw-mb-16 tw-max-w-2xl tw-text-center">
            <p className="tw-text-xs tw-font-bold tw-tracking-[0.25em] tw-text-violet-600">FEATURES</p>
            <h2 className="tw-mt-3 tw-text-balance tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-slate-900 md:tw-text-4xl">
              {config.featuresHeadline}
            </h2>
            <p className="tw-mt-4 tw-text-lg tw-text-slate-600">{config.featuresSub}</p>
          </Reveal>
          <div className="tw-grid tw-gap-6 md:tw-grid-cols-3 md:tw-gap-8">
            {config.featureIcons.map((f, i) => {
              const Ico = ICONS[f.icon] || FiGrid;
              return (
                <Reveal key={f.title} delay={i * 0.05}>
                  <div className="tw-group tw-relative tw-h-full tw-overflow-hidden tw-rounded-2xl tw-border tw-border-slate-200/90 tw-bg-white tw-p-8 tw-pt-9 tw-shadow-[0_8px_40px_-20px_rgba(15,23,42,0.15)] tw-ring-1 tw-ring-slate-900/[0.04] tw-transition-[box-shadow,transform,border-color] hover:tw--translate-y-0.5 hover:tw-border-slate-300 hover:tw-shadow-[0_20px_50px_-24px_rgba(15,23,42,0.2)] md:tw-p-9">
                    <div className={`tw-pointer-events-none tw-absolute tw-inset-x-0 tw-top-0 tw-h-1 tw-bg-gradient-to-r ${a.gradientText}`} aria-hidden />
                    <div className={`tw-relative ${a.iconWrapLight}`}>
                      <Ico className="tw-text-xl md:tw-text-2xl" />
                    </div>
                    <h3 className="tw-mt-6 tw-text-lg tw-font-semibold tw-tracking-tight tw-text-slate-900 md:tw-text-xl">{f.title}</h3>
                    <p className="tw-mt-3 tw-text-sm tw-leading-relaxed tw-text-slate-600 md:tw-text-[15px] md:tw-leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alternating blocks */}
      {config.alternating.map((block, idx) => {
        const isRev = block.align === "right";
        const bg = idx % 2 === 0 ? "tw-bg-white" : "tw-bg-slate-50";
        return (
          <section key={block.title} className={`tw-py-24 ${bg}`}>
            <div className="tw-mx-auto tw-grid tw-max-w-7xl tw-items-center tw-gap-12 tw-px-5 lg:tw-grid-cols-2 lg:tw-items-stretch lg:tw-gap-16 lg:tw-px-8">
              <Reveal className={`tw-flex tw-items-stretch ${isRev ? "tw-order-2 lg:tw-order-2" : ""}`}>
                <div className="tw-w-full tw-rounded-2xl tw-border tw-border-slate-200/80 tw-bg-white tw-p-2 tw-shadow-[0_8px_40px_-24px_rgba(15,23,42,0.18)] tw-ring-1 tw-ring-slate-900/[0.04]">
                  {pickBlockMock(block.block)}
                </div>
              </Reveal>
              <Reveal className={`tw-flex tw-flex-col tw-justify-center ${isRev ? "tw-order-1 lg:tw-order-1" : ""}`} delay={0.06}>
                <div className="tw-rounded-2xl tw-border tw-border-slate-200/80 tw-bg-white tw-p-8 tw-shadow-[0_4px_28px_-12px_rgba(15,23,42,0.1)] tw-ring-1 tw-ring-slate-900/[0.03] md:tw-p-10">
                  <p className="tw-text-xs tw-font-bold tw-tracking-[0.2em] tw-text-violet-600">PRODUCT</p>
                  <h2 className="tw-mt-3 tw-text-balance tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-slate-900 md:tw-text-4xl">
                    {block.title}
                  </h2>
                  <p className="tw-mt-5 tw-text-base tw-leading-relaxed tw-text-slate-600 md:tw-text-lg">{block.desc}</p>
                  <motion.a
                    href={config.shopifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.99 }}
                    className={`tw-mt-9 tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-px-6 tw-py-3 tw-text-sm tw-font-semibold tw-shadow-md tw-transition-colors ${a.pricingHighlight}`}
                  >
                    {block.cta}
                    <span aria-hidden>→</span>
                  </motion.a>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* Stats */}
      <section id="results" className="tw-scroll-mt-24 tw-border-y tw-border-slate-200 tw-bg-gradient-to-b tw-from-slate-50 tw-to-white tw-py-16 lg:tw-py-20">
        <div className="tw-mx-auto tw-grid tw-max-w-7xl tw-gap-5 tw-px-5 md:tw-grid-cols-3 md:tw-gap-6 lg:tw-px-8">
          {config.stats.map((s) => (
            <Reveal key={s.label}>
              <div className="tw-relative tw-overflow-hidden tw-rounded-2xl tw-border tw-border-slate-200/90 tw-bg-white tw-px-6 tw-py-9 tw-text-center tw-shadow-[0_4px_24px_rgba(15,23,42,0.06)] tw-ring-1 tw-ring-slate-900/[0.03] tw-transition-shadow hover:tw-shadow-[0_12px_40px_-12px_rgba(15,23,42,0.1)]">
                <div className={`tw-mx-auto tw-mb-5 tw-h-1 tw-w-12 tw-rounded-full tw-bg-gradient-to-r ${a.gradientText}`} aria-hidden />
                <p className="tw-text-4xl tw-font-semibold tw-tracking-tight tw-text-slate-900 md:tw-text-5xl">{s.value}</p>
                <p className="tw-mt-3 tw-text-sm tw-font-semibold tw-text-slate-800">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {config.beforeAfter ? <PremiumBeforeAfter {...config.beforeAfter} /> : null}

      {/* Reviews & testimonials */}
      <section id="reviews" className="tw-scroll-mt-24 tw-bg-slate-50 tw-py-24">
        <div className="tw-mx-auto tw-max-w-7xl tw-px-5 lg:tw-px-8">
          <Reveal className="tw-mx-auto tw-mb-12 tw-max-w-2xl tw-text-center">
            <p className="tw-text-xs tw-font-bold tw-tracking-[0.25em] tw-text-violet-600">REVIEWS</p>
            <h2 className="tw-mt-3 tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-slate-900 md:tw-text-4xl">
              {config.testimonialHeadline}
            </h2>
            <p className="tw-mt-4 tw-text-slate-600">Verified-style feedback from operators like you — not generic marketing filler.</p>
            <div className="tw-mt-6 tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-3">
              <PremiumStars value={rating.value} reviewCount={rating.reviewCount} subtle className="tw-justify-center" />
            </div>
          </Reveal>
          <div className="tw-grid tw-gap-8 md:tw-grid-cols-2 lg:tw-grid-cols-3">
            {config.testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <div className="tw-flex tw-h-full tw-flex-col tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-white tw-p-8 tw-shadow-sm">
                  <div className="tw-flex tw-items-center tw-justify-between tw-gap-2">
                    <span className="tw-text-xs tw-font-bold tw-uppercase tw-tracking-wider tw-text-emerald-700">Verified review</span>
                    <PremiumStars value={t.rating || rating.value} subtle className="tw-scale-90" />
                  </div>
                  <span className="tw-mt-3 tw-text-3xl tw-leading-none tw-text-violet-200">“</span>
                  <p className="tw-mt-1 tw-flex-1 tw-text-sm tw-leading-relaxed tw-text-slate-700">{t.quote}</p>
                  <div className="tw-mt-6 tw-flex tw-items-center tw-gap-3">
                    <div className="tw-h-11 tw-w-11 tw-shrink-0 tw-rounded-full tw-bg-gradient-to-br tw-from-slate-300 tw-to-slate-500" />
                    <div>
                      <p className="tw-text-sm tw-font-semibold tw-text-slate-900">{t.name}</p>
                      <p className="tw-text-xs tw-text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — dark band like Albino reference */}
      <section id="pricing" className="tw-scroll-mt-24 tw-bg-[#0B0E14] tw-py-24 tw-text-white">
        <div className="tw-mx-auto tw-max-w-7xl tw-px-5 lg:tw-px-8">
          <Reveal className="tw-mx-auto tw-mb-12 tw-max-w-2xl tw-text-center">
            <p className="tw-text-xs tw-font-bold tw-tracking-[0.25em] tw-text-violet-300">PRICING</p>
            <h2 className="tw-mt-3 tw-text-3xl tw-font-semibold md:tw-text-4xl">{config.pricing.headline}</h2>
            <p className="tw-mt-4 tw-text-slate-400">{config.pricing.sub}</p>
            <div className="tw-mt-8 tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-3">
              <div className="tw-inline-flex tw-items-center tw-rounded-full tw-border tw-border-white/15 tw-bg-white/5 tw-p-1">
                <button
                  type="button"
                  onClick={() => setAnnual(false)}
                  className={`tw-rounded-full tw-px-5 tw-py-2 tw-text-sm tw-font-semibold tw-transition-colors ${
                    !annual ? "tw-bg-white tw-text-slate-950 tw-shadow-sm hover:tw-bg-white" : "tw-bg-transparent tw-text-white/85 hover:tw-text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setAnnual(true)}
                  className={`tw-rounded-full tw-px-5 tw-py-2 tw-text-sm tw-font-semibold tw-transition-colors ${
                    annual ? `${a.pricingToggleAnnual} tw-shadow-sm` : "tw-bg-transparent tw-text-white/85 hover:tw-text-white"
                  }`}
                >
                  Yearly
                </button>
              </div>
              <span className="tw-rounded-full tw-border tw-border-amber-400/45 tw-bg-amber-500/15 tw-px-4 tw-py-2 tw-text-xs tw-font-bold tw-tracking-wide tw-text-amber-200">
                Save 20% on yearly billing
              </span>
            </div>
          </Reveal>
          <div className="tw-grid tw-gap-8 lg:tw-grid-cols-3">
            {config.pricing.plans.map((plan, i) => {
              const price = annual ? plan.priceAnnual : plan.priceMonthly;
              return (
                <Reveal key={plan.name} delay={i * 0.06}>
                  <div
                    className={`tw-flex tw-h-full tw-flex-col tw-rounded-2xl tw-border tw-p-8 ${
                      plan.highlight
                        ? a.pricingCardHighlight ||
                          "tw-border-violet-500/60 tw-bg-gradient-to-b tw-from-violet-950/80 tw-to-slate-950 tw-ring-2 tw-ring-violet-500/40"
                        : "tw-border-white/10 tw-bg-white/[0.04]"
                    }`}
                  >
                    <p className="tw-text-sm tw-font-semibold tw-text-white/80">{plan.name}</p>
                    <p className="tw-mt-4 tw-text-4xl tw-font-semibold tw-tracking-tight">
                      {price}
                      <span className="tw-text-base tw-font-normal tw-text-white/50">/mo</span>
                    </p>
                    <ul className="tw-mt-8 tw-flex-1 tw-space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="tw-flex tw-items-start tw-gap-2 tw-text-sm tw-text-slate-300">
                          <FiCheck className={`tw-mt-0.5 tw-shrink-0 ${a.listCheck || "tw-text-emerald-400"}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <motion.a
                      href={config.shopifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className={`tw-mt-10 tw-block tw-w-full tw-rounded-full tw-py-3.5 tw-text-center tw-text-sm tw-font-semibold ${
                        plan.highlight
                          ? a.pricingHighlight || "tw-bg-violet-600 tw-text-white hover:tw-bg-violet-500"
                          : "tw-bg-white tw-text-slate-900 hover:tw-bg-slate-100"
                      }`}
                    >
                      {plan.cta}
                    </motion.a>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <p className="tw-mt-10 tw-text-center tw-text-sm tw-text-white/45">{config.pricing.footnote}</p>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className={
          faqLight
            ? "tw-scroll-mt-24 tw-border-t tw-border-slate-200 tw-bg-white tw-py-24 tw-text-slate-900"
            : "tw-scroll-mt-24 tw-bg-[#0B0E14] tw-pb-24 tw-pt-0 tw-text-white"
        }
      >
        <div className="tw-mx-auto tw-max-w-3xl tw-px-5 lg:tw-px-8">
          <Reveal className="tw-mb-10 tw-text-center">
            <p className={`tw-text-xs tw-font-bold tw-tracking-[0.25em] ${faqLight ? "tw-text-violet-600" : "tw-text-violet-300"}`}>FAQ</p>
            <h2 className="tw-mt-3 tw-text-3xl tw-font-semibold">Everything merchants ask before installing</h2>
          </Reveal>
          <div className="tw-space-y-3">
            {config.faq.map((item, i) => (
              <Reveal key={item.q}>
                <details
                  className={
                    faqLight
                      ? "tw-group tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-slate-50 tw-open:tw-bg-white"
                      : "tw-group tw-rounded-2xl tw-border tw-border-white/10 tw-bg-white/[0.04] tw-open:tw-bg-white/[0.07]"
                  }
                  open={i === 0}
                >
                  <summary
                    className={`tw-flex tw-cursor-pointer tw-list-none tw-items-center tw-justify-between tw-gap-4 tw-px-6 tw-py-5 tw-text-left tw-text-sm tw-font-semibold ${faqLight ? "tw-text-slate-900" : ""}`}
                  >
                    {item.q}
                    <span
                      className={`tw-text-lg tw-transition-transform group-open:tw-rotate-45 ${faqLight ? "tw-text-slate-400" : "tw-text-white/40"}`}
                    >
                      +
                    </span>
                  </summary>
                  <p
                    className={`tw-px-6 tw-pb-5 tw-pt-4 tw-text-sm tw-leading-relaxed ${faqLight ? "tw-border-t tw-border-slate-200 tw-text-slate-600" : "tw-border-t tw-border-white/10 tw-text-slate-400"}`}
                  >
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="tw-border-t tw-border-slate-200 tw-bg-white tw-py-24">
        <div className="tw-mx-auto tw-max-w-4xl tw-px-5 tw-text-center lg:tw-px-8">
          <Reveal>
            <h2 className="tw-text-balance tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-slate-900 md:tw-text-4xl">
              {config.finalCta.title}
            </h2>
            <p className="tw-mx-auto tw-mt-5 tw-max-w-2xl tw-text-lg tw-text-slate-600">{config.finalCta.subtitle}</p>
            <div className="tw-mt-10 tw-flex tw-flex-wrap tw-justify-center tw-gap-4">
              <motion.a
                href={config.shopifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className={`tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-px-8 tw-py-4 tw-text-sm tw-font-semibold ${a.btn}`}
              >
                {installCta}
              </motion.a>
              {showVideo ? (
                <motion.a
                  href="#product-video"
                  whileHover={{ scale: 1.02 }}
                  className="tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded-full tw-border tw-border-slate-300 tw-bg-white tw-px-8 tw-py-4 tw-text-sm tw-font-semibold tw-text-slate-900 hover:tw-bg-slate-50"
                >
                  <DemoVideoIcon />
                  View Demo
                </motion.a>
              ) : null}
              <motion.a
                href="/shopify-apps"
                whileHover={{ scale: 1.02 }}
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-slate-300 tw-bg-white tw-px-8 tw-py-4 tw-text-sm tw-font-semibold tw-text-slate-900 hover:tw-bg-slate-50"
              >
                View all apps
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>

      <PremiumLandingFooter appListingUrl={config.shopifyUrl} appName={config.appName} />
    </div>
  );
}
