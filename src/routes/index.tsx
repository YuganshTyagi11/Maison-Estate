import { createFileRoute, Link } from "@tanstack/react-router";
import { properties } from "@/lib/properties";

const hero = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop";
import { agents } from "@/lib/agents";
import { PropertyCard } from "@/components/site/PropertyCard";
import { MortgageCalculator } from "@/components/site/MortgageCalculator";
import { SearchFilters } from "@/components/site/SearchFilters";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Estate" },
      { name: "description", content: "Discover India's most distinguished residences. Curated villas, penthouses, havelis, and estates from Mumbai to Udaipur." },
      { property: "og:title", content: "Maison Estate — Distinguished Indian Residences" },
      { property: "og:description", content: "India's premier private brokerage. Discretion, expertise, and nationwide reach since 2005." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=630&fit=crop" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = properties.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" width={1920} height={1080} className="w-full h-full object-cover animate-ken-burns" />
          <div className="absolute inset-0 hero-veil" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pb-32 pt-40 w-full text-cream">
          <p className="text-[10px] tracking-luxe uppercase text-gold mb-6 animate-fade-up">Est. 2005 · India's Premier Private Brokerage</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl max-w-5xl leading-[1.02] animate-fade-up" style={{ animationDelay: "120ms" }}>
            Residences for those who <em className="italic text-gold/95">curate</em> a life of consequence.
          </h1>
          <div className="mt-10 max-w-3xl animate-fade-up" style={{ animationDelay: "240ms" }}>
            <p className="text-cream/85 text-lg leading-relaxed">
              From Lutyens Delhi to Goa's coastline, from Mumbai's Marine Drive to Jaipur's royal quarters — a private collection of India's most considered homes, represented with absolute discretion.
            </p>
          </div>

          <div className="mt-16 animate-fade-up" style={{ animationDelay: "360ms" }}>
            <SearchFilters />
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-10 text-cream text-[10px] tracking-luxe uppercase rotate-180" style={{ writingMode: "vertical-rl" }}>
          Scroll to discover
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            ["₹10,500 Cr+", "Lifetime Sales"],
            ["16", "Cities"],
            ["850+", "Estates Sold"],
            ["19 Yrs", "Of Discretion"],
          ].map(([v, l]) => (
            <div key={l} className="px-6 py-12 text-center">
              <p className="font-display text-4xl md:text-5xl text-ink">{v}</p>
              <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mt-3">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-[10px] tracking-luxe uppercase text-gold mb-3">The Collection</p>
              <h2 className="font-display text-4xl md:text-6xl max-w-xl leading-tight">Featured residences this season</h2>
            </div>
            <Link to="/properties" className="text-xs tracking-luxe uppercase border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors self-start md:self-auto">
              View Full Portfolio
            </Link>
          </div>
          <div className="gold-divider mb-16" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {featured.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="bg-ink text-cream py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-luxe uppercase text-gold mb-4">A different kind of brokerage</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              We do not list homes. We <em className="italic text-gold">introduce</em> them.
            </h2>
            <div className="gold-divider w-24 my-10" />
            <p className="text-cream/80 text-lg leading-relaxed">
              For nearly two decades, Maison Estate has represented residences too consequential for public listing — from heritage havelis in Rajasthan to sea-facing penthouses in Mumbai. Every introduction is private. Every viewing, by invitation. Every transaction, a confidence kept.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/agents" className="px-8 py-4 bg-gold text-ink text-xs tracking-luxe uppercase hover:bg-cream transition-colors">Meet Our Partners</Link>
              <Link to="/contact" className="px-8 py-4 border border-gold text-gold text-xs tracking-luxe uppercase hover:bg-gold hover:text-ink transition-colors">Request Private Access</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={properties[2].image} alt="" loading="lazy" className="aspect-[3/4] object-cover w-full" />
            <img src={properties[1].image} alt="" loading="lazy" className="aspect-[3/4] object-cover w-full mt-12" />
          </div>
        </div>
      </section>

      {/* AGENTS PREVIEW */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[10px] tracking-luxe uppercase text-gold mb-3">Our Partners</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">Advisors of singular conviction</h2>
            <div className="gold-divider w-24 mx-auto mt-8" />
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {agents.map((a, i) => (
              <Link key={a.id} to="/agents" className="group block animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={a.image} alt={a.name} loading="lazy" className="w-full h-full object-cover img-zoom" />
                </div>
                <div className="pt-6 text-center">
                  <h3 className="font-display text-2xl">{a.name}</h3>
                  <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mt-2">{a.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MORTGAGE */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[10px] tracking-luxe uppercase text-gold mb-3">Private Banking</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">Calculate your EMI</h2>
            <div className="gold-divider w-24 mx-auto mt-8" />
          </div>
          <MortgageCalculator />
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${properties[3].image})` }}
      >
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-cream">
          <p className="text-[10px] tracking-luxe uppercase text-gold mb-4">By Invitation</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            The next residence in your story <em className="italic">awaits</em>.
          </h2>
          <p className="mt-8 text-cream/85 text-lg">Speak with a partner. Schedule a private viewing. Inquire in confidence.</p>
          <Link to="/contact" className="inline-block mt-10 px-12 py-5 bg-gold text-ink text-xs tracking-luxe uppercase hover:bg-cream transition-colors">
            Request Private Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
