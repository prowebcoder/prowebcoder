"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo, useRef } from "react";
import toast from "react-hot-toast";
import {
  FiArrowRight,
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiCheckCircle,
  FiZap,
  FiLayers,
  FiTrendingUp,
  FiGlobe,
  FiClock,
  FiCode,
  FiDatabase,
  FiBriefcase,
  FiMessageCircle,
  FiCopy,
  FiStar,
  FiMenu,
  FiX,
  FiExternalLink,
  FiShield,
  FiAward,
  FiSearch,
  FiSend,
  FiCheck,
  FiGrid,
  FiDollarSign,
  FiCpu,
  FiSmartphone,
} from "react-icons/fi";
import { BsShop, BsLightningCharge } from "react-icons/bs";
import AnimatedCounter from "./AnimatedCounter";
import SectionHeading from "./SectionHeading";
import Portfolio from "@/components/common/Portfolio";
import {
  aboutPoints,
  galacticApps,
  faqItems,
  footerLinks,
  profileOverview,
  featuredPortfolios,
  services,
  skillGroups,
  stats,
  testimonials,
  whyHire,
  workProcess,
} from "@/data/profile";




const floatingBadges = [
  { label: "Shopify Plus", icon: <BsShop className="tw-text-emerald-600" /> },
  { label: "Next.js 15", icon: <FiCode className="tw-text-slate-800" /> },
  { label: "React.js", icon: <FiCode className="tw-text-sky-600" /> },
  { label: "Webflow", icon: <FiGlobe className="tw-text-blue-600" /> },
  { label: "Liquid & Dawn", icon: <BsLightningCharge className="tw-text-emerald-700" /> },
  { label: "BigCommerce", icon: <FiLayers className="tw-text-indigo-600" /> },
  { label: "WordPress", icon: <FiGrid className="tw-text-blue-700" /> },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Shopify Apps", href: "#apps" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Reviews", href: "#reviews" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Shopify");
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [skillSearch, setSkillSearch] = useState("");
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submittingForm, setSubmittingForm] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const recaptchaRef = useRef(null);
  const recaptchaId = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.grecaptcha && recaptchaRef.current && recaptchaId.current === null) {
        try {
          recaptchaId.current = window.grecaptcha.render(recaptchaRef.current, {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          });
          clearInterval(interval);
        } catch (e) {
          // ignore if already rendered
        }
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (email) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      toast.success("Email address copied to clipboard!");
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, company, service, message } = contactForm;

    if (!firstName || !lastName || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    let recaptchaToken = "";
    if (typeof window !== "undefined" && window.grecaptcha && recaptchaId.current !== null) {
      try {
        recaptchaToken = window.grecaptcha.getResponse(recaptchaId.current);
      } catch (err) {
        console.warn("grecaptcha.getResponse error:", err);
      }
    }

    if (!recaptchaToken && typeof window !== "undefined" && window.grecaptcha && recaptchaId.current !== null) {
      toast.error("Please complete the reCAPTCHA.");
      return;
    }

    setSubmittingForm(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          subject: `Request from ${firstName} ${lastName}`,
          message: `Phone: ${phone || "N/A"}\nCompany: ${company || "N/A"}\nService: ${service || "N/A"}\n\n${message}`,
          recaptchaToken,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("✅ Thank you! Your message has been sent successfully.");
        setContactForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        if (typeof window !== "undefined" && window.grecaptcha && recaptchaId.current !== null) {
          try {
            window.grecaptcha.reset(recaptchaId.current);
          } catch (err) {}
        }
      } else {
        toast.error(`❌ ${data.error || "Failed to send message. Please try again."}`);
      }
    } catch (err) {
      console.error("Contact form submit error:", err);
      toast.error("❌ Failed to send message. Please try again.");
    } finally {
      setSubmittingForm(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredSkillGroups = useMemo(() => {
    if (!skillSearch.trim()) return skillGroups;
    const term = skillSearch.toLowerCase();
    return skillGroups
      .map((group) => ({
        ...group,
        skills: group.skills.filter((s) => s.toLowerCase().includes(term)),
      }))
      .filter((group) => group.skills.length > 0);
  }, [skillSearch]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profileOverview.name,
            jobTitle: profileOverview.title,
            description: profileOverview.intro,
            url: profileOverview.portfolio,
            sameAs: [
              profileOverview.shopifyPartner,
              profileOverview.shopifyApps,
              profileOverview.upwork,
              profileOverview.fiverr,
              profileOverview.linkedin,
            ],
            email: profileOverview.email,
            worksFor: {
              "@type": "Organization",
              name: "Galactic Technologies / ProWebCoder",
              url: profileOverview.website,
            },
          }),
        }}
      />

      <main className="tw-min-h-screen tw-bg-slate-50 tw-text-slate-900 tw-font-sans tw-antialiased selection:tw-bg-emerald-100 selection:tw-text-emerald-900">
        {/* Sticky Light Mode Header Navigation */}
        <header className="tw-sticky tw-top-0 tw-z-50 tw-w-full tw-border-b tw-border-slate-200/80 tw-bg-white/90 tw-backdrop-blur-md tw-transition-all tw-shadow-sm">
          <div className="tw-mx-auto tw-flex tw-max-w-7xl tw-items-center tw-justify-between tw-px-4 tw-py-3 sm:tw-px-6 lg:tw-px-8">
            <Link
              href="/profile/rahul"
              className="tw-group tw-flex tw-items-center tw-gap-3 focus-visible:tw-outline-none"
            >
              <div className="tw-relative tw-h-11 tw-w-11 tw-overflow-hidden tw-rounded-full tw-border-2 tw-border-emerald-600 tw-shadow-sm">
                <Image
                  src="/assets/images/team/rahul.webp"
                  alt="Rahul Dhiman Portrait"
                  fill
                  className="tw-object-cover tw-object-top"
                  priority
                />
              </div>
              <div className="tw-flex tw-flex-col">
                <span className="tw-text-base tw-font-bold tw-text-slate-900 group-hover:tw-text-emerald-600 tw-transition-colors">
                  Rahul Dhiman (Shopify Expert)
                </span>
                <span className="tw-text-xs tw-font-medium tw-text-slate-500">
                  Senior Full Stack Developer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="tw-hidden tw-items-center tw-gap-1 lg:tw-flex">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`tw-rounded-full tw-px-3.5 tw-py-1.5 tw-text-xs tw-font-bold tw-transition-all ${
                      isActive
                        ? "tw-bg-emerald-50 tw-text-emerald-700 tw-border tw-border-emerald-200"
                        : "tw-text-slate-600 hover:tw-bg-slate-100 hover:tw-text-slate-900"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Header Direct Hire Action */}
            <div className="tw-flex tw-items-center tw-gap-3">
              <a
                href={profileOverview.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="tw-hidden sm:tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-emerald-600 tw-px-4 tw-py-2 tw-text-xs tw-font-bold tw-text-white tw-shadow-sm hover:tw-bg-emerald-700 active:tw-scale-[0.98] tw-transition-all"
              >
                <FiBriefcase className="tw-text-sm" />
                Hire on Upwork
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-slate-200 tw-bg-white tw-p-2.5 tw-text-slate-700 hover:tw-bg-slate-100 lg:tw-hidden"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="tw-border-b tw-border-slate-200 tw-bg-white tw-px-4 tw-py-4 lg:tw-hidden"
              >
                <nav className="tw-flex tw-flex-col tw-gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="tw-flex tw-items-center tw-justify-between tw-rounded-xl tw-px-4 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-slate-700 hover:tw-bg-emerald-50 hover:tw-text-emerald-700"
                    >
                      {link.name}
                      <FiArrowRight className="tw-text-slate-400" />
                    </a>
                  ))}
                  <div className="tw-mt-3 tw-pt-3 tw-border-t tw-border-slate-200 tw-flex tw-flex-col tw-gap-2">
                    <a
                      href={profileOverview.upwork}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-2 tw-rounded-xl tw-bg-emerald-600 tw-py-3 tw-text-sm tw-font-bold tw-text-white"
                    >
                      <FiBriefcase /> Hire on Upwork ($25/hr)
                    </a>
                  </div>
                  <div className="tw-mt-3 tw-pt-3 tw-border-t tw-border-slate-200 tw-flex tw-flex-col tw-gap-2">
                    <a
                      href={profileOverview.pph}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-2 tw-rounded-xl tw-bg-emerald-600 tw-py-3 tw-text-sm tw-font-bold tw-text-white"
                    >
                      <FiBriefcase /> Hire on PPH
                    </a>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Light Mode Hero Section */}
        <section
          id="hero"
          className="tw-relative tw-overflow-hidden tw-border-b tw-border-slate-200/80 tw-bg-gradient-to-b tw-from-slate-100 tw-via-emerald-50/20 tw-to-slate-50 tw-pt-10 tw-pb-16 sm:tw-pt-14 sm:tw-pb-20 lg:tw-pt-20 lg:tw-pb-24"
        >
          <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
            <div className="tw-grid tw-grid-cols-1 tw-items-center tw-gap-12 lg:tw-grid-cols-12">
              
              {/* Hero Profile Photo & Visual Badges */}
              <div className="lg:tw-col-span-5 tw-flex tw-justify-center lg:tw-justify-start">
                <div className="tw-relative tw-w-full tw-max-w-md">
                  {/* Subtle Background Glow Accent */}
                  <div className="tw-absolute -tw-inset-2 tw-rounded-3xl tw-bg-gradient-to-tr tw-from-emerald-400/20 tw-to-cyan-400/20 tw-blur-xl" />
                  
                  <div className="tw-relative tw-overflow-hidden tw-rounded-3xl tw-border-4 tw-border-white tw-bg-white tw-shadow-xl">
                    <div className="tw-relative tw-aspect-[3/4] tw-w-full">
                      <Image
                        src="/assets/images/team/rvd.jpg"
                        alt="Rahul Dhiman - Senior Shopify & Webflow Expert"
                        fill
                        className="tw-object-cover tw-object-top"
                        priority
                      />
                    </div>

                    {/* Official Badge Overlay */}
                    <div className="tw-absolute tw-bottom-0 tw-inset-x-0 tw-bg-gradient-to-t tw-from-slate-900/90 tw-via-slate-900/50 tw-to-transparent tw-p-5 tw-text-white">
                      <div className="tw-flex tw-items-center tw-gap-2">
                        <span className="tw-flex tw-h-3 tw-w-3 tw-relative">
                          <span className="tw-animate-ping tw-absolute tw-inline-flex tw-h-full tw-w-full tw-rounded-full tw-bg-emerald-400 tw-opacity-75"></span>
                          <span className="tw-relative tw-inline-flex tw-rounded-full tw-h-3 tw-w-3 tw-bg-emerald-500"></span>
                        </span>
                        <span className="tw-text-xs tw-font-bold tw-uppercase tw-tracking-wider tw-text-emerald-300">
                          Official Shopify Service Partner
                        </span>
                      </div>
                      <p className="tw-mt-1 tw-text-sm tw-font-bold tw-text-white">
                        4.9 ★ Rating (639 Merchant Reviews)
                      </p>
                    </div>
                  </div>

                  {/* Floating Skill Badges */}
                  <div className="tw-mt-4 tw-flex tw-flex-wrap tw-gap-2 tw-justify-center">
                    {floatingBadges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="tw-inline-flex tw-items-center tw-gap-1.5 tw-rounded-full tw-border tw-border-slate-200 tw-bg-white tw-px-3 tw-py-1 tw-text-xs tw-font-bold tw-text-slate-700 tw-shadow-sm"
                      >
                        {badge.icon}
                        {badge.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hero Content Column */}
              <div className="lg:tw-col-span-7">
                {/* Status Pill */}
                <div className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-emerald-200 tw-bg-emerald-50 tw-px-4 tw-py-1.5 tw-text-xs tw-font-bold tw-text-emerald-800 tw-shadow-sm">
                  <FiCheckCircle className="tw-text-emerald-600" />
                  100% Upwork Success Rate • $200K+ Earnings • 1369 Jobs
                </div>

                <h1 className="tw-mt-4 tw-text-4xl tw-font-extrabold tw-tracking-tight tw-text-slate-900 sm:tw-text-5xl lg:tw-text-6xl tw-leading-tight">
                  Rahul Dhiman
                </h1>

                <p className="tw-mt-2 tw-text-lg sm:tw-text-xl tw-font-bold tw-text-emerald-700">
                  {profileOverview.headline}
                </p>

                <p className="tw-mt-4 tw-text-base sm:tw-text-lg tw-leading-relaxed tw-text-slate-600">
                  {profileOverview.intro}
                </p>

                {/* Key Upwork & Shopify Metrics Banner */}
                <div className="tw-mt-6 tw-grid tw-grid-cols-2 sm:tw-grid-cols-4 tw-gap-3 tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-white tw-p-4 tw-shadow-sm">
                  <div>
                    <span className="tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase">Upwork Success</span>
                    <p className="tw-text-xl tw-font-black tw-text-emerald-600">100%</p>
                  </div>
                  <div>
                    <span className="tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase">Total Earnings</span>
                    <p className="tw-text-xl tw-font-black tw-text-slate-900">$200K+</p>
                  </div>
                  <div>
                    <span className="tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase">Jobs & Hours</span>
                    <p className="tw-text-xl tw-font-black tw-text-slate-900">900 / 12000h</p>
                  </div>
                  <div>
                    <span className="tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase">Shopify Apps</span>
                    <p className="tw-text-xl tw-font-black tw-text-emerald-600">7 Created</p>
                  </div>
                </div>

                {/* Direct Action Buttons & Profile Links */}
                <div className="tw-mt-8 tw-flex tw-flex-wrap tw-items-center tw-gap-3">
                  <a
                    href={profileOverview.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-inline-flex tw-items-center tw-gap-2.5 tw-rounded-xl tw-bg-emerald-600 tw-px-6 tw-py-3.5 tw-text-sm tw-font-bold tw-text-white tw-shadow-md hover:tw-bg-emerald-700 active:tw-scale-95 tw-transition-all"
                  >
                    <FiBriefcase className="tw-text-lg" />
                    Hire on Upwork
                  </a>
                  <a
                    href={profileOverview.pph}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-inline-flex tw-items-center tw-gap-2.5 tw-rounded-xl tw-bg-black-600 tw-px-6 tw-py-3.5 tw-text-sm tw-font-bold tw-text-black tw-shadow-md hover:tw-bg-emerald-700 active:tw-scale-95 tw-transition-all"
                  >
                    <FiBriefcase className="tw-text-lg" />
                    Hire on PPH
                  </a>

                  <a
                    href={profileOverview.shopifyPartner}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-inline-flex tw-items-center tw-gap-2.5 tw-rounded-xl tw-bg-slate-900 tw-px-6 tw-py-3.5 tw-text-sm tw-font-bold tw-text-white tw-shadow-md hover:tw-bg-slate-800 active:tw-scale-95 tw-transition-all"
                  >
                    <BsShop className="tw-text-lg tw-text-emerald-400" />
                    Shopify Partner Profile
                  </a>

                  <a
                    href={profileOverview.shopifyApps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-inline-flex tw-items-center tw-gap-2.5 tw-rounded-xl tw-border tw-border-slate-300 tw-bg-white tw-px-5 tw-py-3.5 tw-text-sm tw-font-bold tw-text-slate-800 hover:tw-bg-slate-100 tw-shadow-sm active:tw-scale-95 tw-transition-all"
                  >
                    <FiGrid className="tw-text-lg tw-text-emerald-600" />
                    Galactic Shopify Apps (7)
                  </a>
                </div>

                {/* Additional Platform Badges & Links */}
                <div className="tw-mt-6 tw-flex tw-flex-wrap tw-items-center tw-gap-4 tw-pt-4 tw-border-t tw-border-slate-200">
                  <span className="tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase">Verified Profiles:</span>
                  <a
                    href={profileOverview.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-text-xs tw-font-bold tw-text-emerald-700 hover:tw-underline tw-inline-flex tw-items-center tw-gap-1"
                  >
                    Upwork Profile <FiExternalLink />
                  </a>
                  <a
                    href={profileOverview.shopifyPartner}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-text-xs tw-font-bold tw-text-emerald-700 hover:tw-underline tw-inline-flex tw-items-center tw-gap-1"
                  >
                    Shopify Partner <FiExternalLink />
                  </a>
                  <a
                    href={profileOverview.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-text-xs tw-font-bold tw-text-emerald-700 hover:tw-underline tw-inline-flex tw-items-center tw-gap-1"
                  >
                    Fiverr Profile <FiExternalLink />
                  </a>
                  <a
                    href={profileOverview.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-text-xs tw-font-bold tw-text-slate-800 hover:tw-underline tw-inline-flex tw-items-center tw-gap-1"
                  >
                    LinkedIn <FiExternalLink />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Stats Grid Bar */}
        <section className="tw-py-12 tw-bg-white tw-border-b tw-border-slate-200">
          <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
            <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-6">
              {stats.map((st, i) => (
                <div
                  key={i}
                  className="tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-slate-50/70 tw-p-5 tw-text-center tw-shadow-sm hover:tw-border-emerald-300 tw-transition-all"
                >
                  <p className="tw-text-3xl sm:tw-text-4xl tw-font-black tw-text-slate-900">
                    <AnimatedCounter value={st.value} suffix={st.suffix} />
                  </p>
                  <p className="tw-mt-1 tw-text-sm tw-font-bold tw-text-emerald-700">{st.label}</p>
                  <p className="tw-mt-1 tw-text-xs tw-text-slate-500">{st.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About & Core Experience */}
        <section id="about" className="tw-py-16 sm:tw-py-20 tw-bg-slate-50 tw-border-b tw-border-slate-200">
          <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
            <SectionHeading
              eyebrow="Proven Commerce Expertise"
              title="12+ Years Building Scalable E-Commerce Solutions"
              description="Full stack engineer specializing in Shopify Plus, Webflow, BigCommerce, Squarespace, and custom app architectures."
            />

            <div className="tw-mt-10 tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-8">
              <div className="lg:tw-col-span-7 tw-space-y-4">
                {aboutPoints.map((pt, idx) => (
                  <div
                    key={idx}
                    className="tw-flex tw-items-start tw-gap-4 tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-white tw-p-5 tw-shadow-sm"
                  >
                    <div className="tw-flex tw-h-9 tw-w-9 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-xl tw-bg-emerald-100 tw-text-emerald-700 tw-font-bold">
                      0{idx + 1}
                    </div>
                    <div>
                      <p className="tw-text-base tw-font-medium tw-text-slate-800 tw-leading-relaxed">{pt}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Upwork Profile Snapshot Card */}
              <div className="lg:tw-col-span-5">
                <div className="tw-rounded-3xl tw-border-2 tw-border-emerald-200 tw-bg-white tw-p-6 tw-shadow-md">
                  <div className="tw-flex tw-items-center tw-justify-between tw-pb-4 tw-border-b tw-border-slate-100">
                    <div className="tw-flex tw-items-center tw-gap-3">
                      <div className="tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-emerald-600 tw-text-white tw-font-black">
                        Up
                      </div>
                      <div>
                        <h3 className="tw-text-lg tw-font-bold tw-text-slate-900">Upwork Verified Profile</h3>
                        <p className="tw-text-xs tw-text-slate-500">Hourly Rate: $25.00/hr</p>
                      </div>
                    </div>
                    <span className="tw-rounded-full tw-bg-emerald-100 tw-px-3 tw-py-1 tw-text-xs tw-font-bold tw-text-emerald-800">
                      Top Rated
                    </span>
                  </div>

                  <div className="tw-mt-6 tw-space-y-4">
                    <div className="tw-flex tw-justify-between tw-items-center tw-text-sm">
                      <span className="tw-text-slate-600">Job Success Rate</span>
                      <span className="tw-font-bold tw-text-emerald-600">100%</span>
                    </div>
                    <div className="tw-flex tw-justify-between tw-items-center tw-text-sm">
                      <span className="tw-text-slate-600">Total Earnings</span>
                      <span className="tw-font-bold tw-text-slate-900">$200,000+</span>
                    </div>
                    <div className="tw-flex tw-justify-between tw-items-center tw-text-sm">
                      <span className="tw-text-slate-600">Total Jobs Completed</span>
                      <span className="tw-font-bold tw-text-slate-900">900+ Jobs</span>
                    </div>
                    <div className="tw-flex tw-justify-between tw-items-center tw-text-sm">
                      <span className="tw-text-slate-600">Total Hours Logged</span>
                      <span className="tw-font-bold tw-text-slate-900">12000 Hours</span>
                    </div>
                    <div className="tw-flex tw-justify-between tw-items-center tw-text-sm">
                      <span className="tw-text-slate-600">Primary Location</span>
                      <span className="tw-font-bold tw-text-slate-900">Kangra, India</span>
                    </div>
                  </div>

                  <div className="tw-mt-6 tw-pt-4 tw-border-t tw-border-slate-100">
                    <a
                      href={profileOverview.upwork}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-2 tw-rounded-xl tw-bg-emerald-600 tw-py-3 tw-text-sm tw-font-bold tw-text-white hover:tw-bg-emerald-700 tw-transition-colors"
                    >
                      <FiExternalLink /> View Upwork Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galactic Technologies Shopify Apps Section (All 7 Apps) */}
        <section id="apps" className="tw-py-16 sm:tw-py-20 tw-bg-white tw-border-b tw-border-slate-200">
          <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
            <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-items-end tw-justify-between tw-mb-10">
              <SectionHeading
                eyebrow="Shopify Partner App Developer"
                title="Apps Created by Galactic Technologies"
                description="Explore all 7 public and custom Shopify applications developed for high-growth e-commerce merchants."
              />
              <a
                href={profileOverview.shopifyApps}
                target="_blank"
                rel="noopener noreferrer"
                className="tw-mt-4 md:tw-mt-0 tw-inline-flex tw-items-center tw-gap-2 tw-rounded-xl tw-bg-slate-900 tw-px-5 tw-py-3 tw-text-sm tw-font-bold tw-text-white hover:tw-bg-slate-800 tw-transition-all"
              >
                <FiGrid className="tw-text-emerald-400" />
                View All Apps on Shopify (7)
              </a>
            </div>

            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
              {galacticApps.map((app, idx) => (
                <div
                  key={app.id}
                  className="tw-flex tw-flex-col tw-justify-between tw-rounded-3xl tw-border tw-border-slate-200 tw-bg-slate-50/70 tw-p-6 tw-shadow-sm hover:tw-shadow-md hover:tw-border-emerald-300 tw-transition-all"
                >
                  <div>
                    <div className="tw-flex tw-items-center tw-justify-between">
                      <span className="tw-inline-flex tw-items-center tw-gap-1.5 tw-rounded-full tw-bg-emerald-100 tw-px-3 tw-py-1 tw-text-xs tw-font-bold tw-text-emerald-800">
                        App #{idx + 1}
                      </span>
                      <span className="tw-text-xs tw-font-bold tw-text-slate-500">{app.type}</span>
                    </div>

                    <h3 className="tw-mt-4 tw-text-xl tw-font-bold tw-text-slate-900">{app.title}</h3>
                    <p className="tw-mt-2 tw-text-sm tw-text-slate-600 tw-leading-relaxed">{app.description}</p>

                    <div className="tw-mt-4 tw-space-y-2">
                      <span className="tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase">Key Features:</span>
                      <ul className="tw-space-y-1">
                        {app.features.map((ft, i) => (
                          <li key={i} className="tw-flex tw-items-center tw-gap-2 tw-text-xs tw-text-slate-700">
                            <FiCheck className="tw-text-emerald-600 tw-shrink-0" />
                            {ft}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="tw-mt-6 tw-pt-4 tw-border-t tw-border-slate-200">
                    <div className="tw-flex tw-flex-wrap tw-gap-1.5 tw-mb-4">
                      {app.tech.map((t, i) => (
                        <span key={i} className="tw-rounded-md tw-bg-white tw-border tw-border-slate-200 tw-px-2.5 tw-py-1 tw-text-[11px] tw-font-semibold tw-text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="tw-grid tw-grid-cols-2 tw-gap-2">
                      {app.internalLink && (
                        <Link
                          href={app.internalLink}
                          className="tw-flex tw-items-center tw-justify-center tw-gap-1.5 tw-rounded-xl tw-bg-emerald-600 tw-py-2.5 tw-text-xs tw-font-bold tw-text-white hover:tw-bg-emerald-700 tw-transition-colors"
                        >
                          View App
                        </Link>
                      )}
                      <a
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tw-flex tw-items-center tw-justify-center tw-gap-1.5 tw-rounded-xl tw-border tw-border-slate-300 tw-bg-white tw-py-2.5 tw-text-xs tw-font-bold tw-text-slate-700 hover:tw-bg-slate-50 tw-transition-colors"
                      >
                        App Store <FiExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <div id="portfolio">
          <Portfolio />
        </div>

        {/* Services Offered */}
        <section id="services" className="tw-py-16 sm:tw-py-20 tw-bg-white tw-border-b tw-border-slate-200">
          <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
            <SectionHeading
              eyebrow="Services Offered"
              title="Full Stack E-Commerce & App Engineering"
              description="From single-product custom tweaks to enterprise Shopify Plus & Webflow store builds."
            />

            <div className="tw-mt-10 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
              {services.map((srv, idx) => (
                <div
                  key={idx}
                  className="tw-rounded-3xl tw-border tw-border-slate-200 tw-bg-slate-50/70 tw-p-6 tw-shadow-sm hover:tw-bg-white hover:tw-shadow-md tw-transition-all"
                >
                  <div className="tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-emerald-600 tw-text-white tw-text-xl tw-font-bold">
                    <FiCheckCircle />
                  </div>
                  <h3 className="tw-mt-4 tw-text-xl tw-font-bold tw-text-slate-900">{srv.title}</h3>
                  <p className="tw-mt-2 tw-text-sm tw-text-slate-600 tw-leading-relaxed">{srv.description}</p>

                  <div className="tw-mt-4 tw-space-y-1.5">
                    {srv.deliverables.map((dl, i) => (
                      <div key={i} className="tw-flex tw-items-center tw-gap-2 tw-text-xs tw-text-slate-700">
                        <FiCheck className="tw-text-emerald-600" />
                        {dl}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Breakdown */}
        <section id="skills" className="tw-py-16 sm:tw-py-20 tw-bg-slate-50 tw-border-b tw-border-slate-200">
          <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
            <SectionHeading
              eyebrow="Technical Stack"
              title="Skills & Platform Expertise"
              description="Comprehensive mastery across Shopify, Liquid, Webflow, React, Node.js, and multi-CMS platforms."
            />

            {/* Skill Search Input */}
            <div className="tw-mt-8 tw-max-w-md">
              <div className="tw-relative">
                <FiSearch className="tw-absolute tw-left-4 tw-top-1/2 -tw-translate-y-1/2 tw-text-slate-400" />
                <input
                  type="text"
                  placeholder="Search skills (e.g., Liquid, Webflow, React, Migration)..."
                  value={skillSearch}
                  onChange={(e) => setSkillSearch(e.target.value)}
                  className="tw-w-full tw-rounded-full tw-border tw-border-slate-300 tw-bg-white tw-py-3 tw-pl-11 tw-pr-4 tw-text-sm tw-text-slate-900 focus:tw-border-emerald-600 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-emerald-200"
                />
              </div>
            </div>

            <div className="tw-mt-8 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6">
              {filteredSkillGroups.map((group, idx) => (
                <div
                  key={idx}
                  className="tw-rounded-3xl tw-border tw-border-slate-200 tw-bg-white tw-p-6 tw-shadow-sm"
                >
                  <h3 className="tw-text-lg tw-font-bold tw-text-slate-900 tw-pb-3 tw-border-b tw-border-slate-100">
                    {group.title}
                  </h3>
                  <div className="tw-mt-4 tw-flex tw-flex-wrap tw-gap-2">
                    {group.skills.map((sk, i) => (
                      <span
                        key={i}
                        className="tw-rounded-xl tw-bg-slate-100 tw-border tw-border-slate-200 tw-px-3 tw-py-1.5 tw-text-xs tw-font-semibold tw-text-slate-800"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verified Reviews Section (Only Good 5-Star Reviews from Shopify & Upwork) */}
        <section id="reviews" className="tw-py-16 sm:tw-py-20 tw-bg-white tw-border-b tw-border-slate-200">
          <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
            <SectionHeading
              eyebrow="Verified Merchant Reviews"
              title="Client Testimonials & Ratings"
              description="Verified 5-star feedback from the official Shopify Partner Directory and Upwork completed jobs."
            />

            {/* Tab Selection */}
            <div className="tw-mt-8 tw-flex tw-flex-wrap tw-gap-3">
              {["Shopify", "Upwork"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`tw-rounded-full tw-px-5 tw-py-2.5 tw-text-xs tw-font-bold tw-transition-all ${
                    activeTab === tab
                      ? "tw-bg-emerald-600 tw-text-white tw-shadow-sm"
                      : "tw-bg-slate-100 tw-text-slate-700 hover:tw-bg-slate-200"
                  }`}
                >
                  {tab === "Shopify" ? "Shopify Partner Directory (4.9 ★ - 146 Reviews)" : "Upwork Client Feedback (100% Success)"}
                </button>
              ))}
            </div>

            {/* Reviews Cards Grid */}
            <div className="tw-mt-8 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
              {testimonials[activeTab]?.map((rev, idx) => (
                <div
                  key={idx}
                  className="tw-flex tw-flex-col tw-justify-between tw-rounded-3xl tw-border tw-border-slate-200 tw-bg-slate-50/70 tw-p-6 tw-shadow-sm"
                >
                  <div>
                    <div className="tw-flex tw-items-center tw-justify-between">
                      <div className="tw-flex tw-items-center tw-gap-1 tw-text-amber-500">
                        {[...Array(rev.rating)].map((_, i) => (
                          <FiStar key={i} className="tw-fill-amber-400" />
                        ))}
                      </div>
                      <span className="tw-rounded-full tw-bg-emerald-100 tw-px-3 tw-py-1 tw-text-[11px] tw-font-bold tw-text-emerald-800">
                        Verified 5.0 Star
                      </span>
                    </div>

                    <p className="tw-mt-4 tw-text-sm tw-text-slate-700 tw-leading-relaxed tw-italic">
                      "{rev.feedback}"
                    </p>
                  </div>

                  <div className="tw-mt-6 tw-pt-4 tw-border-t tw-border-slate-200 tw-flex tw-items-center tw-justify-between">
                    <div>
                      <h4 className="tw-text-base tw-font-bold tw-text-slate-900">{rev.name}</h4>
                      <p className="tw-text-xs tw-text-slate-500">{rev.service} • {rev.date}</p>
                    </div>
                    {rev.qualityScore && (
                      <span className="tw-text-xs tw-font-bold tw-text-emerald-700">
                        Quality: {rev.qualityScore}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Process */}
        <section id="process" className="tw-py-16 sm:tw-py-20 tw-bg-slate-50 tw-border-b tw-border-slate-200">
          <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
            <SectionHeading
              eyebrow="Methodology"
              title="How I Work With Clients"
              description="Transparent, milestone-driven execution ensuring fast turnaround and zero downtime."
            />

            <div className="tw-mt-10 tw-grid tw-grid-cols-1 md:tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-4">
              {workProcess.map((proc, idx) => (
                <div
                  key={idx}
                  className="tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-white tw-p-5 tw-shadow-sm"
                >
                  <span className="tw-text-3xl tw-font-black tw-text-emerald-600">{proc.step}</span>
                  <h3 className="tw-mt-2 tw-text-base tw-font-bold tw-text-slate-900">{proc.title}</h3>
                  <p className="tw-mt-1 tw-text-xs tw-text-slate-600 tw-leading-relaxed">{proc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Hire Rahul */}
        <section className="tw-py-16 sm:tw-py-20 tw-bg-white tw-border-b tw-border-slate-200">
          <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
            <SectionHeading
              eyebrow="Why Work With Rahul?"
              title="Proven Value for E-Commerce Merchants"
              description="Clear advantages of partnering directly with a senior full-stack architect."
            />

            <div className="tw-mt-10 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
              {whyHire.map((item, idx) => (
                <div
                  key={idx}
                  className="tw-rounded-3xl tw-border tw-border-slate-200 tw-bg-slate-50/70 tw-p-6 tw-shadow-sm"
                >
                  <div className="tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-xl tw-bg-emerald-600 tw-text-white tw-font-bold">
                    <FiShield />
                  </div>
                  <h3 className="tw-mt-4 tw-text-lg tw-font-bold tw-text-slate-900">{item.title}</h3>
                  <p className="tw-mt-2 tw-text-sm tw-text-slate-600 tw-leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="tw-py-16 sm:tw-py-20 tw-bg-slate-50 tw-border-b tw-border-slate-200">
          <div className="tw-mx-auto tw-max-w-4xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Common Client Questions"
              description="Everything you need to know about starting a project with Rahul Dhiman."
              align="center"
            />

            <div className="tw-mt-10 tw-space-y-4">
              {faqItems.map((faq, idx) => (
                <div
                  key={idx}
                  className="tw-overflow-hidden tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-white tw-shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="tw-flex tw-w-full tw-items-center tw-justify-between tw-p-5 tw-text-left tw-font-bold tw-text-slate-900 focus:tw-outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className="tw-text-emerald-600 tw-font-bold">{openFaq === idx ? "−" : "+"}</span>
                  </button>

                  {openFaq === idx && (
                    <div className="tw-px-5 tw-pb-5 tw-text-sm tw-text-slate-600 tw-leading-relaxed tw-border-t tw-border-slate-100 tw-pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Hire Section */}
        <section id="contact" className="tw-py-16 sm:tw-py-24 tw-bg-white">
          <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
            <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-12">
              
              <div className="lg:tw-col-span-5">
                <SectionHeading
                  eyebrow="Get In Touch"
                  title="Let's Build Your Store or Shopify App"
                  description="Ready to elevate your Shopify, Webflow, or multi-CMS store? Contact me directly or hire me on Upwork."
                />

                <div className="tw-mt-8 tw-space-y-4">
                  <div className="tw-flex tw-items-center tw-gap-4 tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-slate-50 tw-p-4">
                    <div className="tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-xl tw-bg-emerald-600 tw-text-white">
                      <FiMail />
                    </div>
                    <div>
                      <p className="tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase">Email Rahul</p>
                      <button
                        onClick={() => handleCopyEmail(profileOverview.secondaryEmail)}
                        className="tw-text-sm tw-font-bold tw-text-slate-900 hover:tw-text-emerald-600 tw-inline-flex tw-items-center tw-gap-2"
                      >
                        {profileOverview.secondaryEmail} <FiCopy />
                      </button>
                    </div>
                  </div>

                  <div className="tw-flex tw-items-center tw-gap-4 tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-slate-50 tw-p-4">
                    <div className="tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-xl tw-bg-slate-900 tw-text-white">
                      <BsShop />
                    </div>
                    <div>
                      <p className="tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase">Upwork Profile</p>
                      <a
                        href={profileOverview.upwork}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tw-text-sm tw-font-bold tw-text-emerald-700 hover:tw-underline tw-inline-flex tw-items-center tw-gap-1"
                      >
                        Rahul Dhiman on Upwork <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  <div className="tw-flex tw-items-center tw-gap-4 tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-slate-50 tw-p-4">
                    <div className="tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-xl tw-bg-emerald-600 tw-text-white">
                      <FiBriefcase />
                    </div>
                    <div>
                      <p className="tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase">PPH Profile</p>
                      <a
                        href={profileOverview.pph}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tw-text-sm tw-font-bold tw-text-emerald-700 hover:tw-underline tw-inline-flex tw-items-center tw-gap-1"
                      >
                        Rahul Dhiman on PPH <FiExternalLink />
                      </a>
                    </div>
                  </div>

                  <div className="tw-flex tw-items-center tw-gap-4 tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-slate-50 tw-p-4">
                    <div className="tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-xl tw-bg-slate-900 tw-text-white">
                      <BsShop />
                    </div>
                    <div>
                      <p className="tw-text-xs tw-font-bold tw-text-slate-500 tw-uppercase">Shopify Partner Directory</p>
                      <a
                        href={profileOverview.shopifyPartner}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tw-text-sm tw-font-bold tw-text-emerald-700 hover:tw-underline tw-inline-flex tw-items-center tw-gap-1"
                      >
                        Galactic Technologies <FiExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Contact Form */}
              <div className="lg:tw-col-span-7">
                <div className="tw-rounded-3xl tw-border tw-border-slate-200 tw-bg-slate-50/80 tw-p-6 sm:tw-p-8 tw-shadow-sm">
                  <h3 className="tw-text-2xl tw-font-bold tw-text-slate-900">Send Direct Message</h3>
                  <p className="tw-text-xs tw-text-slate-500 tw-mt-1">
                    Have a question or requirement? Fill out the form below and we will respond promptly.
                  </p>
                  <form onSubmit={handleFormSubmit} className="tw-mt-6 tw-space-y-4">
                    {/* First Name & Last Name */}
                    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4">
                      <div>
                        <label className="tw-block tw-text-xs tw-font-bold tw-text-slate-700 tw-uppercase">First Name *</label>
                        <input
                          type="text"
                          required
                          value={contactForm.firstName}
                          onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                          placeholder="e.g., Sarah"
                          className="tw-mt-1 tw-w-full tw-rounded-xl tw-border tw-border-slate-300 tw-bg-white tw-p-3 tw-text-sm tw-text-slate-900 focus:tw-border-emerald-600 focus:tw-outline-none"
                        />
                      </div>
                      <div>
                        <label className="tw-block tw-text-xs tw-font-bold tw-text-slate-700 tw-uppercase">Last Name *</label>
                        <input
                          type="text"
                          required
                          value={contactForm.lastName}
                          onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                          placeholder="e.g., Smith"
                          className="tw-mt-1 tw-w-full tw-rounded-xl tw-border tw-border-slate-300 tw-bg-white tw-p-3 tw-text-sm tw-text-slate-900 focus:tw-border-emerald-600 focus:tw-outline-none"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4">
                      <div>
                        <label className="tw-block tw-text-xs tw-font-bold tw-text-slate-700 tw-uppercase">Your Email *</label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="e.g., sarah@brand.com"
                          className="tw-mt-1 tw-w-full tw-rounded-xl tw-border tw-border-slate-300 tw-bg-white tw-p-3 tw-text-sm tw-text-slate-900 focus:tw-border-emerald-600 focus:tw-outline-none"
                        />
                      </div>
                      <div>
                        <label className="tw-block tw-text-xs tw-font-bold tw-text-slate-700 tw-uppercase">Phone Number (optional)</label>
                        <input
                          type="tel"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="tw-mt-1 tw-w-full tw-rounded-xl tw-border tw-border-slate-300 tw-bg-white tw-p-3 tw-text-sm tw-text-slate-900 focus:tw-border-emerald-600 focus:tw-outline-none"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="tw-block tw-text-xs tw-font-bold tw-text-slate-700 tw-uppercase">Company Name (optional)</label>
                      <input
                        type="text"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        placeholder="e.g., Acme E-Commerce Ltd"
                        className="tw-mt-1 tw-w-full tw-rounded-xl tw-border tw-border-slate-300 tw-bg-white tw-p-3 tw-text-sm tw-text-slate-900 focus:tw-border-emerald-600 focus:tw-outline-none"
                      />
                    </div>

                    {/* Services Dropdown */}
                    <div>
                      <label className="tw-block tw-text-xs tw-font-bold tw-text-slate-700 tw-uppercase">Select Service *</label>
                      <select
                        required
                        value={contactForm.service}
                        onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                        className="tw-mt-1 tw-w-full tw-rounded-xl tw-border tw-border-slate-300 tw-bg-white tw-p-3 tw-text-sm tw-text-slate-900 focus:tw-border-emerald-600 focus:tw-outline-none"
                      >
                        <option value="">Select the service you’re interested in</option>

                        <optgroup label="Shopify">
                          <option value="Shopify Plus">Shopify Plus</option>
                          <option value="Shopify Development">Shopify Development</option>
                          <option value="Shopify App Development">Shopify App Development</option>
                          <option value="Custom Storefront">Custom Storefront</option>
                        </optgroup>

                        <optgroup label="E-Commerce Platforms">
                          <option value="WooCommerce">WooCommerce</option>
                          <option value="Squarespace">Squarespace</option>
                          <option value="Webflow">Webflow</option>
                          <option value="BigCommerce">BigCommerce</option>
                          <option value="Magento">Magento</option>
                        </optgroup>

                        <optgroup label="Web Development">
                          <option value="WordPress">WordPress</option>
                          <option value="Next.js">Next.js</option>
                          <option value="React">React</option>
                          <option value="Custom Applications">Custom Applications</option>
                        </optgroup>

                        <optgroup label="Mobile & Apps">
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="PWA Development">Progressive Web Apps (PWA)</option>
                          <option value="Headless Commerce">Headless Commerce</option>
                        </optgroup>

                        <optgroup label="Consulting & Support">
                          <option value="Consultation">Consultation</option>
                          <option value="Support & Maintenance">Support & Maintenance</option>
                          <option value="Migration">Platform Migration</option>
                          <option value="Performance Optimization">Performance Optimization</option>
                          <option value="SEO & Marketing">SEO & Marketing</option>
                        </optgroup>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="tw-block tw-text-xs tw-font-bold tw-text-slate-700 tw-uppercase">Your Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Briefly describe your project goals, timelines, or questions..."
                        className="tw-mt-1 tw-w-full tw-rounded-xl tw-border tw-border-slate-300 tw-bg-white tw-p-3 tw-text-sm tw-text-slate-900 focus:tw-border-emerald-600 focus:tw-outline-none"
                      />
                    </div>

                    {/* reCAPTCHA Container */}
                    <div className="tw-my-2 tw-min-h-[78px]">
                      <div ref={recaptchaRef} />
                    </div>

                    <button
                      type="submit"
                      disabled={submittingForm}
                      className="tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-2 tw-rounded-xl tw-bg-emerald-600 tw-py-3.5 tw-text-sm tw-font-bold tw-text-white hover:tw-bg-emerald-700 disabled:tw-opacity-50 tw-transition-all"
                    >
                      {submittingForm ? "Sending Message..." : "Send Message"}
                      <FiSend />
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Light Footer */}
        <footer className="tw-border-t tw-border-slate-200 tw-bg-slate-100 tw-py-12">
          <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-between tw-gap-6">
              <div className="tw-flex tw-items-center tw-gap-3">
                <div className="tw-relative tw-h-9 tw-w-9 tw-overflow-hidden tw-rounded-full tw-border tw-border-emerald-600">
                  <Image
                    src="/assets/images/team/rahul.webp"
                    alt="Rahul Dhiman"
                    fill
                    className="tw-object-cover tw-object-top"
                  />
                </div>
                <div>
                  <p className="tw-text-sm tw-font-bold tw-text-slate-900">Rahul Dhiman</p>
                  <p className="tw-text-xs tw-text-slate-500">Galactic Technologies • ProWebCoder</p>
                </div>
              </div>

              <div className="tw-flex tw-flex-wrap tw-items-center tw-gap-4 tw-text-xs tw-font-bold tw-text-slate-600">
                <a href={profileOverview.upwork} target="_blank" rel="noopener noreferrer" className="hover:tw-text-emerald-600">Upwork</a>
                <a href={profileOverview.shopifyPartner} target="_blank" rel="noopener noreferrer" className="hover:tw-text-emerald-600">Shopify Partner</a>
                <a href={profileOverview.shopifyApps} target="_blank" rel="noopener noreferrer" className="hover:tw-text-emerald-600">Galactic Apps</a>
                <a href={profileOverview.fiverr} target="_blank" rel="noopener noreferrer" className="hover:tw-text-emerald-600">Fiverr</a>
                <a href={profileOverview.pph} target="_blank" rel="noopener noreferrer" className="hover:tw-text-emerald-600">PPH</a>
                <a href={profileOverview.linkedin} target="_blank" rel="noopener noreferrer" className="hover:tw-text-emerald-600">LinkedIn</a>
              </div>
            </div>

            <div className="tw-mt-8 tw-pt-6 tw-border-t tw-border-slate-200 tw-text-center tw-text-xs tw-text-slate-500">
              © {new Date().getFullYear()} Rahul Dhiman. All rights reserved. Senior Shopify & Full Stack E-Commerce Architect.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
