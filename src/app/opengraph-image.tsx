import { ImageResponse } from "next/og";

export const alt = "Taxi Bhai – Saudi Arabia's Most Trusted Taxi Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #003d20 0%, #006C35 60%, #009a4d 100%)",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.15)",
            borderRadius: "50px",
            padding: "8px 24px",
            marginBottom: "32px",
          }}
        >
          <span style={{ color: "#FFD700", fontSize: "18px", fontWeight: 700 }}>
            4.9 / 5.0 · 847 reviews · Saudi Arabia
          </span>
        </div>

        {/* Logo / Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "#FFD700",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
            }}
          >
            🚕
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#FFD700", fontSize: "52px", fontWeight: 900, lineHeight: 1 }}>
              Taxi Bhai
            </span>
            <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "20px", marginTop: "4px" }}>
              Saudi Arabia's Most Trusted Taxi Service
            </span>
          </div>
        </div>

        {/* Service pills */}
        <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
          {["Airport Transfer", "Umrah Taxi", "Ziyarat Tours", "Intercity"].map((s) => (
            <div
              key={s}
              style={{
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "8px",
                padding: "10px 20px",
                color: "white",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div
          style={{
            marginTop: "36px",
            color: "rgba(255,255,255,0.6)",
            fontSize: "20px",
          }}
        >
          +966 573 067 785 · taxibhaisauditaxiservice.com
        </div>
      </div>
    ),
    size
  );
}
