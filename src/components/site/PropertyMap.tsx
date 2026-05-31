type Pin = { lat: number; lng: number; label?: string };

// Lightweight static-feel interactive map using OpenStreetMap embed (no key required).
export function PropertyMap({ pins, height = 420 }: { pins: Pin[]; height?: number }) {
  const main = pins[0];
  const delta = 0.02;
  const bbox = [main.lng - delta, main.lat - delta, main.lng + delta, main.lat + delta].join(",");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${main.lat},${main.lng}`;
  return (
    <div className="relative border border-border overflow-hidden bg-muted" style={{ height }}>
      <iframe
        title="Location map"
        src={src}
        className="w-full h-full grayscale-[40%] contrast-105"
        loading="lazy"
      />
      <div className="absolute top-4 left-4 bg-ink/85 backdrop-blur text-cream px-4 py-2 text-[10px] tracking-luxe uppercase border border-gold/30">
        {main.label ?? "Location"}
      </div>
    </div>
  );
}
