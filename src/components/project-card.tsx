import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
            No Image
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
          <Badge variant={project.type === "work" ? "default" : "secondary"}>
            {project.type}
          </Badge>
        </div>
        <CardDescription className="text-base">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        {project.challenge && (
          <div>
            <h4 className="mb-1 text-sm font-semibold">Challenge</h4>
            <p className="text-sm text-muted-foreground">{project.challenge}</p>
          </div>
        )}
        {project.solution && (
          <div>
            <h4 className="mb-1 text-sm font-semibold">Solution</h4>
            <p className="text-sm text-muted-foreground">{project.solution}</p>
          </div>
        )}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2 pt-4">
        {project.link && (
          <Button asChild variant="default" className="flex-1" size="sm">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              Demo <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
        {project.github && (
          <Button asChild variant="outline" className="flex-1" size="sm">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code <Github className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
