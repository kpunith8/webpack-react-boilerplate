import React from "react";
import classes from "./PizzaImage.css";
import pizzaImg from "../../assets/pizza.jpg";

const PizzaImage = props => (
  <div className={classes.PizzaImage}>
    <img src={pizzaImg} alt="pizza-image" className={classes.image} />
  </div>
);

export default PizzaImage;
