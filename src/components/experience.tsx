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
          description="Product teams across web platforms, AI document processing, fintech and education."
        />

        <ol className="border-t">
          {experience.map((job, index) => {
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
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-muted-foreground">{job.role}</p>
                    {job.description && (
                      <p className="mt-4 max-w-2xl leading-relaxed">
                        {job.description}
                      </p>
                    )}
                    {job.achievements && job.achievements.length > 0 && (
                      <ul className="mt-5 space-y-2.5">
                        {job.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex gap-3 text-muted-foreground"
                          >
                            <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-brand/70" />
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
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
