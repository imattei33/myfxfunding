import SiteHeader from '../components/SiteHeader';
import { brandTagline, planCategories } from '../data/siteData';

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      <section className="px-4 sm:px-8 md:px-16 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#19F57A] uppercase tracking-[0.2em] text-xs font-bold mb-4">
            {brandTagline}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
            Funding Programs
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl mb-10">
            Choose the funding path that matches your strategy. These are the real account sizes,
            prices, and program rules available from our landing page.
          </p>

          <div className="space-y-6">
            {planCategories.map((category) => (
              <div key={category.id} className="rounded-[32px] border border-white/10 bg-[#081610]/90 p-6 shadow-[0_0_36px_rgba(0,0,0,0.15)]">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                  <h2 className="text-2xl font-bold text-white">{category.label}</h2>
                  <p className="text-sm uppercase tracking-[0.18em] text-[#19F57A] font-semibold">
                    {category.rules.type} • {category.rules.duration}
                  </p>
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-3xl border border-[#19F57A]/20 bg-[#0d1f12]/90 p-5">
                    <p className="text-sm uppercase tracking-[0.18em] text-zinc-400 mb-3">Available Sizes</p>
                    <div className="space-y-2">
                      {category.plans.map((plan) => (
                        <div key={plan.size} className="flex items-center justify-between text-white text-sm">
                          <span>{plan.size}</span>
                          <span className="text-[#19F57A] font-semibold">{plan.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-[#19F57A]/20 bg-[#0d1f12]/90 p-5">
                    <p className="text-sm uppercase tracking-[0.18em] text-zinc-400 mb-3">Program Rules</p>
                    <div className="space-y-3 text-sm text-zinc-300">
                      <div>Minimum trading days: {category.rules.minTradingDays}</div>
                      <div>Daily loss limit: {category.rules.dailyLoss}</div>
                      <div>Total loss limit: {category.rules.totalLoss}</div>
                      <div>Profit target: {category.rules.profitTarget}</div>
                      <div>Leverage: {category.rules.leverage}</div>
                      <div>Profit split: {category.rules.profitSplit}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
