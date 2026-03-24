import type { LucideIcon } from "lucide-react"

type FeatureCardProps = {
  readonly name: string
  readonly description: string
  readonly icon: LucideIcon
  readonly command: string
  readonly accentColor: string
}

export const FeatureCard = ({
  name,
  description,
  icon: Icon,
  command,
  accentColor,
}: FeatureCardProps) => (
  <div className="group p-5 rounded-lg border border-border bg-surface hover:border-border-bright hover:bg-surface-hover transition-all duration-200 hover:-translate-y-0.5">
    <div className="flex items-start gap-3 mb-3">
      <div
        className="p-2 rounded-md shrink-0"
        style={{
          backgroundColor: `color-mix(in oklab, ${accentColor} 12%, transparent)`,
          color: accentColor,
        }}
      >
        <Icon size={18} />
      </div>
      <div>
        <h3 className="text-text font-medium text-sm">{name}</h3>
        <p className="text-text-muted text-sm mt-1">{description}</p>
      </div>
    </div>
    <code className="text-xs font-mono text-text-dim group-hover:text-accent transition-colors duration-200">
      {command}
    </code>
  </div>
)
