import "@/styles/shopify-landing.css";

export default function ProfileLayout({ children }) {
  return (
    <div className="shopify-app-landing tw-min-h-screen tw-bg-slate-50 tw-text-slate-900">
      {children}
    </div>
  );
}
