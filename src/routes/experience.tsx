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
          "Professional journey of Kavi Priya R — Digital Marketing Analyst at Why Global Services, previously at Foxconn Hon Hai Technology.",
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
    role: "Digital Marketing Analyst",
    company: "Why Global Services",
    period: "Nov 2025 — Present",
    status: "Current",
    bullets: [
      "Managing WordPress websites including page creation, content updates, and layout customization",
      "Planning, creating, and running paid ad campaigns on Google Ads and Meta Ads (Facebook & Instagram) for lead generation and brand awareness",
      "Handling SEO optimization including on-page SEO, keyword usage, and content improvements",
      "Planning and executing social media content strategies for platforms like Instagram and Facebook",
      "Designing posts and ad creatives using Canva",
      "Managing content calendars and scheduling posts",
      "Monitoring ad and campaign performance using metrics like CTR, engagement, and conversions",
      "Optimizing campaigns based on performance data to improve results",
      "Supporting lead generation activities through digital marketing strategies",
    ],
  },
  {
    role: "Production Associate",
    company: "Foxconn Hon Hai Technology",
    period: "2023 — Oct 2025",
    status: "Previous",
    bullets: [
      "Worked in high-precision electronics manufacturing operations",
      "Built strong attention-to-detail, process discipline, and team collaboration",
      "Adapted quickly to fast-paced environments with strict quality standards",
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