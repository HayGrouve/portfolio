"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { navLinks, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
          else if (
            entry.target.id === ids[0] &&
            entry.boundingClientRect.top > 0
          )
            setActive(null);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border px-2 pl-4 transition-all duration-300",
          scrolled
            ? "border-border bg-background/70 shadow-lg shadow-black/[0.03] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Link
          href="#top"
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <Image
            src="/logo.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
            priority
          />
          <span>Tseko</span>
        </Link>

        <nav className="hidden items-center md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-secondary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <ModeToggle />
          <Button
            asChild
            size="sm"
            className="hidden h-9 rounded-full px-4 sm:inline-flex"
          >
            <Link href="#contact">
              Contact <ArrowUpRight />
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <SheetHeader>
                <SheetTitle className="text-left font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 pt-6">
                {[...navLinks, { name: "Contact", href: "#contact" }].map(
                  (link, i) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-4 border-b py-4 text-2xl font-semibold tracking-tight"
                    >
                      <span className="font-mono text-xs text-muted-foreground">
                        0{i + 1}
                      </span>
                      <span className="transition-colors group-hover:text-brand">
                        {link.name}
                      </span>
                    </Link>
                  ),
                )}
              </nav>
              <p className="mt-auto text-sm text-muted-foreground">
                {profile.email}
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  );
}
