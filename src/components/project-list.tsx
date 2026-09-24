import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Button } from "./ui/button";

function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

function ProjectShowcase({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Preview */}
        <Link
          href={project.link ?? project.github ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className={cn(
            "relative block overflow-hidden rounded-2xl border bg-muted/40 p-2 lg:col-span-7",
            reversed && "lg:order-2",
          )}
        >
          <div className="overflow-hidden rounded-xl border bg-background">
            <div className="flex items-center gap-2 border-b px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              {project.link && (
                <span className="ml-3 truncate rounded-md bg-muted px-3 py-0.5 font-mono text-xs text-muted-foreground">
                  {hostname(project.link)}
                </span>
              )}
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  No preview
                </div>
              )}
            </div>
          </div>
          <span className="absolute right-5 top-16 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </Link>

        {/* Details */}
        <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-6 bg-border" />
            <span>{project.type} project</span>
          </div>
          <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {(project.challenge ?? project.solution) && (
            <dl className="mt-6 space-y-4 border-l pl-5">
              {project.challenge && (
                <div>
                  <dt className="text-sm font-medium">Challenge</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {project.challenge}
                  </dd>
                </div>
              )}
              {project.solution && (
                <div>
                  <dt className="text-sm font-medium">Solution</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {project.solution}
                  </dd>
                </div>
              )}
            </dl>
          )}

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border bg-secondary/50 px-3 py-1 font-mono text-xs text-secondary-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.link && (
              <Button asChild className="rounded-full">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live site <ArrowUpRight />
                </Link>
              </Button>
            )}
            {project.github && (
              <Button asChild variant="outline" className="rounded-full">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github /> Source
                </Link>
              </Button>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function ProjectList() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          index="01"
          label="Selected work"
          title="Things I've built recently"
          description="A few client and personal projects — from real-world business tools to products built for the people closest to me."
        />
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
