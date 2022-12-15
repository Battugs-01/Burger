import React, { Component } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import * as actions from "../../redux/actions/loginAction";
// import * as actions from "../../redux/actions/signupAction";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  changePas1 = (event) => {
    this.setState({ password: event.target.value });
  };

  login = () => {
    // alert("login daragdlaa " + this.state.password);
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className={css.Login}>
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="Имэйл хаяг"
        />
        <input
          onChange={this.changePas1}
          type="password"
          placeholder="Нууц үг"
        />

        {this.props.userId && <Redirect to="/" />}
        {this.props.fireBaseError && (
          <div style={{ color: "red" }}>{this.props.fireBaseError}</div>
        )}

        {this.props.logginIn && <Spinner />}
        <Button text="ЛОГИН" btnType="Success" daragdsan={this.login} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.loginUser(email, password)),
  };
};

const mapStateToProps = (state) => {
  return {
    logginIn: state.signupReducer.logginIn,
    fireBaseError: state.signupReducer.fireBaseError,
    userId: state.signupReducer.userId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
