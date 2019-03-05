import React from "react";

const Header = () => (
  <header className="py-6 flex">
    <div className="flex flex-1 justify-center content-center">
      <div className="border-2 border-yellow-dark rounded self-center w-4 h-4" />
      <div className="text-yellow-dark pl-2 self-center">Get a Quote</div>
    </div>
    <div className="flex-1 text-center text-xl font-semibold">Billing</div>
    <div className="flex-1" />
  </header>
);

export default Header;
