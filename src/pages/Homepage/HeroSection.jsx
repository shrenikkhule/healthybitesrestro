import React, { useEffect, useRef } from "react";
import { restaurantInfo } from "../../data/MenuItem";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaClock, FaMotorcycle, FaPhoneAlt } from "react-icons/fa";
function HeroSection() {
  const typewriterRef = useRef(null);
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour < 22;
  // useEffect(() => {
  //   const words = [
  //     "Taste That Keeps You Coming Back!",
  //     "Soya Chaap That Wins Hearts!",
  //     "Delhi's Special Soya Chaap.",
  //   ];

  //   let i = 0;
  //   let j = 0;
  //   let currentWord = "";
  //   let isDeleting = false;

  //   function type() {
  //     currentWord = words[i];

  //     if (isDeleting) {
  //       typewriterRef.current.textContent = currentWord.substring(0, j - 1);
  //       j--;

  //       if (j === 0) {
  //         isDeleting = false;
  //         i++;

  //         if (i === words.length) {
  //           i = 0;
  //         }
  //       }
  //     } else {
  //       typewriterRef.current.textContent = currentWord.substring(0, j + 1);
  //       j++;

  //       if (j === currentWord.length) {
  //         isDeleting = true;
  //       }
  //     }

  //     setTimeout(type, 100);
  //   }

  //   type();
  // }, []);
  return (
    <>
      <section
        style={{
          background:
            "linear-gradient(135deg,#1a0a00 0%,#3d1100 30%,#1F2937 70%,#0d1117 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 20px 20px",
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
          <img
            src="/healthy.png"
            alt="Dhanvi's logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* <div className="w-full h-full flex justify-center items-center m-5 text-white">
            <h2 ref={typewriterRef} className="text-xl font-bold"></h2>
          </div> */}
          {/* <p
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,.5)",
            marginBottom: 32,
          }}
        >
          🌶 Freshly Spiced · 🧄 Aromatic Masalas · 🔥 Char-Grilled Perfection
        </p> */}

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 32,
            }}
          >
            <Link
              to={"/menu"}
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
              href=""
              className="animate-bounce focus:animate-none hover:animate-none inline-flex mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
            >
              <span className="ml-2">Explore Menu 🍽</span>
            </Link>
            <Link to={"/about"}>
              <button
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
            </Link>
          </div>
        </div>
      </section>
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
      {/* ── STATUS BAR ─────────────────────────────────────────────────── */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-5">
        <div
          className="relative z-10 -mt-7 sm:-mt-9 bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl
               border border-orange-200/60 shadow-[0_8px_40px_rgba(249,115,22,0.2)]
               px-4 py-4 sm:px-6 sm:py-5
               flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-3
               hover:shadow-[0_12px_50px_rgba(249,115,22,0.3)] transition-shadow duration-500"
        >
          {/* Open/Closed */}
          {/* <div className="flex items-center gap-2.5 order-1">
            <span className="relative flex h-3 w-3">
              {isOpen && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              )}
              <span
                className={`relative inline-flex rounded-full h-3 w-3 ${
                  isOpen ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </span>
            <span
              className={`font-bold text-sm sm:text-base ${
                isOpen ? "text-green-700" : "text-red-600"
              }`}
            >
              {isOpen ? "Open Now" : "Closed"}
            </span>
          </div> */}

          {/* Timing */}
          <div className="flex items-center gap-1.5 text-gray-600 text-xs sm:text-sm order-3 sm:order-2">
            <FaClock className="text-orange-500" />
            <span>
              {restaurantInfo.openTime} – {restaurantInfo.closeTime}
            </span>
          </div>

          {/* Free delivery */}
          <div className="flex items-center gap-1.5 text-green-600 font-semibold text-xs sm:text-sm order-4 sm:order-3">
            <FaMotorcycle className="text-green-500 animate-bounce" />
            <span>Free delivery above ₹299</span>
          </div>

          {/* Phone */}
          <a
            href={`tel:${restaurantInfo.phone}`}
            className="flex items-center gap-1.5 text-gray-600 hover:text-orange-600 text-xs sm:text-sm transition-colors order-5 sm:order-4"
          >
            <FaPhoneAlt className="text-orange-500" />
            <span>{restaurantInfo.phone}</span>
          </a>

          {/* WhatsApp button */}
          <a
            href={`https://wa.me/${restaurantInfo.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
              "Hi! I'd like to place an order 🍽",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="order-2 sm:order-5 group flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600
                 hover:from-green-600 hover:to-green-700 text-white font-bold text-xs sm:text-sm
                 rounded-xl px-4 py-2.5 sm:px-5 sm:py-2.5 shadow-md shadow-green-500/30
                 hover:shadow-lg hover:shadow-green-500/40 hover:scale-105 active:scale-95
                 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <FaWhatsapp className="text-base sm:text-lg group-hover:rotate-12 transition-transform duration-300" />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
