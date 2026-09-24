import { Database, LayoutTemplate, Server, Wrench } from "lucide-react";
import { skills } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = {
  Frontend: LayoutTemplate,
  Backend: Server,
  Database: Database,
  "DevOps & Tools": Wrench,
} as const;

const blurbs: Record<string, string> = {
  Frontend: "Accessible, responsive interfaces with a focus on detail.",
  Backend: "APIs and services that stay simple as they scale.",
  Database: "Modelling data for fast queries and real-time apps.",
  "DevOps & Tools": "Shipping reliably, from local dev to production.",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          index="03"
          label="Toolkit"
          title="The stack I reach for"
          description="Comfortable across the whole stack, with a strong home in the React and Next.js ecosystem."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, index) => {
            const Icon = icons[group.category as keyof typeof icons] ?? Wrench;
            return (
              <Reveal
                key={group.category}
                delay={index * 0.06}
                className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-6 transition-colors hover:border-foreground/20"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(closest-side,hsl(var(--brand)/0.18),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border bg-secondary/60">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{group.category}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {blurbs[group.category]}
                </p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border bg-background px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
