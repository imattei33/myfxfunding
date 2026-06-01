import SiteHeader from '../components/SiteHeader';
import { brandTagline, stats } from '../data/siteData';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      <section className="px-4 sm:px-8 md:px-16 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#19F57A] uppercase tracking-[0.2em] text-xs font-bold mb-4">
            {brandTagline}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
            About MyFXFunding
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
            MyFXFunding provides performance-focused traders with a transparent way to access real capital.
            We combine clear challenge rules, generous profit splits, and fast payout support to help traders
            fund their future and keep more of what they earn.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-[#19F57A]/20 bg-[#081610]/90 p-6"
              >
                <p className="text-2xl sm:text-3xl font-black text-[#19F57A]">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-400 font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <div className="rounded-3xl border border-white/10 bg-[#081610]/90 p-8">
              <h2 className="text-xl font-bold text-white mb-3">Our Mission</h2>
              <p>
                To fund traders with the tools and capital they need to succeed while keeping the
                evaluation process simple and fair.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#081610]/90 p-8">
              <h2 className="text-xl font-bold text-white mb-3">Our Approach</h2>
              <p>
                We offer multiple funding challenges, transparent rules, and high-quality support to help
                traders focus on performance without risking personal capital.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
