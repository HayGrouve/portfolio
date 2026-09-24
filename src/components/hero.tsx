"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { experience, profile, skills } from "@/lib/data";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  };
}

const stats = [
  { value: "7+", label: "Years building for the web" },
  { value: String(experience.length), label: "Product companies" },
  { value: "React", label: "Next.js · TypeScript · Node" },
];

const socials = [
  { href: profile.socials.github, label: "GitHub", icon: Github },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

const allSkills = skills.flatMap((group) => group.skills);

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44"
    >
      {/* Backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-radial absolute inset-0" />
        <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--brand-from)/0.18),transparent)] blur-2xl" />
        <div className="absolute left-[60%] top-[-6rem] h-[24rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,hsl(var(--brand-to)/0.14),transparent)] blur-2xl" />
      </div>

      <div className="container">
        <motion.p
          {...fadeUp(0)}
          className="mb-4 font-mono text-sm text-muted-foreground"
        >
          {profile.name} — {profile.role}
        </motion.p>

        <motion.h1
          {...fadeUp(0.16)}
          className="max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl lg:text-[5.25rem]"
        >
          Crafting fast, thoughtful <br className="hidden md:block" />
          <span className="text-gradient">products for the web.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.24)}
          className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          {...fadeUp(0.32)}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg" className="group h-12 rounded-full px-6">
            <Link href="#projects">
              View my work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full bg-background/60 px-6 backdrop-blur"
          >
            <Link href="#contact">Get in touch</Link>
          </Button>
          <div className="ml-1 flex items-center gap-1">
            {socials.map(({ href, label, icon: Icon }) => (
              <Button
                key={label}
                asChild
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-full text-muted-foreground hover:text-foreground"
              >
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <Icon className="!size-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.dl
          {...fadeUp(0.4)}
          className="mt-16 grid grid-cols-1 divide-y rounded-2xl border bg-card/50 backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:mt-24"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 p-6">
              <dt className="order-2 text-sm text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="order-1 text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Tech marquee */}
      <motion.div
        {...fadeUp(0.5)}
        className="mask-fade-x mt-16 overflow-hidden border-y py-5"
        aria-label="Technologies I work with"
      >
        <div className="flex w-max animate-marquee gap-12 motion-reduce:animate-none">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span
              key={i}
              aria-hidden={i >= allSkills.length}
              className="flex items-center gap-12 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-muted-foreground"
            >
              {skill}
              <span className="h-1 w-1 rounded-full bg-border" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
