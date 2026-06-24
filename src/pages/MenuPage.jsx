import { useState } from "react";
import { MenuCard } from "../components/MenuCard";
import { categories, menuItems } from "../data/MenuItem";

// ─── MENU PAGE ────────────────────────────────────────────────────────────────
export function MenuPage() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = menuItems.filter((m) => {
    const matchCat = cat === "All" || m.category === cat;
    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 20px" }}>
      <div style={{ marginBottom: 28 }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#22C55E",
            letterSpacing: 1,
          }}
        >
          OUR MENU
        </span>
        <h2
          className="section-title"
          style={{ fontSize: 28, color: "#1F2937", marginTop: 4 }}
        >
          What's Cooking Today 🍽
        </h2>
        <p style={{ fontSize: 14, color: "#6b7280", marginTop: 6 }}>
          All items are 100% vegetarian · Fresh daily
        </p>
      </div>
      <div style={{ position: "relative", marginBottom: 20, maxWidth: 480 }}>
        <span
          style={{
            position: "absolute",
            left: 14,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 18,
          }}
        >
          🔍
        </span>
        <input
          type="text"
          placeholder="Search menu items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 14px 12px 44px",
            borderRadius: 14,
            border: "1.5px solid rgba(34,197,94,.25)",
            background: "#fff",
            fontSize: 14,
            color: "#1F2937",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          marginBottom: 28,
        }}
      >
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            style={{
              padding: "8px 16px",
              borderRadius: 30,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              border: "1.5px solid",
              borderColor: cat === c ? "#22C55E" : "rgba(34,197,94,.2)",
              background: cat === c ? "#22C55E" : "#fff",
              color: cat === c ? "#fff" : "#374151",
              transition: "all .15s",
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 16 }}>
        {filtered.length} item{filtered.length !== 1 ? "s" : ""} found
      </p>
      {filtered.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
            gap: 20,
          }}
        >
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} delay={i * 50} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
          <p style={{ color: "#6b7280", fontSize: 15, fontWeight: 600 }}>
            No items found
          </p>
          <p style={{ color: "#9ca3af", fontSize: 13, marginTop: 4 }}>
            Try a different search or category
          </p>
        </div>
      )}
    </div>
  );
}
