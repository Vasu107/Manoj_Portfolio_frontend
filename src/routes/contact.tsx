import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/motion-primitives";
import { SectionHeading } from "@/components/site/sections";
import { submitContact } from "@/lib/contact.functions";
import { fetchProfile } from "@/lib/portfolio-data";

const title = "Contact — Hire Arman Rehman for Your Next Project";
const description =
  "Get a plan, timeline and fixed quote within 24 hours. Reach out by email, phone, WhatsApp or the contact form.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { data: profile } = useQuery({ queryKey: ["profile"], queryFn: fetchProfile });
  const send = useServerFn(submitContact);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const mutation = useMutation({
    mutationFn: (data: typeof form) => send({ data }),
    onSuccess: (res) => {
      toast.success(res.message);
      setForm({ name: "", email: "", subject: "", message: "" });
    },
    onError: () => toast.error("Something went wrong. Please email me directly."),
  });

  const details = [
    { icon: Mail, label: "Email", value: profile?.email ?? "", href: profile?.email ? `mailto:${profile.email}` : undefined },
    { icon: Phone, label: "Phone", value: profile?.phone ?? "", href: profile?.phone ? `tel:${profile.phone.replace(/\s/g, "")}` : undefined },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: profile?.whatsapp ? `https://wa.me/${profile.whatsapp}` : undefined },
    { icon: MapPin, label: "Location", value: profile?.location ?? "", href: undefined },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something worth showing off"
            subtitle="Share a few details and you'll get a plan, timeline and fixed quote within 24 hours."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.85fr]">
            <Reveal>
              <form
                className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  mutation.mutate(form);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required minLength={2} value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
                  </div>
                </div>
                <div className="mt-5 grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="What do you need?" />
                </div>
                <div className="mt-5 grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required minLength={10} rows={6} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, timeline and budget." />
                </div>
                <Button type="submit" variant="hero" size="xl" className="mt-6 w-full" disabled={mutation.isPending}>
                  {mutation.isPending ? "Sending..." : (<><Send /> Send message</>)}
                </Button>
              </form>
            </Reveal>

            <div className="space-y-4">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 0.06}>
                  <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-primary">
                    <span className="gradient-accent grid size-11 shrink-0 place-items-center rounded-2xl text-primary-foreground">
                      <d.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{d.label}</p>
                      {d.href ? (
                        <a href={d.href} target="_blank" rel="noreferrer" className="truncate text-sm font-semibold hover:text-primary">
                          {d.value}
                        </a>
                      ) : (
                        <p className="truncate text-sm font-semibold">{d.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.24}>
                <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
                  <iframe
                    title="Studio location map" loading="lazy" className="h-64 w-full"
                    src="https://www.google.com/maps?q=Bengaluru&output=embed"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
