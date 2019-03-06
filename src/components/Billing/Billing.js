import React from "react";
import Header from "./Header";
import Balance from './Balance';
import Search from './Search';
import List from './List';

const Billing = () => (
  <div className="mx-8">
    <Header />
    <div className="flex">
      <Balance />
      <Search />
    </div>
    <List />
  </div>
);

export default Billing;
