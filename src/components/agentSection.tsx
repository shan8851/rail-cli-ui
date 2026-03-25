import { Cpu, Braces, Rows3 } from "lucide-react"
import { SectionHeading } from "@/components/sectionHeading.tsx"
import { TerminalWindow } from "@/components/terminalWindow.tsx"
import { AGENT_JSON_EXAMPLE } from "@/data/terminalExamples.ts"

const AGENT_FEATURES = [
  {
    icon: Braces,
    title: "Stable JSON envelope",
    description:
      "Consistent ok, schemaVersion, command, requestedAt, and data across every command",
  },
  {
    icon: Rows3,
    title: "Batch search from stdin",
    description:
      "Read newline-delimited station queries in one go and keep grouped results in input order",
  },
  {
    icon: Cpu,
    title: "Lightweight field selection",
    description:
      "Use rail search --select for CRS-only or name-only lookups before the next agent step",
  },
] as const

export const AgentSection = () => (
  <section className="py-24 px-6 section-reveal">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Built for AI agents" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            Every command supports a stable JSON envelope, and 
            <code className="text-accent font-mono text-sm px-1.5 py-0.5 rounded bg-accent-glow">
              rail search
            </code>{" "}
            adds two especially useful agent affordances: 
            <code className="text-accent font-mono text-sm px-1.5 py-0.5 rounded bg-accent-glow">
              --stdin
            </code>{" "}
            for newline-delimited batch queries and 
            <code className="text-accent font-mono text-sm px-1.5 py-0.5 rounded bg-accent-glow">
              --select
            </code>{" "}
            for small projections like CRS-only lookups.
          </p>

          <div className="space-y-4">
            {AGENT_FEATURES.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-accent-glow text-accent shrink-0">
                  <feature.icon size={16} />
                </div>
                <div>
                  <h4 className="text-text font-medium text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-text-muted text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <TerminalWindow lines={AGENT_JSON_EXAMPLE} />
        </div>
      </div>
    </div>
  </section>
)
