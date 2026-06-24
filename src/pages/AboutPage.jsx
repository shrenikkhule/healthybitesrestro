import { restaurantInfo, testimonials } from "../data/MenuItem";
import { menuItems } from "../data/MenuItem";

// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────
export function AboutPage() {
  const galleryItems = [
    { emoji: "🍛", label: "Signature Chaap" },
    { emoji: "🥗", label: "Protein Bowls" },
    { emoji: "🌯", label: "Fresh Rolls" },
    { emoji: "👨‍🍳", label: "Our Kitchen" },
    { emoji: "🌿", label: "Fresh Produce" },
    { emoji: "🧡", label: "Made With Love" },
  ];
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(135deg,#f0fdf4,#fff7ed)",
          padding: "56px 20px",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#22C55E",
              letterSpacing: 1,
            }}
          >
            OUR STORY
          </span>
          <h2
            className="section-title"
            style={{
              fontSize: 32,
              color: "#1F2937",
              margin: "8px 0 20px",
            }}
          >
            Born from a Passion for Healthy Living
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#4b5563",
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            Dhanvi's Eat Healthy Bites was founded in 2019 with a simple belief:
            that vegetarian food doesn't have to sacrifice taste for health.
            Starting from a humble cart in Lajpat Nagar, we brought Delhi's
            favourite street food — soya chaap — to a new level of quality,
            hygiene, and flavour.
          </p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.8 }}>
            Today, we serve over 50,000 happy customers with a menu crafted by a
            nutritionist, sourced from certified organic farms, and prepared
            fresh every morning. Our mission: make healthy eating a joy, not a
            compromise.
          </p>
        </div>
      </div>
      <div
        style={{
          maxWidth: 800,
          margin: "-32px auto 0",
          padding: "0 20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 16,
          }}
        >
          {[
            {
              n: restaurantInfo.happyCustomers,
              l: "Happy Customers",
              i: "😊",
            },
            {
              n: restaurantInfo.menuItems + "+",
              l: "Menu Items",
              i: "🍽",
            },
            {
              n: restaurantInfo.yearsOfService + " Yrs",
              l: "Of Service",
              i: "🏆",
            },
          ].map((s) => (
            <div
              key={s.l}
              className="card-hover"
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: "24px 16px",
                textAlign: "center",
                boxShadow: "0 4px 24px rgba(34,197,94,.12)",
                border: "1.5px solid rgba(34,197,94,.15)",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.i}</div>
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontWeight: 800,
                  fontSize: 24,
                  color: "#22C55E",
                }}
              >
                {s.n}
              </div>
              <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "56px 20px 0",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#22C55E",
              letterSpacing: 1,
            }}
          >
            GALLERY
          </span>
          <h2
            className="section-title"
            style={{ fontSize: 28, color: "#1F2937", marginTop: 4 }}
          >
            A Glimpse of Our World
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))",
            gap: 16,
          }}
        >
          {galleryItems.map((g, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: "linear-gradient(135deg,#DCFCE7,#FFF7ED)",
                borderRadius: 16,
                aspectRatio: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                fontSize: 48,
                border: "1.5px solid rgba(34,197,94,.15)",
              }}
            >
              {g.emoji}
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#374151",
                }}
              >
                {g.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(135deg,#0f5c2e,#166534)",
          padding: "56px 20px",
          margin: "56px 0 0",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#FACC15",
              letterSpacing: 1,
            }}
          >
            OUR PHILOSOPHY
          </span>
          <h2
            className="section-title"
            style={{ fontSize: 28, color: "#fff", margin: "8px 0 16px" }}
          >
            Eat Well, Live Well
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,.8)",
              lineHeight: 1.8,
            }}
          >
            We believe food is medicine. Every dish on our menu is designed to
            nourish your body while delighting your senses. No artificial
            colours, no preservatives, no compromise — just pure, honest food
            made with care.
          </p>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#22C55E",
              letterSpacing: 1,
            }}
          >
            TESTIMONIALS
          </span>
          <h2
            className="section-title"
            style={{ fontSize: 28, color: "#1F2937", marginTop: 4 }}
          >
            What Our Customers Say 💬
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
            gap: 20,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: "22px",
                border: "1.5px solid rgba(34,197,94,.15)",
                boxShadow: "0 2px 16px rgba(34,197,94,.08)",
              }}
            >
              <div style={{ display: "flex", gap: 1, marginBottom: 12 }}>
                {Array(t.rating)
                  .fill(0)
                  .map((_, j) => (
                    <span key={j} className="star" style={{ fontSize: 14 }}>
                      ★
                    </span>
                  ))}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "#4b5563",
                  lineHeight: 1.7,
                  marginBottom: 16,
                  fontStyle: "italic",
                }}
              >
                "{t.review}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#22C55E,#16a34a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#fff",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#1F2937",
                    }}
                  >
                    {t.name}
                  </p>
                  <p style={{ fontSize: 12, color: "#9ca3af" }}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
