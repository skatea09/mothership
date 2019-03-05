import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as billingActions from '../redux/actions/billing';
import PropTypes from 'prop-types';

class Billing extends Component {
  componentDidMount() {
    const { fetchBilling } = this.props;
    fetchBilling();
  }
  render() {
    const { balance } = this.props;
    if (!balance) return (<div>Loading 0</div>)
    return (<div>At Billing Page</div>)
  }
}

Billing.propTypes = {
  fetchBilling: PropTypes.func.isRequired,
  balance: PropTypes.number,
}

export default connect((state) => ({
  balance: state.billing.balance,
}), billingActions)(Billing);
