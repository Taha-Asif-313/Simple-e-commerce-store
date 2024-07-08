import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Header-Footer/NavBar.jsx";
import Shop from "./Pages/Shop";
import Products from "./Pages/Products.jsx";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Footer from "./Components/Header-Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <div className="h-screen w-full">
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
