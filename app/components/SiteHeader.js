import Link from 'next/link';
import { navItems } from '../data/siteData';

export default function SiteHeader() {
  return (
    <header className="relative z-20 flex flex-col gap-4 px-4 sm:px-8 md:px-16 pt-6 pb-4 border-b border-white/5 backdrop-blur-sm bg-black/60 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/bull-logo.png"
          alt="MyFXFunding logo"
          className="w-10 h-10 object-contain"
        />
        <div>
          <p className="text-sm font-semibold tracking-[0.24em] uppercase text-white">MyFXFunding</p>
          <p className="text-xs text-zinc-400">Funding Your Future. Trading Your Way.</p>
        </div>
      </div>
      <nav className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wider text-zinc-300 font-semibold">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="transition hover:text-[#19F57A]">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
