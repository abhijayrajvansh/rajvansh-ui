import React from "react";
import SearchButton from "./icons/SearchButton";
import BurgerMenu from "./icons/BurgerMenu";


const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="text-2xl font-medium py-5">know.</div>
      <div className="flex justify-between items-center">
        <div className="font-light text-sm flex items-center border-[1px] rounded-lg py-1.5 px-[2rem]">Search
          <SearchButton />
        </div>
        <div className="ml-10">
          <BurgerMenu />
        </div>
      </div>
    
    </header>
  );
};

export default Header;
