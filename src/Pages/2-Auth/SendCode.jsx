import { useNavigate } from "react-router-dom";





function SendCode() {
    const navigate = useNavigate();
  return (






  <div className="bg-[#F3EDED] min-h-screen flex items-center justify-center px-4 py-2">
      <div className="text-center w-full max-w-md">
        <p className="pb-10 text-[35px] sm:text-[40px] md:text-[50px] font-bold mnv">
        Enter the code sent
        </p>


      <h3 style={{fontSize:"2rem",marginBottom:"1.5rem", color:'black'}}>Code</h3>
      <div style={{ display: "flex ",alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "3rem" }}>
   <input
    type="text"
    maxLength="1"
    style={{
      width: "60px",
      height: "80px",
      textAlign: "center",
      fontSize: "1.5rem",
      border: "2px solid #ccc",
      borderRadius: "8px",
      outline: "none",
    }}
  />
  <input
    type="text"
    maxLength="1"
    style={{
      width: "60px",
      height: "80px",
      textAlign: "center",
      fontSize: "1.5rem",
      border: "2px solid #ccc",
      borderRadius: "8px",
      outline: "none",
    }}
  />
  <input
    type="text"
    maxLength="1"
    style={{
      width: "60px",
      height: "80px",
      textAlign: "center",
      fontSize: "1.5rem",
      border: "2px solid #ccc",
      borderRadius: "8px",
      outline: "none",
    }}
  />
  <input
    type="text"
    maxLength="1"
    style={{
      width: "60px",
      height: "80px",
      textAlign: "center",
      fontSize: "1.5rem",
      border: "2px solid #ccc",
      borderRadius: "8px",
      outline: "none",
    }}
  />
</div>
        <form className="flex flex-col gap-4">
   
         

          <button
            className=" text-white text-[20px] py-3 rounded-3xl mt-48" style={{fontSize:"25px" , outline:"none" , backgroundColor:"#745F5A"}}
            onClick={() => navigate("/Home/")}
            type="button"
          >
            Verification
          </button>
        </form>
      </div>
    </div>












  )
}

export default SendCode