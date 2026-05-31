import { createFileRoute } from "@tanstack/react-router";
import { agents } from "@/lib/agents";

export const Route = createFileRoute("/agents")({
  head: () => ({
    meta: [
      { title: "Maison Estate" },
      { name: "description", content: "Meet the senior advisors of Maison Estate — partners with decades of experience brokering India's most distinguished residences." },
      { property: "og:title", content: "Our Partners — Maison Estate India" },
      { property: "og:description", content: "Advisors of singular conviction." },
    ],
  }),
  component: AgentsPage,
});

function AgentsPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[10px] tracking-luxe uppercase text-gold mb-4">Our Partners</p>
          <h1 className="font-display text-5xl md:text-7xl max-w-3xl leading-tight">
            Advisors of <em className="italic text-gold">singular</em> conviction
          </h1>
          <p className="mt-8 max-w-2xl text-cream/75 text-lg">
            Each partner brings decades of relationships, taste, and discretion to a single purpose: matching India's most consequential homes to the people who will inhabit them next.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-32">
          {agents.map((a, i) => (
            <article key={a.id} className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img src={a.image} alt={a.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[10px] tracking-luxe uppercase text-gold mb-3">{a.title}</p>
                <h2 className="font-display text-5xl leading-tight">{a.name}</h2>
                <div className="gold-divider w-24 my-8" />
                <p className="text-lg leading-relaxed text-foreground/80">{a.bio}</p>

                <div className="grid grid-cols-2 gap-8 mt-10 pt-8 border-t border-border">
                  <div>
                    <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-1">Lifetime Sales</p>
                    <p className="font-display text-2xl">{a.sales}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-1">Languages</p>
                    <p className="font-display text-2xl">{a.languages.join(" · ")}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-1">Specialization</p>
                  <p className="text-foreground/80">{a.specialization}</p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a href={`mailto:${a.email}`} className="px-7 py-3.5 bg-ink text-cream text-xs tracking-luxe uppercase hover:bg-gold hover:text-ink transition-colors">Email {a.name.split(" ")[0]}</a>
                  <a href={`tel:${a.phone.replace(/\s/g, "")}`} className="px-7 py-3.5 border border-ink text-xs tracking-luxe uppercase hover:bg-ink hover:text-cream transition-colors">{a.phone}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
