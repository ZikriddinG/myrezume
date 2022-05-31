import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  console.log(darkMode);
  return (
    <div className={darkMode ? "n-wrapper dark" : "n-wrapper"}>
      <div className="n-left">
        <div className={darkMode ? "n-name dark" : "n-name"}>Zikriddin</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className={darkMode ? "n-list dark" : "n-list"}>
          <ul
            style={{
              listStyleType: "none",
              color: darkMode ? "#537E5A" : "",
            }}
          >
            <li>Asosiy</li>
            <li>Xizmatlar</li>
            <li>Tajriba</li>
            <li>Portfolio</li>
            <li>Baholash</li>
          </ul>
        </div>
        <button
          className={darkMode ? "button n-button dark" : "button n-button"}
        >
          Bog'lanish
        </button>
      </div>
    </div>
  );
};

export default Navbar;
