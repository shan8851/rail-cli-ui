export type TerminalLine = {
  readonly type: "prompt" | "output" | "blank" | "header"
  readonly text: string
  readonly color?: string
}

export const HERO_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: "rail departures KGX" },
  { type: "blank", text: "" },
  { type: "header", text: "London Kings Cross" },
  { type: "blank", text: "" },
  { type: "output", text: "13:00  Edinburgh        LNER             Plat 1   \u2705 On time", color: "#00A651" },
  { type: "output", text: "13:03  Aberdeen         LNER             Plat 5   \u26A0\uFE0F Exp 13:18", color: "#F47738" },
  { type: "output", text: "13:10  Leeds            LNER             Plat 8   \u2705 On time", color: "#00A651" },
  { type: "output", text: "13:21  Sunderland       Grand Central    Plat 3   \uD83D\uDD34 Cancelled", color: "#E21836" },
  { type: "output", text: "13:30  Cambridge        Great Northern   Plat 9   \u2705 On time", color: "#00A651" },
]

export const SEARCH_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: 'rail search "waterloo"' },
  { type: "blank", text: "" },
  { type: "output", text: "London Waterloo          WAT" },
  { type: "output", text: "London Waterloo East     WAE" },
  { type: "output", text: "Waterloo (Merseyside)    WLO" },
]

export const FILTERED_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: "rail departures LDS --to london" },
  { type: "blank", text: "" },
  { type: "header", text: "Leeds" },
  { type: "output", text: "To London Kings Cross (KGX)" },
  { type: "blank", text: "" },
  { type: "output", text: "14:00  London Kings Cross  LNER  Plat 11  \u2705 On time", color: "#00A651" },
  { type: "output", text: "14:30  London Kings Cross  LNER  Plat 11  \u26A0\uFE0F Exp 14:38", color: "#F47738" },
  { type: "output", text: "15:00  London Kings Cross  LNER  Plat 11  \u2705 On time", color: "#00A651" },
]

export const JSON_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: "rail departures KGX --json | jq .data.services[0]" },
  { type: "blank", text: "" },
  { type: "output", text: "{" },
  { type: "output", text: '  "scheduledTime": "13:00",' },
  { type: "output", text: '  "counterpartName": "Edinburgh",' },
  { type: "output", text: '  "operatorName": "LNER",' },
  { type: "output", text: '  "platform": "1",' },
  { type: "output", text: '  "status": "on-time",' },
  { type: "output", text: '  "statusLabel": "On time"' },
  { type: "output", text: "}" },
]

export const AGENT_JSON_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: "rail departures KGX --json" },
  { type: "blank", text: "" },
  { type: "output", text: "{" },
  { type: "output", text: '  "ok": true,' },
  { type: "output", text: '  "schemaVersion": "1",' },
  { type: "output", text: '  "command": "departures",' },
  { type: "output", text: '  "requestedAt": "2026-03-24T10:00:00.000Z",' },
  { type: "output", text: '  "data": {' },
  { type: "output", text: '    "station": { "crs": "KGX", "name": "London Kings Cross" },' },
  { type: "output", text: '    "services": [...]' },
  { type: "output", text: "  }" },
  { type: "output", text: "}" },
]
