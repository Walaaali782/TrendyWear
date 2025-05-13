import { Link } from 'react-router-dom';
import img1 from '../assests/svgs/Rectangle3.png';
import img2 from '../assests/svgs/Rectangle4.png';
import img3 from '../assests/svgs/Rectangle5.png';
import img5 from '../assests/svgs/Rectangle2.png';
import img6 from '../assests/svgs/Rectangle1.png';
import img4 from '../assests/svgs/image1.png';

export default function Catogry() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="bg-gray-100 min-h-screen p-4 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="rounded-full w-10 h-10"
          />
          <div>
            <h2 className="text-sm font-bold mb-0">Hi jana!</h2>
            <p className="text-gray-500 text-xs">bese</p>
          </div>
        </div>
        <div className="bg-black text-white flex justify-center items-center rounded-full w-8 h-8 text-sm">
          👤
        </div>
      </div>

      {/* Search */}
      <div className='flex text-center justify-center'>
   <input
        type="text"
        className="w-1/3 px-4 py-2 mb-6 rounded-lg border border-gray-300 "
        placeholder="Search for product"
        style={{outline:"none"}}
      />
 
      </div>
   
      {/* Categories */}
      <div className="flex flex-wrap gap-3 justify-around mb-6">
        {['ALL', 'Dresses', 'Tops', 'Shorts', 'Bantlon'].map((cat) => (
          <button
            key={cat}
            className={`px-8 py-5 text-sm rounded-full transition-all ${
              cat === 'Bantlon'
                ? 'bg-black text-white'
                : 'border border-gray-400 text-gray-900 hover:bg-gray-200'
            }`}
             style={{ fontSize:"25px" ,marginBottom:"30px"}}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <Link key={index} to={`/product`} className="flex justify-center">
            <div className="bg-white rounded-xl shadow-md overflow-hidden w-60 h-[350px] flex flex-col justify-between p-2">
              <img
                src={img}
                alt={`product-${index}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
