import React from "react";

import css from "./style.module.css";
import logoImage from "../../assets/images/logo.jpg";
const Logo = () => (
  <div className={css.Logo}>
    <img src={logoImage} />
  </div>
);

export default Logo;
