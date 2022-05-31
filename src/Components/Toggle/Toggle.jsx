import React from "react";
import "./Toggle.css";

import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { ThemeContext } from "../../Context";
import { useContext } from "react";
const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className={darkMode ? "toggle dark" : "toggle"} onClick={handleClick}>
      <Moon />
      <Sun />
      <div
        className={darkMode ? "t-button dark" : "t-button"}
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
