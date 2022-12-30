import React, {useState} from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo"></div>
            <div className={`nav_items ${isOpen && "open"}`}>
            <a className='header__menu--link' href='#linkToAbout'>
              checkit
            </a>
            <a className='header__menu--link' href='#linkToUs'>
              equipo
            </a>
            <a className='header__menu--link' href='#linkToContact'>
              contacto
            </a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar;
