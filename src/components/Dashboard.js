import React, { Component } from "react";
import requireAuth from "./requireAuth";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <p>Dashboard</p>
      </div>
    )
  }
};

export default requireAuth(Dashboard);
