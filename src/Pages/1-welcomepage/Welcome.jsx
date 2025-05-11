import { useNavigate } from "react-router-dom";
import ad1 from "../../assests/svgs/ad1.svg"; 
import ad2 from "../../assests/svgs/ad2.svg"; 

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F3EDED] py-12 px-4">
      <div className="flex justify-center text-center">
        <div className="relative max-w-4xl w-full">
         
          <div className="flex flex-col justify-center items-center gap-8 mb-8">
            <img
              src={ad1}
              alt=""
              width="250"
              height="250"
              className="mb-2"
              style={{position:"relative",left:'-10%'}}
            />
            <img
              src={ad2}
              alt=""
              width="250"
              height="250"
              className="mb-2"
               style={{position:"relative",left:'10%'}}
            />
          </div>

          <p className="mnv py-10 text-[40px] sm:text-[50px] md:text-[70px] font-bold">
            Trendy Wear
          </p>

      
          <form className="flex flex-col items-center gap-4 text-[25px]">
            <button
              className="text-black bg-white py-4 px-8 rounded-full text-[30px] w-[80%] max-w-md mb-10"
              onClick={() => navigate(`/register/`)}
            >
              Create Account
            </button>
            <button
              className="text-white bg-black py-4 px-8 rounded-full text-[30px] w-[80%] max-w-md"
              onClick={() => navigate(`/login/`)}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
