

import { useNavigate } from "react-router-dom";


const Forgetpass  = () => {
  const navigate = useNavigate();

    return (


  <div className="bg-[#F3EDED] min-h-screen flex items-center justify-center px-4 py-2">
      <div className="text-center w-full max-w-md">
        <p className="pb-10 text-[35px] sm:text-[40px] md:text-[50px] font-bold mnv">
        Forget password ?
        </p>

        <form className="flex flex-col gap-4">
           <label className="block ext-lg  pb-4 text-left pl-3" style={{fontSize:"35px", color:"rgb(0 0 0)"}}> E-mail</label>
           <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 text-[15px] rounded-3xl mb-48 bbbb " style={{fontSize:"25px" , outline:"none"}}
          />
        
         

          <button
            className=" text-white text-[20px] py-3 rounded-3xl" style={{fontSize:"25px" , outline:"none" , backgroundColor:"#745F5A"}}
            onClick={() => navigate("/sendcode/")}
            type="button"
          >
            Send Code
          </button>
        </form>
      </div>
    </div>













      );
    }
    
    export default Forgetpass;