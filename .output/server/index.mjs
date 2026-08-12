globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-ClFoBNME.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"131-9KStvMJ8QysQJ5HWHQXj1T0xjNo\"",
		"mtime": "2026-08-10T10:17:24.247Z",
		"size": 305,
		"path": "../public/assets/about-ClFoBNME.js"
	},
	"/assets/admin-DrPA8JJc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"be6-cfnaJkow0GOM5bIa6qUSMzUjD1I\"",
		"mtime": "2026-08-10T10:17:24.249Z",
		"size": 3046,
		"path": "../public/assets/admin-DrPA8JJc.js"
	},
	"/assets/blog-DqufTVXO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ea-+DXWGPkuKuSPVegLhuMyRfBTCrc\"",
		"mtime": "2026-08-10T10:17:24.250Z",
		"size": 234,
		"path": "../public/assets/blog-DqufTVXO.js"
	},
	"/assets/contact-i2BscusW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26e3-PSuyjsInxDqRiwaatg6WlJ1TNbo\"",
		"mtime": "2026-08-10T10:17:24.251Z",
		"size": 9955,
		"path": "../public/assets/contact-i2BscusW.js"
	},
	"/assets/createLucideIcon-B4WJSJQb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3475-l4778l27+xMka9DAKULB5VNaXh8\"",
		"mtime": "2026-08-10T10:17:24.252Z",
		"size": 13429,
		"path": "../public/assets/createLucideIcon-B4WJSJQb.js"
	},
	"/assets/dialog-YLCchKsv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8da1-4/OJc3ro5eQRdenr1e0NLeTvOCw\"",
		"mtime": "2026-08-10T10:17:24.253Z",
		"size": 36257,
		"path": "../public/assets/dialog-YLCchKsv.js"
	},
	"/assets/id-cards-Bb5rCLO4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ea-q6I4BI4c22oGs5XC5A7USqPzqoU\"",
		"mtime": "2026-08-10T10:17:24.253Z",
		"size": 234,
		"path": "../public/assets/id-cards-Bb5rCLO4.js"
	},
	"/assets/index-Bq0Afx55.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"62cab-dyrIOxvyYS4/Gnz/Fx7oc1Wxv3U\"",
		"mtime": "2026-08-10T10:17:24.245Z",
		"size": 404651,
		"path": "../public/assets/index-Bq0Afx55.js"
	},
	"/assets/input-CkfO39rl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"272-yDAoXvUsnf9xwLTfmm1/GjiyGCU\"",
		"mtime": "2026-08-10T10:17:24.255Z",
		"size": 626,
		"path": "../public/assets/input-CkfO39rl.js"
	},
	"/assets/label-ClQkK_d0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b15-0DuGQXfcLJxkWgVRQB4IuxUSj2c\"",
		"mtime": "2026-08-10T10:17:24.256Z",
		"size": 2837,
		"path": "../public/assets/label-ClQkK_d0.js"
	},
	"/assets/link-Bsx9jjBD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5adf-wlGeV2dv8C/IMNH13YuXXBe3aw4\"",
		"mtime": "2026-08-10T10:17:24.260Z",
		"size": 23263,
		"path": "../public/assets/link-Bsx9jjBD.js"
	},
	"/assets/login-13T_wBIH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77d-oaHVtvixjfAf/sxcKC8NLCjgi7w\"",
		"mtime": "2026-08-10T10:17:24.261Z",
		"size": 1917,
		"path": "../public/assets/login-13T_wBIH.js"
	},
	"/assets/projects-Chjlv33a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"109-Wy7dPhMHZfuOMJ1CzDjk1bthYeE\"",
		"mtime": "2026-08-10T10:17:24.262Z",
		"size": 265,
		"path": "../public/assets/projects-Chjlv33a.js"
	},
	"/assets/routes-D0IoHxHr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"211-JQ/KqGKKUn4c9WFAL8+DXS6JIdA\"",
		"mtime": "2026-08-10T10:17:24.263Z",
		"size": 529,
		"path": "../public/assets/routes-D0IoHxHr.js"
	},
	"/assets/services-DWF6PL1v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"101-sHb793jpNqPOWOT8k58NOWpSWBk\"",
		"mtime": "2026-08-10T10:17:24.270Z",
		"size": 257,
		"path": "../public/assets/services-DWF6PL1v.js"
	},
	"/assets/star-_9CbPa_3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8-WDNQk3I025tYG0e6ViUdHI8SjmM\"",
		"mtime": "2026-08-10T10:17:24.271Z",
		"size": 472,
		"path": "../public/assets/star-_9CbPa_3.js"
	},
	"/assets/sections-BQdYQAra.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"262e1-hoUGE7jUiBLFdU2r29pJlssazwE\"",
		"mtime": "2026-08-10T10:17:24.265Z",
		"size": 156385,
		"path": "../public/assets/sections-BQdYQAra.js"
	},
	"/assets/styles-BmAglIZd.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15218-B8o6CA4ocV+PkcbTH+3Dob6BfAY\"",
		"mtime": "2026-08-10T10:17:24.274Z",
		"size": 86552,
		"path": "../public/assets/styles-BmAglIZd.css"
	},
	"/assets/youtube-B8e2elkl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ea-xihslutvwvCG1S1+kDWdjNTzGNQ\"",
		"mtime": "2026-08-10T10:17:24.273Z",
		"size": 234,
		"path": "../public/assets/youtube-B8e2elkl.js"
	},
	"/assets/_resource-BgwmxGKC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a9e-eJPDGmVtLvmPy1Nn5c9s1+/w+h4\"",
		"mtime": "2026-08-10T10:17:24.246Z",
		"size": 6814,
		"path": "../public/assets/_resource-BgwmxGKC.js"
	},
	"/images/id-corporate.jpg": {
		"type": "image/jpeg",
		"etag": "\"19214-lRa1N6rYEB5OtS8rnPuJ4TKO8Q4\"",
		"mtime": "2026-08-04T06:37:22.878Z",
		"size": 102932,
		"path": "../public/images/id-corporate.jpg"
	},
	"/images/id-school.jpg": {
		"type": "image/jpeg",
		"etag": "\"10077-kfFD/qddxB/29g3CZNM696N22mU\"",
		"mtime": "2026-08-04T06:37:29.050Z",
		"size": 65655,
		"path": "../public/images/id-school.jpg"
	},
	"/images/logo.png": {
		"type": "image/png",
		"etag": "\"258f9-s+M8hVWDYed97ygKnXYBKUiqi04\"",
		"mtime": "2026-08-04T06:44:35.890Z",
		"size": 153849,
		"path": "../public/images/logo.png"
	},
	"/images/profile.jpg": {
		"type": "image/jpeg",
		"etag": "\"efd8-QWbAg2pALOk9TrPMjX/opmZlocY\"",
		"mtime": "2026-08-04T06:37:33.331Z",
		"size": 61400,
		"path": "../public/images/profile.jpg"
	},
	"/images/project-branding.jpg": {
		"type": "image/jpeg",
		"etag": "\"d855-Dj6+3W2b+3qP6c4OLJMH3LgT7WU\"",
		"mtime": "2026-08-04T06:37:37.797Z",
		"size": 55381,
		"path": "../public/images/project-branding.jpg"
	},
	"/images/project-dashboard.jpg": {
		"type": "image/jpeg",
		"etag": "\"a7e0-GlT/RepuQDDNRFiHw6gUr4HIhkQ\"",
		"mtime": "2026-08-04T06:37:42.497Z",
		"size": 42976,
		"path": "../public/images/project-dashboard.jpg"
	},
	"/images/project-mobile.jpg": {
		"type": "image/jpeg",
		"etag": "\"cc75-kZFr4BeKfN2VKIcd6+P9chuVWkY\"",
		"mtime": "2026-08-04T06:37:47.631Z",
		"size": 52341,
		"path": "../public/images/project-mobile.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_dswrCo = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_dswrCo
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
