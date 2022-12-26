import "../styles/components/Header.scss";

// No coge la función
const animate = (e) => {
  e.classList.toggle("change");
};

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul className='header__menu'>
          <li>
            <div class='container' onClick={animate}>
              <div class='bar1'></div>
              <div class='bar2'></div>
              <div class='bar3'></div>
            </div>
          </li>
          <li>
            <a className='header__menu--link' href='#linkToAbout'>
              checkit
            </a>
          </li>
          <li>
            <a className='header__menu--link' href='#linkToUs'>
              equipo
            </a>
          </li>
          <li>
            <a className='header__menu--link' href='#linkToContact'>
              contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
