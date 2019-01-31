import React from "react";
import { connect } from "react-redux";
import "./CreditCounter.css";
import { Link } from "react-router-dom";

const CreditCounter = (props) => {
  return (
    <li className="credits"><Link to="/surveys">{`Credits: ${props.credits}`}</Link></li>
  )
}

const mapStateToProps = (state) => {
  return {
    credits: state.auth.credits,
  }
};
export default connect(mapStateToProps) (CreditCounter);
