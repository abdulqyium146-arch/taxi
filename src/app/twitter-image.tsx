import { ImageResponse } from "next/og";

export const alt = "Taxi Bhai – Saudi Arabia Taxi Service";
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              background: "#FFD700",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
            }}
          >
            🚕
          </div>
          <span style={{ color: "#FFD700", fontSize: "56px", fontWeight: 900 }}>
            Taxi Bhai
          </span>
        </div>

        <p
          style={{
            color: "white",
            fontSize: "26px",
            textAlign: "center",
            margin: "0 0 28px",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          24/7 Professional Taxi Service across Saudi Arabia
        </p>

        <div style={{ display: "flex", gap: "16px" }}>
          {["Jeddah", "Makkah", "Madinah", "Taif", "Badr"].map((city) => (
            <div
              key={city}
              style={{
                background: "rgba(255,255,255,0.15)",
                borderRadius: "8px",
                padding: "10px 18px",
                color: "rgba(255,255,255,0.9)",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {city}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "32px",
            color: "rgba(255,255,255,0.55)",
            fontSize: "18px",
          }}
        >
          +966 573 067 785
        </div>
      </div>
    ),
    size
  );
}
