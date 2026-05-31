import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-cream mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl">Maison</span>
              <span className="text-gold font-display text-3xl italic">Estate</span>
            </div>
            <p className="mt-6 max-w-md text-cream/70 leading-relaxed">
              A private brokerage representing the world's most distinguished
              residences. Discretion, expertise, and a global reach since 1987.
            </p>
            <div className="gold-divider w-24 mt-8" />
            <p className="mt-6 text-xs tracking-luxe uppercase text-gold/80">Members</p>
            <p className="mt-2 text-sm text-cream/60">
              Forbes Global Properties · Luxury Portfolio International · Mayfair International
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-luxe uppercase text-gold mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li><Link to="/properties" className="hover:text-gold transition-colors">Properties</Link></li>
              <li><Link to="/agents" className="hover:text-gold transition-colors">Our Agents</Link></li>
              <li><Link to="/tours" className="hover:text-gold transition-colors">Virtual Tours</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-luxe uppercase text-gold mb-5">Offices</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>Paris · 8 Avenue Montaigne</li>
              <li>New York · 432 Park Avenue</li>
              <li>Milan · Via Monte Napoleone 12</li>
              <li>Dubai · Burj Khalifa Boulevard</li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-16" />
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-xs text-cream/50 gap-3">
          <p>© {new Date().getFullYear()} Maison Estate. All rights reserved.</p>
          <p className="tracking-luxe uppercase">Discretion · Excellence · Legacy</p>
        </div>
      </div>
    </footer>
  );
}
