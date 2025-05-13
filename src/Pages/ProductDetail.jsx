import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ← أضف useNavigate
import coatImage from "../assests/svgs/Rectangle5.png";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate(); // ← استخدم useNavigate

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size");
      return;
    }

    const product = {
      name: "Purple fur coat",
      price: 2000,
      color: selectedColor,
      size: selectedSize,
    };

    console.log("Added to cart:", product);

    // ← الانتقال إلى صفحة Cart
    navigate("/cart");
  };

  return (
    <div className="product-detail" style={{ padding: "1.5rem" }}>
      <Link
        to="/Catogry"
        style={{
          display: "inline-block",
          fontSize: "50px",
          textDecoration: "none",
          color: "#6c534e",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        ←
      </Link>

      <h2 style={{ marginTop: "1rem" ,  fontSize: "50px" }}>Detail</h2>

      <img
        src={coatImage}
        alt="Purple fur coat"
        style={{
          width: "250px",
          height: "auto",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          display: "block",
          margin: "1rem auto",
        }}
      />

      <div className="product-info">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem 0",
          }}
        >
          <h3>BLACK JEANS</h3>
          <strong>2000$</strong>
        </div>

        <p style={{ color: "#555" }}>
          With the many designs of evening dresses and engagement dresses, it is
          natural for you to be confused about choosing a dress model.
        </p>

        <div style={{ marginTop: "1rem" }}>
          <strong>Colors</strong>
          <div
            style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}
          >
            {["#1d2aff", "#1a440f", "#000", "#e17c00"].map((color) => (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  backgroundColor: color,
                  border:
                    selectedColor === color ? "2px solid #000" : "1px solid #ccc",
                  cursor: "pointer",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <strong>Size</strong>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "50%",
                  border:
                    selectedSize === size ? "2px solid #000" : "1px solid #ccc",
                  backgroundColor:
                    selectedSize === size ? "#d8c6be" : "#fff",
                  cursor: "pointer",
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

     <div className='flex text-center justify-center'>
        <button
          onClick={handleAddToCart}
          style={{
            marginTop: "2rem",
            padding: "12px",
            backgroundColor: "#6c534e",
            color: "#fff",
            border: "none",
            borderRadius: "20px",
             fontSize: "25px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Add To Cart
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
