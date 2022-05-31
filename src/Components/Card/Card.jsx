import React from "react";
import "./Card.css";
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Card = ({ emoji, heading, detail }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={darkMode ? "card dark" : "card"}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className={darkMode ? "c-button dark" : "c-button"}>
        Learn more{" "}
      </button>
    </div>
  );
};

export default Card;
