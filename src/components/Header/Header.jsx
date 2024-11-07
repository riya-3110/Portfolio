import React from "react";
import "./Header.scss";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <header className="header">
      <ul>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={300}
            spy={true}
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={300}
            spy={true}
            activeClass="active"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={300}
            spy={true}
            activeClass="active"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            smooth={true}
            duration={300}
            spy={true}
            activeClass="active"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            duration={300}
            spy={true}
            activeClass="active"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={300}
            spy={true}
            activeClass="active"
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};
