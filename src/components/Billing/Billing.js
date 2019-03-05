import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./Header";
import Balance from './Balance';
import Search from './Search';

const Billing = () => (
  <div className="mx-8">
    <Header />
    <div className="flex">
      <Balance />
      <Search />
    </div>
  </div>
);

export default connect(null)(Billing);
