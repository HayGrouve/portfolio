import { profile } from "./data";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: "https://www.tseko.site/",
  sameAs: [
    profile.socials.github,
    profile.socials.linkedin,
  ],
  description: profile.bio,
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Full Stack Development",
    "Cloud Architecture",
    "Node.js",
    "PostgreSQL",
  ],
};
