import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

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

          onClick={()=>seMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={()=>seMenuOpened(false)}>Home</li>
          <li onClick={()=>seMenuOpened(false)}>Programs</li>
          <li onClick={()=>seMenuOpened(false)}>Why us</li>
          <li onClick={()=>seMenuOpened(false)}>Plans</li>
          <li onClick={()=>seMenuOpened(false)}>Testimonials</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
