import { useState, useRef } from "react";
import { MenuCard } from "../../components/MenuCard";
import { popularItems, restaurantInfo, whyChooseUs } from "../../data/MenuItem";
import HeroSection from "./HeroSection";

// ── SPICE METER ───────────────────────────────────────────────────────────────
function SpiceMeter({ level = 2 }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((n) => (
        <span key={n} style={{ opacity: n <= level ? 1 : 0.2, fontSize: 11 }}>
          🌶
        </span>
      ))}
    </div>
  );
}

// ── TOAST ─────────────────────────────────────────────────────────────────────
function Toast({ msg, visible }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? 0 : -80}px)`,
        opacity: visible ? 1 : 0,
        transition: "all 0.3s ease",
        background: "#1F2937",
        color: "#fff",
        padding: "12px 22px",
        borderRadius: 12,
        fontSize: 14,
        fontWeight: 600,
        zIndex: 999,
        borderLeft: "3px solid #F97316",
        boxShadow: "0 8px 28px rgba(0,0,0,.3)",
        whiteSpace: "nowrap",
        pointerEvents: "none",
      }}
    >
      {msg}
    </div>
  );
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
export function HomePage({ setTab }) {
  const [cart, setCart] = useState({});
  const [activeCat, setActiveCat] = useState("all");
  const [toast, setToast] = useState({ msg: "", visible: false });
  const [codeCopied, setCodeCopied] = useState(false);
  const menuRef = useRef(null);
  const toastTimer = useRef(null);

  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour < 22;
  const totalQty = Object.values(cart).reduce((a, b) => a + b, 0);

  function showToast(msg) {
    setToast({ msg, visible: true });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(
      () => setToast((t) => ({ ...t, visible: false })),
      2500,
    );
  }

  function updateCart(id, delta, name) {
    setCart((prev) => {
      const next = { ...prev, [id]: Math.max(0, (prev[id] || 0) + delta) };
      if (next[id] === 0) delete next[id];
      return next;
    });
    if (delta > 0) showToast(`${name} added to cart! 🛒`);
  }

  function copyCode() {
    navigator.clipboard?.writeText("SPICY20").catch(() => {});
    setCodeCopied(true);
    showToast("Code SPICY20 copied! 🎉");
    setTimeout(() => setCodeCopied(false), 3000);
  }

  const CATS = [
    { id: "all", label: "🍽 All" },
    { id: "chaap", label: "🥩 Soya Chaap" },
    { id: "roll", label: "🌯 Rolls" },
    { id: "snack", label: "🍟 Snacks" },
    { id: "drink", label: "🥤 Drinks" },
  ];

  // popularItems from your data — filter by cat if item has a `cat` field,
  // otherwise just show all when "all" is selected
  const filtered =
    activeCat === "all"
      ? popularItems
      : popularItems.filter((i) => i.cat === activeCat);

  return (
    <>
      {/* ── KEYFRAMES ──────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap');
        @keyframes floatY    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes flicker1  { 0%,100%{transform:scaleY(1) rotate(-2deg)} 33%{transform:scaleY(1.15) rotate(2deg)} 66%{transform:scaleY(.9) rotate(-1deg)} }
        @keyframes flicker2  { 0%,100%{transform:scaleY(1) rotate(3deg)} 33%{transform:scaleY(1.2) rotate(-3deg)} 66%{transform:scaleY(.95) rotate(1deg)} }
        @keyframes hotglow   { 0%,100%{text-shadow:0 0 20px rgba(249,115,22,.8),0 0 40px rgba(220,38,38,.4)} 50%{text-shadow:0 0 32px rgba(249,115,22,1),0 0 60px rgba(220,38,38,.7)} }
        @keyframes cardEnter { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes marquee   { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes pulseRing { 0%{box-shadow:0 0 0 0 rgba(249,115,22,.55)} 70%{box-shadow:0 0 0 12px rgba(249,115,22,0)} 100%{box-shadow:0 0 0 0 rgba(249,115,22,0)} }
        @keyframes sizzle    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.75;transform:scale(1.06)} }
        .dh-float    { animation: floatY    4s ease-in-out infinite }
        .dh-hotglow  { animation: hotglow   2s ease-in-out infinite }
        .dh-pulse    { animation: pulseRing 2.5s ease-in-out infinite }
        .dh-sizzle   { animation: sizzle    1.6s ease-in-out infinite }
        .dh-playfair { font-family:'Playfair Display',serif }
        .dh-card     { animation: cardEnter .5s ease-out both }
        .dh-card:hover { transform: translateY(-6px) !important; box-shadow: 0 20px 48px rgba(249,115,22,.18) !important; }
        .dh-marquee  { animation: marquee 20s linear infinite }
        .dh-catbtn:hover { border-color: #F97316 !important; color: #F97316 !important; }
        .dh-social:hover { background: #F97316 !important; border-color: #F97316 !important; color: #fff !important; }
        .dh-footlink:hover { color: #F97316 !important; }
        .dh-why:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(249,115,22,.12); }
      `}</style>

      <Toast msg={toast.msg} visible={toast.visible} />

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── TICKER ─────────────────────────────────────────────────────── */}
      <div
        style={{ background: "#F97316", overflow: "hidden", padding: "10px 0" }}
      >
        <div
          className="dh-marquee"
          style={{
            display: "flex",
            width: "max-content",
            whiteSpace: "nowrap",
          }}
        >
          {[...Array(2)].map((_, ri) => (
            <div key={ri} style={{ display: "flex" }}>
              {[
                "🔥 SPICY CHAAP LOADED WITH MASALA",
                "🌶 EXTRA CHILLI ON REQUEST",
                "🍋 FRESH SQUEEZED LIME ON EVERYTHING",
                "🧄 SECRET GARLIC SAUCE",
                "✅ 100% PURE VEG CERTIFIED",
                "🛵 FREE DELIVERY ABOVE ₹299",
                "⚡ ORDER VIA WHATSAPP",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    padding: "0 24px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    letterSpacing: 0.5,
                  }}
                >
                  {t}{" "}
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.4)",
                      display: "inline-block",
                    }}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── STATUS BAR ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: "16px 24px",
            marginTop: -28,
            boxShadow: "0 8px 40px rgba(249,115,22,.15)",
            border: "1.5px solid rgba(249,115,22,.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            position: "relative",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                display: "inline-block",
                background: isOpen ? "#22C55E" : "#ef4444",
                boxShadow: isOpen ? "0 0 0 4px rgba(34,197,94,.2)" : "none",
              }}
            />
            <span
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: isOpen ? "#15803d" : "#dc2626",
              }}
            >
              {isOpen ? "Open Now" : "Closed"}
            </span>
          </div>
          <span style={{ fontSize: 13, color: "#6b7280" }}>
            ⏰ {restaurantInfo.openTime} – {restaurantInfo.closeTime}
          </span>
          <span style={{ fontSize: 13, color: "#22C55E", fontWeight: 600 }}>
            🛵 Free delivery above ₹299
          </span>
          <span style={{ fontSize: 13, color: "#6b7280" }}>
            📞 {restaurantInfo.phone}
          </span>
          <button
            onClick={() => showToast("Opening WhatsApp... 💬")}
            style={{
              background: "#22C55E",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Order on WhatsApp
          </button>
        </div>
      </div>

      {/* ── POPULAR / MENU SECTION ─────────────────────────────────────── */}
      <div
        ref={menuRef}
        style={{ maxWidth: 1100, margin: "56px auto 0", padding: "0 20px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 4,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#F97316",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Most Loved
            </p>
            <h2
              className="dh-playfair"
              style={{
                fontWeight: 800,
                fontSize: 28,
                color: "#1F2937",
                marginTop: 4,
              }}
            >
              Our Signature Dishes 🔥
            </h2>
          </div>
          <span
            className="dh-sizzle"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "linear-gradient(90deg,#EF4444,#F97316)",
              color: "#fff",
              fontSize: 10,
              fontWeight: 800,
              padding: "6px 12px",
              borderRadius: 8,
              letterSpacing: 0.5,
            }}
          >
            🌶 TRENDING TODAY
          </span>
        </div>

        {/* category pills */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            margin: "24px 0",
          }}
        >
          {CATS.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className={activeCat !== c.id ? "dh-catbtn" : ""}
              style={{
                padding: "8px 18px",
                borderRadius: 30,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                border:
                  activeCat === c.id
                    ? "2px solid #F97316"
                    : "2px solid rgba(249,115,22,.2)",
                background: activeCat === c.id ? "#F97316" : "#fff",
                color: activeCat === c.id ? "#fff" : "#374151",
                transition: "all .2s",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* cards grid — uses your existing MenuCard component */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
            gap: 20,
            marginBottom: 48,
          }}
        >
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="dh-card"
              style={{
                animationDelay: `${i * 80}ms`,
                transition: "transform .25s, box-shadow .25s",
              }}
            >
              <MenuCard item={item} delay={i * 80} />
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <button
            onClick={() => setTab("MENU")}
            className="dh-pulse"
            style={{
              background: "#F97316",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "12px 28px",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            View Full Menu →
          </button>
        </div>
      </div>

      {/* ── OFFER BANNER ───────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1100, margin: "0 auto 0", padding: "0 20px" }}>
        <div
          style={{
            background: "linear-gradient(135deg,#1F2937,#374151)",
            borderRadius: 20,
            padding: "28px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            position: "relative",
            overflow: "hidden",
            border: "2px solid rgba(249,115,22,.3)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse at 30% 50%,rgba(249,115,22,.15) 0%,transparent 60%)",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#F97316",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              Limited Time
            </p>
            <h3
              className="dh-playfair"
              style={{ fontWeight: 800, fontSize: 24, color: "#fff" }}
            >
              First Order Special 🎉
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,.6)",
                marginTop: 4,
              }}
            >
              Flat 20% off on orders above ₹399
            </p>
          </div>
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <p
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,.4)",
                marginBottom: 8,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              Promo Code
            </p>
            <button
              onClick={copyCode}
              className="dh-sizzle"
              style={{
                fontSize: 20,
                fontWeight: 900,
                letterSpacing: 3,
                padding: "10px 24px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                transition: "background .2s",
                background: codeCopied ? "#22C55E" : "#F97316",
                color: "#fff",
              }}
            >
              {codeCopied ? "✓ COPIED!" : "SPICY20"}
            </button>
            <p
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,.35)",
                marginTop: 8,
              }}
            >
              Click to copy
            </p>
          </div>
        </div>
      </div>

      {/* ── WHY CHOOSE US ──────────────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg,#fff7ed,#fff3e0)",
          padding: "56px 20px",
          marginTop: 56,
          borderTop: "3px solid rgba(249,115,22,.12)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#F97316",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              WHY WE'RE DIFFERENT
            </p>
            <h2
              className="dh-playfair"
              style={{
                fontWeight: 800,
                fontSize: 28,
                color: "#1F2937",
                marginTop: 4,
              }}
            >
              The Dhanvi's Promise
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: 18,
            }}
          >
            {whyChooseUs.map((w, i) => (
              <div
                key={i}
                className="dh-why"
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  padding: "24px 18px",
                  textAlign: "center",
                  border: "1.5px solid rgba(249,115,22,.12)",
                  transition: "transform .2s,box-shadow .2s",
                  cursor: "default",
                }}
              >
                <span
                  className="dh-float"
                  style={{
                    fontSize: 38,
                    marginBottom: 12,
                    display: "block",
                    animationDelay: `${i * 0.3}s`,
                  }}
                >
                  {w.icon}
                </span>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#1F2937",
                    marginBottom: 6,
                  }}
                >
                  {w.title}
                </h3>
                <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.6 }}>
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTACT ────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#F97316",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            FIND US
          </p>
          <h2
            className="dh-playfair"
            style={{
              fontWeight: 800,
              fontSize: 28,
              color: "#1F2937",
              marginTop: 4,
            }}
          >
            Visit or Order
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 18,
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
                padding: 20,
                border: "1.5px solid rgba(249,115,22,.12)",
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                boxShadow: "0 2px 12px rgba(249,115,22,.07)",
              }}
            >
              <span style={{ fontSize: 24, flexShrink: 0 }}>{c.icon}</span>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: 11,
                    color: "#9ca3af",
                    marginBottom: 4,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {c.title}
                </p>
                <p style={{ fontSize: 14, color: "#1F2937", lineHeight: 1.5 }}>
                  {c.val}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 28,
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
              className="dh-social"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "#fff",
                border: "1.5px solid rgba(249,115,22,.2)",
                borderRadius: 10,
                padding: "8px 14px",
                textDecoration: "none",
                color: "#374151",
                fontSize: 13,
                fontWeight: 600,
                transition: "all .2s",
              }}
            >
              {e} {n}
            </a>
          ))}
        </div>
      </div>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: "#1F2937",
          color: "rgba(255,255,255,.75)",
          padding: "48px 20px 24px",
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
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "linear-gradient(135deg,#22C55E,#16a34a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  🌿
                </div>
                <div>
                  <p
                    className="dh-playfair"
                    style={{ fontWeight: 800, fontSize: 14, color: "#fff" }}
                  >
                    Dhanvi's
                  </p>
                  <p
                    style={{
                      fontSize: 10,
                      color: "#22C55E",
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    EAT HEALTHY BITES
                  </p>
                </div>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,.45)",
                  lineHeight: 1.7,
                }}
              >
                {restaurantInfo.tagline}. Fresh, healthy, and pure vegetarian
                food made with love and fire.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#fff",
                  marginBottom: 14,
                }}
              >
                Quick Links
              </p>
              {["Home", "Menu", "About Us", "Contact"].map((l) => (
                <p
                  key={l}
                  className="dh-footlink"
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,.45)",
                    marginBottom: 8,
                    cursor: "pointer",
                    transition: "color .2s",
                  }}
                >
                  {l}
                </p>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#fff",
                  marginBottom: 14,
                }}
              >
                Contact
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,.45)",
                  marginBottom: 6,
                }}
              >
                {restaurantInfo.address}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,.45)",
                  marginBottom: 6,
                }}
              >
                {restaurantInfo.phone}
              </p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.45)" }}>
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
            <p style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>
              © 2024 Dhanvi's Eat Healthy Bites. All rights reserved.
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>
              Made with 🔥 in Delhi
            </p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING CART ──────────────────────────────────────────────── */}
      {totalQty > 0 && (
        <button
          onClick={() => showToast("Opening cart... 🛒")}
          className="dh-pulse"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 50,
            background: "#F97316",
            color: "#fff",
            border: "none",
            borderRadius: 50,
            padding: "14px 22px",
            fontSize: 15,
            fontWeight: 800,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 10,
            boxShadow: "0 8px 28px rgba(249,115,22,.45)",
          }}
        >
          🛒 View Cart
          <span
            style={{
              background: "#fff",
              color: "#F97316",
              borderRadius: "50%",
              width: 24,
              height: 24,
              fontSize: 12,
              fontWeight: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {totalQty}
          </span>
        </button>
      )}
    </>
  );
}
