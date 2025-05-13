import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import cottonOnTImage from "../assests/svgs/Rectangle2.png";
import dieselBagImage from "../assests/svgs/Rectangle5.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Cotton on T", price: 200, quantity: 1, image: cottonOnTImage },
    { id: 2, name: "Diesel Black Bag", price: 41, quantity: 1, image: dieselBagImage },
  ]);

  const navigate = useNavigate();

  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate("/shipping");
  };

  return (
    <div className="cart" style={{ padding: "1.5rem" }}>
      <button
        onClick={() => navigate("/product")}
        style={{
          position: "absolute",
          left: "1rem",
          top: "rem",
          background: "none",
          border: "none",
          fontSize: "3rem",
          cursor: "pointer",
          color: "#6c534e",
          fontWeight: "bold",
          marginBottom:"20px"
        }}
        aria-label="Back to Products"
      >
        ←
      </button>

      <h2 style={{ textAlign: "center" ,   fontSize: "3rem"}}>MY CART</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
            justifyContent: "space-between",
            marginTop:"40px"
          }}
        >
          <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                borderRadius: "10px",
                marginRight: "1rem",
                width: "110px",
                height: "110px",
                objectFit: "cover",
              }}
            />
            <div>
              <h4>{item.name}</h4>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
          <div>
            <button onClick={() => decrement(item.id)}>-</button>
            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
            <button onClick={() => increment(item.id)}>+</button>
          </div>
          <button onClick={() => removeItem(item.id)} style={{ marginLeft: "1rem" }}>
            🗑️
          </button>
        </div>
      ))}

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p>
          <strong>Sub Total:</strong> ${total.toFixed(2)}
        </p>
        <p>
          <strong>Delivery charge:</strong> free
        </p>
        <hr style={{ border: "1px solid #ddd", margin: "10px 0" }} />
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#6c534e",
          }}
        >
          <strong>Total:</strong> ${total.toFixed(2)}
        </p>
      </div>

    



      <div className='flex text-center justify-center'>
        <button
         onClick={handleCheckout}
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
      Proceed to Checkout
        </button>
        </div>

        
    </div>
  );
};

export default Cart;
