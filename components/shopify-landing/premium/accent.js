/** Maps app “accent” to Tailwind utility groups (Stripe / Brainwave–style SaaS). */

export const ACCENTS = {
  violet: {
    btn: "tw-bg-violet-600 hover:tw-bg-violet-500 tw-text-white tw-shadow-lg tw-shadow-violet-900/25",
    btnGhost: "tw-border tw-border-white/20 tw-bg-white/5 hover:tw-bg-white/10 tw-text-white",
    iconWrap: "tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-violet-500/15 tw-text-violet-300",
    iconWrapLight: "tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-violet-100 tw-text-violet-700",
    glow: "tw-bg-violet-500/20",
    gradientText: "tw-from-violet-300 tw-to-fuchsia-300",
    pill: "tw-border-violet-500/40 tw-bg-violet-500/10 tw-text-violet-200",
    heroBgClass:
      "tw-bg-[radial-gradient(ellipse_78%_52%_at_78%_-8%,rgba(139,92,246,0.38),transparent_52%),radial-gradient(ellipse_52%_42%_at_12%_22%,rgba(34,197,94,0.14),transparent)]",
    pricingHighlight: "tw-bg-violet-600 tw-text-white hover:tw-bg-violet-500",
    pricingToggleAnnual: "tw-bg-violet-600 tw-text-white",
    listCheck: "tw-text-violet-400",
    pricingCardHighlight:
      "tw-border-violet-500/60 tw-bg-gradient-to-b tw-from-violet-950/80 tw-to-slate-950 tw-ring-2 tw-ring-violet-500/40",
    kickerText: "tw-text-violet-200",
  },
  emerald: {
    btn: "tw-bg-emerald-500 hover:tw-bg-emerald-400 tw-shadow-lg tw-shadow-emerald-900/25 tw-text-slate-950",
    btnGhost: "tw-border tw-border-white/20 tw-bg-white/5 hover:tw-bg-white/10 tw-text-white",
    iconWrap: "tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-emerald-500/15 tw-text-emerald-300",
    iconWrapLight: "tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-emerald-100 tw-text-emerald-700",
    glow: "tw-bg-emerald-500/20",
    gradientText: "tw-from-emerald-300 tw-to-teal-300",
    pill: "tw-border-emerald-500/40 tw-bg-emerald-500/10 tw-text-emerald-200",
    heroBgClass:
      "tw-bg-[radial-gradient(ellipse_72%_50%_at_88%_-4%,rgba(16,185,129,0.42),transparent_54%),radial-gradient(ellipse_48%_40%_at_8%_28%,rgba(52,211,153,0.12),transparent)]",
    pricingHighlight: "tw-bg-emerald-500 tw-text-slate-950 hover:tw-bg-emerald-400",
    pricingToggleAnnual: "tw-bg-emerald-500 tw-text-slate-950",
    listCheck: "tw-text-emerald-400",
    pricingCardHighlight:
      "tw-border-emerald-500/55 tw-bg-gradient-to-b tw-from-emerald-950/45 tw-to-slate-950 tw-ring-2 tw-ring-emerald-500/35",
    kickerText: "tw-text-emerald-200/95",
  },
  amber: {
    btn: "tw-bg-amber-400 hover:tw-bg-amber-300 tw-text-slate-950 tw-shadow-lg tw-shadow-amber-900/20",
    btnGhost: "tw-border tw-border-slate-300 tw-bg-white hover:tw-bg-slate-50 tw-text-slate-900",
    iconWrap: "tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-amber-100 tw-text-amber-800",
    iconWrapLight: "tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-amber-100 tw-text-amber-800",
    glow: "tw-bg-amber-400/25",
    gradientText: "tw-from-amber-400 tw-to-orange-400",
    pill: "tw-border-amber-300/45 tw-bg-amber-500/20 tw-text-amber-50 tw-shadow-sm",
    heroBgClass:
      "tw-bg-[radial-gradient(ellipse_76%_54%_at_82%_2%,rgba(251,191,36,0.28),transparent_50%),radial-gradient(ellipse_46%_38%_at_14%_24%,rgba(245,158,11,0.1),transparent)]",
    pricingHighlight: "tw-bg-amber-400 tw-text-slate-950 hover:tw-bg-amber-300",
    pricingToggleAnnual: "tw-bg-amber-400 tw-text-slate-950",
    listCheck: "tw-text-amber-400",
    pricingCardHighlight:
      "tw-border-amber-400/50 tw-bg-gradient-to-b tw-from-amber-950/30 tw-to-slate-950 tw-ring-2 tw-ring-amber-400/35",
    kickerText: "tw-text-amber-200",
  },
  indigo: {
    btn: "tw-bg-indigo-600 hover:tw-bg-indigo-500 tw-text-white tw-shadow-lg tw-shadow-indigo-900/25",
    btnGhost: "tw-border tw-border-slate-300 tw-bg-white hover:tw-bg-slate-50 tw-text-slate-900",
    iconWrap: "tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-indigo-100 tw-text-indigo-700",
    iconWrapLight: "tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-indigo-100 tw-text-indigo-700",
    glow: "tw-bg-indigo-400/20",
    gradientText: "tw-from-indigo-500 tw-to-sky-400",
    pill: "tw-border-indigo-300 tw-bg-indigo-50 tw-text-indigo-900",
    heroBgClass:
      "tw-bg-[radial-gradient(ellipse_85%_55%_at_70%_-10%,rgba(99,102,241,0.28),transparent_50%),radial-gradient(ellipse_60%_40%_at_10%_20%,rgba(16,185,129,0.12),transparent)]",
    pricingHighlight: "tw-bg-indigo-600 tw-text-white hover:tw-bg-indigo-500",
    pricingToggleAnnual: "tw-bg-indigo-600 tw-text-white",
    listCheck: "tw-text-indigo-400",
    pricingCardHighlight:
      "tw-border-indigo-500/55 tw-bg-gradient-to-b tw-from-indigo-950/70 tw-to-slate-950 tw-ring-2 tw-ring-indigo-500/40",
    kickerText: "tw-text-indigo-200",
  },
};
