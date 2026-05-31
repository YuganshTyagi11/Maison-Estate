import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

const types = ["Any", "Villa", "Penthouse", "Farmhouse", "Haveli", "Bungalow", "Duplex"];
const locations = [
  "Anywhere",
  "Mumbai",
  "New Delhi",
  "Gurugram",
  "Bangalore",
  "Goa",
  "Jaipur",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Kolkata",
  "Udaipur",
  "Shimla",
  "Lonavala",
  "Amritsar",
  "Chandigarh",
];
const budgets = ["Any", "₹5 Cr+", "₹10 Cr+", "₹25 Cr+", "₹50 Cr+", "₹100 Cr+"];

export function SearchFilters({ variant = "hero" }: { variant?: "hero" | "page" }) {
  const navigate = useNavigate();
  const [location, setLocation] = useState("Anywhere");
  const [type, setType] = useState("Any");
  const [budget, setBudget] = useState("Any");

  const Select = ({ label, value, onChange, options }: any) => (
    <label className="flex-1 min-w-[160px] flex flex-col gap-2 px-6 py-4">
      <span className="text-[10px] tracking-luxe uppercase text-gold/90">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-0 outline-none font-display text-lg cursor-pointer appearance-none"
      >
        {options.map((o: string) => <option key={o} className="bg-ink text-cream">{o}</option>)}
      </select>
    </label>
  );

  return (
    <div className={`${variant === "hero" ? "bg-cream/95 backdrop-blur text-ink" : "bg-ink text-cream"} border border-gold/30 flex flex-col md:flex-row md:items-stretch divide-y md:divide-y-0 md:divide-x divide-border`}>
      <Select label="Location" value={location} onChange={setLocation} options={locations} />
      <Select label="Type" value={type} onChange={setType} options={types} />
      <Select label="Budget" value={budget} onChange={setBudget} options={budgets} />
      <button
        onClick={() => navigate({ to: "/properties", search: { location, type, budget } as any })}
        className="bg-ink text-cream px-10 py-6 text-xs tracking-luxe uppercase hover:bg-gold hover:text-ink transition-colors"
      >
        Search Estates
      </button>
    </div>
  );
}
