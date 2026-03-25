import type { LucideIcon } from "lucide-react"
import {
  ArrowUpRight,
  ArrowDownLeft,
  Search,
  Filter,
  Binary,
  Rows3,
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
      "Live departure board for any UK station. Times, platforms, operators, and delay status.",
    icon: ArrowUpRight,
    accentColor: "var(--color-accent)",
  },
  {
    name: "Arrivals",
    command: "rail arrivals WAT",
    description:
      "Live arrivals with status, origin information, and platform detail where available.",
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
    description:
      "Filter departures to a specific destination station without scraping full boards yourself.",
    icon: Filter,
    accentColor: "var(--color-blue)",
  },
  {
    name: "Field Selection",
    command: 'rail search "waterloo" --select crs',
    description:
      "Return only the fields an agent needs. Perfect for CRS lookups and compact follow-up steps.",
    icon: Binary,
    accentColor: "var(--color-accent)",
  },
  {
    name: "Batch Search",
    command: 'printf "waterloo\\nvictoria\\n" | rail search --stdin',
    description:
      "Read newline-delimited station queries from stdin and return grouped results in input order.",
    icon: Rows3,
    accentColor: "var(--color-blue)",
  },
]
