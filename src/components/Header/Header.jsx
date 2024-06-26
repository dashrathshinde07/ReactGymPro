import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpened, seMenuOpened] = useState(false);

  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.56rem",
            borderRadius: "5px",
          }}
          onClick={() => seMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => seMenuOpened(false)}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              onClick={() => seMenuOpened(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>

          <li>
            <Link
              onClick={() => seMenuOpened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => seMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li onClick={() => seMenuOpened(false)}>
            <Link
              onClick={() => seMenuOpened(false)}
              to="testimonial"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
