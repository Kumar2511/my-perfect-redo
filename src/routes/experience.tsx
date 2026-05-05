import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "Experience — Kavi Priya R" },
      {
        name: "description",
        content:
          "Professional journey of Kavi Priya R — Digital Marketing Executive at Why Global Services, with proven results in Meta Ads, SEO, and WordPress.",
      },
      { property: "og:title", content: "Experience — Kavi Priya R" },
      {
        property: "og:description",
        content: "My professional journey across digital marketing and operations roles.",
      },
    ],
  }),
});

const jobs = [
  {
    role: "Digital Marketing Executive",
    company: "Why Global Services",
    period: "2025 — Current",
    status: "Current",
    bullets: [
      "Ran Meta Ads campaigns for a healthcare client generating 90 calls at Rs.55.10 cost-per-call, 1,29,364 impressions, and 46,877 reach",
      "Executed SEO strategy for a digital training institute achieving 690,000 impressions, avg. position 7.3, 2,440 clicks, and 65.87% organic session engagement rate",
      "Identified 11,000+ click opportunity gap (current CTR 0.4%) and recommended meta title and snippet optimizations to target 2%+ CTR",
      "Built and deployed mahadevanlogistics.com and rerolrefinery.com on WordPress — both indexed and ranking on Google Search",
      "Handled SEO optimization including on-page SEO, keyword usage, and content improvements",
      "Managed keyword clusters across brand, commercial, and informational intent; drove Organic Search to 48.8% of total users (2,514 users) and 52% of total sessions",
      "Created ad creatives using Canva, managed social media content calendars, and delivered weekly KPI reports tracking CTR, CPC, CPL, and conversions",
    ],
  },
];

function ExperiencePage() {
  return (
    <SiteLayout>
      <section className="px-6 md:px-8 pt-20 md:pt-28 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-velocity mb-6">
            / Experience
          </p>
          <h1 className="font-display font-extrabold text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tighter uppercase italic">
            My professional<br />
            journey <span className="text-kinetic">so far.</span>
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* timeline line */}
            <div className="absolute left-0 md:left-[180px] top-0 bottom-0 w-px bg-border" aria-hidden />

            <div className="space-y-20">
              {jobs.map((job, idx) => (
                <article key={job.role} className="relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-12 pl-6 md:pl-0">
                  {/* dot */}
                  <span className="absolute left-[-5px] md:left-[174px] top-2 size-3 rounded-full bg-velocity ring-4 ring-background" />

                  <div className="md:text-right md:pr-12">
                    <span
                      className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 mb-3 ${
                        job.status === "Current"
                          ? "bg-kinetic text-accent-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {job.status}
                    </span>
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                      {job.period}
                    </p>
                    <p className="font-display text-2xl font-bold uppercase mt-3 md:hidden">
                      {job.role}
                    </p>
                  </div>

                  <div className="md:pl-12">
                    <h2 className="hidden md:block font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight leading-tight">
                      {job.role}
                    </h2>
                    <p className="text-velocity font-semibold mt-2">{job.company}</p>

                    <ul className="mt-6 space-y-3">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="flex gap-4 text-foreground/85 leading-relaxed">
                          <span className="font-mono text-velocity text-xs pt-1.5 shrink-0">
                            ▸
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {idx === 0 && null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}