import { useMemo, useState } from "react";

export function MortgageCalculator({ defaultPrice = 5_000_000 }: { defaultPrice?: number }) {
  const [price, setPrice] = useState(defaultPrice);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(6.25);
  const [years, setYears] = useState(30);

  const { monthly, principal, totalInterest } = useMemo(() => {
    const principal = price * (1 - down / 100);
    const n = years * 12;
    const r = rate / 100 / 12;
    const m = r === 0 ? principal / n : (principal * r) / (1 - Math.pow(1 + r, -n));
    return { monthly: m, principal, totalInterest: m * n - principal };
  }, [price, down, rate, years]);

  const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  const Field = ({ label, value, suffix, onChange, min, max, step }: any) => (
    <label className="block">
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-[10px] tracking-luxe uppercase text-muted-foreground">{label}</span>
        <span className="font-display text-lg">{typeof value === "number" && label === "Property Price" ? fmt(value) : `${value}${suffix ?? ""}`}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--gold)] h-px bg-border appearance-none cursor-pointer" />
    </label>
  );

  return (
    <div className="bg-ink text-cream p-8 md:p-12 border border-gold/20">
      <div className="flex items-baseline justify-between mb-10">
        <div>
          <p className="text-[10px] tracking-luxe uppercase text-gold mb-2">Finance</p>
          <h3 className="font-display text-3xl md:text-4xl">Mortgage Calculator</h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <Field label="Property Price" value={price} onChange={setPrice} min={500_000} max={50_000_000} step={250_000} />
          <Field label="Down Payment" value={down} suffix="%" onChange={setDown} min={5} max={80} step={1} />
          <Field label="Interest Rate" value={rate} suffix="%" onChange={setRate} min={1} max={12} step={0.05} />
          <Field label="Term" value={years} suffix=" yrs" onChange={setYears} min={5} max={40} step={1} />
        </div>

        <div className="flex flex-col justify-between border-l border-gold/20 md:pl-10">
          <div>
            <p className="text-[10px] tracking-luxe uppercase text-gold mb-3">Estimated Monthly</p>
            <p className="font-display text-5xl md:text-6xl text-cream">{fmt(monthly)}</p>
            <div className="gold-divider mt-8 w-20" />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-10 text-sm">
            <div>
              <p className="text-[10px] tracking-luxe uppercase text-cream/60 mb-1">Loan Principal</p>
              <p className="font-display text-2xl">{fmt(principal)}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-luxe uppercase text-cream/60 mb-1">Total Interest</p>
              <p className="font-display text-2xl">{fmt(totalInterest)}</p>
            </div>
          </div>
          <p className="text-xs text-cream/50 mt-8">Estimates only. Final terms determined by our private banking partners.</p>
        </div>
      </div>
    </div>
  );
}
