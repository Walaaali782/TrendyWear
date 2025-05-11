import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const [selected, setSelected] = useState("Home");
  const navigate = useNavigate();

  const addresses = [
    { label: "Home", address: "House-23, Road-03, Banan,Duki", isDefault: true },
    { label: "office", address: "House-23, Road-03, Banan,Duki" },
    { label: "parents House", address: "House-23, Road-03, Banan,Duki" },
  ];

  return (
    <div className="shipping" style={{ padding: "1.5rem", position: "relative" }}>
      {/* سهم الرجوع */}
      <button
        onClick={() => navigate("/cart")}
        style={{
          position: "absolute",
          left: "1rem",
          top: "1rem",
          background: "none",
          border: "none",
          fontSize: "1.8rem",
          cursor: "pointer",
          color: "#6c534e",
        }}
        aria-label="Back to Cart"
      >
        ←
      </button>

      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#6c534e" }}>
        SHIPPING
      </h2>

      {addresses.map((item) => (
        <div
          key={item.label}
          onClick={() => setSelected(item.label)}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            borderRadius: "10px",
            marginBottom: "1rem",
            backgroundColor: selected === item.label ? "#f5f5f5" : "#fff",
            cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <strong>{item.label}</strong>{" "}
              {item.isDefault && <span style={{ color: "#888" }}>Default</span>}
              <p style={{ margin: "5px 0", color: "#555" }}>{item.address}</p>
            </div>
            <input type="radio" checked={selected === item.label} readOnly />
          </div>
        </div>
      ))}

      <button
        style={{
          padding: "12px",
          width: "100%",
          backgroundColor: "#6c534e",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
          fontWeight: "bold",
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Shipping;
