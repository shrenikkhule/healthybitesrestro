import React from "react";
import { restaurantInfo } from "../../data/MenuItem";

function HeroSection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg,#1a0a00 0%,#3d1100 30%,#1F2937 70%,#0d1117 100%)",
        minHeight: 520,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 20px 96px",
      }}
    >
      {/* ambient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 20% 80%,rgba(249,115,22,.18) 0%,transparent 50%),radial-gradient(ellipse at 80% 20%,rgba(220,38,38,.12) 0%,transparent 50%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: 700,
        }}
      >
        {/* veg badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(34,197,94,.15)",
            border: "1.5px solid rgba(34,197,94,.4)",
            borderRadius: 30,
            padding: "6px 16px",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#22C55E",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,.9)",
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            100% PURE VEGETARIAN
          </span>
        </div>

        <h1
          className="dh-playfair"
          style={{
            fontWeight: 900,
            fontSize: "clamp(38px,6vw,68px)",
            color: "#fff",
            lineHeight: 1.05,
            marginBottom: 16,
          }}
        >
          Taste That
          <br />
          <span
            className="dh-hotglow"
            style={{ color: "#FBBF24", display: "inline-block" }}
          >
            Burns Good
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(15px,2.5vw,19px)",
            color: "rgba(255,255,255,.8)",
            fontWeight: 500,
            marginBottom: 10,
          }}
        >
          {restaurantInfo.tagline}
        </p>
        <p
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,.5)",
            marginBottom: 32,
          }}
        >
          🌶 Freshly Spiced · 🧄 Aromatic Masalas · 🔥 Char-Grilled Perfection
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          <button
            onClick={() =>
              menuRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="dh-pulse"
            style={{
              background: "#F97316",
              color: "#fff",
              border: "none",
              borderRadius: 14,
              padding: "14px 32px",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Explore Menu 🍽
          </button>
          <button
            onClick={() => setTab("ABOUT US")}
            style={{
              background: "rgba(255,255,255,.1)",
              border: "1.5px solid rgba(255,255,255,.3)",
              color: "#fff",
              borderRadius: 14,
              padding: "14px 32px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Our Story →
          </button>
        </div>

        {/* stats */}
        <div
          style={{
            display: "flex",
            gap: 28,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            ["4.8★", "Rating"],
            ["50K+", "Happy Customers"],
            ["30 min", "Delivery"],
            ["8 yrs", "Serving Delhi"],
          ].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 800, fontSize: 22, color: "#FBBF24" }}>
                {n}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,.5)",
                  marginTop: 2,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* flame */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 112,
          pointerEvents: "none",
        }}
      >
        <svg
          width="100%"
          height="112"
          viewBox="0 0 680 112"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fg1" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#FBBF24" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="fg2" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#F97316" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,112 Q40,55 80,82 Q120,25 160,65 Q200,5 240,50 Q280,0 320,45 Q360,5 400,55 Q440,12 480,60 Q520,20 560,65 Q600,35 640,70 Q660,50 680,75 L680,112 Z"
            fill="url(#fg2)"
            style={{ animation: "flicker1 1.8s ease-in-out infinite" }}
          />
          <path
            d="M0,112 Q30,70 70,95 Q110,45 150,80 Q190,25 230,62 Q270,5 310,55 Q350,18 390,60 Q430,28 470,68 Q510,40 550,72 Q590,50 630,75 Q660,60 680,85 L680,112 Z"
            fill="url(#fg1)"
            style={{ animation: "flicker2 1.4s ease-in-out infinite" }}
          />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
