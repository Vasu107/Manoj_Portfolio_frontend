import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as useNavigate, f as Outlet, g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as LayoutDashboard, H as Code, K as Briefcase, L as FileText, N as Image, V as Database, l as Star, r as Video } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-D7zqBFNQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RESOURCES = [
	{
		name: "Services",
		path: "/admin/services",
		icon: Briefcase
	},
	{
		name: "Projects",
		path: "/admin/projects",
		icon: Code
	},
	{
		name: "Skills",
		path: "/admin/skills",
		icon: Star
	},
	{
		name: "Testimonials",
		path: "/admin/testimonials",
		icon: Star
	},
	{
		name: "Videos",
		path: "/admin/videos",
		icon: Video
	},
	{
		name: "ID Gallery",
		path: "/admin/id-gallery",
		icon: Image
	},
	{
		name: "Posts",
		path: "/admin/posts",
		icon: FileText
	},
	{
		name: "Campaigns",
		path: "/admin/campaigns",
		icon: Database
	}
];
function AdminLayout() {
	const location = useLocation();
	const navigate = useNavigate();
	const isLoginPage = location.pathname === "/admin/login";
	(0, import_react.useEffect)(() => {
		if (!localStorage.getItem("adminToken") && !isLoginPage) navigate({ to: "/admin/login" });
	}, [
		location.pathname,
		navigate,
		isLoginPage
	]);
	if (isLoginPage) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	const handleLogout = () => {
		localStorage.removeItem("adminToken");
		navigate({ to: "/admin/login" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-muted/20 pt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "w-64 border-r border-border bg-card p-4 hidden md:flex md:flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-2 pb-6 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold tracking-tight",
						children: "Admin Dashboard"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "space-y-1",
					children: RESOURCES.map((r) => {
						const isActive = location.pathname.startsWith(r.path);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: r.path,
							className: `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all ${isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "size-4" }), r.name]
						}, r.path);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleLogout,
						className: "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-destructive transition-all hover:bg-destructive/10",
						children: "Logout"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "flex-1 p-6 lg:p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})
		})]
	});
}
//#endregion
export { AdminLayout as component };
