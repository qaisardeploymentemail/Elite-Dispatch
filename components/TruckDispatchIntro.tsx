// R1 — new headline and body copy.
// R10 — the process diagram and its caption were removed, and the text block lost its
// max-w-3xl cap so it spans the full container width.
export default function TruckDispatchIntro() {
  return (
    <section className="section bg-white">
      <div className="container-rd">
        <div className="text-center">
          <span className="eyebrow">Who We Are</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">Truck Dispatch Company</h2>
          <p className="mt-5 text-slate-600">
            Your trucks should be making money, not waiting on load boards. We provide end-to-end
            dispatching across the USA and Canada to keep independent drivers and fleet owners
            operating at peak profitability.
          </p>
          <p className="mt-4 text-slate-600">
            Our 24/7 team takes over the daily grind: finding top-paying freight, aggressively
            negotiating rates with brokers, and handling all backend paperwork. You maintain full
            control over your route while we make sure every mile pays off.
          </p>
        </div>
      </div>
    </section>
  );
}
