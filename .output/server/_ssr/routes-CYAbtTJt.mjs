import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as IdCardSection, c as ProjectsSection, d as ServicesSection, f as SkillsSection, h as YouTubeSection, i as Hero, m as TestimonialsSection, n as BlogSection, o as MarketingSection, p as StatsSection, r as CtaBanner, s as ProcessSection, t as AboutSection } from "./sections-Ds2z1-fc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CYAbtTJt.js
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, { limit: 8 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsSection, {
			limit: 6,
			filterable: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YouTubeSection, { compact: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCardSection, { compact: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogSection, { limit: 3 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { Index as component };
