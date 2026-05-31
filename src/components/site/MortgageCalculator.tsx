import { useMemo, useState } from "react";

export function MortgageCalculator({ defaultPrice = 5_00_00_000 }: { defaultPrice?: number }) {
  const [price, setPrice] = useState(defaultPrice);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const { monthly, principal, totalInterest } = useMemo(() => {
    const principal = price * (1 - down / 100);
    const n = years * 12;
    const r = rate / 100 / 12;
    const m = r === 0 ? principal / n : (principal * r) / (1 - Math.pow(1 + r, -n));
    return { monthly: m, principal, totalInterest: m * n - principal };
  }, [price, down, rate, years]);

  const fmt = (n: number) => {
    if (n >= 1_00_00_000) {
      const cr = n / 1_00_00_000;
      return `₹${cr.toFixed(2)} Cr`;
    } else if (n >= 1_00_000) {
      const lac = n / 1_00_000;
      return `₹${lac.toFixed(2)} Lac`;
    }
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
  };

  const Field = ({ label, value, suffix, onChange, min, max, step, displayValue }: any) => (
    <label className="block">
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-[10px] tracking-luxe uppercase text-muted-foreground">{label}</span>
        <span className="font-display text-lg">{displayValue ?? `${value}${suffix ?? ""}`}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--gold)] h-px bg-border appearance-none cursor-pointer" />
    </label>
  );

  const formatPriceLabel = (v: number) => {
    if (v >= 1_00_00_000) return `₹${(v / 1_00_00_000).toFixed(0)} Cr`;
    return `₹${(v / 1_00_000).toFixed(0)} Lac`;
  };

  return (
    <div className="bg-ink text-cream p-8 md:p-12 border border-gold/20">
      <div className="flex items-baseline justify-between mb-10">
        <div>
          <p className="text-[10px] tracking-luxe uppercase text-gold mb-2">Finance</p>
          <h3 className="font-display text-3xl md:text-4xl">EMI Calculator</h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <Field label="Property Price" value={price} displayValue={formatPriceLabel(price)} onChange={setPrice} min={50_00_000} max={150_00_00_000} step={50_00_000} />
          <Field label="Down Payment" value={down} suffix="%" onChange={setDown} min={10} max={80} step={5} />
          <Field label="Interest Rate" value={rate} suffix="%" onChange={setRate} min={6} max={12} step={0.1} />
          <Field label="Tenure" value={years} suffix=" yrs" onChange={setYears} min={5} max={30} step={1} />
        </div>

        <div className="flex flex-col justify-between border-l border-gold/20 md:pl-10">
          <div>
            <p className="text-[10px] tracking-luxe uppercase text-gold mb-3">Estimated Monthly EMI</p>
            <p className="font-display text-5xl md:text-6xl text-cream">{fmt(monthly)}</p>
            <div className="gold-divider mt-8 w-20" />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-10 text-sm">
            <div>
              <p className="text-[10px] tracking-luxe uppercase text-cream/60 mb-1">Loan Amount</p>
              <p className="font-display text-2xl">{fmt(principal)}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-luxe uppercase text-cream/60 mb-1">Total Interest</p>
              <p className="font-display text-2xl">{fmt(totalInterest)}</p>
            </div>
          </div>
          <p className="text-xs text-cream/50 mt-8">Estimates only. Final terms by our banking partners. Rates as per RBI guidelines.</p>
        </div>
      </div>
    </div>
  );
}
