import { Link } from "@tanstack/react-router";
import { ArrowUp, Github, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "@/lib/portfolio-data";

const SOCIALS = [
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

export function SiteFooter() {
  const { data: profile } = useQuery({ queryKey: ["profile"], queryFn: fetchProfile });

  return (
    <footer className="section-alt border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <span className="font-display text-lg font-bold">{profile?.name ?? ""}</span>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{profile?.tagline ?? ""}</p>
          <div className="mt-5 flex gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="grid size-10 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About" },
              { to: "/projects", label: "Projects" },
              { to: "/youtube", label: "YouTube" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>UI/UX Design</li>
            <li>Social Media Marketing</li>
            <li>Video Editing</li>
            <li>Brand Identity</li>
            <li>
              <Link to="/id-cards" className="transition-colors hover:text-primary">
                ID Card Design
              </Link>
            </li>
          </ul>
          <a
            href={`mailto:${profile?.email ?? ""}`}
            className="mt-4 inline-flex items-center gap-2 text-sm text-primary"
          >
            <Mail className="size-4" /> {profile?.email ?? ""}
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {profile?.name ?? ""}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowUp className="size-3.5" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}