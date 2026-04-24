import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
  head: () => ({
    meta: [
      { title: "Skills — Kavi Priya R" },
      {
        name: "description",
        content:
          "Digital marketing skills, tools, and soft skills of Kavi Priya R — covering WordPress, SEO, paid ads, and analytics.",
      },
      { property: "og:title", content: "Skills — Kavi Priya R" },
      {
        property: "og:description",
        content: "Technologies and tools I work with daily.",
      },
    ],
  }),
});

type Skill = { name: string; level: number };
type Group = { title: string; skills: Skill[]; accent: "velocity" | "kinetic" };

const groups: Group[] = [
  {
    title: "Digital Marketing",
    accent: "velocity",
    skills: [
      { name: "WordPress Development", level: 90 },
      { name: "SEO (On-Page)", level: 85 },
      { name: "Social Media Marketing", level: 88 },
      { name: "Content Strategy", level: 85 },
    ],
  },
  {
    title: "Paid Advertising",
    accent: "kinetic",
    skills: [
      { name: "Google Ads", level: 80 },
      { name: "Meta Ads (FB & IG)", level: 85 },
      { name: "Lead Generation", level: 82 },
      { name: "Performance Marketing", level: 78 },
    ],
  },
  {
    title: "Tools",
    accent: "velocity",
    skills: [
      { name: "Google Ads", level: 88 },
      { name: "Meta Ads Manager", level: 89 },
      { name: "Canva", level: 92 },
      { name: "Google Analytics", level: 70 },
      { name: "WordPress Plugins", level: 88 },
      { name: "SEOptimer", level: 75 },
    ],
  },
  {
    title: "Additional",
    accent: "kinetic",
    skills: [
      { name: "Email Marketing", level: 75 },
      { name: "Content Creation & Strategy", level: 85 },
    ],
  },
];

const softSkills = [
  { name: "Creative & Innovative Thinking", level: 90 },
  { name: "Strong Communication", level: 88 },
  { name: "Time Management & Prioritization", level: 85 },
  { name: "Fast Learner & Adaptable", level: 92 },
  { name: "Analytical & Problem-Solving", level: 85 },
  { name: "Detail-Oriented Approach", level: 88 },
  { name: "Team Collaboration", level: 86 },
  { name: "Ability to Handle Pressure", level: 84 },
];

function Bar({ level, accent }: { level: number; accent: "velocity" | "kinetic" }) {
  const color = accent === "velocity" ? "bg-velocity" : "bg-kinetic";
  return (
    <div className="h-1 w-full bg-secondary overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${level}%` }} />
    </div>
  );
}

function SkillsPage() {
  return (
    <SiteLayout>
      <section className="px-6 md:px-8 pt-20 md:pt-28 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-velocity mb-6">
            / Skills
          </p>
          <h1 className="font-display font-extrabold text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tighter uppercase italic">
            Tools, tactics &<br />
            <span className="text-kinetic">technologies.</span>
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-border">
                <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                  {g.title}
                </h2>
                <span className="font-mono text-xs text-muted-foreground">
                  {g.skills.length} skills
                </span>
              </div>
              <ul className="space-y-6">
                {g.skills.map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-sm font-semibold text-foreground">
                        {s.name}
                      </span>
                      <span className="font-mono text-xs tabular-nums text-muted-foreground">
                        {s.level}%
                      </span>
                    </div>
                    <Bar level={s.level} accent={g.accent} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-8 py-20 border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              Soft <span className="text-kinetic italic">skills.</span>
            </h2>
            <span className="font-mono text-xs text-muted-foreground hidden md:inline">
              How I work
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
            {softSkills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm font-semibold text-foreground">{s.name}</span>
                  <span className="font-mono text-xs tabular-nums text-velocity">
                    {s.level}
                  </span>
                </div>
                <Bar level={s.level} accent="velocity" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}