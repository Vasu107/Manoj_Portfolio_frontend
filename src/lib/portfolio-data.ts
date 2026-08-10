import {
  Palette, Monitor, Smartphone, Share2, Youtube, Clapperboard, Image, Sparkles,
  PenTool, IdCard, GraduationCap, Building2, Ticket, Megaphone, FileText, Layers,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Palette, Monitor, Smartphone, Share2, Youtube, Clapperboard, Image, Sparkles,
  PenTool, IdCard, GraduationCap, Building2, Ticket, Megaphone, FileText, Layers,
};

export function resolveIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Layers;
}

// In SSR (TanStack Start), always use the absolute backend URL.
// On the client, use a relative path (proxied by the dev server → Vite proxy → backend).
const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function get<T>(path: string): Promise<T> {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API ${path} failed: ${res.status}`);
  return res.json() as Promise<T>;
}

// ─── Types mirroring the DB models ─────────────────────────────────────────

export type Profile = {
  id: string;
  name: string;
  role: string;
  tagline: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
};

export type ServiceRaw = {
  id: number;
  icon: string;
  title: string;
  desc: string;
  order: number;
};

export type Service = ServiceRaw & { iconComponent: LucideIcon };

export type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  desc: string;
  tech: string[];
  order: number;
};

export type Skill = { id: number; name: string; level: number; order: number };

export type SkillGroup = {
  id: number;
  title: string;
  order: number;
  skills: Skill[];
};

export type ProcessStep = { id: number; step: string; desc: string; order: number };

export type Stat = {
  id: number;
  label: string;
  value: number;
  suffix: string;
  decimals: number;
  order: number;
};

export type Testimonial = {
  id: number;
  name: string;
  project: string;
  quote: string;
  rating: number;
  initials: string;
  order: number;
};

export type TimelineEntry = { id: number; year: string; title: string; desc: string; order: number };

export type Video = { id: string; title: string; category: string; views: string };

export type ChannelStat = {
  id: number;
  label: string;
  value: number;
  suffix: string;
  decimals: number;
  order: number;
};

export type IdGalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  desc: string;
  order: number;
};

export type Campaign = {
  id: number;
  platform: string;
  title: string;
  reach: string;
  engagement: string;
  growth: string;
  roi: string;
  order: number;
};

export type GrowthDataPoint = { month: string; followers: number; reach: number };

export type Post = {
  id: number;
  slug: string;
  title: string;
  cat: string;
  date: string;
  read: string;
  order: number;
};

// ─── API functions ──────────────────────────────────────────────────────────

export const PROJECT_CATEGORIES = [
  "All", "UI/UX", "Social Media", "Branding", "Graphic Design",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type ImageKey = "dashboard" | "mobile" | "branding" | "id-corporate" | "id-school";

export const ID_CATEGORIES = [
  "All", "School", "College", "Employee", "Corporate", "Event Pass", "Membership",
] as const;

export const fetchProfile = () => get<Profile>("/api/profile");
export const fetchRoles = () => get<string[]>("/api/roles");
export const fetchServices = async (): Promise<Service[]> => {
  const raw = await get<ServiceRaw[]>("/api/services");
  return raw.map((s) => ({ ...s, iconComponent: resolveIcon(s.icon) }));
};
export const fetchProjects = () => get<Project[]>("/api/projects");
export const fetchSkills = () => get<SkillGroup[]>("/api/skills");
export const fetchProcess = () => get<ProcessStep[]>("/api/process");
export const fetchStats = () => get<Stat[]>("/api/stats");
export const fetchTestimonials = () => get<Testimonial[]>("/api/testimonials");
export const fetchTimeline = () => get<TimelineEntry[]>("/api/timeline");
export const fetchAchievements = () => get<string[]>("/api/achievements");
export const fetchVideos = () => get<Video[]>("/api/videos");
export const fetchChannelStats = () => get<ChannelStat[]>("/api/channel-stats");
export const fetchIdGallery = () => get<IdGalleryItem[]>("/api/id-gallery");
export const fetchCampaigns = () => get<Campaign[]>("/api/campaigns");
export const fetchGrowthData = () => get<GrowthDataPoint[]>("/api/growth-data");
export const fetchPosts = () => get<Post[]>("/api/posts");
