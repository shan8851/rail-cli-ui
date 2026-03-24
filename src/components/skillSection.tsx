import { SectionHeading } from "@/components/sectionHeading.tsx"
import { CodeBlock } from "@/components/codeBlock.tsx"

export const SkillSection = () => (
  <section className="py-24 px-6 section-reveal">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="🦞 Agent Skill" />

      <p className="text-text-muted text-lg max-w-2xl mb-12">
        Install the skill so your agent knows every command. Works with
        OpenClaw, or grab it from the skills collection for any agent framework.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        <div className="rounded-lg border border-border bg-surface p-6">
          <h3 className="text-text font-mono font-semibold text-sm mb-3">
            ClawHub
          </h3>
          <CodeBlock code="clawhub install rail-cli" />
          <p className="text-text-dim text-xs mt-3">
            For{" "}
            <a
              href="https://github.com/openclaw/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent underline"
            >
              OpenClaw
            </a>{" "}
            users
          </p>
          <a
            href="https://clawhub.ai/shan8851/rail-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs text-text-muted hover:text-accent transition-colors"
          >
            View on ClawHub &rarr;
          </a>
        </div>

        <div className="rounded-lg border border-border bg-surface p-6">
          <h3 className="text-text font-mono font-semibold text-sm mb-3">
            Skills Collection
          </h3>
          <CodeBlock code="npx skills add shan8851/agent-skills --skill rail-cli" />
          <p className="text-text-dim text-xs mt-3">For any agent framework</p>
          <a
            href="https://skills.shan8851.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs text-text-muted hover:text-accent transition-colors"
          >
            Browse all skills &rarr;
          </a>
        </div>
      </div>
    </div>
  </section>
)
