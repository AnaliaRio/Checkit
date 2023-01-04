import React, { useState } from "react";
import "../styles/components/Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='nav'>
      <div className='nav__logo'></div>
      <div className={`nav__items ${isOpen && "open"}`}>
        <a href='#linkToAbout'>checkit</a>
        <a href='#linkToUs'>equipo</a>
        <a href='#linkToContact'>contacto</a>
      </div>
      <div
        className={`nav__toggle ${isOpen && "open"}`}
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
