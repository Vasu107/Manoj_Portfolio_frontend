import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, type ReactNode } from "react";
import {
  ArrowRight, Award, CheckCircle2, Download, Eye, ExternalLink, Mail, Play,
  Quote, Star, TrendingUp, Users, Youtube as YoutubeIcon,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Counter, Reveal, TypingRoles } from "@/components/site/motion-primitives";
import { IMAGES } from "@/lib/images";
import {
  fetchProfile, fetchRoles, fetchServices, fetchProjects, fetchSkills,
  fetchProcess, fetchStats, fetchTestimonials, fetchTimeline, fetchAchievements,
  fetchVideos, fetchChannelStats, fetchIdGallery, fetchCampaigns,
  fetchGrowthData, fetchPosts,
  PROJECT_CATEGORIES, ID_CATEGORIES,
  type Service, type Project, type SkillGroup, type Testimonial,
  type IdGalleryItem, type Campaign, type GrowthDataPoint, type Post,
  type Stat, type ChannelStat, type ProcessStep, type TimelineEntry, type Video,
} from "@/lib/portfolio-data";
const profileImg = "/images/profile.jpg";

// ─── Skeleton helper ───────────────────────────────────────────────────────
function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-2xl bg-accent ${className}`} />;
}

export function Section({
  id, children, alt = false, className = "",
}: { id?: string; children: ReactNode; alt?: boolean; className?: string }) {
  return (
    <section id={id} className={`${alt ? "section-alt" : ""} py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow, title, subtitle, center = true,
}: { eyebrow: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}

export function Hero() {
  const { data: profile } = useQuery({ queryKey: ["profile"], queryFn: fetchProfile });
  const { data: roles } = useQuery({ queryKey: ["roles"], queryFn: fetchRoles });
  const { data: stats } = useQuery({ queryKey: ["stats"], queryFn: fetchStats });

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="gradient-secondary absolute inset-0 -z-10" />
      <div className="absolute -left-24 top-10 -z-10 size-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 -z-10 size-80 rounded-full bg-secondary/40 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-soft"
          >
            <span className="size-2 rounded-full bg-primary" /> Available for new projects
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-4xl font-bold leading-[1.08] sm:text-6xl"
          >
            {profile?.name ?? <Skeleton className="h-14 w-80" />}
            <span className="mt-2 block text-2xl font-semibold sm:text-4xl">
              {roles ? <TypingRoles roles={roles} /> : <Skeleton className="h-10 w-56" />}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile?.tagline ?? <Skeleton className="h-20 w-full" />}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/projects">View Portfolio <ArrowRight /></Link>
            </Button>
            <Button asChild variant="soft" size="xl">
              <Link to="/contact">Hire Me</Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="/resume.txt" download>
                <Download /> Resume
              </a>
            </Button>
            <Button asChild variant="ghost" size="xl">
              <Link to="/contact"><Mail /> Contact Me</Link>
            </Button>
          </motion.div>
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {stats
              ? stats.slice(0, 3).map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                    <p className="font-display text-xl font-bold text-primary">
                      <Counter value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))
              : [0, 1, 2].map((k) => <Skeleton key={k} className="h-20" />)}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="gradient-primary absolute inset-0 rotate-6 rounded-[2.5rem] opacity-70 blur-sm" />
          <img
            src={profileImg} alt={`${profile?.name ?? ""}, ${profile?.role ?? ""}`} width={900} height={1100}
            className="relative rounded-[2.5rem] border border-border object-cover shadow-elegant"
          />
          <div className="glass animate-float absolute -left-6 top-10 rounded-2xl px-4 py-3 shadow-soft">
            <p className="text-xs text-muted-foreground">Client rating</p>
            <p className="flex items-center gap-1 text-sm font-semibold">
              5.0 <Star className="size-3.5 fill-primary text-primary" />
            </p>
          </div>
          <div className="glass animate-float absolute -right-4 bottom-12 rounded-2xl px-4 py-3 shadow-soft [animation-delay:1.5s]">
            <p className="text-xs text-muted-foreground">Subscribers</p>
            <p className="text-sm font-semibold">128K on YouTube</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutSection({ full = false }: { full?: boolean }) {
  const { data: achievements } = useQuery({ queryKey: ["achievements"], queryFn: fetchAchievements });
  const { data: timeline } = useQuery({ queryKey: ["timeline"], queryFn: fetchTimeline });

  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            center={false}
            eyebrow="About Me"
            title="A multi-disciplinary creative partner, not just a designer"
            subtitle="Eight years spent between product design studios, marketing teams and print floors. That mix means one person can take a brand from positioning to interface to campaign to a printed badge on someone's lanyard."
          />
          <Reveal delay={0.1} className="mt-8 grid gap-3 sm:grid-cols-2">
            {achievements
              ? achievements.map((a) => (
                  <div key={a} className="flex gap-2.5 rounded-2xl border border-border bg-card p-4 text-sm shadow-soft">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{a}</span>
                  </div>
                ))
              : [0, 1, 2, 3].map((k) => <Skeleton key={k} className="h-16" />)}
          </Reveal>
          {full && (
            <Reveal delay={0.15} className="mt-6">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Start a project <ArrowRight /></Link>
              </Button>
            </Reveal>
          )}
        </div>

        <div className="relative">
          <div className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px bg-border" />
          <div className="space-y-6">
            {timeline
              ? timeline.map((t, i) => (
                  <Reveal key={t.year} delay={i * 0.06} className="relative pl-12">
                    <span className="gradient-accent absolute left-0 top-1 grid size-8 place-items-center rounded-full text-[10px] font-bold text-primary-foreground">
                      {t.year.slice(2)}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{t.year}</p>
                    <h3 className="mt-1 text-base font-semibold">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                  </Reveal>
                ))
              : [0, 1, 2, 3, 4].map((k) => <Skeleton key={k} className="h-20 ml-12" />)}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ServicesSection({ limit }: { limit?: number }) {
  const { data: services } = useQuery({ queryKey: ["services"], queryFn: fetchServices });
  const list = services ? (limit ? services.slice(0, limit) : services) : [];

  return (
    <Section id="services" alt>
      <SectionHeading
        eyebrow="Services"
        title="Everything a modern brand needs, under one roof"
        subtitle="Pick a single service or hand over the whole creative function."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services
          ? list.map((s: Service, i: number) => (
              <Reveal key={s.title} delay={(i % 4) * 0.05}>
                <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-elegant">
                  <span className="gradient-accent grid size-11 place-items-center rounded-2xl text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                    <s.iconComponent className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))
          : [0,1,2,3,4,5,6,7].slice(0, limit ?? 8).map((k) => <Skeleton key={k} className="h-44" />)}
      </div>
      {limit && (
        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">See all {services?.length ?? ""} services <ArrowRight /></Link>
          </Button>
        </Reveal>
      )}
    </Section>
  );
}

export function ProjectsSection({ limit, filterable = false }: { limit?: number; filterable?: boolean }) {
  const [active, setActive] = useState<string>("All");
  const { data: projects } = useQuery({ queryKey: ["projects"], queryFn: fetchProjects });

  const base = projects
    ? (active === "All" ? projects : projects.filter((p: Project) => p.category === active))
    : [];
  const list = limit ? base.slice(0, limit) : base;

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected work across product, brand and print"
        subtitle="Each engagement below shipped to real users, real print runs or real campaigns."
      />

      {filterable && (
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {PROJECT_CATEGORIES.map((c) => (
            <button
              key={c} type="button" onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active === c
                  ? "gradient-accent border-transparent text-primary-foreground shadow-soft"
                  : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects ? (
          <AnimatePresence mode="popLayout">
            {list.map((p: Project, i: number) => (
              <motion.article
                key={p.title} layout
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={IMAGES[p.image as keyof typeof IMAGES]} alt={p.title} loading="lazy" width={1200} height={800}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="glass absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2">
                    <Button asChild size="sm" variant="hero">
                      <Link to="/contact"><ExternalLink /> Live Demo</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link to="/contact"><Eye /> Case Study</Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        ) : (
          [0,1,2].map((k) => <Skeleton key={k} className="h-80" />)
        )}
      </div>

      {limit && (
        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/projects">Browse all projects <ArrowRight /></Link>
          </Button>
        </Reveal>
      )}
    </Section>
  );
}

export function YouTubeSection({ compact = false }: { compact?: boolean }) {
  const { data: videos } = useQuery({ queryKey: ["videos"], queryFn: fetchVideos });
  const { data: channelStats } = useQuery({ queryKey: ["channel-stats"], queryFn: fetchChannelStats });
  const list = videos ? (compact ? videos.slice(0, 2) : videos) : [];

  return (
    <Section id="youtube" alt>
      <SectionHeading
        eyebrow="YouTube Creator"
        title="A channel built on design education"
        subtitle="128K subscribers, 4.6M views and a publishing rhythm that never slips."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channelStats
          ? channelStats.map((s: ChannelStat, i: number) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
                  <YoutubeIcon className="mx-auto size-5 text-primary" />
                  <p className="mt-3 font-display text-2xl font-bold">
                    <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))
          : [0,1,2,3].map((k) => <Skeleton key={k} className="h-36" />)}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {videos
          ? list.map((v: Video, i: number) => (
              <Reveal key={v.id} delay={(i % 2) * 0.08}>
                <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="aspect-video">
                    <iframe
                      className="size-full" src={`https://www.youtube.com/embed/${v.id}`} title={v.title}
                      loading="lazy" allowFullScreen
                      allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4 p-5">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">{v.category}</span>
                      <h3 className="mt-1 text-sm font-semibold">{v.title}</h3>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                      <Play className="size-3.5" /> {v.views}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))
          : [0,1].map((k) => <Skeleton key={k} className="h-64" />)}
      </div>

      {compact && (
        <Reveal className="mt-10 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/youtube">Explore the channel <ArrowRight /></Link>
          </Button>
        </Reveal>
      )}
    </Section>
  );
}

export function IdCardSection({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<string>("All");
  const [preview, setPreview] = useState<string | null>(null);
  const { data: gallery } = useQuery({ queryKey: ["id-gallery"], queryFn: fetchIdGallery });

  const base = gallery
    ? (active === "All" ? gallery : gallery.filter((g: IdGalleryItem) => g.category === active))
    : [];
  const list = compact ? (gallery ?? []).slice(0, 3) : base;

  return (
    <Section id="id-cards">
      <SectionHeading
        eyebrow="ID Card Design"
        title="Identity cards that survive the real world"
        subtitle="Bulk-ready artwork with data merge, bleed, barcodes and security elements."
      />

      {!compact && (
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {ID_CATEGORIES.map((c) => (
            <button
              key={c} type="button" onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active === c
                  ? "gradient-accent border-transparent text-primary-foreground shadow-soft"
                  : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery
          ? list.map((g: IdGalleryItem, i: number) => (
              <Reveal key={g.title} delay={(i % 3) * 0.05}>
                <button
                  type="button" onClick={() => setPreview(g.image)}
                  className="group block w-full overflow-hidden rounded-3xl border border-border bg-card text-left shadow-soft transition-all hover:-translate-y-1.5 hover:border-primary hover:shadow-elegant"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={IMAGES[g.image as keyof typeof IMAGES]} alt={`${g.title} ID card design`} loading="lazy" width={1200} height={800}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{g.category}</span>
                    <h3 className="mt-1 text-base font-semibold">{g.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{g.desc}</p>
                  </div>
                </button>
              </Reveal>
            ))
          : [0,1,2].map((k) => <Skeleton key={k} className="h-72" />)}
      </div>

      <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
        <Button asChild variant="hero" size="lg">
          <Link to={compact ? "/id-cards" : "/contact"}>
            {compact ? "Open the ID gallery" : "Request a sample pack"} <ArrowRight />
          </Link>
        </Button>
      </Reveal>

      <Dialog open={preview !== null} onOpenChange={() => setPreview(null)}>
        <DialogContent className="max-w-3xl overflow-hidden p-0">
          {preview && (
            <img src={IMAGES[preview as keyof typeof IMAGES]} alt="ID card design preview" className="w-full" />
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

export function MarketingSection() {
  const { data: growthData } = useQuery({ queryKey: ["growth-data"], queryFn: fetchGrowthData });
  const { data: campaigns } = useQuery({ queryKey: ["campaigns"], queryFn: fetchCampaigns });
  const max = growthData ? Math.max(...growthData.map((d: GrowthDataPoint) => d.reach)) : 1;

  return (
    <Section id="marketing" alt>
      <SectionHeading
        eyebrow="Social Media Marketing"
        title="Campaigns measured in growth, not impressions"
        subtitle="Reach, engagement, follower growth and return on ad spend, reported every month."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="rounded-3xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Audience growth (last 6 months)</h3>
            <span className="flex items-center gap-1 text-xs text-primary"><TrendingUp className="size-3.5" /> +492%</span>
          </div>
          <div className="mt-8 flex h-52 items-end gap-3">
            {growthData
              ? growthData.map((d: GrowthDataPoint, i: number) => (
                  <div key={d.month} className="flex flex-1 flex-col items-center gap-2">
                    <motion.div
                      initial={{ height: 0 }} whileInView={{ height: `${(d.reach / max) * 100}%` }}
                      viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                      className="gradient-accent w-full rounded-t-xl"
                    />
                    <span className="text-[11px] text-muted-foreground">{d.month}</span>
                  </div>
                ))
              : [0,1,2,3,4,5].map((k) => <div key={k} className="flex flex-1 flex-col items-end gap-2"><Skeleton className="w-full h-32 rounded-t-xl rounded-b-none" /><Skeleton className="h-3 w-6" /></div>)}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {campaigns
            ? campaigns.map((c: Campaign, i: number) => (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="h-full rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{c.platform}</span>
                    <h3 className="mt-1 text-sm font-semibold">{c.title}</h3>
                    <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
                      {[["Reach", c.reach], ["Engagement", c.engagement], ["Growth", c.growth], ["ROI", c.roi]].map(([k, v]) => (
                        <div key={k} className="rounded-xl bg-accent px-3 py-2">
                          <dt className="text-muted-foreground">{k}</dt>
                          <dd className="font-semibold text-accent-foreground">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </Reveal>
              ))
            : [0,1,2,3].map((k) => <Skeleton key={k} className="h-44" />)}
        </div>
      </div>
    </Section>
  );
}

export function SkillsSection() {
  const { data: skillGroups } = useQuery({ queryKey: ["skills"], queryFn: fetchSkills });

  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="Tools sharpened over eight years" />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {skillGroups
          ? skillGroups.map((group: SkillGroup, gi: number) => (
              <Reveal key={group.title} delay={gi * 0.08}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{group.title}</h3>
                  <div className="mt-5 space-y-4">
                    {group.skills.map((s, i) => (
                      <div key={s.name}>
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{s.name}</span>
                          <span className="text-muted-foreground">{s.level}%</span>
                        </div>
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-accent">
                          <motion.div
                            initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.06, ease: "easeOut" }}
                            className="gradient-accent h-full rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))
          : [0,1,2].map((k) => <Skeleton key={k} className="h-72" />)}
      </div>
    </Section>
  );
}

export function TestimonialsSection() {
  const [i, setI] = useState(0);
  const { data: testimonials } = useQuery({ queryKey: ["testimonials"], queryFn: fetchTestimonials });
  const t = testimonials?.[i];

  return (
    <Section id="testimonials" alt>
      <SectionHeading eyebrow="Testimonials" title="What clients say after launch" />
      <Reveal className="mx-auto mt-12 max-w-3xl">
        {t ? (
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-border bg-card p-8 text-center shadow-elegant sm:p-10"
            >
              <Quote className="mx-auto size-7 text-primary" />
              <p className="mt-5 text-lg leading-relaxed">{t.quote}</p>
              <div className="mt-6 flex items-center justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="mt-5 flex items-center justify-center gap-3">
                <span className="gradient-accent grid size-11 place-items-center rounded-full text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </span>
                <div className="text-left">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.project}</p>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        ) : (
          <Skeleton className="h-72" />
        )}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials?.map((item: Testimonial, idx: number) => (
            <button
              key={item.name} type="button" aria-label={`Show review from ${item.name}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export function ProcessSection() {
  const { data: process } = useQuery({ queryKey: ["process"], queryFn: fetchProcess });

  return (
    <Section id="process">
      <SectionHeading eyebrow="Work Process" title="Seven steps, zero surprises" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {process
          ? process.map((p: ProcessStep, i: number) => (
              <Reveal key={p.step} delay={(i % 4) * 0.06}>
                <div className="relative h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary hover:shadow-elegant">
                  <span className="font-display text-3xl font-bold text-accent-foreground/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-base font-semibold">{p.step}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))
          : [0,1,2,3].map((k) => <Skeleton key={k} className="h-44" />)}
      </div>
    </Section>
  );
}

export function StatsSection() {
  const { data: stats } = useQuery({ queryKey: ["stats"], queryFn: fetchStats });

  return (
    <Section alt>
      <SectionHeading eyebrow="Achievements" title="Numbers from the last eight years" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats
          ? stats.map((s: Stat, i: number) => (
              <Reveal key={s.label} delay={(i % 3) * 0.06}>
                <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
                  <span className="gradient-accent grid size-12 shrink-0 place-items-center rounded-2xl text-primary-foreground">
                    {i % 3 === 0 ? <Award className="size-5" /> : i % 3 === 1 ? <Users className="size-5" /> : <TrendingUp className="size-5" />}
                  </span>
                  <div>
                    <p className="font-display text-2xl font-bold">
                      <Counter value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              </Reveal>
            ))
          : [0,1,2,3,4,5].map((k) => <Skeleton key={k} className="h-28" />)}
      </div>
    </Section>
  );
}

export function BlogSection({ limit }: { limit?: number }) {
  const { data: posts } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  const list = posts ? (limit ? posts.slice(0, limit) : posts) : [];

  return (
    <Section id="blog">
      <SectionHeading
        eyebrow="Blog & Insights"
        title="Notes on design, marketing and growth"
        subtitle="Practical playbooks from live client work, written between projects."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts
          ? list.map((p: Post, i: number) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.05}>
                <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1.5 hover:border-primary hover:shadow-elegant">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.cat}</span>
                  <h3 className="mt-2 text-base font-semibold leading-snug">{p.title}</h3>
                  <div className="mt-auto flex items-center justify-between pt-5 text-xs text-muted-foreground">
                    <span>{p.date}</span>
                    <span>{p.read} read</span>
                  </div>
                </article>
              </Reveal>
            ))
          : [0,1,2].map((k) => <Skeleton key={k} className="h-44" />)}
      </div>
      {limit && (
        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog">Read the blog <ArrowRight /></Link>
          </Button>
        </Reveal>
      )}
    </Section>
  );
}

export function CtaBanner() {
  const { data: profile } = useQuery({ queryKey: ["profile"], queryFn: fetchProfile });

  return (
    <Section>
      <Reveal className="gradient-accent relative overflow-hidden rounded-[2.5rem] px-8 py-14 text-center shadow-elegant sm:px-16">
        <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
          Have a project worth doing properly?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/85 sm:text-base">
          Tell me about your brand, product or channel. You will get a plan, a timeline and a fixed quote within 24 hours.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="xl" variant="secondary">
            <Link to="/contact">Start a project <ArrowRight /></Link>
          </Button>
          <Button asChild size="xl" variant="outline">
            <a href={`https://wa.me/${profile?.whatsapp ?? ""}`} target="_blank" rel="noreferrer">WhatsApp me</a>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
