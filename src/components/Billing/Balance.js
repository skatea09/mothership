import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import { usCurrency } from "../../utils/currency";

const Balance = ({ balance, paymentMethods }) => {
  const currencyBalance = usCurrency(balance);
  const allPaymentMethods = paymentMethods.bankAccounts.concat(
    paymentMethods.cards
  );
  const defaultPaymentMethod = allPaymentMethods.find(bank => bank.isDefault);
  const { brand, last4 } = defaultPaymentMethod;
  return (
    <div className="flex-1">
      <div className="text-lg font-semibold pb-2">{`Your Balance is: ${currencyBalance}`}</div>
      <div className="flex">
        <div className="text-blue-dark text-sm font-semibold">{`Payment Method - ${brand} *${last4}`}</div>
        <Popup
          className="rounded-lg bg-black"
          contentStyle={{ backgroundColor: "#484B54", width: 'auto' }}
          arrowStyle={{ backgroundColor: "#484B54" }}
          trigger={
            <i className="fas fa-caret-down text-blue-darkest px-2 cursor-pointer" />
          }
          position="bottom left"
          on="hover"
        >
          <div className="rounded text-grey-light m-4">
            {allPaymentMethods
              .filter(method => !method.isDefault)
              .map(({brand, last4 } )=> <div className="text-sm font-medium mb-2 ml-8">{`${brand} *${last4}`}</div>)}
              <div className="flex mt-6">
                <div className="w-4 h-4 border-grey-light border-2 rounded-full mr-4"/>
                <div className="text-white text-sm font-semibold">Add Payment Source</div>
              </div>
          </div>
        </Popup>
      </div>
    </div>
  );
};

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  defaultPaymentMethod: PropTypes.object.isRequired
};

export default connect(state => ({
  balance: state.billing.balance,
  paymentMethods: state.billing.paymentMethods
}))(Balance);
