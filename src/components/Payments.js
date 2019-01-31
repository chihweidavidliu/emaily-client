import React, { Component } from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import "./Payments.css";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="£5 for 5 email credits"
        amount={500}
        currency="GBP"
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      >
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions) (Payments);
