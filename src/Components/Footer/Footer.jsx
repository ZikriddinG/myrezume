import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Instagramm from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ashurovshoxrux1407@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/uzbekmoliyachisi" target="_blank">
            <Instagramm color="white" size="3rem" />
          </a>

          <Facebook color="white" size="3rem" />
          <Github color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
