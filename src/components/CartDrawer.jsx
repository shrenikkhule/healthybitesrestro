import { useCart } from "../context/CartContext";
export function CartDrawer() {
  const { items, removeItem, updateQty, total, open, setOpen } = useCart();
  if (!open) return null;
  return (
    <div
      className="cart-overlay"
      onClick={(e) => {
        if (e.target.className.includes("cart-overlay")) setOpen(false);
      }}
    >
      <div
        className="cart-drawer"
        style={{ padding: 0, display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            padding: "20px 20px 16px",
            borderBottom: "1.5px solid #e5e7eb",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontWeight: 800,
                fontSize: 20,
                color: "#1F2937",
              }}
            >
              Your Cart 🛒
            </h2>
            <p style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>
              {items.length} item{items.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "#f3f4f6",
              border: "none",
              borderRadius: 8,
              width: 32,
              height: 32,
              cursor: "pointer",
              fontSize: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "12px 20px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🛒</div>
              <p style={{ color: "#9ca3af", fontSize: 14 }}>
                Your cart is empty
              </p>
              <p style={{ color: "#d1d5db", fontSize: 13, marginTop: 4 }}>
                Add items from the menu
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 0",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "#DCFCE7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    flexShrink: 0,
                  }}
                >
                  {item.img}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#1F2937",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#22C55E",
                      fontWeight: 700,
                    }}
                  >
                    ₹{item.price}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <button
                    className="qty-btn"
                    onClick={() => updateQty(item.id, -1)}
                  >
                    −
                  </button>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      minWidth: 16,
                      textAlign: "center",
                    }}
                  >
                    {item.qty}
                  </span>
                  <button
                    className="qty-btn"
                    onClick={() => updateQty(item.id, 1)}
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: "#ef4444",
                      fontSize: 16,
                      padding: 4,
                    }}
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div
            style={{
              padding: "16px 20px",
              borderTop: "1.5px solid #e5e7eb",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <span style={{ color: "#6b7280", fontSize: 13 }}>Subtotal</span>
              <span style={{ fontWeight: 600, fontSize: 13 }}>₹{total}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <span style={{ color: "#6b7280", fontSize: 13 }}>Delivery</span>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 13,
                  color: "#22C55E",
                }}
              >
                FREE
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 16,
                paddingTop: 12,
                borderTop: "1.5px solid #e5e7eb",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 16 }}>Total</span>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: 18,
                  color: "#22C55E",
                }}
              >
                ₹{total}
              </span>
            </div>
            <button
              className="btn-primary"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: 12,
                fontSize: 15,
                letterSpacing: 0.3,
              }}
            >
              Proceed to Checkout →
            </button>
            <p
              style={{
                textAlign: "center",
                fontSize: 11,
                color: "#9ca3af",
                marginTop: 8,
              }}
            >
              🔒 Secure checkout · COD available
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
