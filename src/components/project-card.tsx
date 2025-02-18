import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border border-accent/20 bg-card text-card-foreground shadow-sm transition-shadow duration-300 hover:shadow-accent">
      <CardHeader>
        <CardTitle className="select-none text-xl font-bold text-accent">
          {title}
        </CardTitle>
        <CardDescription
          title={description.length > 58 ? description : undefined}
          className="mt-2 select-none truncate"
        >
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          asChild
          variant="outline"
          className="w-full transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
