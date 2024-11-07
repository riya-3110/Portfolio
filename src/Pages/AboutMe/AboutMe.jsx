import React from "react";
import "./AboutMe.scss";

export const AboutMe = () => {
  return (
    <div className="about" id="about">
      <div className="content">
        <div className="left">
          <img
            src="https://thumbs.dreamstime.com/b/developer-programmer-woman-coding-software-computer-developer-programmer-woman-coding-software-231060005.jpg"
            alt="woman-photo"
          />
        </div>
        <div className="right">
          <img src="/assets/developer.png" alt="dev-pic" />
          <h1>Hi i'm Riya</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
            maxime aspernatur maiores ad ex numquam officiis dolorum. Quidem
            maxime doloremque laboriosam temporibus vitae. Blanditiis, dolor.
          </p>
        </div>
      </div>
      <div className="technologies">
        <h2>Technologies</h2>
        <div className="logos">
          <img src="assets/html.png" alt="html" />
          <img src="assets/css.png" alt="css" />
          <img src="assets/js.png" alt="js" className="js" />
          <img src="assets/react.png" alt="react" />
        </div>
      </div>
    </div>
  );
};
