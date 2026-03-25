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

export const SELECT_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: 'rail search "waterloo" --select crs' },
  { type: "blank", text: "" },
  { type: "output", text: "WAT" },
  { type: "output", text: "WAE" },
  { type: "output", text: "WLO" },
  { type: "output", text: "ZWA" },
]

export const BATCH_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: 'printf "waterloo\\nvictoria\\n" | rail search --stdin' },
  { type: "blank", text: "" },
  { type: "output", text: "Query: waterloo" },
  { type: "output", text: "London Waterloo          WAT" },
  { type: "output", text: "London Waterloo East     WAE" },
  { type: "blank", text: "" },
  { type: "output", text: "Query: victoria" },
  { type: "output", text: "London Victoria          VIC" },
  { type: "output", text: "Manchester Victoria      MCV" },
]

export const JSON_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: 'printf "waterloo\\nvictoria\\n" | rail search --stdin --json | jq .data.queries[0]' },
  { type: "blank", text: "" },
  { type: "output", text: "{" },
  { type: "output", text: '  "query": "waterloo",' },
  { type: "output", text: '  "candidates": [' },
  { type: "output", text: '    {' },
  { type: "output", text: '      "name": "London Waterloo",' },
  { type: "output", text: '      "crs": "WAT"' },
  { type: "output", text: '    },' },
  { type: "output", text: '    {' },
  { type: "output", text: '      "name": "London Waterloo East",' },
  { type: "output", text: '      "crs": "WAE"' },
  { type: "output", text: '    }' },
  { type: "output", text: '  ]' },
  { type: "output", text: "}" },
]

export const AGENT_JSON_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: "prompt", text: 'printf "waterloo\\nvictoria\\n" | rail search --stdin --json' },
  { type: "blank", text: "" },
  { type: "output", text: "{" },
  { type: "output", text: '  "ok": true,' },
  { type: "output", text: '  "schemaVersion": "1",' },
  { type: "output", text: '  "command": "search",' },
  { type: "output", text: '  "requestedAt": "2026-03-25T10:00:00.000Z",' },
  { type: "output", text: '  "data": {' },
  { type: "output", text: '    "queries": [' },
  { type: "output", text: '      {' },
  { type: "output", text: '        "query": "waterloo",' },
  { type: "output", text: '        "candidates": [...]' },
  { type: "output", text: '      },' },
  { type: "output", text: '      {' },
  { type: "output", text: '        "query": "victoria",' },
  { type: "output", text: '        "candidates": [...]' },
  { type: "output", text: '      }' },
  { type: "output", text: '    ]' },
  { type: "output", text: '  }' },
  { type: "output", text: "}" },
]
