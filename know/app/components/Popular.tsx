import React from "react";
import Card from './Card'

const Popular = () => {
  return (
    <div className="screen mt-10 h-[50%]">
      <h1 className="text-center">Popular Section</h1>

      <div className="flex h-full text-black gap-10 pt-5">
        <Card color={"#029C54"}/>
      </div>
    </div>
  );
};

export default Popular;
