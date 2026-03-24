import { SectionHeading } from "@/components/sectionHeading.tsx"
import { CodeBlock } from "@/components/codeBlock.tsx"

const INSTALL_METHODS = [
  {
    label: "npm (recommended)",
    code: "npm install -g @shan8851/rail-cli",
    highlighted: true,
  },
  {
    label: "From source",
    code: "git clone https://github.com/shan8851/rail-cli && cd rail-cli && npm install && npm run build && npm link",
    highlighted: false,
  },
] as const

export const InstallSection = () => (
  <section className="py-24 px-6 section-reveal" id="install">
    <div className="max-w-3xl mx-auto">
      <SectionHeading
        title="Get started"
        subtitle="Install globally via npm. No API key needed."
      />

      <div className="space-y-4">
        {INSTALL_METHODS.map((method) => (
          <div key={method.label}>
            <p className="text-text-muted text-sm mb-2 font-medium">
              {method.label}
            </p>
            <CodeBlock code={method.code} highlighted={method.highlighted} />
          </div>
        ))}
      </div>

      <p className="text-text-dim text-sm mt-6">
        No API key required — uses the public Huxley2 instance backed by
        National Rail Darwin data.
      </p>
    </div>
  </section>
)
