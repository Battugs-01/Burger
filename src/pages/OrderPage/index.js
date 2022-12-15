import React from "react";
// import axios from "../../axios-orders";
// import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/orderActions";
class OrderPage extends React.Component {
  componentDidMount() {
    this.props.loadOrders(this.props.userId);
    // this.setState({ laoding: true });
    // axios
    //   .get("/orders.json")
    //   .then((response) => {
    //     this.setState({ orders: Object.entries(response.data).reverse() });
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => {
    //     this.setState({ laoding: false });
    //   });
  }
  render() {
    // console.log("======", JSON.stringify(this.state.orders));
    return (
      <div>
        {this.props.laoding ? (
          <Spinner />
        ) : (
          this.props.orders.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    laoding: state.orderReducer.loading,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: (userId) => dispatch(actions.loadOrders(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
