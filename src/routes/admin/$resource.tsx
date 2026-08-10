import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/$resource")({
  component: AdminResourcePage,
});

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

function AdminResourcePage() {
  const { resource } = Route.useParams();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});

  // --- Queries & Mutations ---
  
  const getHeaders = () => {
    const token = localStorage.getItem("adminToken");
    return {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  };

  const handleAuthError = (res: Response) => {
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
    },
  });

  const createMut = useMutation({
    mutationFn: async (payload: any) => {
      const res = await fetch(`${API_BASE}/api/${resource}`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(payload),
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
    onError: (e) => toast.error(e.message),
  });

  const updateMut = useMutation({
    mutationFn: async ({ id, payload }: { id: string | number; payload: any }) => {
      const res = await fetch(`${API_BASE}/api/${resource}/${id}`, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(payload),
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
    onError: (e) => toast.error(e.message),
  });

  const deleteMut = useMutation({
    mutationFn: async (id: string | number) => {
      const res = await fetch(`${API_BASE}/api/${resource}/${id}`, { 
        method: "DELETE",
        headers: getHeaders(),
      });
      handleAuthError(res);
      if (!res.ok) throw new Error("Failed to delete");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [resource] });
      toast.success("Record deleted successfully");
    },
    onError: (e) => toast.error(e.message),
  });

  // --- Handlers ---

  const handleOpenNew = () => {
    setEditingItem(null);
    setFormData({});
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: any) => {
    setEditingItem(item);
    setFormData(item);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem && editingItem.id !== undefined) {
      // Remove id from payload to avoid updating PK
      const { id, ...payload } = formData;
      updateMut.mutate({ id: editingItem.id, payload });
    } else {
      createMut.mutate(formData);
    }
  };

  const handleChange = (key: string, value: string) => {
    // Attempt to keep numbers as numbers
    const num = Number(value);
    setFormData((prev: any) => ({ ...prev, [key]: isNaN(num) || value === "" ? value : num }));
  };

  // --- Render Helpers ---

  if (isLoading) return <div className="p-10 text-center animate-pulse">Loading data...</div>;
  if (error) return <div className="p-10 text-center text-destructive">Error loading data.</div>;

  const items = Array.isArray(data) ? data : data ? [data] : [];
  // Exclude ID and complex nested objects from generic table columns
  const columns = items.length > 0 
    ? Object.keys(items[0]).filter(k => k !== 'id' && typeof items[0][k] !== 'object')
    : ['title', 'name', 'desc']; // Fallbacks

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold capitalize tracking-tight">
          Manage {resource.replace("-", " ")}
        </h1>
        <Button onClick={handleOpenNew} className="gap-2">
          <Plus className="size-4" /> Add New
        </Button>
      </div>

      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-16 text-center">ID</TableHead>
              {columns.map((col) => (
                <TableHead key={col} className="capitalize">{col}</TableHead>
              ))}
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length + 2} className="h-24 text-center text-muted-foreground">
                  No records found.
                </TableCell>
              </TableRow>
            ) : (
              items.map((item: any) => (
                <TableRow key={item.id ?? Math.random()} className="hover:bg-muted/30">
                  <TableCell className="text-center font-mono text-xs text-muted-foreground">
                    {item.id}
                  </TableCell>
                  {columns.map((col) => (
                    <TableCell key={col} className="max-w-[200px] truncate text-sm">
                      {String(item[col])}
                    </TableCell>
                  ))}
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleOpenEdit(item)}>
                        <Edit2 className="size-4 text-primary" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                          if (confirm("Are you sure you want to delete this record?")) {
                            deleteMut.mutate(item.id);
                          }
                        }}
                      >
                        <Trash2 className="size-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>{editingItem ? "Edit Record" : "Create New Record"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            {columns.map((col) => (
              <div key={col} className="grid gap-2">
                <Label htmlFor={col} className="capitalize">{col}</Label>
                <Input
                  id={col}
                  value={formData[col] ?? ""}
                  onChange={(e) => handleChange(col, e.target.value)}
                  placeholder={`Enter ${col}...`}
                />
              </div>
            ))}
            <div className="pt-4 flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={createMut.isPending || updateMut.isPending}>
                {createMut.isPending || updateMut.isPending ? "Saving..." : "Save Record"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
