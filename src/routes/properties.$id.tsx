import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { properties, formatPrice, formatArea } from "@/lib/properties";
import { agents } from "@/lib/agents";
import { PropertyMap } from "@/components/site/PropertyMap";
import { MortgageCalculator } from "@/components/site/MortgageCalculator";

export const Route = createFileRoute("/properties/$id")({
  loader: ({ params }) => {
    const property = properties.find((p) => p.id === params.id);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: "Maison Estate" },
      { name: "description", content: loaderData.property.description },
      { property: "og:title", content: `${loaderData.property.title} — ${loaderData.property.location}` },
      { property: "og:description", content: loaderData.property.description },
      { property: "og:image", content: loaderData.property.image },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <p className="text-[10px] tracking-luxe uppercase text-gold">Not Found</p>
        <h1 className="font-display text-5xl mt-4">This residence is no longer available</h1>
        <Link to="/properties" className="inline-block mt-8 text-xs tracking-luxe uppercase border-b border-ink pb-1">Return to the Collection</Link>
      </div>
    </div>
  ),
  errorComponent: () => <div className="pt-40 text-center">Something went wrong.</div>,
  component: PropertyDetail,
});

function PropertyDetail() {
  const { property } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const agent = agents.find((a) => {
    if (["Mumbai", "Pune", "Lonavala"].includes(property.city)) return a.id === "priya-mehta";
    if (["Bangalore", "Hyderabad", "Chennai", "Goa"].includes(property.city)) return a.id === "arjun-kapoor";
    return a.id === "rajesh-sharma";
  }) ?? agents[0];

  return (
    <>
      {/* HERO IMAGE */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <img src={property.gallery[active]} alt={property.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-veil" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 lg:px-10 pb-16 text-cream">
          <p className="text-[10px] tracking-luxe uppercase text-gold mb-3">{property.type} · {property.location}</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl">{property.title}</h1>
        </div>
      </section>

      {/* GALLERY THUMBS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex gap-4 overflow-x-auto">
          {property.gallery.map((g: string, i: number) => (
            <button key={i} onClick={() => setActive(i)}
              className={`shrink-0 w-32 h-20 overflow-hidden border-2 transition-colors ${i === active ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"}`}>
              <img src={g} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      {/* MAIN */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-baseline gap-x-10 gap-y-4 mb-12">
              <div>
                <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Offered at</p>
                <p className="font-display text-5xl">{formatPrice(property.price)}</p>
              </div>
              <div className="grid grid-cols-3 gap-8">
                {[["Bedrooms", property.beds], ["Bathrooms", property.baths], ["Interior", formatArea(property.area)]].map(([l, v]) => (
                  <div key={l as string}>
                    <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">{l}</p>
                    <p className="font-display text-2xl mt-1">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="gold-divider mb-12 w-24" />

            <p className="text-[10px] tracking-luxe uppercase text-gold mb-4">About this residence</p>
            <p className="font-display text-2xl md:text-3xl leading-snug">{property.description}</p>

            {/* PROPERTY DETAILS */}
            <div className="mt-16 grid sm:grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] tracking-luxe uppercase text-gold mb-3">Location</p>
                <p className="text-foreground/80">{property.location}</p>
                <p className="text-foreground/80">{property.city}, {property.state}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-luxe uppercase text-gold mb-3">Possession</p>
                <p className="text-foreground/80">{property.possession}</p>
                {property.reraId && (
                  <p className="text-foreground/60 text-sm mt-1">RERA: {property.reraId}</p>
                )}
              </div>
            </div>

            <div className="mt-16">
              <p className="text-[10px] tracking-luxe uppercase text-gold mb-6">Distinguishing Features</p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {property.features.map((f: string) => (
                  <li key={f} className="flex items-center gap-3 border-b border-border pb-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* VIRTUAL TOUR */}
            <div className="mt-20">
              <p className="text-[10px] tracking-luxe uppercase text-gold mb-4">Immersive Experience</p>
              <h2 className="font-display text-3xl md:text-4xl mb-8">Virtual tour</h2>
              <div className="relative aspect-video bg-ink overflow-hidden group cursor-pointer">
                <img src={property.gallery[0]} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-ink/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-cream">
                  <div className="w-20 h-20 rounded-full border border-gold flex items-center justify-center group-hover:bg-gold group-hover:text-ink transition-colors">
                    <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor"><path d="M0 0v26l22-13z" /></svg>
                  </div>
                  <p className="mt-6 text-xs tracking-luxe uppercase">Begin 3D Walkthrough</p>
                  <p className="mt-2 text-cream/60 text-sm">Powered by Matterport</p>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="mt-20">
              <p className="text-[10px] tracking-luxe uppercase text-gold mb-4">Location</p>
              <h2 className="font-display text-3xl md:text-4xl mb-8">{property.location}</h2>
              <PropertyMap pins={[{ lat: property.lat, lng: property.lng, label: property.title }]} />
            </div>
          </div>

          {/* SIDEBAR — Agent + Inquiry */}
          <aside className="lg:sticky lg:top-28 self-start">
            <div className="bg-ink text-cream p-8">
              <p className="text-[10px] tracking-luxe uppercase text-gold mb-4">Listing Partner</p>
              <div className="flex items-center gap-4">
                <img src={agent.image} alt={agent.name} className="w-16 h-16 object-cover rounded-full border border-gold/30" />
                <div>
                  <p className="font-display text-xl">{agent.name}</p>
                  <p className="text-xs text-cream/70">{agent.title}</p>
                </div>
              </div>
              <div className="gold-divider my-8" />
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Inquiry sent. A partner will contact you in confidence."); }}>
                <input required placeholder="Your name" className="w-full bg-transparent border-b border-cream/30 py-2 focus:border-gold outline-none text-sm placeholder:text-cream/50" />
                <input required type="email" placeholder="Email address" className="w-full bg-transparent border-b border-cream/30 py-2 focus:border-gold outline-none text-sm placeholder:text-cream/50" />
                <input placeholder="Phone (+91)" className="w-full bg-transparent border-b border-cream/30 py-2 focus:border-gold outline-none text-sm placeholder:text-cream/50" />
                <textarea rows={3} placeholder="Your inquiry" className="w-full bg-transparent border-b border-cream/30 py-2 focus:border-gold outline-none text-sm placeholder:text-cream/50 resize-none" />
                <button className="w-full bg-gold text-ink py-4 text-xs tracking-luxe uppercase hover:bg-cream transition-colors mt-4">Request Private Viewing</button>
              </form>
              <p className="text-xs text-cream/50 mt-4 text-center">{agent.phone}</p>
            </div>

            {/* QUICK FACTS */}
            <div className="mt-6 border border-border p-6">
              <p className="text-[10px] tracking-luxe uppercase text-gold mb-4">Quick Facts</p>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Type</dt>
                  <dd className="font-medium">{property.type}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">City</dt>
                  <dd className="font-medium">{property.city}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">State</dt>
                  <dd className="font-medium">{property.state}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Possession</dt>
                  <dd className="font-medium">{property.possession}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Price</dt>
                  <dd className="font-medium">{formatPrice(property.price)}</dd>
                </div>
                {property.reraId && (
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">RERA ID</dt>
                    <dd className="font-medium text-xs">{property.reraId}</dd>
                  </div>
                )}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* MORTGAGE */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <MortgageCalculator defaultPrice={property.price} />
        </div>
      </section>
    </>
  );
}
