import React from "react";
import './index.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Shop from './Pages/Shop.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Blog from './Pages/Blog.jsx';
import Cart from './Pages/Cart.jsx';
import LogIn from './Pages/Login.jsx';
import Product from './Pages/Product.jsx';
import PlaceOrder from './Pages/PlaceOrder.jsx';
import Footer from './Components/Footer.jsx'
import SerachBar from "./Components/SerachBar.jsx";
import Orders from "./Pages/Orders.jsx";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from "./Pages/Verify.jsx";

export const BackendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div className="relative">
      <ToastContainer />
      <Navbar />
      <SerachBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Product/:ProductId" element={<Product />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/Orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div> 
  )
}

export default App
