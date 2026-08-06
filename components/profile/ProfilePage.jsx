"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowRight,
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiCheckCircle,
  FiZap,
  FiLayers,
  FiTrendingUp,
  FiGlobe,
  FiClock,
  FiPenTool,
  FiSmartphone,
  FiCode,
  FiDatabase,
  FiBriefcase,
  FiMessageCircle,
  FiChevronDown,
  FiCopy,
} from "react-icons/fi";
import { BsLightningCharge, BsShop } from "react-icons/bs";
import AnimatedCounter from "./AnimatedCounter";
import SectionHeading from "./SectionHeading";
import {
  aboutPoints,
  appShowcases,
  certifications,
  faqItems,
  footerLinks,
  industries,
  profileOverview,
  projects,
  services,
  skillGroups,
  stats,
  techCloud,
  testimonials,
  whyHire,
  workProcess,
} from "@/data/profile";

const floatingBadges = [
  { label: "Shopify" },
  { label: "Next.js" },
  { label: "React" },
  { label: "Node.js" },
  { label: "GraphQL" },
  { label: "Tailwind" },
  { label: "Vercel" },
];

const socialLinks = [
  { name: "GitHub", href: profileOverview.github, icon: <FiGithub /> },
  { name: "LinkedIn", href: profileOverview.linkedin, icon: <FiLinkedin /> },
  { name: "X", href: profileOverview.x, icon: <FiTwitter /> },
  { name: "Email", href: `mailto:${profileOverview.email}`, icon: <FiMail /> },
];

function copyToClipboard(text) {
  if (typeof navigator !== "undefined") {
    navigator.clipboard.writeText(text);
  }
}

export default function ProfilePage()
  const [activeTab, setActiveTab] = useState("Upwork");
  const [openFaq, setOpenFaq] = useState(0);

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
            url: profileOverview.website,
            sameAs: [profileOverview.github, profileOverview.linkedin, profileOverview.x, profileOverview.shopifyPartner],
            knowsAbout: ["Shopify", "Next.js", "React", "Node.js", "GraphQL", "Liquid", "Tailwind", "MongoDB"],
            email: profileOverview.email,
            worksFor: {
              "@type": "Organization",
              name: "Prowebcoder",
            },
          }),
        }}
      />
      <main className="tw-min-h-screen tw-bg-[#030712] tw-text-slate-100">
      <section className="tw-relative tw-overflow-hidden tw-border-b tw-border-white/10 tw-bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),transparent_26%),linear-gradient(135deg,_#030712_0%,_#050816_45%,_#030712_100%)]">
        <div className="tw-absolute tw-inset-0 tw-bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] tw-bg-[size:70px_70px]" />
        <div className="tw-relative tw-mx-auto tw-flex tw-max-w-7xl tw-flex-col tw-gap-8 tw-px-4 tw-py-8 sm:tw-px-6 lg:tw-px-8 lg:tw-py-12">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="tw-flex tw-items-center tw-justify-between tw-rounded-full tw-border tw-border-white/10 tw-bg-white/5 tw-px-4 tw-py-3 tw-backdrop-blur-xl"
          >
            <div className="tw-flex tw-items-center tw-gap-3">
              <div className="tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-full tw-bg-gradient-to-br tw-from-cyan-400 tw-to-violet-500 tw-font-semibold tw-text-slate-950">
                RD
              </div>
              <div>
                <p className="tw-text-sm tw-font-semibold tw-text-white">Rahul Dhiman</p>
                <p className="tw-text-xs tw-text-slate-400">Shopify Expert</p>
              </div>
            </div>
            <div className="tw-hidden tw-items-center tw-gap-2 md:tw-flex">
              <a href="#projects" className="tw-rounded-full tw-px-4 tw-py-2 tw-text-sm tw-text-slate-300 tw-transition hover:tw-bg-white/10 hover:tw-text-white">
                Portfolio
              </a>
              <a href="#services" className="tw-rounded-full tw-px-4 tw-py-2 tw-text-sm tw-text-slate-300 tw-transition hover:tw-bg-white/10 hover:tw-text-white">
                Services
              </a>
              <a href="#faq" className="tw-rounded-full tw-px-4 tw-py-2 tw-text-sm tw-text-slate-300 tw-transition hover:tw-bg-white/10 hover:tw-text-white">
                FAQ
              </a>
            </div>
          </motion.header>

          <div className="tw-grid tw-items-center tw-gap-10 lg:tw-grid-cols-[1.05fr_0.95fr] lg:tw-gap-14">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="tw-max-w-2xl"
            >
              <div className="tw-mb-5 tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-emerald-400/30 tw-bg-emerald-400/10 tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-emerald-300">
                <span className="tw-h-2 tw-w-2 tw-animate-pulse tw-rounded-full tw-bg-emerald-400" />
                {profileOverview.availability}
              </div>
              <p className="tw-mb-4 tw-text-sm tw-font-semibold tw-uppercase tw-tracking-[0.35em] tw-text-cyan-300">Hello, I’m Rahul</p>
              <h1 className="tw-text-4xl tw-font-semibold tw-leading-[0.95] tw-tracking-tight tw-text-white sm:tw-text-5xl lg:tw-text-7xl">
                Senior Shopify Expert
                <span className="tw-block tw-bg-gradient-to-r tw-from-cyan-300 tw-via-sky-400 tw-to-violet-400 tw-bg-clip-text tw-text-transparent">
                  Full Stack Developer
                </span>
              </h1>
              <p className="tw-mt-6 tw-max-w-xl tw-text-lg tw-leading-8 tw-text-slate-400 sm:tw-text-xl">
                {profileOverview.intro}
              </p>
              <div className="tw-mt-8 tw-flex tw-flex-wrap tw-gap-3">
                <a href="#projects" className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white tw-px-5 tw-py-3 tw-text-sm tw-font-semibold tw-text-slate-950 tw-transition hover:tw-scale-[1.02]">
                  View Portfolio <FiArrowRight />
                </a>
                <a href={`mailto:${profileOverview.email}`} className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-white/10 tw-bg-white/5 tw-px-5 tw-py-3 tw-text-sm tw-font-semibold tw-text-white tw-transition hover:tw-bg-white/10">
                  Hire Me <FiBriefcase />
                </a>
                <a href="/assets/rahul-resume.txt" className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-cyan-400/20 tw-bg-cyan-400/10 tw-px-5 tw-py-3 tw-text-sm tw-font-semibold tw-text-cyan-200 tw-transition hover:tw-bg-cyan-400/20">
                  Download Resume <FiDownload />
                </a>
              </div>
              <div className="tw-mt-8 tw-flex tw-flex-wrap tw-items-center tw-gap-4">
                <div className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-white/10 tw-bg-white/5 tw-px-4 tw-py-2 tw-text-sm tw-text-slate-300">
                  <FiClock /> 12+ years experience
                </div>
                <div className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-white/10 tw-bg-white/5 tw-px-4 tw-py-2 tw-text-sm tw-text-slate-300">
                  <FiGlobe /> Worldwide delivery
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="tw-relative tw-mx-auto tw-w-full tw-max-w-[520px]"
            >
              <div className="tw-absolute tw-inset-0 tw-rounded-[2rem] tw-bg-gradient-to-br tw-from-cyan-400/20 tw-to-violet-500/20 tw-blur-3xl" />
              <div className="tw-relative tw-overflow-hidden tw-rounded-[2rem] tw-border tw-border-white/10 tw-bg-slate-950/60 tw-p-6 tw-shadow-[0_30px_120px_rgba(0,0,0,0.45)] tw-backdrop-blur-xl">
                <div className="tw-absolute tw-left-8 tw-top-8 tw-h-28 tw-w-28 tw-rounded-full tw-border tw-border-cyan-400/20" />
                <div className="tw-absolute tw-bottom-6 tw-right-6 tw-h-24 tw-w-24 tw-rounded-full tw-border tw-border-violet-400/20" />
                <div className="tw-relative tw-flex tw-flex-col tw-items-center tw-gap-6 tw-py-6 sm:tw-py-8">
                  <div className="tw-relative tw-h-56 tw-w-56 sm:tw-h-72 sm:tw-w-72">
                    <div className="tw-absolute tw-inset-0 tw-rounded-full tw-bg-gradient-to-br tw-from-cyan-400/40 tw-via-slate-700 tw-to-violet-500/40 tw-blur-2xl" />
                    <div className="tw-relative tw-overflow-hidden tw-rounded-full tw-border tw-border-white/10 tw-bg-slate-900 tw-p-2">
                      <Image src="/assets/rahul-avatar.svg" alt="Rahul Dhiman portrait" width={500} height={500} className="tw-h-full tw-w-full tw-rounded-full tw-object-cover" priority />
                    </div>
                  </div>
                  <div className="tw-grid tw-grid-cols-2 tw-gap-3 sm:tw-grid-cols-3">
                    {floatingBadges.map((badge, index) => (
                      <motion.div
                        key={badge.label}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
                        className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-white/10 tw-bg-white/5 tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-slate-200"
                      >
                        <span className="tw-text-cyan-300">{badge.icon}</span>
                        {badge.label}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-16 sm:tw-px-6 lg:tw-px-8 lg:tw-py-24">
        <div className="tw-grid tw-gap-4 md:tw-grid-cols-2 xl:tw-grid-cols-5">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="tw-rounded-2xl tw-border tw-border-white/10 tw-bg-white/5 tw-p-6 tw-backdrop-blur-xl"
            >
              <p className="tw-text-4xl tw-font-semibold tw-tracking-tight tw-text-white sm:tw-text-5xl">
                <AnimatedCounter value={item.value} suffix={item.suffix} prefix={item.prefix || ""} />
              </p>
              <p className="tw-mt-3 tw-text-sm tw-uppercase tw-tracking-[0.22em] tw-text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-8 sm:tw-px-6 lg:tw-px-8 lg:tw-py-16">
        <div className="tw-grid tw-gap-10 lg:tw-grid-cols-[0.95fr_1.05fr] lg:tw-items-start">
          <div className="tw-rounded-[2rem] tw-border tw-border-white/10 tw-bg-gradient-to-br tw-from-white/10 tw-to-white/5 tw-p-8 tw-shadow-[0_20px_80px_rgba(2,6,23,0.35)] tw-backdrop-blur-xl">
            <SectionHeading eyebrow="About Rahul" title="Designing commerce experiences that feel premium, fast, and scalable." description="The work blends storytelling, strategy, and engineering into experiences that not only impress but convert." />
            <div className="tw-mt-8 tw-space-y-4">
              {aboutPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="tw-flex tw-items-start tw-gap-3 tw-rounded-2xl tw-border tw-border-white/10 tw-bg-slate-950/40 tw-p-4"
                >
                  <FiCheckCircle className="tw-mt-1 tw-text-cyan-300" size={18} />
                  <p className="tw-text-sm tw-leading-7 tw-text-slate-300">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="tw-grid tw-gap-4 sm:tw-grid-cols-2">
            {[
              { title: "Frontend", description: "Crafting responsive UX with polished interactions and conversion-first interfaces.", icon: <FiPenTool /> },
              { title: "Backend", description: "Building reliable systems, custom logic, and APIs that support growth.", icon: <FiDatabase /> },
              { title: "UI/UX", description: "Combining storytelling, clarity, and premium motion for memorable brands.", icon: <FiSmartphone /> },
              { title: "API Integrations", description: "Connecting Shopify, payments, inventory, CRMs, and fulfillment platforms smoothly.", icon: <FiCode /> },
              { title: "Performance Optimization", description: "Improving load, SEO, Core Web Vitals, and user experience at every step.", icon: <FiZap /> },
              { title: "Store Migrations", description: "Milestone-based migrations with minimal risk and a clear rollout strategy.", icon: <FiLayers /> },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="tw-rounded-[1.5rem] tw-border tw-border-white/10 tw-bg-white/5 tw-p-6 tw-backdrop-blur-xl"
              >
                <div className="tw-mb-4 tw-inline-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-gradient-to-br tw-from-cyan-400/20 tw-to-violet-500/20 tw-text-cyan-300">
                  {item.icon}
                </div>
                <h3 className="tw-text-xl tw-font-semibold tw-text-white">{item.title}</h3>
                <p className="tw-mt-3 tw-text-sm tw-leading-7 tw-text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-8 sm:tw-px-6 lg:tw-px-8 lg:tw-py-16">
        <SectionHeading eyebrow="Technical Skills" title="A modern stack for modern commerce" description="The engineering approach is pragmatic, polished, and built for speed and resilience." align="center" />
        <div className="tw-mt-10 tw-grid tw-gap-6 lg:tw-grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="tw-rounded-[1.75rem] tw-border tw-border-white/10 tw-bg-white/5 tw-p-6 tw-backdrop-blur-xl"
            >
              <div className={`tw-mb-6 tw-h-1 tw-w-full tw-rounded-full tw-bg-gradient-to-r ${group.accent}`} />
              <h3 className="tw-text-2xl tw-font-semibold tw-text-white">{group.title}</h3>
              <div className="tw-mt-6 tw-flex tw-flex-wrap tw-gap-3">
                {group.skills.map((skill) => (
                  <span key={skill} className="tw-rounded-full tw-border tw-border-white/10 tw-bg-slate-950/60 tw-px-3 tw-py-2 tw-text-sm tw-text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="services" className="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-8 sm:tw-px-6 lg:tw-px-8 lg:tw-py-16">
        <SectionHeading eyebrow="Services" title="Execution that feels like growth, not just delivery" description="Each engagement is designed to increase confidence, revenue, and operational clarity." />
        <div className="tw-mt-10 tw-grid tw-gap-6 md:tw-grid-cols-2 xl:tw-grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="tw-rounded-[1.75rem] tw-border tw-border-white/10 tw-bg-white/5 tw-p-6 tw-backdrop-blur-xl"
            >
              <div className="tw-mb-4 tw-inline-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-gradient-to-br tw-from-cyan-400/20 tw-to-violet-500/20 tw-text-cyan-300">
                <FiZap size={20} />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-white">{service.title}</h3>
              <p className="tw-mt-3 tw-text-sm tw-leading-7 tw-text-slate-400">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-8 sm:tw-px-6 lg:tw-px-8 lg:tw-py-16">
        <SectionHeading eyebrow="Featured Projects" title="Recent work that blends strategy and engineering" description="Selected projects reflect a balance of visual polish, technical clarity, and business impact." />
        <div className="tw-mt-10 tw-grid tw-gap-6 lg:tw-grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="tw-overflow-hidden tw-rounded-[2rem] tw-border tw-border-white/10 tw-bg-gradient-to-br tw-from-white/10 tw-to-white/5 tw-shadow-[0_20px_90px_rgba(2,6,23,0.3)]"
            >
              <div className="tw-h-48 tw-bg-[linear-gradient(135deg,_rgba(34,211,238,0.16),_rgba(167,139,250,0.18))] tw-p-8">
                <div className="tw-flex tw-h-full tw-items-end tw-justify-between tw-rounded-[1.5rem] tw-border tw-border-white/10 tw-bg-slate-950/60 tw-p-6">
                  <div>
                    <p className="tw-text-xs tw-uppercase tw-tracking-[0.3em] tw-text-slate-400">Case Study</p>
                    <h3 className="tw-mt-2 tw-text-2xl tw-font-semibold tw-text-white">{project.title}</h3>
                  </div>
                  <div className="tw-rounded-full tw-border tw-border-cyan-400/20 tw-bg-cyan-400/10 tw-px-3 tw-py-2 tw-text-sm tw-text-cyan-300">Live</div>
                </div>
              </div>
              <div className="tw-p-8">
                <p className="tw-text-sm tw-leading-8 tw-text-slate-400">{project.description}</p>
                <div className="tw-mt-5 tw-flex tw-flex-wrap tw-gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tw-rounded-full tw-border tw-border-white/10 tw-bg-slate-950/60 tw-px-3 tw-py-1.5 tw-text-xs tw-font-medium tw-text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="tw-mt-6 tw-rounded-2xl tw-border tw-border-emerald-400/20 tw-bg-emerald-400/10 tw-p-4">
                  <p className="tw-text-xs tw-uppercase tw-tracking-[0.3em] tw-text-emerald-200">Outcome</p>
                  <p className="tw-mt-2 tw-text-sm tw-leading-7 tw-text-slate-200">{project.outcome}</p>
                </div>
                <a href="#contact" className="tw-mt-6 tw-inline-flex tw-items-center tw-gap-2 tw-text-sm tw-font-semibold tw-text-cyan-300">
                  View Project <FiArrowRight />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-8 sm:tw-px-6 lg:tw-px-8 lg:tw-py-16">
        <SectionHeading eyebrow="Shopify Apps" title="Tools built to support growth and operations" description="From private integration tooling to commerce-specific utilities, the focus stays practical and scalable." />
        <div className="tw-mt-10 tw-grid tw-gap-6 lg:tw-grid-cols-3">
          {appShowcases.map((app, index) => (
            <motion.article
              key={app.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="tw-rounded-[1.75rem] tw-border tw-border-white/10 tw-bg-white/5 tw-p-6 tw-backdrop-blur-xl"
            >
              <div className="tw-mb-5 tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-gradient-to-br tw-from-violet-500/20 tw-to-fuchsia-500/20 tw-text-violet-200">
                <BsLightningCharge size={20} />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-white">{app.title}</h3>
              <p className="tw-mt-3 tw-text-sm tw-leading-7 tw-text-slate-400">{app.description}</p>
              <ul className="tw-mt-5 tw-space-y-2">
                {app.features.map((feature) => (
                  <li key={feature} className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-slate-300">
                    <FiCheckCircle className="tw-text-cyan-300" /> {feature}
                  </li>
                ))}
              </ul>
              <div className="tw-mt-6 tw-flex tw-flex-wrap tw-gap-3">
                <a href="#contact" className="tw-rounded-full tw-border tw-border-white/10 tw-bg-slate-950/50 tw-px-4 tw-py-2 tw-text-sm tw-font-semibold tw-text-white">View App</a>
                <a href="#contact" className="tw-rounded-full tw-border tw-border-cyan-400/20 tw-bg-cyan-400/10 tw-px-4 tw-py-2 tw-text-sm tw-font-semibold tw-text-cyan-200">App Store</a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-8 sm:tw-px-6 lg:tw-px-8 lg:tw-py-16">
        <SectionHeading eyebrow="Testimonials" title="Trusted by founders, operators, and growing teams" description="Reviews reflect the mix of communication, craft, and strategic thinking that clients value most." align="center" />
        <div className="tw-mt-8 tw-flex tw-flex-wrap tw-justify-center tw-gap-3">
          {Object.keys(testimonials).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`tw-rounded-full tw-border tw-px-4 tw-py-2 tw-text-sm tw-font-semibold tw-transition ${activeTab === tab ? "tw-border-cyan-400/30 tw-bg-cyan-400/10 tw-text-cyan-200" : "tw-border-white/10 tw-bg-white/5 tw-text-slate-300"}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="tw-mt-10 tw-grid tw-gap-6 lg:tw-grid-cols-2">
          {testimonials[activeTab].map((item, index) => (
            <motion.article
              key={`${activeTab}-${item.name}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="tw-rounded-[1.75rem] tw-border tw-border-white/10 tw-bg-white/5 tw-p-6 tw-backdrop-blur-xl"
            >
              <div className="tw-mb-4 tw-flex tw-items-center tw-gap-1 tw-text-amber-300">
                {Array.from({ length: item.rating }).map((_, ratingIndex) => (
                  <span key={ratingIndex}>★</span>
                ))}
              </div>
              <p className="tw-text-base tw-leading-8 tw-text-slate-300">“{item.feedback}”</p>
              <div className="tw-mt-6 tw-flex tw-items-center tw-justify-between">
                <div>
                  <p className="tw-font-semibold tw-text-white">{item.name}</p>
                  <p className="tw-text-sm tw-text-slate-400">{item.country}</p>
                </div>
                <div className="tw-rounded-full tw-border tw-border-white/10 tw-bg-slate-950/60 tw-px-3 tw-py-2 tw-text-xs tw-uppercase tw-tracking-[0.22em] tw-text-slate-300">
                  {item.project}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-8 sm:tw-px-6 lg:tw-px-8 lg:tw-py-16">
        <SectionHeading eyebrow="Work Process" title="A clear path from idea to launch" description="The process is intentionally transparent so clients stay confident at every step." />
        <div className="tw-mt-10 tw-grid tw-gap-4 lg:tw-grid-cols-3">
          {workProcess.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="tw-rounded-[1.5rem] tw-border tw-border-white/10 tw-bg-white/5 tw-p-6 tw-backdrop-blur-xl"
            >
              <div className="tw-mb-4 tw-flex tw-items-center tw-gap-3">
                <div className="tw-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-full tw-bg-cyan-400/15 tw-font-semibold tw-text-cyan-300">0{index + 1}</div>
                <h3 className="tw-text-xl tw-font-semibold tw-text-white">{step.title}</h3>
              </div>
              <p className="tw-text-sm tw-leading-7 tw-text-slate-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-8 sm:tw-px-6 lg:tw-px-8 lg:tw-py-16">
        <SectionHeading eyebrow="Industries Served" title="Versatile enough for fashion, B2B, beauty, and beyond" description="The work scales across product types, business models, and customer expectations." align="center" />
        <div className="tw-mt-10 tw-grid tw-gap-4 sm:tw-grid-cols-2 lg:tw-grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="tw-rounded-[1.5rem] tw-border tw-border-white/10 tw-bg-white/5 tw-p-6 tw-text-center tw-text-slate-300"
            >
              <div className="tw-mb-4 tw-flex tw-justify-center">
                <FiTrendingUp className="tw-text-cyan-300" size={20} />
              </div>
              <p className="tw-font-semibold tw-text-white">{industry}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-8 sm:tw-px-6 lg:tw-px-8 lg:tw-py-16">
        <SectionHeading eyebrow="Why Clients Hire Me" title="A premium experience built around trust and execution" description="Clients return because the work is strategic, calm, and relentlessly high quality." />
        <div className="tw-mt-10 tw-grid tw-gap-6 md:tw-grid-cols-2 xl:tw-grid-cols-4">
          {whyHire.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="tw-rounded-[1.5rem] tw-border tw-border-white/10 tw-bg-white/5 tw-p-6"
            >
              <div className="tw-mb-4 tw-inline-flex tw-h-11 tw-w-11 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-gradient-to-br tw-from-cyan-400/15 tw-to-violet-500/15 tw-text-cyan-300">
                <FiCheckCircle size={18} />
              </div>
              <h3 className="tw-text-xl tw-font-semibold tw-text-white">{item.title}</h3>
              <p className="tw-mt-3 tw-text-sm tw-leading-7 tw-text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-8 sm:tw-px-6 lg:tw-px-8 lg:tw-py-16">
        <SectionHeading eyebrow="Certifications" title="Recognized capabilities across the modern commerce stack" description="A practical mix of platform knowledge, modern frameworks, and trusted delivery practices." align="center" />
        <div className="tw-mt-10 tw-flex tw-flex-wrap tw-justify-center tw-gap-4">
          {certifications.map((cert) => (
            <div key={cert} className="tw-rounded-full tw-border tw-border-white/10 tw-bg-white/5 tw-px-5 tw-py-3 tw-text-sm tw-font-semibold tw-text-slate-200">
              {cert}
            </div>
          ))}
        </div>
      </section>

      <section className="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-8 sm:tw-px-6 lg:tw-px-8 lg:tw-py-16">
        <div className="tw-relative tw-overflow-hidden tw-rounded-[2.25rem] tw-border tw-border-white/10 tw-bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.2),transparent_28%),rgba(3,7,18,0.95)] tw-p-8 tw-shadow-[0_30px_100px_rgba(2,6,23,0.4)] sm:tw-p-10 lg:tw-p-14">
          <div className="tw-mb-10 tw-flex tw-flex-wrap tw-gap-3">
            {techCloud.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="tw-rounded-full tw-border tw-border-white/10 tw-bg-white/10 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-slate-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <SectionHeading eyebrow="FAQ" title="Questions clients ask before they hire" description="The goal is simple: remove friction, build trust, and make the next step feel obvious." />
          <div id="faq" className="tw-mt-8 tw-space-y-4">
            {faqItems.map((item, index) => (
              <div key={item.question} className="tw-overflow-hidden tw-rounded-[1.25rem] tw-border tw-border-white/10 tw-bg-slate-950/50">
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="tw-flex tw-w-full tw-items-center tw-justify-between tw-px-5 tw-py-5 tw-text-left">
                  <span className="tw-text-base tw-font-semibold tw-text-white">{item.question}</span>
                  <FiChevronDown className={`tw-transition ${openFaq === index ? "tw-rotate-180" : ""}`} />
                </button>
                {openFaq === index ? <p className="tw-px-5 tw-pb-5 tw-text-sm tw-leading-7 tw-text-slate-400">{item.answer}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-8 sm:tw-px-6 lg:tw-px-8 lg:tw-py-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="tw-overflow-hidden tw-rounded-[2.25rem] tw-border tw-border-cyan-400/20 tw-bg-gradient-to-br tw-from-cyan-500/10 tw-via-slate-950 tw-to-violet-500/10 tw-p-8 tw-shadow-[0_30px_100px_rgba(34,211,238,0.15)] sm:tw-p-10 lg:tw-p-14"
        >
          <div className="tw-grid tw-gap-8 lg:tw-grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="tw-mb-3 tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-cyan-400/20 tw-bg-cyan-400/10 tw-px-3 tw-py-2 tw-text-sm tw-font-semibold tw-text-cyan-200">Ready to build something remarkable?</p>
              <h2 className="tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-white sm:tw-text-4xl">Let’s create your next Shopify experience together.</h2>
              <p className="tw-mt-4 tw-max-w-2xl tw-text-lg tw-leading-8 tw-text-slate-300">Whether you’re launching a new store, upgrading an old one, or building an app that changes how your team works, the door is open.</p>
              <div className="tw-mt-8 tw-flex tw-flex-wrap tw-gap-3">
                <a href={`mailto:${profileOverview.email}`} className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-bg-white tw-px-5 tw-py-3 tw-text-sm tw-font-semibold tw-text-slate-950">Hire Rahul <FiArrowRight /></a>
                <a href="#" className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-white/10 tw-bg-slate-950/50 tw-px-5 tw-py-3 tw-text-sm tw-font-semibold tw-text-white">Schedule a Call</a>
              </div>
            </div>
            <div className="tw-rounded-[1.75rem] tw-border tw-border-white/10 tw-bg-slate-950/60 tw-p-6">
              <div className="tw-flex tw-items-center tw-justify-between tw-gap-4">
                <div>
                  <p className="tw-text-sm tw-font-semibold tw-text-slate-300">Direct contact</p>
                  <p className="tw-mt-1 tw-text-xl tw-font-semibold tw-text-white">{profileOverview.email}</p>
                </div>
                <button type="button" onClick={() => copyToClipboard(profileOverview.email)} className="tw-rounded-full tw-border tw-border-white/10 tw-bg-white/5 tw-p-3 tw-text-slate-200">
                  <FiCopy size={16} />
                </button>
              </div>
              <div className="tw-mt-6 tw-space-y-3">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} className="tw-flex tw-items-center tw-justify-between tw-rounded-2xl tw-border tw-border-white/10 tw-bg-white/5 tw-px-4 tw-py-3 tw-text-sm tw-font-medium tw-text-slate-300">
                    <span className="tw-flex tw-items-center tw-gap-3">{link.icon} {link.name}</span>
                    <FiArrowRight />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="tw-border-t tw-border-white/10 tw-bg-slate-950/80">
        <div className="tw-mx-auto tw-flex tw-max-w-7xl tw-flex-col tw-gap-5 tw-px-4 tw-py-8 sm:tw-px-6 lg:tw-flex-row lg:tw-items-center lg:tw-justify-between lg:tw-px-8">
          <div>
            <p className="tw-text-lg tw-font-semibold tw-text-white">Rahul Dhiman</p>
            <p className="tw-mt-1 tw-text-sm tw-text-slate-400">Senior Shopify Expert • Full Stack Developer • Ecommerce Consultant</p>
          </div>
          <div className="tw-flex tw-flex-wrap tw-gap-3">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="tw-rounded-full tw-border tw-border-white/10 tw-bg-white/5 tw-px-3 tw-py-2 tw-text-sm tw-text-slate-300">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
