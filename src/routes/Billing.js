import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as billingActions from '../redux/actions/billing';
import PropTypes from 'prop-types';
import BillingView from '../components/Billing';

class Billing extends Component {
  componentDidMount() {
    const { fetchBilling } = this.props;
    fetchBilling();
  }
  render() {
    const { balance } = this.props;
    if (!balance) return (<div>Loading</div>)
    return (<BillingView />)
  }
}

Billing.propTypes = {
  fetchBilling: PropTypes.func.isRequired,
  balance: PropTypes.number,
}

export default connect((state) => ({
  balance: state.billing.balance,
}), billingActions)(Billing);
