import React from "react";
import css from "./style.module.css";
const BurgerIngredient = (props) => {
  if (props.type === "bread-top") {
    return (
      <div className={css.BreadTop}>
        <div className={css.seed}></div>
        <div className={`${css.seed} ${css.second}`}></div>
        <div className={`${css.seed} ${css.third}`}></div>
        <div className={`${css.seed} ${css.fourth}`}></div>
      </div>
    );
  }
  if (props.type === "salad") {
    return <div className={css.salad}></div>;
  }
  if (props.type === "bacon") {
    return <div className={css.bacon}></div>;
  }
  if (props.type === "meat") {
    return <div className={css.meat}></div>;
  }
  if (props.type === "cheese") {
    return <div className={css.cheese}></div>;
  }
  if (props.type == "bread-bottom") {
    return <div className={css.BreadBot}></div>;
  }

  return <div>...</div>;
};
export default BurgerIngredient;
