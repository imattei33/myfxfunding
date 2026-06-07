"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navItems } from '../data/siteData';

export default function SiteHeader() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('myfx_theme');
      const storedLang = localStorage.getItem('myfx_lang');
      if (storedTheme) setTheme(storedTheme);
      if (storedLang) setLang(storedLang);
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('myfx_theme', theme);
    } catch (e) {}
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem('myfx_lang', lang);
    } catch (e) {}
  }, [lang]);

  return (
    <header className={`relative z-20 flex flex-col gap-4 px-4 sm:px-8 md:px-16 pt-6 pb-4 border-b border-white/5 backdrop-blur-sm ${theme === 'dark' ? 'bg-black/60' : 'bg-white/60'} md:flex-row md:items-center md:justify-between`}>
      <div className="flex items-center gap-3">
        <img
          src="/bull-logo.png"
          alt="MyFXFunding logo"
          className="w-10 h-10 object-contain"
        />
        <div>
          <p className={`text-sm font-semibold tracking-[0.24em] uppercase ${theme === 'dark' ? 'text-white' : 'text-black'}`}>MyFXFunding</p>
          <p className={`text-xs ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>{lang === 'en' ? 'Funding Your Future. Trading Your Way.' : 'Financiando tu futuro. Opera a tu manera.'}</p>
        </div>
      </div>
      <nav className="flex items-center gap-4">
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wider font-semibold">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`transition ${theme === 'dark' ? 'text-zinc-300 hover:text-[#19F57A]' : 'text-zinc-700 hover:text-[#0f9a50]'}`}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`px-3 py-1 rounded-full border text-xs font-semibold transition ${theme === 'dark' ? 'bg-black/30 border-white/10 text-white' : 'bg-white/40 border-zinc-200 text-black'}`}
          >
            {theme === 'dark' ? 'Dark' : 'Light'}
          </button>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-transparent text-xs py-1 px-2 border rounded"
            aria-label="Language selector"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>
      </nav>
    </header>
  );
}
