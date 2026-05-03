"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { DemoVideoIcon } from "./DemoVideoIcon";
import { SiShopify } from "react-icons/si";
import { Reveal } from "../Reveal";
import { AppVideoSection, hasAppVideo } from "../AppVideoSection";
import { getHubVideo } from "../landingVideoEnv";
import PremiumLandingFooter from "./PremiumLandingFooter";
import { PremiumStars } from "./PremiumStars";
import PremiumTrustStrip from "./PremiumTrustStrip";
import { HeroMockGeneric } from "./premiumMocks";
import { PWC_PLACEHOLDER } from "./placeholders";

const LOGO_SRC = "/assets/images/common/white1.webp";

/** Matches `data-hub-variant` on `.pwc-hub-install` (see styles/shopify-landing.css). */
const HUB_INSTALL_VARIANT = {
  "/shopify-apps/customer-accounts-wishlist": "emerald",
  "/shopify-apps/cartflex": "amber",
  "/shopify-apps/trust-badges": "indigo",
};

const apps = [
  {
    slug: "/shopify-apps/customer-accounts-wishlist",
    url: "https://apps.shopify.com/pwc-customer-pages-wishlist",
    name: "Accounts & Wishlist",
    desc: "Retention-grade accounts + wishlists that capture intent inside your brand.",
    hue: "tw-from-emerald-400 tw-to-teal-600",
    stat: "+38%",
    statLabel: "typical lift band",
    previewId: 64,
    accentBar: "tw-bg-emerald-500",
    bullets: [
      "Branded account hub that feels native to your theme",
      "Wishlists that sync to lifecycle email and SMS",
      "Built for Online Store 2.0 — no brittle iframes",
    ],
  },
  {
    slug: "/shopify-apps/cartflex",
    url: "https://apps.shopify.com/pwc-cartflex",
    name: "CartFlex",
    desc: "Drawer-native upsells, protection, and add-ons that lift AOV without more traffic.",
    hue: "tw-from-amber-400 tw-to-orange-600",
    stat: "+12%",
    statLabel: "AOV lift band",
    previewId: 24,
    accentBar: "tw-bg-amber-500",
    bullets: ["Drawer-first upsells shoppers actually see", "Inventory-aware rules finance can approve", "Experiment toggles with per-session readout"],
  },
  {
    slug: "/shopify-apps/trust-badges",
    url: "https://apps.shopify.com/pwc-trust-badges",
    name: "Trust Badges",
    desc: "Proof placements that dissolve checkout doubt on PDP, cart, and beyond.",
    hue: "tw-from-indigo-500 tw-to-sky-500",
    stat: "~7%",
    statLabel: "checkout doubt reduction",
    previewId: 106,
    accentBar: "tw-bg-indigo-500",
    bullets: ["PDP, cart, and drawer placements in one stack", "Badges that match your palette and typography", "Lightweight — no heavy scripts on first paint"],
  },
];

const hubReviews = [
  {
    quote: "We replaced three half-maintained wishlist experiments with one ProWebCoder stack. Support answers in hours, not weeks.",
    name: "Elena V.",
    role: "DTC Lead, skincare brand",
    rating: "4.9",
  },
  {
    quote: "CartFlex paid for itself the first month — protection and gifting tiles are clear, not spammy. Finally something our CRO team trusts.",
    name: "Marcus T.",
    role: "Growth, multi-store merchant",
    rating: "4.8",
  },
  {
    quote: "Trust Badges went live without a designer fire drill. Checkout anxiety dropped and CS tickets about ‘is this legit?’ basically stopped.",
    name: "Priya K.",
    role: "Head of Ops, marketplace seller",
    rating: "5.0",
  },
];

export default function PremiumHubPage() {
  const video = getHubVideo();
  const showVideo = hasAppVideo({ youtubeUrlOrId: video.youtube, vimeoId: video.vimeo });

  return (
    <div className="tw-bg-white tw-text-slate-900">
      <header className="tw-sticky tw-top-0 tw-z-50 tw-border-b tw-border-white/10 tw-bg-[#0B0E14]">
        <div className="tw-border-b tw-border-white/10 tw-bg-violet-600/35 tw-py-2.5 tw-text-center tw-text-[13px] tw-text-white/90">
          <span className="tw-font-medium">Three apps · one quality bar · built for Shopify Online Store 2.0</span>
          <Link href="/contact-us" className="tw-ml-2 tw-font-semibold tw-text-white tw-underline tw-decoration-white/40 tw-underline-offset-4 hover:tw-decoration-white">
            Talk to us →
          </Link>
        </div>
        <div className="tw-mx-auto tw-flex tw-h-[4.25rem] tw-max-w-7xl tw-items-center tw-justify-between tw-gap-3 tw-bg-[#0B0E14] tw-px-4 sm:tw-px-5 lg:tw-px-8">
            <Link href="/" className="tw-flex tw-min-w-0 tw-items-center tw-gap-2.5 tw-text-white sm:tw-gap-3">
              <Image src={LOGO_SRC} alt="ProWebCoder" width={150} height={48} className="tw-h-7 tw-w-auto tw-shrink-0 tw-object-contain sm:tw-h-8" priority />
              <span className="tw-hidden tw-truncate tw-border-l tw-border-white/20 tw-pl-2.5 tw-text-xs tw-font-semibold tw-text-white/95 sm:tw-pl-3 sm:tw-text-sm md:tw-inline md:tw-max-w-[9rem] lg:tw-max-w-[14rem] xl:tw-max-w-none">
                Shopify Apps
              </span>
            </Link>
            <nav className="tw-hidden tw-items-center tw-gap-5 md:tw-flex lg:tw-gap-7" aria-label="Suite navigation">
              <Link href="/pricing" className="tw-text-xs tw-font-medium tw-text-white/65 tw-transition-colors hover:tw-text-white lg:tw-text-sm">
                Pricing
              </Link>
              <a href="#results" className="tw-text-xs tw-font-medium tw-text-white/65 tw-transition-colors hover:tw-text-white lg:tw-text-sm">
                Proof
              </a>
              <a href="#reviews" className="tw-text-xs tw-font-medium tw-text-white/65 tw-transition-colors hover:tw-text-white lg:tw-text-sm">
                Reviews
              </a>
              {showVideo ? (
                <a href="#product-video" className="tw-text-xs tw-font-medium tw-text-white/65 tw-transition-colors hover:tw-text-white lg:tw-text-sm">
                  Video
                </a>
              ) : null}
              <a
                href="https://apps.shopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-text-xs tw-font-medium tw-text-white/65 tw-transition-colors hover:tw-text-white lg:tw-text-sm"
              >
                App Store
              </a>
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
              href="#apps"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="pwc-hub-yellow-cta tw-inline-flex tw-items-center tw-gap-1.5 tw-rounded-full tw-px-3 tw-py-2 tw-text-xs tw-font-bold tw-shadow-lg sm:tw-px-5 sm:tw-text-sm"
            >
                <SiShopify className="tw-h-3.5 tw-w-3.5 tw-shrink-0 tw-text-slate-900 sm:tw-h-4 sm:tw-w-4" aria-hidden />
                <span className="tw-max-w-[6.5rem] tw-truncate sm:tw-max-w-none">Explore apps</span>
              </motion.a>
            </div>
        </div>
      </header>

      <section className="tw-relative tw-overflow-hidden tw-bg-[#0B0E14] tw-pt-12 tw-pb-24 lg:tw-pt-16 lg:tw-pb-32">
        <div className="tw-pointer-events-none tw-absolute tw-inset-0 tw-bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.35),transparent)]" />
        <div className="tw-relative tw-mx-auto tw-grid tw-max-w-7xl tw-items-center tw-gap-14 tw-px-5 lg:tw-grid-cols-2 lg:tw-px-8">
          <div>
            <Reveal>
              <p className="tw-mb-5 tw-text-xs tw-font-bold tw-tracking-[0.3em] tw-text-violet-300">PROWEBCODER SUITE</p>
              <h1 className="tw-text-balance tw-text-4xl tw-font-semibold tw-tracking-tight tw-text-white tw-leading-[1.08] md:tw-text-5xl lg:tw-text-[3.25rem]">
                Conversion apps that feel like{" "}
                <span className="tw-inline-block tw-bg-gradient-to-r tw-from-violet-200 tw-to-fuchsia-200 tw-bg-clip-text tw-text-transparent tw-drop-shadow-[0_0_24px_rgba(167,139,250,0.35)]">
                  consumer SaaS
                </span>
              </h1>
              <p className="tw-mt-5 tw-max-w-xl tw-text-lg tw-font-semibold tw-leading-snug tw-text-amber-200 md:tw-text-xl">
                One suite for wishlists, cart revenue, and checkout trust — without stitching five plugins together.
              </p>
              <p className="tw-mt-4 tw-max-w-xl tw-text-lg tw-text-slate-400">
                Loyalty, cart revenue, and trust — engineered with the same bar you expect from Stripe-grade software.
              </p>
              <div className="tw-mt-6 tw-flex tw-flex-wrap tw-items-center tw-gap-4">
                <PremiumStars value="4.9" reviewCount="450+" />
                <span className="tw-inline-flex tw-items-center tw-gap-1.5 tw-rounded-full tw-border tw-border-white/15 tw-bg-white/5 tw-px-3 tw-py-1 tw-text-xs tw-font-semibold tw-text-white/85">
                  <SiShopify className="tw-h-3.5 tw-w-3.5" aria-hidden />
                  Built for Shopify
                </span>
              </div>
              <div className="tw-mt-9 tw-flex tw-flex-wrap tw-gap-4">
                <motion.a
                  href="#apps"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="pwc-hub-yellow-cta tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-px-7 tw-py-3.5 tw-text-sm tw-font-bold tw-shadow-lg"
                >
                  <SiShopify className="tw-h-4 tw-w-4" aria-hidden />
                  Get started
                </motion.a>
                {showVideo ? (
                  <motion.a
                    href="#product-video"
                    whileHover={{ scale: 1.02 }}
                    className="pwc-hub-ghost-light tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded-full tw-border tw-border-white/25 tw-px-7 tw-py-3.5 tw-text-sm tw-font-semibold hover:tw-bg-white/10"
                  >
                    <DemoVideoIcon />
                    View Demo
                  </motion.a>
                ) : null}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.06}>
            <HeroMockGeneric />
          </Reveal>
        </div>
      </section>

      <PremiumTrustStrip headline="Why teams bet the storefront on ProWebCoder" />

      <AppVideoSection
        youtubeUrlOrId={video.youtube}
        vimeoId={video.vimeo || undefined}
        eyebrow="Suite reel"
        title="One motion picture for cold traffic"
        subtitle="Optional overview video — configure with NEXT_PUBLIC_PWC_VIDEO_HUB or VIMEO_HUB."
        variant="light"
      />

      <section id="results" className="tw-border-y tw-border-slate-200 tw-bg-gradient-to-b tw-from-slate-50 tw-to-white tw-py-16 lg:tw-py-20">
        <div className="tw-mx-auto tw-max-w-7xl tw-px-5 lg:tw-px-8">
          <Reveal className="tw-mb-10 tw-text-center md:tw-mb-12">
            <p className="tw-text-xs tw-font-bold tw-tracking-[0.25em] tw-text-violet-600">PROOF</p>
            <h2 className="tw-mt-2 tw-text-2xl tw-font-semibold tw-tracking-tight tw-text-slate-900 md:tw-text-3xl">Numbers merchants actually care about</h2>
            <p className="tw-mx-auto tw-mt-3 tw-max-w-2xl tw-text-sm tw-text-slate-600 md:tw-text-base">
              One engineering bar across the suite — so installs compound instead of fighting each other in your theme.
            </p>
          </Reveal>
          <div className="tw-grid tw-gap-5 md:tw-grid-cols-3 md:tw-gap-6">
            {[
              { v: "1k+", l: "Active installs", sub: "Across all ProWebCoder Shopify apps" },
              { v: "4.9★", l: "Blended satisfaction", sub: "Weighted Shopify App Store sentiment" },
              { v: "<48h", l: "Median first win", sub: "Time to measurable lift after go-live" },
            ].map(({ v, l, sub }) => (
              <Reveal key={l}>
                <div className="tw-relative tw-overflow-hidden tw-rounded-2xl tw-border tw-border-slate-200/90 tw-bg-white tw-px-6 tw-py-8 tw-text-center tw-shadow-[0_4px_24px_rgba(15,23,42,0.06)] tw-transition-shadow hover:tw-shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                  <div className="tw-mx-auto tw-mb-5 tw-h-1 tw-w-10 tw-rounded-full tw-bg-gradient-to-r tw-from-violet-500 tw-to-fuchsia-500" aria-hidden />
                  <p className="tw-text-4xl tw-font-semibold tw-tracking-tight tw-text-slate-900 md:tw-text-[2.75rem]">{v}</p>
                  <p className="tw-mt-2 tw-text-sm tw-font-semibold tw-text-slate-800">{l}</p>
                  <p className="tw-mx-auto tw-mt-2 tw-max-w-[14rem] tw-text-xs tw-leading-relaxed tw-text-slate-500">{sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="apps" className="tw-bg-slate-50/80 tw-py-20 lg:tw-py-28">
        <div className="tw-mx-auto tw-max-w-7xl tw-px-5 lg:tw-px-8">
          <Reveal className="tw-mb-12 tw-text-center md:tw-mb-16">
            <p className="tw-text-xs tw-font-bold tw-tracking-[0.25em] tw-text-violet-600">APPS</p>
            <h2 className="tw-mt-3 tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-slate-900 md:tw-text-4xl">
              Pick your wedge — install in minutes
            </h2>
            <p className="tw-mx-auto tw-mt-4 tw-max-w-2xl tw-text-slate-600">
              Each app is a focused product with its own landing, pricing, and proof — same quality bar, zero plugin soup.
            </p>
          </Reveal>
          <div className="tw-flex tw-flex-col tw-gap-10 lg:tw-gap-14">
            {apps.map((app, i) => (
              <Reveal key={app.slug} delay={i * 0.05}>
                <article className="tw-group tw-relative tw-overflow-hidden tw-rounded-3xl tw-border tw-border-slate-200/90 tw-bg-white tw-shadow-[0_8px_40px_-12px_rgba(15,23,42,0.12)] tw-ring-1 tw-ring-slate-900/[0.04] tw-transition-[box-shadow,transform] hover:tw-shadow-[0_20px_50px_-16px_rgba(15,23,42,0.18)]">
                  <div className={`tw-pointer-events-none tw-absolute tw-inset-x-0 tw-top-0 tw-h-1 tw-opacity-90 tw-bg-gradient-to-r ${app.hue}`} aria-hidden />
                  <div className={`tw-absolute tw--right-24 tw--top-24 tw-h-64 tw-w-64 tw-rounded-full tw-blur-3xl tw-transition-opacity tw-opacity-30 group-hover:tw-opacity-50 tw-bg-gradient-to-br ${app.hue}`} aria-hidden />
                  <div className="tw-relative tw-grid tw-gap-10 tw-p-8 md:tw-p-10 lg:tw-grid-cols-12 lg:tw-items-center lg:tw-gap-12 lg:tw-p-12">
                    <div className="tw-min-w-0 lg:tw-col-span-6">
                      <div className="tw-flex tw-flex-wrap tw-items-center tw-gap-2">
                        <span className={`tw-inline-block tw-h-2 tw-w-2 tw-rounded-full ${app.accentBar}`} aria-hidden />
                        <p className="tw-text-[11px] tw-font-bold tw-tracking-[0.2em] tw-text-slate-500">SHOPIFY APP</p>
                      </div>
                      <h3 className="tw-mt-3 tw-text-2xl tw-font-semibold tw-tracking-tight tw-text-slate-900 md:tw-text-3xl">{app.name}</h3>
                      <p className="tw-mt-3 tw-max-w-xl tw-text-base tw-leading-relaxed tw-text-slate-600">{app.desc}</p>
                      <ul className="tw-mt-6 tw-space-y-3">
                        {app.bullets.map((b) => (
                          <li key={b} className="tw-flex tw-gap-3 tw-text-sm tw-leading-snug tw-text-slate-700">
                            <span className="tw-mt-0.5 tw-flex tw-h-5 tw-w-5 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-slate-100 tw-text-emerald-600">
                              <FiCheck className="tw-h-3 tw-w-3" strokeWidth={3} aria-hidden />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="tw-mt-6 tw-inline-flex tw-flex-wrap tw-items-center tw-gap-3">
                        <span className="tw-rounded-full tw-border tw-border-slate-200 tw-bg-slate-50 tw-px-3 tw-py-1.5 tw-text-xs tw-font-semibold tw-text-slate-800">
                          Signal · <span className="tw-text-emerald-700">{app.stat}</span> {app.statLabel}
                        </span>
                        <span className="tw-inline-flex tw-items-center tw-gap-1.5 tw-text-xs tw-font-medium tw-text-slate-500">
                          <SiShopify className="tw-h-3.5 tw-w-3.5 tw-text-[#95BF47]" aria-hidden />
                          Built for Shopify
                        </span>
                      </div>
                      <div className="tw-mt-8 tw-flex tw-flex-wrap tw-gap-3">
                        <motion.a
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          data-hub-variant={HUB_INSTALL_VARIANT[app.slug]}
                          className="pwc-hub-install tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-px-6 tw-py-3 tw-text-sm tw-font-semibold tw-shadow-lg"
                        >
                          Install on Shopify <FiArrowRight />
                        </motion.a>
                        <Link
                          href={app.slug}
                          className="pwc-hub-secondary-cta tw-inline-flex tw-items-center tw-rounded-full tw-px-6 tw-py-3 tw-text-sm tw-font-semibold hover:tw-bg-slate-50"
                        >
                          Check it Out
                        </Link>
                      </div>
                    </div>
                    <div className="tw-min-w-0 lg:tw-col-span-6">
                      <div className="tw-relative tw-overflow-hidden tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-slate-950 tw-shadow-inner">
                        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-950/80 tw-via-transparent tw-to-transparent tw-opacity-80" aria-hidden />
                        <div className="tw-absolute tw-left-4 tw-top-4 tw-z-10 tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white/95 tw-px-3 tw-py-1.5 tw-text-[11px] tw-font-semibold tw-text-slate-800 tw-shadow-sm tw-backdrop-blur-sm">
                          <span className={`tw-h-1.5 tw-w-1.5 tw-rounded-full ${app.accentBar}`} aria-hidden />
                          Product preview
                        </div>
                        <img
                          src={PWC_PLACEHOLDER.wide(app.previewId)}
                          alt={`${app.name} product preview`}
                          width={960}
                          height={560}
                          loading={i === 0 ? "eager" : "lazy"}
                          decoding="async"
                          className="tw-aspect-[16/10] tw-h-auto tw-w-full tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="tw-scroll-mt-24 tw-border-t tw-border-slate-200 tw-bg-white tw-py-20 lg:tw-py-24">
        <div className="tw-mx-auto tw-max-w-7xl tw-px-5 lg:tw-px-8">
          <Reveal className="tw-mx-auto tw-mb-12 tw-max-w-2xl tw-text-center md:tw-mb-14">
            <p className="tw-text-xs tw-font-bold tw-tracking-[0.25em] tw-text-violet-600">REVIEWS</p>
            <h2 className="tw-mt-3 tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-slate-900 md:tw-text-4xl">What operators say about the suite</h2>
            <p className="tw-mt-4 tw-text-slate-600">
              Representative feedback from teams running our apps on real storefronts — not agency boilerplate.
            </p>
            <div className="tw-mt-6 tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-3">
              <PremiumStars value="4.9" reviewCount="450+" subtle className="tw-justify-center" />
            </div>
          </Reveal>
          <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-3 lg:tw-gap-8">
            {hubReviews.map((t, idx) => (
              <Reveal key={t.name} delay={idx * 0.06}>
                <div className="tw-flex tw-h-full tw-flex-col tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-gradient-to-b tw-from-white tw-to-slate-50/80 tw-p-7 tw-shadow-sm tw-transition-shadow hover:tw-shadow-md md:tw-p-8">
                  <div className="tw-flex tw-items-center tw-justify-between tw-gap-2">
                    <span className="tw-text-xs tw-font-bold tw-uppercase tw-tracking-wider tw-text-emerald-700">Verified review</span>
                    <PremiumStars value={t.rating} subtle className="tw-scale-90" />
                  </div>
                  <span className="tw-mt-3 tw-text-3xl tw-leading-none tw-text-violet-200">“</span>
                  <p className="tw-mt-1 tw-flex-1 tw-text-sm tw-leading-relaxed tw-text-slate-700">{t.quote}</p>
                  <div className="tw-mt-6 tw-flex tw-items-center tw-gap-3 tw-border-t tw-border-slate-100 tw-pt-5">
                    <div className="tw-h-11 tw-w-11 tw-shrink-0 tw-rounded-full tw-bg-gradient-to-br tw-from-slate-200 tw-to-slate-400" aria-hidden />
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

      <section className="tw-border-t tw-border-slate-200 tw-bg-white tw-py-20">
        <div className="tw-mx-auto tw-max-w-3xl tw-px-5 tw-text-center lg:tw-px-8">
          <Reveal>
            <h2 className="tw-text-3xl tw-font-semibold tw-text-slate-900">Questions before you install?</h2>
            <p className="tw-mt-4 tw-text-slate-600">Our team ships alongside merchants — not ticket robots.</p>
            <motion.a
              href="/contact-us"
              whileHover={{ scale: 1.02 }}
              className="pwc-hub-yellow-cta tw-mt-8 tw-inline-flex tw-rounded-full tw-px-8 tw-py-3.5 tw-text-sm tw-font-bold tw-shadow-md"
            >
              Contact support
            </motion.a>
          </Reveal>
        </div>
      </section>

      <PremiumLandingFooter />
    </div>
  );
}
