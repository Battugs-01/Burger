import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Орц : Гахайн мах : {props.order.orts.bacon} , Бяслаг :
        {props.order.orts.cheese} , Салад : {props.order.orts.salad} , Үхрийн
        мах : {props.order.orts.meat}
      </p>
      <p>
        Хаяг : {props.order.hayg.name} |{props.order.hayg.city} |
        {props.order.hayg.street}
      </p>
      <p>
        Үнийн дүн : <strong>{props.order.dun}₮</strong>
      </p>
    </div>
  );
};

export default Order;
