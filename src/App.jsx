
import React, { useState } from "react";

const siteIcon = "/bonzoli-site-icon.png";

const navItems = [
  { label: "Ventures", href: "#ventures" },
  { label: "Products", href: "#products" },
  { label: "What We Build", href: "#build" },
  { label: "Approach", href: "#approach" },
  { label: "Prospectus", href: "/prospectus.html" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy.html" },
  { label: "Terms", href: "/terms.html" },
  { label: "Disclaimer", href: "/disclaimer.html" },
];

const ventures = [
  {
    name: "Tell Bubba",
    label: "Consumer complaint & feedback assistant",
    description:
      "Turns frustrating customer service issues into clear complaint letters, feedback messages, evidence checklists, follow-up plans, and escalation options.",
    status: "Validation / MVP",
    url: "BubbaFix.com",
    image: "/tell-bubba-icon.svg",
    accent: "from-orange-500/30 via-amber-400/15 to-slate-950",
  },
  {
    name: "Found",
    label: "AI social concierge for real-world friendship",
    description:
      "Helps people find their people through thoughtful matching, small compatible groups, low-pressure gatherings, and repeated shared experiences.",
    status: "Concept / private beta",
    url: "imfound.app",
    image: "/found-icon.svg",
    accent: "from-violet-500/30 via-teal-400/15 to-slate-950",
  },
  {
    name: "Kinnerly",
    label: "Private family memory & legacy platform",
    description:
      "A private place for families to preserve stories, photos, milestones, traditions, and memories across generations.",
    status: "Prototype / early development",
    url: "Kinnerly.com",
    image: "/kinnerly-icon.jpg",
    accent: "from-rose-500/30 via-purple-400/15 to-slate-950",
  },
  {
    name: "Localish",
    label: "Helping people feel at home after moving",
    description:
      "Helps people who move somewhere new discover places, routines, local culture, community, and confidence faster.",
    status: "Concept / early development",
    url: "trylocalish.com",
    image: "/localish-icon.jpg",
    accent: "from-emerald-500/30 via-cyan-400/15 to-slate-950",
  },
  {
    name: "Babaluce",
    label: "Private rooms for real-life groups",
    description:
      "A private social layer for close friends, campus crews, clubs, teams, fraternities, sororities, and the people who actually matter.",
    status: "Prototype / early access",
    url: "Babaluce.com",
    image: "/babaluce-icon.png",
    accent: "from-indigo-500/30 via-blue-400/15 to-slate-950",
  },
];

const productBrands = [
  {
    name: "GuardX",
    label: "Protective technology products",
    description:
      "GuardX develops durable protective products and materials for commercial, industrial, marine, construction, and high-use environments where long-term protection and performance matter.",
    status: "Active product brand",
    url: "GuardXTech.com",
    image: "/guardx-icon.png",
    accent: "from-blue-500/35 via-cyan-400/15 to-slate-950",
  },
];

const infoCards = [
  {
    icon: "AI",
    title: "Assisted products",
    text: "Tools that organize, guide, write, match, resolve, and simplify everyday problems.",
    className:
      "border-cyan-300/25 bg-gradient-to-br from-cyan-400/18 via-slate-900 to-slate-950 shadow-cyan-950/20 text-cyan-200",
  },
  {
    icon: "IRL",
    title: "Real-world connection",
    text: "Products for belonging, local discovery, private groups, friendship, and family memory.",
    className:
      "border-violet-300/25 bg-gradient-to-br from-violet-400/18 via-slate-900 to-slate-950 shadow-violet-950/20 text-violet-200",
  },
  {
    icon: "GX",
    title: "Commercial technology",
    text: "Product-driven brands built for protection, performance, and demanding environments.",
    className:
      "border-blue-300/25 bg-gradient-to-br from-blue-400/18 via-slate-900 to-slate-950 shadow-blue-950/20 text-blue-200",
  },
];

const buildAreas = [
  {
    title: "AI-Assisted Tools",
    text: "Products that help people organize, decide, write, plan, resolve, match, and move faster.",
    icon: "AI",
    color: "border-cyan-300/25 bg-cyan-300/12 text-cyan-200",
  },
  {
    title: "Consumer Web Apps",
    text: "Friendly digital products designed around real everyday problems and simple user flows.",
    icon: "UX",
    color: "border-blue-300/25 bg-blue-300/12 text-blue-200",
  },
  {
    title: "Private Social Platforms",
    text: "Smaller, safer, more meaningful spaces for families, groups, friends, and communities.",
    icon: "PR",
    color: "border-violet-300/25 bg-violet-300/12 text-violet-200",
  },
  {
    title: "Real-World Connection",
    text: "Technology that helps people belong, gather, discover, and feel more connected offline.",
    icon: "IRL",
    color: "border-emerald-300/25 bg-emerald-300/12 text-emerald-200",
  },
  {
    title: "Commercial Products",
    text: "Technology-driven physical products built for protection, durability, and demanding environments.",
    icon: "GX",
    color: "border-sky-300/25 bg-sky-300/12 text-sky-200",
  },
];

const process = [
  "Identify the problem",
  "Shape the product",
  "Validate quickly",
  "Build lean",
  "Scale what works",
];

function BrandMark() {
  return (
    <img
      src={siteIcon}
      alt="Bonzoli Technology Group"
      className="h-16 w-16 rounded-3xl object-cover shadow-xl shadow-cyan-500/20 md:h-20 md:w-20"
    />
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
      {children}
    </div>
  );
}

function ProjectIcon({ src, name, large = false }) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl shadow-black/40 ${
        large ? "h-32 w-32" : "h-24 w-24"
      }`}
    >
      <img
        src={src}
        alt={`${name} icon`}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function VentureCard({ venture }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 p-6 shadow-xl shadow-black/25 transition hover:-translate-y-1 hover:border-cyan-300/35">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${venture.accent} opacity-95`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_38%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

      <div className="relative">
        <ProjectIcon src={venture.image} name={venture.name} />

        <div className="mt-6 text-sm uppercase tracking-[0.24em] text-cyan-200/80">
          {venture.url}
        </div>

        <h3 className="mt-2 text-2xl font-black">{venture.name}</h3>
        <p className="mt-2 font-semibold text-white/90">{venture.label}</p>
        <p className="mt-4 leading-7 text-slate-300">{venture.description}</p>

        <div className="mt-6 inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs uppercase tracking-widest text-slate-300">
          {venture.status}
        </div>
      </div>
    </article>
  );
}

function MiniPortfolioCard({ item }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition hover:border-cyan-300/30 hover:bg-white/[0.085]">
      <div className="flex items-start gap-4">
        <ProjectIcon src={item.image} name={item.name} />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-bold">{item.name}</h3>
            <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-widest text-slate-300">
              {item.status}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-300">{item.label}</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="btg-page min-h-screen bg-[#050814] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center px-5 py-3">
          <a href="#top" className="flex items-center gap-4 md:gap-5">
            <BrandMark />
            <div>
              <div className="text-xl font-black uppercase tracking-[0.16em] md:text-2xl md:tracking-[0.18em]">
                Bonzoli
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/85 md:text-sm md:tracking-[0.24em]">
                Technology Group
              </div>
            </div>
          </a>

          <nav className="ml-auto hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="ml-6 hidden rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-100 md:inline-flex"
          >
            Work With Us
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "×" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#050814]/95 px-5 py-5 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-3">
              {[...navItems, ...legalLinks].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-3 pb-14 md:grid-cols-[1.05fr_0.95fr] md:pt-5 md:pb-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100">
              <span className="text-cyan-300">✦</span>
              Parent company for practical, human-centered technology brands
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Building technology brands for real-world problems.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Bonzoli Technology Group develops AI-assisted consumer products,
              digital platforms, private social experiences, and commercial
              technology brands designed to help people solve problems, find
              belonging, preserve memories, and move through life with less
              friction.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#ventures"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-4 font-bold text-white shadow-2xl shadow-blue-500/20 transition hover:scale-[1.02]"
              >
                Explore Ventures <span>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Contact Bonzoli
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-cyan-400/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-950 to-blue-950/40 p-6 shadow-2xl shadow-black/40">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
                    Portfolio
                  </div>
                  <div className="text-2xl font-black">Bonzoli Ventures</div>
                </div>
                <img
                  src={siteIcon}
                  alt="Bonzoli"
                  className="h-14 w-14 rounded-2xl object-cover"
                />
              </div>

              <div className="space-y-3">
                {ventures.map((venture) => (
                  <MiniPortfolioCard key={venture.name} item={venture} />
                ))}

                {productBrands.map((brand) => (
                  <MiniPortfolioCard key={brand.name} item={brand} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-4 md:grid-cols-3">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-[1.5rem] border p-7 shadow-xl ${card.className}`}
              >
                <div className="text-5xl font-black">{card.icon}</div>
                <h3 className="mt-3 text-xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="ventures" className="mx-auto max-w-7xl px-5 py-20">
          <div className="rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-950 to-cyan-950/25 p-6 shadow-2xl shadow-black/30 md:p-10">
            <SectionLabel>Ventures</SectionLabel>

            <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                A focused portfolio of useful digital brands.
              </h2>
              <p className="text-lg leading-8 text-slate-300">
                Each Bonzoli venture starts with a simple question: what
                everyday problem is painful enough that people would actually
                use a better solution?
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {ventures.map((venture) => (
                <VentureCard key={venture.name} venture={venture} />
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-5 py-20">
          <div className="rounded-[2.25rem] border border-blue-300/15 bg-gradient-to-br from-blue-950/45 via-slate-950 to-cyan-950/25 p-6 shadow-2xl shadow-black/30 md:p-10">
            <SectionLabel>Commercial Products</SectionLabel>

            <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Protective technology products built for the real world.
              </h2>
              <p className="text-lg leading-8 text-slate-300">
                In addition to software ventures, Bonzoli develops
                product-driven brands for protection, durability, and
                performance.
              </p>
            </div>

            <div className="mt-10 grid gap-5">
              {productBrands.map((brand) => (
                <article
                  key={brand.name}
                  className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 p-6 shadow-xl shadow-black/25 transition hover:-translate-y-1 hover:border-cyan-300/35"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${brand.accent} opacity-95`}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_38%)]" />

                  <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
                    <ProjectIcon src={brand.image} name={brand.name} large />

                    <div className="flex-1">
                      <div className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">
                        {brand.url}
                      </div>
                      <h3 className="mt-2 text-3xl font-black">
                        {brand.name}
                      </h3>
                      <p className="mt-2 font-semibold text-white/90">
                        {brand.label}
                      </p>
                      <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                        {brand.description}
                      </p>
                      <div className="mt-6 inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs uppercase tracking-widest text-slate-300">
                        {brand.status}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="build" className="mx-auto max-w-7xl px-5 py-20">
          <div className="rounded-[2.25rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-950/35 via-slate-950 to-violet-950/25 p-6 shadow-2xl shadow-black/30 md:p-10">
            <SectionLabel>What We Build</SectionLabel>

            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                  Technology that feels practical, personal, and useful.
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Bonzoli focuses on lean, useful products with a clear
                  emotional or practical reason to exist — not technology for
                  technology’s sake.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {buildAreas.map((area) => (
                  <div
                    key={area.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.055] p-5"
                  >
                    <div
                      className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border text-lg font-black ${area.color}`}
                    >
                      {area.icon}
                    </div>
                    <h3 className="text-lg font-bold">{area.title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{area.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="mx-auto max-w-7xl px-5 py-20">
          <SectionLabel>Approach</SectionLabel>

          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                From idea to validation to launch.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Bonzoli builds like a venture studio: find painful real-world
                friction, shape a clear product promise, validate before
                overbuilding, and scale what earns real interest.
              </p>
            </div>

            <div className="space-y-4">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 text-sm font-black text-slate-950">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold">{step}</h3>
                    <p className="text-sm text-slate-400">
                      Lean, focused, and grounded in real user behavior.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20">
          <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/30 p-8 shadow-2xl shadow-black/30 md:p-12">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-center">
              <div className="flex justify-center md:justify-start">
                <div className="relative flex h-52 w-52 items-center justify-center rounded-[2rem] border border-cyan-300/25 bg-slate-950 shadow-2xl shadow-cyan-500/10">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-cyan-400/10 to-transparent" />
                  <img
                    src={siteIcon}
                    alt="Bonzoli Technology Group"
                    className="relative h-40 w-40 rounded-3xl object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                  The common thread is human-centered technology.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Whether the problem is a company complaint, a new city, a
                  family memory, a private group, a real-world friendship, or
                  commercial protection, Bonzoli products are built around useful
                  outcomes people can understand immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20 pb-28">
          <div className="rounded-[2.25rem] border border-cyan-300/20 bg-gradient-to-br from-blue-600/20 via-slate-950 to-cyan-500/10 p-8 shadow-2xl shadow-black/30 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
              <div>
                <SectionLabel>Contact</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                  Interested in a Bonzoli venture, partnership, or opportunity?
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Reach out about partnerships, product feedback, investment
                  conversations, media, or general opportunities.
                </p>
              </div>

              <form className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-black/30">
                <div className="grid gap-4">
                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
                    placeholder="Name"
                  />
                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
                    placeholder="Email"
                  />
                  <select className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-300/50">
                    <option className="bg-slate-950">General inquiry</option>
                    <option className="bg-slate-950">Partnership</option>
                    <option className="bg-slate-950">Investment</option>
                    <option className="bg-slate-950">Product feedback</option>
                    <option className="bg-slate-950">Media</option>
                  </select>
                  <textarea
                    className="min-h-32 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
                    placeholder="Message"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-4 font-bold text-white transition hover:scale-[1.01]"
                  >
                    Send Message <span>✉</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#050814]/95 px-5 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-center gap-4">
            <BrandMark />
            <div>
              <div className="font-semibold text-slate-300">
                © 2026 Bonzoli Technology Group. All rights reserved.
              </div>
              <div className="mt-1 text-sm text-slate-500">
                Building practical technology brands for real-world problems.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-400">
            <a href="#ventures" className="hover:text-white">
              Ventures
            </a>
            <a href="#products" className="hover:text-white">
              Products
            </a>
            <a href="#build" className="hover:text-white">
              What We Build
            </a>
            <a href="#approach" className="hover:text-white">
              Approach
            </a>
            <a href="/prospectus.html" className="hover:text-white">Prospectus</a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
            <a href="/privacy.html" className="hover:text-white">
              Privacy
            </a>
            <a href="/terms.html" className="hover:text-white">
              Terms
            </a>
            <a href="/disclaimer.html" className="hover:text-white">
              Disclaimer
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}