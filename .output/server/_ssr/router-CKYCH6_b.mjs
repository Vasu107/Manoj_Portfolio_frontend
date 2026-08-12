import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { l as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as useQuery, r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { D as Mail, F as GraduationCap, G as Building2, I as Github, J as ArrowUp, L as FileText, M as Instagram, N as Image, P as IdCard, S as Monitor, T as Megaphone, U as Clapperboard, b as Palette, c as Sun, d as Smartphone, f as Share2, j as Layers, k as Linkedin, n as X, s as Ticket, t as Youtube, u as Sparkles, w as Menu, x as Moon, y as PenTool } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as __exportAll } from "./server-DbFi1nP4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CKYCH6_b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BmAglIZd.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			hero: "gradient-accent text-primary-foreground shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all",
			soft: "bg-accent text-accent-foreground hover:bg-secondary"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			xl: "h-12 rounded-full px-7 text-sm",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var ICON_MAP = {
	Palette,
	Monitor,
	Smartphone,
	Share2,
	Youtube,
	Clapperboard,
	Image,
	Sparkles,
	PenTool,
	IdCard,
	GraduationCap,
	Building2,
	Ticket,
	Megaphone,
	FileText,
	Layers
};
function resolveIcon(name) {
	return ICON_MAP[name] ?? Layers;
}
var API_BASE = "http://localhost:3001";
async function get(path) {
	const url = `${API_BASE}${path}`;
	const res = await fetch(url);
	if (!res.ok) throw new Error(`API ${path} failed: ${res.status}`);
	return res.json();
}
var PROJECT_CATEGORIES = [
	"All",
	"UI/UX",
	"Social Media",
	"Branding",
	"Graphic Design"
];
var ID_CATEGORIES = [
	"All",
	"School",
	"College",
	"Employee",
	"Corporate",
	"Event Pass",
	"Membership"
];
var fetchProfile = () => get("/api/profile");
var fetchRoles = () => get("/api/roles");
var fetchServices = async () => {
	return (await get("/api/services")).map((s) => ({
		...s,
		iconComponent: resolveIcon(s.icon)
	}));
};
var fetchProjects = () => get("/api/projects");
var fetchSkills = () => get("/api/skills");
var fetchProcess = () => get("/api/process");
var fetchStats = () => get("/api/stats");
var fetchTestimonials = () => get("/api/testimonials");
var fetchTimeline = () => get("/api/timeline");
var fetchAchievements = () => get("/api/achievements");
var fetchVideos = () => get("/api/videos");
var fetchChannelStats = () => get("/api/channel-stats");
var fetchIdGallery = () => get("/api/id-gallery");
var fetchCampaigns = () => get("/api/campaigns");
var fetchGrowthData = () => get("/api/growth-data");
var fetchPosts = () => get("/api/posts");
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/youtube",
		label: "YouTube"
	},
	{
		to: "/id-cards",
		label: "ID Cards"
	},
	{
		to: "/blog",
		label: "Blog"
	}
];
function ThemeToggle() {
	const [dark, setDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const isDark = localStorage.getItem("theme") === "dark";
		setDark(isDark);
		document.documentElement.classList.toggle("dark", isDark);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": "Toggle colour theme",
		onClick: () => {
			const next = !dark;
			setDark(next);
			localStorage.setItem("theme", next ? "dark" : "light");
			document.documentElement.classList.toggle("dark", next);
		},
		className: "grid size-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary",
		children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
	});
}
function SiteHeader() {
	const { data: profile } = useQuery({
		queryKey: ["profile"],
		queryFn: fetchProfile
	});
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-soft" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/logo.png",
						alt: "Logo",
						className: "h-20 w-auto object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						activeProps: { className: "text-primary bg-accent" },
						className: "rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary",
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "hero",
							size: "sm",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Hire Me"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Toggle menu",
							onClick: () => setOpen((v) => !v),
							className: "grid size-9 place-items-center rounded-full border border-border bg-card lg:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass border-t border-border lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto grid max-w-7xl gap-1 px-4 py-4",
				children: [...NAV, {
					to: "/contact",
					label: "Contact"
				}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-primary",
					children: item.label
				}, item.to))
			})
		})]
	});
}
var SOCIALS = [
	{
		icon: Youtube,
		label: "YouTube",
		href: "https://youtube.com"
	},
	{
		icon: Instagram,
		label: "Instagram",
		href: "https://instagram.com"
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		href: "https://linkedin.com"
	},
	{
		icon: Github,
		label: "GitHub",
		href: "https://github.com"
	}
];
function SiteFooter() {
	const { data: profile } = useQuery({
		queryKey: ["profile"],
		queryFn: fetchProfile
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "section-alt border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold",
							children: profile?.name ?? ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm text-sm text-muted-foreground",
							children: profile?.tagline ?? ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex gap-2",
							children: SOCIALS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: s.href,
								"aria-label": s.label,
								target: "_blank",
								rel: "noreferrer",
								className: "grid size-10 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-4" })
							}, s.label))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: [
						{
							to: "/about",
							label: "About"
						},
						{
							to: "/projects",
							label: "Projects"
						},
						{
							to: "/youtube",
							label: "YouTube"
						},
						{
							to: "/blog",
							label: "Blog"
						},
						{
							to: "/contact",
							label: "Contact"
						}
					].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "transition-colors hover:text-primary",
						children: l.label
					}) }, l.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold",
						children: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "UI/UX Design" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Social Media Marketing" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Video Editing" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Brand Identity" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/id-cards",
								className: "transition-colors hover:text-primary",
								children: "ID Card Design"
							}) })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${profile?.email ?? ""}`,
						className: "mt-4 inline-flex items-center gap-2 text-sm text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }),
							" ",
							profile?.email ?? ""
						]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					profile?.name ?? "",
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => window.scrollTo({
						top: 0,
						behavior: "smooth"
					}),
					className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 transition-colors hover:border-primary hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-3.5" }), " Back to top"]
				})]
			})
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Arman Rehman — Creative Portfolio" },
			{
				name: "description",
				content: "UI/UX design, social media marketing, YouTube content, video editing, branding and ID card design."
			},
			{
				name: "author",
				content: "Arman Rehman"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })
		]
	});
}
var $$splitComponentImporter$10 = () => import("./routes-ay_vZ0gJ.mjs");
var title$7 = "Arman Rehman — UI/UX Designer, Marketer & YouTube Creator";
var description$7 = "Portfolio of Arman Rehman: UI/UX design, social media marketing, YouTube content, video editing, branding and ID card design for schools and corporates.";
var Route$10 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: title$7 },
			{
				name: "description",
				content: description$7
			},
			{
				property: "og:title",
				content: title$7
			},
			{
				property: "og:description",
				content: description$7
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Person",
				name: "Arman Rehman",
				jobTitle: "UI/UX Designer & Digital Creative Consultant",
				knowsAbout: [
					"UI/UX Design",
					"Social Media Marketing",
					"Video Editing",
					"Branding",
					"ID Card Design"
				]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-COFJgtjT.mjs");
var title$6 = "About Arman Rehman — Creative Consultant & Designer";
var description$6 = "Eight years across product design studios, marketing teams and print floors. Career timeline, skills and achievements of Arman Rehman.";
var Route$9 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: title$6 },
		{
			name: "description",
			content: description$6
		},
		{
			property: "og:title",
			content: title$6
		},
		{
			property: "og:description",
			content: description$6
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./admin-D7zqBFNQ.mjs");
var Route$8 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./blog-CTl-e2OY.mjs");
var title$5 = "Blog & Insights — UI/UX, Marketing and YouTube Growth";
var description$5 = "Practical articles on UI/UX design, social media marketing, YouTube growth, branding tips and design trends for 2026.";
var Route$7 = createFileRoute("/blog")({
	head: () => ({ meta: [
		{ title: title$5 },
		{
			name: "description",
			content: description$5
		},
		{
			property: "og:title",
			content: title$5
		},
		{
			property: "og:description",
			content: description$5
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-D5D4sZvu.mjs");
var title$4 = "Contact — Hire Arman Rehman for Your Next Project";
var description$4 = "Get a plan, timeline and fixed quote within 24 hours. Reach out by email, phone, WhatsApp or the contact form.";
var Route$6 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: title$4 },
		{
			name: "description",
			content: description$4
		},
		{
			property: "og:title",
			content: title$4
		},
		{
			property: "og:description",
			content: description$4
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./id-cards-9eGFh3wg.mjs");
var title$3 = "ID Card Design Gallery — School, Corporate & Event Passes";
var description$3 = "Print-ready ID card design gallery: student cards, college IDs, employee badges, corporate cards, event passes and membership cards.";
var Route$5 = createFileRoute("/id-cards")({
	head: () => ({ meta: [
		{ title: title$3 },
		{
			name: "description",
			content: description$3
		},
		{
			property: "og:title",
			content: title$3
		},
		{
			property: "og:description",
			content: description$3
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./projects-BgBTdaSU.mjs");
var title$2 = "Projects — Product, Brand & Campaign Case Studies";
var description$2 = "Featured UI/UX, website, mobile app, social media, branding and graphic design projects with technologies used and outcomes.";
var Route$4 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: title$2 },
		{
			name: "description",
			content: description$2
		},
		{
			property: "og:title",
			content: title$2
		},
		{
			property: "og:description",
			content: description$2
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./services-bgPp-j5u.mjs");
var title$1 = "Services — Design, Marketing, Video & ID Cards";
var description$1 = "UI/UX design, website and app design, social media marketing, YouTube management, video editing, branding, logo and ID card design services.";
var Route$3 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: title$1 },
		{
			name: "description",
			content: description$1
		},
		{
			property: "og:title",
			content: title$1
		},
		{
			property: "og:description",
			content: description$1
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./youtube-z3LJPmjh.mjs");
var title = "YouTube Channel — Design Education & Video Editing";
var description = "Featured videos, latest uploads, channel statistics and video editing showcase from a 128K-subscriber design education channel.";
var Route$2 = createFileRoute("/youtube")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("../_resource-C1thc_Jn.mjs");
var Route$1 = createFileRoute("/admin/$resource")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./login-DBbcFLUZ.mjs");
var Route = createFileRoute("/admin/login")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$9.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var AdminRoute = Route$8.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$11
});
var BlogRoute = Route$7.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var IdCardsRoute = Route$5.update({
	id: "/id-cards",
	path: "/id-cards",
	getParentRoute: () => Route$11
});
var ProjectsRoute = Route$4.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$11
});
var ServicesRoute = Route$3.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$11
});
var YoutubeRoute = Route$2.update({
	id: "/youtube",
	path: "/youtube",
	getParentRoute: () => Route$11
});
var AdminRouteChildren = {
	AdminResourceRoute: Route$1.update({
		id: "/$resource",
		path: "/$resource",
		getParentRoute: () => AdminRoute
	}),
	AdminLoginRoute: Route.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => AdminRoute
	})
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute: AdminRoute._addFileChildren(AdminRouteChildren),
	BlogRoute,
	ContactRoute,
	IdCardsRoute,
	ProjectsRoute,
	ServicesRoute,
	YoutubeRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { cn as S, fetchStats as _, fetchAchievements as a, fetchVideos as b, fetchGrowthData as c, fetchProcess as d, fetchProfile as f, fetchSkills as g, fetchServices as h, PROJECT_CATEGORIES as i, fetchIdGallery as l, fetchRoles as m, Route$1 as n, fetchCampaigns as o, fetchProjects as p, ID_CATEGORIES as r, fetchChannelStats as s, router_exports as t, fetchPosts as u, fetchTestimonials as v, Button as x, fetchTimeline as y };
