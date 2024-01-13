import React from "react";

const Popular = () => {
  return (
    <div className="screen mt-16 h-[40%] border-2">
      <h1 className="text-center">Popular Section</h1>

      <div className="flex h-full">
        <div className="border-2 border-red-500 h-[85%] w-full">card</div>
        <div className="border-2 border-yellow-500 h-[85%] w-full">card</div>
        <div className="border-2 border-green-500 h-[85%] w-full">card</div>
        <div className="border-2 border-blue-500 h-[85%] w-full">card</div>
      </div>
    </div>
  );
};

export default Popular;
