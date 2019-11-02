import React, { Component } from "react";
import "./NavBar.css";


class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="/">
            <img
              className="icon"
              src=""
              width="55"
              height="55"
              title="Brand image"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Test
                </a>
              </li>
            </ul>
          </div>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Sign up</button>
        </nav>
      </div>
    );
  }
};

export default NavBar;
