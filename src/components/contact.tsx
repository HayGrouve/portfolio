"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Copy, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "./reveal";
import { Button } from "./ui/button";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-3xl border bg-card px-6 py-16 text-center md:px-16 md:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_100%,#000,transparent)]" />
            <div className="absolute bottom-[-10rem] left-1/2 h-[24rem] w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--brand-from)/0.2),hsl(var(--brand-to)/0.08),transparent)] blur-2xl" />
          </div>

          <div className="relative">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-brand">05</span> — Contact
            </p>
            <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl">
              Have a project in mind?{" "}
              <span className="text-gradient">Let&apos;s talk.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
              I&apos;m always happy to chat about new opportunities, interesting
              products or ways I can help your team ship.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group h-12 rounded-full px-6"
              >
                <Link href={`mailto:${profile.email}`}>
                  Send an email
                  <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={copyEmail}
                className="h-12 rounded-full px-5 font-mono text-sm"
                aria-live="polite"
              >
                {copied ? <Check className="text-brand" /> : <Copy />}
                {copied ? "Copied to clipboard" : profile.email}
              </Button>
            </div>

            <Link
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              Or connect on LinkedIn
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
