import React from "react";
import "../styles/Recipe.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <img className="image" src={image} alt="" />
      <h1 className="title">{title}</h1>
      {<p className="calo">{Math.ceil(calories)} cal</p>}
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
