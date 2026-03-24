import type { LucideIcon } from "lucide-react"
import {
  ArrowUpRight,
  ArrowDownLeft,
  Search,
  Filter,
  Route,
  MapPin,
} from "lucide-react"

type Feature = {
  readonly name: string
  readonly command: string
  readonly description: string
  readonly icon: LucideIcon
  readonly accentColor: string
}

export const FEATURES: ReadonlyArray<Feature> = [
  {
    name: "Departures",
    command: "rail departures KGX",
    description:
      "Live departure board for any UK station. Times, platforms, operators, and delays.",
    icon: ArrowUpRight,
    accentColor: "var(--color-accent)",
  },
  {
    name: "Arrivals",
    command: "rail arrivals WAT",
    description:
      "Live arrivals with delay status, platform numbers, and origin information.",
    icon: ArrowDownLeft,
    accentColor: "var(--color-blue)",
  },
  {
    name: "Station Search",
    command: 'rail search "waterloo"',
    description:
      "Find stations by name or partial match. Returns station names and CRS codes.",
    icon: Search,
    accentColor: "var(--color-accent)",
  },
  {
    name: "Destination Filter",
    command: "rail departures LDS --to london",
    description: "Filter departures to a specific destination station.",
    icon: Filter,
    accentColor: "var(--color-blue)",
  },
  {
    name: "Calling Points",
    command: "rail departures KGX --expand",
    description:
      "See every stop along a service route. Full calling point detail.",
    icon: Route,
    accentColor: "var(--color-accent)",
  },
  {
    name: "Every Station",
    command: "rail departures SHF",
    description:
      "Covers all National Rail stations UK-wide. Over 2,500 stations.",
    icon: MapPin,
    accentColor: "var(--color-blue)",
  },
]
