export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`tw-max-w-3xl ${align === "center" ? "tw-mx-auto tw-text-center" : "tw-text-left"}`}>
      <p className="tw-mb-3 tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-white/10 tw-bg-white/5 tw-px-3 tw-py-1 tw-text-[11px] tw-font-semibold tw-uppercase tw-tracking-[0.3em] tw-text-slate-300">
        <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-cyan-400" />
        {eyebrow}
      </p>
      <h2 className="tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-white sm:tw-text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="tw-mt-4 tw-text-base tw-leading-8 tw-text-slate-400 sm:tw-text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
