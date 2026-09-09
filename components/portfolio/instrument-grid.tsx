export function InstrumentGrid() {
  return (
    <svg
      aria-hidden="true"
      className="instrument-grid-depth pointer-events-none fixed z-0 text-copy"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="site-minor-grid"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 16 0 L 0 0 0 16"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.04"
            strokeWidth="1"
          />
        </pattern>
        <pattern
          id="site-major-grid"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <rect width="80" height="80" fill="url(#site-minor-grid)" />
          <path
            d="M 80 0 L 0 0 0 80"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          <path
            d="M 0 0 H 7 M 0 0 V 7"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.24"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#site-major-grid)" />
    </svg>
  );
}
