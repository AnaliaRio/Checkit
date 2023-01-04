import React, { useState } from "react";
import "../styles/components/Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='navbar'>
      <div className='nav_logo'></div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <a className='header__menu--link' href='#linkToAbout'>
          CHECKIT
        </a>
        <a className='header__menu--link' href='#linkToUs'>
          EQUIPO
        </a>
        <a className='header__menu--link' href='#linkToContact'>
          CONTACTO
        </a>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
export default Navbar;
