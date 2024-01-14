import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="text-2xl font-medium py-5">know.</div>
      <div className="flex justify-between items-center">
        <div className="font-light text-sm">Search</div>
        

        <div className="ml-10">burger</div>
      </div>
    </header>
  );
};

export default Header;
