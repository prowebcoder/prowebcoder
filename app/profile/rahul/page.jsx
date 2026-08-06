import ProfilePage from "@/components/profile/ProfilePage";

export const metadata = {
  title: "Rahul Dhiman | Senior Shopify Expert & Full Stack Developer",
  description:
    "Rahul Dhiman helps Shopify brands ship faster storefronts, custom apps, checkout experiences, and high-converting ecommerce solutions.",
  alternates: {
    canonical: "https://www.prowebcoder.com/profile/rahul",
  },
  openGraph: {
    title: "Rahul Dhiman | Senior Shopify Expert & Full Stack Developer",
    description:
      "Premium portfolio for Rahul Dhiman, a senior Shopify expert and full stack developer focused on scalable ecommerce experiences.",
    url: "https://www.prowebcoder.com/profile/rahul",
    siteName: "Prowebcoder",
    type: "profile",
    images: [
      {
        url: "https://www.prowebcoder.com/assets/rahul-avatar.svg",
        width: 1200,
        height: 630,
        alt: "Rahul Dhiman profile preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Dhiman | Senior Shopify Expert & Full Stack Developer",
    description:
      "Premium portfolio for Rahul Dhiman, a senior Shopify expert and full stack developer focused on scalable ecommerce experiences.",
    images: ["https://www.prowebcoder.com/assets/rahul-avatar.svg"],
  },
};

export default function RahulProfilePage() {
  return <ProfilePage />;
}
