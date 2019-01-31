import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <div id="landing" style={{ textAlign: "center" }}>
        <h1><i className="fas fa-paper-plane"></i> Emaily</h1>
      </div>
      <div className="landing-section teal lighten-2">
        <h3>Boost your business</h3>
        <div>
          <ul>
            <li><i className="fas fa-chart-line"></i> Harness the power of surveys to identify areas for growth</li>
            <li><i className="fas fa-bullhorn"></i> Contact your userbase in a click</li>
            <li><i className="fas fa-tasks"></i> Manage your surveys easily and effectively</li>
          </ul>
        </div>
      </div>
      <div className="landing-section image-2"></div>
      <div className="landing-section teal lighten-2">
        <h3>Simple, fair pricing. Security guaranteed</h3>
        <ul>
          <li><i className="fas fa-handshake"></i> Transparent and fair pricing</li>
          <li><i className="far fa-credit-card"></i> Credit-based system: pay for what you need</li>
          <li><i className="fab fa-cc-stripe"></i> Secure payment with Stripe</li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
