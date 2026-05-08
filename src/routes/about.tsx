import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, GraduationCap, Award, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Kavi Priya R" },
      {
        name: "description",
        content:
          "Kavi Priya R — Digital Marketing Executive at Why Global Services, specializing in SEO, Meta Ads, Google Ads, and WordPress development.",
      },
      { property: "og:title", content: "About — Kavi Priya R" },
      {
        property: "og:description",
        content: "Get to know me and my journey as a Digital Marketing Executive.",
      },
    ],
  }),
});

function AboutPage() {
  const focus = [
    "WordPress website development & management",
    "On-page SEO & keyword optimization",
    "Social media content strategies",
    "Google Ads & Meta Ads campaigns",
    "Lead generation & performance marketing",
    "Data-driven campaign optimization",
    "Email marketing",
    "Content creation & strategy",
  ];

  return (
    <SiteLayout>
      <PageHeader eyebrow="About" title="Get to know me & my journey" />

      <section className="px-4 sm:px-6 md:px-8 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 md:gap-10">
          <div className="col-span-12 lg:col-span-7 space-y-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-velocity mb-4">
                Professional Summary
              </p>
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
                I'm <span className="font-bold">Kavi Priya R</span>, an enthusiastic and
                result-driven Digital Marketing Executive at{" "}
                <span className="text-velocity font-semibold">Why Global Services</span>,
                based in Chennai, India. I have hands-on experience in SEO, Meta Ads,
                Google Ads, and WordPress website development — managing live client
                campaigns with measurable outcomes like 90 inbound calls at
                Rs.55.10 cost-per-call and 690,000 organic impressions.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-velocity mb-4">
                My Passion
              </p>
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
                I'm passionate about combining creativity with data-driven marketing.
                I love turning marketing strategies into measurable results that help
                businesses grow their online presence.
              </p>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={16} className="text-kinetic" />
              <span className="text-sm font-medium">Tambaram, Chennai, India</span>
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-5 lg:border-l border-border lg:pl-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-velocity mb-6">
              What I Focus On
            </p>
            <ul className="space-y-4">
              {focus.map((f, i) => (
                <li key={f} className="flex items-start gap-4 group">
                  <span className="font-mono text-xs text-muted-foreground tabular-nums pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground group-hover:text-velocity transition-colors">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-14 sm:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-velocity mb-4">
            Education & Certification
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-10 sm:mb-12 break-words">
            Foundations of <span className="text-kinetic italic">my craft.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <div className="bg-background p-8 hover:bg-surface transition-colors">
              <GraduationCap className="text-velocity mb-6" size={28} />
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                Degree
              </p>
              <h3 className="font-display text-2xl font-bold uppercase mb-2">
                BSc Computer Science
              </h3>
              <p className="text-sm text-muted-foreground">
                EGS Pillay Arts & Science College, Nagapattinam
              </p>
              <p className="font-mono text-xs text-velocity mt-3">2020 — 2023</p>
            </div>
            <div className="bg-background p-8 hover:bg-surface transition-colors">
              <Award className="text-kinetic mb-6" size={28} />
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                Certification
              </p>
              <h3 className="font-display text-2xl font-bold uppercase mb-2">
                AI-Powered Digital Marketing
              </h3>
              <p className="text-sm text-muted-foreground">Certified at WHY Tap</p>
              <p className="font-mono text-xs text-kinetic mt-3">2026</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase break-words">
            Have a project in mind?
          </h3>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 min-h-12 bg-velocity text-primary-foreground font-bold uppercase text-xs tracking-widest hover:bg-kinetic hover:text-accent-foreground transition-all"
          >
            Get in Touch
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function PageHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="px-4 sm:px-6 md:px-8 pt-12 sm:pt-20 md:pt-28 pb-10 sm:pb-16 border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-velocity mb-6">
          / {eyebrow}
        </p>
        <h1 className="font-display font-extrabold text-[clamp(2rem,7.5vw,7rem)] leading-[0.9] tracking-tighter uppercase italic break-words">
          {title}
        </h1>
      </div>
    </section>
  );
}