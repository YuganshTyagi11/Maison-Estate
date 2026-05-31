import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking — Maison Estate" },
      { name: "description", content: "Speak with a partner. Schedule a private viewing. Inquire in confidence." },
      { property: "og:title", content: "Contact — Maison Estate" },
      { property: "og:description", content: "By invitation. By appointment. By Maison Estate." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="pt-36 pb-20 bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[10px] tracking-luxe uppercase text-gold mb-4">In Confidence</p>
          <h1 className="font-display text-5xl md:text-7xl max-w-4xl leading-tight">
            Begin a <em className="italic text-gold">private</em> conversation.
          </h1>
          <p className="mt-8 max-w-2xl text-cream/75 text-lg">
            Whether seeking your next residence or considering a discreet sale, our partners welcome your inquiry.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            {sent ? (
              <div className="border border-gold p-16 text-center">
                <p className="text-[10px] tracking-luxe uppercase text-gold mb-4">Received</p>
                <h2 className="font-display text-4xl">Your message has been delivered.</h2>
                <div className="gold-divider w-24 mx-auto my-6" />
                <p className="text-muted-foreground">A partner will reach out within one business day, in confidence.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Input label="First Name" required />
                  <Input label="Last Name" required />
                  <Input label="Email" type="email" required />
                  <Input label="Phone" />
                </div>
                <div>
                  <Label>Interest</Label>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Acquiring", "Selling", "Investment", "Private Banking", "General"].map((t) => (
                      <label key={t} className="px-5 py-2.5 border border-border text-[10px] tracking-luxe uppercase cursor-pointer hover:border-gold has-[:checked]:bg-ink has-[:checked]:text-cream has-[:checked]:border-ink">
                        <input type="radio" name="interest" className="sr-only" defaultChecked={t === "Acquiring"} />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Preferred Date for Consultation</Label>
                  <input type="date" className="w-full bg-transparent border-b border-border py-3 focus:border-gold outline-none" />
                </div>
                <div>
                  <Label>Message</Label>
                  <textarea rows={5} className="w-full bg-transparent border-b border-border py-3 focus:border-gold outline-none resize-none" placeholder="Tell us about the residence you envision…" />
                </div>
                <button className="px-12 py-5 bg-ink text-cream text-xs tracking-luxe uppercase hover:bg-gold hover:text-ink transition-colors">
                  Send Confidential Inquiry
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-2 space-y-12">
            <Block title="Paris — Headquarters" lines={["8 Avenue Montaigne", "75008 Paris, France", "+33 1 42 60 30 30"]} />
            <Block title="New York" lines={["432 Park Avenue, 58th Floor", "New York, NY 10022", "+1 212 555 0140"]} />
            <Block title="Milan" lines={["Via Monte Napoleone 12", "20121 Milano, Italia", "+39 02 8050 5050"]} />
            <Block title="Dubai" lines={["Burj Khalifa Boulevard", "Downtown Dubai, UAE", "+971 4 555 0140"]} />

            <div className="border-t border-border pt-8">
              <p className="text-[10px] tracking-luxe uppercase text-gold mb-3">Private Concierge</p>
              <p className="text-foreground/80">24/7 worldwide assistance for active clients.</p>
              <p className="font-display text-2xl mt-2">concierge@maison.estate</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-[10px] tracking-luxe uppercase text-muted-foreground">{children}</span>;
}
function Input({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <Label>{label}{required && " *"}</Label>
      <input type={type} required={required} className="w-full bg-transparent border-b border-border py-3 mt-1 focus:border-gold outline-none" />
    </label>
  );
}
function Block({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div>
      <p className="text-[10px] tracking-luxe uppercase text-gold mb-3">{title}</p>
      {lines.map((l) => <p key={l} className="text-foreground/80">{l}</p>)}
    </div>
  );
}
