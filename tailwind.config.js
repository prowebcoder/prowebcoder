/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  prefix: "tw-",
  content: [
    "./app/(shopify-landing)/**/*.{js,jsx}",
    "./app/profile/**/*.{js,jsx}",
    "./components/shopify-landing/**/*.{js,jsx}",
    "./components/profile/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px -12px rgba(15, 23, 42, 0.18)",
        card: "0 4px 24px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
