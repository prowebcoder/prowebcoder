"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { footerLinks3, FOOTER_LINKS3_HIDDEN_TITLES } from "@/data/footer";

const LOGO = "/assets/images/common/white1.webp";

/* Affiliate / other columns: omit titles listed in `FOOTER_LINKS3_HIDDEN_TITLES` (see `data/footer.js`) — links stay in data for later. */

const SUITE_LISTINGS = [
  { href: "https://apps.shopify.com/pwc-customer-pages-wishlist", label: "Accounts & Wishlist" },
  { href: "https://apps.shopify.com/pwc-cartflex", label: "CartFlex" },
  { href: "https://apps.shopify.com/pwc-trust-badges", label: "Trust Badges" },
];

/**
 * @param {{ appListingUrl?: string, appName?: string }} props — omit both for hub / generic suite footer
 */
export default function PremiumLandingFooter({ appListingUrl, appName }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Subscribing…");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName: name }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Subscribed successfully.");
        setEmail("");
        setName("");
      } else {
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setMessage("Something went wrong");
    }
  };

  return (
    <footer className="tw-overflow-hidden tw-bg-gray-900 tw-text-white">
      <div className="tw-border-b tw-border-white/10 tw-bg-black/25 tw-py-10 sm:tw-py-12">
        <div className="tw-mx-auto tw-flex tw-max-w-7xl tw-flex-col tw-items-stretch tw-gap-8 tw-px-5 tw-text-center lg:tw-flex-row lg:tw-items-center lg:tw-justify-between lg:tw-gap-14 lg:tw-px-8 lg:tw-text-left">
          <div className="tw-mx-auto tw-max-w-md lg:tw-mx-0">
            <h2 className="tw-text-xl tw-font-semibold tw-tracking-tight sm:tw-text-2xl">Join the newsletter</h2>
            <p className="tw-mt-3 tw-text-sm tw-leading-relaxed tw-text-white/70 sm:tw-text-base">
              Sign up for product updates, migration tips, and Shopify growth ideas — same tone as our main site footer.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="tw-w-full tw-min-w-0 tw-max-w-xl lg:tw-flex-1" aria-label="Newsletter signup">
            <div className="tw-flex tw-min-w-0 tw-flex-col tw-gap-3 sm:tw-flex-row sm:tw-items-stretch">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="tw-h-12 tw-w-full tw-shrink-0 tw-rounded-xl tw-border tw-border-white/15 tw-bg-white tw-px-4 tw-text-sm tw-text-slate-900 tw-outline-none tw-ring-violet-500/40 focus:tw-ring-2 sm:tw-w-40 sm:tw-max-w-none md:tw-w-44"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="tw-h-12 tw-w-full tw-min-w-0 tw-rounded-xl tw-border tw-border-white/15 tw-bg-white tw-px-4 tw-text-sm tw-text-slate-900 tw-outline-none tw-ring-violet-500/40 focus:tw-ring-2 sm:tw-min-w-[14rem] sm:tw-flex-1"
              />
              <button
                type="submit"
                className="tw-h-12 tw-shrink-0 tw-rounded-full tw-bg-[#FFD23F] tw-px-8 tw-text-sm tw-font-bold tw-text-slate-900 tw-shadow-md tw-transition-colors hover:tw-bg-[#f2c73a] sm:tw-min-w-[9.5rem]"
              >
                Subscribe
              </button>
            </div>
            {message ? <p className="tw-mt-2 tw-text-left tw-text-xs tw-text-white/80">{message}</p> : null}
          </form>
        </div>
      </div>

      <div className="tw-py-12 lg:tw-py-16">
        <div className="tw-mx-auto tw-max-w-7xl tw-px-5 lg:tw-px-8">
          <div className="tw-grid tw-gap-12 md:tw-grid-cols-2 lg:tw-grid-cols-12 lg:tw-gap-x-12 lg:tw-gap-y-10">
            <div className="md:tw-col-span-2 lg:tw-col-span-4">
              <Link href="/" className="tw-inline-block">
                <Image src={LOGO} alt="ProWebCoder" width={150} height={48} className="tw-h-10 tw-w-auto tw-object-contain" priority={false} />
              </Link>
              <p className="tw-mt-5 tw-max-w-sm tw-text-sm tw-leading-relaxed tw-text-white/70">
                Design amazing digital experiences that create more happy in the world. Shopify experts for migration, apps, and
                growth.
              </p>
            </div>
            <div className="tw-grid tw-grid-cols-2 tw-gap-x-8 tw-gap-y-10 sm:tw-grid-cols-2 lg:tw-col-span-8 lg:tw-grid-cols-4 lg:tw-gap-x-10">
              {footerLinks3.filter((section) => !FOOTER_LINKS3_HIDDEN_TITLES.has(section.title)).map((section) => (
                <div key={section.title} className="tw-min-w-0">
                  <p className="tw-text-[11px] tw-font-bold tw-tracking-[0.2em] tw-text-white/45">{section.title}</p>
                  <ul className="tw-m-0 tw-mt-5 tw-list-none tw-space-y-2.5 tw-pl-0 !tw-list-none">
                    {section.links.map((link) => (
                      <li key={`${section.title}-${link.label}`} className="tw-list-none">
                        <a
                          href={link.href}
                          target={link.target || "_self"}
                          rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                          className="tw-text-xs tw-leading-snug tw-text-white/70 tw-transition-colors hover:tw-text-white"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="tw-min-w-0">
                <p className="tw-text-[11px] tw-font-bold tw-tracking-[0.2em] tw-text-white/45">SHOPIFY APPS</p>
                <ul className="tw-m-0 tw-mt-5 tw-list-none tw-space-y-2.5 tw-pl-0 !tw-list-none">
                  {appListingUrl && appName ? (
                    <li className="tw-list-none">
                      <a href={appListingUrl} target="_blank" rel="noopener noreferrer" className="tw-text-xs tw-text-white/70 hover:tw-text-white">
                        {appName} — App Store
                      </a>
                    </li>
                  ) : (
                    SUITE_LISTINGS.map((l) => (
                      <li key={l.href} className="tw-list-none">
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="tw-text-xs tw-text-white/70 hover:tw-text-white">
                          {l.label}
                        </a>
                      </li>
                    ))
                  )}
                  <li className="tw-list-none">
                    <Link href="/shopify-apps" className="tw-text-xs tw-text-white/70 hover:tw-text-white">
                      All apps overview
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-border-t tw-border-white/10 tw-py-6">
        <div className="tw-mx-auto tw-flex tw-max-w-7xl tw-flex-col tw-items-center tw-justify-between tw-gap-3 tw-px-5 tw-text-center tw-text-xs tw-text-white/60 md:tw-flex-row md:tw-text-left lg:tw-px-8">
          <p>ProWebCoder © {new Date().getFullYear()}, All rights reserved.</p>
          <p className="tw-text-white/45">Shopify® is a trademark of Shopify Inc.</p>
        </div>
      </div>
    </footer>
  );
}
