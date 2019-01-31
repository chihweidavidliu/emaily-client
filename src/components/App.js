import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import history from "../history";
import { fetchUser } from "../actions";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";
import "./App.css";

class App extends Component {
  async componentDidMount() {
    await this.props.fetchUser();
    // redirect to dashboard if logged in
    if(this.props.auth) {
      history.push("/surveys")
    }
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={LandingPage} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" exact component={SurveyNew} />
          </div>
        </Router>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, { fetchUser: fetchUser }) (App);
