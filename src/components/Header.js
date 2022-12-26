import "../styles/components/Header.scss";

const Header = () => {
  function animate(e) {
    e.currentTarget.classList.toggle("change");
  }

  return (
    <header className='header'>
      <div className='container' onClick={animate}>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>
      <nav>
        <ul className='header__menu'>
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
