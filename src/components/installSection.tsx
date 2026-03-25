import { CodeBlock } from "@/components/codeBlock.tsx"
import { SectionHeading } from "@/components/sectionHeading.tsx"
import { buildInstallCommand } from "@/lib/npmPackage.ts"

type InstallSectionProps = {
  npmVersion: string | null
}

const buildInstallMethods = (npmVersion: string | null) =>
  [
    {
      label:
        npmVersion === null
          ? "npm (recommended)"
          : `npm (recommended, v${npmVersion})`,
      code: buildInstallCommand(npmVersion),
      highlighted: true,
    },
    {
      label: "From source",
      code: "git clone https://github.com/shan8851/rail-cli && cd rail-cli && npm install && npm run build && npm link",
      highlighted: false,
    },
  ] as const

export const InstallSection = ({ npmVersion }: InstallSectionProps) => {
  const installMethods = buildInstallMethods(npmVersion)

  return (
    <section className="py-24 px-6 section-reveal" id="install">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Get started"
          subtitle="Install globally via npm. Free API key for live train data."
        />

        <div className="space-y-4">
          {installMethods.map((method) => (
            <div key={method.label}>
              <p className="text-text-muted text-sm mb-2 font-medium">
                {method.label}
              </p>
              <CodeBlock code={method.code} highlighted={method.highlighted} />
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          <p className="text-text-muted text-sm font-medium">
            Get a free Darwin access token (instant signup):
          </p>
          <CodeBlock code="# Register at https://realtime.nationalrail.co.uk/OpenLDBWSRegistration" highlighted={false} />
          <CodeBlock code="export DARWIN_ACCESS_TOKEN=your_token" highlighted={false} />
          <p className="text-text-dim text-xs mt-2">
            Station search works without a token. Departures and arrivals require one.
          </p>
        </div>
      </div>
    </section>
  )
}
