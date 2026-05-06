import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowRight, ExternalLink, Eye, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const [resumeOpen, setResumeOpen] = useState(false);
  const [dragY, setDragY] = useState(0);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (!resumeOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setResumeOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [resumeOpen]);

  const closeModal = () => {
    setDragY(0);
    setResumeOpen(false);
  };

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative px-4 sm:px-6 md:px-8 pt-14 sm:pt-20 md:pt-28 pb-16 sm:pb-20">
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
              <h1 className="font-display font-extrabold text-[clamp(2.75rem,10vw,8.5rem)] leading-[0.85] tracking-tighter uppercase italic break-words">
                Kavi Priya<br />
                <span className="text-velocity">R.</span>
              </h1>
              <p className="mt-5 sm:mt-6 text-lg sm:text-xl md:text-2xl font-display font-semibold text-foreground/90">
                Digital Marketing Executive
              </p>
              <p className="max-w-[55ch] text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed mt-5 sm:mt-6">
                Hands-on with SEO, Meta Ads, Google Ads, and WordPress. Managed live
                client campaigns delivering 90 inbound calls at Rs.55.10 cost-per-call,
                690,000 organic impressions at avg. position 7.3, and deployed two
                fully indexed WordPress websites.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
                <Link
                  to="/projects"
                  className="magnetic-action group inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 min-h-12 bg-foreground text-background font-bold uppercase text-xs tracking-widest hover:bg-kinetic hover:text-accent-foreground transition-all duration-300"
                >
                  View Projects
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="magnetic-action inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 min-h-12 border border-border text-foreground font-bold uppercase text-xs tracking-widest hover:bg-secondary transition-all"
                >
                  Hire Me
                </Link>
              </div>

              <div className="mt-4 sm:mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setResumeOpen(true)}
                  className="magnetic-action inline-flex items-center gap-2 px-5 py-3 min-h-11 bg-secondary text-foreground border border-border font-bold uppercase text-[11px] tracking-widest hover:border-velocity hover:text-velocity transition-all"
                >
                  <Eye size={15} />
                  View Resume
                </button>
                <a
                  href={resumeUrl}
                  download="R_Kavipriya_Resume.pdf"
                  className="magnetic-action inline-flex items-center gap-2 px-5 py-3 min-h-11 bg-velocity text-primary-foreground font-bold uppercase text-[11px] tracking-widest hover:bg-kinetic hover:text-accent-foreground transition-all"
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
      <div className="border-y border-border py-4 sm:py-6 overflow-hidden bg-surface">
        <div className="flex marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-12 px-4 sm:px-6 shrink-0">
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
                <span key={t} className="flex items-center gap-8 sm:gap-12">
                  <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase italic text-foreground">
                    {t}
                  </span>
                  <span className="text-velocity font-display text-xl sm:text-2xl">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-velocity mb-4 flex items-center gap-2">
                <Sparkles size={14} /> What I Do
              </p>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase max-w-[14ch] break-words">
                Driving digital <span className="text-velocity">growth</span> that matters
              </h2>
            </div>
            <p className="md:max-w-sm text-muted-foreground text-sm sm:text-base leading-relaxed md:self-end">
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
                className="tilt-card group bg-background p-6 sm:p-8 hover:bg-surface transition-colors duration-300"
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
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight mb-3">
                  {s.t}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-24 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase break-words">
              Let's build your <span className="italic text-kinetic">next</span> growth story.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="group flex items-center justify-between gap-4 px-6 sm:px-7 py-4 sm:py-5 min-h-12 bg-velocity text-primary-foreground font-bold uppercase text-xs sm:text-sm tracking-widest hover:bg-kinetic hover:text-accent-foreground transition-all duration-300"
            >
              Start a project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/919042551631"
              target="_blank"
              rel="noreferrer"
              className="px-6 sm:px-7 py-4 sm:py-5 min-h-12 border border-border text-foreground font-bold uppercase text-xs sm:text-sm tracking-widest text-center hover:bg-secondary transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {resumeOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-stretch md:items-center justify-center md:p-8 bg-background/90 md:bg-background/85 backdrop-blur-md reveal-rise"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: dragY ? `translateY(${dragY}px)` : undefined,
              transition: touchStartY.current === null ? "transform 280ms cubic-bezier(.16,1,.3,1)" : "none",
            }}
            className="relative w-full md:max-w-5xl h-[100dvh] md:h-[90vh] bg-surface border-0 md:border border-border shadow-2xl flex flex-col"
          >
            {/* Drag handle (mobile) */}
            <div
              className="md:hidden flex flex-col items-center pt-2 pb-1 bg-background border-b border-border touch-none select-none"
              onTouchStart={(e) => {
                touchStartY.current = e.touches[0].clientY;
              }}
              onTouchMove={(e) => {
                if (touchStartY.current === null) return;
                const delta = e.touches[0].clientY - touchStartY.current;
                if (delta > 0) setDragY(delta);
              }}
              onTouchEnd={() => {
                if (dragY > 110) closeModal();
                else setDragY(0);
                touchStartY.current = null;
              }}
            >
              <span className="block w-12 h-1.5 rounded-full bg-muted-foreground/40" aria-hidden />
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Swipe down to close
              </span>
            </div>

            <div className="flex items-center justify-between px-4 md:px-5 py-3 border-b border-border bg-background">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-velocity truncate">
                  / Resume Preview
                </p>
                <p className="font-display font-extrabold text-sm md:text-base uppercase tracking-tight truncate">
                  Kavi Priya R
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={resumeUrl}
                  download="R_Kavipriya_Resume.pdf"
                  className="magnetic-action hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-velocity text-primary-foreground font-bold uppercase text-[10px] tracking-widest hover:bg-kinetic hover:text-accent-foreground transition-all"
                >
                  <ArrowDownToLine size={13} />
                  Download
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground font-bold uppercase text-[10px] tracking-widest hover:bg-secondary transition-all"
                >
                  Open in tab
                </a>
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close resume preview"
                  className="p-2.5 md:p-2 border border-border hover:border-velocity hover:text-velocity transition-colors active:bg-secondary"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            {/* Mobile: inline rendered pages. Desktop: native PDF iframe. */}
            <div className="flex-1 bg-background overflow-y-auto overscroll-contain">
              <div className="md:hidden flex flex-col items-center gap-3 p-3">
                {["/resume-pages/page-1.jpg", "/resume-pages/page-2.jpg"].map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Resume page ${i + 1}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-auto border border-border shadow-lg bg-white"
                  />
                ))}
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground py-3">
                  — End of Resume —
                </p>
              </div>
              <iframe
                src={`${resumeUrl}#view=FitH`}
                title="Kavi Priya R Resume"
                className="hidden md:block w-full h-full"
              />
            </div>

            {/* Mobile sticky action bar */}
            <div
              className="sm:hidden grid grid-cols-2 gap-px bg-border border-t border-border"
              style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            >
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-4 bg-background text-foreground font-bold uppercase text-[11px] tracking-widest active:bg-secondary"
              >
                <ExternalLink size={14} />
                Open
              </a>
              <a
                href={resumeUrl}
                download="R_Kavipriya_Resume.pdf"
                className="flex items-center justify-center gap-2 py-4 bg-velocity text-primary-foreground font-bold uppercase text-[11px] tracking-widest active:bg-kinetic active:text-accent-foreground"
              >
                <ArrowDownToLine size={14} />
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
