import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormSignIn from "../Form/SignIn/FormSignIn.js";
import FormSignUp from "../Form/SignUp/FormSignUp.js";
import "./NavBar.css";

const NavBar = () => {
  const [modalShowSignIn, setModalShowSignIn] = useState(false);

  const [modalShowSignUp, setModalShowSignUp] = useState(false);

  const [user, setUser] = useState(null);

  const backUrl = "http://localhost:3001";

  useEffect(() => {
    fetch(`/auth/getUser`)
      .then(res => res.json())
      .then(_user => {
        console.log("user", _user);

        if (_user) setUser(_user);
      });
  }, []);

  const handleClick = () => {
    setModalShowSignIn(true);
  };

  return (
    <div className="border-bottom mnavbar">
      <div className="container">
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link to="/Login" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/ShowEvents" className="nav-link">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="nav-link btnInput">
              Sign out
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
