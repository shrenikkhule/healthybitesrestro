import React, { useEffect, useRef } from "react";
import { restaurantInfo } from "../../data/MenuItem";
import { Link } from "react-router-dom";

function HeroSection() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const words = [
      "Taste That Keeps You Coming Back!",
      "Soya Chaap That Wins Hearts!",
      "Delhi's Special Soya Chaap - Pure Veg",
    ];

    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    function type() {
      currentWord = words[i];

      if (isDeleting) {
        typewriterRef.current.textContent = currentWord.substring(0, j - 1);
        j--;

        if (j === 0) {
          isDeleting = false;
          i++;

          if (i === words.length) {
            i = 0;
          }
        }
      } else {
        typewriterRef.current.textContent = currentWord.substring(0, j + 1);
        j++;

        if (j === currentWord.length) {
          isDeleting = true;
        }
      }

      setTimeout(type, 100);
    }

    type();
  }, []);
  return (
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

        <div className="w-full h-full flex justify-center items-center mb-10 text-white">
          <h2 ref={typewriterRef} className="text-xl font-bold"></h2>
        </div>
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
  );
}

export default HeroSection;
