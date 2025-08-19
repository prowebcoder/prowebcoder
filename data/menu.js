export const menuItems = [
  // Services menu item
  {
    id: 1,
    label: "Services",
    subItems: [
      // Features section
      {
        label: "Discover our Services",
        subItems: [
          {
            href: "/services#web-development",
            label: "Web Development"
          },
          {
            href: "/services#ecommerce",
            label: "E-commerce Solutions"
          },
          {
            href: "/services#mobile-apps",
            label: "Mobile Applications"
          },
          {
            href: "/services#ui-ux",
            label: "UI/UX Design"
          },
          {
            href: "/services#seo",
            label: "SEO Optimization"
          },
          {
            href: "/services#maintenance",
            label: "Maintenance & Support"
          }
        ]
      },
      // Shopify Services Plus section
      {
        label: "Shopify Services Plus",
        subItems: [
          {
            href: "/service-form",
            label: "Shopify Store Setup"
          },
          {
            href: "/service-form",
            label: "Theme Customization"
          },
          {
            href: "/service-form",
            label: "App Development"
          },
          {
            href: "/service-form",
            label: "Migration Services"
          },
          {
            href: "/service-form",
            label: "SEO for Shopify"
          },
          {
            href: "/service-form",
            label: "Ongoing Maintenance"
          }
        ]
      },
      // Get Started section
      {
        label: "Get started is Easy!",
        subItems: [
          {
            href: "/sign-up",
            label: "Create Account"
          },
          {
            href: "/sign-in",
            label: "Sign In"
          },
          {
            href: "/demo",
            label: "Request Demo"
          },
          {
            href: "/contact-us",
            label: "Contact Sales"
          }
        ]
      }
    ]
  },
  
  // Our Products menu item
  {
    id: 2,
    label: "Our Products",
    subItems: [
      {
        href: "/products#project-management",
        label: "Project Management"
      },
      {
        href: "/products#crm",
        label: "CRM Solutions"
      },
      {
        href: "/products#analytics",
        label: "Analytics Dashboard"
      },
      {
        href: "/products#marketing",
        label: "Marketing Automation"
      },
      {
        href: "/products#support",
        label: "Support System"
      },
      {
        href: "/contact-us",
        label: "Custom App Development",
        className: "font-bold"
      }
    ]
  },
  
  // Shopify Plus menu item
  {
    id: 3,
    label: "Shopify Plus",
    subItems: [
      {
        href: "/shopify-plus#build",
        label: "Build"
      },
      {
        href: "/shopify-plus#manage",
        label: "Manage"
      },
      {
        href: "/shopify-plus#speed-optimization",
        label: "Speed Optimization"
      },
      {
        href: "/shopify-plus#custom-app-development",
        label: "Custom App Development"
      },
      {
        href: "/shopify-plus#mobile-app-development",
        label: "Mobile App development"
      },
      {
        href: "/shopify-plus#customer-support-services",
        label: "Customer Support Services"
      },
      {
        href: "/contact-us",
        label: "Share your requirements",
        className: "btn-primary"
      }
    ]
  },
  
  // Direct link items
  {
    id: 4,
    href: "/quote-calculator",
    label: "Quote Calculator"
  },
  {
    id: 5,
    href: "/pricing",
    label: "Pricing"
  }
];

export const pagesData = [
  {
    id: 1,
    header: "Main Pages",
    items: [
      {
        href: "/",
        label: "Home 01",
      },
      {
        href: "/home-2",
        label: "Home 02",
      },
      {
        href: "/home-3",
        label: "Home 03",
      },
      {
        href: "/home-4",
        label: "Home 04",
        badge: {
          text: "New",
          className: "text-primary",
        },
      },
      {
        href: "/home-5",
        label: "Home 05",
        badge: {
          text: "New",
          className: "text-primary",
        },
      },
      {
        href: "/home-6",
        label: "Home 06",
        badge: {
          text: "New",
          className: "text-primary",
        },
      },
      {
        href: "/rtl",
        label: "Home RTL",
        badge: {
          text: "New",
          className: "text-primary",
        },
      },
      {
        href: "#",
        label: "Home 07",
        badge: {
          text: "Soon",
          className: "text-gray-400",
        },
      },
      {
        href: "#",
        label: "Home 08",
        badge: {
          text: "Soon",
          className: "text-gray-400",
        },
      },
      {
        href: "#",
        label: "Home 09",
        badge: {
          text: "Soon",
          className: "text-gray-400",
        },
      },
      {
        href: "#",
        label: "Home 10",
        badge: {
          text: "Soon",
          className: "text-gray-400",
        },
      },
    ],
  },
  {
    id: 2,
    header: "Inner Pages",
    items: [
      {
        href: "/page-features",
        label: "Features",
      },
      {
        href: "/page-pricing",
        label: "Pricing",
      },
      {
        href: "/page-integrations",
        label: "Integrations",
      },
      {
        href: "/page-about",
        label: "About",
      },
      {
        href: "/page-career",
        label: "Career",
      },
      {
        href: "/page-team",
        label: "Team",
        badge: {
          text: "New",
          className: "text-primary",
        },
      },
      {
        href: "/page-career-detail/2",
        label: "Job details",
      },
      {
        href: "/page-contact",
        label: "Contact",
      },
      {
        href: "/page-contact-2",
        label: "Contact v2",
      },
      {
        href: "#",
        label: "Services",
        badge: {
          text: "Soon",
          className: "text-gray-400",
        },
      },
    ],
  },
  {
    id: 3,
    header: "CMS Pages",
    items: [
      {
        href: "/blog",
        label: "Modern",
      },
      {
        href: "/blog-classic",
        label: "Classic",
      },
      {
        href: "/blog-2cols",
        label: "Grid 2 cols",
      },
      {
        href: "/blog-3cols",
        label: "Grid 3 cols",
      },
      {
        href: "/blog-4cols",
        label: "Grid 4 cols",
      },
      {
        href: "/blog-category/Stratgy",
        label: "Category",
      },
      {
        href: "/blog-author/Amir Khan",
        label: "Author",
      },
      {
        href: "/blog-details/1",
        label: "Blog single",
      },
      {
        href: "/blog-details-2/2",
        label: "Blog single v2",
      },
      {
        href: "/blog-details-3/2",
        label: "Blog single v3",
      },
    ],
  },
  {
    id: 4,
    header: "Shop Pages",
    items: [
      {
        href: "/shop",
        label: "Grid 4 cols",
      },
      {
        href: "/shop-3",
        label: "Grid 3 cols",
      },
      {
        href: "/shop-2",
        label: "Grid 2 cols",
      },
      {
        href: "/shop-sidebar",
        label: "Grid with sidebar",
        badge: {
          text: "New",
          className: "text-primary",
        },
      },
      {
        href: "/shop-product-detail/2",
        label: "Product detail",
      },
      {
        href: "/shop-product-detail-2/2",
        label: "Product detail v2",
      },
      {
        href: "/shop-cart",
        label: "Cart",
      },
      {
        href: "/shop-cart-2",
        label: "Cart v2",
      },
      {
        href: "/shop-checkout",
        label: "Checkout",
      },
      {
        href: "/shop-checkout-2",
        label: "Checkout v2",
      },
      {
        href: "/shop-order",
        label: "Order confirmation",
      },
    ],
  },
  {
    id: 5,
    header: "Other pages",
    items: [
      {
        href: "/sign-in",
        label: "Sign in",
      },
      {
        href: "/sign-in-2",
        label: "Sign in v2",
      },
      {
        href: "/sign-up",
        label: "Sign up",
      },
      {
        href: "/sign-up-2",
        label: "Sign up v2",
      },
      {
        href: "/reset-password",
        label: "Reset password",
      },
      {
        href: "/reset-password-2",
        label: "Reset password v2",
      },
      {
        href: "/page-not-found",
        label: "404",
      },
      {
        href: "/coming-soon",
        label: "Coming Soon",
      },
      {
        href: "/page-terms",
        label: "Terms of service",
      },
      {
        href: "/page-privacy",
        label: "Privacy policy",
      },
    ],
  },
];

export const navItems = [
  { href: "#overview", label: "Overview", active: true },
  { href: "#features", label: "Features" },
  { href: "#how_it_works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#clients_feedback", label: "Reviews" },
  { href: "#insights", label: "Insights" },
];

export const mainPages = [
  {
    href: "/",
    alt: "Home - 01",
    src: "/assets/images/demos/screenshots/index.jpg",
    title: "Home 1",
  },
  {
    href: "/home-2",
    alt: "Home - 02",
    src: "/assets/images/demos/screenshots/index-2.jpg",
    title: "Home 2",
  },
  {
    href: "/home-3",
    alt: "Home - 03",
    src: "/assets/images/demos/screenshots/index-3.jpg",
    title: "Home 3",
  },
  {
    href: "/home-4",
    alt: "Home - 04",
    src: "/assets/images/demos/screenshots/index-4.jpg",
    title: "Home 4",
  },
  {
    href: "/page-features",
    alt: "Features",
    src: "/assets/images/demos/screenshots/page-features.jpg",
    title: "Features",
  },
  {
    href: "/page-pricing",
    alt: "Pricing",
    src: "/assets/images/demos/screenshots/page-pricing.jpg",
    title: "Pricing",
  },
  {
    href: "/page-integrations",
    alt: "Integrations",
    src: "/assets/images/demos/screenshots/page-integrations.jpg",
    title: "Integrations",
  },
  {
    href: "/page-about",
    alt: "About",
    src: "/assets/images/demos/screenshots/page-about.jpg",
    title: "About",
  },
];

export const othermenuItems = [
  { href: "/page-career", icon: "unicon-wikis", title: "Career" },
  { href: "/page-career-detail/2", icon: "unicon-wikis", title: "Job details" },
  { href: "/page-contact", icon: "unicon-wikis", title: "Contact" },
  { href: "/page-contact-2", icon: "unicon-wikis", title: "Contact v2" },
  { href: "/blog", icon: "unicon-course", title: "Blog" },
  { href: "/blog-details/1", icon: "unicon-course", title: "Blog details" },
  {
    href: "/blog-details-2/2",
    icon: "unicon-course",
    title: "Blog details v2",
  },
  {
    href: "/blog-details-3/2",
    icon: "unicon-course",
    title: "Blog details v3",
  },
  { href: "/home-2", icon: "unicon-unlocked", title: "Sign up" },
  { href: "/home-3", icon: "unicon-unlocked", title: "Sign in" },
  { href: "/home-4", icon: "unicon-unlocked", title: "Reset Password" },
  { href: "/shop", icon: "unicon-shopping-cart", title: "Shop" },
  { href: "/shop-cart", icon: "unicon-shopping-cart", title: "Cart" },
  { href: "/shop-checkout", icon: "unicon-shopping-cart", title: "Checkout" },
  {
    href: "/shop-product-detail/2",
    icon: "unicon-shopping-cart",
    title: "Product detail",
  },
  {
    href: "/shop-order",
    icon: "unicon-shopping-cart",
    title: "Order confirmation",
  },
];
export const icons = [
  { href: "#", iconClass: "unicon-logo-medium icon-2" },
  { href: "#", iconClass: "unicon-logo-x-filled icon-2" },
  { href: "#", iconClass: "unicon-logo-instagram icon-2" },
  { href: "#", iconClass: "unicon-logo-pinterest icon-2" },
];
export const features = [
  {
    id: 1,
    iconClass: "unicon-globe",
    title: "Web Development",
    href: "#web-development",
    description: "We create personalized, responsive websites tailored to your needs",
  },
  {
    id: 2,
    iconClass: "unicon-store",
    title: "E-commerce Solutions",
     href: "#ecommerce-solutions",
    description: "Our E-commerce Solutions transform any stores into powerful sales engines.",
  },
  {
    id: 3,
    iconClass: "unicon-shopping-cart",
    title: "Shopify Theme Development",
     href: "#shopify-theme-development",
    description: "Shopify Theme Development service specializes in crafting unique and captivating themes for Shopify stores",
  },
  {
    id: 4,
    iconClass: "unicon-magic-wand-filled",
    title: "Shopify App Development",
     href: "#shopify-app-development",
    description: "Our Shopify App Development service focuses on crafting customized solutions to elevate functionality",
  },
  {
    id: 5,
    iconClass: "unicon-wikis",
    title: "Full Stack Development",
     href: "#full-stack-development",
    description: "We deliver end-to-end development, building seamless mobile apps, intuitive frontend interfaces, and high-performance backend systems ",  
  },
  {
    id: 6,
    iconClass: "unicon-chat",
    title: "Consultation and Support",
     href: "#consultation-and-support",
    description: "Our Consultation and Support service provides expert advice, maintenance, and ongoing support ",
  },
];
export const homeLinks = [
  {
    id: 1,
    href: "/",
    imgAlt: "Home - 01",
    imgSrc: "/assets/images/demos/screenshots/index.jpg",
    label: "SaaS",
  },
  {
    id: 2,
    href: "/home-2",
    imgAlt: "Home - 02",
    imgSrc: "/assets/images/demos/screenshots/index-2.jpg",
    label: "Startup",
  },
  {
    id: 3,
    href: "/home-3",
    imgAlt: "Home - 03",
    imgSrc: "/assets/images/demos/screenshots/index-3.jpg",
    label: "Software",
  },
  {
    id: 4,
    href: "/home-4",
    imgAlt: "Home - 04",
    imgSrc: "/assets/images/demos/screenshots/index-4.jpg",
    label: "Mobile Apps",
  },
  {
    id: 5,
    href: "/home-5",
    imgAlt: "Home - 05",
    imgSrc: "/assets/images/demos/screenshots/index-5.jpg",
    label: "Digital Agency",
  },
];
export const links = [
  {
    id: 1,
    href: "/page-career",
    label: "Hire an Expert",
    isInternal: true,
  },
  {
    id: 2,
    href: "#",
    label: "Customer stories",
    isInternal: false,
  },
  // {
  //   id: 3,
  //   href: "#",
  //   label: "Ressources",
  //   isInternal: false,
  // },
  // {
  //   id: 4,
  //   href: "/blog",
  //   label: "Blog",
  //   isInternal: true,
  // },
  // {
  //   id: 5,
  //   href: "/page-career",
  //   label: "Career",
  //   isInternal: true,
  // },
  // {
  //   id: 6,
  //   href: "/page-team",
  //   label: "Team",
  //   isInternal: true,
  // },
  // {
  //   id: 7,
  //   href: "/page-contact",
  //   label: "Get in touch",
  //   isInternal: true,
  // },
];
