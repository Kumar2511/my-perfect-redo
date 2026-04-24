import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ExternalLink, FileText } from "lucide-react";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Kavi Priya R" },
      {
        name: "description",
        content:
          "Real-world projects in WordPress development, SEO, and Paid Advertising — by Kavi Priya R.",
      },
      { property: "og:title", content: "Projects — Kavi Priya R" },
      {
        property: "og:description",
        content: "Real-world digital marketing projects and case studies.",
      },
    ],
  }),
});

const projects = [
  {
    no: "01",
    title: "WordPress Website Development & Management",
    blurb:
      "Developed and maintained multiple WordPress websites focusing on performance, design, and usability.",
    overview: [
      "Created and managed WordPress websites including page creation, content upload, and layout customization",
      "Customized themes and managed plugins for improved performance",
      "Designed banners and product images using Canva",
      "Ensured responsive design and user-friendly structure",
      "Implemented basic SEO practices during development",
    ],
    stack: ["WordPress", "Canva", "Basic SEO"],
    links: [
      { label: "Mahadevan Logistics", href: "https://mahadevanlogistics.com/" },
      { label: "Rerol Refinery", href: "https://rerolrefinery.com/" },
      { label: "Picco Infra (Interior Design)" },
      { label: "Welfried (Training Institute)" },
    ],
  },
  {
    no: "02",
    title: "Search Engine Optimization (SEO)",
    blurb:
      "Optimized websites to improve search engine rankings and enhance user experience.",
    overview: [
      "Performed on-page SEO including keyword optimization, meta tags, and content structuring",
      "Improved website visibility using proper SEO practices",
      "Optimized pages for better ranking and performance",
    ],
    stack: ["WordPress", "SEO Tools", "SEOptimer"],
    links: [
      { label: "Rerol Website", href: "https://rerolrefinery.com/" },
      { label: "Mahadevan Logistics", href: "https://mahadevanlogistics.com/" },
    ],
  },
  {
    no: "03",
    title: "Paid Advertising — Meta Ads & Google Ads",
    blurb:
      "Managed paid advertising campaigns to generate leads and improve conversions.",
    overview: [
      "Planned and executed Meta Ads and Google Ads campaigns",
      "Performed audience targeting and created ad creatives using Canva",
      "Managed campaign setup, budget, and placements",
      "Monitored performance using metrics like CTR and conversions",
      "Optimized campaigns for better ROI",
    ],
    stack: ["Meta Ads Manager", "Google Ads", "Canva", "Google Analytics"],
    report: "https://kavipriya-portfolio-tau.vercel.app/overall_clients_kpi_new.pdf",
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="px-6 md:px-8 pt-20 md:pt-28 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-velocity mb-6">
            / Projects
          </p>
          <h1 className="font-display font-extrabold text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tighter uppercase italic">
            Real-world <span className="text-kinetic">work,</span><br />
            measurable results.
          </h1>
          <p className="mt-8 max-w-2xl text-muted-foreground text-lg">
            A selection of projects showcasing my digital marketing expertise across
            web, search, and paid channels.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-8 py-16">
        <div className="max-w-7xl mx-auto space-y-px">
          {projects.map((p) => (
            <article
              key={p.no}
              className="group bg-surface hover:bg-secondary transition-colors duration-300 p-8 md:p-12 border border-border"
            >
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-3">
                  <p className="font-mono text-xs text-velocity tracking-widest mb-4">
                    {p.no} / Case Study
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-background text-foreground border border-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-12 md:col-span-9">
                  <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase leading-[0.95] tracking-tight mb-4">
                    {p.title}
                  </h2>
                  <p className="text-foreground/80 text-base md:text-lg max-w-3xl leading-relaxed">
                    {p.blurb}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                        Project Overview
                      </p>
                      <ul className="space-y-2.5">
                        {p.overview.map((o, i) => (
                          <li key={i} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                            <span className="text-velocity font-mono shrink-0">▸</span>
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      {p.links && (
                        <>
                          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                            Featured Sites
                          </p>
                          <ul className="space-y-3">
                            {p.links.map((l) => (
                              <li key={l.label}>
                                {l.href ? (
                                  <a
                                    href={l.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group/link inline-flex items-center gap-2 text-foreground hover:text-kinetic transition-colors font-semibold"
                                  >
                                    {l.label}
                                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                                  </a>
                                ) : (
                                  <span className="text-muted-foreground italic">
                                    {l.label}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {p.report && (
                        <a
                          href={p.report}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-3 px-5 py-3 bg-kinetic text-accent-foreground font-bold uppercase text-xs tracking-widest hover:bg-velocity hover:text-primary-foreground transition-all"
                        >
                          <FileText size={14} />
                          View Ads Report (PDF)
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}