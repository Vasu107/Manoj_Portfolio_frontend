import { a as __toESM } from "../_runtime.mjs";
import { a as AnimatePresence, n as useSpring, r as useMotionValue, t as useInView } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { B as Download, D as Mail, R as Eye, W as CircleCheck, Y as ArrowRight, a as TrendingUp, g as Play, i as Users, l as Star, m as Quote, q as Award, t as Youtube, z as ExternalLink } from "../_libs/lucide-react.mjs";
import { _ as fetchStats, a as fetchAchievements, b as fetchVideos, c as fetchGrowthData, d as fetchProcess, f as fetchProfile, g as fetchSkills, h as fetchServices, i as PROJECT_CATEGORIES, l as fetchIdGallery, m as fetchRoles, o as fetchCampaigns, p as fetchProjects, r as ID_CATEGORIES, s as fetchChannelStats, u as fetchPosts, v as fetchTestimonials, x as Button, y as fetchTimeline } from "./router-CKYCH6_b.mjs";
import { n as DialogContent, t as Dialog } from "./dialog-C7seaWWe.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sections-Dqzh9Hw4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, className, y = 24 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function Counter({ value, suffix = "", decimals = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-60px"
	});
	const mv = useMotionValue(0);
	const spring = useSpring(mv, {
		duration: 1400,
		bounce: 0
	});
	const [display, setDisplay] = (0, import_react.useState)("0");
	(0, import_react.useEffect)(() => {
		if (inView) mv.set(value);
	}, [
		inView,
		mv,
		value
	]);
	(0, import_react.useEffect)(() => spring.on("change", (v) => setDisplay(decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-US"))), [spring, decimals]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [display, suffix]
	});
}
function TypingRoles({ roles }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const current = roles[index % roles.length] ?? "";
		const done = !deleting && text === current;
		const cleared = deleting && text === "";
		const timeout = setTimeout(() => {
			if (done) return setDeleting(true);
			if (cleared) {
				setDeleting(false);
				setIndex((i) => (i + 1) % roles.length);
				return;
			}
			setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
		}, done ? 1600 : deleting ? 40 : 80);
		return () => clearTimeout(timeout);
	}, [
		text,
		deleting,
		index,
		roles
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "text-gradient",
		children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-primary align-middle" })]
	});
}
var IMAGES = {
	dashboard: "/images/project-dashboard.jpg",
	mobile: "/images/project-mobile.jpg",
	branding: "/images/project-branding.jpg",
	"id-corporate": "/images/id-corporate.jpg",
	"id-school": "/images/id-school.jpg"
};
var profileImg = "/images/profile.jpg";
function Skeleton({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `animate-pulse rounded-2xl bg-accent ${className}` });
}
function Section({ id, children, alt = false, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `${alt ? "section-alt" : ""} py-20 sm:py-24 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children
		})
	});
}
function SectionHeading({ eyebrow, title, subtitle, center = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: center ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-3xl font-bold sm:text-4xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base text-muted-foreground",
				children: subtitle
			})
		]
	});
}
function Hero() {
	const { data: profile } = useQuery({
		queryKey: ["profile"],
		queryFn: fetchProfile
	});
	const { data: roles } = useQuery({
		queryKey: ["roles"],
		queryFn: fetchRoles
	});
	const { data: stats } = useQuery({
		queryKey: ["stats"],
		queryFn: fetchStats
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gradient-secondary absolute inset-0 -z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-24 top-10 -z-10 size-72 rounded-full bg-primary/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-24 bottom-0 -z-10 size-80 rounded-full bg-secondary/40 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .5 },
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary" }), " Available for new projects"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .05
						},
						className: "mt-5 text-4xl font-bold leading-[1.08] sm:text-6xl",
						children: [profile?.name ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-14 w-80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-2xl font-semibold sm:text-4xl",
							children: roles ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingRoles, { roles }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-56" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .15
						},
						className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: profile?.tagline ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-20 w-full" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .25
						},
						className: "mt-8 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "hero",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/projects",
									children: ["View Portfolio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "soft",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Hire Me"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/resume.txt",
									download: true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), " Resume"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${profile?.email ?? ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}), " Contact Me"]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid max-w-lg grid-cols-3 gap-4",
						children: stats ? stats.slice(0, 3).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-4 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl font-bold text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									value: s.value,
									suffix: s.suffix
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: s.label
							})]
						}, s.label)) : [
							0,
							1,
							2
						].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-20" }, k))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .94
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: { duration: .7 },
					className: "relative mx-auto w-full max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gradient-primary absolute inset-0 rotate-6 rounded-[2.5rem] opacity-70 blur-sm" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: profileImg,
							alt: `${profile?.name ?? ""}, ${profile?.role ?? ""}`,
							width: 900,
							height: 1100,
							className: "relative rounded-[2.5rem] border border-border object-cover shadow-elegant"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass animate-float absolute -left-6 top-10 rounded-2xl px-4 py-3 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Client rating"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-1 text-sm font-semibold",
								children: ["5.0 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-primary text-primary" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass animate-float absolute -right-4 bottom-12 rounded-2xl px-4 py-3 shadow-soft [animation-delay:1.5s]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Subscribers"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "128K on YouTube"
							})]
						})
					]
				})]
			})
		]
	});
}
function AboutSection({ full = false }) {
	const { data: achievements } = useQuery({
		queryKey: ["achievements"],
		queryFn: fetchAchievements
	});
	const { data: timeline } = useQuery({
		queryKey: ["timeline"],
		queryFn: fetchTimeline
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: false,
					eyebrow: "About Me",
					title: "A multi-disciplinary creative partner, not just a designer",
					subtitle: "Eight years spent between product design studios, marketing teams and print floors. That mix means one person can take a brand from positioning to interface to campaign to a printed badge on someone's lanyard."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					className: "mt-8 grid gap-3 sm:grid-cols-2",
					children: achievements ? achievements.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2.5 rounded-2xl border border-border bg-card p-4 text-sm shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: a
						})]
					}, a)) : [
						0,
						1,
						2,
						3
					].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-16" }, k))
				}),
				full && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "hero",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-6",
					children: timeline ? timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * .06,
						className: "relative pl-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-accent absolute left-0 top-1 grid size-8 place-items-center rounded-full text-[10px] font-bold text-primary-foreground",
								children: t.year.slice(2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: t.year
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-base font-semibold",
								children: t.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: t.desc
							})
						]
					}, t.year)) : [
						0,
						1,
						2,
						3,
						4
					].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-20 ml-12" }, k))
				})]
			})]
		})
	});
}
function ServicesSection({ limit }) {
	const { data: services } = useQuery({
		queryKey: ["services"],
		queryFn: fetchServices
	});
	const list = services ? limit ? services.slice(0, limit) : services : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "services",
		alt: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Services",
				title: "Everything a modern brand needs, under one roof",
				subtitle: "Pick a single service or hand over the whole creative function."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: services ? list.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 4 * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-elegant",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-accent grid size-11 place-items-center rounded-2xl text-primary-foreground transition-transform duration-300 group-hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.iconComponent, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-base font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: s.desc
							})
						]
					})
				}, s.title)) : [
					0,
					1,
					2,
					3,
					4,
					5,
					6,
					7
				].slice(0, limit ?? 8).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-44" }, k))
			}),
			limit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						children: [
							"See all ",
							services?.length ?? "",
							" services ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
						]
					})
				})
			})
		]
	});
}
function ProjectsSection({ limit, filterable = false }) {
	const [active, setActive] = (0, import_react.useState)("All");
	const { data: projects } = useQuery({
		queryKey: ["projects"],
		queryFn: fetchProjects
	});
	const base = projects ? active === "All" ? projects : projects.filter((p) => p.category === active) : [];
	const list = limit ? base.slice(0, limit) : base;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "projects",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Featured Projects",
				title: "Selected work across product, brand and print",
				subtitle: "Each engagement below shipped to real users, real print runs or real campaigns."
			}),
			filterable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-10 flex flex-wrap justify-center gap-2",
				children: PROJECT_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setActive(c),
					className: `rounded-full border px-4 py-2 text-sm font-medium transition-all ${active === c ? "gradient-accent border-transparent text-primary-foreground shadow-soft" : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"}`,
					children: c
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: projects ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "popLayout",
					children: list.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						layout: true,
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -10
						},
						transition: {
							duration: .4,
							delay: i % 3 * .05
						},
						className: "group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[3/2] overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: IMAGES[p.image],
								alt: p.title,
								loading: "lazy",
								width: 1200,
								height: 800,
								className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "glass absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium",
								children: p.category
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-semibold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: p.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-1.5",
									children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-foreground",
										children: t
									}, t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "sm",
										variant: "hero",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {}), " Live Demo"]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "sm",
										variant: "outline",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {}), " Case Study"]
										})
									})]
								})
							]
						})]
					}, p.title))
				}) : [
					0,
					1,
					2
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-80" }, k))
			}),
			limit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects",
						children: ["Browse all projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})
			})
		]
	});
}
function YouTubeSection({ compact = false }) {
	const { data: videos } = useQuery({
		queryKey: ["videos"],
		queryFn: fetchVideos
	});
	const { data: channelStats } = useQuery({
		queryKey: ["channel-stats"],
		queryFn: fetchChannelStats
	});
	const list = videos ? compact ? videos.slice(0, 2) : videos : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "youtube",
		alt: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "YouTube Creator",
				title: "A channel built on design education",
				subtitle: "128K subscribers, 4.6M views and a publishing rhythm that never slips."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: channelStats ? channelStats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-card p-6 text-center shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "mx-auto size-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-2xl font-bold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									value: s.value,
									suffix: s.suffix,
									decimals: s.decimals
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: s.label
							})
						]
					})
				}, s.label)) : [
					0,
					1,
					2,
					3
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-36" }, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2",
				children: videos ? list.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 2 * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-video",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								className: "size-full",
								src: `https://www.youtube.com/embed/${v.id}`,
								title: v.title,
								loading: "lazy",
								allowFullScreen: true,
								allow: "accelerometer; clipboard-write; encrypted-media; picture-in-picture"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: v.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-sm font-semibold",
								children: v.title
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex shrink-0 items-center gap-1 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" }),
									" ",
									v.views
								]
							})]
						})]
					})
				}, v.id)) : [0, 1].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-64" }, k))
			}),
			compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "hero",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/youtube",
						children: ["Explore the channel ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})
			})
		]
	});
}
function IdCardSection({ compact = false }) {
	const [active, setActive] = (0, import_react.useState)("All");
	const [preview, setPreview] = (0, import_react.useState)(null);
	const { data: gallery } = useQuery({
		queryKey: ["id-gallery"],
		queryFn: fetchIdGallery
	});
	const base = gallery ? active === "All" ? gallery : gallery.filter((g) => g.category === active) : [];
	const list = compact ? (gallery ?? []).slice(0, 3) : base;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "id-cards",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "ID Card Design",
				title: "Identity cards that survive the real world",
				subtitle: "Bulk-ready artwork with data merge, bleed, barcodes and security elements."
			}),
			!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-10 flex flex-wrap justify-center gap-2",
				children: ID_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setActive(c),
					className: `rounded-full border px-4 py-2 text-sm font-medium transition-all ${active === c ? "gradient-accent border-transparent text-primary-foreground shadow-soft" : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"}`,
					children: c
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: gallery ? list.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPreview(g.image),
						className: "group block w-full overflow-hidden rounded-3xl border border-border bg-card text-left shadow-soft transition-all hover:-translate-y-1.5 hover:border-primary hover:shadow-elegant",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[3/2] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: IMAGES[g.image],
								alt: `${g.title} ID card design`,
								loading: "lazy",
								width: 1200,
								height: 800,
								className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wider text-primary",
									children: g.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-base font-semibold",
									children: g.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-muted-foreground",
									children: g.desc
								})
							]
						})]
					})
				}, g.title)) : [
					0,
					1,
					2
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-72" }, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-10 flex flex-wrap justify-center gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "hero",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: compact ? "/id-cards" : "/contact",
						children: [
							compact ? "Open the ID gallery" : "Request a sample pack",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: preview !== null,
				onOpenChange: () => setPreview(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "max-w-3xl overflow-hidden p-0",
					children: preview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMAGES[preview],
						alt: "ID card design preview",
						className: "w-full"
					})
				})
			})
		]
	});
}
function MarketingSection() {
	const { data: growthData } = useQuery({
		queryKey: ["growth-data"],
		queryFn: fetchGrowthData
	});
	const { data: campaigns } = useQuery({
		queryKey: ["campaigns"],
		queryFn: fetchCampaigns
	});
	const max = growthData ? Math.max(...growthData.map((d) => d.reach)) : 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "marketing",
		alt: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Social Media Marketing",
			title: "Campaigns measured in growth, not impressions",
			subtitle: "Reach, engagement, follower growth and return on ad spend, reported every month."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "rounded-3xl border border-border bg-card p-6 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: "Audience growth (last 6 months)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1 text-xs text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-3.5" }), " +492%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex h-52 items-end gap-3",
					children: growthData ? growthData.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { height: 0 },
							whileInView: { height: `${d.reach / max * 100}%` },
							viewport: { once: true },
							transition: {
								duration: .8,
								delay: i * .08,
								ease: "easeOut"
							},
							className: "gradient-accent w-full rounded-t-xl"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground",
							children: d.month
						})]
					}, d.month)) : [
						0,
						1,
						2,
						3,
						4,
						5
					].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col items-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "w-full h-32 rounded-t-xl rounded-b-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-6" })]
					}, k))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: campaigns ? campaigns.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: c.platform
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-sm font-semibold",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-4 grid grid-cols-2 gap-3 text-xs",
								children: [
									["Reach", c.reach],
									["Engagement", c.engagement],
									["Growth", c.growth],
									["ROI", c.roi]
								].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl bg-accent px-3 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-semibold text-accent-foreground",
										children: v
									})]
								}, k))
							})
						]
					})
				}, c.title)) : [
					0,
					1,
					2,
					3
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-44" }, k))
			})]
		})]
	});
}
function SkillsSection() {
	const { data: skillGroups } = useQuery({
		queryKey: ["skills"],
		queryFn: fetchSkills
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "skills",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Skills",
			title: "Tools sharpened over eight years"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-6 lg:grid-cols-3",
			children: skillGroups ? skillGroups.map((group, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: gi * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full rounded-3xl border border-border bg-card p-6 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: group.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 space-y-4",
						children: group.skills.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [s.level, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-2 overflow-hidden rounded-full bg-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { width: 0 },
								whileInView: { width: `${s.level}%` },
								viewport: { once: true },
								transition: {
									duration: .9,
									delay: i * .06,
									ease: "easeOut"
								},
								className: "gradient-accent h-full rounded-full"
							})
						})] }, s.name))
					})]
				})
			}, group.title)) : [
				0,
				1,
				2
			].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-72" }, k))
		})]
	});
}
function TestimonialsSection() {
	const [i, setI] = (0, import_react.useState)(0);
	const { data: testimonials } = useQuery({
		queryKey: ["testimonials"],
		queryFn: fetchTestimonials
	});
	const t = testimonials?.[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "testimonials",
		alt: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Testimonials",
			title: "What clients say after launch"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto mt-12 max-w-3xl",
			children: [t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -16
					},
					transition: { duration: .35 },
					className: "rounded-3xl border border-border bg-card p-8 text-center shadow-elegant sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mx-auto size-7 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg leading-relaxed",
							children: t.quote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex items-center justify-center gap-1",
							children: Array.from({ length: t.rating }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-primary text-primary" }, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-accent grid size-11 place-items-center rounded-full text-sm font-semibold text-primary-foreground",
								children: t.initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: t.project
								})]
							})]
						})
					]
				}, t.name)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-72" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex justify-center gap-2",
				children: testimonials?.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Show review from ${item.name}`,
					onClick: () => setI(idx),
					className: `h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-border"}`
				}, item.name))
			})]
		})]
	});
}
function ProcessSection() {
	const { data: process } = useQuery({
		queryKey: ["process"],
		queryFn: fetchProcess
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "process",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Work Process",
			title: "Seven steps, zero surprises"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
			children: process ? process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 4 * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary hover:shadow-elegant",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl font-bold text-accent-foreground/30",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-base font-semibold",
							children: p.step
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: p.desc
						})
					]
				})
			}, p.step)) : [
				0,
				1,
				2,
				3
			].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-44" }, k))
		})]
	});
}
function StatsSection() {
	const { data: stats } = useQuery({
		queryKey: ["stats"],
		queryFn: fetchStats
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		alt: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Achievements",
			title: "Numbers from the last eight years"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: stats ? stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 3 * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-accent grid size-12 shrink-0 place-items-center rounded-2xl text-primary-foreground",
						children: i % 3 === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-5" }) : i % 3 === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-bold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
							value: s.value,
							suffix: s.suffix
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: s.label
					})] })]
				})
			}, s.label)) : [
				0,
				1,
				2,
				3,
				4,
				5
			].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-28" }, k))
		})]
	});
}
function BlogSection({ limit }) {
	const { data: posts } = useQuery({
		queryKey: ["posts"],
		queryFn: fetchPosts
	});
	const list = posts ? limit ? posts.slice(0, limit) : posts : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "blog",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Blog & Insights",
				title: "Notes on design, marketing and growth",
				subtitle: "Practical playbooks from live client work, written between projects."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: posts ? list.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1.5 hover:border-primary hover:shadow-elegant",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: p.cat
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-base font-semibold leading-snug",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto flex items-center justify-between pt-5 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.date }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [p.read, " read"] })]
							})
						]
					})
				}, p.slug)) : [
					0,
					1,
					2
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-44" }, k))
			}),
			limit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						children: ["Read the blog ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})
			})
		]
	});
}
function CtaBanner() {
	const { data: profile } = useQuery({
		queryKey: ["profile"],
		queryFn: fetchProfile
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "gradient-accent relative overflow-hidden rounded-[2.5rem] px-8 py-14 text-center shadow-elegant sm:px-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-bold text-primary-foreground sm:text-4xl",
				children: "Have a project worth doing properly?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-3 max-w-xl text-sm text-primary-foreground/85 sm:text-base",
				children: "Tell me about your brand, product or channel. You will get a plan, a timeline and a fixed quote within 24 hours."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "xl",
					variant: "secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "xl",
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `https://wa.me/${profile?.whatsapp ?? ""}`,
						target: "_blank",
						rel: "noreferrer",
						children: "WhatsApp me"
					})
				})]
			})
		]
	}) });
}
//#endregion
export { IdCardSection as a, ProjectsSection as c, ServicesSection as d, SkillsSection as f, YouTubeSection as h, Hero as i, Reveal as l, TestimonialsSection as m, BlogSection as n, MarketingSection as o, StatsSection as p, CtaBanner as r, ProcessSection as s, AboutSection as t, SectionHeading as u };
