import React from "react";
import Header from "./Header";
import About from "./About";
import Popular from "./Popular";
import Footer from "./Footer";

const Canvas = () => {
  return (
    <div className="aspect-video w-full px-[5rem] bg-[#1A1C1A] text-[#FDFEFD]">
      <Header />
      <About />
      <Popular />
      <Footer />
    </div>
  );
};

export default Canvas;
