import { Outlet, createFileRoute, Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { LayoutDashboard, Users, Briefcase, Code, Star, Video, Image, Database, FileText } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

const RESOURCES = [
  { name: "Services", path: "/admin/services", icon: Briefcase },
  { name: "Projects", path: "/admin/projects", icon: Code },
  { name: "Skills", path: "/admin/skills", icon: Star },
  { name: "Testimonials", path: "/admin/testimonials", icon: Star },
  { name: "Videos", path: "/admin/videos", icon: Video },
  { name: "ID Gallery", path: "/admin/id-gallery", icon: Image },
  { name: "Posts", path: "/admin/posts", icon: FileText },
  { name: "Campaigns", path: "/admin/campaigns", icon: Database },
];

function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === "/admin/login";

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token && !isLoginPage) {
      navigate({ to: "/admin/login" });
    }
  }, [location.pathname, navigate, isLoginPage]);

  if (isLoginPage) {
    return <Outlet />;
  }

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate({ to: "/admin/login" });
  };

  return (
    <div className="flex min-h-screen bg-muted/20 pt-16">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card p-4 hidden md:flex md:flex-col">
        <div className="flex items-center gap-2 px-2 pb-6 pt-4">
          <LayoutDashboard className="size-5 text-primary" />
          <h2 className="font-semibold tracking-tight">Admin Dashboard</h2>
        </div>
        <nav className="space-y-1">
          {RESOURCES.map((r) => {
            const isActive = location.pathname.startsWith(r.path);
            return (
              <Link
                key={r.path}
                to={r.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <r.icon className="size-4" />
                {r.name}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto pt-6">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-destructive transition-all hover:bg-destructive/10"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8">
        <div className="mx-auto max-w-6xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
