import { Github, Package } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { CopyButton } from "@/components/copyButton.tsx"
import { TerminalWindow } from "@/components/terminalWindow.tsx"
import { TrackBackground } from "@/components/trackBackground.tsx"
import { HERO_EXAMPLE } from "@/data/terminalExamples.ts"
import { useTypingAnimation } from "@/hooks/useTypingAnimation.ts"
import { buildInstallCommand } from "@/lib/npmPackage.ts"

type HeroSectionProps = {
  npmVersion: string | null
}

const AnimatedTerminal = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const animatedLines = useTypingAnimation({
    lines: HERO_EXAMPLE,
    enabled: isVisible,
    typingSpeed: 45,
    lineDelay: 80,
    startDelay: 800,
  })

  return (
    <div ref={ref}>
      <TerminalWindow
        title="rail -- zsh"
        lines={animatedLines}
        className="shadow-[0_0_60px_var(--color-blue-glow)]"
      />
    </div>
  )
}

export const HeroSection = ({ npmVersion }: HeroSectionProps) => {
  const installCommand = buildInstallCommand(npmVersion)

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <TrackBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="hero-stagger">
          <div>
            {npmVersion && (
              <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-border-bright text-accent bg-accent-glow mb-8">
                v{npmVersion} -- now on npm
              </span>
            )}
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-text leading-[1.05] mb-6">
            UK trains
            <br />
            <span className="text-accent">in your terminal</span>
          </h1>

          <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-lg">
            Live departures, arrivals, CRS search, and batch-friendly station lookups for agents.
            Search works without a token. Live boards use a free Darwin token.
          </p>

          <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border-bright bg-terminal-bg font-mono text-sm mb-8 max-w-md">
            <span className="text-terminal-prompt select-none">$</span>
            <code className="text-terminal-output flex-1">{installCommand}</code>
            <CopyButton text={installCommand} />
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/shan8851/rail-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:brightness-110 transition-all duration-200"
            >
              <Github size={16} />
              View on GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/@shan8851/rail-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-bright text-text-muted font-medium text-sm hover:border-accent hover:text-accent transition-all duration-200"
            >
              <Package size={16} />
              npm
            </a>
          </div>
        </div>

        <div className="hero-stagger" style={{ animationDelay: "300ms" }}>
          <AnimatedTerminal />
        </div>
      </div>
    </section>
  )
}
