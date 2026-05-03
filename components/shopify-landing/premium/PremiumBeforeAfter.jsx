"use client";

import { Reveal } from "../Reveal";
import { FiArrowRight } from "react-icons/fi";

/**
 * @param {{ headline: string, sub?: string, before: { title: string, caption: string, bullets: string[], imageSrc: string }, after: { title: string, caption: string, bullets: string[], imageSrc: string } }} props
 */
export default function PremiumBeforeAfter({ headline, sub, before, after }) {
  return (
    <section className="tw-scroll-mt-24 tw-border-y tw-border-slate-200 tw-bg-white tw-py-24" id="proof">
      <div className="tw-mx-auto tw-max-w-7xl tw-px-5 lg:tw-px-8">
        <Reveal className="tw-mx-auto tw-mb-14 tw-max-w-2xl tw-text-center">
          <p className="tw-text-xs tw-font-bold tw-tracking-[0.25em] tw-text-violet-600">BEFORE / AFTER</p>
          <h2 className="tw-mt-3 tw-text-balance tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-slate-900 md:tw-text-4xl">{headline}</h2>
          {sub ? <p className="tw-mt-4 tw-text-lg tw-text-slate-600">{sub}</p> : null}
        </Reveal>
        <div className="tw-grid tw-gap-8 lg:tw-grid-cols-2 lg:tw-gap-10">
          {[
            { key: "before", tone: "tw-border-slate-300 tw-bg-slate-100", badge: "tw-bg-slate-600 tw-text-white", data: before },
            { key: "after", tone: "tw-border-emerald-200 tw-bg-emerald-50/50", badge: "tw-bg-emerald-600 tw-text-white", data: after },
          ].map(({ key, tone, badge, data }) => (
            <Reveal key={key}>
              <div className={`tw-flex tw-h-full tw-flex-col tw-overflow-hidden tw-rounded-2xl tw-border-2 ${tone} tw-shadow-lg`}>
                <div className="tw-relative tw-aspect-[16/10] tw-w-full tw-overflow-hidden tw-bg-slate-200">
                  <img src={data.imageSrc} alt="" className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-object-cover" loading="lazy" decoding="async" />
                  <span className={`tw-absolute tw-left-4 tw-top-4 tw-rounded-full tw-px-3 tw-py-1 tw-text-xs tw-font-bold ${badge}`}>{data.title}</span>
                </div>
                <div className="tw-flex tw-flex-1 tw-flex-col tw-p-6 md:tw-p-8">
                  <p className="tw-text-sm tw-font-medium tw-text-slate-500">{data.caption}</p>
                  <ul className="tw-mt-4 tw-space-y-2.5">
                    {data.bullets.map((b) => (
                      <li key={b} className="tw-flex tw-items-start tw-gap-2 tw-text-sm tw-leading-relaxed tw-text-slate-700">
                        <FiArrowRight className="tw-mt-0.5 tw-shrink-0 tw-text-violet-600" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
