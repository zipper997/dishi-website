import { ImageResponse } from "next/og"

export const alt = "disi - Premium Trakice za Nos za Bolje Disanje"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #3b82f6 100%)",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            display: "flex",
            background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />

        {/* Logo letter */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            background: "rgba(255,255,255,0.15)",
            borderRadius: "24px",
            marginBottom: "24px",
          }}
        >
          <span style={{ fontSize: "64px", fontWeight: 800, color: "#ffffff" }}>д</span>
        </div>

        {/* Brand name */}
        <h1 style={{ margin: 0, fontSize: "72px", fontWeight: 800, color: "#ffffff", letterSpacing: "-2px" }}>
          disi.rs
        </h1>

        {/* Tagline */}
        <p style={{ margin: "12px 0 0", fontSize: "28px", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
          Premium Trakice za Nos za Bolje Disanje
        </p>

        {/* Features bar */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "40px",
            padding: "16px 32px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "12px",
          }}
        >
          <span style={{ fontSize: "18px", color: "rgba(255,255,255,0.9)" }}>Medicinski Kvalitet</span>
          <span style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)" }}>|</span>
          <span style={{ fontSize: "18px", color: "rgba(255,255,255,0.9)" }}>Klinički Testirano</span>
          <span style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)" }}>|</span>
          <span style={{ fontSize: "18px", color: "rgba(255,255,255,0.9)" }}>Brza Dostava</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
