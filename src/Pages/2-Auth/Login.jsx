
import {Link} from 'react-router-dom';

import { useNavigate } from "react-router-dom";



const Login  = () => {
    const navigate = useNavigate();
    return (
     <div className="bg-[#F3EDED] min-h-screen flex items-center justify-center px-4 py-2">
      <div className="text-center w-full max-w-md">
        <p className="pb-10 text-[35px] sm:text-[40px] md:text-[70px] font-bold mnv">
          Welcome  Back
        </p>

        <form className="flex flex-col gap-4">
           <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 text-[20px] rounded-3xl mb-6 bbbb " style={{fontSize:"28px" , outline:"none"}}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 text-[20px] rounded-3xl  bbbb  mb-4" style={{fontSize:"28px" , outline:"none"}}
          />
          <div className="text-center mb-3 cco "  style={{marginBottom:"8rem",fontSize:"25px" }} >
                <Link to="/forgetpassword" className="text-decoration-none"> Forget Password ?</Link>
            </div>

          <button
            className="bg-white text-black text-[20px] py-3 rounded-3xl" style={{fontSize:"25px" , outline:"none"}}
            onClick={() => navigate("/Home/")}
            type="button"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
      );
    }
    
    export default Login;