import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const { count, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "HOME", to: "/" },
    { label: "MENU", to: "/menu" },
    { label: "ABOUT US", to: "/about" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,253,248,.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1.5px solid rgba(34,197,94,.18)",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 12,
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
            <div
              style={{
                fontFamily: "'Playfair Display',serif",
                fontWeight: 800,
                fontSize: 14,
                color: "#1F2937",
                lineHeight: 1.1,
              }}
            >
              Dhanvi's
            </div>
            <div
              style={{
                fontSize: 10,
                color: "#16a34a",
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              EAT HEALTHY BITES
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div
          style={{ display: "flex", gap: 28, alignItems: "center" }}
          className="desktop-nav"
        >
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              style={({ isActive }) => ({
                fontSize: 13,
                fontWeight: 600,
                color: isActive ? "#22C55E" : "#374151",
                letterSpacing: 0.5,
                textDecoration: "none",
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Cart + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={() => setOpen(true)}
            style={{
              position: "relative",
              background: "transparent",
              border: "1.5px solid #22C55E",
              borderRadius: 10,
              padding: "6px 14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "#22C55E",
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            🛒 Cart
            {count > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -8,
                  right: -8,
                  background: "#F97316",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 20,
                  height: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {count}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: 22,
              color: "#374151",
              padding: 4,
            }}
            id="hamburger"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <style>{`
        @media(max-width:680px){
          .desktop-nav{display:none!important}
          #hamburger{display:flex!important}
        }
        .nav-link {
          border-bottom: 3px solid transparent;
          padding-bottom: 4px;
          transition: color .2s, border-color .2s;
        }
        .nav-link.active {
          color: #22C55E !important;
          border-bottom: 3px solid #22C55E;
        }
        .nav-link:hover {
          color: #22C55E !important;
        }
      `}</style>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            paddingBottom: 8,
            borderTop: "1px solid #e5e7eb",
          }}
        >
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                padding: "12px 4px",
                fontSize: 14,
                fontWeight: 600,
                color: isActive ? "#22C55E" : "#374151",
                cursor: "pointer",
                borderBottom: "1px solid #f3f4f6",
                textDecoration: "none",
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
