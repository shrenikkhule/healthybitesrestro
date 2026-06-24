import { MenuCard } from "../components/MenuCard";
import { popularItems, restaurantInfo, whyChooseUs } from "../data/MenuItem";

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export function HomePage({ setTab }) {
  const now = new Date();
  const hour = now.getHours();
  const isOpen = hour >= 10 && hour < 22;
  return (
    <div>
      {/* Hero */}
      <div
        className="hero-gradient"
        style={{
          minHeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 70% 50%,rgba(250,204,21,.12) 0%,transparent 60%)",
          }}
        />
        <div
          style={{
            maxWidth: 700,
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,.12)",
              borderRadius: 30,
              padding: "6px 16px",
              marginBottom: 20,
              border: "1px solid rgba(255,255,255,.2)",
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,.9)",
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              🌿 100% PURE VEGETARIAN
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display',serif",
              fontWeight: 800,
              fontSize: "clamp(32px,6vw,60px)",
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Healthy Food,
            <br />
            <span style={{ color: "#FACC15" }}>Delicious Taste</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(15px,2.5vw,19px)",
              color: "rgba(255,255,255,.82)",
              marginBottom: 12,
              fontWeight: 500,
            }}
          >
            Delhi's Special Soya Chaap & Pure Veg Delights
          </p>
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,.6)",
              marginBottom: 32,
            }}
          >
            Fresh · Healthy · Authentic · Pure Vegetarian
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setTab("MENU")}
              className="btn-primary"
              style={{
                padding: "14px 32px",
                borderRadius: 14,
                fontSize: 15,
              }}
            >
              Explore Menu 🍽
            </button>
            <button
              onClick={() => setTab("ABOUT US")}
              style={{
                padding: "14px 32px",
                borderRadius: 14,
                fontSize: 15,
                background: "rgba(255,255,255,.12)",
                border: "1.5px solid rgba(255,255,255,.3)",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 600,
                backdropFilter: "blur(4px)",
              }}
            >
              Our Story →
            </button>
          </div>
          <div
            style={{
              display: "flex",
              gap: 24,
              justifyContent: "center",
              marginTop: 32,
              flexWrap: "wrap",
            }}
          >
            {[
              ["4.8★", "Rating"],
              ["50K+", "Happy Customers"],
              ["30 min", "Delivery"],
            ].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 20,
                    color: "#FACC15",
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,.6)",
                    marginTop: 2,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status Card */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: "16px 24px",
            margin: "-28px 0 0",
            boxShadow: "0 8px 32px rgba(0,0,0,.1)",
            border: "1.5px solid rgba(34,197,94,.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: isOpen ? "#22C55E" : "#ef4444",
                display: "inline-block",
                boxShadow: isOpen ? "0 0 0 3px rgba(34,197,94,.25)" : "none",
              }}
            />
            <span
              style={{
                fontWeight: 700,
                color: isOpen ? "#15803d" : "#dc2626",
                fontSize: 15,
              }}
            >
              {isOpen ? "Open Now" : "Closed"}
            </span>
          </div>
          <span style={{ fontSize: 13, color: "#6b7280" }}>
            ⏰ {restaurantInfo.openTime} – {restaurantInfo.closeTime}
          </span>
          <span style={{ fontSize: 13, color: "#22C55E", fontWeight: 600 }}>
            🛵 Delivery Available
          </span>
          <span style={{ fontSize: 13, color: "#6b7280" }}>
            📞 {restaurantInfo.phone}
          </span>
        </div>
      </div>

      {/* Popular Items */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "48px 20px 0",
        }}
      >
        <div style={{ marginBottom: 28 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#22C55E",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Most Loved
          </span>
          <h2
            className="section-title"
            style={{ fontSize: 28, color: "#1F2937", marginTop: 4 }}
          >
            Popular Picks 🔥
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 20,
          }}
        >
          {popularItems.map((item, i) => (
            <MenuCard key={item.id} item={item} delay={i * 80} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <button
            onClick={() => setTab("MENU")}
            className="btn-primary"
            style={{
              padding: "12px 28px",
              borderRadius: 12,
              fontSize: 14,
            }}
          >
            View Full Menu →
          </button>
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        style={{
          background: "linear-gradient(135deg,#f0fdf4,#fff7ed)",
          padding: "56px 20px",
          marginTop: 56,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#22C55E",
                letterSpacing: 1,
              }}
            >
              WHY WE'RE DIFFERENT
            </span>
            <h2
              className="section-title"
              style={{ fontSize: 28, color: "#1F2937", marginTop: 4 }}
            >
              The Dhanvi's Promise
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 20,
            }}
          >
            {whyChooseUs.map((w, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  padding: "24px 20px",
                  border: "1.5px solid rgba(34,197,94,.15)",
                  textAlign: "center",
                  boxShadow: "0 2px 16px rgba(34,197,94,.08)",
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{w.icon}</div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                    color: "#1F2937",
                    marginBottom: 8,
                  }}
                >
                  {w.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#6b7280",
                    lineHeight: 1.6,
                  }}
                >
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#22C55E",
              letterSpacing: 1,
            }}
          >
            FIND US
          </span>
          <h2
            className="section-title"
            style={{ fontSize: 28, color: "#1F2937", marginTop: 4 }}
          >
            Visit or Order
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 20,
          }}
        >
          {[
            { icon: "📍", title: "Address", val: restaurantInfo.address },
            { icon: "📞", title: "Phone", val: restaurantInfo.phone },
            { icon: "✉️", title: "Email", val: restaurantInfo.email },
            {
              icon: "⏰",
              title: "Hours",
              val: `${restaurantInfo.openTime} – ${restaurantInfo.closeTime} (Daily)`,
            },
          ].map((c) => (
            <div
              key={c.title}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "20px",
                border: "1.5px solid rgba(34,197,94,.15)",
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                boxShadow: "0 2px 12px rgba(34,197,94,.07)",
              }}
            >
              <span style={{ fontSize: 24, flexShrink: 0 }}>{c.icon}</span>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#9ca3af",
                    marginBottom: 4,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {c.title}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "#1F2937",
                    lineHeight: 1.5,
                  }}
                >
                  {c.val}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: 28,
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            ["🟢", "WhatsApp"],
            ["📘", "Facebook"],
            ["📸", "Instagram"],
            ["📺", "YouTube"],
          ].map(([e, n]) => (
            <a
              key={n}
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "#fff",
                border: "1.5px solid rgba(34,197,94,.2)",
                borderRadius: 10,
                padding: "8px 14px",
                textDecoration: "none",
                color: "#374151",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {e} {n}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          background: "#1F2937",
          color: "rgba(255,255,255,.85)",
          padding: "40px 20px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: 32,
              marginBottom: 32,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "linear-gradient(135deg,#22C55E,#16a34a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                  }}
                >
                  🌿
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontWeight: 800,
                      fontSize: 14,
                      color: "#fff",
                    }}
                  >
                    Dhanvi's
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#22C55E",
                      fontWeight: 600,
                    }}
                  >
                    EAT HEALTHY BITES
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,.55)",
                  lineHeight: 1.6,
                }}
              >
                {restaurantInfo.tagline}. Fresh, healthy, and pure vegetarian
                food made with love.
              </p>
            </div>
            <div>
              <h4
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  marginBottom: 12,
                  color: "#fff",
                }}
              >
                Quick Links
              </h4>
              {["Home", "Menu", "About Us", "Contact"].map((l) => (
                <p
                  key={l}
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,.55)",
                    marginBottom: 8,
                    cursor: "pointer",
                  }}
                >
                  {l}
                </p>
              ))}
            </div>
            <div>
              <h4
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  marginBottom: 12,
                  color: "#fff",
                }}
              >
                Contact
              </h4>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,.55)",
                  marginBottom: 6,
                }}
              >
                {restaurantInfo.address}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,.55)",
                  marginBottom: 6,
                }}
              >
                {restaurantInfo.phone}
              </p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.55)" }}>
                {restaurantInfo.email}
              </p>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,.1)",
              paddingTop: 20,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <p style={{ fontSize: 12, color: "rgba(255,255,255,.4)" }}>
              © 2024 Dhanvi's Eat Healthy Bites. All rights reserved.
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,.4)" }}>
              Made with 💚 in Delhi
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
