import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import MainPage from "@/components/pages/MainPage";
import LoginPage from "@/components/pages/LoginPage";
import RegisterPage from "@/components/pages/RegisterPage";
import Navbar from "@/components/component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
    // <Router>
    //   <div className="w-full h-screen flex flex-col justify-start items-center">
    //     <Routes>
    //       <Route path="/" element={<MainPage />} />
    //       <Route path="/login" element={<LoginPage />} />
    //       {/* <Route isLogin path="/login" element={<LoginPage />} /> */}
    //       <Route path="/register" element={<RegisterPage />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
