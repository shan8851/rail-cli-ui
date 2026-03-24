import { SectionHeading } from "@/components/sectionHeading.tsx"
import { TerminalWindow } from "@/components/terminalWindow.tsx"
import {
  SEARCH_EXAMPLE,
  FILTERED_EXAMPLE,
  JSON_EXAMPLE,
} from "@/data/terminalExamples.ts"

const EXAMPLES = [
  { title: "Search stations", lines: SEARCH_EXAMPLE },
  { title: "Filter by destination", lines: FILTERED_EXAMPLE },
  { title: "JSON output for agents", lines: JSON_EXAMPLE },
] as const

export const ExamplesSection = () => (
  <section className="py-24 px-6 section-reveal" id="examples">
    <div className="max-w-4xl mx-auto">
      <SectionHeading
        title="See it in action"
        subtitle="Real output from the CLI. What you see is what you get."
      />

      <div className="space-y-8">
        {EXAMPLES.map((example) => (
          <div key={example.title}>
            <p className="text-text-muted text-sm font-medium mb-3">
              {example.title}
            </p>
            <TerminalWindow lines={example.lines} />
          </div>
        ))}
      </div>
    </div>
  </section>
)
