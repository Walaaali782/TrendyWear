import { useNavigate } from "react-router-dom";

const ProductCard = ({ image, title, price }) => (


  <div className="rounded-xl bg-[#f7ebeb] p-2 text-center shadow-md">
    <div className="relative">
      <img src={image} alt={title} className="rounded-lg w-full h-[300px] object-cover" />
      <div className="absolute top-2 right-2 bg-white rounded-full p-2">
        <span role="img" aria-label="heart">🤍</span>
      </div>
    </div>
    <p className="mt-2 ">{title}</p>
    <p className="text-black font-bold text-lg">${price}</p>
  </div>
);

const ProductGrid = () => {
  
    const navigate = useNavigate();
  const products = [
    { image: "https://i.pinimg.com/736x/e1/b2/a7/e1b2a789f42285c8afce26b13d3578d6.jpg", title: "levis loose Cargo pants", price: "90.00" },
    { image: "https://i.pinimg.com/736x/c0/23/11/c02311c35d1f584689788fff953ce240.jpg", title: "levis loose Cargo pants", price: "90.00" },
    { image: "https://i.pinimg.com/736x/09/83/cd/0983cd99d046d52529e4057e7c74bb52.jpg", title: "levis loose Cargo pants", price: "90.00" },
    { image: "https://i.pinimg.com/736x/72/01/f8/7201f8c0745f2fa3eb0c8f64ecd8752c.jpg", title: "levis loose Cargo pants", price: "50.00" },
     { image: "https://i.pinimg.com/736x/84/04/c1/8404c13d230b858927350c12513e3ea4.jpg", title: "levis loose Cargo pants", price: "90.00" },
    { image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQW2zPPp5AkAWQBRFQZeHsHeMwR8ajdaV9XnkPZiVaaWN_Er6ShGFfQ2edXYwKFqibMB1lyCMN4e3WNLup2Cyy2OBIxpgUIHupBnYLO6-xNSL9hAumnMcIpc6TnV25QEnSke5TjfZK&usqp=CAc", title: "levis loose Cargo pants", price: "90.00" },
    { image: "https://i.pinimg.com/736x/bb/d4/ef/bbd4efb7b73cf652279e5016bd1221b9.jpg", title: "levis loose Cargo pants", price: "90.00" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcHhk48W5eCaKC1RexHNi7nnp-6YF_VyML6g&s", title: "levis loose Cargo pants", price: "50.00" },
  ];

  return (
    <div className="bg-[#faefef] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>



      <div className="flex justify-center mt-12" >
        <button className="bg-[#594545] text-white text-lg px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#3e3333] transition" 
         onClick={() => navigate(`/Catogry/`)}
        style={{fontSize:'30px'}}>
            
          
          <span>New Collection</span>
          <span className="text-3xl ml-6">→</span>
           
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;

