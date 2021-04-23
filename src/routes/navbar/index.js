import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/base-components/button/index.js";
import "./styles.css";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //Whenever 'resize' event will occur, event listener will call showButton()
  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            WASHIVO
          </Link>
          <div className="menu-icon" onClick={clickHandler}>
            <i className={click ? "fas fa-times " : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              {isAuthenticated ? (
                <Link to="/login" className="nav-links" onClick={logout}>
                  Logout
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="nav-links"
                  onClick={() => {
                    console.log("logged in");
                  }}
                >
                  Log In
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isAuthenticated && (
                <Link
                  to="/profile"
                  className="nav-links-mobile"
                  onClick={() => closeMobileMenu}
                >
                  PROFILE
                </Link>
              )}
            </li>
          </ul>
          {/* When button variable is true, button is displayed */}
          {button && isAuthenticated && (
            <Button
              linkTo="/profile"
              buttonStyle="btn--outline"
              onClick={() => {
                console.log(user);
                setButton();
              }}
            >
              PROFILE
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
