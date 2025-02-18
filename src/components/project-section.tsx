"use client";

import { motion } from "framer-motion";
import ProjectCard from "./project-card";

interface Project {
  title: string;
  description: string;
  link: string;
  type: string;
}

interface ProjectSectionProps {
  title: string;
  projects: Project[];
}

export default function ProjectSection({
  title,
  projects,
}: ProjectSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-6 text-2xl font-bold text-accent">{title}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
}
