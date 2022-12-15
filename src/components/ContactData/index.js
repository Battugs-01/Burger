import React from "react";
import Button from "../General/Button";
import { connect } from "react-redux";
import css from "./style.module.css";
// import axios from "../../axios-orders";
import Spinner from "../General/Spinner";
import { withRouter } from "react-router-dom";
import * as actions from "../../redux/actions/orderActions";
class ContactData extends React.Component {
  state = {
    city: null,
    name: null,
    street: null,
  };

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };
  changeCity = (e) => {
    this.setState({ city: e.target.value });
  };
  changeStreet = (e) => {
    this.setState({ street: e.target.value });
  };

  componentDidUpdate() {
    if (
      this.props.newOrderStatus.finished &&
      !this.props.newOrderStatus.error
    ) {
      this.props.history.replace("/orders");
    }
  }

  saveOrder = () => {
    const newOrder = {
      userId: this.props.userId,
      orts: this.props.ingredients,
      dun: this.props.price,
      hayg: {
        name: this.state.name,
        city: this.state.city,
        street: this.state.street,
      },
    };

    this.props.saveOrderAction(newOrder);
    // this.setState({ loading: true });
    // axios
    //   .post("orders.json ", order)
    //   .then((response) => {
    //     console.log("order amjilttai ");
    //   })
    //   .catch((error) => {
    //     console.log("order amjiltgui " + error);
    //   })
    //   .finally(() => {
    //     this.setState({ loading: false });
    //     this.props.history.replace("/orders");
    //   });
  };
  render() {
    console.log(this.props);
    return (
      <div className={css.ContactData}>
        Дүн : {this.props.price}₮
        <div>
          {this.props.newOrderStatus.error &&
            `Захиалгыг хадгалах явцад алдаа гарлаа : ${this.props.newOrderStatus.error}`}
        </div>
        {this.props.newOrderStatus.saving ? (
          <Spinner />
        ) : (
          <div>
            <input
              onChange={this.changeName}
              type="text"
              name="name"
              placeholder="Таны нэр"
            />
            <input
              onChange={this.changeCity}
              type="text"
              name="city"
              placeholder="Таны хот"
            />
            <input
              onChange={this.changeStreet}
              type="text"
              name="street"
              placeholder="Таны гэрийн хаяг"
            />
            <Button
              text="ИЛГЭЭХ"
              btnType="Success"
              daragdsan={this.saveOrder}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder)),
  };
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
    price: state.burgerReducer.totalPrice,
    ingredients: state.burgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactData));
