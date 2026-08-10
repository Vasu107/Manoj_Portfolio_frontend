import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
});

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

function AdminLogin() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("adminToken", data.token);
        toast.success("Login successful");
        navigate({ to: "/admin" });
      } else {
        toast.error(data.error || "Login failed");
      }
    } catch (err) {
      toast.error("Network error. Is the server running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/20 px-4">
      <div className="w-full max-w-sm rounded-3xl border border-border bg-card p-8 shadow-elegant">
        <div className="flex flex-col items-center text-center">
          <span className="gradient-accent grid size-12 place-items-center rounded-2xl text-primary-foreground">
            <Lock className="size-6" />
          </span>
          <h1 className="mt-5 text-2xl font-bold tracking-tight">Admin Login</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your secure password to access the portfolio dashboard.
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11"
              required
            />
          </div>
          <Button type="submit" variant="hero" className="h-11 w-full" disabled={loading}>
            {loading ? "Verifying..." : "Login to Dashboard"}
          </Button>
        </form>
      </div>
    </div>
  );
}
