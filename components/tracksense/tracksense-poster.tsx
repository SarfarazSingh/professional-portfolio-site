const nodes = ["West", "Approach", "Junction", "Span", "East"];

export function TrackSensePoster() {
  return (
    <div
      className="border border-line bg-ground"
      data-tracksense-poster
    >
      <div className="instrument-readout flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3">
        <span>Static demo summary</span>
        <span className="text-signal">Shown before the interactive demo loads</span>
      </div>

      <svg
        viewBox="0 0 1200 620"
        className="block h-auto w-full text-copy"
        role="img"
        aria-labelledby="tracksense-poster-title tracksense-poster-description"
      >
        <title id="tracksense-poster-title">
          TrackSense rail-monitoring demo
        </title>
        <desc id="tracksense-poster-description">
          Five sensors watch a section of track. Vibration, sound, and heat begin
          to change at one location. A local model flags the change for an
          operator to review.
        </desc>

        <g fill="none" stroke="currentColor" strokeOpacity="0.12">
          {Array.from({ length: 16 }, (_, index) => (
            <path key={`v-${index}`} d={`M ${index * 80} 0 V 620`} />
          ))}
          {Array.from({ length: 9 }, (_, index) => (
            <path key={`h-${index}`} d={`M 0 ${index * 80} H 1200`} />
          ))}
        </g>

        <g fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M 70 175 H 1130" />
          <path d="M 70 205 H 1130" />
        </g>
        <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="8">
          {Array.from({ length: 24 }, (_, index) => {
            const x = 85 + index * 45;
            return <path key={`sleeper-${index}`} d={`M ${x} 157 V 223`} />;
          })}
        </g>

        {nodes.map((node, index) => {
          const x = 125 + index * 235;
          const active = index === 3;
          return (
            <g key={node} transform={`translate(${x} 0)`}>
              <path
                d="M 0 139 V 175"
                stroke="currentColor"
                strokeOpacity="0.5"
              />
              <rect
                x="-15"
                y="124"
                width="30"
                height="30"
                fill={active ? "currentColor" : "none"}
                stroke="currentColor"
                className={active ? "text-signal" : undefined}
              />
              <text
                x="0"
                y="102"
                fill="currentColor"
                textAnchor="middle"
                fontFamily="var(--font-readout)"
                fontSize="13"
              >
                {node}
              </text>
              <rect
                x="-82"
                y="270"
                width="164"
                height="132"
                fill="var(--surface)"
                stroke="currentColor"
                strokeOpacity="0.24"
              />
              <path
                d={
                  active
                    ? "M -72 307 L -57 302 L -42 310 L -27 291 L -12 299 L 3 278 L 18 304 L 33 264 L 48 296 L 72 254"
                    : "M -72 307 L -57 302 L -42 309 L -27 300 L -12 306 L 3 301 L 18 308 L 33 299 L 48 304 L 72 300"
                }
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={active ? "text-signal" : undefined}
              />
              <path
                d={
                  active
                    ? "M -72 340 L -57 337 L -42 341 L -27 333 L -12 339 L 3 322 L 18 336 L 33 313 L 48 331 L 72 306"
                    : "M -72 340 L -57 337 L -42 341 L -27 338 L -12 342 L 3 339 L 18 343 L 33 337 L 48 340 L 72 338"
                }
                fill="none"
                stroke="currentColor"
                strokeOpacity={active ? "1" : "0.55"}
                className={active ? "text-signal" : undefined}
              />
              <path
                d={
                  active
                    ? "M -72 375 L -57 374 L -42 373 L -27 371 L -12 369 L 3 366 L 18 362 L 33 358 L 48 352 L 72 346"
                    : "M -72 375 L -57 374 L -42 376 L -27 373 L -12 375 L 3 374 L 18 376 L 33 374 L 48 375 L 72 374"
                }
                fill="none"
                stroke="currentColor"
                strokeOpacity={active ? "1" : "0.35"}
                className={active ? "text-signal" : undefined}
              />
            </g>
          );
        })}

        <g transform="translate(70 470)">
          <rect
            width="1060"
            height="96"
            fill="var(--surface)"
            stroke="currentColor"
            strokeOpacity="0.24"
          />
          <text
            x="24"
            y="30"
            fill="var(--signal)"
            fontFamily="var(--font-readout)"
            fontSize="13"
          >
            LOCAL SENSOR / MODEL RUNNING
          </text>
          <text x="24" y="63" fill="currentColor" fontSize="20">
            Threshold crossed → operator review needed
          </text>
          <text
            x="1035"
            y="55"
            fill="var(--signal)"
            textAnchor="end"
            fontFamily="var(--font-readout)"
            fontSize="16"
          >
            REVIEW REQUIRED
          </text>
        </g>
      </svg>

      <p className="border-t border-line px-5 py-4 leading-7 text-copy-muted">
        I made this with generated sample data to explain the idea. It is not
        field data and it does not claim production performance.
      </p>
    </div>
  );
}
