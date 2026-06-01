export const navItems = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/programs', label: 'PROGRAMS' },
  { href: '/rules', label: 'RULES' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'CONTACT' },
];

export const brandTagline = 'Funding Your Future. Trading Your Way.';

export const heroLine = 'Trade your edge. We fund your success.';

export const stats = [
  { label: 'Max Funding', value: '$200K' },
  { label: 'Profit Split', value: '90%' },
  { label: 'Traders Funded', value: '1200+' },
  { label: 'Payouts', value: 'Fast & Reliable' },
];

export const planCategories = [
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

export const featureCards = [
  { title: 'Up to $500K Funding', text: 'Scale your capital account' },
  { title: 'Keep Up to 90% Profits', text: 'Generous profit split terms' },
  { title: 'No Daily Drawdown', text: 'Trade with confidence and risk' },
  { title: 'Fast Payouts', text: 'Quick, reliable withdrawals' },
  { title: 'Simple Rules', text: 'Clear transparent rules' },
  { title: '24/7 Support', text: 'We’re here when you need us' },
];

export const faqItems = [
  {
    q: 'How much funding can I receive?',
    a: 'Funding starts at $5,000 and goes up to $500,000 depending on the selected program.',
  },
  {
    q: 'What profit split can I keep?',
    a: 'You can keep up to 90% of profits after passing the evaluation phase.',
  },
  {
    q: 'Is there a daily drawdown limit?',
    a: 'No daily drawdown rule allows you to trade with confidence within program limits.',
  },
  {
    q: 'How fast are payouts?',
    a: 'Payouts are designed to be quick and reliable for funded traders.',
  },
  {
    q: 'Do I get support?',
    a: 'Yes, 24/7 support is available for traders throughout the program.',
  },
];

export const contactInfo = {
  email: 'support@myfxfunding.com',
  phone: '+1 (800) 555-0123',
  headline: 'Questions about funding or the challenge process? Reach out today.',
};
