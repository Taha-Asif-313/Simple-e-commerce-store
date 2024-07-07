import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Header-Footer/NavBar.jsx";
import Shop from "./Pages/Shop";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
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
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
