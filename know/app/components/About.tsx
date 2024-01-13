import React from "react";

const About = () => {
  return (
    <div className="flex mt-3">
      <div className="flex flex-col justify-between w-[60%]">
        <div className="text-4xl">
          know. - this is a numerous collection of various articles
        </div>
        <div className="text-2xl mt-16">Go to arcticles {">"}</div>
      </div>


      <div className="flex flex-col justify-between w-[40%]">
        <div className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum harum, voluptate in magnam dolorum reprehenderit modi culpa sed molestiae quam dolore neque non quae fuga eaque, consequuntur maiores omnis iusto.
        </div>
        <div className="flex">
          <div>google</div>
          <div>apple</div>
        </div>
      </div>
    </div>
  );
};

export default About;
