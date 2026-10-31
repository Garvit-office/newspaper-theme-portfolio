import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#efeadf", color: "#1c1a16", padding: 72, fontFamily: "serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 4, textTransform: "uppercase", borderTop: "4px solid #1c1a16", borderBottom: "1px solid #1c1a16", padding: "14px 0" }}>
          <span>Vol. 01</span>
          <span>The Portfolio</span>
          <span>Est. {site.established}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 40, fontStyle: "italic", color: "#57524a", marginTop: 20 }}>{site.role}</div>
        </div>
      </div>
    ),
    size,
  );
}
