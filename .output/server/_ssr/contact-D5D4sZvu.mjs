import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { O as isRedirect, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { C as MessageCircle, D as Mail, E as MapPin, _ as Phone, p as Send } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { S as cn, f as fetchProfile, x as Button } from "./router-CKYCH6_b.mjs";
import { t as Input } from "./input-DmLpJIxo.mjs";
import { t as Label } from "./label-DtvVI4qI.mjs";
import { l as Reveal, u as SectionHeading } from "./sections-Dqzh9Hw4.mjs";
import { i as getServerFnById, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-DbFi1nP42.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-D5D4sZvu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var contactSchema = objectType({
	name: stringType().min(2).max(80),
	email: stringType().email().max(120),
	subject: stringType().min(2).max(120),
	message: stringType().min(10).max(2e3)
});
var submitContact = createServerFn({ method: "POST" }).inputValidator((data) => contactSchema.parse(data)).handler(createSsrRpc("1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd"));
function Contact() {
	const { data: profile } = useQuery({
		queryKey: ["profile"],
		queryFn: fetchProfile
	});
	const send = useServerFn(submitContact);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const mutation = useMutation({
		mutationFn: (data) => send({ data }),
		onSuccess: (res) => {
			toast.success(res.message);
			setForm({
				name: "",
				email: "",
				subject: "",
				message: ""
			});
		},
		onError: () => toast.error("Something went wrong. Please email me directly.")
	});
	const details = [
		{
			icon: Mail,
			label: "Email",
			value: profile?.email ?? "",
			href: profile?.email ? `mailto:${profile.email}` : void 0
		},
		{
			icon: Phone,
			label: "Phone",
			value: profile?.phone ?? "",
			href: profile?.phone ? `tel:${profile.phone.replace(/\s/g, "")}` : void 0
		},
		{
			icon: MessageCircle,
			label: "WhatsApp",
			value: "Chat instantly",
			href: profile?.whatsapp ? `https://wa.me/${profile.whatsapp}` : void 0
		},
		{
			icon: MapPin,
			label: "Location",
			value: profile?.location ?? "",
			href: void 0
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Contact",
					title: "Let's build something worth showing off",
					subtitle: "Share a few details and you'll get a plan, timeline and fixed quote within 24 hours."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-8 lg:grid-cols-[1fr_0.85fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
						onSubmit: (e) => {
							e.preventDefault();
							mutation.mutate(form);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "name",
										children: "Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "name",
										required: true,
										minLength: 2,
										value: form.name,
										onChange: (e) => setForm({
											...form,
											name: e.target.value
										}),
										placeholder: "Your name"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										type: "email",
										required: true,
										value: form.email,
										onChange: (e) => setForm({
											...form,
											email: e.target.value
										}),
										placeholder: "you@company.com"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "subject",
									children: "Subject"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "subject",
									required: true,
									value: form.subject,
									onChange: (e) => setForm({
										...form,
										subject: e.target.value
									}),
									placeholder: "What do you need?"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "message",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "message",
									required: true,
									minLength: 10,
									rows: 6,
									value: form.message,
									onChange: (e) => setForm({
										...form,
										message: e.target.value
									}),
									placeholder: "Tell me about your project, timeline and budget."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								variant: "hero",
								size: "xl",
								className: "mt-6 w-full",
								disabled: mutation.isPending,
								children: mutation.isPending ? "Sending..." : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {}), " Send message"] })
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [details.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-accent grid size-11 shrink-0 place-items-center rounded-2xl text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.icon, { className: "size-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-wider text-muted-foreground",
										children: d.label
									}), d.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: d.href,
										target: "_blank",
										rel: "noreferrer",
										className: "truncate text-sm font-semibold hover:text-primary",
										children: d.value
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-semibold",
										children: d.value
									})]
								})]
							})
						}, d.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .24,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-3xl border border-border shadow-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									title: "Studio location map",
									loading: "lazy",
									className: "h-64 w-full",
									src: "https://www.google.com/maps?q=Bengaluru&output=embed"
								})
							})
						})]
					})]
				})]
			})
		})
	});
}
//#endregion
export { Contact as component };
