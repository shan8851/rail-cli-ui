import { CopyButton } from "@/components/copyButton.tsx"

type CodeBlockProps = {
  readonly code: string
  readonly className?: string
  readonly highlighted?: boolean
}

export const CodeBlock = ({
  code,
  className = "",
  highlighted = false,
}: CodeBlockProps) => (
  <div
    className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg border font-mono text-sm ${
      highlighted
        ? "border-border-bright bg-surface-hover shadow-[0_0_20px_var(--color-accent-glow)]"
        : "border-border bg-surface"
    } ${className}`}
  >
    <code className="text-terminal-output overflow-x-auto whitespace-nowrap">
      {code}
    </code>
    <CopyButton text={code} />
  </div>
)
