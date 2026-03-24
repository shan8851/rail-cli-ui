export const TrackBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="signal-lines"
          x="0"
          y="0"
          width="200"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="24"
            x2="200"
            y2="24"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.035"
          />
          <line
            x1="0"
            y1="48"
            x2="200"
            y2="48"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.025"
          />
          <line
            x1="100"
            y1="20"
            x2="100"
            y2="28"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.02"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#signal-lines)"
        className="text-text"
      />
    </svg>

    <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,var(--color-blue-glow)_0%,transparent_70%)] opacity-70" />
    <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow)_0%,transparent_70%)] opacity-40" />
  </div>
)
