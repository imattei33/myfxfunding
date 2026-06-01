import SiteHeader from '../components/SiteHeader';
import { brandTagline, planCategories } from '../data/siteData';

export default function RulesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      <section className="px-4 sm:px-8 md:px-16 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#19F57A] uppercase tracking-[0.2em] text-xs font-bold mb-4">
            {brandTagline}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
            Trading Rules
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl mb-10">
            These are the real program rules powering our funding challenges. They are designed to
            protect the capital account while letting experienced traders perform with confidence.
          </p>

          <div className="space-y-6">
            {planCategories.map((category) => (
              <div key={category.id} className="rounded-[32px] border border-white/10 bg-[#081610]/90 p-6 shadow-[0_0_36px_rgba(0,0,0,0.15)]">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                  <h2 className="text-2xl font-bold text-white">{category.label}</h2>
                  <span className="text-sm uppercase tracking-[0.18em] text-[#19F57A] font-semibold">
                    {category.rules.type} • {category.rules.duration}
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 text-zinc-300 text-sm leading-relaxed">
                  <div className="rounded-3xl border border-[#19F57A]/20 bg-[#0d1f12]/90 p-5">
                    <div className="mb-3 font-semibold text-white">Risk Rules</div>
                    <div>Daily loss: {category.rules.dailyLoss}</div>
                    <div>Total loss: {category.rules.totalLoss}</div>
                    <div>Minimum trading days: {category.rules.minTradingDays}</div>
                  </div>
                  <div className="rounded-3xl border border-[#19F57A]/20 bg-[#0d1f12]/90 p-5">
                    <div className="mb-3 font-semibold text-white">Performance Rules</div>
                    <div>Profit target: {category.rules.profitTarget}</div>
                    <div>Profit split: {category.rules.profitSplit}</div>
                    <div>Leverage: {category.rules.leverage}</div>
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
