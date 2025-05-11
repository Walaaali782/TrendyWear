import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F3EDED] min-h-screen flex items-center justify-center px-4 py-12">
      <div className="text-center w-full max-w-md">
        <p className="py-10 text-[35px] sm:text-[40px] md:text-[70px] font-bold mnv">
          Welcome to Trendy Wear
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 text-[20px] rounded-3xl mb-4 bbbb"style={{fontSize:"25px", outline:"none"}}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 text-[20px] rounded-3xl mb-4 bbbb" style={{fontSize:"25px" , outline:"none"}}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 text-[20px] rounded-3xl mb-32 bbbb" style={{fontSize:"25px" , outline:"none"}}
          />

          <button
            className="bg-white text-black text-[20px] py-3 rounded-3xl" style={{fontSize:"25px" , outline:"none"}}
            onClick={() => navigate("/login/")}
            type="button"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
