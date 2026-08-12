export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: "https://prowebcoder.com/sitemap",
    host: "https://prowebcoder.com",
  };
}
