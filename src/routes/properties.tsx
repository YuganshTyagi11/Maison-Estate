import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { properties, formatPrice } from "@/lib/properties";
import { PropertyCard } from "@/components/site/PropertyCard";
import { PropertyMap } from "@/components/site/PropertyMap";

type Search = { location?: string; type?: string; budget?: string };

export const Route = createFileRoute("/properties")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    location: typeof s.location === "string" ? s.location : undefined,
    type: typeof s.type === "string" ? s.type : undefined,
    budget: typeof s.budget === "string" ? s.budget : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Maison Estate" },
      { name: "description", content: "Browse our private collection of villas, penthouses, havelis, and estates across India's most coveted addresses." },
      { property: "og:title", content: "The Collection — Maison Estate India" },
      { property: "og:description", content: "Private collection of distinguished Indian residences." },
    ],
  }),
  component: PropertiesPage,
});

const TYPES = ["All", "Villa", "Penthouse", "Farmhouse", "Haveli", "Bungalow", "Duplex"];
const BUDGETS = [
  { label: "Any", min: 0 },
  { label: "₹5 Cr+", min: 5_00_00_000 },
  { label: "₹10 Cr+", min: 10_00_00_000 },
  { label: "₹25 Cr+", min: 25_00_00_000 },
  { label: "₹50 Cr+", min: 50_00_00_000 },
  { label: "₹100 Cr+", min: 100_00_00_000 },
];

function PropertiesPage() {
  const initial = Route.useSearch();
  const [type, setType] = useState(initial.type && TYPES.includes(initial.type) ? initial.type : "All");
  const [budget, setBudget] = useState(initial.budget ?? "Any");
  const [query, setQuery] = useState(initial.location && initial.location !== "Anywhere" ? initial.location : "");
  const [sort, setSort] = useState<"featured" | "low" | "high">("featured");
  const [stateFilter, setStateFilter] = useState("All");

  const states = useMemo(() => {
    const s = new Set(properties.map((p) => p.state));
    return ["All", ...Array.from(s).sort()];
  }, []);

  const list = useMemo(() => {
    const minBudget = BUDGETS.find((b) => b.label === budget)?.min ?? 0;
    let out = properties.filter((p) => {
      if (type !== "All" && p.type !== type) return false;
      if (p.price < minBudget) return false;
      if (stateFilter !== "All" && p.state !== stateFilter) return false;
      if (query) {
        const searchable = `${p.location} ${p.city} ${p.state} ${p.title} ${p.country}`.toLowerCase();
        if (!searchable.includes(query.toLowerCase())) return false;
      }
      return true;
    });
    if (sort === "low") out = [...out].sort((a, b) => a.price - b.price);
    if (sort === "high") out = [...out].sort((a, b) => b.price - a.price);
    return out;
  }, [type, budget, query, sort, stateFilter]);

  return (
    <>
      <section className="pt-36 pb-12 bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[10px] tracking-luxe uppercase text-gold mb-4">The Collection</p>
          <h1 className="font-display text-5xl md:text-7xl max-w-3xl leading-tight">
            Residences in our <em className="italic text-gold">portfolio</em>
          </h1>
          <p className="mt-8 max-w-2xl text-cream/75 text-lg">
            {properties.length} private listings across {new Set(properties.map((p) => p.state)).size} states. All RERA verified. Available by appointment.
          </p>
        </div>
      </section>

      <section className="sticky top-20 z-30 bg-cream/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex flex-wrap items-center gap-6">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by city, state, or property name"
              className="bg-transparent border-b border-border focus:border-gold outline-none py-2 px-1 text-sm min-w-[220px] placeholder:text-muted-foreground"
            />
            <select value={stateFilter} onChange={(e) => setStateFilter(e.target.value)}
              className="bg-transparent border-b border-border focus:border-gold outline-none py-2 text-sm">
              {states.map((s) => <option key={s}>{s}</option>)}
            </select>
            <div className="flex gap-1 flex-wrap">
              {TYPES.map((t) => (
                <button key={t} onClick={() => setType(t)}
                  className={`px-4 py-2 text-[10px] tracking-luxe uppercase border ${type === t ? "bg-ink text-cream border-ink" : "border-border hover:border-gold"}`}>
                  {t}
                </button>
              ))}
            </div>
            <select value={budget} onChange={(e) => setBudget(e.target.value)}
              className="bg-transparent border-b border-border focus:border-gold outline-none py-2 text-sm">
              {BUDGETS.map((b) => <option key={b.label}>{b.label}</option>)}
            </select>
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value as any)}
            className="bg-transparent border-b border-border focus:border-gold outline-none py-2 text-sm">
            <option value="featured">Sort: Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {list.length === 0 ? (
            <div className="text-center py-32">
              <p className="font-display text-3xl text-muted-foreground mb-4">No residences match your criteria</p>
              <p className="text-sm text-muted-foreground">Try adjusting your filters or search a different city</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-8">{list.length} {list.length === 1 ? "residence" : "residences"} found</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {list.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
              </div>
            </>
          )}

          <div className="mt-24">
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-[10px] tracking-luxe uppercase text-gold mb-2">Pan India</p>
                <h2 className="font-display text-3xl md:text-4xl">Explore our locations</h2>
              </div>
              <p className="text-xs text-muted-foreground">{list.length} estates shown</p>
            </div>
            <PropertyMap pins={list.length ? list.map((p) => ({ lat: p.lat, lng: p.lng, label: p.title })) : [{ lat: 20.5937, lng: 78.9629, label: "India" }]} height={520} />
            <p className="mt-3 text-xs text-muted-foreground">Total portfolio value: <span className="text-ink font-medium">{formatPrice(list.reduce((s, p) => s + p.price, 0))}</span></p>
          </div>
        </div>
      </section>
    </>
  );
}
