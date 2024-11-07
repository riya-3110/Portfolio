import React from "react";
import "./Home.scss";
import { ReactTyped } from "react-typed";
import { CiLocationArrow1 } from "react-icons/ci";

export const Home = () => {
  return (
    <div className="home" id="home">
      <div className="homeContainer">
        <h1>Riya Macwan</h1>
        <ReactTyped
          className="type-font"
          strings={["Frontend Developer", "React Developer "]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
        <button type="button" className="btn custom-btn">
          Contact Me <CiLocationArrow1 className="icon" />
        </button>
      </div>
    </div>
  );
};
