'use client';

import { useMemo, useState } from 'react';

export default function QuoteCalculator() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    platform: 'wordpress',
    projectType: 'new',
    projectName: '',
    description: '',
    wordpress: {
      siteType: 'brochure',
      pages: 10,
      blog: false,
      woocommerce: false,
      products: 0,
      customTheme: false,
      plugins: [],
    },
    shopify: {
      storeType: 'standard',
      products: 100,
      variantsPerProduct: 3,
      themeApproach: 'customized-theme',
      features: {
        subscriptions: false,
        b2b: false,
        multiCurrency: true,
        multilingual: false,
        customCheckout: false,
        customCart: false,
        wishlist: true,
        reviews: true,
        loyalty: false,
        bundles: false,
        advancedSearch: false,
        seo: true,
      },
    },
    squarespace: {
      plan: 'business',
      pages: 10,
      products: 0,
      customCSS: false,
      thirdPartyIntegrations: 0,
    },
    webflow: {
      cmsItems: 20,
      pages: 10,
      ecommerce: false,
      products: 0,
      interactions: 'basic',
    },
    nextjs: {
      pages: 10,
      apiRoutes: 5,
      authentication: false,
      database: 'none',
      ssr: true,
    },
    react: {
      pages: 10,
      stateManagement: 'context',
      routing: true,
      apiIntegration: 3,
    },
    shopifyApp: {
      appType: 'public',
      apiIntegration: 5,
      users: 100,
      complexity: 'medium',
    },
    bigcommerce: {
      products: 100,
      variantsPerProduct: 3,
      theme: 'custom',
      integrations: 3,
    },
    integrations: {
      erp: 0,
      crm: 0,
      pos: 0,
      accounting: 0,
      shipping: 1,
      marketing: 0,
      payments: 1,
    },
    compliance: {
      accessibility: false,
      gdpr: true,
      pci: false,
    },
    design: {
      brandingReady: true,
      designStyle: 'modern',
      customIllustrations: 0,
      animations: 'basic',
    },
    content: {
      contentCreation: false,
      pagesWithContent: 0,
      blogPosts: 0,
      productDescriptions: 0,
    },
    timelineWeeks: 8,
    supportSLA: 'pro',
    currency: 'USD',
  });

  const PRICING = {
    base: {
      wordpress: { new: 2000, redesign: 1500, migration: 2500 },
      shopify: { new: 3000, redesign: 2200, migration: 3500 },
      squarespace: { new: 1500, redesign: 1200, migration: 2000 },
      webflow: { new: 2500, redesign: 2000, migration: 3000 },
      nextjs: { new: 5000, redesign: 4000, migration: 6000 },
      react: { new: 4500, redesign: 3500, migration: 5500 },
      shopifyApp: { new: 7000, redesign: 0, migration: 0 },
      bigcommerce: { new: 2800, redesign: 2200, migration: 3200 },
    },
    wordpress: {
      siteTypeMultiplier: { brochure: 1, corporate: 1.5, enterprise: 2.5, ecommerce: 2 },
      perPage: 50,
      blogSetup: 200,
      woocommerce: {
        base: 600,
        per50Products: 100,
      },
      customTheme: 1200,
      plugin: {
        basic: 50,
        intermediate: 150,
        advanced: 300,
      },
    },
    shopify: {
      storeTypeMultiplier: { basic: 1, standard: 1.35, advanced: 1.9, plus: 3.2 },
      theme: { prebuilt: 0, 'customized-theme': 1200, bespoke: 2500 },
      per50Products: 120,
      variantComplexityMultiplier(v) { return Math.max(0.8, 1 + (v - 3) * 0.05); },
      features: {
        subscriptions: 1100,
        b2b: 1600,
        multiCurrency: 100,
        multilingual: 100,
        customCheckout: 1400,
        customCart: 500,
        wishlist: 320,
        reviews: 150,
        loyalty: 850,
        bundles: 650,
        advancedSearch: 550,
        seo: 740,
      },
    },
    squarespace: {
      planMultiplier: { personal: 0.8, business: 1, 'commerce-basic': 1.3, 'commerce-advanced': 1.7 },
      perPage: 40,
      perProduct: 15,
      customCSS: 400,
      thirdPartyIntegration: 250,
    },
    webflow: {
      perPage: 60,
      perCMSItem: 20,
      ecommerce: {
        base: 800,
        perProduct: 15,
      },
      interactions: { none: 0, basic: 300, advanced: 800 },
    },
    nextjs: {
      perPage: 80,
      perAPIRoute: 120,
      authentication: 600,
      database: { none: 0, mongodb: 800, postgresql: 900, mysql: 850 },
      ssr: 400,
    },
    react: {
      perPage: 70,
      stateManagement: { none: 0, context: 300, redux: 600, mobx: 550 },
      routing: 250,
      apiIntegration: 200,
    },
    shopifyApp: {
      appTypeMultiplier: { public: 1, custom: 1.5 },
      perAPIEndpoint: 150,
      perUserScale: 0.5,
      complexityMultiplier: { low: 0.8, medium: 1, high: 1.5 },
    },
    bigcommerce: {
      per50Products: 110,
      variantComplexityMultiplier(v) { return Math.max(0.8, 1 + (v - 3) * 0.05); },
      theme: { prebuilt: 0, custom: 1500 },
      perIntegration: 250,
    },
    integrationsPerConnector: 520,
    compliance: { accessibility: 500, gdpr: 150, pci: 1000 },
    design: {
      brandingNotReady: 200,
      designStyle: { modern: 0, classic: 0, minimalist: 0, bold: 0 },
      perCustomIllustration: 80,
      animations: { none: 0, basic: 300, advanced: 800 },
    },
    content: {
      perPageWithContent: 40,
      perBlogPost: 60,
      perProductDescription: 15,
    },
    rushSurcharge(weeks) { return weeks < 6 ? (6 - weeks) * 0.1 : 0; },
    supportMonthly: { none: 0, basic: 110, pro: 320, elite: 850 },
  };

  const currencyFmt = (n) => new Intl.NumberFormat(undefined, { 
    style: 'currency', 
    currency: form.currency || 'USD' 
  }).format(n);

  const quote = useMemo(() => {
    const breakdown = [];
    let oneTime = 0;

    const add = (label, amount, meta = {}) => {
      if (amount > 0) breakdown.push({ label, amount, ...meta });
      oneTime += Math.max(0, amount);
    };

    const base = PRICING.base[form.platform][form.projectType] || PRICING.base[form.platform].new;
    add(`Base ${form.platform} ${form.projectType} project`, base, { key: 'base' });

    switch (form.platform) {
      case 'wordpress':
        const wpMult = PRICING.wordpress.siteTypeMultiplier[form.wordpress.siteType] || 1;
        const wpBaseCost = Math.round(base * wpMult);
        if (wpMult !== 1) {
          add(`WordPress ${form.wordpress.siteType} site multiplier × ${wpMult}`, wpBaseCost - base);
        }

        if (form.wordpress.pages > 5) {
          const extraPages = form.wordpress.pages - 5;
          add(`Additional pages (${extraPages})`, extraPages * PRICING.wordpress.perPage);
        }

        if (form.wordpress.blog) {
          add('Blog setup', PRICING.wordpress.blogSetup);
        }

        if (form.wordpress.woocommerce) {
          add('WooCommerce setup', PRICING.wordpress.woocommerce.base);
          if (form.wordpress.products > 0) {
            const productBlocks = Math.ceil(form.wordpress.products / 50);
            add(`Products (${form.wordpress.products})`, productBlocks * PRICING.wordpress.woocommerce.per50Products);
          }
        }

        if (form.wordpress.customTheme) {
          add('Custom theme development', PRICING.wordpress.customTheme);
        }
        break;

      case 'shopify':
        const shopifyMult = PRICING.shopify.storeTypeMultiplier[form.shopify.storeType] || 1;
        const shopifyBaseCost = Math.round(base * shopifyMult);
        if (shopifyMult !== 1) {
          add(`Shopify ${form.shopify.storeType} store multiplier × ${shopifyMult}`, shopifyBaseCost - base);
        }

        if (form.shopify.products > 0) {
          const productBlocks = Math.ceil(form.shopify.products / 50);
          add(`Products (${form.shopify.products})`, productBlocks * PRICING.shopify.per50Products);
        }

        const themeCost = PRICING.shopify.theme[form.shopify.themeApproach] || 0;
        if (themeCost > 0) {
          add(`Theme approach (${form.shopify.themeApproach})`, themeCost);
        }

        Object.entries(form.shopify.features || {}).forEach(([key, val]) => {
          if (val && PRICING.shopify.features[key]) {
            add(`Feature: ${key}`, PRICING.shopify.features[key]);
          }
        });
        break;

      case 'squarespace':
        const sqspMult = PRICING.squarespace.planMultiplier[form.squarespace.plan] || 1;
        const sqspBaseCost = Math.round(base * sqspMult);
        if (sqspMult !== 1) {
          add(`Squarespace ${form.squarespace.plan} plan multiplier × ${sqspMult}`, sqspBaseCost - base);
        }

        if (form.squarespace.pages > 5) {
          const extraPages = form.squarespace.pages - 5;
          add(`Additional pages (${extraPages})`, extraPages * PRICING.squarespace.perPage);
        }

        if (form.squarespace.products > 0) {
          add(`Products (${form.squarespace.products})`, form.squarespace.products * PRICING.squarespace.perProduct);
        }

        if (form.squarespace.customCSS) {
          add('Custom CSS', PRICING.squarespace.customCSS);
        }

        if (form.squarespace.thirdPartyIntegrations > 0) {
          add(`Third-party integrations (${form.squarespace.thirdPartyIntegrations})`, 
            form.squarespace.thirdPartyIntegrations * PRICING.squarespace.thirdPartyIntegration);
        }
        break;

      default:
        break;
    }

    if (!form.design.brandingReady) {
      add('Branding preparation', PRICING.design.brandingNotReady);
    }

    if (form.design.customIllustrations > 0) {
      add(`Custom illustrations (${form.design.customIllustrations})`, 
        form.design.customIllustrations * PRICING.design.perCustomIllustration);
    }

    if (form.design.animations !== 'none') {
      add(`${form.design.animations} animations`, PRICING.design.animations[form.design.animations]);
    }

    if (form.content.contentCreation) {
      if (form.content.pagesWithContent > 0) {
        add(`Content for ${form.content.pagesWithContent} pages`, 
          form.content.pagesWithContent * PRICING.content.perPageWithContent);
      }

      if (form.content.blogPosts > 0) {
        add(`Blog posts (${form.content.blogPosts})`, 
          form.content.blogPosts * PRICING.content.perBlogPost);
      }

      if (form.content.productDescriptions > 0) {
        add(`Product descriptions (${form.content.productDescriptions})`, 
          form.content.productDescriptions * PRICING.content.perProductDescription);
      }
    }

    const integrationsCount = Object.values(form.integrations || {}).reduce((a, b) => a + Number(b || 0), 0);
    if (integrationsCount > 0) {
      add(`Integrations (${integrationsCount} connectors)`, integrationsCount * PRICING.integrationsPerConnector);
    }

    if (form.compliance.accessibility) {
      add('Accessibility (WCAG)', PRICING.compliance.accessibility);
    }

    if (form.compliance.gdpr) {
      add('GDPR compliance', PRICING.compliance.gdpr);
    }

    if (form.compliance.pci) {
      add('PCI compliance', PRICING.compliance.pci);
    }

    const rushFactor = PRICING.rushSurcharge(Number(form.timelineWeeks) || 0);
    if (rushFactor > 0) {
      add(`Rush surcharge (${Math.round(rushFactor * 100)}%)`, Math.round(oneTime * rushFactor));
    }

    const monthly = PRICING.supportMonthly[form.supportSLA] || 0;

    return { breakdown, oneTime, monthly };
  }, [form]);

  const steps = [
    { title: 'Platform Selection', description: 'Choose your platform and project type' },
    { title: 'Project Details', description: 'Tell us about your project requirements' },
    { title: 'Design & UX', description: 'Design approach and requirements' },
    { title: 'Features', description: 'Select features you need' },
    { title: 'Integrations', description: 'Third-party integrations needed' },
    { title: 'Content', description: 'Content creation and migration' },
    { title: 'Compliance', description: 'Legal and accessibility requirements' },
    { title: 'Timeline & Support', description: 'Project timeline and ongoing support' },
    { title: 'Review & Quote', description: 'See your estimate and share it' },
  ];

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

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
    alert('Quote summary copied to clipboard!');
  }

  const renderPlatformSelection = () => (
    <section>
      <h2 className="h3 sm:h2 mb-4">Select Your Platform</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { id: 'wordpress', name: 'WordPress', icon: '📝' },
          { id: 'shopify', name: 'Shopify', icon: '🛒' },
          { id: 'squarespace', name: 'Squarespace', icon: '🖼️' },
          { id: 'webflow', name: 'Webflow', icon: '🌐' },
          { id: 'nextjs', name: 'Next.js', icon: '⚡' },
          { id: 'react', name: 'React', icon: '⚛️' },
          { id: 'shopifyApp', name: 'Shopify App', icon: '📱' },
          { id: 'bigcommerce', name: 'BigCommerce', icon: '🏪' },
          { id: 'other', name: 'Other', icon: '🔧' },
        ].map((platform) => (
          <div
            key={platform.id}
            className={`p-4 border rounded-lg cursor-pointer text-center transition-all ${
              form.platform === platform.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => set('platform', platform.id)}
          >
            <div className="text-2xl mb-2">{platform.icon}</div>
            <div className="font-medium">{platform.name}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <label className="block fs-7 font-medium mb-1">Project Type</label>
        <div className="grid grid-cols-3 gap-4">
          <div 
            className={`p-4 border rounded-lg cursor-pointer text-center ${
              form.projectType === 'new' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
            onClick={() => set('projectType', 'new')}
          >
            New Build
          </div>
          <div 
            className={`p-4 border rounded-lg cursor-pointer text-center ${
              form.projectType === 'redesign' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
            onClick={() => set('projectType', 'redesign')}
          >
            Redesign
          </div>
          <div 
            className={`p-4 border rounded-lg cursor-pointer text-center ${
              form.projectType === 'migration' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
            onClick={() => set('projectType', 'migration')}
          >
            Migration
          </div>
        </div>
      </div>
    </section>
  );

  const renderProjectDetails = () => (
    <section>
      <h2 className="h3 sm:h2 mb-4">Project Details</h2>
      
      <div className="mb-6">
        <label className="block fs-7 font-medium mb-1">Project Name</label>
        <input 
          type="text" 
          className="form-control w-full p-3 rounded-lg border" 
          value={form.projectName} 
          onChange={(e) => set('projectName', e.target.value)} 
          placeholder="My Website Project"
        />
      </div>
      
      <div className="mb-6">
        <label className="block fs-7 font-medium mb-1">Project Description</label>
        <textarea 
          className="form-control w-full p-3 rounded-lg border" 
          value={form.description} 
          onChange={(e) => set('description', e.target.value)} 
          rows={3}
          placeholder="Brief description of your project goals and requirements..."
        />
      </div>
      
      {form.platform === 'wordpress' && (
        <div className="space-y-4">
          <div>
            <label className="block fs-7 font-medium mb-1">WordPress Site Type</label>
            <select 
              className="form-control w-full p-3 rounded-lg border" 
              value={form.wordpress.siteType} 
              onChange={(e) => set('wordpress.siteType', e.target.value)}
            >
              <option value="brochure">Brochure Website</option>
              <option value="corporate">Corporate Website</option>
              <option value="enterprise">Enterprise Website</option>
              <option value="ecommerce">E-commerce Store</option>
            </select>
          </div>
          
          <div>
            <label className="block fs-7 font-medium mb-1">Number of Pages</label>
            <input 
              type="number" 
              min="1" 
              className="form-control w-full p-3 rounded-lg border" 
              value={form.wordpress.pages} 
              onChange={(e) => set('wordpress.pages', parseInt(e.target.value))} 
            />
          </div>
          
          <div className="flex items-center gap-2">
            <input 
              id="wordpress-blog" 
              type="checkbox" 
              checked={form.wordpress.blog} 
              onChange={(e) => set('wordpress.blog', e.target.checked)} 
            />
            <label htmlFor="wordpress-blog" className="fs-7 font-medium">Include Blog</label>
          </div>
          
          <div className="flex items-center gap-2">
            <input 
              id="wordpress-woocommerce" 
              type="checkbox" 
              checked={form.wordpress.woocommerce} 
              onChange={(e) => set('wordpress.woocommerce', e.target.checked)} 
            />
            <label htmlFor="wordpress-woocommerce" className="fs-7 font-medium">WooCommerce E-commerce</label>
          </div>
          
          {form.wordpress.woocommerce && (
            <div>
              <label className="block fs-7 font-medium mb-1">Number of Products</label>
              <input 
                type="number" 
                min="0" 
                className="form-control w-full p-3 rounded-lg border" 
                value={form.wordpress.products} 
                onChange={(e) => set('wordpress.products', parseInt(e.target.value))} 
              />
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <input 
              id="wordpress-custom-theme" 
              type="checkbox" 
              checked={form.wordpress.customTheme} 
              onChange={(e) => set('wordpress.customTheme', e.target.checked)} 
            />
            <label htmlFor="wordpress-custom-theme" className="fs-7 font-medium">Custom Theme Development</label>
          </div>
        </div>
      )}
      
      {form.platform === 'shopify' && (
        <div className="space-y-4">
          <div>
            <label className="block fs-7 font-medium mb-1">Shopify Store Type</label>
            <select 
              className="form-control w-full p-3 rounded-lg border" 
              value={form.shopify.storeType} 
              onChange={(e) => set('shopify.storeType', e.target.value)}
            >
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="advanced">Advanced</option>
              <option value="plus">Plus</option>
            </select>
          </div>
          
          <div>
            <label className="block fs-7 font-medium mb-1">Number of Products</label>
            <input 
              type="number" 
              min="1" 
              className="form-control w-full p-3 rounded-lg border" 
              value={form.shopify.products} 
              onChange={(e) => set('shopify.products', parseInt(e.target.value))} 
            />
          </div>
          
          <div>
            <label className="block fs-7 font-medium mb-1">Theme Approach</label>
            <select 
              className="form-control w-full p-3 rounded-lg border" 
              value={form.shopify.themeApproach} 
              onChange={(e) => set('shopify.themeApproach', e.target.value)}
            >
              <option value="prebuilt">Prebuilt Theme</option>
              <option value="customized-theme">Customized Theme</option>
              <option value="bespoke">Bespoke Design</option>
            </select>
          </div>
        </div>
      )}
    </section>
  );

  const renderDesignAndUX = () => (
    <section>
      <h2 className="h3 sm:h2 mb-4">Design & UX</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <input 
            id="branding-ready" 
            type="checkbox" 
            checked={form.design.brandingReady} 
            onChange={(e) => set('design.brandingReady', e.target.checked)} 
          />
          <label htmlFor="branding-ready" className="fs-7 font-medium">Brand assets are ready (logo, palette, fonts)</label>
        </div>
        
        <div>
          <label className="block fs-7 font-medium mb-1">Design Style</label>
          <select 
            className="form-control w-full p-3 rounded-lg border" 
            value={form.design.designStyle} 
            onChange={(e) => set('design.designStyle', e.target.value)}
          >
            <option value="modern">Modern</option>
            <option value="classic">Classic</option>
            <option value="minimalist">Minimalist</option>
            <option value="bold">Bold</option>
          </select>
        </div>
        
        <div>
          <label className="block fs-7 font-medium mb-1">Number of Custom Illustrations</label>
          <input 
            type="number" 
            min="0" 
            className="form-control w-full p-3 rounded-lg border" 
            value={form.design.customIllustrations} 
            onChange={(e) => set('design.customIllustrations', parseInt(e.target.value))} 
          />
        </div>
        
        <div>
          <label className="block fs-7 font-medium mb-1">Animation Level</label>
          <select 
            className="form-control w-full p-3 rounded-lg border" 
            value={form.design.animations} 
            onChange={(e) => set('design.animations', e.target.value)}
          >
            <option value="none">No Animations</option>
            <option value="basic">Basic Animations</option>
            <option value="advanced">Advanced Animations</option>
          </select>
        </div>
      </div>
    </section>
  );

  const renderFeatures = () => (
    <section>
      <h2 className="h3 sm:h2 mb-4">Features</h2>
      
      <div className="space-y-4">
        {form.platform === 'shopify' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(form.shopify.features || {}).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2 p-3 border rounded-lg">
                <input 
                  id={`feature-${key}`}
                  type="checkbox" 
                  checked={value} 
                  onChange={(e) => set(`shopify.features.${key}`, e.target.checked)} 
                />
                <label htmlFor={`feature-${key}`} className="fs-7 font-medium">{labelize(key)}</label>
                {value && PRICING.shopify.features[key] && (
                  <span className="ml-auto text-sm font-semibold">
                    {currencyFmt(PRICING.shopify.features[key])}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
        
        {form.platform === 'wordpress' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 p-3 border rounded-lg">
              <input 
                id="feature-contact-form"
                type="checkbox" 
                checked={true} 
                onChange={() => {}} 
              />
              <label htmlFor="feature-contact-form" className="fs-7 font-medium">Contact Form</label>
              <span className="ml-auto text-sm font-semibold">Included</span>
            </div>
            
            <div className="flex items-center gap-2 p-3 border rounded-lg">
              <input 
                id="feature-seo"
                type="checkbox" 
                checked={true} 
                onChange={() => {}} 
              />
              <label htmlFor="feature-seo" className="fs-7 font-medium">Basic SEO</label>
              <span className="ml-auto text-sm font-semibold">Included</span>
            </div>
            
            <div className="flex items-center gap-2 p-3 border rounded-lg">
              <input 
                id="feature-responsive"
                type="checkbox" 
                checked={true} 
                onChange={() => {}} 
              />
              <label htmlFor="feature-responsive" className="fs-7 font-medium">Responsive Design</label>
              <span className="ml-auto text-sm font-semibold">Included</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );

  const renderIntegrations = () => (
    <section>
      <h2 className="h3 sm:h2 mb-4">Integrations</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(form.integrations || {}).map(([key, value]) => (
            <div key={key} className="flex flex-col gap-1">
              <label className="block fs-7 font-medium">{labelize(key)}</label>
              <input 
                type="number" 
                min="0" 
                className="form-control w-full p-3 rounded-lg border" 
                value={value} 
                onChange={(e) => set(`integrations.${key}`, parseInt(e.target.value))} 
              />
            </div>
          ))}
        </div>
        
        <p className="text-sm text-gray-500 mt-2">
          Each integration connector is estimated at {currencyFmt(PRICING.integrationsPerConnector)}.
        </p>
      </div>
    </section>
  );

  const renderContent = () => (
    <section>
      <h2 className="h3 sm:h2 mb-4">Content</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <input 
            id="content-creation" 
            type="checkbox" 
            checked={form.content.contentCreation} 
            onChange={(e) => set('content.contentCreation', e.target.checked)} 
          />
          <label htmlFor="content-creation" className="fs-7 font-medium">We need content creation services</label>
        </div>
        
        {form.content.contentCreation && (
          <>
            <div>
              <label className="block fs-7 font-medium mb-1">Pages with Content</label>
              <input 
                type="number" 
                min="0" 
                className="form-control w-full p-3 rounded-lg border" 
                value={form.content.pagesWithContent} 
                onChange={(e) => set('content.pagesWithContent', parseInt(e.target.value))} 
              />
            </div>
            
            <div>
              <label className="block fs-7 font-medium mb-1">Blog Posts</label>
              <input 
                type="number" 
                min="0" 
                className="form-control w-full p-3 rounded-lg border" 
                value={form.content.blogPosts} 
                onChange={(e) => set('content.blogPosts', parseInt(e.target.value))} 
              />
            </div>
            
            <div>
              <label className="block fs-7 font-medium mb-1">Product Descriptions</label>
              <input 
                type="number" 
                min="0" 
                className="form-control w-full p-3 rounded-lg border" 
                value={form.content.productDescriptions} 
                onChange={(e) => set('content.productDescriptions', parseInt(e.target.value))} 
              />
            </div>
          </>
        )}
      </div>
    </section>
  );

  const renderCompliance = () => (
    <section>
      <h2 className="h3 sm:h2 mb-4">Compliance</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2 p-3 border rounded-lg">
          <input 
            id="compliance-accessibility" 
            type="checkbox" 
            checked={form.compliance.accessibility} 
            onChange={(e) => set('compliance.accessibility', e.target.checked)} 
          />
          <label htmlFor="compliance-accessibility" className="fs-7 font-medium">WCAG Accessibility Compliance</label>
          {form.compliance.accessibility && (
            <span className="ml-auto text-sm font-semibold">
              {currencyFmt(PRICING.compliance.accessibility)}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2 p-3 border rounded-lg">
          <input 
            id="compliance-gdpr" 
            type="checkbox" 
            checked={form.compliance.gdpr} 
            onChange={(e) => set('compliance.gdpr', e.target.checked)} 
          />
          <label htmlFor="compliance-gdpr" className="fs-7 font-medium">GDPR Compliance</label>
          {form.compliance.gdpr && (
            <span className="ml-auto text-sm font-semibold">
              {currencyFmt(PRICING.compliance.gdpr)}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2 p-3 border rounded-lg">
          <input 
            id="compliance-pci" 
            type="checkbox" 
            checked={form.compliance.pci} 
            onChange={(e) => set('compliance.pci', e.target.checked)} 
          />
          <label htmlFor="compliance-pci" className="fs-7 font-medium">PCI DSS Compliance (for payments)</label>
          {form.compliance.pci && (
            <span className="ml-auto text-sm font-semibold">
              {currencyFmt(PRICING.compliance.pci)}
            </span>
          )}
        </div>
      </div>
    </section>
  );

  const renderTimelineAndSupport = () => (
    <section>
      <h2 className="h3 sm:h2 mb-4">Timeline & Support</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block fs-7 font-medium mb-1">Project Timeline (weeks)</label>
          <input 
            type="number" 
            min="2" 
            max="52" 
            className="form-control w-full p-3 rounded-lg border" 
            value={form.timelineWeeks} 
            onChange={(e) => set('timelineWeeks', parseInt(e.target.value))} 
          />
          <p className="text-sm text-gray-500 mt-1">
            Rush surcharge applies if under 6 weeks.
          </p>
        </div>
        
        <div>
          <label className="block fs-7 font-medium mb-1">Ongoing Support Plan</label>
          <select 
            className="form-control w-full p-3 rounded-lg border" 
            value={form.supportSLA} 
            onChange={(e) => set('supportSLA', e.target.value)}
          >
            <option value="none">No Support</option>
            <option value="basic">Basic Support ({currencyFmt(PRICING.supportMonthly.basic)}/month)</option>
            <option value="pro">Pro Support ({currencyFmt(PRICING.supportMonthly.pro)}/month)</option>
            <option value="elite">Elite Support ({currencyFmt(PRICING.supportMonthly.elite)}/month)</option>
          </select>
        </div>
      </div>
    </section>
  );

  const renderReviewAndQuote = () => (
    <section>
      <h2 className="h3 sm:h2 mb-1">Review & Quote</h2>
      <p className="fs-6 text-dark text-opacity-70 mb-4">Here is your estimated breakdown based on the answers.</p>

      <div className="overflow-hidden rounded-xl border">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left fs-7 font-semibold text-gray-600 px-4 py-3">Item</th>
              <th className="text-right fs-7 font-semibold text-gray-600 px-4 py-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {quote.breakdown.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-3 fs-7 text-gray-900">{row.label}</td>
                <td className="px-4 py-3 fs-7 text-right text-gray-900 font-medium">{currencyFmt(row.amount)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="px-4 py-4 fs-6 font-bold">Estimated One-Time</td>
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
        <button className="btn btn-primary rounded-xl" onClick={copySummary}>Copy Shareable Summary</button>
        <a
          className="btn btn-primary rounded-xl"
          href={`mailto:?subject=Web Development Quote Estimate&body=${encodeURIComponent(
            `Web Development Quote Estimate\n\n` +
            `Platform: ${form.platform}\n` +
            `Project Type: ${form.projectType}\n` +
            `One-Time Cost: ${currencyFmt(quote.oneTime)}\n` +
            `Monthly Support: ${currencyFmt(quote.monthly)}\n\n` +
            `Breakdown:\n${quote.breakdown.map(item => `- ${item.label}: ${currencyFmt(item.amount)}`).join('\n')}`
          )}`}
        >
          Email This Quote
        </a>
      </div>

      <p className="fs-8 text-gray-500 mt-4">
        * This is a good-faith estimate for planning and budgeting. Final scope and pricing may vary after a detailed requirements workshop.
      </p>
    </section>
  );

  return (
    <div className="section-outer panel py-4 xl:py-9 bg-white dark:bg-gray-800">
      <div className="container bg-white dark:bg-gray-800 panel rounded-3 overflow-hidden bg-white border mt-6 max-w-4xl mx-auto my-6 p-6 md:p-10 max-w-xl" id="quote_calculator">
        <div className="hstack items-center justify-between mb-6">
          <div>
            <h1 className="h2 sm:h3 m-0">Web Development Quote Calculator</h1>
            <p className="fs-6 sm:fs-5 text-dark text-opacity-70">
              Answer a few questions to get an instant estimate.
            </p>
          </div>
          <div className="relative">
            <select
              className="form-control bg-white dark:bg-gray-800 rounded-lg px-3 py-2"
              value={form.currency}
              onChange={(e) => set('currency', e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
              <option value="AUD">AUD</option>
              <option value="CAD">CAD</option>
            </select>
            <div className="absolute h-5 w-5 right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="hstack justify-between mb-2 opacity-50 border-dashed border-gray-300 p-2 rounded-lg">
            <span className="fs-5 font-semibold text-gray-700">Step {step + 1} of {steps.length}</span>
            <span className="fs-5 text-gray-500">{steps[step].title}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="vstack gap-6">
          {step === 0 && renderPlatformSelection()}
          {step === 1 && renderProjectDetails()}
          {step === 2 && renderDesignAndUX()}
          {step === 3 && renderFeatures()}
          {step === 4 && renderIntegrations()}
          {step === 5 && renderContent()}
          {step === 6 && renderCompliance()}
          {step === 7 && renderTimelineAndSupport()}
          {step === 8 && renderReviewAndQuote()}
        </div>

        <div className="hstack items-center justify-between mt-8">
          <button className="btn btn-ghost border rounded-xl" onClick={back} disabled={step === 0}>
            Back
          </button>
          <div className="hstack gap-2">
            {step < steps.length - 1 && (
              <button className="btn btn-primary rounded-xl" onClick={next}>
                Next
              </button>
            )}
            {step === steps.length - 1 && (
              <button className="btn btn-primary rounded-xl" onClick={copySummary}>
                Accept Estimate
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}