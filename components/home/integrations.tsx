import { SectionHeader } from "@/components/section-header"
import { HubNetwork } from "@/components/system/hub-network"

export default function Integrations() {
  return (
    <section className="noise-bg relative overflow-hidden border-t border-border/60">
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-36">
        <SectionHeader
          index="05"
          label="INTEGRATIONS"
          title="Your tools, connected."
          lede="Every system here comes from a shipped project — connected, tested, and running in production."
        />
        <div className="mt-14">
          <HubNetwork
            centerLabel="YOUR SYSTEM"
            centerSublabel="one reliable core"
            spokes={[
              { id: "ai", label: "AI", sublabel: "OpenAI · Gemini · ElevenLabs" },
              { id: "payments", label: "PAYMENTS", sublabel: "Stripe · Checkout.com" },
              { id: "crm", label: "CRM", sublabel: "Pipedrive · SmartSuite" },
              { id: "documents", label: "DOCUMENTS", sublabel: "PandaDoc · DocuSeal · Gotenberg" },
              { id: "communication", label: "COMMUNICATION", sublabel: "Brevo · Gmail · Pushover" },
              { id: "commerce", label: "COMMERCE", sublabel: "Shopify · ServiceM8" },
              { id: "data", label: "DATA", sublabel: "Supabase · PostgreSQL" },
              { id: "scheduling", label: "SCHEDULING", sublabel: "Google Calendar" },
            ]}
            footnote="+ DOCUMENSO · MAPBOX · CLERK · GOOGLE DRIVE · VOIP.MS · REST APIS"
          />
        </div>
      </div>
    </section>
  )
}
