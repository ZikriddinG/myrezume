import React from "react";
import "./Experience.css";
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Experience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const a = darkMode ? "circle dark" : "circle";
  return (
    <div className="experience">
      <div className="achievement">
        <div className={a}>8+</div>
        <span>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className={a}>20+</div>
        <span>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className={a}>5+</div>
        <span>companies</span>
        <span>work</span>
      </div>
    </div>
  );
};

export default Experience;
