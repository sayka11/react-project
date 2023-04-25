import React, { FC } from "react";
import "./styles.css";

const Header = () => {
  return (
    <div className="head">
      <img className="logo-1" src="./odigo-Logo.svg" alt="odigo-logo" />
      <div className="articles">
        <section className="top-nav">
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>
              {" "}
              <a className="a-link" href="#">
                Articles
              </a>
            </li>
            <li>
              <a className="a-link" href="#">
                Locations
              </a>
            </li>
            <li>
              <a className="a-link" href="#">
                Videos
              </a>
            </li>
            <li>
              <a className="a-link" href="sign-in.html">
                Sign in
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Header;
