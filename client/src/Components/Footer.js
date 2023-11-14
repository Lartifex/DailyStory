import React from "react";
import HomeIcon from "../svg/HomeIcon.svg";
import MyStories from "../svg/MyStories.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        {" "}
        <img src={HomeIcon} alt="Home Logo" />
      </Link>
      <Link to="/my-stories">
        <img src={MyStories} alt="MyStories Logo" />
      </Link>
    </div>
  );
};

export default Footer;
