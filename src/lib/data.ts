export interface Project {
  title: string;
  description: string;
  challenge?: string;
  solution?: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  type: "personal" | "client" | "work";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export const profile = {
  name: "Tsvetomir Tsekov",
  role: "Senior Full Stack Developer",
  bio: "Full stack developer with 7+ years of experience building scalable-ish web applications. Specialized in React/Next.js ecosystems. Passionate about clean code and user-friendly design.",
  location: "Sofia, Bulgaria / Remote",
  email: "tsvetomir.kr.tsekov@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/tsvetomir-tsekov-a9317b1b3/",
    github: "https://github.com/HayGrouve",
  },
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "TypeScript", "ShadCN/ui"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Serverless", "Microservices"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Convex"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "AWS", "Git", "Bitbucket", "Jira", "Vercel"],
  },
];

export const experience: Experience[] = [
  {
    company: "ScaleHub",
    role: "Frontend Web Developer",
    period: "Mar 2023 - Present",
    description:
      "Developing a web portal for digitizing documents and utilizing crowd workers.",
    achievements: [
      "Assisted in developing one of the most critical components of the project.",
      "Introduced and standardized modern web development patterns within the team.",
    ],
  },
  {
    company: "Devexperts",
    role: "Frontend Web Developer",
    period: "Oct 2022 - Feb 2023",
    description:
      "Part of a team developing and supporting an online finance and investment platform.",
    achievements: [
      "Contributed to the maintenance and feature development of a high-traffic financial platform.",
      "Collaborated with cross-functional teams to ensure platform stability and performance.",
    ],
  },
  {
    company: "Nemetschek",
    role: "Web Software Developer",
    period: "Nov 2020 - Oct 2022",
    description:
      "Developed a digital learning platform focused on educational content for children.",
    achievements: [
      "Led a team of interns, providing mentorship and code reviews.",
      "Represented the technical team in international meetings across Europe.",
      "Focused on the 5 grade curriculum for kids, developing interactive digital books and exercises.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Alisa",
    description:
      "Vet clinic CRM. Keep track of animals, owners, visits and medical history, invoice generation/finance dashboard.",
    challenge:
      "The main technical challenge was the global search in the project. With one button you can search the entire database.",
    solution:
      "Convex came into play; I indexed every table in the DB and based the search results on that.",
    technologies: ["Next.js", "Convex", "Shadcn/ui"],
    link: "https://alisa-vet.vercel.app/login",
    github: "https://github.com/HayGrouve/zoo",
    image: "/alisa.png",
    type: "client",
  },
  {
    title: "Wedding",
    description:
      "Wedding invitation and organizational system. You can RSVP and manage your guests from the website.",
    challenge:
      "The main challenge was getting the bride to be happy with the look of the website.",
    solution:
      "Solved through patience, iterative design, and clear communication. Also, I used a lot of animations to make the website more engaging.",
    technologies: ["Next.js", "TailwindCSS", "Redis"],
    link: "https://www.anisvatbageorgi.fun/",
    github: "https://github.com/HayGrouve/wedding",
    image: "/wedding.png",
    type: "client",
  },
  {
    title: "Chef",
    description:
      "Online cook book that helps you cook your favorite recipes. Create a weekly meal plan and do your shopping list.",
    challenge: "Creating a distraction-free UI for cooking.",
    solution:
      "Multi-step wizards help a lot when navigating users through a big set of data.",
    technologies: ["Next.js", "Home Cook", "Clerk"],
    link: "https://chef-black.vercel.app/",
    github: "https://github.com/HayGrouve/chef",
    image: "/chef.png",
    type: "personal",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Dan Dubenir",
    role: "CEO",
    company: "ScaleHub",
    content:
      "Tsvetomir is a highly skilled developer who consistently delivers quality work. His ability to introduce modern patterns and tackle critical components has been invaluable to our team.",
  },
  {
    name: "Viktor Minkovsky",
    role: "Team Lead",
    company: "Nemetschek",
    content:
      "It was a pleasure working with Tsvetomir. He not only delivered on his technical responsibilities but also showed great leadership in mentoring interns and representing our team internationally.",
  },
];
