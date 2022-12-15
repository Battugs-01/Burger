import React, { Component } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import * as actions from "../../redux/actions/signupAction";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
class SignUp extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    error: "",
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  changePas1 = (event) => {
    this.setState({ password1: event.target.value });
  };
  changePas2 = (event) => {
    this.setState({ password2: event.target.value });
  };

  signUp = () => {
    if (this.state.password1 === this.state.password2) {
      this.props.signupUser(this.state.email, this.state.password1);
    } else {
      this.setState({ error: "Нууц үг хоорондоо таарахгүй байна. " });
    }
  };

  render() {
    return (
      <div className={css.SignUp}>
        {this.props.userId && <Redirect to="/" />}
        <h1>Бүртгэлийн форм</h1>
        <div>Та өөрийн мэдээллээ оруулна уу ? </div>
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="Имэйл хаяг"
        />
        <input
          onChange={this.changePas1}
          type="password"
          placeholder="Нууц үг оруулна уу"
        />
        <input
          onChange={this.changePas2}
          type="password"
          placeholder="Нууц үгээ давтан оруулна уу "
        />
        {this.state.error && (
          <div style={{ color: "red" }}>{this.state.error}</div>
        )}

        {this.props.saving && <Spinner />}

        {this.props.fireBaseError && (
          <div style={{ color: "red" }}>{this.props.fireBaseError}</div>
        )}
        <Button text="БҮРТГҮҮЛЭХ" btnType="Success" daragdsan={this.signUp} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    saving: state.signupReducer.saving,
    fireBaseError: state.signupReducer.fireBaseError,
    userId: state.signupReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
