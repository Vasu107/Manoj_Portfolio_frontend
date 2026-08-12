import { a as __toESM } from "./_runtime.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "./_libs/tanstack__react-query.mjs";
import { h as Plus, o as Trash2, v as Pen } from "./_libs/lucide-react.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { S as cn, n as Route$1, x as Button } from "./_ssr/router-CKYCH6_b.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./_ssr/dialog-C7seaWWe.mjs";
import { t as Input } from "./_ssr/input-DmLpJIxo.mjs";
import { t as Label } from "./_ssr/label-DtvVI4qI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_resource-C1thc_Jn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Table = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
		ref,
		className: cn("w-full caption-bottom text-sm", className),
		...props
	})
}));
Table.displayName = "Table";
var TableHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
	ref,
	className: cn("[&_tr]:border-b", className),
	...props
}));
TableHeader.displayName = "TableHeader";
var TableBody = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
	ref,
	className: cn("[&_tr:last-child]:border-0", className),
	...props
}));
TableBody.displayName = "TableBody";
var TableFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
	ref,
	className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
	...props
}));
TableFooter.displayName = "TableFooter";
var TableRow = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
	ref,
	className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
	...props
}));
TableRow.displayName = "TableRow";
var TableHead = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
	ref,
	className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableHead.displayName = "TableHead";
var TableCell = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
	ref,
	className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableCell.displayName = "TableCell";
var TableCaption = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
	ref,
	className: cn("mt-4 text-sm text-muted-foreground", className),
	...props
}));
TableCaption.displayName = "TableCaption";
var API_BASE = "http://localhost:3001";
function AdminResourcePage() {
	const { resource } = Route$1.useParams();
	const queryClient = useQueryClient();
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const [editingItem, setEditingItem] = (0, import_react.useState)(null);
	const [formData, setFormData] = (0, import_react.useState)({});
	const getHeaders = () => {
		const token = localStorage.getItem("adminToken");
		return {
			"Content-Type": "application/json",
			...token ? { Authorization: `Bearer ${token}` } : {}
		};
	};
	const handleAuthError = (res) => {
		if (res.status === 401 || res.status === 403) {
			localStorage.removeItem("adminToken");
			window.location.href = "/admin/login";
			throw new Error("Session expired. Please log in again.");
		}
	};
	const { data, isLoading, error } = useQuery({
		queryKey: [resource],
		queryFn: async () => {
			const res = await fetch(`${API_BASE}/api/${resource}`);
			if (!res.ok) throw new Error("Failed to fetch");
			return res.json();
		}
	});
	const createMut = useMutation({
		mutationFn: async (payload) => {
			const res = await fetch(`${API_BASE}/api/${resource}`, {
				method: "POST",
				headers: getHeaders(),
				body: JSON.stringify(payload)
			});
			handleAuthError(res);
			if (!res.ok) throw new Error("Failed to create");
			return res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [resource] });
			toast.success("Record created successfully");
			setIsModalOpen(false);
		},
		onError: (e) => toast.error(e.message)
	});
	const updateMut = useMutation({
		mutationFn: async ({ id, payload }) => {
			const res = await fetch(`${API_BASE}/api/${resource}/${id}`, {
				method: "PUT",
				headers: getHeaders(),
				body: JSON.stringify(payload)
			});
			handleAuthError(res);
			if (!res.ok) throw new Error("Failed to update");
			return res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [resource] });
			toast.success("Record updated successfully");
			setIsModalOpen(false);
		},
		onError: (e) => toast.error(e.message)
	});
	const deleteMut = useMutation({
		mutationFn: async (id) => {
			const res = await fetch(`${API_BASE}/api/${resource}/${id}`, {
				method: "DELETE",
				headers: getHeaders()
			});
			handleAuthError(res);
			if (!res.ok) throw new Error("Failed to delete");
			return res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [resource] });
			toast.success("Record deleted successfully");
		},
		onError: (e) => toast.error(e.message)
	});
	const handleOpenNew = () => {
		setEditingItem(null);
		setFormData({});
		setIsModalOpen(true);
	};
	const handleOpenEdit = (item) => {
		setEditingItem(item);
		setFormData(item);
		setIsModalOpen(true);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (editingItem && editingItem.id !== void 0) {
			const { id, ...payload } = formData;
			updateMut.mutate({
				id: editingItem.id,
				payload
			});
		} else createMut.mutate(formData);
	};
	const handleChange = (key, value) => {
		const num = Number(value);
		setFormData((prev) => ({
			...prev,
			[key]: isNaN(num) || value === "" ? value : num
		}));
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-10 text-center animate-pulse",
		children: "Loading data..."
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-10 text-center text-destructive",
		children: "Error loading data."
	});
	const items = Array.isArray(data) ? data : data ? [data] : [];
	const columns = items.length > 0 ? Object.keys(items[0]).filter((k) => k !== "id" && typeof items[0][k] !== "object") : [
		"title",
		"name",
		"desc"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-3xl font-bold capitalize tracking-tight",
					children: ["Manage ", resource.replace("-", " ")]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: handleOpenNew,
					className: "gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add New"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-border bg-card shadow-sm overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					className: "bg-muted/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "w-16 text-center",
							children: "ID"
						}),
						columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "capitalize",
							children: col
						}, col)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "text-right",
							children: "Actions"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					colSpan: columns.length + 2,
					className: "h-24 text-center text-muted-foreground",
					children: "No records found."
				}) }) : items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					className: "hover:bg-muted/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-center font-mono text-xs text-muted-foreground",
							children: item.id
						}),
						columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "max-w-[200px] truncate text-sm",
							children: String(item[col])
						}, col)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									onClick: () => handleOpenEdit(item),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "size-4 text-primary" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									onClick: () => {
										if (confirm("Are you sure you want to delete this record?")) deleteMut.mutate(item.id);
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4 text-destructive" })
								})]
							})
						})
					]
				}, item.id ?? Math.random())) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: isModalOpen,
				onOpenChange: setIsModalOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[85vh] overflow-y-auto sm:max-w-[550px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editingItem ? "Edit Record" : "Create New Record" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "mt-4 space-y-4",
						children: [columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: col,
								className: "capitalize",
								children: col
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: col,
								value: formData[col] ?? "",
								onChange: (e) => handleChange(col, e.target.value),
								placeholder: `Enter ${col}...`
							})]
						}, col)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-4 flex justify-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								onClick: () => setIsModalOpen(false),
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: createMut.isPending || updateMut.isPending,
								children: createMut.isPending || updateMut.isPending ? "Saving..." : "Save Record"
							})]
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { AdminResourcePage as component };
