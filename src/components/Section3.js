import "../styles/components/Section3.scss";
import { FaLinkedin } from "react-icons/fa";

import Analia from "../images/Analia.jpg";
import Felipe from "../images/Felipe.jpg";
import Jose from "../images/Jose.jpg";
import Osiris from "../images/Osiris.jpg";
import Esperanza from "../images/Esperanza.jpg";
import Mauro from "../images/Mauro.jpg";

const Section3 = (props) => {
  return (
    <section className='section3' id='linkToUs'>
      <h2 className='section3__title'>equipo</h2>
      <div className='section3__boxes'>
        <div class='section3__box'>
          <img className='section3__box__pic' src={Jose} alt='' />
          <h3 className='section3__box__title'>José Luis Rodríguez Palma</h3>
          <h3 className='section3__box__subtitle'>
            Organizador - Diseño Web y Green IT
          </h3>
          <a
            href='https://www.linkedin.com/in/jose-rodriguez-65961a256/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='section3__box__icon' />
          </a>
        </div>
        <div class='section3__box'>
          <img className='section3__box__pic' src={Esperanza} alt='' />
          <h3 className='section3__box__title'>Esperanza Castillo</h3>
          <h3 className='section3__box__subtitle'>Marketing</h3>
          <a
            href='https://www.linkedin.com/in/esperanza-eco/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='section3__box__icon' />
          </a>
        </div>
        <div class='section3__box'>
          <img className='section3__box__pic' src={Osiris} alt='' />
          <h3 className='section3__box__title'>Osiris Herrera</h3>
          <h3 className='section3__box__subtitle'>Ciberseguridad</h3>
          {/* <a href='#' target='_blank' rel='noreferrer'>
            <FaLinkedin className='section3__box__icon' />
          </a> */}
        </div>
        <div class='section3__box'>
          <img className='section3__box__pic' src={Mauro} alt='' />
          <h3 className='section3__box__title'>Mauro Piano</h3>
          <h3 className='section3__box__subtitle'>Analista de datos</h3>
          {/* <a href='#' target='_blank' rel='noreferrer'>
              <FaLinkedin className='section3__box__icon' />
          </a> */}
        </div>
        <div class='section3__box'>
          <img className='section3__box__pic' src={Felipe} alt='' />
          <h3 className='section3__box__title'>Felipe Martínez</h3>
          <h3 className='section3__box__subtitle'>Chief Technology Officer</h3>
          <a
            href='https://www.linkedin.com/in/felipe-martinez-gonzalez/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='section3__box__icon' />
          </a>
        </div>
        <div class='section3__box'>
          <img className='section3__box__pic' src={Analia} alt='' />
          <h3 className='section3__box__title'>Analía Río</h3>
          <h3 className='section3__box__subtitle'>Desarrolladora web</h3>
          <a
            href='https://www.linkedin.com/in/analia-rio/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='section3__box__icon' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section3;
