import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

const socials = [
  { href: profile.socials.github, label: "GitHub", icon: Github },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <div>
              <p className="font-semibold tracking-tight">{profile.name}</p>
              <p className="text-sm text-muted-foreground">{profile.role}</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            {socials.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="h-[1.1rem] w-[1.1rem]" />
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t pt-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <Link
            href="#top"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
