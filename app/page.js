"use client";

import { useState, useEffect } from 'react';
import SiteHeader from './components/SiteHeader';

const planCategories = [
  {
    id: 'standard',
    label: 'Standard',
    plans: [
      { size: '$5,000', price: '$69' },
      { size: '$10,000', price: '$119' },
      { size: '$25,000', price: '$259' },
      { size: '$50,000', price: '$429' },
      { size: '$100,000', price: '$659' },
      { size: '$200,000', price: '$1,299' },
    ],
    rules: {
      minTradingDays: '5',
      dailyLoss: '4%',
      totalLoss: '8%',
      profitTarget: '10%',
      leverage: '1:100',
      profitSplit: '80%',
      duration: '30 days',
      type: '2-Phase',
    },
  },
  {
    id: 'swing',
    label: 'Swing Trader',
    plans: [
      { size: '$50,000', price: '$299' },
      { size: '$100,000', price: '$499' },
      { size: '$200,000', price: '$899' },
    ],
    rules: {
      minTradingDays: '10',
      dailyLoss: '5%',
      totalLoss: '10%',
      profitTarget: '8%',
      leverage: '1:50',
      profitSplit: '85%',
      duration: 'Unlimited',
      type: '2-Phase',
    },
  },
  {
    id: 'aggressive',
    label: 'Aggressive',
    plans: [
      { size: '$25,000', price: '$199' },
      { size: '$50,000', price: '$299' },
      { size: '$100,000', price: '$499' },
    ],
    rules: {
      minTradingDays: '10',
      dailyLoss: '4%',
      totalLoss: '6%',
      profitTarget: '10%',
      leverage: '1:50',
      profitSplit: '85%',
      duration: '30 days',
      type: '1-Phase',
    },
  },
  {
    id: 'consistency',
    label: 'Consistency',
    plans: [
      { size: '$50,000', price: '$299' },
      { size: '$100,000', price: '$499' },
      { size: '$200,000', price: '$899' },
    ],
    rules: {
      minTradingDays: '10',
      dailyLoss: '5%',
      totalLoss: '10%',
      profitTarget: '10%',
      leverage: '1:100',
      profitSplit: '85%',
      duration: '45 days',
      type: '1-Phase',
    },
  },
  {
    id: 'elite',
    label: 'Elite',
    plans: [
      { size: '$300,000', price: '$1,299' },
      { size: '$500,000', price: '$1,999' },
    ],
    rules: {
      minTradingDays: '10',
      dailyLoss: '5%',
      totalLoss: '10%',
      profitTarget: '8%',
      leverage: '1:100',
      profitSplit: '85%',
      duration: '45 days',
      type: 'Phase 1',
    },
  },
  {
    id: 'crypto',
    label: 'Crypto',
    plans: [
      { size: '$5,000', price: '$49' },
      { size: '$10,000', price: '$99' },
      { size: '$25,000', price: '$199' },
    ],
    rules: {
      minTradingDays: '5',
      dailyLoss: '8%',
      totalLoss: '15%',
      profitTarget: '15%',
      leverage: '1:20',
      profitSplit: '85%',
      duration: '45 days',
      type: '1-Phase',
    },
  },
];

export default function MyFXFundingLandingPage() {
  const [activeCategory, setActiveCategory] = useState('standard');
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    try {
      const storedLang = localStorage.getItem('myfx_lang');
      const storedTheme = localStorage.getItem('myfx_theme');
      if (storedLang) setLang(storedLang);
      if (storedTheme) setTheme(storedTheme);
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('myfx_lang', lang);
    } catch (e) {}
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem('myfx_theme', theme);
    } catch (e) {}
  }, [theme]);

  useEffect(() => {
    const onStorage = (e) => {
      if (!e.key) return;
      if (e.key === 'myfx_lang') setLang(e.newValue || 'en');
      if (e.key === 'myfx_theme') setTheme(e.newValue || 'dark');
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const translations = {
    en: {
      taglineSmall: 'Funding Your Future. Trading Your Way.',
      hero: ['TRADE YOUR', 'EDGE.', 'WE FUND YOUR', 'SUCCESS.'],
      heroLead: 'Get funded up to $200,000 and keep up to 90% of the profits.\nNo personal risk. No hidden fees. Just real capital for real traders.',
      ctaPrimary: 'GET FUNDED NOW →',
      ctaSecondary: 'SEE PROGRAMS ↗',
      stats: [
        { number: '$200K', label: 'Max Funding' },
        { number: '90%', label: 'Profit Split' },
        { number: '1200+', label: 'Traders Funded' },
        { number: 'PAYOUTS', label: 'Fast & Reliable' },
      ],
      plansHeadingSmall: 'PLANS',
      plansTitle: 'Choose the right challenge for your trading style.',
      plansDesc: 'Explore each category through a polished, branded comparison table built for MyFXFunding.',
      categories: {
        standard: 'Standard',
        swing: 'Swing Trader',
        aggressive: 'Aggressive',
        consistency: 'Consistency',
        elite: 'Elite',
        crypto: 'Crypto',
      },
      table: {
        accountSize: 'Account size',
        price: 'Price',
      },
      tableLabels: {
        minTradingDays: 'Minimum trading days',
        dailyLoss: 'Maximum daily loss',
        totalLoss: 'Maximum total loss',
        profitTarget: 'Profit target',
        maxLeverage: 'Max leverage',
        profitSplit: 'Profit split',
        duration: 'Duration',
        type: 'Type',
      }
    },
    es: {
      taglineSmall: 'Financiando tu futuro. Opera a tu manera.',
      hero: ['OPERA TU', 'VENTAJA.', 'NOSOTROS FINANCIAMOS', 'TU ÉXITO.'],
      heroLead: 'Obtén financiamiento hasta $200,000 y conserva hasta el 90% de las ganancias.\nSin riesgo personal. Sin tarifas ocultas. Solo capital real para traders reales.',
      ctaPrimary: 'OBTÉN FINANCIAMIENTO →',
      ctaSecondary: 'VER PROGRAMAS ↗',
      stats: [
        { number: '$200K', label: 'Financiamiento Máx.' },
        { number: '90%', label: 'Distribución de Ganancias' },
        { number: '1200+', label: 'Traders Financiados' },
        { number: 'PAGOS', label: 'Rápidos y Confiables' },
      ],
      plansHeadingSmall: 'PLANES',
      plansTitle: 'Elige el reto adecuado para tu estilo de trading.',
      plansDesc: 'Explora cada categoría a través de una tabla comparativa pulida y con la marca MyFXFunding.',
      categories: {
        standard: 'Estándar',
        swing: 'Swing Trader',
        aggressive: 'Agresivo',
        consistency: 'Consistencia',
        elite: 'Élite',
        crypto: 'Cripto',
      },
      table: {
        accountSize: 'Tamaño de cuenta',
        price: 'Precio',
      },
      tableLabels: {
        minTradingDays: 'Días mínimos de trading',
        dailyLoss: 'Pérdida diaria máxima',
        totalLoss: 'Pérdida total máxima',
        profitTarget: 'Objetivo de beneficio',
        maxLeverage: 'Apalancamiento máx.',
        profitSplit: 'Distribución de ganancias',
        duration: 'Duración',
        type: 'Tipo',
      }
    }
  };

  const t = translations[lang] || translations.en;

  return (
    <div className={`${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'} overflow-hidden`}>
      {/* Navbar */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen sm:min-h-[90vh] flex items-center overflow-hidden pt-20 sm:pt-0">
        {/* Background Image - Full Size */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/hero-bg.png" 
            alt="Trading Background" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 sm:via-black/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 w-full px-4 sm:px-8 md:px-16 py-8 sm:py-16 max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="pt-4 sm:pt-8 md:pt-0 max-w-3xl">
            <p className="text-[#19F57A] uppercase tracking-[0.2em] text-xs font-bold mb-4 sm:mb-6">
              {t.taglineSmall}
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight max-w-2xl">
              {t.hero[0]}
              <br />
              <span className="text-[#19F57A]">{t.hero[1]}</span>
              <br />
              {t.hero[2]}
              <br />
              <span className="text-[#19F57A]">{t.hero[3]}</span>
            </h2>

            <p className={`mt-6 sm:mt-10 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'} text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-light whitespace-pre-line`}>
              {t.heroLead}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-12">
              <button className={`px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-[#19F57A]/30 ${theme === 'dark' ? 'bg-gradient-to-r from-[#19F57A]/18 via-white/10 to-transparent text-white' : 'bg-[#eaf7ee] text-black'} font-black text-xs sm:text-sm md:text-base uppercase tracking-[0.18em] hover:scale-105 transition duration-200 ease-out shadow-[0_0_46px_rgba(25,245,122,0.24)] backdrop-blur-xl hover:border-[#19F57A]/50 hover:shadow-[0_0_60px_rgba(25,245,122,0.32)] w-full sm:w-auto`}>
                {t.ctaPrimary}
              </button>

              <button className={`px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-[#19F57A]/40 ${theme === 'dark' ? 'bg-black/20 text-[#19F57A]' : 'bg-white/60 text-[#0f9a50]'} font-semibold text-xs sm:text-sm md:text-base uppercase tracking-[0.18em] hover:scale-105 transition duration-200 ease-out shadow-[0_0_26px_rgba(25,245,122,0.16)] backdrop-blur-xl hover:bg-[#0f2318]/65 hover:border-[#19F57A]/55 w-full sm:w-auto">
                {t.ctaSecondary}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-10 sm:mt-16 max-w-2xl">
              {t.stats.map((item, index) => (
                <div
                  key={index}
                  className="p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl border border-[#19F57A]/40 bg-[#19F57A]/10 backdrop-blur-md"
                >
                  <h4 className="text-base sm:text-lg md:text-2xl font-black text-[#19F57A]">{item.number}</h4>
                  <p className="text-zinc-400 mt-1 text-xs uppercase tracking-wider leading-tight font-semibold">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans Table Section */}
      <section className="relative z-10 px-4 sm:px-8 md:px-16 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-[#19F57A] uppercase tracking-[0.18em] text-xs font-bold mb-3">
              {t.plansHeadingSmall}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              {t.plansTitle}
            </h2>
            <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-700'} max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed`}>
              {t.plansDesc}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            {planCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeCategory === category.id
                    ? 'bg-[#19F57A] text-black shadow-[0_0_28px_rgba(25,245,122,0.28)]'
                    : 'bg-[#0a1710]/80 text-zinc-300 border border-white/10 hover:bg-[#182d1c]'
                }`}
              >
                {t.categories[category.id] || category.label}
              </button>
            ))}
          </div>
          <div className="overflow-hidden rounded-[32px] border border-[#19F57A]/20 bg-[#04110b]/80 shadow-[0_0_80px_rgba(25,245,122,0.08)]">
            {(() => {
              const category = planCategories.find((item) => item.id === activeCategory);
              if (!category) return null;

              const tableRows = [
                { label: t.tableLabels.minTradingDays, value: category.rules.minTradingDays },
                { label: t.tableLabels.dailyLoss, value: category.rules.dailyLoss },
                { label: t.tableLabels.totalLoss, value: category.rules.totalLoss },
                { label: t.tableLabels.profitTarget, value: category.rules.profitTarget, highlight: true },
                { label: t.tableLabels.maxLeverage, value: category.rules.leverage },
                { label: t.tableLabels.profitSplit, value: category.rules.profitSplit, highlight: true },
                { label: t.tableLabels.duration, value: category.rules.duration },
                { label: t.tableLabels.type, value: category.rules.type },
              ];

              return (
                <div className="overflow-x-auto p-6">
                  <table className="min-w-[740px] w-full border-separate border-spacing-y-3 text-left">
                    <thead>
                      <tr>
                        <th className="w-[240px] rounded-l-3xl bg-[#12301f] px-6 py-4 text-xs uppercase tracking-[0.18em] text-white font-semibold">{t.table.accountSize}</th>
                        {category.plans.map((plan, index) => (
                          <th
                            key={plan.size}
                            className={`px-6 py-4 text-center text-xs uppercase tracking-[0.18em] text-white font-semibold ${
                              index === category.plans.length - 1 ? 'rounded-r-3xl bg-[#0a1f13]' : 'bg-[#0a1f13]'
                            }`}
                          >
                            {plan.size}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {tableRows.map((row) => (
                        <tr key={row.label} className="bg-[#081610] shadow-[0_0_12px_rgba(0,0,0,0.15)]">
                          <td className="bg-[#06120c] px-6 py-5 font-semibold text-zinc-200">{row.label}</td>
                          {category.plans.map((plan) => (
                            <td
                              key={`${row.label}-${plan.size}`}
                              className={`px-6 py-5 text-center text-sm ${row.highlight ? 'text-[#19F57A] font-semibold' : 'text-zinc-300'}`}
                            >
                              {row.value}
                            </td>
                          ))}
                        </tr>
                      ))}

                      <tr className="bg-[#081610] shadow-[0_0_12px_rgba(0,0,0,0.15)] rounded-b-3xl">
                        <td className="bg-[#06120c] px-6 py-6 font-semibold text-zinc-200">{t.table.price}</td>
                        {category.plans.map((plan) => (
                          <td key={`price-${plan.size}`} className="px-6 py-6 text-center">
                            <button className="inline-flex min-w-[120px] justify-center rounded-full border border-[#19F57A]/30 bg-[#19F57A]/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#19F57A]/20">
                              {plan.price}
                            </button>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Section 2: Built For Traders */}
      <section className="relative z-10 px-4 sm:px-8 md:px-16 py-16 sm:py-24 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-20">
            <p className="text-[#19F57A] uppercase tracking-[0.15em] text-xs font-bold mb-4 sm:mb-6">
              BUILT FOR TRADERS. BACKED BY TRUST.
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-3xl">
              EVERYTHING YOU NEED TO <span className="text-[#19F57A]">SUCCEED</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 sm:gap-12 md:gap-16 items-start lg:items-center">
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {[
                {
                  icon: (
                    <div className="w-12 h-12 rounded-2xl bg-[#0d1f12]/80 border border-[#19F57A]/25 flex items-center justify-center shadow-[0_0_18px_rgba(25,245,122,0.14)]">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#19F57A]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 16h4v4H4z" />
                        <path d="M10 10h4v10h-4z" />
                        <path d="M16 6h4v14h-4z" />
                        <path d="M4 16l6-6 4 4 4-8" />
                      </svg>
                    </div>
                  ),
                  title: 'UP TO $500K FUNDING',
                  text: 'Scale your capital account',
                },
                {
                  icon: (
                    <div className="w-12 h-12 rounded-2xl bg-[#0d1f12]/80 border border-[#19F57A]/25 flex items-center justify-center shadow-[0_0_18px_rgba(25,245,122,0.14)]">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#19F57A]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 19h14" />
                        <path d="M6 15l3-3 2 2 4-4 3 3" />
                        <path d="M14 7h4v4" />
                      </svg>
                    </div>
                  ),
                  title: 'KEEP UP TO 90% PROFITS',
                  text: 'Generous profit split terms',
                },
                {
                  icon: (
                    <div className="w-12 h-12 rounded-2xl bg-[#0d1f12]/80 border border-[#19F57A]/25 flex items-center justify-center shadow-[0_0_18px_rgba(25,245,122,0.14)]">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#19F57A]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3l7 4v5c0 5-2 8-7 8s-7-3-7-8V7l7-4z" />
                        <path d="M12 11v4" />
                      </svg>
                    </div>
                  ),
                  title: 'NO DAILY DRAWDOWN',
                  text: 'Trade with confidence and risk',
                },
                {
                  icon: (
                    <div className="w-12 h-12 rounded-2xl bg-[#0d1f12]/80 border border-[#19F57A]/25 flex items-center justify-center shadow-[0_0_18px_rgba(25,245,122,0.14)]">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#19F57A]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                      </svg>
                    </div>
                  ),
                  title: 'FAST PAYOUTS',
                  text: 'Quick, reliable withdrawals',
                },
                {
                  icon: (
                    <div className="w-12 h-12 rounded-2xl bg-[#0d1f12]/80 border border-[#19F57A]/25 flex items-center justify-center shadow-[0_0_18px_rgba(25,245,122,0.14)]">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#19F57A]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 18h16V8l-4-4H8l-4 4v10z" />
                        <path d="M8 16h8" />
                        <path d="M8 12h6" />
                      </svg>
                    </div>
                  ),
                  title: 'SIMPLE RULES',
                  text: 'Clear transparent rules',
                },
                {
                  icon: (
                    <div className="w-12 h-12 rounded-2xl bg-[#0d1f12]/80 border border-[#19F57A]/25 flex items-center justify-center shadow-[0_0_18px_rgba(25,245,122,0.14)]">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#19F57A]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 9a7 7 0 0114 0v3a7 7 0 01-14 0V9z" />
                        <path d="M8 17h8M12 20v-3" />
                      </svg>
                    </div>
                  ),
                  title: '24/7 SUPPORT',
                  text: 'We\'re here when you need us',
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-[#19F57A]/20 bg-[#19F57A]/5 backdrop-blur-sm hover:border-[#19F57A]/50 transition"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Dashboard Image */}
            <div className="flex flex-col items-center lg:items-end">
              <p className="text-zinc-200 text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold mb-4">
                Trading Dashboard
              </p>
              <div className="relative w-full max-w-[100%] aspect-[3358/1942] rounded-[36px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.28)]">
                <img
                  src="/trading-dashboard.png"
                  alt="Trading dashboard preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Prove Get Funded Section */}
      <section className="relative z-10 px-4 sm:px-8 md:px-16 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#19F57A] uppercase tracking-[0.15em] text-xs font-bold mb-4 sm:mb-6">
            TRADE PROVE GET FUNDED
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-2xl mb-6 sm:mb-8">
            THE <span className="text-[#19F57A]">SMARTER</span> WAY
            <br />
            TO TRADE.
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light mb-8 sm:mb-10">
            Your trading is your best reference. We let you demonstrate
            focus on trading, we handle the rest.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8">
            {[
              { icon: '✓', text: 'Excellent' },
              { icon: '★', text: '4.8 out of 5' },
              { icon: '✓', text: 'Trustpilot' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-3">
                <span className="text-[#19F57A] font-black text-base sm:text-lg">{item.icon}</span>
                <span className="text-xs sm:text-sm font-semibold text-white">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 px-4 sm:px-8 md:px-16 py-16 sm:py-24 bg-gradient-to-b from-black via-black to-black">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[40px] border border-[#19F57A]/30 bg-gradient-to-b from-[#19F57A]/10 via-black/80 to-black p-6 sm:p-10 md:p-16 text-center shadow-[0_0_100px_rgba(25,245,122,0.15)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(25,245,122,0.2),transparent_70%)]"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6">
                READY TO GET <span className="text-[#19F57A]">FUNDED?</span>
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
                Join thousands of traders who are already
                <br className="hidden sm:block" />
                trading our capital and earning real profits.
              </p>

              <button className="px-6 sm:px-10 py-3.5 sm:py-4 rounded-full border border-[#19F57A]/30 bg-gradient-to-br from-[#19F57A]/18 via-black/25 to-transparent text-white font-black text-xs sm:text-base uppercase tracking-[0.18em] hover:scale-105 transition duration-200 ease-out shadow-[0_0_46px_rgba(25,245,122,0.24)] backdrop-blur-xl hover:border-[#19F57A]/55 hover:shadow-[0_0_60px_rgba(25,245,122,0.32)] w-full sm:w-auto">
                START YOUR CHALLENGE →
              </button>

              <div className="flex flex-col sm:flex-row sm:justify-center flex-wrap gap-4 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
                {[
                  { icon: '✓', text: 'No Hidden Fees' },
                  { icon: '✓', text: 'One-Time Fee' },
                  { icon: '✓', text: 'Instant Access' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-2">
                    <span className="text-[#19F57A] font-black text-sm sm:text-base">{item.icon}</span>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Features */}
      <section className="relative z-10 px-4 sm:px-8 md:px-16 py-12 sm:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {[
              {
                icon: (
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-3xl bg-[#0d1f12]/80 border border-[#19F57A]/25 flex items-center justify-center shadow-[0_0_18px_rgba(25,245,122,0.14)]">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#19F57A]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l7 4v6c0 5-3 8-7 8s-7-3-7-8V6l7-4z" />
                      <path d="M9 12h6" />
                    </svg>
                  </div>
                ),
                title: 'NO PERSONAL RISK',
                desc: 'Use this risk free, you take the profits.',
              },
              {
                icon: (
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-3xl bg-[#0d1f12]/80 border border-[#19F57A]/25 flex items-center justify-center shadow-[0_0_18px_rgba(25,245,122,0.14)]">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#19F57A]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="8" />
                      <path d="M4 12h16" />
                      <path d="M12 4a15 15 0 010 16" />
                    </svg>
                  </div>
                ),
                title: 'GLOBAL COMMUNITY',
                desc: 'Join a community of elite traders.',
              },
              {
                icon: (
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-3xl bg-[#0d1f12]/80 border border-[#19F57A]/25 flex items-center justify-center shadow-[0_0_18px_rgba(25,245,122,0.14)]">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#19F57A]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 4h12v16H6z" />
                      <path d="M6 8h12" />
                      <path d="M10 12h4" />
                    </svg>
                  </div>
                ),
                title: 'EDUCATION & TOOLS',
                desc: 'Level up your trading with resources.',
              },
              {
                icon: (
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-3xl bg-[#0d1f12]/80 border border-[#19F57A]/25 flex items-center justify-center shadow-[0_0_18px_rgba(25,245,122,0.14)]">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#19F57A]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19l7-7 5 5 4-8" />
                      <path d="M14 12h6" />
                    </svg>
                  </div>
                ),
                title: 'GROW WITH US',
                desc: 'Scale your account and earnings higher.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-3 sm:mb-4">{feature.icon}</div>
                <h4 className="font-black text-white uppercase tracking-wide mb-2 sm:mb-3 text-sm sm:text-base">
                  {feature.title}
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
