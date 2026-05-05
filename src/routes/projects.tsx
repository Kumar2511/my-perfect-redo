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
    title: "Meta Ads — Healthcare Client (Lead Generation)",
    blurb:
      "End-to-end Meta Ads lead generation campaigns for a healthcare client — 90 inbound calls at Rs.55.10 cost-per-call.",
    overview: [
      "Campaign 1 — Diabetes Traffic: 87 calls, Rs.55.10 cost-per-call, Rs.4,793.75 spend, 1,29,364 impressions, 46,877 reach",
      "Campaign 2 — Footcare Traffic: 3 calls, Rs.79.47 cost-per-call, Rs.238.42 spend, 5,623 impressions, 4,895 reach",
      "Handled audience targeting, Canva ad creatives, budget management, and performance optimization",
    ],
    stack: ["Meta Ads Manager", "Canva", "Audience Targeting"],
    report: "https://kavipriya-portfolio-tau.vercel.app/overall_clients_kpi_new.pdf",
  },
  {
    no: "02",
    title: "WordPress Development — Mahadev Logistics & Rerol Refinery",
    blurb:
      "Built and deployed two production WordPress sites — both indexed and ranking on Google Search.",
    overview: [
      "Built mahadevanlogistics.com — logistics & customs brokerage company website, fully indexed on Google",
      "Built rerolrefinery.com — industrial fuel & oil re-refining business website, indexed with keyword-rich search snippets",
      "Handled theme customization, plugin setup, content upload, SEO meta tags, and mobile-responsive design for both sites",
    ],
    stack: ["WordPress", "On-Page SEO", "Canva"],
    links: [
      { label: "Mahadevan Logistics", href: "https://mahadevanlogistics.com/" },
      { label: "Rerol Refinery", href: "https://rerolrefinery.com/" },
    ],
  },
  {
    no: "03",
    title: "SEO — Digital Training Institute",
    blurb:
      "Diagnosed and improved organic search performance — 690,000 impressions, 7.3 avg. position, and a 11,000+ click opportunity gap surfaced.",
    overview: [
      "Analyzed SEO performance: 690,000 impressions, 7.3 avg. position, 0.4% CTR, 11,000+ click gap identified",
      "Identified key issues: low CTR, weak meta tags, no FAQ schema, limited backlinks",
      "Improved SEO by optimizing meta titles & descriptions and implementing FAQ schema",
      "Initiated backlink building and planned SEO-focused blog content",
      "Organic Search: 2,514 users (48.8%), 3,387 sessions (52%), 15,101 events, 65.87% engagement rate",
      "Top page performance: IT Training page — 2,800 views, 1,400 active users, 33.7% bounce rate",
    ],
    stack: ["Google Search Console", "GA4", "On-Page SEO", "SEOptimer"],
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