import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="text-2xl py-5">know.</div>
      <div className="flex">
        <div className="mr-8">search</div>
        <div>burger</div>
      </div>
    </header>
  );
};

export default Header;
