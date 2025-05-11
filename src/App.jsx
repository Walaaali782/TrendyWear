
import Login from "./Pages/2-Auth/Login";
import Welcome from "./Pages/1-welcomepage/Welcome";
import Register from "./Pages/2-Auth/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forgetpass from "./Pages/2-Auth/Forgetpass";
import SendCode from "./Pages/2-Auth/SendCode";
import AllPage from "./Pages/3-Home/Home";

import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Shipping from "./pages/Shipping";










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
 
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />


          <Route path="/Home/" element={<AllPage />} /> 
  

          </Routes>
          </Router>
      
    </div>
  );
}

export default App;




