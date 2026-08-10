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
	"/file.svg": {
		"type": "image/svg+xml",
		"etag": "\"187-+zgO7/6H1QtZc4NmTAKYKWTQ0ow\"",
		"mtime": "2026-08-03T07:10:28.868Z",
		"size": 391,
		"path": "../public/file.svg"
	},
	"/globe.svg": {
		"type": "image/svg+xml",
		"etag": "\"40b-LrojsBpGczu4Qj5tOOv19+lavsU\"",
		"mtime": "2026-08-03T07:10:28.894Z",
		"size": 1035,
		"path": "../public/globe.svg"
	},
	"/next.svg": {
		"type": "image/svg+xml",
		"etag": "\"55f-Pz6VYiYSuYnFvWoDKZowjG88fms\"",
		"mtime": "2026-08-03T07:10:28.911Z",
		"size": 1375,
		"path": "../public/next.svg"
	},
	"/window.svg": {
		"type": "image/svg+xml",
		"etag": "\"181-VMSODapsqjF/4bTEGQB/2T6Ujbk\"",
		"mtime": "2026-08-03T07:10:28.948Z",
		"size": 385,
		"path": "../public/window.svg"
	},
	"/vercel.svg": {
		"type": "image/svg+xml",
		"etag": "\"80-zruIUtWMiIa+PpBRomlX9Cu4Lxo\"",
		"mtime": "2026-08-03T07:10:28.933Z",
		"size": 128,
		"path": "../public/vercel.svg"
	},
	"/assets/blog-D-pftf35.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df-9GWV+kB4zU814uW7cTIKHGe4xfk\"",
		"mtime": "2026-08-04T06:17:05.662Z",
		"size": 223,
		"path": "../public/assets/blog-D-pftf35.js"
	},
	"/assets/about-B_dL6vod.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12b-OXwXmbhcWd4+5xWqGJstRX6yysA\"",
		"mtime": "2026-08-04T06:17:05.661Z",
		"size": 299,
		"path": "../public/assets/about-B_dL6vod.js"
	},
	"/assets/id-cards-lf50TMlW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df-dBAfONxpXTiOHGB15mxfO2Rfy20\"",
		"mtime": "2026-08-04T06:17:05.664Z",
		"size": 223,
		"path": "../public/assets/id-cards-lf50TMlW.js"
	},
	"/assets/projects-DtHQ9oOJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-ETH7ow82QPX67CzEalk7JqjTqtg\"",
		"mtime": "2026-08-04T06:17:05.665Z",
		"size": 259,
		"path": "../public/assets/projects-DtHQ9oOJ.js"
	},
	"/assets/contact-BKEJFOTD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"323b-JMtRHWTv0zYc3bgmzs6aGoaRMxc\"",
		"mtime": "2026-08-04T06:17:05.663Z",
		"size": 12859,
		"path": "../public/assets/contact-BKEJFOTD.js"
	},
	"/assets/routes-DejqozWM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"201-yRegraB8aKlfjHWR36wbjXgo6qo\"",
		"mtime": "2026-08-04T06:17:05.666Z",
		"size": 513,
		"path": "../public/assets/routes-DejqozWM.js"
	},
	"/assets/services-BBMuHPqS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f6-7+C8inRa3dioz4Fn7DBP+YKQ+3o\"",
		"mtime": "2026-08-04T06:17:05.669Z",
		"size": 246,
		"path": "../public/assets/services-BBMuHPqS.js"
	},
	"/assets/youtube-CdktPVHi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df-jonUdzLtxu6KiQfvAsOQzEsHnt0\"",
		"mtime": "2026-08-04T06:17:05.671Z",
		"size": 223,
		"path": "../public/assets/youtube-CdktPVHi.js"
	},
	"/assets/styles-CnORNQOO.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14a1a-SIVSJs5vWmKxDtXC77u/KnFtERo\"",
		"mtime": "2026-08-04T06:17:05.673Z",
		"size": 84506,
		"path": "../public/assets/styles-CnORNQOO.css"
	},
	"/assets/sections-BPDsllmO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e924-EYKBBuVNtZpDHU5eOzVIrax0r7c\"",
		"mtime": "2026-08-04T06:17:05.667Z",
		"size": 190756,
		"path": "../public/assets/sections-BPDsllmO.js"
	},
	"/assets/index-CV4V-PyA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b927-Zq2a3ZTkc6j5MihMgLwgOdSlPss\"",
		"mtime": "2026-08-04T06:17:05.660Z",
		"size": 440615,
		"path": "../public/assets/index-CV4V-PyA.js"
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
