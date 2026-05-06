import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Kavi Priya R" },
      {
        name: "description",
        content:
          "Let's work together. Reach Kavi Priya R via email, phone, or WhatsApp — Tambaram, Chennai, India.",
      },
      { property: "og:title", content: "Contact — Kavi Priya R" },
      {
        property: "og:description",
        content: "Get in touch to start your next digital marketing project.",
      },
    ],
  }),
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Kavi,\n\nMy name is ${name} (${email}).\n\n${message}`,
    );
    window.open(`https://wa.me/919042551631?text=${text}`, "_blank");
  };

  return (
    <SiteLayout>
      <section className="px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-28 pb-12 sm:pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-velocity mb-6">
            / Contact
          </p>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,8vw,7rem)] leading-[0.9] tracking-tighter uppercase italic break-words">
            Let's work <span className="text-kinetic">together.</span>
          </h1>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 lg:gap-12">
          {/* Form */}
          <form onSubmit={sendWhatsApp} className="col-span-12 lg:col-span-7 space-y-5 sm:space-y-6">
            <Field
              label="Name"
              value={name}
              onChange={setName}
              placeholder="Your full name"
            />
            <Field
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="you@example.com"
            />
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Message
              </label>
              <textarea
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className="w-full bg-surface border border-border px-4 sm:px-5 py-3.5 sm:py-4 text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-velocity transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 min-h-12 w-full sm:w-auto justify-center bg-velocity text-primary-foreground font-bold uppercase text-xs tracking-widest hover:bg-kinetic hover:text-accent-foreground transition-all duration-300"
            >
              <Send size={14} />
              Send via WhatsApp
            </button>
          </form>

          {/* Contact details */}
          <aside className="col-span-12 lg:col-span-5 lg:border-l border-border lg:pl-12 pt-6 lg:pt-0 border-t lg:border-t-0">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-velocity mb-8">
              Get in Touch
            </p>

            <div className="space-y-8">
              <ContactItem
                icon={<Mail size={18} />}
                label="Email"
                value="kavi.official.49@gmail.com"
                href="mailto:kavi.official.49@gmail.com"
              />
              <ContactItem
                icon={<Phone size={18} />}
                label="Phone"
                value="+91 9042551631"
                href="tel:+919042551631"
              />
              <ContactItem
                icon={<MapPin size={18} />}
                label="Address"
                value="Tambaram, Chennai, Tamil Nadu"
              />
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-velocity mb-4">
                Languages
              </p>
              <div className="flex flex-wrap gap-2">
                {["Tamil", "English"].map((l) => (
                  <span
                    key={l}
                    className="text-xs uppercase tracking-widest font-bold px-3 py-1.5 bg-secondary text-foreground"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/919042551631"
              target="_blank"
              rel="noreferrer"
              className="mt-10 sm:mt-12 group flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 min-h-12 bg-kinetic text-accent-foreground font-bold uppercase text-xs tracking-widest hover:bg-velocity hover:text-primary-foreground transition-all"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        {label}
      </label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-surface border border-border px-4 sm:px-5 py-3.5 sm:py-4 text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-velocity transition-colors"
      />
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <span className="text-velocity mt-1 group-hover:text-kinetic transition-colors">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
          {label}
        </p>
        <p className="text-foreground font-medium break-all">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:text-kinetic transition-colors">
      {content}
    </a>
  ) : (
    content
  );
}