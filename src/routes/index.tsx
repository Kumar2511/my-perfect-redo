import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowRight, Eye, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kavi Priya R — Digital Marketing Executive" },
      {
        name: "description",
        content:
          "Digital Marketing Executive with hands-on experience in SEO, Meta Ads, Google Ads, and WordPress. 90 calls @ Rs.55.10 CPC, 690K organic impressions. Based in Chennai, India.",
      },
      { property: "og:title", content: "Kavi Priya R — Digital Marketing Executive" },
      {
        property: "og:description",
        content:
          "Turning data into measurable growth through WordPress, SEO, Social, and Paid Ads.",
      },
    ],
  }),
});

function Index() {
  const resumeUrl = "/R_Kavipriya_Resume.pdf";

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative px-6 md:px-8 pt-20 md:pt-28 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8 reveal-rise">
              <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-secondary border border-border mb-8 scanline">
                <div className="size-2 rounded-full bg-kinetic animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground">
                  Available for new projects
                </span>
              </div>

              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Hello, I'm
              </p>
              <h1 className="font-display font-extrabold text-[clamp(3.25rem,10vw,8.5rem)] leading-[0.85] tracking-tighter uppercase italic">
                Kavi Priya<br />
                <span className="text-velocity">R.</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl font-display font-semibold text-foreground/90">
                Digital Marketing Executive
              </p>
              <p className="max-w-[55ch] text-base md:text-lg text-muted-foreground font-light leading-relaxed mt-6">
                Hands-on with SEO, Meta Ads, Google Ads, and WordPress. Managed live
                client campaigns delivering 90 inbound calls at Rs.55.10 cost-per-call,
                690,000 organic impressions at avg. position 7.3, and deployed two
                fully indexed WordPress websites.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  to="/projects"
                  className="magnetic-action group inline-flex items-center gap-3 px-7 py-4 bg-foreground text-background font-bold uppercase text-xs tracking-widest hover:bg-kinetic hover:text-accent-foreground transition-all duration-300"
                >
                  View Projects
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="magnetic-action inline-flex items-center gap-3 px-7 py-4 border border-border text-foreground font-bold uppercase text-xs tracking-widest hover:bg-secondary transition-all"
                >
                  Hire Me
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-action inline-flex items-center gap-2 px-5 py-3 bg-secondary text-foreground border border-border font-bold uppercase text-[11px] tracking-widest hover:border-velocity hover:text-velocity transition-all"
                >
                  <Eye size={15} />
                  View Resume
                </a>
                <a
                  href={resumeUrl}
                  download="R_Kavipriya_Resume.pdf"
                  className="magnetic-action inline-flex items-center gap-2 px-5 py-3 bg-velocity text-primary-foreground font-bold uppercase text-[11px] tracking-widest hover:bg-kinetic hover:text-accent-foreground transition-all"
                >
                  <ArrowDownToLine size={15} />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Side stats */}
            <div className="col-span-12 lg:col-span-4 lg:border-l border-border lg:pl-8 pb-2">
              <div className="space-y-10">
                <div>
                  <div className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest mb-2">
                    Based In
                  </div>
                  <div className="text-2xl font-display font-bold text-foreground">
                    Chennai, India
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest mb-2">
                    Currently
                  </div>
                  <div className="text-2xl font-display font-bold text-foreground">
                    Why Global Services
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">
                    Digital Marketing Executive
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest mb-2">
                    Stack Focus
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["WordPress", "SEO", "Meta Ads", "Google Ads", "Canva"].map((s) => (
                      <span key={s} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-secondary text-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="border-y border-border py-6 overflow-hidden bg-surface">
        <div className="flex marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 shrink-0">
              {[
                "WordPress Development",
                "SEO Optimization",
                "Meta Ads",
                "Google Ads",
                "Lead Generation",
                "Social Media Strategy",
                "Content Creation",
                "Analytics",
              ].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  <span className="font-display text-2xl md:text-3xl font-bold uppercase italic text-foreground">
                    {t}
                  </span>
                  <span className="text-velocity font-display text-2xl">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-velocity mb-4 flex items-center gap-2">
                <Sparkles size={14} /> What I Do
              </p>
              <h2 className="font-display font-extrabold text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase max-w-[14ch]">
                Driving digital <span className="text-velocity">growth</span> that matters
              </h2>
            </div>
            <p className="md:max-w-sm text-muted-foreground text-base leading-relaxed self-end">
              I combine creativity with data to help businesses reach their target
              audience and grow online — across web, search, social, and paid channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              { n: "01", t: "Paid Advertising", d: "Google Ads & Meta Ads campaigns built for lead generation and ROI." },
              { n: "02", t: "Social Media Marketing", d: "Strategic content & engagement across Instagram and Facebook." },
              { n: "03", t: "SEO Optimization", d: "On-page SEO, keyword targeting, and content for higher rankings." },
              { n: "04", t: "WordPress Development", d: "Custom websites, theme tweaks, and content management." },
              { n: "05", t: "Analytics & Insights", d: "Data-driven decisions using CTR, conversions, and performance data." },
              { n: "06", t: "Content & Creative", d: "Posts and ad creatives designed in Canva — calendar-ready." },
            ].map((s) => (
              <div
                key={s.n}
                className="tilt-card group bg-background p-8 hover:bg-surface transition-colors duration-300"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-mono text-xs text-velocity font-bold tracking-widest">
                    {s.n}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-muted-foreground group-hover:text-kinetic group-hover:translate-x-1 transition-all"
                  />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-3">
                  {s.t}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="px-6 md:px-8 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-display font-extrabold text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
              Let's build your <span className="italic text-kinetic">next</span> growth story.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
            <Link
              to="/contact"
              className="group flex items-center justify-between gap-4 px-7 py-5 bg-velocity text-primary-foreground font-bold uppercase text-sm tracking-widest hover:bg-kinetic hover:text-accent-foreground transition-all duration-300"
            >
              Start a project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/919042551631"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-5 border border-border text-foreground font-bold uppercase text-sm tracking-widest text-center hover:bg-secondary transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
