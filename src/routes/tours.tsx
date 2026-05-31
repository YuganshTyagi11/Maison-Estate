import { createFileRoute, Link } from "@tanstack/react-router";
import { properties } from "@/lib/properties";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Maison Estate" },
      { name: "description", content: "Step inside our portfolio. Cinematic 3D walkthroughs of India's most distinguished private residences." },
      { property: "og:title", content: "Virtual Tours — Maison Estate India" },
      { property: "og:description", content: "Cinematic 3D walkthroughs of distinguished Indian residences." },
    ],
  }),
  component: ToursPage,
});

function ToursPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[10px] tracking-luxe uppercase text-gold mb-4">Immersive</p>
          <h1 className="font-display text-5xl md:text-7xl max-w-4xl leading-tight">
            Step inside, from <em className="italic text-gold">anywhere</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-cream/75 text-lg">
            Cinematic 3D walkthroughs, drone cinematography, and twilight photography — produced in-house for every residence in our portfolio.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-12">
          {properties.map((p, i) => (
            <Link key={p.id} to="/properties/$id" params={{ id: p.id }} className="group block animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="relative aspect-video overflow-hidden bg-ink">
                <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover img-zoom opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center text-cream group-hover:bg-gold group-hover:text-ink transition-all">
                    <svg width="18" height="22" viewBox="0 0 22 26" fill="currentColor"><path d="M0 0v26l22-13z" /></svg>
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 text-cream">
                  <p className="text-[10px] tracking-luxe uppercase text-gold">{p.location}</p>
                  <h3 className="font-display text-2xl mt-1">{p.title}</h3>
                </div>
                <div className="absolute top-5 right-5 text-[10px] tracking-luxe uppercase text-cream bg-ink/70 backdrop-blur px-3 py-1.5 border border-gold/40">
                  3D Tour · 4K
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
