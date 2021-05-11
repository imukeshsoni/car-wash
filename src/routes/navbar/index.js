import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/base-components/button/index.js";
import "./styles.css";
import { selectUser, logout } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logOut = () => {
    dispatch(logout());
  };
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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
              {user ? (
                <Link
                  to="/"
                  className="nav-links"
                  onClick={(e) => {
                    closeMobileMenu();
                    logOut(e);
                  }}
                >
                  Log Out
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Log In
                </Link>
              )}
            </li>

            <li className="nav-item">
              {user && (
                <Link
                  to="/profile"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  {user.name}
                </Link>
              )}
            </li>
          </ul>
          {/* When button variable is true, button is displayed */}
          {button && user && (
            <Button
              linkTo="/profile"
              buttonStyle="btn--outline"
              onClick={() => {
                console.log(user);
                closeMobileMenu();
              }}
            >
              {user.name}
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
