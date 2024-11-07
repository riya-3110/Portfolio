import React from "react";
import "./Portfolio.scss";
import { portfolioProject } from "../../DataPortfolio";

export const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="cardContainer">
        {portfolioProject.map((item) => (
          <div className="card">
            <img src={item.image} alt="card-img" />
            <h4>{item.title}</h4>
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
