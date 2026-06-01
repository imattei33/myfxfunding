import SiteHeader from '../components/SiteHeader';
import { brandTagline, contactInfo } from '../data/siteData';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      <section className="px-4 sm:px-8 md:px-16 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#19F57A] uppercase tracking-[0.2em] text-xs font-bold mb-4">
            {brandTagline}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl mb-10">
            {contactInfo.headline}
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-[#19F57A]/20 bg-[#081610]/90 p-8">
              <h2 className="text-xl font-bold text-white mb-5">Support Contact</h2>
              <p className="text-zinc-300 mb-3">Email</p>
              <p className="text-white font-semibold mb-6">{contactInfo.email}</p>
              <p className="text-zinc-300 mb-3">Phone</p>
              <p className="text-white font-semibold">{contactInfo.phone}</p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-[#0d1f12]/90 p-8 text-zinc-300">
              <h2 className="text-xl font-bold text-white mb-5">Our Promise</h2>
              <p className="leading-relaxed">
                We support traders throughout the evaluation process and beyond. Whether you have questions
                about account rules, payouts, or program selection, our team is ready to help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
