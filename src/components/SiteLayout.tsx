import { Link, useRouterState } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-background text-foreground antialiased overflow-x-hidden">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
          <Link to="/" className="font-display font-extrabold text-lg sm:text-xl md:text-2xl tracking-tighter uppercase shrink-0">
            Kavi<span className="text-velocity">Priya</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV.map((n) => {
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`kinetic-link px-2 py-1 text-xs font-bold tracking-widest uppercase transition-colors ${
                    active ? "text-velocity" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="magnetic-action px-5 py-2.5 bg-velocity text-primary-foreground text-[11px] font-bold uppercase tracking-widest hover:bg-kinetic hover:text-accent-foreground transition-all duration-300"
            >
              Hire Me
            </Link>
          </div>

          <button
            className="md:hidden p-2.5 -mr-2 text-foreground active:scale-95 transition-transform"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-border bg-background reveal-rise">
            <div className="px-4 sm:px-6 py-5 flex flex-col gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`kinetic-link px-3 py-3.5 text-sm font-bold tracking-widest uppercase border-b border-border/60 last:border-b-0 ${
                    pathname === n.to ? "text-velocity" : "text-foreground"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 magnetic-action inline-flex items-center justify-center gap-3 px-5 py-3.5 bg-velocity text-primary-foreground text-[11px] font-bold uppercase tracking-widest"
              >
                Hire Me
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main key={pathname} className="kinetic-page-transition">
        {children}
      </main>

      <footer className="border-t border-border mt-16 sm:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-display font-extrabold text-2xl tracking-tighter uppercase mb-3">
              Kavi<span className="text-velocity">Priya</span> R
            </div>
            <p className="text-muted-foreground max-w-xs">
              Digital Marketing Executive — turning data into measurable growth.
            </p>
          </div>
          <div className="break-words">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Contact
            </p>
            <a href="mailto:kavi.official.49@gmail.com" className="text-foreground hover:text-velocity transition-colors break-all">kavi.official.49@gmail.com</a>
            <p><a href="tel:+919042551631" className="text-foreground hover:text-velocity transition-colors">+91 9042551631</a></p>
            <p className="text-muted-foreground mt-1">Tambaram, Chennai, India</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Navigate
            </p>
            <div className="grid grid-cols-2 gap-y-2">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} className="text-foreground hover:text-velocity transition-colors">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-5 sm:py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Kavi Priya R. All rights reserved.</span>
            <span className="font-display uppercase tracking-widest">Data in Motion.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}