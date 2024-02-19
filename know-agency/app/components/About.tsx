import React from "react";
import AppStoreButton from "./icons/AppStoreButton";
import PlayStoreButton from './icons/PlayStoreButton'

const About:React.FC = () => {
  return (
    <div className="flex mt-8">
      <div className="flex flex-col justify-between w-[60%]">
        <div className="text-5xl font-semibold">
          know. - this is a numerous collection of various articles
        </div>
        <h3 className="text-xl mt-16 border-b-[1px] w-max">Go to arcticles {">"}</h3>
      </div>

      <div className="flex flex-col justify-between w-[40%]">
        <div className="font-light">
          <p>Electronic scientific library of open access. The site catalog is regularly overgrown with texts of articles from various scientific publications. Grouped by journals and headings. Designed by Abhijay Rajvansh</p>
        </div>
        <div className="flex">
          <div>
            <AppStoreButton />
          </div>
          <div className="ml-5">
            <PlayStoreButton />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
