import { ImageResponse } from "next/og";
import { designColors } from "@/lib/design-tokens";

export const dynamic = "force-static";
export const alt = "Sarfaraz Singh Wahad — Complex technology. Made operational.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: designColors.ground,
          color: designColors.text,
          padding: "64px",
          fontFamily: "sans-serif",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.16em",
            color: designColors.textMuted,
          }}
        >
          <span>SARFARAZ SINGH WAHAD</span>
          <span>MADRID · SPAIN</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 104,
              lineHeight: 0.92,
              letterSpacing: "-0.055em",
              maxWidth: 1000,
            }}
          >
            Complex technology.
          </div>
          <div
            style={{
              fontSize: 104,
              lineHeight: 0.92,
              letterSpacing: "-0.055em",
              color: designColors.signal,
            }}
          >
            Made operational.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `1px solid ${designColors.lineStrong}`,
            paddingTop: 24,
            fontSize: 20,
            color: designColors.textMuted,
          }}
        >
          <span>AI & digital transformation</span>
          <span>Engineering & mission-critical systems</span>
        </div>
      </div>
    ),
    size,
  );
}
