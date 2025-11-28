"use client";

import { motion, useSpring } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { profile } from "@/lib/data";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);
  const [showCursorGlow, setShowCursorGlow] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth spring animation for cursor following
  const cursorX = useSpring(0, { stiffness: 150, damping: 15 });
  const cursorY = useSpring(0, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cursorX.set(x);
        cursorY.set(y);

        // Show cursor glow and reset hide timeout
        setShowCursorGlow(true);

        // Clear existing timeout
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
        }

        // Set new timeout to hide after 3 seconds
        hideTimeoutRef.current = setTimeout(() => {
          setShowCursorGlow(false);
        }, 3000);
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      setShowCursorGlow(true);
      // Clear any existing timeout when entering
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setShowCursorGlow(false);
      // Clear timeout when leaving
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseenter", handleMouseEnter);
      section.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseenter", handleMouseEnter);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }
      // Clear timeout on cleanup
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [cursorX, cursorY]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden py-20"
    >
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 z-[15] overflow-visible">
        <motion.div
          className="absolute h-48 w-48 rounded-full bg-primary/20 blur-3xl md:h-96 md:w-96"
          style={{ left: "10%", top: "10%" }}
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{
            x: [0, 75, 40, 100, 25, 0],
            y: [0, 50, 100, 75, 40, 0],
            scale: [1, 1.3, 1.1, 1.2, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute h-40 w-40 rounded-full bg-primary/20 blur-3xl md:h-80 md:w-80"
          style={{ right: "5%", top: "70%" }}
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{
            x: [0, -60, -100, -40, -75, 0],
            y: [0, -40, -75, -100, -50, 0],
            scale: [1, 1.2, 1.05, 1.15, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute hidden h-36 w-36 rounded-full bg-primary/20 blur-3xl md:block md:h-72 md:w-72"
          style={{ left: "70%", top: "20%" }}
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{
            x: [0, 50, 90, 30, 75, 0],
            y: [0, -30, -60, -90, -45, 0],
            scale: [1, 1.25, 1.05, 1.2, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Mouse-following cursor glow */}
        {isHovering && (
          <motion.div
            className="absolute h-40 w-40 rounded-full bg-primary/20 blur-3xl"
            style={{
              x: cursorX,
              y: cursorY,
              left: -80, // Half of width (160/2) to center it on cursor
              top: -80, // Half of height (160/2) to center it on cursor
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: showCursorGlow ? 1 : 0,
              scale: showCursorGlow ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        )}
      </div>
      <div className="container relative z-20 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-6"
        >
          <h2 className="text-xl font-medium text-primary drop-shadow-lg">
            Hi, I&apos;m {profile.name}
          </h2>
          <h1 className="text-5xl font-bold leading-tight tracking-tighter drop-shadow-xl sm:text-7xl">
            {profile.role}
            <br />
            <span className="text-muted-foreground">building for the web.</span>
          </h1>
          <p className="max-w-2xl text-xl text-muted-foreground drop-shadow-md">
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
