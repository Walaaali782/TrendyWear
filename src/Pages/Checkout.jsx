import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
  const navigate = useNavigate();
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState("");

  const handleAddNewAddress = () => {
    // Logic to save new address or show a form
    setIsAddingAddress(true);
  };

  const handleSaveAddress = () => {
    // Logic to save the new address
    setIsAddingAddress(false);
    setNewAddress("");  // Optionally reset the input after saving
  };

  return (
    <div className="pl-20 pr-20" >
      {/* Back Arrow Button */}
     
      <button
        onClick={() => navigate("/shipping")}
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

      <h4 className="fw-bold mb-4 text-center" style={{   fontSize: "3rem"}}>CHECKOUT</h4>

      {/* Payment method */}
      <div className="mb-4">
        <h6 className="fw-bold">Payment method</h6>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="payment" id="gpay" />
          <label className="form-check-label" htmlFor="gpay">Gpay</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="payment" id="card" />
          <label className="form-check-label" htmlFor="card">Debit / Credit Card</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="payment" id="paypal" />
          <label className="form-check-label" htmlFor="paypal">Paypal</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="payment" id="bank" />
          <label className="form-check-label" htmlFor="bank">Bank Transfer</label>
        </div>
      </div>

      {/* Delivery address */}
      <h6 className="fw-bold">Delivery Address</h6>
      <div className="mb-2 d-flex gap-2">
        <div className="border rounded bg-dark text-white p-2 flex-grow-1">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="address" id="addr1" defaultChecked />
            <label className="form-check-label" htmlFor="addr1">
              Selina K,<br />21/3, Ragava Street,<br />Kodaikanal - 655 789
            </label>
          </div>
        </div>
      </div>

      <p 
  className="text-primary mb-4" 
  onClick={handleAddNewAddress} 
  style={{ cursor: 'pointer' }}
>
  + Add a New Address
</p>


      {isAddingAddress && (
        <div className="mb-4">
          <label htmlFor="newAddress" className="form-label">New Address</label>
          <textarea 
            id="newAddress" 
            className="form-control mb-2" 
            rows="3" 
            value={newAddress} 
            onChange={(e) => setNewAddress(e.target.value)}
          />
          <button 
            className="btn btn-secondary w-100" 
            onClick={handleSaveAddress}
          >
            Save Address
          </button>
        </div>
      )}

      <div className="d-flex align-items-center justify-content-between mb-2">
        <small className="text-muted">Estimated delivery:</small>
        <small className="fw-bold">25 March 2024</small>
      </div>

      <div className="mb-4 p-3 rounded d-flex justify-content-between" style={{ backgroundColor: "#F3EDED", color: "#745F5A" }}>
        <span>Amount Payable</span>
        <span className="fw-bold">$241.00</span>
      </div>



 <div className='flex text-center justify-center pb-40'>
      <button
         onClick={() => navigate('/order-success')} 
        style={{
          padding: "12px",
          backgroundColor: "#6c534e",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
          fontWeight: "bold",
           fontSize: "2rem"
        }}
      >
        Pay and Complete Order
      </button>
      </div>

    </div>
  );
}