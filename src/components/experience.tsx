import { experience } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export default function Experience() {
  return (
    <section id="experience" className="border-t bg-muted/30 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          index="02"
          label="Experience"
          title="Where I've worked"
          description="Product teams across document automation, fintech and education."
        />

        <ol className="border-t">
          {experience.map((job, index) => {
            const current = job.period.includes("Present");
            return (
              <li key={job.company} className="border-b">
                <Reveal
                  delay={index * 0.05}
                  className="grid gap-4 py-10 md:grid-cols-12 md:gap-8"
                >
                  <div className="md:col-span-3">
                    <p className="font-mono text-sm text-muted-foreground">
                      {job.period}
                    </p>
                    {current && (
                      <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        Current
                      </span>
                    )}
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-muted-foreground">{job.role}</p>
                    <p className="mt-4 max-w-2xl leading-relaxed">
                      {job.description}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {job.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex gap-3 text-muted-foreground"
                        >
                          <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-brand/70" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
