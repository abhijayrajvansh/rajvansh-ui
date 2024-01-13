import React from "react";

interface CardProps {
  color: string;
}

const Card: React.FC<CardProps> = ({ color }) => {
  return (
    <div className={`bg-[${color}] h-[85%] w-full rounded-xl p-5`}>
      <div className="font-bold">SVG</div>
      <div>description</div>
    </div>
  );
};

export default Card;
