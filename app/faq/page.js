import SiteHeader from '../components/SiteHeader';
import { brandTagline, faqItems, stats } from '../data/siteData';

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      <section className="px-4 sm:px-8 md:px-16 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#19F57A] uppercase tracking-[0.2em] text-xs font-bold mb-4">
            {brandTagline}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl mb-10">
            These FAQs reflect the real funding details shown on our landing page, including program limits,
            profit splits, and account rules.
          </p>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5">
              {faqItems.map((item) => (
                <div key={item.q} className="rounded-3xl border border-white/10 bg-[#081610]/90 p-6">
                  <h2 className="font-semibold text-white mb-3">{item.q}</h2>
                  <p className="text-zinc-300">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-[#19F57A]/20 bg-[#081610]/90 p-6">
              <h2 className="text-xl font-bold text-white mb-5">Landing Page Snapshot</h2>
              <div className="grid gap-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-[#0d1f12]/90 p-4">
                    <p className="text-xl font-black text-[#19F57A]">{item.value}</p>
                    <p className="text-sm uppercase tracking-[0.18em] text-zinc-400 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
