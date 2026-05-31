import { Link } from "@tanstack/react-router";
import type { Property } from "@/lib/properties";
import { formatPrice, formatArea } from "@/lib/properties";

export function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  return (
    <Link
      to="/properties/$id"
      params={{ id: property.id }}
      className="group block animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-muted">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          width={1280}
          height={896}
          className="absolute inset-0 w-full h-full object-cover img-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        <div className="absolute top-5 left-5 text-[10px] tracking-luxe uppercase text-cream bg-ink/60 backdrop-blur px-3 py-1.5 border border-gold/40">
          {property.type}
        </div>
        {property.reraId && (
          <div className="absolute top-5 right-5 text-[9px] tracking-wider uppercase text-cream/80 bg-ink/50 backdrop-blur px-2 py-1">
            RERA
          </div>
        )}
        <div className="absolute bottom-0 inset-x-0 p-6 text-cream">
          <p className="text-[10px] tracking-luxe uppercase text-gold/90 mb-2">{property.location}</p>
          <h3 className="font-display text-2xl md:text-3xl leading-tight">{property.title}</h3>
        </div>
      </div>
      <div className="pt-5 flex items-end justify-between">
        <div>
          <p className="text-xs tracking-luxe uppercase text-muted-foreground">{property.beds} BD · {property.baths} BA · {formatArea(property.area)}</p>
          <p className="font-display text-2xl mt-1">{formatPrice(property.price)}</p>
        </div>
        <span className="text-xs tracking-luxe uppercase text-gold border-b border-gold pb-0.5 group-hover:tracking-[0.4em] transition-all">View</span>
      </div>
    </Link>
  );
}
