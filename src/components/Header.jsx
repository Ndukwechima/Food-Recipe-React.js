import React from "react";
import "../styles/Header.css";
// import Pizza from '../img/pizza.jpg'

const Header = (props) => {
  return (
    <div className="main">
      <div className="head">
        <form onSubmit={props.getSearch} className="search-form">
          <input
            className="search-bar"
            placeholder="Search a recipe..."
            type="text"
            value={props.search}
            onChange={props.updateSearch}
          />
          <button className="search-button" type="submit">
            search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
