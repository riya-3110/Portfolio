import React from "react";
import "./Skills.scss";

export const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="heading">
        <h1>Skills</h1>
        <img src="/assets/skill.png" alt="skill-img" />
      </div>
      <div className="content">
        <div className="skill-heading">
          <h3 className="html">HTML</h3>
          <h3 className="css">CSS</h3>
          <h3 className="js">JavaScript</h3>
          <h3 className="react">React</h3>
          <h3 className="git">GitHub</h3>
          <h3 className="vscode">VS Code</h3>
        </div>
        <img src="/assets/skill-bg.png" alt="skill-img" />
      </div>
    </div>
  );
};
