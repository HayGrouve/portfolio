"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-6"
        >
          <h2 className="text-xl font-medium text-primary">Hi, I&apos;m {profile.name}</h2>
          <h1 className="text-5xl font-bold leading-tight tracking-tighter sm:text-7xl">
            {profile.role}
            <br />
            <span className="text-muted-foreground">building for the web.</span>
          </h1>
          <p className="max-w-2xl text-xl text-muted-foreground">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link href={profile.socials.github} target="_blank">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={profile.socials.linkedin} target="_blank">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={`mailto:${profile.email}`}>
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

