import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/signupAction";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
class Logout extends Component {
  componentDidMount = () => {
    this.props.logout();
  };
  render() {
    return <Redirect to="/" />;
  }
}
const mapDispatchToProps = (dispacth) => {
  return {
    logout: () => dispacth(actions.logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
