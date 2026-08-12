import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { O as Lock } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { x as Button } from "./router-CKYCH6_b.mjs";
import { t as Input } from "./input-DmLpJIxo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DBbcFLUZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var API_BASE = "http://localhost:3001";
function AdminLogin() {
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch(`${API_BASE}/api/auth/login`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ password })
			});
			const data = await res.json();
			if (res.ok && data.token) {
				localStorage.setItem("adminToken", data.token);
				toast.success("Login successful");
				navigate({ to: "/admin" });
			} else toast.error(data.error || "Login failed");
		} catch (err) {
			toast.error("Network error. Is the server running?");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-muted/20 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-3xl border border-border bg-card p-8 shadow-elegant",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-accent grid size-12 place-items-center rounded-2xl text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 text-2xl font-bold tracking-tight",
						children: "Admin Login"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Enter your secure password to access the portfolio dashboard."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleLogin,
				className: "mt-8 space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "password",
						placeholder: "Admin password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						className: "h-11",
						required: true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "hero",
					className: "h-11 w-full",
					disabled: loading,
					children: loading ? "Verifying..." : "Login to Dashboard"
				})]
			})]
		})
	});
}
//#endregion
export { AdminLogin as component };
