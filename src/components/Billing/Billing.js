import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';

const Billing = () => (
  <div className="mx-8">
    <Header />
  </div>
);

export default connect(null)(Billing);
