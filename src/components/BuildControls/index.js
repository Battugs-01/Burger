import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/burgerActions";

const BuildControls = (props) => {
  const disabledIngredients = {
    ...props.burgeriinOrts,
  };

  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }

  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ : <strong> {props.price} </strong>
      </p>

      {Object.keys(props.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          ortsHasah={props.ortsHasah}
          ortsNemex={props.ortsNemex}
          disabled={disabledIngredients}
          type={el}
          orts={props.ingredientNames[el]}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={!props.purchasing}
        className={css.OrderButton}
      >
        Захиалах
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    burgeriinOrts: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    purchasing: state.burgerReducer.purchasing,
    ingredientNames: state.burgerReducer.ingredientNames,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    ortsNemex: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    ortsHasah: (ortsNer) => dispatch(actions.removeIngredient(ortsNer)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(BuildControls);
