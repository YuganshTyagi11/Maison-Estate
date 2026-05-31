import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/agents", label: "Agents" },
  { to: "/tours", label: "Virtual Tours" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border text-foreground"
          : "bg-transparent text-cream"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-tight">Maison</span>
          <span className="text-gold font-display text-2xl italic">Estate</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-xs tracking-luxe uppercase font-medium relative py-2 hover:text-gold transition-colors data-[status=active]:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 border border-gold text-xs tracking-luxe uppercase hover:bg-gold hover:text-ink transition-colors"
        >
          Book a Viewing
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
        >
          <div className="w-6 h-px bg-current mb-1.5" />
          <div className="w-6 h-px bg-current mb-1.5" />
          <div className="w-4 h-px bg-current ml-auto" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink text-cream border-t border-gold/30 animate-fade-up">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm tracking-luxe uppercase py-2 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
