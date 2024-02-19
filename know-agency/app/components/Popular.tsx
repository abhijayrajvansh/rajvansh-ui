import React from "react";
import Card from './Card'

const Popular = () => {
  return (
    <div className="screen mt-10 h-[50%]">
      <h1 className="text-center text-xl">POPULAR SECTION</h1>
      <div className="flex h-full text-black gap-10 pt-5">
        <Card bgColor={"bg-[#029C54]"}/>
        <Card bgColor={"bg-[#DAC6FB]"}/>
        <Card bgColor={"bg-[#FF6F4F]"}/>
        <Card bgColor={"bg-[#FFFFFF]"}/>
      </div>
    </div>
  );
};

export default Popular;
