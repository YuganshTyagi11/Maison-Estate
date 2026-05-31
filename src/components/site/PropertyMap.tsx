type Pin = { lat: number; lng: number; label?: string };

export function PropertyMap({ pins, height = 420 }: { pins: Pin[]; height?: number }) {
  if (pins.length === 0) {
    return (
      <div className="relative border border-border overflow-hidden bg-muted flex items-center justify-center" style={{ height }}>
        <p className="text-muted-foreground text-sm">No locations to display</p>
      </div>
    );
  }

  const main = pins[0];

  if (pins.length === 1) {
    const delta = 0.05;
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

  const lats = pins.map((p) => p.lat);
  const lngs = pins.map((p) => p.lng);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);
  const padding = 0.5;
  const bbox = [minLng - padding, minLat - padding, maxLng + padding, maxLat + padding].join(",");

  const markers = pins.map((p) => `&marker=${p.lat},${p.lng}`).join("");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik${markers}`;

  return (
    <div className="relative border border-border overflow-hidden bg-muted" style={{ height }}>
      <iframe
        title="Property locations map"
        src={src}
        className="w-full h-full grayscale-[40%] contrast-105"
        loading="lazy"
      />
      <div className="absolute top-4 left-4 bg-ink/85 backdrop-blur text-cream px-4 py-2 text-[10px] tracking-luxe uppercase border border-gold/30">
        {pins.length} {pins.length === 1 ? "Location" : "Locations"}
      </div>
    </div>
  );
}
