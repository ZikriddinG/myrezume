import React from "react";
import "./Services.css";
import HeratEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Services = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services">
      <div className={darkMode ? "awesome dark" : "awesome"}>
        <span>My Awesome</span>
        <span>Xizmatlar</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          facere reprehenderit maxime!
          <br />
          Molestias facere reprehenderit maxime!
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className={darkMode ? "cards dark" : "cards"}>
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeratEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe"}
          />
        </div>

        {/* second card */}

        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React"}
          />
        </div>

        {/* Third card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ispum dummy text are usualy use in section"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
