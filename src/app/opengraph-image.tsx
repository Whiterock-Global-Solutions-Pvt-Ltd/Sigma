import { ImageResponse } from "next/og";

export const alt = "Sigma Business Finance — fast, flexible UK business funding";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #100a30 0%, #311b92 60%, #5a41bd 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 36, fontWeight: 700 }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              background: "#e040fb",
              marginRight: 18,
            }}
          />
          Sigma Business Finance
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Fast, flexible funding for UK businesses
          </div>
          <div style={{ fontSize: 32, marginTop: 28, color: "#bcb0ec" }}>
            50+ specialist lenders · Decisions in 24–48 hours · No upfront fees
          </div>
        </div>
      </div>
    ),
    size
  );
}
