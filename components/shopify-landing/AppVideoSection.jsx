"use client";

import { Reveal } from "./Reveal";

/** Accept raw 11-char id, youtube.com/watch?v=,youtu.be/, or /embed/ */
export function parseYouTubeId(input) {
  if (!input || typeof input !== "string") return null;
  const s = input.trim();
  if (/^[\w-]{11}$/.test(s)) return s;
  const vParam = s.match(/[?&]v=([\w-]{11})/);
  if (vParam) return vParam[1];
  const short = s.match(/youtu\.be\/([\w-]{11})/);
  if (short) return short[1];
  const embed = s.match(/youtube\.com\/embed\/([\w-]{11})/);
  if (embed) return embed[1];
  return null;
}

export function hasAppVideo(opts) {
  const vimeo = opts?.vimeoId;
  const vimeoOk = typeof vimeo === "string" && Boolean(vimeo.trim());
  return Boolean(parseYouTubeId(opts?.youtubeUrlOrId || "") || vimeoOk);
}

/**
 * Optional product tour block. Set NEXT_PUBLIC_* env vars or pass ids from parent.
 */
export function AppVideoSection({
  youtubeUrlOrId,
  vimeoId,
  title = "Watch the demo",
  subtitle,
  eyebrow,
  variant = "dark",
}) {
  const ytId = parseYouTubeId(youtubeUrlOrId || "");
  const vmId = typeof vimeoId === "string" && vimeoId.trim() ? vimeoId.trim() : null;

  if (!ytId && !vmId) return null;

  const embedSrc = vmId
    ? `https://player.vimeo.com/video/${vmId}?badge=0&autopause=0&title=0&byline=0`
    : `https://www.youtube-nocookie.com/embed/${ytId}?rel=0&modestbranding=1&playsinline=1`;

  const shell =
    variant === "light"
      ? "tw-from-slate-50 tw-to-white tw-border-slate-200/80 tw-bg-gradient-to-b"
      : "tw-from-slate-900/95 tw-via-slate-950 tw-to-slate-950 tw-border-white/10 tw-bg-gradient-to-b";

  return (
    <section id="product-video" className={`tw-relative tw-scroll-mt-28 tw-border-y ${shell}`}>
      <div className={`tw-pointer-events-none tw-absolute tw-inset-0 ${variant === "dark" ? "tw-opacity-40" : "tw-opacity-[0.35]"}`}>
        <div
          className={`tw-h-full tw-w-full ${variant === "dark" ? "tw-bg-dot-dark" : "tw-bg-dot-light"}`}
          aria-hidden
        />
      </div>

      <div className="tw-relative tw-mx-auto tw-max-w-6xl tw-px-5 tw-py-16 md:tw-py-24 lg:tw-max-w-7xl">
        <Reveal>
          {(eyebrow || title || subtitle) && (
            <div className="tw-mx-auto tw-mb-10 tw-max-w-3xl tw-text-center">
              {eyebrow ? (
                <p
                  className={`tw-text-xs tw-font-bold tw-tracking-[0.2em] tw-uppercase ${variant === "dark" ? "tw-text-emerald-400/95" : "tw-text-indigo-700"}`}
                >
                  {eyebrow}
                </p>
              ) : null}
              <h2
                className={`tw-mt-2 tw-text-3xl tw-font-semibold tw-tracking-tight md:tw-text-4xl ${variant === "dark" ? "tw-text-white" : "tw-text-slate-900"}`}
              >
                {title}
              </h2>
              {subtitle ? (
                <p
                  className={`tw-mt-3 tw-text-base tw-leading-relaxed md:tw-text-lg ${variant === "dark" ? "tw-text-white/65" : "tw-text-slate-600"}`}
                >
                  {subtitle}
                </p>
              ) : null}
            </div>
          )}

          <div className="tw-relative tw-mx-auto tw-max-w-5xl">
            <div
              className={`tw-absolute tw--inset-2 tw-rounded-3xl tw-blur-xl md:tw--inset-4 ${variant === "dark" ? "tw-bg-emerald-500/12" : "tw-bg-indigo-500/18"}`}
            />
            <div
              className={`tw-relative tw-overflow-hidden tw-rounded-2xl tw-ring-2 ${variant === "dark" ? "tw-bg-slate-900 tw-ring-white/15 tw-shadow-[0_28px_100px_-20px_rgba(0,0,0,.75)]" : "tw-bg-white tw-ring-slate-200/90 tw-shadow-[0_26px_80px_-28px_rgba(15,23,42,.18)]"} `}
            >
              <div
                className={`tw-relative tw-aspect-video tw-w-full ${variant === "dark" ? "tw-bg-black" : "tw-bg-slate-100"}`}
              >
                <iframe
                  className="tw-absolute tw-inset-0 tw-h-full tw-w-full"
                  src={embedSrc}
                  title={title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div
                className={`tw-flex tw-items-center tw-justify-between tw-gap-4 tw-border-t tw-px-4 tw-py-3 md:tw-px-6 ${variant === "dark" ? "tw-border-white/10 tw-bg-slate-950/85 tw-text-xs tw-text-white/50" : "tw-border-slate-100 tw-bg-slate-50 tw-text-xs tw-text-slate-500"}`}
              >
                <span>Official product tour</span>
                <span className="tw-hidden sm:tw-inline">HD · captions available in-studio</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
