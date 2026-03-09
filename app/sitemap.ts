import type { MetadataRoute } from "next"

const BASE_URL = "https://openscan-explorer.github.io/docs"

const routes = [
  "/introduction",
  "/values",
  "/explorer",
  "/explorer/alpha-status",
  "/explorer/how-it-works",
  "/explorer/functionalities",
  "/explorer/settings",
  "/explorer/super-user",
  "/network-connectors",
  "/metadata",
  "/hardhat-plugin",
  "/skills",
  "/tutorials",
  "/subscriptions",
  "/contact",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }))
}
