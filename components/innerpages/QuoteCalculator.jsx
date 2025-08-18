'use client';

import { useMemo, useState } from 'react';

/**
 * Advanced Quote Calculator — Shopify Store Development
 * Framework: Next.js (client component)
 * Styling: Unicon utility classes (prefixed with `u-`)
 *
 * Drop this file into your Next.js project and import it into a page.
 * Example: `import QuoteCalculator from '@/components/QuoteCalculator'`
 */
export default function QuoteCalculator() {
  // --------------------------
  // FORM STATE
  // --------------------------
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    // STEP 1 — Basics
    projectType: 'new', // new | redesign | migration
    storeType: 'standard', // basic | standard | advanced | plus
    shopifyPlan: 'Shopify', // Basic | Shopify | Advanced | Plus
    products: 100,
    variantsPerProduct: 3,

    // STEP 2 — Design
    themeApproach: 'customized-theme', // prebuilt | customized-theme | bespoke
    brandingReady: true,

    // STEP 3 — Features
    features: {
      subscriptions: false,
      b2b: false,
      multiCurrency: true,
      multilingual: false,
      customCheckout: false,
      wishlist: true,
      reviews: true,
      loyalty: false,
      bundles: false,
      advancedSearch: false,
      seo: true,
      speed: 'standard', // standard | aggressive
    },

    // STEP 4 — Integrations
    integrations: {
      erp: 0,
      crm: 0,
      pos: 0,
      accounting: 0,
      shipping: 1,
      marketing: 0,
      payments: 1,
    },

    // STEP 5 — Data & Markets
    migration: {
      migrate: false,
      productsToMigrate: 0,
      customersToMigrate: 0,
      ordersToMigrate: 0,
    },
    markets: 1,

    // STEP 6 — Compliance & Performance
    compliance: {
      accessibility: false,
      gdpr: true,
    },

    // STEP 7 — Timeline & Support
    timelineWeeks: 8,
    supportSLA: 'pro', // basic | pro | elite

    // Global
    currency: 'USD',
  });

  // --------------------------
  // PRICING ENGINE
  // --------------------------
  const PRICING = {
    base: { new: 900, redesign: 1200, migration: 1500 },
    storeTypeMultiplier: { basic: 1, standard: 1.35, advanced: 1.9, plus: 3.2 },
    theme: { 'prebuilt': 0, 'customized-theme': 1800, 'bespoke': 4500 },
    brandingNotReady: 600,
    per50Products: 220,
    variantComplexityMultiplier(v) { return Math.max(0.8, 1 + (v - 3) * 0.05); },
    features: {
      subscriptions: 1100,
      b2b: 1600,
      multiCurrency: 650,
      multilingual: 950,
      customCheckout: 1400,
      wishlist: 320,
      reviews: 260,
      loyalty: 850,
      bundles: 650,
      advancedSearch: 550,
      seo: 740,
    },
    integrationsPerConnector: 520,
    migration: {
      base: 650,
      per100Products: 130,
      per1000Customers: 110,
      per1000Orders: 160,
    },
    markets: { base: 320, perMarket: 160 },
    compliance: { accessibility: 980, gdpr: 340 },
    performance: { standard: 0, aggressive: 820 },
    rushSurcharge(weeks) { return weeks < 6 ? (6 - weeks) * 0.1 : 0; }, // 10% per week under 6
    supportMonthly: { basic: 110, pro: 420, elite: 1250 },
  };

  const currencyFmt = (n) => new Intl.NumberFormat(undefined, { style: 'currency', currency: form.currency || 'USD' }).format(n);

  const quote = useMemo(() => {
    const breakdown = [];
    let oneTime = 0;

    const add = (label, amount, meta) => {
      if (amount > 0) breakdown.push({ label, amount, ...meta });
      oneTime += Math.max(0, amount);
    };

    // Base & multipliers
    const base = PRICING.base[form.projectType] || PRICING.base.new;
    const storeMult = PRICING.storeTypeMultiplier[form.storeType] || 1;
    const baseCost = Math.round(base * storeMult);
    add(`Base (${form.projectType}) × ${storeMult}`, baseCost, { key: 'base' });

    // Catalog size
    const blocks = Math.ceil((Number(form.products) || 0) / 50);
    const catalogCost = blocks * PRICING.per50Products;
    add(`Catalog size (${form.products} products)`, catalogCost, { key: 'catalog' });

    // Theme approach
    const themeCost = PRICING.theme[form.themeApproach] || 0;
    add(`Theme approach (${labelize(form.themeApproach)})`, themeCost, { key: 'theme' });

    if (!form.brandingReady) add('Branding & styleguide preparation', PRICING.brandingNotReady);

    // Variant complexity — apply to subset: base + catalog + theme
    const baseAffected = baseCost + catalogCost + themeCost;
    const vMult = PRICING.variantComplexityMultiplier(Number(form.variantsPerProduct) || 0);
    if (vMult !== 1) {
      const extra = Math.round(baseAffected * (vMult - 1));
      add(`Variant complexity × ${vMult.toFixed(2)}`, extra);
    }

    // Features
    Object.entries(form.features || {}).forEach(([k, val]) => {
      if (k === 'speed') return; // handled separately
      if (val && PRICING.features[k]) add(`Feature: ${labelize(k)}`, PRICING.features[k]);
    });

    if (form.features?.speed === 'aggressive') add('Aggressive performance tuning', PRICING.performance.aggressive);

    // Integrations
    const integrationsCount = Object.values(form.integrations || {}).reduce((a, b) => a + Number(b || 0), 0);
    const integrationsCost = integrationsCount * PRICING.integrationsPerConnector;
    add(`Integrations (${integrationsCount} connector${integrationsCount !== 1 ? 's' : ''})`, integrationsCost);

    // Migration
    if (form.migration?.migrate) {
      const mig = PRICING.migration.base
        + Math.ceil((Number(form.migration.productsToMigrate) || 0) / 100) * PRICING.migration.per100Products
        + Math.ceil((Number(form.migration.customersToMigrate) || 0) / 1000) * PRICING.migration.per1000Customers
        + Math.ceil((Number(form.migration.ordersToMigrate) || 0) / 1000) * PRICING.migration.per1000Orders;
      add('Data migration', mig);
    }

    // Markets
    if ((Number(form.markets) || 1) > 1) {
      const mk = PRICING.markets.base + (Number(form.markets) - 1) * PRICING.markets.perMarket;
      add(`Shopify Markets setup (${form.markets})`, mk);
    }

    // Compliance
    if (form.compliance?.accessibility) add('Accessibility (WCAG target)', PRICING.compliance.accessibility);
    if (form.compliance?.gdpr) add('GDPR/Privacy configuration', PRICING.compliance.gdpr);

    // Rush surcharge
    const rushFactor = PRICING.rushSurcharge(Number(form.timelineWeeks) || 0);
    if (rushFactor > 0) add(`Rush surcharge (${Math.round(rushFactor * 100)}%)`, Math.round(oneTime * rushFactor));

    // Monthly support
    const monthly = PRICING.supportMonthly[form.supportSLA] || 0;

    return { breakdown, oneTime, monthly };
  }, [form]);

  const steps = [
    { title: 'Basics', description: 'Tell us about the project and catalog size.' },
    { title: 'Design', description: 'Theme approach and brand readiness.' },
    { title: 'Features', description: 'Select features you need.' },
    { title: 'Integrations', description: 'How many connectors do you need?' },
    { title: 'Data & Markets', description: 'Migration scope and number of markets.' },
    { title: 'Compliance', description: 'Privacy, accessibility & performance.' },
    { title: 'Timeline & Support', description: 'When do you need it and post-launch care.' },
    { title: 'Review & Quote', description: 'See your estimate and share it.' },
  ];

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  // Helpers
  function set(path, value) {
    setForm((prev) => {
      const clone = structuredClone(prev);
      const keys = path.split('.');
      let ref = clone;
      for (let i = 0; i < keys.length - 1; i++) ref = ref[keys[i]];
      ref[keys.at(-1)] = value;
      return clone;
    });
  }

  function labelize(k = '') {
    return k
      .replace(/-/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\b\w/g, (m) => m.toUpperCase());
  }

  function copySummary() {
    const payload = {
      form,
      quote: {
        oneTime: quote.oneTime,
        monthly: quote.monthly,
        currency: form.currency,
      },
      breakdown: quote.breakdown,
    };
    navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
  }

  // --------------------------
  // UI
  // --------------------------
    return (
    <div className="container panel rounded-3 overflow-hidden bg-white border mt-6 max-w-4xl mx-auto my-6 p-6 md:p-10">
      {/* Header */}
      <div className="hstack items-center justify-between mb-6">
        <div>
          <h1 className="h2 sm:h3 m-0">Shopify Quote Calculator</h1>
          <p className="fs-6 sm:fs-5 text-dark text-opacity-70">
            Answer a few questions to get an instant estimate.
          </p>
        </div>
         <div className="relative" style={{ position: 'relative' }}>
        <select
          className="form-control bg-gray-50 rounded-lg px-3 py-2"
          value={form.currency}
          onChange={(e) => set('currency', e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>INR</option>
          <option>AUD</option>
          <option>CAD</option>
        </select>
        <div className="absolute  h-20px w-20px right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ position: 'absolute', right: '6px',top:"14px",zIndex: 1 }}>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg></div>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="hstack justify-between mb-2">
          <span className="fs-7 font-semibold text-gray-700">Step {step + 1} of {steps.length}</span>
          <span className="fs-7 text-gray-500">{steps[step].title}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="vstack gap-6">
        {/* Step 0: Basics */}
        {step === 0 && (
          <section>
            <h2 className="h3 sm:h2 mb-4">Basics</h2>
            <div className="row child-cols-12 md:child-cols-6 g-4">
              <div>
                <label className="block fs-7 font-medium mb-1">Project Type</label>
                 <div className="relative" style={{ position: 'relative' }}>
                <select className="form-control w-full p-3 rounded-lg border bg-gray-50" value={form.projectType} onChange={(e) => set('projectType', e.target.value)}>
                  <option value="new">New Build</option>
                  <option value="redesign">Redesign</option>
                  <option value="migration">Migration</option>
                </select>
 <div className="absolute  h-20px w-20px right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ position: 'absolute', right: '6px',top:"20px",zIndex: 1 }}>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg></div>
        </div>
              </div>
              <div>
                <label className="block fs-7 font-medium mb-1">Store Complexity</label>
                 <div className="relative" style={{ position: 'relative' }}>
                <select className="form-control w-full p-3 rounded-lg border bg-gray-50" value={form.storeType} onChange={(e) => set('storeType', e.target.value)}>
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="advanced">Advanced</option>
                  <option value="plus">Shopify Plus</option>
                </select>
               <div className="absolute  h-20px w-20px right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ position: 'absolute', right: '6px',top:"20px",zIndex: 1 }}>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg></div>
        </div>
              </div>
              <div>
                <label className="block fs-7 font-medium mb-1">Shopify Plan</label>
                 <div className="relative" style={{ position: 'relative' }}>
                <select className="form-control w-full p-3 rounded-lg border bg-gray-50" value={form.shopifyPlan} onChange={(e) => set('shopifyPlan', e.target.value)}>
                  <option>Basic</option>
                  <option>Shopify</option>
                  <option>Advanced</option>
                  <option>Plus</option>
                </select>
              <div className="absolute  h-20px w-20px right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ position: 'absolute', right: '6px',top:"20px",zIndex: 1 }}>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg></div>
        </div>
              </div>
              <div>
                <label className="block fs-7 font-medium mb-1">Approx. Products</label>
                <input type="number" min={0} className="form-control w-full p-3 rounded-lg border bg-gray-50" value={form.products} onChange={(e) => set('products', Number(e.target.value))} />
              </div>
              <div>
                <label className="block fs-7 font-medium mb-1">Avg. Variants per Product</label>
                <input type="number" min={0} className="form-control w-full p-3 rounded-lg border bg-gray-50" value={form.variantsPerProduct} onChange={(e) => set('variantsPerProduct', Number(e.target.value))} />
              </div>
            </div>
          </section>
        )}

        {/* Step 1: Design */}
        {step === 1 && (
          <section>
            <h2 className="h3 sm:h2 mb-4">Design</h2>
            <div className=" child-cols-12 md:child-cols-6 g-4">
              <div>
                <label className="block fs-7 font-medium mb-1">Theme Approach</label>
                 <div className="relative" style={{ position: 'relative' }}>
                <select className="form-control w-full p-3 rounded-lg border bg-gray-50" value={form.themeApproach} onChange={(e) => set('themeApproach', e.target.value)}>
                  <option value="prebuilt">Prebuilt Theme (minimal setup)</option>
                  <option value="customized-theme">Customize Premium Theme</option>
                  <option value="bespoke">Bespoke Design & Build</option>
                </select>
                <div className="absolute  h-20px w-20px right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ position: 'absolute', right: '6px',top:"20px",zIndex: 1 }}>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg></div>
            </div>
              </div>
              <div className="row col-span-12 md:col-span-6">
              <div className="hstack items-center gap-1 mt-6 md:mt-0">
                <input id="brandingReady" type="checkbox" checked={form.brandingReady} onChange={(e) => set('brandingReady', e.target.checked)} />
                <label htmlFor="brandingReady" className="fs-7 font-medium">Brand assets are ready (logo, palette, type)</label>
              </div>
              </div>
            </div>
          </section>
        )}

        {/* Step 2: Features */}
        {step === 2 && (
          <section>
            <h2 className="h3 sm:h2 mb-4">Features</h2>
            <div className="container  row child-cols-12 md:child-cols-6 g-4">
              {Object.entries(form.features).map(([key, val]) => (
                key !== 'speed' ? (
                  <label key={key} className="hstack items-center gap-3 p-3 rounded-xl border bg-gray-50">
                    <input type="checkbox" checked={!!val} onChange={(e) => set(`features.${key}`, e.target.checked)} />
                    <span className="fs-7 font-medium">{labelize(key)}</span>
                    {val && PRICING.features[key] ? (
                      <span className="fs-8 bg-primary text-white rounded-full px-2 py-1">{currencyFmt(PRICING.features[key])}</span>
                    ) : null}
                  </label>
                ) : null
              ))}

       
            </div>
                   <div className="col-span-12 md:col-span-6 mt-6">
                <label className="block fs-7 font-medium mb-1">Performance Target</label>
                  <div className="relative" style={{ position: 'relative' }}>
                <select className="form-control w-full p-3 rounded-lg border bg-gray-50" value={form.features.speed} onChange={(e) => set('features.speed', e.target.value)}>
                  <option value="standard">Standard (best practice)</option>
                  <option value="aggressive">Aggressive (extra tuning)</option>
                </select>
                <div className="absolute  h-20px w-20px right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ position: 'absolute', right: '6px',top:"20px",zIndex: 1 }}>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg></div>
            </div>
              </div>
          </section>
        )}

        {/* Step 3: Integrations */}
        {step === 3 && (
          <section>
            <h2 className="h3 sm:h2 mb-4">Integrations</h2>
            <div className="row child-cols-12 md:child-cols-4 g-4">
              {Object.entries(form.integrations).map(([key, count]) => (
                <div key={key} className="vstack gap-1">
                  <label className="block fs-7 font-medium">{labelize(key)}</label>
                  <input type="number" min={0} className="form-control w-full p-3 rounded-lg border bg-gray-50" value={count} onChange={(e) => set(`integrations.${key}`, Number(e.target.value))} />
                </div>
              ))}
            </div>
            <p className="fs-8 text-gray-500 mt-2">Each connector is estimated at {currencyFmt(PRICING.integrationsPerConnector)}.</p>
          </section>
        )}

        {/* Step 4: Data & Markets */}
        {step === 4 && (
          <section>
            <h2 className="h3 sm:h2 mb-4">Data & Markets</h2>
            <div className="vstack gap-4">
              <div className="hstack items-center gap-1 mb-2">
                <input id="migrate" type="checkbox" checked={form.migration.migrate} onChange={(e) => set('migration.migrate', e.target.checked)} />
                <label htmlFor="migrate" className="fs-7 font-medium">I need data migration</label>
              </div>

              {form.migration.migrate && (
                <div className="row child-cols-12 md:child-cols-4 g-4">
                  <div>
                    <label className="block fs-7 font-medium mb-1">Products to migrate</label>
                    <input type="number" min={0} className="form-control w-full p-3 rounded-lg border bg-gray-50" value={form.migration.productsToMigrate} onChange={(e) => set('migration.productsToMigrate', Number(e.target.value))} />
                  </div>
                  <div>
                    <label className="block fs-7 font-medium mb-1">Customers to migrate</label>
                    <input type="number" min={0} className="form-control w-full p-3 rounded-lg border bg-gray-50" value={form.migration.customersToMigrate} onChange={(e) => set('migration.customersToMigrate', Number(e.target.value))} />
                  </div>
                  <div>
                    <label className="block fs-7 font-medium mb-1">Orders to migrate</label>
                    <input type="number" min={0} className="form-control w-full p-3 rounded-lg border bg-gray-50" value={form.migration.ordersToMigrate} onChange={(e) => set('migration.ordersToMigrate', Number(e.target.value))} />
                  </div>
                </div>
              )}

              <div className="col-span-12">
                <label className="block fs-7 font-medium mb-1">Number of Shopify Markets</label>
                <input type="number" min={1} className="form-control w-full p-3 rounded-lg border bg-gray-50" value={form.markets} onChange={(e) => set('markets', Number(e.target.value))} />
              </div>
            </div>
          </section>
        )}

        {/* Step 5: Compliance */}
        {step === 5 && (
          <section>
            <h2 className="h3 sm:h2 mb-4">Compliance & Performance</h2>
            <div className="container row child-cols-12 md:child-cols-6 g-4">
              <label className="hstack items-center gap-3 p-3 rounded-xl border bg-gray-50">
                <input type="checkbox" checked={form.compliance.accessibility} onChange={(e) => set('compliance.accessibility', e.target.checked)} />
                <span className="fs-7 font-medium">Accessibility (WCAG target)</span>
              </label>
              <label className="hstack items-center gap-3 p-3 rounded-xl border bg-gray-50">
                <input type="checkbox" checked={form.compliance.gdpr} onChange={(e) => set('compliance.gdpr', e.target.checked)} />
                <span className="fs-7 font-medium">GDPR / Privacy Configuration</span>
              </label>
            </div>
          </section>
        )}

        {/* Step 6: Timeline & Support */}
        {step === 6 && (
          <section>
            <h2 className="h3 sm:h2 mb-4">Timeline & Support</h2>
            <div className="row child-cols-12 md:child-cols-9 g-4">
              <div className="col-span-12 md:col-span-6">
                <label className="block fs-7 font-medium mb-1">Target Timeline (weeks)</label>
                <input type="number" min={2} className="form-control w-full p-3 rounded-lg border bg-gray-50" value={form.timelineWeeks} onChange={(e) => set('timelineWeeks', Number(e.target.value))} />
                <p className="fs-8 text-gray-500 mt-1">Rush surcharge applies if under 6 weeks.</p>
              </div>
              <div className="col-span-12 md:col-span-3">
                <label className="block fs-7 font-medium mb-1">Support Plan (monthly)</label>
                  <div className="relative" style={{ position: 'relative' }}>
                <select className="form-control w-full p-3 rounded-lg border bg-gray-50" value={form.supportSLA} onChange={(e) => set('supportSLA', e.target.value)}>
                  <option value="basic">Basic — {currencyFmt(PRICING.supportMonthly.basic)}/mo</option>
                  <option value="pro">Pro — {currencyFmt(PRICING.supportMonthly.pro)}/mo</option>
                  <option value="elite">Elite — {currencyFmt(PRICING.supportMonthly.elite)}/mo</option>
                </select>
                <div className="absolute  h-20px w-20px right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ position: 'absolute', right: '6px',top:"20px",zIndex: 1 }}>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg></div>
            </div>
              </div>
            </div>
          </section>
        )}

        {/* Step 7: Review & Quote */}
        {step === 7 && (
          <section>
            <h2 className="h3 sm:h2 mb-1">Review & Quote</h2>
            <p className="fs-6 text-dark text-opacity-70 mb-4">Here is your estimated breakdown based on the answers.</p>

            <div className="overflow-hidden rounded-xl border bg-gray-50">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left fs-7 font-semibold text-gray-600 px-4 py-3">Item</th>
                    <th className="text-right fs-7 font-semibold text-gray-600 px-4 py-3">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {quote.breakdown.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white">
                      <td className="px-4 py-3 fs-7 text-gray-800">{row.label}</td>
                      <td className="px-4 py-3 fs-7 text-right text-gray-900 font-medium">{currencyFmt(row.amount)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-white">
                  <tr>
                    <td className="px-4 py-4 fs-6 font-bold">Estimated One‑Time</td>
                    <td className="px-4 py-4 text-right fs-4 font-extrabold">{currencyFmt(quote.oneTime)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 fs-6 font-bold">Estimated Monthly (Support)</td>
                    <td className="px-4 py-3 text-right fs-5 font-bold">{currencyFmt(quote.monthly)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="hstack flex-wrap gap-3 mt-4">
              <button className="btn btn-primary rounded-xl px-4 py-2" onClick={copySummary}>Copy Shareable Summary</button>
              <a
                className="btn btn-ghost rounded-xl px-4 py-2"
                href={`mailto:?subject=Shopify%20Quote%20Estimate&body=${encodeURIComponent(renderEmailBody(form, quote, currencyFmt))}`}
              >
                Email This Quote
              </a>
            </div>

            <p className="fs-8 text-gray-500 mt-4">
              * This is a good‑faith estimate for planning and budgeting. Final scope and pricing may vary after a detailed requirements workshop.
            </p>
          </section>
        )}
      </div>

      {/* Footer nav */}
      <div className="hstack items-center justify-between mt-8">
        <button className="btn btn-ghost border rounded-xl" onClick={back} disabled={step === 0}>Back</button>
        <div className="hstack gap-2">
          {step < steps.length - 1 && (
            <button className="btn btn-primary rounded-xl " onClick={next}>Next</button>
          )}
          {step === steps.length - 1 && (
            <button className="btn btn-primary rounded-xl " onClick={() => alert('Thanks! Summary copied to clipboard.')}>
              Accept Estimate
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Compose a lightweight email body for the mailto: link
function renderEmailBody(form, quote, currencyFmt) {
  const lines = [];
  lines.push('Shopify Quote Estimate');
  lines.push('');
  lines.push('— Inputs —');
  lines.push(`Project Type: ${form.projectType}`);
  lines.push(`Store Complexity: ${form.storeType}`);
  lines.push(`Products: ${form.products}`);
  lines.push(`Variants per product: ${form.variantsPerProduct}`);
  lines.push(`Theme: ${form.themeApproach}`);
  lines.push(`Markets: ${form.markets}`);
  lines.push('');
  lines.push('— Estimate —');
  quote.breakdown.forEach((r) => lines.push(`${r.label}: ${currencyFmt(r.amount)}`));
  lines.push('');
  lines.push(`Estimated One‑Time: ${currencyFmt(quote.oneTime)}`);
  lines.push(`Estimated Monthly: ${currencyFmt(quote.monthly)}`);
  return lines.join('\n');
}
