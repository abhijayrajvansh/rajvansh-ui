import React from "react";
import Header from "./Header";
import About from "./About";
import Popular from "./Popular";
import Footer from "./Footer";

const Canvas = () => {
  return (
    <div className="h-[100vh] w-full px-[5rem] bg-[#1A1C1A] text-[#FDFEFD]">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      <Header />
      <About />
      <Popular />
      <Footer />
    </div>
  );
};

export default Canvas;
