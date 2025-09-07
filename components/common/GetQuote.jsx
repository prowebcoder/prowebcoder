"use client";
import { useState, useMemo } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const GetQuoteCalculator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currency, setCurrency] = useState('USD');

  const [form, setForm] = useState({
    platform: null,
    projectType: 'new',
    complexity: 'standard',
    migrationSource: '',
    pages: 5,
    features: {},
    technologies: {},
    integrations: {},
    timeline: 8,
    support: 'basic',
    projectName: '',
    projectDescription: ''
  });

  const steps = [
    { title: 'Platform', description: 'Choose your platform' },
    { title: 'Project Type', description: 'Project details' },
    { title: 'Features', description: 'Select features' },
    { title: 'Technologies', description: 'Tech stack' },
    { title: 'Integrations', description: 'Third-party services' },
    { title: 'Timeline', description: 'Project timeline' },
    { title: 'Review', description: 'Final review' }
  ];

  const platforms = [
    { 
      id: 'wordpress', 
      name: 'WordPress', 
      description: 'CMS & Custom Development', 
      basePrice: 500, 
      icon: '/assets/images/logos/wordpress.svg', 
      complexity: { basic: 1, standard: 1.3, premium: 1.8 } 
    },
    { 
      id: 'shopify', 
      name: 'Shopify', 
      description: 'E-commerce Platform', 
      basePrice: 1500, 
     icon: '/assets/images/logos/shopify.svg',
      complexity: { basic: 1, standard: 1.2, premium: 1.6 } 
    },
    { 
      id: 'nextjs', 
      name: 'Next.js', 
      description: 'React Framework', 
      basePrice: 1500, 
      icon: '/assets/images/logos/next.svg',
      complexity: { basic: 1, standard: 1.3, premium: 1.8 } 
    },
    { 
      id: 'react', 
      name: 'React', 
      description: 'SPA Development', 
      basePrice: 1500, 
     icon: '/assets/images/logos/react.png',
      complexity: { basic: 1, standard: 1.4, premium: 1.9 } 
    },
    { 
      id: 'webflow', 
      name: 'Webflow', 
      description: 'Visual Development', 
      basePrice: 1000, 
    icon: '/assets/images/logos/webflow.svg',
      complexity: { basic: 1, standard: 1.3, premium: 1.7 } 
    },
    { 
      id: 'squarespace', 
      name: 'Squarespace', 
      description: 'Website Builder', 
      basePrice: 500, 
      icon: '/assets/images/logos/squarespace.svg',
      complexity: { basic: 1, standard: 1.3, premium: 1.6 } 
    },
    { 
      id: 'shopify-app', 
      name: 'Shopify App', 
      description: 'Custom App Development', 
      basePrice: 1500, 
     icon: '/assets/images/logos/shopify.svg',
      complexity: { basic: 1, standard: 1.5, premium: 2.2 } 
    },
    { 
      id: 'bigcommerce', 
      name: 'BigCommerce', 
      description: 'Enterprise E-commerce', 
      basePrice: 1000, 
      icon: '/assets/images/logos/bigcommerce.svg',
      complexity: { basic: 1, standard: 1.4, premium: 2.0 } 
    }
  ];

  const getFeaturesByPlatform = (platformId) => {
    const features = {
      wordpress: {
        'woocommerce': { name: 'WooCommerce Store', price: 800, description: 'E-commerce functionality' },
        'custom-theme': { name: 'Custom Theme Development', price: 1200, description: 'Unique branded theme' },
        'membership': { name: 'Membership System', price: 600, description: 'User registration and access control' },
        'multisite': { name: 'WordPress Multisite', price: 500, description: 'Network of multiple sites' },
        'page-builder': { name: 'Page Builder Setup', price: 300, description: 'Drag & drop page editing' },
        'blog-advanced': { name: 'Advanced Blog Features', price: 400, description: 'Categories, tags, comments' }
      },
      shopify: {
        'custom-theme': { name: 'Custom Shopify Theme', price: 1200, description: 'Liquid template customization' },
        'shopify-plus': { name: 'Shopify Plus Setup', price: 1500, description: 'Enterprise features' },
        'product-variants': { name: 'Complex Product Variants', price: 600, description: 'Size, color, material options' },
        'subscription': { name: 'Subscription Products', price: 800, description: 'Recurring billing setup' },
        'multi-currency': { name: 'Multi-Currency Support', price: 400, description: 'International selling' },
        'inventory-management': { name: 'Inventory Management', price: 600, description: 'Stock tracking system' }
      },
      nextjs: {
        'ssr': { name: 'Server-Side Rendering', price: 600, description: 'SEO-optimized rendering' },
        'authentication': { name: 'User Authentication', price: 800, description: 'Login/signup system' },
        'api-routes': { name: 'Custom API Routes', price: 700, description: 'Backend API development' },
        'database': { name: 'Database Integration', price: 900, description: 'PostgreSQL/MongoDB setup' },
        'deployment': { name: 'Production Deployment', price: 400, description: 'Vercel/AWS setup' },
        'pwa': { name: 'Progressive Web App', price: 600, description: 'Mobile app features' }
      },
      react: {
        'spa': { name: 'Single Page Application', price: 600, description: 'Client-side routing' },
        'state-management': { name: 'State Management', price: 700, description: 'Redux/Context setup' },
        'component-library': { name: 'Component Library', price: 900, description: 'Reusable UI components' },
        'testing': { name: 'Testing Suite', price: 600, description: 'Jest & React Testing Library' },
        'optimization': { name: 'Performance Optimization', price: 500, description: 'Bundle optimization' },
        'api-integration': { name: 'API Integration', price: 600, description: 'RESTful API connections' }
      },
      webflow: {
        'cms': { name: 'Webflow CMS', price: 400, description: 'Dynamic content management' },
        'interactions': { name: 'Custom Interactions', price: 600, description: 'Advanced animations' },
        'ecommerce': { name: 'Webflow E-commerce', price: 700, description: 'Online store features' },
        'forms': { name: 'Advanced Forms', price: 300, description: 'Custom form styling' },
        'membership': { name: 'Membership Portal', price: 800, description: 'Gated content access' },
        'responsive': { name: 'Advanced Responsive', price: 400, description: 'Mobile-first design' }
      },
      squarespace: {
        'custom-css': { name: 'Custom CSS/JavaScript', price: 400, description: 'Advanced customizations' },
        'ecommerce': { name: 'Online Store', price: 600, description: 'Product catalog and payments' },
        'booking': { name: 'Appointment Booking', price: 500, description: 'Online scheduling' },
        'portfolio': { name: 'Portfolio Gallery', price: 400, description: 'Professional showcase' },
        'integrations': { name: 'Third-party Integrations', price: 300, description: 'Email, analytics setup' },
        'seo-advanced': { name: 'Advanced SEO', price: 300, description: 'Meta optimization' }
      },
      'shopify-app': {
        'public-app': { name: 'Public App Development', price: 1200, description: 'Shopify App Store ready' },
        'private-app': { name: 'Private App Setup', price: 1200, description: 'Store-specific app' },
        'webhooks': { name: 'Webhook Integration', price: 800, description: 'Real-time data sync' },
        'admin-panel': { name: 'Admin Dashboard', price: 1500, description: 'App management interface' },
        'billing': { name: 'App Billing System', price: 1200, description: 'Subscription management' },
        'reviews': { name: 'Review System', price: 800, description: 'User feedback collection' }
      },
      bigcommerce: {
        'custom-theme': { name: 'Custom BigCommerce Theme', price: 1200, description: 'Stencil theme development' },
        'api-integration': { name: 'API Integration', price: 900, description: 'Third-party connections' },
        'multi-storefront': { name: 'Multi-Storefront', price: 1500, description: 'Multiple brand stores' },
        'b2b-features': { name: 'B2B Features', price: 1200, description: 'Wholesale functionality' },
        'headless': { name: 'Headless Commerce', price: 1800, description: 'API-first approach' },
        'payment-gateway': { name: 'Custom Payment Gateway', price: 1000, description: 'Payment integration' }
      }
    };

    // Universal features available for all platforms
    const universalFeatures = {
      'seo': { name: 'SEO Optimization', price: 300, description: 'Search engine optimization' },
      'analytics': { name: 'Analytics Setup', price: 200, description: 'Google Analytics & tracking' },
      'social-media': { name: 'Social Media Integration', price: 200, description: 'Social sharing & feeds' },
      'ssl': { name: 'SSL Certificate', price: 100, description: 'Security certificate' },
      'speed-optimization': { name: 'Speed Optimization', price: 400, description: 'Performance improvements' },
      'mobile-optimization': { name: 'Mobile Optimization', price: 300, description: 'Mobile-first design' }
    };

    return { ...(features[platformId] || {}), ...universalFeatures };
  };

  const technologies = {
    'php': { name: 'PHP', price: 400, description: 'Server-side scripting' },
    'python': { name: 'Python', price: 600, description: 'Backend development' },
    'nodejs': { name: 'Node.js', price: 700, description: 'JavaScript runtime' },
    'expressjs': { name: 'Express.js', price: 500, description: 'Node.js framework' },
    'mongodb': { name: 'MongoDB', price: 600, description: 'NoSQL database' },
    'mysql': { name: 'MySQL', price: 400, description: 'Relational database' },
    'jquery': { name: 'jQuery', price: 200, description: 'JavaScript library' },
    'ajax': { name: 'AJAX', price: 300, description: 'Asynchronous requests' },
    'css-advanced': { name: 'Advanced CSS', price: 400, description: 'Complex styling & animations' },
    'javascript-es6': { name: 'Modern JavaScript', price: 500, description: 'ES6+ features' }
  };

  const integrations = {
    'payment-gateway': { name: 'Payment Gateway', price: 600, description: 'Stripe, PayPal integration' },
    'email-marketing': { name: 'Email Marketing', price: 400, description: 'Mailchimp, ConvertKit' },
    'crm': { name: 'CRM Integration', price: 800, description: 'Salesforce, HubSpot' },
    'social-media-api': { name: 'Social Media APIs', price: 300, description: 'Facebook, Instagram APIs' },
    'shipping': { name: 'Shipping APIs', price: 500, description: 'FedEx, UPS integration' },
    'inventory': { name: 'Inventory Management', price: 900, description: 'Stock management systems' },
    'accounting': { name: 'Accounting Software', price: 700, description: 'QuickBooks, Xero' },
    'marketing-automation': { name: 'Marketing Automation', price: 800, description: 'Advanced marketing tools' }
  };

  const supportLevels = {
    'basic': { name: 'Basic Support', monthlyPrice: 150, description: 'Email support, monthly updates' },
    'pro': { name: 'Pro Support', monthlyPrice: 300, description: '24/7 support, weekly updates' },
    'enterprise': { name: 'Enterprise Support', monthlyPrice: 600, description: 'Dedicated support, SLA' }
  };

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    CAD: 'C$'
  };
  
  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    CAD: 1.25
  };

  const formatCurrency = (amount) => {
    const convertedAmount = amount * exchangeRates[currency];
    const symbol = currencySymbols[currency];
    return `${symbol}${convertedAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  };

  const calculateQuote = () => {
    let baseCost = 0;
    let featuresCost = 0;
    let techCost = 0;
    let integrationsCost = 0;
    let rushSurcharge = 0;
    let rushPercent = 0;
    let migrationCost = 0;

    if (form.platform) {
      baseCost = form.platform.basePrice;
      
      const complexityMultiplier = form.platform.complexity[form.complexity] || 1;
      baseCost = Math.round(baseCost * complexityMultiplier);

      const typeMultipliers = { new: 1, redesign: 0.8, migration: 1.3 };
      baseCost = Math.round(baseCost * typeMultipliers[form.projectType]);

      // Add page cost (beyond first 5 pages)
      if (form.pages > 5) {
        const extraPages = form.pages - 5;
        const pageRate = form.platform.id === 'nextjs' || form.platform.id === 'react' ? 200 : 100;
        baseCost += extraPages * pageRate;
      }

      // Migration cost
      if (form.projectType === 'migration' && form.migrationSource) {
        migrationCost = Math.round(baseCost * 0.3); // 30% of base cost for migration
      }
    }

    Object.keys(form.features).forEach(featureKey => {
      const platformFeatures = getFeaturesByPlatform(form.platform?.id);
      if (platformFeatures[featureKey]) {
        featuresCost += platformFeatures[featureKey].price;
      }
    });

    Object.keys(form.technologies).forEach(techKey => {
      if (technologies[techKey]) {
        techCost += technologies[techKey].price;
      }
    });

    Object.keys(form.integrations).forEach(integrationKey => {
      if (integrations[integrationKey]) {
        integrationsCost += integrations[integrationKey].price;
      }
    });

    if (form.timeline < 8) {
      rushPercent = (8 - form.timeline) * 5;
      rushSurcharge = Math.round((baseCost + featuresCost + techCost + integrationsCost + migrationCost) * (rushPercent / 100));
    }

    const total = baseCost + featuresCost + techCost + integrationsCost + migrationCost + rushSurcharge;
    const monthlySupport = supportLevels[form.support]?.monthlyPrice || 0;

    return {
      baseCost,
      featuresCost,
      techCost,
      integrationsCost,
      migrationCost,
      rushSurcharge,
      rushPercent,
      total,
      monthlySupport
    };
  };

  const quote = calculateQuote();

const generatePDF = async () => {
  const { jsPDF } = await import("jspdf");
  const autoTableModule = await import("jspdf-autotable");
  const autoTable = autoTableModule?.default || autoTableModule;

  const doc = new jsPDF();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Generate a professional quote number
  const quoteNumber = `PWC-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;

  // Set brand colors
  const primaryColor = [30, 64, 124];  // Dark blue
  const secondaryColor = [70, 130, 180];  // Steel blue
  const accentColor = [0, 128, 128];  // Teal
  const lightColor = [245, 245, 245];  // Light gray for backgrounds

  /** ---------- HEADER SECTION ---------- **/
  try {
    // Add logo (adjust path as needed)
    doc.addImage("/assets/images/common/pwc.png", "PNG", 15, 15, 60, 15);
  } catch (e) {
    console.warn("Logo not found, continuing without it");
    doc.setFontSize(16).setTextColor(...primaryColor);
    doc.text("PROWEBCODER", 15, 25);
  }

  // Quotation title
  doc.setFontSize(24).setTextColor(255,255,255);
  doc.text("QUOTATION", 105, 30, { align: "center" });
  
  // Quote number and date
  doc.setFontSize(10).setTextColor(100, 100, 100);
  doc.text(`Quote #: ${quoteNumber}`, 160, 20);
  doc.text(`Date: ${currentDate}`, 160, 25);
  
  // Header separator line
  doc.setDrawColor(200, 200, 200);
  doc.line(15, 40, 195, 40);

  /** ---------- COMPANY AND CLIENT DETAILS ---------- **/
  let yPos = 50;
  
  // Company details (Quote From)
  doc.setFontSize(11).setTextColor(60, 60, 60);
  doc.setFont(undefined, 'bold');
  doc.text("QUOTE FROM:", 15, yPos);
  doc.setFont(undefined, 'normal');
  doc.text("ProWebCoder", 15, yPos + 5);
  doc.text("rahul@prowebcoder.com", 15, yPos + 10);
  doc.text("+916239046167", 15, yPos + 15);

  // Client details (Quote To)
  doc.setFont(undefined, 'bold');
  doc.text("QUOTE FOR:", 105, yPos);
  doc.setFont(undefined, 'normal');
  doc.text(form.projectName || "Project Name", 105, yPos + 5);
  doc.text(form.platform?.name, 105, yPos + 10);
  yPos += 25;

  // Project summary
  doc.setFontSize(12).setTextColor(...primaryColor);
  doc.setFont(undefined, 'bold');
  doc.text("PROJECT SUMMARY", 15, yPos);
  yPos += 7;
  
  autoTable(doc, {
    startY: yPos,
    head: [['Project Details', 'Specifications']],
    body: [
      ['Project Name', form.projectName || 'Not specified'],
      ['Platform', form.platform?.name || 'Not selected'],
      ['Project Type', form.projectType.charAt(0).toUpperCase() + form.projectType.slice(1) + 
        (form.migrationSource ? ` (from ${form.migrationSource})` : '')],
      ['Complexity', form.complexity.charAt(0).toUpperCase() + form.complexity.slice(1)],
      ['Number of Pages', String(form.pages)],
      ['Timeline', `${form.timeline} weeks`],
      ['Support Level', supportLevels[form.support]?.name || 'Basic']
    ],
    theme: 'grid',
    headStyles: {
      fillColor: [...primaryColor],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    styles: {
      fontSize: 10,
      cellPadding: 3,
      lineColor: [200, 200, 200]
    },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 50 },
      1: { cellWidth: 'auto' }
    }
  });

  yPos = doc.lastAutoTable.finalY + 15;

  /** ---------- ITEMIZED QUOTATION ---------- **/
  doc.setFontSize(12).setTextColor(...primaryColor);
  doc.setFont(undefined, 'bold');
  doc.text("ITEMIZED QUOTATION", 15, yPos);
  yPos += 7;

  // Prepare items table
  const items = [];
  
  // Base development
  items.push([
    'Website Development',
    formatCurrency(quote.baseCost),
    '1',
    formatCurrency(quote.baseCost),
    `Custom ${form.platform?.name || 'website'} development with ${form.pages} pages`
  ]);

  // Features
  const platformFeatures = getFeaturesByPlatform(form.platform?.id);
  Object.keys(form.features).forEach(key => {
    if (platformFeatures[key]) {
      items.push([
        platformFeatures[key].name,
        formatCurrency(platformFeatures[key].price),
        '1',
        formatCurrency(platformFeatures[key].price),
        platformFeatures[key].description
      ]);
    }
  });

  // Technologies
  Object.keys(form.technologies).forEach(key => {
    if (technologies[key]) {
      items.push([
        technologies[key].name,
        formatCurrency(technologies[key].price),
        '1',
        formatCurrency(technologies[key].price),
        technologies[key].description
      ]);
    }
  });

  // Integrations
  Object.keys(form.integrations).forEach(key => {
    if (integrations[key]) {
      items.push([
        integrations[key].name,
        formatCurrency(integrations[key].price),
        '1',
        formatCurrency(integrations[key].price),
        integrations[key].description
      ]);
    }
  });

  // Migration if applicable
  if (quote.migrationCost > 0) {
    items.push([
      'Platform Migration',
      formatCurrency(quote.migrationCost),
      '1',
      formatCurrency(quote.migrationCost),
      `Migration from ${form.migrationSource} to ${form.platform?.name}`
    ]);
  }

  // Rush fee if applicable
  if (quote.rushSurcharge > 0) {
    items.push([
      'Expedited Delivery',
      formatCurrency(quote.rushSurcharge),
      '1',
      formatCurrency(quote.rushSurcharge),
      `${quote.rushPercent}% surcharge for ${form.timeline}-week delivery`
    ]);
  }

  // Create the items table
  autoTable(doc, {
    startY: yPos,
    head: [['Item', 'Rate', 'Qty', 'Amount', 'Description']],
    body: items,
    theme: 'grid',
    headStyles: {
      fillColor: [...primaryColor],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      halign: 'center'
    },
    bodyStyles: {
      textColor: [60, 60, 60],
      fontSize: 9
    },
    columnStyles: {
      0: { cellWidth: 50, fontStyle: 'bold' },
      1: { halign: 'right', cellWidth: 25 },
      2: { halign: 'center', cellWidth: 15 },
      3: { halign: 'right', cellWidth: 30, fontStyle: 'bold' },
      4: { cellWidth: 65, fontStyle: 'italic' }
    },
    styles: {
      cellPadding: 3,
      lineColor: [200, 200, 200]
    }
  });

  yPos = doc.lastAutoTable.finalY + 10;

  /** ---------- SUMMARY SECTION ---------- **/
  const summaryY = yPos;
  
  // Summary table
  autoTable(doc, {
    startY: summaryY,
    body: [
      ['Subtotal', formatCurrency(quote.total)],
      ['Discount', formatCurrency(0)],
      ['Tax', formatCurrency(0)],
      [{content: 'TOTAL', styles: {fontStyle: 'bold', fillColor: [...primaryColor], textColor: [255, 255, 255]}}, 
       {content: formatCurrency(quote.total), styles: {fontStyle: 'bold', fillColor: [...primaryColor], textColor: [255, 255, 255], halign: 'right'}}],
      ['Monthly Support', formatCurrency(quote.monthlySupport)]
    ],
    theme: 'grid',
    styles: {
      fontSize: 11,
      cellPadding: 5
    },
    columnStyles: {
      0: { cellWidth: 120, fontStyle: 'bold' },
      1: { halign: 'right' }
    }
  });

  /** ---------- TERMS AND CONDITIONS ---------- **/
  const pageHeight = doc.internal.pageSize.height;
  const termsY = pageHeight - 48;
  
  doc.setDrawColor(200, 200, 200);
  doc.line(15, termsY, 200, termsY);
  
  doc.setFontSize(9).setTextColor(100, 100, 100);
  doc.text("TERMS AND CONDITIONS:", 15, termsY + 5);
  doc.setFontSize(8);
  doc.text("• This quotation is valid for 30 days from the date of issue.", 15, termsY + 10);
  doc.text("• 50% payment is required to commence work with the balance due upon completion.", 15, termsY + 15);
  doc.text("• All intellectual property rights transfer upon final payment.", 15, termsY + 20);
  doc.text("• Additional features not included in this quote will be billed at standard rates.", 15, termsY + 25);
  
  // Footer with company info
  doc.setTextColor(...secondaryColor);
  doc.textWithLink("www.prowebcoder.com | rahul@prowebcoder.com | +916239046167", 
    105, pageHeight - 10, { align: "center", url: "https://prowebcoder.com" });

   

  /** ---------- SAVE THE DOCUMENT ---------- **/
  const fileName = `Quotation_${(form.projectName || 'Project').replace(/\s+/g, '_')}_${quoteNumber}.pdf`;
  doc.save(fileName);
};



  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateForm = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const toggleFeature = (featureKey) => {
    setForm(prev => ({
      ...prev,
      features: prev.features[featureKey] 
        ? { ...prev.features, [featureKey]: undefined }
        : { ...prev.features, [featureKey]: true }
    }));
  };

  const toggleTechnology = (techKey) => {
    setForm(prev => ({
      ...prev,
      technologies: prev.technologies[techKey] 
        ? { ...prev.technologies, [techKey]: undefined }
        : { ...prev.technologies, [techKey]: true }
    }));
  };

  const toggleIntegration = (integrationKey) => {
    setForm(prev => ({
      ...prev,
      integrations: prev.integrations[integrationKey] 
        ? { ...prev.integrations, [integrationKey]: undefined }
        : { ...prev.integrations, [integrationKey]: true }
    }));
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 0: // Platform Selection
        return (
          <div className="fade-in">
            <div className="section-header">
              <h2 className="section-title">Platform</h2>
              <p className="section-description">Choose your platform</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              {platforms.map(platform => (
                <div key={platform.id}>
                  <div 
                    className={`platform-card ${form.platform?.id === platform.id ? 'selected' : ''}`}
                    onClick={() => updateForm('platform', platform)}
                    data-testid={`platform-${platform.id}`}
                  >
                    <div className="platform-icon" style={{ height:'80px'}}><img src={platform.icon}  width={120}></img></div>
                    {/* <h3 className="platform-title">{platform.name}</h3> */}
                    <p className="platform-description">{platform.description}</p>
                    <div className="platform-price">{formatCurrency(platform.basePrice)}</div>
                    <div className="platform-price-label">Starting from</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 1: // Project Type
        return (
          <div className="fade-in">
            <div className="section-header">
              <h2 className="section-title">Project Type</h2>
              <p className="section-description">Project details</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '10px' }}>
              <div>
                <label className="professional-label">Project Name</label>
                <input 
                  type="text" 
                  className="professional-input"
                  placeholder="Enter your project name" 
                  value={form.projectName}
                  onChange={(e) => updateForm('projectName', e.target.value)}
                  data-testid="input-project-name"
                />
              </div>
              
              <div>
                <label className="professional-label">Number of Pages</label>
                <input 
                  type="number" 
                  className="professional-input"
                  min="1" 
                  max="100"
                  value={form.pages}
                  onChange={(e) => updateForm('pages', parseInt(e.target.value) || 5)}
                  data-testid="input-pages"
                />
              </div>

              <div>
                <label className="professional-label">Project Type</label>
                <select 
                  className="professional-select"
                  value={form.projectType}
                  onChange={(e) => updateForm('projectType', e.target.value)}
                  data-testid="select-project-type"
                >
                  <option value="new">New Development</option>
                  <option value="redesign">Redesign/Refresh</option>
                  <option value="migration">Platform Migration</option>
                </select>
              </div>
              
              <div>
                <label className="professional-label">Complexity Level</label>
                <select 
                  className="professional-select"
                  value={form.complexity}
                  onChange={(e) => updateForm('complexity', e.target.value)}
                  data-testid="select-complexity"
                >
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </select>
              </div>

              {form.projectType === 'migration' && (
                <div style={{ gridColumn: '1 / -1' }}>
                  <label className="professional-label">Migration Source</label>
                  <select 
                    className="professional-select"
                    value={form.migrationSource}
                    onChange={(e) => updateForm('migrationSource', e.target.value)}
                    data-testid="select-migration-source"
                  >
                    <option value="">Select current platform</option>
                    <option value="wordpress">WordPress</option>
                    <option value="shopify">Shopify</option>
                    <option value="magento">Magento</option>
                    <option value="squarespace">Squarespace</option>
                    <option value="wix">Wix</option>
                    <option value="webflow">Webflow</option>
                    <option value="custom">Custom Solution</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}
            </div>
            
            <div>
              <label className="professional-label">Project Description</label>
              <textarea 
                className="professional-textarea"
                placeholder="Describe your project requirements, goals, and any specific features you need"
                value={form.projectDescription}
                onChange={(e) => updateForm('projectDescription', e.target.value)}
                data-testid="textarea-project-description"
              />
            </div>
          </div>
        );

      case 2: // Features
        const platformFeatures = getFeaturesByPlatform(form.platform?.id);
        return (
          <div className="fade-in">
            <div className="section-header">
              <h2 className="section-title">Features</h2>
              <p className="section-description">Select features</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {Object.entries(platformFeatures).map(([key, feature]) => (
                <div key={key}>
                  <div className={`feature-card ${form.features[key] ? 'selected' : ''}`}>
                    <label style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}>
                      <input 
                        type="checkbox" 
                        className="feature-checkbox" 
                        checked={!!form.features[key]}
                        onChange={() => toggleFeature(key)}
                        data-testid={`checkbox-feature-${key}`}
                        style={{ marginTop: '2px' }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                          <h4 style={{ margin: 0, fontWeight: 600, color: '#1f2937' }}>{feature.name}</h4>
                          <span style={{ color: '#0b4437', fontWeight: 700, fontSize: '1.1rem' }}>+{formatCurrency(feature.price)}</span>
                        </div>
                        <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.5 }}>{feature.description}</p>
                      </div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3: // Technologies
        return (
          <div className="fade-in">
            <div className="section-header">
              <h2 className="section-title">Technologies</h2>
              <p className="section-description">Tech stack</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {Object.entries(technologies).map(([key, tech]) => (
                <div key={key}>
                  <div className={`feature-card ${form.technologies[key] ? 'selected' : ''}`}>
                    <label style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}>
                      <input 
                        type="checkbox" 
                        className="feature-checkbox" 
                        checked={!!form.technologies[key]}
                        onChange={() => toggleTechnology(key)}
                        data-testid={`checkbox-tech-${key}`}
                        style={{ marginTop: '2px' }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                          <h4 style={{ margin: 0, fontWeight: 600, color: '#1f2937' }}>{tech.name}</h4>
                          <span style={{ color: '#0b4437', fontWeight: 700, fontSize: '1.1rem' }}>+{formatCurrency(tech.price)}</span>
                        </div>
                        <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.5 }}>{tech.description}</p>
                      </div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4: // Integrations
        return (
          <div className="fade-in">
            <div className="section-header">
              <h2 className="section-title">Integrations</h2>
              <p className="section-description">Third-party services</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {Object.entries(integrations).map(([key, integration]) => (
                <div key={key}>
                  <div className={`feature-card ${form.integrations[key] ? 'selected' : ''}`}>
                    <label style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}>
                      <input 
                        type="checkbox" 
                        className="feature-checkbox" 
                        checked={!!form.integrations[key]}
                        onChange={() => toggleIntegration(key)}
                        data-testid={`checkbox-integration-${key}`}
                        style={{ marginTop: '2px' }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                          <h4 style={{ margin: 0, fontWeight: 600, color: '#1f2937' }}>{integration.name}</h4>
                          <span style={{ color: '#0b4437', fontWeight: 700, fontSize: '1.1rem' }}>+{formatCurrency(integration.price)}</span>
                        </div>
                        <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.5 }}>{integration.description}</p>
                      </div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5: // Timeline
        return (
          <div className="fade-in">
            <div className="section-header">
              <h2 className="section-title">Timeline</h2>
              <p className="section-description">Project timeline</p>
            </div>
            
            <div style={{ marginBottom: '48px' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px', color: '#1f2937' }}>Project Timeline</h4>
              <div>
                <input 
                  type="range" 
                  className="professional-range"
                  min="4" 
                  max="24" 
                  value={form.timeline}
                  onChange={(e) => updateForm('timeline', parseInt(e.target.value))}
                  data-testid="slider-timeline"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                  <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>4 weeks (Rush)</span>
                  <span style={{ fontSize: '2rem', fontWeight: 700, color: '#0b4437' }}>{form.timeline} weeks</span>
                  <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>24 weeks</span>
                </div>
                {form.timeline < 8 && (
                  <div className="alert-warning">
                    <p style={{ margin: 0 }}>Rush orders incur a {(8 - form.timeline) * 5}% surcharge due to accelerated timeline requirements.</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px', color: '#1f2937' }}>Post-Launch Support</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                {Object.entries(supportLevels).map(([key, support]) => (
                  <div key={key}>
                    <div 
                      className={`support-card ${form.support === key ? 'selected' : ''}`}
                      onClick={() => updateForm('support', key)}
                      data-testid={`support-${key}`}
                    >
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', color: '#1f2937' }}>{support.name}</h4>
                      <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '16px', lineHeight: 1.5 }}>{support.description}</p>
                      <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0b4437', marginBottom: '4px' }}>{formatCurrency(support.monthlyPrice)}</div>
                      <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>per month</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 6: // Review
        return (
          <div className="fade-in">
            <div className="section-header">
              <h2 className="section-title">Review</h2>
              <p className="section-description">Final review</p>
            </div>
            
            <div className="review-card" style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, textAlign: 'center', marginBottom: '24px', color: '#1f2937' }}>Project Summary</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0b4437', marginBottom: '16px' }}>Project Details</h4>
                  <div style={{ lineHeight: 1.8 }}>
                    <div><strong>Platform:</strong> {form.platform?.name || 'Not selected'}</div>
                    <div><strong>Type:</strong> {form.projectType} {form.migrationSource && `(from ${form.migrationSource})`}</div>
                    <div><strong>Complexity:</strong> <span style={{ textTransform: 'capitalize' }}>{form.complexity}</span></div>
                    <div><strong>Pages:</strong> {form.pages}</div>
                    <div><strong>Timeline:</strong> {form.timeline} weeks</div>
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0b4437', marginBottom: '16px' }}>Selected Add-ons</h4>
                  <div style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '12px' }}>
                    <strong>{Object.keys(form.features).length + Object.keys(form.technologies).length + Object.keys(form.integrations).length}</strong> additional items selected
                  </div>
                  <div style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                    <div>Features: {Object.keys(form.features).length}</div>
                    <div>Technologies: {Object.keys(form.technologies).length}</div>
                    <div>Integrations: {Object.keys(form.integrations).length}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="breakdown-card">
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', marginBottom: '32px' }}>Investment Breakdown</h3>
              <div>
                <div className="breakdown-item">
                  <span>Base Development ({form.pages} pages)</span>
                  <span style={{ fontWeight: 700 }}>{formatCurrency(quote.baseCost)}</span>
                </div>
                <div className="breakdown-item">
                  <span>Features & Add-ons</span>
                  <span style={{ fontWeight: 700 }}>{formatCurrency(quote.featuresCost)}</span>
                </div>
                <div className="breakdown-item">
                  <span>Technologies</span>
                  <span style={{ fontWeight: 700 }}>{formatCurrency(quote.techCost)}</span>
                </div>
                <div className="breakdown-item">
                  <span>Integrations</span>
                  <span style={{ fontWeight: 700 }}>{formatCurrency(quote.integrationsCost)}</span>
                </div>
                {quote.migrationCost > 0 && (
                  <div className="breakdown-item">
                    <span>Migration Services</span>
                    <span style={{ fontWeight: 700 }}>{formatCurrency(quote.migrationCost)}</span>
                  </div>
                )}
                {quote.rushSurcharge > 0 && (
                  <div className="breakdown-item">
                    <span>Rush Surcharge ({quote.rushPercent}%)</span>
                    <span style={{ fontWeight: 700 }}>{formatCurrency(quote.rushSurcharge)}</span>
                  </div>
                )}
              </div>
              
              <div className="breakdown-total">
                <div className="breakdown-total-amount">{formatCurrency(quote.total)}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, opacity: 0.9, marginBottom: '24px' }}>Total Investment</div>
                <div style={{ fontSize: '1rem', opacity: 0.8 }}>Monthly Support: {formatCurrency(quote.monthlySupport)}</div>
                
                <div style={{ marginTop: '32px' }}>
                  <button 
                    className="professional-button-secondary"
                    onClick={generatePDF}
                    data-testid="button-download-pdf"
                    style={{ fontSize: '1.1rem', padding: '16px 32px' }}
                  >
                    📄 Download PDF Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="professional-app container max-w-xl">
      <div className="professional-container">
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', minHeight: '100vh' }}>
          
          {/* Sidebar */}
          <div className="professional-sidebar">
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', color: '#1f2937', marginBottom: '8px' }}>Progress</h3>
              <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>Step {currentStep + 1} of {steps.length}</p>
            </div>
            
            {/* Progress Steps */}
            <div style={{ marginBottom: '10px' }}>
              {steps.map((step, index) => (
                <div key={index} className={`progress-step ${index === currentStep ? 'active' : index < currentStep ? 'completed' : 'pending'} slide-in`}>
                  <div className="progress-step-number">
                    {index < currentStep ? '✓' : index + 1}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.75rem' }}>{step.title}</div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Quote Summary */}
            <div className="quote-summary">
              <div className="quote-summary-header">Quote Summary</div>
              
              <div className="quote-summary-item">
                <span>Base Cost</span>
                <span style={{ fontWeight: 700 }}>{formatCurrency(quote.baseCost)}</span>
              </div>
              
              <div className="quote-summary-item">
                <span>Features</span>
                <span style={{ fontWeight: 700 }}>{formatCurrency(quote.featuresCost)}</span>
              </div>
              
              <div className="quote-summary-item">
                <span>Technologies</span>
                <span style={{ fontWeight: 700 }}>{formatCurrency(quote.techCost)}</span>
              </div>
              
              <div className="quote-summary-item">
                <span>Integrations</span>
                <span style={{ fontWeight: 700 }}>{formatCurrency(quote.integrationsCost)}</span>
              </div>
              
              <div className="quote-summary-total">
                <div className="quote-total-amount">{formatCurrency(quote.total)}</div>
                <div className="quote-support-amount">+ {formatCurrency(quote.monthlySupport)}/month support</div>
              </div>
            </div>
            
            {/* Currency Selector */}
            <div style={{ marginTop: '24px' }}>
              <label className="professional-label">Currency</label>
              <select 
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="professional-select"
                data-testid="select-currency"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="CAD">CAD ($)</option>
              </select>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="professional-main">
            {renderStepContent()}
            
            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '48px', paddingTop: '32px', borderTop: '2px solid #f3f4f6' }}>
              <button 
                className="professional-button-secondary"
                onClick={prevStep}
                disabled={currentStep === 0}
                data-testid="button-previous"
              >
                ← Previous
              </button>

              <button 
                className="professional-button"
                onClick={nextStep}
                disabled={currentStep === steps.length - 1 || (currentStep === 0 && !form.platform)}
                data-testid="button-next"
              >
                {currentStep === steps.length - 1 ? 'Complete Quote' : 'Next →'}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default GetQuoteCalculator;