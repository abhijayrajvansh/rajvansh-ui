import React from "react";

interface CardProps {
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ bgColor }) => {
  return (
    <div className={`${bgColor} h-[85%] w-full rounded-xl p-5 flex flex-col justify-between`}>
      <div className="font-bold">SVG</div>
      <div className="desContainer flex justify-between items-end">
        <div>
          <div className="font-medium">Anatomy</div>
          <div className="font-extralight">256 topics</div>
        </div>
        <div className="font-extralight text-3xl border border-black px-3 py-0.5 rounded-lg">
          {">"}
        </div>
      </div>
    </div>
  );
};

export default Card;
