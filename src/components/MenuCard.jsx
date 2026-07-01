import { useState } from "react";
import { useCart } from "../context/CartContext";
export function MenuCard({ item, delay = 0 }) {
  
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };
  return (
    <div
      className="card-hover fade-up"
      style={{
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        border: "1.5px solid rgba(34,197,94,.15)",
        boxShadow: "0 2px 16px rgba(34,197,94,.08)",
        animationDelay: `${delay}ms`,
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg,#DCFCE7,#FFF7ED)",
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 52,
          position: "relative",
        }}
      >
        {item.img}
        {item.tag && (
          <span
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              background:
                item.tag === "Bestseller"
                  ? "#22C55E"
                  : item.tag === "Chef's Pick"
                    ? "#F97316"
                    : "#FACC15",
              color:
                item.tag === "Chef's Pick" || item.tag === "Bestseller"
                  ? "#fff"
                  : "#78350f",
              fontSize: 10,
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: 20,
            }}
          >
            {item.tag}
          </span>
        )}
        <span
          className="tag-veg"
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          🟢 VEG
        </span>
      </div>
      <div style={{ padding: "14px 16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 4,
          }}
        >
          <h3
            style={{
              fontWeight: 700,
              fontSize: 15,
              color: "#1F2937",
              lineHeight: 1.3,
              flex: 1,
              paddingRight: 8,
            }}
          >
            {item.name}
          </h3>
          <span
            style={{
              fontWeight: 800,
              fontSize: 16,
              color: "#22C55E",
              flexShrink: 0,
            }}
          >
            ₹{item.price}
          </span>
        </div>
        <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 2 }}>
          {item.category}
        </p>
        <p
          style={{
            fontSize: 12,
            color: "#6b7280",
            lineHeight: 1.5,
            marginBottom: 10,
            height: 36,
            overflow: "hidden",
          }}
        >
          {item.desc}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 12, color: "#374151" }}>
            ⭐ {item.rating}{" "}
            <span style={{ color: "#9ca3af" }}>({item.reviews})</span>
          </span>
          <button
            onClick={handleAdd}
            className={added ? "btn-orange" : "btn-primary"}
            style={{
              padding: "7px 14px",
              borderRadius: 10,
              fontSize: 12,
              transition: "all .2s",
            }}
          >
            {added ? "✓ Added!" : "+ Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
