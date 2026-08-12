import Header1 from "@/components/headers/Header1";
import Footer2 from "@/components/footers/Footer2";
import Link from "next/link";

export const metadata = {
  title: "Sitemap | Prowebcoder",
  description:
    "Browse all important pages across Prowebcoder services, migration offerings, resources, and contact routes.",
};

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Works", href: "/portfolio" },
      { label: "Pricing", href: "/pricing" },
      { label: "Quote Calculator", href: "/quote-calculator" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Get a Quote", href: "/get-a-quote" },
      { label: "Free Audit", href: "/free-audit" },
    ],
  },
  {
    title: "Shopify & Marketing",
    links: [
      { label: "Shopify Plus", href: "/shopify-plus" },
      { label: "Marketing Services", href: "/marketing-services" },
      { label: "Website Management", href: "/website-management" },
      { label: "Convert from Figma", href: "/convert-from-figma" },
      { label: "WordPress Migration", href: "/wordpress-migration" },
    ],
  },
  {
    title: "Migration Services",
    links: [
      { label: "Magento Migration", href: "/magento-migration" },
      { label: "BigCommerce Migration", href: "/bigcommerce-migration" },
      { label: "PrestaShop Migration", href: "/prestashop-migration" },
      { label: "Squarespace Migration", href: "/squarespace-migration" },
    ],
  },
  {
    title: "Company & Resources",
    links: [
      { label: "About Us", href: "/page-about" },
      { label: "Careers", href: "/page-career" },
      { label: "Reviews", href: "/reviews" },
      { label: "Blog", href: "/blog" },
      { label: "Shopify Apps", href: "/shopify-apps" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/page-terms" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
      <Header1 />
      <div id="wrapper" className="wrap">
        <section className="section panel py-6 lg:py-8">
          <div className="container max-w-1200px">
            <div className="panel text-center mb-5">
              <h1 className="h2 lg:h1 mb-2">Sitemap</h1>
              <p className="fs-6 text-gray-700 dark:text-gray-300 m-0">
                Find all major pages and service routes in one place.
              </p>
            </div>

            <div className="row child-cols-12 md:child-cols-6 lg:child-cols-3 g-3 lg:g-4">
              {sitemapSections.map((section) => (
                <div key={section.title}>
                  <div className="panel border rounded-2 p-3 h-100">
                    <h2 className="h5 mb-2">{section.title}</h2>
                    <ul className="nav-y gap-1 m-0 p-0">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link className="fs-7 text-primary" href={link.href}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer2 />
    </div>
  );
}
