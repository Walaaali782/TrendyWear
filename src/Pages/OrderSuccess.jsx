import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className=" text-center py-5 mt-52">
      <h4 className="fw-bold mb-4 " style={{fontSize:"30px"}}>ORDER SUCCESS</h4>

      <div className="mb-4">
        <div style={{
          width: 80,
          height: 80,
          margin: "0 auto",
          background: "#5A4B41",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <span className="text-white fs-3">✔️</span>
        </div>
      </div>

      <h5 className="fw-bold"  style={{fontSize:"25px"}}>Order Successful!</h5>
      <p style={{fontSize:"30px"}}>Congratulations you have<br />Successfully placed your order</p>

    <div className="flex flex-col items-center gap-4 mt-20">
  <button 
    className="btn btn-outline-dark py-2 px-4"
    onClick={() => navigate("/")}
    style={{ 
      fontSize: "20px", 
      border: "2px solid #745F5A", 
      color: "#745F5A",
      backgroundColor: "transparent",
      width: "fit-content"
    }}
  >
    Go To Home
  </button>

  <button 
    className="btn text-white py-2 px-4 rounded-3xl"
    onClick={() => navigate("/Rev/")}
    style={{ 
      backgroundColor: "#745F5A",
      fontSize: "20px",
      border: "none",
      width: "fit-content"
    }}
  >
    Continue Shopping
  </button>
</div>


    </div>
  );
}