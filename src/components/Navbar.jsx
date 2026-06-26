import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IoFlame } from "react-icons/io5";

export function Navbar() {
  const { count, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on outside click
  const mobileRef = useRef(null);
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target))
        setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Menu", to: "/menu" },
    { label: "About", to: "/about" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap');

        /* ── nav link underline trick ── */
        .dhv-nav-link {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: .5px;
          color: #374151;
          text-decoration: none;
          padding-bottom: 3px;
          transition: color .22s;
        }
        .dhv-nav-link::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          height: 2px; width: 0;
          background: linear-gradient(90deg,#F97316,#ef4444);
          border-radius: 99px;
          transition: width .28s cubic-bezier(.22,1,.36,1);
        }
        .dhv-nav-link:hover { color: #F97316; }
        .dhv-nav-link:hover::after,
        .dhv-nav-link.active::after { width: 100%; }
        .dhv-nav-link.active { color: #F97316; }

        /* ── cart button ── */
        .dhv-cart-btn {
          transition: transform .28s cubic-bezier(.34,1.56,.64,1), box-shadow .28s ease, background .22s;
        }
        .dhv-cart-btn:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 10px 28px rgba(249,115,22,.28) !important;
          background: linear-gradient(135deg,#F97316,#ef4444) !important;
          color: #fff !important;
          border-color: transparent !important;
        }
        .dhv-cart-btn:hover .dhv-cart-label { color: #fff !important; }

        /* ── order btn ── */
        .dhv-order-btn {
          transition: transform .28s cubic-bezier(.34,1.56,.64,1), box-shadow .28s ease;
        }
        .dhv-order-btn:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 10px 28px rgba(249,115,22,.35) !important;
        }

        /* ── hamburger ── */
        .dhv-ham {
          transition: transform .22s cubic-bezier(.34,1.56,.64,1), color .22s;
        }
        .dhv-ham:hover { transform: scale(1.12) rotate(8deg); color: #F97316; }

        /* ── mobile menu panel ── */
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-14px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .dhv-mobile-panel {
          animation: slideDown .32s cubic-bezier(.22,1,.36,1) both;
        }

        /* ── badge bounce ── */
        @keyframes badgePop {
          0%  { transform: scale(0); }
          70% { transform: scale(1.25); }
          100%{ transform: scale(1); }
        }
        .dhv-badge { animation: badgePop .35s cubic-bezier(.34,1.56,.64,1) both; }

        /* ── logo glow on hover ── */
        .dhv-logo-wrap {
          transition: transform .28s cubic-bezier(.34,1.56,.64,1);
        }
        .dhv-logo-wrap:hover { transform: scale(1.04); }

        /* mobile nav link */
        .dhv-mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          border-bottom: 1px solid rgba(249,115,22,.08);
          transition: color .22s, padding-left .22s;
        }
        .dhv-mob-link:hover, .dhv-mob-link.active {
          color: #F97316;
          padding-left: 6px;
        }
        .dhv-mob-link .arrow {
          font-size: 16px;
          opacity: 0;
          transition: opacity .2s, transform .2s;
        }
        .dhv-mob-link:hover .arrow, .dhv-mob-link.active .arrow {
          opacity: 1;
          transform: translateX(3px);
        }

        @media (max-width: 680px) {
          .dhv-desktop-links { display: none !important; }
          .dhv-order-desktop  { display: none !important; }
          .dhv-ham-wrap       { display: flex !important; }
        }
        @media (min-width: 681px) {
          .dhv-ham-wrap { display: none !important; }
        }
      `}</style>

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 200,
          background: scrolled
            ? "rgba(255,250,245,.97)"
            : "rgba(255,250,245,.92)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: scrolled
            ? "1.5px solid rgba(249,115,22,.18)"
            : "1.5px solid rgba(249,115,22,.1)",
          boxShadow: scrolled ? "0 4px 32px rgba(249,115,22,.1)" : "none",
          transition:
            "box-shadow .35s ease, border-color .35s ease, background .35s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 66,
          }}
        >
          {/* ── LOGO ──────────────────────────────────────────────── */}
          <div
            className="dhv-logo-wrap"
            style={{
              display: "flex",
              alignItems: "center",
              // gap: 1,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            {/* Logo image — replace src with your actual image path */}
            <div style={{ width: 94 }}>
              <img
                src="/healthy.png"
                alt="Dhanvi's logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML =
                    "<span style='font-size:22px'>🌿</span>";
                }}
              />
            </div>

            <div style={{ lineHeight: 1 }}>
              <p
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 900,
                  fontSize: 17,
                  color: "#1F2937",
                  letterSpacing: "-0.3px",
                  marginBottom: 2,
                }}
              >
                Dhanvi's
              </p>
              <p
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  color: "#16a34a",
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                }}
              >
                Eat Healthy Bites
              </p>
            </div>
          </div>

          {/* ── DESKTOP LINKS ──────────────────────────────────────── */}
          <div
            className="dhv-desktop-links"
            style={{ display: "flex", gap: 34, alignItems: "center" }}
          >
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `dhv-nav-link${isActive ? " active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* ── RIGHT ACTIONS ──────────────────────────────────────── */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Order Now — desktop only */}
            <button
              className="dhv-order-btn dhv-order-desktop"
              onClick={() => navigate("/menu")}
              style={{
                background: "linear-gradient(135deg,#F97316,#ef4444)",
                color: "#fff",
                border: "none",
                borderRadius: 12,
                padding: "9px 18px",
                fontSize: 13,
                fontWeight: 800,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                boxShadow: "0 6px 20px rgba(249,115,22,.28)",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              <IoFlame size={14} /> Order Now
            </button>

            {/* Cart */}
            <button
              className="dhv-cart-btn"
              onClick={() => setOpen(true)}
              style={{
                position: "relative",
                background: "#fff",
                border: "1.5px solid rgba(249,115,22,.35)",
                borderRadius: 12,
                padding: "8px 16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 7,
                color: "#F97316",
                fontWeight: 700,
                fontSize: 13,
                fontFamily: "'DM Sans',sans-serif",
                boxShadow: "0 2px 12px rgba(249,115,22,.1)",
              }}
            >
              <RiShoppingCart2Fill size={17} />
              <span
                className="dhv-cart-label"
                style={{ color: "#374151", fontWeight: 700 }}
              >
                Cart
              </span>
              {count > 0 && (
                <span
                  className="dhv-badge"
                  style={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    background: "linear-gradient(135deg,#F97316,#ef4444)",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 20,
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 800,
                    boxShadow: "0 2px 8px rgba(249,115,22,.45)",
                    border: "2px solid #FFFAF5",
                  }}
                >
                  {count}
                </span>
              )}
            </button>

            {/* Hamburger — mobile only */}
            <button
              className="dhv-ham dhv-ham-wrap"
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#374151",
                padding: 4,
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ──────────────────────────────────────────── */}
        {menuOpen && (
          <div
            ref={mobileRef}
            className="dhv-mobile-panel"
            style={{
              background: "#fff",
              borderTop: "1px solid rgba(249,115,22,.1)",
              padding: "8px 20px 20px",
              boxShadow: "0 16px 48px rgba(249,115,22,.1)",
            }}
          >
            {/* Nav links */}
            <div style={{ marginBottom: 16 }}>
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `dhv-mob-link${isActive ? " active" : ""}`
                  }
                >
                  {label}
                  <span className="arrow">→</span>
                </NavLink>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                navigate("/menu");
                setMenuOpen(false);
              }}
              style={{
                width: "100%",
                background: "linear-gradient(135deg,#F97316,#ef4444)",
                color: "#fff",
                border: "none",
                borderRadius: 14,
                padding: "14px",
                fontSize: 14,
                fontWeight: 800,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                boxShadow: "0 8px 24px rgba(249,115,22,.3)",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              <IoFlame size={16} /> Order Now
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
