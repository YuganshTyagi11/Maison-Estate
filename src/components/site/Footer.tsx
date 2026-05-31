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
              India's premier private brokerage representing the nation's most
              distinguished residences. Discretion, expertise, and an unmatched
              network since 2005.
            </p>
            <div className="gold-divider w-24 mt-8" />
            <p className="mt-6 text-xs tracking-luxe uppercase text-gold/80">Members</p>
            <p className="mt-2 text-sm text-cream/60">
              NAR-India · CREDAI · Luxury Portfolio International · Forbes Global Properties
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
              <li>Mumbai · Bandra Kurla Complex</li>
              <li>New Delhi · Connaught Place</li>
              <li>Bangalore · Indiranagar 100 Ft Road</li>
              <li>Goa · Assagao</li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-16" />
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-xs text-cream/50 gap-3">
          <p>© {new Date().getFullYear()} Maison Estate India. All rights reserved. RERA Registered.</p>
          <p className="tracking-luxe uppercase">Discretion · Excellence · Legacy</p>
        </div>
      </div>
    </footer>
  );
}
