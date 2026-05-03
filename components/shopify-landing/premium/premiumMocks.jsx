"use client";

import { PWC_PLACEHOLDER } from "./placeholders";

/** High-fidelity placeholder UIs — Stripe / SaaS template style + visible stock placeholders */

export function HeroMockWishlist() {
  return (
    <div className="tw-relative tw-overflow-hidden tw-rounded-2xl tw-border tw-border-white/10 tw-bg-gradient-to-br tw-from-slate-900 tw-to-slate-950 tw-p-5 tw-shadow-[0_40px_120px_-40px_rgba(0,0,0,.85)] tw-ring-1 tw-ring-white/10">
      <div className="tw-mb-4 tw-flex tw-items-center tw-justify-between">
        <div className="tw-flex tw-items-center tw-gap-2">
          <div className="tw-h-8 tw-w-8 tw-rounded-lg tw-bg-gradient-to-br tw-from-emerald-400 tw-to-teal-600" />
          <div>
            <div className="tw-h-2 tw-w-24 tw-rounded tw-bg-white/30" />
            <div className="tw-mt-1 tw-h-2 tw-w-16 tw-rounded tw-bg-white/15" />
          </div>
        </div>
        <span className="tw-rounded-full tw-bg-emerald-500/20 tw-px-2 tw-py-0.5 tw-text-[10px] tw-font-semibold tw-text-emerald-300">
          Live
        </span>
      </div>
      <div className="tw-grid tw-gap-3 md:tw-grid-cols-5">
        <div className="tw-col-span-3 tw-rounded-xl tw-border tw-border-white/10 tw-bg-black/30 tw-p-4">
          <p className="tw-text-[10px] tw-font-semibold tw-uppercase tw-tracking-wider tw-text-white/45">Wishlist velocity</p>
          <div className="tw-mt-4 tw-flex tw-items-end tw-gap-1.5">
            {[35, 48, 42, 62, 55, 72, 88].map((h, i) => (
              <div
                key={i}
                className="tw-flex-1 tw-rounded-sm tw-bg-gradient-to-t tw-from-emerald-600/40 tw-to-emerald-400/90"
                style={{ height: `${h}%`, minHeight: 28 }}
              />
            ))}
          </div>
        </div>
        <div className="tw-col-span-2 tw-flex tw-flex-col tw-gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="tw-flex tw-gap-2 tw-rounded-lg tw-border tw-border-white/10 tw-bg-white/[0.04] tw-p-2">
              <img
                src={PWC_PLACEHOLDER.thumb(i)}
                alt=""
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="tw-h-10 tw-w-10 tw-shrink-0 tw-rounded-md tw-object-cover"
              />
              <div className="tw-flex tw-flex-1 tw-flex-col tw-justify-center tw-gap-1.5">
                <div className="tw-h-2 tw-w-full tw-max-w-[120px] tw-rounded tw-bg-white/20" />
                <div className="tw-h-2 tw-w-2/3 tw-rounded tw-bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroMockCart() {
  return (
    <div className="tw-relative tw-overflow-hidden tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-white tw-p-5 tw-shadow-[0_40px_100px_-36px_rgba(234,88,12,.35)] tw-ring-2 tw-ring-amber-100">
      <div className="tw-mb-3 tw-flex tw-items-center tw-justify-between tw-border-b tw-border-slate-100 tw-pb-3">
        <span className="tw-text-[11px] tw-font-bold tw-text-slate-500">CART</span>
        <span className="tw-rounded-full tw-bg-emerald-100 tw-px-2 tw-py-0.5 tw-text-[10px] tw-font-bold tw-text-emerald-800">
          +$18.40
        </span>
      </div>
      <div className="tw-space-y-2">
        {[1, 2].map((i) => (
          <div key={i} className="tw-flex tw-gap-3 tw-rounded-xl tw-border tw-border-slate-100 tw-bg-slate-50/80 tw-p-3">
            <img
              src={PWC_PLACEHOLDER.thumb(i + 2)}
              alt=""
              width={48}
              height={48}
              loading="lazy"
              decoding="async"
              className="tw-h-12 tw-w-12 tw-shrink-0 tw-rounded-lg tw-object-cover"
            />
            <div className="tw-flex-1 tw-space-y-2">
              <div className="tw-h-2 tw-w-3/4 tw-rounded tw-bg-slate-200" />
              <div className="tw-h-2 tw-w-1/2 tw-rounded tw-bg-slate-100" />
            </div>
          </div>
        ))}
        <div className="tw-rounded-xl tw-border-2 tw-border-dashed tw-border-amber-300 tw-bg-amber-50 tw-p-4">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div>
              <p className="tw-text-xs tw-font-bold tw-text-amber-950">Smart upsell</p>
              <p className="tw-text-[11px] tw-text-amber-900/80">Shipping protection</p>
            </div>
            <span className="tw-rounded-md tw-bg-amber-400 tw-px-2 tw-py-1 tw-text-[10px] tw-font-black tw-text-slate-900">+$4.99</span>
          </div>
          <div className="tw-mt-3 tw-h-9 tw-w-full tw-rounded-lg tw-bg-slate-900" />
        </div>
      </div>
    </div>
  );
}

export function HeroMockTrust() {
  return (
    <div className="tw-relative tw-overflow-hidden tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-white tw-p-5 tw-shadow-[0_36px_90px_-32px_rgba(79,70,229,.28)] tw-ring-2 tw-ring-indigo-100">
      <div className="tw-mb-3 tw-flex tw-items-center tw-justify-between">
        <div>
          <p className="tw-text-[10px] tw-font-semibold tw-text-slate-500">Product page</p>
          <p className="tw-text-sm tw-font-bold tw-text-slate-900">NovaLayer Hoodie</p>
        </div>
        <span className="tw-rounded-lg tw-bg-emerald-50 tw-px-2 tw-py-0.5 tw-text-[10px] tw-font-bold tw-text-emerald-800">+6.2% CTR</span>
      </div>
      <div className="tw-relative tw-aspect-[16/10] tw-overflow-hidden tw-rounded-xl tw-bg-slate-100 tw-ring-1 tw-ring-slate-200/80">
        <img
          src={PWC_PLACEHOLDER.wide(180)}
          alt="Product preview"
          width={720}
          height={450}
          loading="lazy"
          decoding="async"
          className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-object-cover"
        />
      </div>
      <div className="tw-mt-3 tw-grid tw-grid-cols-3 tw-gap-2">
        {["Secure checkout", "Easy returns", "Fast ship"].map((t) => (
          <div key={t} className="tw-rounded-lg tw-border tw-border-slate-100 tw-bg-slate-50 tw-py-2 tw-text-center tw-text-[9px] tw-font-semibold tw-text-slate-700">
            ✓ {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BlockMockAnalytics() {
  return (
    <div className="tw-relative tw-overflow-hidden tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-white tw-p-6 tw-shadow-xl">
      <div className="tw-mb-6 tw-flex tw-items-center tw-gap-3">
        <div className="tw-h-10 tw-w-10 tw-rounded-full tw-bg-gradient-to-br tw-from-violet-500 tw-to-indigo-600" />
        <div className="tw-flex-1 tw-space-y-2">
          <div className="tw-h-2.5 tw-w-1/3 tw-rounded tw-bg-slate-200" />
          <div className="tw-h-2 tw-w-1/4 tw-rounded tw-bg-slate-100" />
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-3 tw-gap-3">
        {[72, 48, 88].map((h, i) => (
          <div key={i} className="tw-flex tw-flex-col tw-items-center tw-rounded-xl tw-bg-slate-50 tw-p-4">
            <div className="tw-h-24 tw-w-24 tw-rounded-full tw-border-4 tw-border-violet-200 tw-border-t-violet-600" style={{ clipPath: "none" }} />
            <div className="tw-mt-3 tw-h-2 tw-w-16 tw-rounded tw-bg-slate-200" />
          </div>
        ))}
      </div>
      <div className="tw-relative tw-mt-6 tw-h-36 tw-overflow-hidden tw-rounded-xl tw-bg-slate-100 tw-ring-1 tw-ring-slate-200/80">
        <img
          src={PWC_PLACEHOLDER.chartStrip()}
          alt=""
          width={960}
          height={320}
          loading="lazy"
          decoding="async"
          className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-object-cover tw-opacity-90"
        />
        <div className="tw-pointer-events-none tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-white tw-via-white/75 tw-to-white/30" />
        <div className="tw-relative tw-flex tw-h-full tw-items-end tw-gap-2 tw-p-4">
          {[40, 55, 35, 70, 50, 80, 65].map((w, i) => (
            <div key={i} className="tw-flex-1 tw-rounded-t-md tw-bg-violet-600/85" style={{ height: `${w}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlockMockKanban() {
  return (
    <div className="tw-grid tw-gap-4 md:tw-grid-cols-3">
      {["To do", "Doing", "Done"].map((col) => (
        <div key={col} className="tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-slate-50 tw-p-3">
          <p className="tw-mb-3 tw-text-xs tw-font-bold tw-text-slate-500">{col}</p>
          {[1, 2].map((c) => (
            <div key={c} className="tw-mb-2 tw-rounded-xl tw-border tw-border-white tw-bg-white tw-p-3 tw-shadow-sm">
              <div className="tw-h-2 tw-w-3/4 tw-rounded tw-bg-slate-200" />
              <div className="tw-mt-2 tw-h-2 tw-w-1/2 tw-rounded tw-bg-slate-100" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function BlockMockGallery() {
  return (
    <div className="tw-grid tw-grid-cols-2 tw-gap-3 md:tw-grid-cols-2">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="tw-relative tw-aspect-[4/3] tw-overflow-hidden tw-rounded-2xl tw-bg-slate-200 tw-shadow-inner tw-ring-1 tw-ring-slate-200/90"
        >
          <img
            src={PWC_PLACEHOLDER.tile(i)}
            alt=""
            width={560}
            height={420}
            loading="lazy"
            decoding="async"
            className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function HeroMockGeneric() {
  return (
    <div className="tw-relative tw-overflow-hidden tw-rounded-2xl tw-border tw-border-white/10 tw-bg-slate-900/80 tw-p-5 tw-shadow-2xl tw-ring-1 tw-ring-violet-500/20">
      <div className="tw-mb-4 tw-flex tw-gap-2">
        <div className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-red-400/80" />
        <div className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-amber-400/80" />
        <div className="tw-h-3 tw-w-3 tw-rounded-full tw-bg-emerald-400/80" />
      </div>
      <div className="tw-grid tw-grid-cols-12 tw-gap-3">
        <div className="tw-col-span-4 tw-space-y-2 tw-rounded-xl tw-border tw-border-white/10 tw-bg-black/20 tw-p-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="tw-h-8 tw-rounded-lg tw-bg-white/5" />
          ))}
        </div>
        <div className="tw-col-span-8 tw-rounded-xl tw-border tw-border-white/10 tw-bg-black/30 tw-p-4">
          <div className="tw-relative tw-h-40 tw-overflow-hidden tw-rounded-lg tw-ring-1 tw-ring-white/10">
            <img
              src={PWC_PLACEHOLDER.wide(201)}
              alt=""
              width={640}
              height={400}
              loading="lazy"
              decoding="async"
              className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-object-cover tw-opacity-95"
            />
            <div className="tw-pointer-events-none tw-absolute tw-inset-0 tw-bg-gradient-to-tr tw-from-slate-950/80 tw-via-violet-950/40 tw-to-transparent" />
          </div>
          <div className="tw-mt-4 tw-grid tw-grid-cols-3 tw-gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="tw-relative tw-h-16 tw-overflow-hidden tw-rounded-lg tw-ring-1 tw-ring-white/10">
                <img
                  src={PWC_PLACEHOLDER.tile(i + 2)}
                  alt=""
                  width={200}
                  height={128}
                  loading="lazy"
                  decoding="async"
                  className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-object-cover tw-opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
