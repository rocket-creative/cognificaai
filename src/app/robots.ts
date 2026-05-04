import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // AI crawlers — explicit allow so generative engines can ground in
      // canonical product copy. Disallow API surfaces.
      { userAgent: "GPTBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "ChatGPT-User", allow: "/", disallow: ["/api/"] },
      { userAgent: "ClaudeBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "anthropic-ai", allow: "/", disallow: ["/api/"] },
      { userAgent: "Google-Extended", allow: "/", disallow: ["/api/"] },
      { userAgent: "PerplexityBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Perplexity-User", allow: "/", disallow: ["/api/"] },
      { userAgent: "Applebot-Extended", allow: "/", disallow: ["/api/"] },
      { userAgent: "Bytespider", allow: "/", disallow: ["/api/"] },
      { userAgent: "CCBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Meta-ExternalAgent", allow: "/", disallow: ["/api/"] },
      { userAgent: "DuckAssistBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Diffbot", allow: "/", disallow: ["/api/"] },
      { userAgent: "MistralAI-User", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: "https://www.cogai.app/sitemap.xml",
    host: "https://www.cogai.app",
  };
}
