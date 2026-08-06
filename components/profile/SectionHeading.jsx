export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`tw-max-w-3xl ${
        isCenter ? "tw-mx-auto tw-text-center" : "tw-text-left"
      } ${className}`}
    >
      {eyebrow ? (
        <div className={`tw-mb-4 tw-inline-flex tw-items-center tw-gap-2.5 tw-rounded-full tw-border tw-border-emerald-200 tw-bg-emerald-50 tw-px-3.5 tw-py-1.5 tw-text-xs tw-font-bold tw-uppercase tw-tracking-wider tw-text-emerald-800 tw-shadow-sm`}>
          <span className="tw-relative tw-flex tw-h-2 tw-w-2">
            <span className="tw-absolute tw-inline-flex tw-h-full tw-w-full tw-animate-ping tw-rounded-full tw-bg-emerald-500 tw-opacity-75" />
            <span className="tw-relative tw-inline-flex tw-h-2 tw-w-2 tw-rounded-full tw-bg-emerald-600" />
          </span>
          {eyebrow}
        </div>
      ) : null}

      <h2 className="tw-text-3xl tw-font-extrabold tw-tracking-tight tw-text-slate-900 sm:tw-text-4xl lg:tw-text-5xl lg:tw-leading-[1.15]">
        {title}
      </h2>

      {description ? (
        <p className="tw-mt-4 tw-text-base tw-leading-relaxed tw-text-slate-600 sm:tw-text-lg lg:tw-text-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
