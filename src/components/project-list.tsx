import ProjectSection from "./project-section";

const projects = [
  {
    title: "Cooking Book",
    description: "This is my Cooking Book",
    link: "https://recipes-ofqemhjkv-haygrouves-projects.vercel.app",
    type: "personal",
  },
  {
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts and nutrition",
    link: "https://github.com/yourusername/fitness-tracker",
    type: "personal",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with Stripe A full-stack e-commerce solution built with Stripe A full-stack e-commerce solution built with Stripe",
    link: "https://github.com/yourusername/ecommerce-platform",
    type: "client",
  },
  {
    title: "Corporate Website",
    description: "Responsive website for a local business",
    link: "https://github.com/yourusername/corporate-website",
    type: "client",
  },
  {
    title: "Weather App",
    description: "Real-time weather application using OpenWeatherMap API",
    link: "https://github.com/yourusername/weather-app",
    type: "personal",
  },
  {
    title: "Task Manager",
    description: "A productivity app for managing daily tasks and projectsss",
    link: "https://github.com/yourusername/task-manager",
    type: "client",
  },
];

export default function ProjectList() {
  const personalProjects = projects.filter(
    (project) => project.type === "personal",
  );
  const clientProjects = projects.filter(
    (project) => project.type === "client",
  );

  return (
    <div className="space-y-12">
      <ProjectSection title="Personal Projects" projects={personalProjects} />
      <ProjectSection title="Client Projects" projects={clientProjects} />
    </div>
  );
}
