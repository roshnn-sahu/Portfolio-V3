import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title =
      searchParams.get("title") ?? "Roshan Sahu – Full Stack Developer";

    const fontDir = path.join(
      process.cwd(),
      "node_modules/geist/dist/fonts/geist-sans",
    );

    const fontData = fs.readFileSync(
      path.join(fontDir, "Geist-Regular.woff2"),
    );
    const fontBoldData = fs.readFileSync(
      path.join(fontDir, "Geist-Bold.woff2"),
    );

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            background:
              "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)",
            padding: "64px 72px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle grid pattern overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.06,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Accent gradient orbs */}
          <div
            style={{
              position: "absolute",
              top: "-120px",
              right: "-80px",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-100px",
              left: "-60px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
            }}
          />

          {/* Top section: logo / site name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              R
            </div>
            <span
              style={{
                fontFamily: "Geist",
                fontSize: 22,
                fontWeight: 600,
                color: "#e2e8f0",
                letterSpacing: "0.02em",
              }}
            >
              Roshan Sahu
            </span>
          </div>

          {/* Center: Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              position: "relative",
              zIndex: 1,
              maxWidth: "90%",
            }}
          >
            <h1
              style={{
                fontFamily: "Geist",
                fontSize: 52,
                fontWeight: 700,
                color: "#f1f5f9",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                margin: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {title}
            </h1>
          </div>

          {/* Bottom: domain name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontFamily: "Geist",
                fontSize: 16,
                fontWeight: 400,
                color: "#94a3b8",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              roshansahu.in
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Geist",
            data: fontData,
            weight: 400,
            style: "normal",
          },
          {
            name: "Geist",
            data: fontBoldData,
            weight: 700,
            style: "normal",
          },
        ],
      },
    );
  } catch (error) {
    console.error("OG image generation error:", error);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
