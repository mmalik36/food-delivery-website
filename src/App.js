import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
       
      </Routes>
    </BrowserRouter>
<Footer/>
    </div>
  );

}

export default App;
