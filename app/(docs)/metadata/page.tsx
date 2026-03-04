import type { Metadata } from "next"
import { PageHeader, InfoCard } from "@/components/docs-components"
import {
  Database,
  FolderTree,
  Globe,
  Heart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Metadata",
  description:
    "Open, community-driven metadata repository for the OpenScan blockchain explorer. Tokens, networks, apps, organizations, addresses, events, and more.",
}

export default function MetadataPage() {
  return (
    <div className="prose">
      <PageHeader
        title="OpenScan Metadata"
        description="Open, community-driven metadata repository for the OpenScan blockchain explorer. Verified metadata for tokens, networks, apps, organizations, addresses, events, supporters, and donations."
      />

      <h2 id="overview">Overview</h2>
      <p>
        The <code>@openscan/metadata</code> package contains verified metadata
        displayed on the OpenScan explorer. It is published to npm and served via
        CDN, providing token info, address labels, event signatures, RPC endpoints,
        and more.
      </p>

      <div className="not-prose grid gap-4 sm:grid-cols-2 mb-8">
        <InfoCard
          title="Community-Driven"
          description="Anyone can submit metadata via pull request. Add tokens, label addresses, register events, or list your app."
          icon={<Heart className="h-5 w-5" />}
        />
        <InfoCard
          title="CDN-Delivered"
          description="Built metadata is served via jsDelivr CDN from the published npm package. No API keys, no rate limits."
          icon={<Globe className="h-5 w-5" />}
        />
        <InfoCard
          title="Schema-Validated"
          description="All submissions are validated against JSON schemas. Run npm run validate before submitting."
          icon={<Database className="h-5 w-5" />}
        />
        <InfoCard
          title="Multi-Chain"
          description="Supports EVM chains (by chain ID) and Bitcoin networks (by slug). Organized by network type."
          icon={<FolderTree className="h-5 w-5" />}
        />
      </div>
      <h2 id="resources">Resources</h2>
      <ul>
        <li>
          <strong>GitHub</strong> —{" "}
          <a href="https://github.com/openscan-explorer/explorer-metadata" target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        </li>
        <li>
          <strong>npm</strong> —{" "}
          <a href="https://www.npmjs.com/package/@openscan/metadata" target="_blank" rel="noopener noreferrer">
            @openscan/metadata
          </a>
        </li>
      </ul>
    </div>
  )
}
