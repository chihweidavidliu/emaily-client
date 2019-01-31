import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUser } from "../actions";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={LandingPage} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" exact component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, { fetchUser: fetchUser }) (App);
