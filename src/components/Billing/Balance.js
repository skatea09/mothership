import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

const Balance = ({ balance, defaultPaymentMethod: { brand, last4 } }) => {
  const currencyBalance = currencyFormatter.format(balance);
  return (
    <div className="flex-1">
      <div className="text-lg font-semibold pb-2">{`Your Balance is: ${currencyBalance}`}</div>
      <div className="text-blue-dark text-sm font-semibold">{`Payment Method - ${brand} *${last4}`}</div>
    </div>
  );
};

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  defaultPaymentMethod: PropTypes.object.isRequired
};

export default connect(state => ({
  balance: state.billing.balance,
  defaultPaymentMethod:
    state.billing.paymentMethods.bankAccounts.find(bank => bank.isDefault) ||
    state.billing.paymentMethods.cards.find(card => card.isDefault)
}))(Balance);
