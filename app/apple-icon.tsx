import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
          borderRadius: "36px",
        }}
      >
        <span
          style={{
            fontSize: "120px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1,
            marginTop: "-4px",
          }}
        >
          д
        </span>
      </div>
    ),
    { ...size }
  )
}
