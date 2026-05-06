/* |UXUIDC| OpenGraphImage
 * Default OG image generated at build time. Lives at /opengraph-image
 * and is served as the social preview for any page that does not
 * override its own image. 1200x630, editorial steel gradient + wordmark.
 */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "COGAI — Cognitive health, measured.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #2A4358 0%, #3B5A75 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          COGAI
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              opacity: 0.85,
            }}
          >
            Cognitive health, measured.
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            Workforce and clinical mental health screening.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          <div>The employer never sees a score.</div>
          <div>cogai.health</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
