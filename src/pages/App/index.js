import React, { Component } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import css from "./style.module.css";
import { connect } from "react-redux";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import { Route, Switch } from "react-router-dom";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import Logout from "../../components/LogOut";
import * as actions from "../../redux/actions/loginAction";
import * as signupactions from "../../redux/actions/signupAction";
class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    // const expireDate = new Date(localStorage.getItem("expireDate"));
    // const refreshToken = localStorage.getItem("refreshToken");

    //   if (token) {
    //     if (expireDate > new Date()) {
    //       this.props.autoLogin(token, userId);
    //       this.props.autoLogout(expireDate.getTime() - new Date().getTime());
    //     } else {
    //       this.props.logout();
    //     }
    //   }
    if (token) {
      this.props.autoLogin(token, userId);
    }
  };
  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />

        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />

        <main className={css.Content}>
          {/* {"userId : " + this.props.userId} */}
          {this.props.userId ? (
            <Switch>
              <Route path="/logOut" component={Logout} />
              <Route path="/orders" component={OrderPage} />
              <Route path="/ship" component={ShippingPage} />
              <Route path="/" component={BurgerPage} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
              <Redirect to="/login" />
            </Switch>
          )}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(signupactions.logout()),
    // autoLogout: () => dispatch(signupactions.autoLogout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
