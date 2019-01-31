import React from "react";
import { connect } from "react-redux";
import "./CreditCounter.css";

const CreditCounter = (props) => {
  return (
    <li className="credits"><a href="/surveys">{`Credits: ${props.credits}`}</a></li>
  )
}

const mapStateToProps = (state) => {
  return {
    credits: state.auth.credits,
  }
};
export default connect(mapStateToProps) (CreditCounter);
