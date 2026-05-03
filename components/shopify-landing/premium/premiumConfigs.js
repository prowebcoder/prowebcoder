import { getCartflexVideo, getTrustBadgesVideo, getWishlistVideo } from "../landingVideoEnv";
import { PWC_PLACEHOLDER } from "./placeholders";

function vWishlist() {
  const { youtube, vimeo } = getWishlistVideo();
  return { youtube, vimeo };
}
function vCart() {
  const { youtube, vimeo } = getCartflexVideo();
  return { youtube, vimeo };
}
function vTrust() {
  const { youtube, vimeo } = getTrustBadgesVideo();
  return { youtube, vimeo };
}

export function buildWishlistPremiumConfig() {
  const video = vWishlist();
  return {
    appName: "Accounts & Wishlist",
    shopifyUrl: "https://apps.shopify.com/pwc-customer-pages-wishlist",
    accent: "emerald",
    heroMock: "wishlist",
    video,
    videoSectionTitle: "Watch accounts & wishlists in a real shopper flow",
    videoSectionSubtitle: "Two minutes on how intent is captured, remembered, and turned into repeat revenue.",
    announcement: {
      text: "Same-day setup on Online Store 2.0 · works with Shopify Markets & headless-ready themes",
      href: "/shopify-apps",
      linkLabel: "Browse all ProWebCoder apps →",
    },
    rating: { value: "4.9", reviewCount: "500+" },
    trustStripHeadline: "Why merchants trust Accounts & Wishlist",
    hero: {
      eyebrow: "Shopify app · retention stack",
      kicker: "Boost returning revenue — without buying more cold traffic.",
      title: "Turn one-time buyers into",
      titleHighlight: "loyal customers",
      subtitle:
        "Branded customer accounts, native wishlists, and post-purchase experiences that feel intentional — not bolted together from five plugins.",
      primaryCta: "Add to Shopify",
      secondaryCta: "View Demo",
      note: "Trusted by 1,000+ stores · median setup under 10 minutes",
    },
    beforeAfter: {
      headline: "From stitched plugins to one retention surface",
      sub: "When wishlists and accounts share one system, teams stop arguing about whose dashboard is “source of truth.”",
      before: {
        title: "BEFORE",
        caption: "Fragmented tools & blind spots",
        bullets: [
          "Wishlist trapped in a third-party subdomain shoppers don’t trust",
          "Support and marketing disagree on who actually wants to come back",
          "Second-order revenue is a mystery until finance asks hard questions",
        ],
        imageSrc: PWC_PLACEHOLDER.wide(48),
      },
      after: {
        title: "AFTER",
        caption: "Accounts & Wishlist by ProWebCoder",
        bullets: [
          "Save-for-later and account data live on your domain, theme-native",
          "Segments you can sync to email with clear consent boundaries",
          "Dashboards your growth lead can screenshot in exec reviews",
        ],
        imageSrc: PWC_PLACEHOLDER.wide(180),
      },
    },
    logos: ["DTC fashion", "Beauty", "Home", "Pet", "Electronics", "Subscriptions"],
    featuresHeadline: "Organize retention like a product team",
    featuresSub: "Every feature maps to revenue you can defend in a spreadsheet.",
    featureIcons: [
      {
        icon: "users",
        title: "Accounts shoppers recognize",
        desc: "Theme-native layouts, typography inheritance, and flows that feel like your brand — not a generic portal.",
      },
      {
        icon: "grid",
        title: "Wishlists that capture intent",
        desc: "Save-for-later inside your domain. Feed remarketing ethically with signals shoppers volunteered.",
      },
      {
        icon: "zap",
        title: "Faster second orders",
        desc: "Reduce silent drop-off between first purchase and return visits with structured re-entry paths.",
      },
    ],
    alternating: [
      {
        title: "Track returning intent with clarity",
        desc: "See which SKUs accumulate saves, which cohorts return, and where friction still hides — without exporting CSV chaos.",
        cta: "Install on Shopify",
        align: "left",
        block: "analytics",
      },
      {
        title: "Understand shoppers before they churn",
        desc: "Wishlist + account context gives support and marketing the same truth — fewer guesswork discounts.",
        cta: "Start free trial",
        align: "right",
        block: "kanban",
      },
      {
        title: "Make loyalty feel inevitable",
        desc: "Pair saved items with messaging that respects attention. Win the second sale without brute-force promos.",
        cta: "View on Shopify",
        align: "left",
        block: "gallery",
      },
    ],
    stats: [
      { value: "+38%", label: "Returning sessions (cohort snapshot)" },
      { value: "4.9★", label: "Blended merchant rating" },
      { value: "<10m", label: "Typical time-to-first live" },
    ],
    testimonialHeadline: "Merchants who stopped leaking intent",
    testimonials: [
      {
        quote: "We finally have a wishlist that lives inside our brand. Returning revenue is no longer a mystery metric.",
        name: "Ava Mendes",
        role: "Accessories · 6-figure DTC",
        rating: "5.0",
      },
      {
        quote: "Accounts look like we hired a product designer. Support tickets about order status dropped in two weeks.",
        name: "Marcus Nguyen",
        role: "Home goods · Shopify Plus",
        rating: "4.9",
      },
      {
        quote: "Shipped same day. The retention narrative writes itself in Klaviyo now.",
        name: "Priya Shah",
        role: "Clean beauty",
        rating: "5.0",
      },
    ],
    pricing: {
      headline: "Pricing that respects proof",
      sub: "Start free. Scale when the dashboard shows compounding return visits.",
      footnote: "No credit card hostage tactics · cancel anytime",
      plans: [
        {
          name: "Starter",
          priceMonthly: "$0",
          priceAnnual: "$0",
          features: ["Core wishlist", "Account templates", "Email-safe nudges", "Community support"],
          cta: "Install free",
          highlight: false,
        },
        {
          name: "Growth",
          priceMonthly: "$29",
          priceAnnual: "$23",
          features: ["Advanced segments", "Analytics export", "Priority support", "Theme concierge blocks"],
          cta: "Start trial",
          highlight: true,
        },
        {
          name: "Plus",
          priceMonthly: "$79",
          priceAnnual: "$63",
          features: ["Multi-store rollouts", "Slack support lane", "Quarterly strategy review"],
          cta: "Talk to us",
          highlight: false,
        },
      ],
    },
    faq: [
      {
        q: "Is it easy to install?",
        a: "Standard Shopify install with guided setup. Most merchants publish the same day.",
      },
      {
        q: "Will it slow my store?",
        a: "Built for Online Store 2.0 performance budgets — lazy-loaded widgets and storefront-native patterns.",
      },
      {
        q: "Is coding required?",
        a: "No for core flows. Developers can extend when you want bespoke journeys.",
      },
    ],
    finalCta: {
      title: "Build a retention surface merchants feel proud of",
      subtitle: "Every day without structured wishlists is margin you re-buy with ads. Install now and compound second-order revenue.",
    },
  };
}

export function buildCartflexPremiumConfig() {
  const video = vCart();
  return {
    appName: "CartFlex",
    shopifyUrl: "https://apps.shopify.com/pwc-cartflex",
    accent: "amber",
    faqSurface: "light",
    heroMock: "cart",
    video,
    videoSectionTitle: "Watch upsells fire inside the cart drawer",
    videoSectionSubtitle: "Contextual offers, ethical copy, and measurable AOV lift — without sending shoppers on detours.",
    announcement: {
      text: "7-day free trial · no credit card to start · Cart drawer & checkout-safe exposures",
      href: "/contact-us",
      linkLabel: "Talk to sales →",
    },
    rating: { value: "4.8", reviewCount: "380+" },
    trustStripHeadline: "Why growth teams install CartFlex first",
    hero: {
      eyebrow: "Shopify app · revenue layer",
      kicker: "Boost average order value in the cart you already have.",
      title: "Increase revenue",
      titleHighlight: "without more traffic",
      subtitle:
        "CartFlex turns your drawer into a persuasive surface: smart upsells, protection add-ons, and gift upgrades that pay for themselves.",
      primaryCta: "Install for free",
      secondaryCta: "View demo",
      note: "7-day free trial. No credit card required. · 4.8★ App Store",
    },
    beforeAfter: {
      headline: "Lift AOV where shoppers already said “yes”",
      sub: "Stop buying more cold traffic when the cart can convert intent you already paid for.",
      before: {
        title: "BEFORE",
        caption: "Static drawer, missed margin",
        bullets: [
          "Cart shows line items only — no story for protection or gifting",
          "Upsell ideas live in slide decks, not in the product",
          "Finance sees CAC climb while AOV stays flat",
        ],
        imageSrc: PWC_PLACEHOLDER.wide(64),
      },
      after: {
        title: "AFTER",
        caption: "CartFlex in the drawer",
        bullets: [
          "Contextual tiles with inventory-aware rules finance approves",
          "Experiment toggles with per-session lift, not vanity impressions",
          "Margin recovered without another Meta learning phase",
        ],
        imageSrc: PWC_PLACEHOLDER.wide(24),
      },
    },
    logos: ["Klaviyo stacks", "PDP-heavy", "Subscriptions", "CPG", "Fashion", "Marketplaces"],
    featuresHeadline: "Upsells engineered for clarity",
    featuresSub: "Each module ships with guardrails so experiments stay shopper-safe.",
    featureIcons: [
      {
        icon: "zap",
        title: "Contextual suggestions",
        desc: "Basket-aware tiles that explain why the add-on matters — not generic junk drawers.",
      },
      {
        icon: "grid",
        title: "Order bumps presets",
        desc: "Launch proven recipes: protection, gifting, bundles — tuned for your catalog rules.",
      },
      {
        icon: "shield",
        title: "Ops-safe guardrails",
        desc: "SKU exclusions, caps, and inventory-aware logic so finance trusts every exposure.",
      },
    ],
    alternating: [
      {
        title: "See uplift where shoppers already commit",
        desc: "Attach revenue to the moment of highest intent — not random popups on cold PDPs.",
        cta: "Install on Shopify",
        align: "left",
        block: "analytics",
      },
      {
        title: "Experiment like a growth team",
        desc: "Toggle modules, read lift per session, and roll back instantly when something misbehaves.",
        cta: "Start trial",
        align: "right",
        block: "kanban",
      },
      {
        title: "Protect margin while scaling",
        desc: "Recover CAC inside the funnel instead of racing Meta bids every quarter.",
        cta: "View listing",
        align: "left",
        block: "gallery",
      },
    ],
    stats: [
      { value: "+12%", label: "Sessions accepting ≥1 upsell" },
      { value: "$52k", label: "90-day GMV band (mid-catalog)" },
      { value: "14%", label: "Checkout completion lift snapshot" },
    ],
    testimonialHeadline: "Operators who reclaimed margin",
    testimonials: [
      {
        quote: "We didn’t need more traffic. We needed the cart to work harder. CartFlex moved the needle in days.",
        name: "Head of Growth",
        role: "Beverage DTC",
        rating: "4.8",
      },
      {
        quote: "Finance finally trusts upsell exposure because guardrails are explicit. Creative can move fast again.",
        name: "Elena Vogt",
        role: "Consumables · $20M run rate",
        rating: "5.0",
      },
      {
        quote: "Every rejected upsell teaches the model. Weirdly addictive to watch the dashboard.",
        name: "James Park",
        role: "Lifestyle brand",
        rating: "4.9",
      },
    ],
    pricing: {
      headline: "Plans that scale with proof",
      sub: "Start with a generous trial — graduate when ROI is obvious in your payout reports.",
      footnote: "Transparent usage tiers · no surprise enterprise walls on day one",
      plans: [
        {
          name: "Launch",
          priceMonthly: "$0",
          priceAnnual: "$0",
          features: ["Core upsell tiles", "Cart drawer embed", "Email support"],
          cta: "Install free",
          highlight: false,
        },
        {
          name: "Scale",
          priceMonthly: "$49",
          priceAnnual: "$39",
          features: ["Advanced rules", "Experiment mode", "Priority Slack", "Quarterly reviews"],
          cta: "Start trial",
          highlight: true,
        },
        {
          name: "Plus",
          priceMonthly: "$129",
          priceAnnual: "$99",
          features: ["Multi-store", "Solutions engineer", "Custom playbooks"],
          cta: "Book install",
          highlight: false,
        },
      ],
    },
    faq: [
      { q: "Will it slow checkout?", a: "Assets defer until cart engagement. Built with Core Web Vitals in mind." },
      { q: "Do I need a developer?", a: "No for standard flows. Optional Functions hooks for advanced stacks." },
      { q: "Can I cap exposure?", a: "Yes — per SKU, collection, and cart value thresholds." },
    ],
    finalCta: {
      title: "Stop shipping checkouts that leave margin on the table",
      subtitle: "Your next payout cycle is already in motion — armor the cart before another cohort leaks.",
    },
  };
}

export function buildTrustBadgesPremiumConfig() {
  const video = vTrust();
  return {
    appName: "Trust Badges",
    shopifyUrl: "https://apps.shopify.com/pwc-trust-badges",
    accent: "violet",
    heroMock: "trust",
    video,
    videoSectionTitle: "See trust signals that read native to your theme",
    videoSectionSubtitle: "Payment security, shipping certainty, and guarantees — placed where doubt forms, not buried in footers.",
    announcement: {
      text: "New Trust Badge 2.0 · theme-aware skins · truthful claims that auto-hide when inventory changes",
      href: "/shopify-apps",
      linkLabel: "See the full suite →",
    },
    rating: { value: "4.9", reviewCount: "520+" },
    trustStripHeadline: "Proof shoppers feel — not fine print buried in the footer",
    hero: {
      eyebrow: "New: Trust Badge 2.0",
      kicker: "Boost PDP confidence — where silent bounce starts.",
      title: "Turn visitors into buyers with",
      titleHighlight: "Trust Badges",
      subtitle:
        "Replace invisible doubt with decisive proof — SSL, fulfillment, guarantees, and policy clarity shoppers scan in one breath.",
      primaryCta: "Install on Shopify",
      secondaryCta: "View Demo",
      note: "Trusted by 1,000+ storefronts · theme-aware skins",
    },
    beforeAfter: {
      headline: "From invisible doubt to decisive proof",
      sub: "Badges belong next to the buy button — not as an afterthought shoppers never scroll to.",
      before: {
        title: "BEFORE",
        caption: "Trust buried & generic",
        bullets: [
          "Security copy only lives in the footer or FAQ wall of text",
          "PDP and cart feel “empty” right when anxiety peaks",
          "Support still answers “is this store legit?” dozens of times a week",
        ],
        imageSrc: PWC_PLACEHOLDER.wide(106),
      },
      after: {
        title: "AFTER",
        caption: "Trust Badges by ProWebCoder",
        bullets: [
          "Checkout-grade reassurance where eyes actually land",
          "Claims that respect inventory, region, and fulfillment reality",
          "CS volume drops because the storefront already answered the question",
        ],
        imageSrc: PWC_PLACEHOLDER.wide(201),
      },
    },
    logos: ["Checkout", "PDP", "Cart drawer", "International", "Subscriptions", "B2B"],
    featuresHeadline: "Proof that respects attention",
    featuresSub: "Badges adapt to surface, geography, and inventory — no ghost claims.",
    featureIcons: [
      {
        icon: "shield",
        title: "Security you can show",
        desc: "Checkout reassurance that matches Shopify policies and your actual stack.",
      },
      {
        icon: "grid",
        title: "Placement intelligence",
        desc: "PDP, cart, and post-purchase surfaces each get the right story — not copy-paste clutter.",
      },
      {
        icon: "users",
        title: "Support load relief",
        desc: "Answer “is this legit?” before it becomes a ticket — CS teams feel the difference fast.",
      },
    ],
    alternating: [
      {
        title: "Measure confidence, not vanity clicks",
        desc: "Understand which placements move add-to-cart and which need copy tweaks — no black-box widgets.",
        cta: "Install on Shopify",
        align: "left",
        block: "analytics",
      },
      {
        title: "Ship truthful promises",
        desc: "Auto-hide badges when SKUs or regions make claims inaccurate — brand trust stays intact.",
        cta: "Start trial",
        align: "right",
        block: "kanban",
      },
      {
        title: "Look crafted, not bolted on",
        desc: "Typography and spacing inherit your theme tokens so proof feels designed — not spammy.",
        cta: "View listing",
        align: "left",
        block: "gallery",
      },
    ],
    stats: [
      { value: "~7%", label: "PDP conversion lift band" },
      { value: "4.9★", label: "Merchant satisfaction snapshot" },
      { value: "<60m", label: "Median launch time" },
    ],
    testimonialHeadline: "Teams who stopped losing silent bounces",
    testimonials: [
      {
        quote: "Badges finally feel handcrafted. Cold traffic PDP conversion jumped the first week.",
        name: "Elena Vogt",
        role: "Supplements · DTC",
        rating: "5.0",
      },
      {
        quote: "Legal loved the truthfulness guardrails. CX loved fewer ‘is this safe?’ pings.",
        name: "James Park",
        role: "Electronics · Plus",
        rating: "4.9",
      },
      {
        quote: "We expected gimmicks. The conversion graph disagreed.",
        name: "Mara Williams",
        role: "Sustainable apparel",
        rating: "5.0",
      },
    ],
    pricing: {
      headline: "Start free. Scale with proof.",
      sub: "Core pack is generous — upgrade when the dashboard shows sustained lift.",
      footnote: "No credit card required to validate core placements",
      plans: [
        {
          name: "Core",
          priceMonthly: "$0",
          priceAnnual: "$0",
          features: ["PDP + cart placements", "Preset packs", "Community support"],
          cta: "Install free",
          highlight: false,
        },
        {
          name: "Pro",
          priceMonthly: "$19",
          priceAnnual: "$15",
          features: ["Geo rules", "A/B placement", "Priority support", "Seasonal kits"],
          cta: "Start trial",
          highlight: true,
        },
        {
          name: "Studio",
          priceMonthly: "$59",
          priceAnnual: "$47",
          features: ["Multi-store", "Design partner hours", "Compliance review"],
          cta: "Book call",
          highlight: false,
        },
      ],
    },
    faq: [
      { q: "Will it slow my store?", a: "SVG-first, lazy hydration, CDN-friendly — tuned for Shopify speed budgets." },
      { q: "Do I need a developer?", a: "No for standard embeds. Optional theme tweaks for ultra-custom brands." },
      { q: "Can I control claims?", a: "Yes — geography, fulfillment profile, and SKU-aware logic built in." },
    ],
    finalCta: {
      title: "Stop leaking CAC to invisible doubt",
      subtitle: "Confidence compounds. Install Trust Badges and give every session a reason to believe.",
    },
  };
}
