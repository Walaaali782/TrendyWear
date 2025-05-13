
import Login from "./Pages/2-Auth/Login";
import Welcome from "./Pages/1-welcomepage/Welcome";
import Register from "./Pages/2-Auth/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forgetpass from "./Pages/2-Auth/Forgetpass";
import SendCode from "./Pages/2-Auth/SendCode";
import AllPage from "./Pages/3-Home/Home";




import Catogry from "./Pages/Catogry";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import Shipping from "./Pages/Shipping";
import OrderSuccess from "./Pages/OrderSuccess";
import Checkout from "./Pages/Checkout";
import Rev from "./Pages/Rev";
import Block from "./Pages/Block";








function App() {
  return (
    <div id="up" className="">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register/" element={<Register />} /> 
          <Route path="/login/" element={<Login />} /> 
          <Route path="/forgetpassword/" element={<Forgetpass />} /> 
          <Route path="/sendcode/" element={<SendCode />} /> 



          <Route path="/Home/" element={<AllPage />} /> 
  

        <Route path="/Catogry" element={<Catogry />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />


<Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/checkout" element={<Checkout />} />

<Route path="/Rev/" element={<Rev />} /> 
            <Route path="/Block/" element={<Block />} />

          </Routes>
          </Router>
      
    </div>
  );
}

export default App;




