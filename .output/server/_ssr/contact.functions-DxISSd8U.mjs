import { r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-DbFi1nP42.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.functions-DxISSd8U.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var submitContact_createServerFn_handler = createServerRpc({
	id: "1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd",
	name: "submitContact",
	filename: "src/lib/contact.functions.ts"
}, (opts) => submitContact.__executeServer(opts));
var submitContact = createServerFn({ method: "POST" }).inputValidator((data) => contactSchema.parse(data)).handler(submitContact_createServerFn_handler, async ({ data }) => {
	console.log("[contact] new enquiry", {
		name: data.name,
		email: data.email,
		subject: data.subject
	});
	try {
		const backendUrl = processModule.env.BACKEND_URL || "http://localhost:3001";
		if (!(await fetch(`${backendUrl}/api/contact`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		})).ok) throw new Error("Failed to submit to backend");
		return {
			ok: true,
			message: `Thanks ${data.name}, your message is in. I reply within 24 hours.`
		};
	} catch (error) {
		console.error("[contact] backend error", error);
		throw new Error("Failed to submit contact message");
	}
});
//#endregion
export { submitContact_createServerFn_handler };
