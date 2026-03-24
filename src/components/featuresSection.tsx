import { SectionHeading } from "@/components/sectionHeading.tsx"
import { FeatureCard } from "@/components/featureCard.tsx"
import { FEATURES } from "@/data/features.ts"

export const FeaturesSection = () => (
  <section className="py-24 px-6 section-reveal" id="features">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        title="What you can query"
        subtitle="Three commands covering departures, arrivals, and station search across every National Rail station."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.name}
            name={feature.name}
            description={feature.description}
            icon={feature.icon}
            command={feature.command}
            accentColor={feature.accentColor}
          />
        ))}
      </div>
    </div>
  </section>
)
