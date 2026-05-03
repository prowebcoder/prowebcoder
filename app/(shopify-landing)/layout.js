import { Inter } from "next/font/google";
import "@/styles/shopify-landing.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function ShopifyLandingLayout({ children }) {
  return (
    <div
      id="shopify-app-landing-root"
      className={`${inter.variable} ${inter.className} shopify-app-landing tw-min-h-screen`}
    >
      {children}
    </div>
  );
}
