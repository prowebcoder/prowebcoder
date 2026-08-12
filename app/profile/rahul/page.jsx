import ProfilePage from "@/components/profile/ProfilePage";

export const metadata = {
  title: "Rahul Dhiman | Senior Shopify Expert & Full Stack Commerce Architect",
  description:
    "12+ years experience building Shopify Plus storefronts, Hydrogen headless builds, custom apps, checkout extensions, and high-performance ecommerce solutions.",
  keywords: [
    "Rahul Dhiman",
    "Shopify Expert",
    "Shopify Plus Developer",
    "Full Stack Commerce Developer",
    "Headless Shopify Developer",
    "Hydrogen Developer",
    "Shopify App Developer",
    "Liquid Theme Developer",
    "Shopify Checkout Customization",
    "Prowebcoder",
  ],
  authors: [{ name: "Rahul Dhiman", url: "https://www.prowebcoder.com/profile/rahul" }],
  creator: "Rahul Dhiman",
  publisher: "Prowebcoder",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.prowebcoder.com/profile/rahul",
  },
  openGraph: {
    title: "Rahul Dhiman | Senior Shopify Expert & Full Stack Commerce Architect",
    description:
      "12+ years experience building Shopify Plus storefronts, Hydrogen headless builds, custom apps, checkout extensions, and high-performance ecommerce solutions.",
    url: "https://www.prowebcoder.com/profile/rahul",
    siteName: "Prowebcoder",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "https://www.prowebcoder.com/assets/rahul.webp",
        width: 1200,
        height: 630,
        alt: "Rahul Dhiman - Senior Shopify Expert Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Dhiman | Senior Shopify Expert & Full Stack Commerce Architect",
    description:
      "12+ years experience building Shopify Plus storefronts, Hydrogen headless builds, custom apps, checkout extensions, and high-performance ecommerce solutions.",
    images: ["https://www.prowebcoder.com/assets/rahul.webp"],
    creator: "@rahuldhiman",
  },
};

export default function RahulProfilePage() {
  return <ProfilePage />;
}

