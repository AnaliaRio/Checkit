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
      <div className='section3__boxes grid'>
        <div class='section3__box'>
          <img className='pic' src={Jose} alt='' />
          <h3 className='section3__boxtitle'>José Luis Rodríguez Palma</h3>
          <h3 className='section3__boxsubtitle'>
            Organizador - Diseño Web y Green IT
          </h3>
          <a
            href='https://www.linkedin.com/in/jose-rodriguez-65961a256/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='fa' />
          </a>
        </div>
        <div class='section3__box'>
          <img className='pic' src={Esperanza} alt='' />
          <h3 className='section3__boxtitle'>Esperanza Castillo</h3>
          <h3 className='section3__boxsubtitle'>Marketing</h3>
          <p className='section3__boxparagraph'>Texto sobre Esperanza.</p>
          <a
            href='https://www.linkedin.com/in/esperanza-eco/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='fa' />
          </a>
        </div>
        <div class='section3__box'>
          <img className='pic' src={Osiris} alt='' />
          <h3 className='section3__boxtitle'>Osiris Herrera</h3>
          <h3 className='section3__boxsubtitle'>Ciberseguridad</h3>
          <p className='section3__boxparagraph'>Texto sobre Osiris.</p>
          {/* <a href='#' target='_blank' rel='noreferrer'>
            <FaLinkedin className='fa' />
          </a> */}
        </div>
        <div class='section3__box'>
          <img className='pic' src={Mauro} alt='' />
          <h3 className='section3__boxtitle'>Mauro Piano</h3>
          <h3 className='section3__boxsubtitle'>Analista de datos</h3>
          <p className='section3__boxparagraph'>
            Reconocido con Certificacion Profesional de Análisis de Datos
            de Google.
          </p>
          {/* <a href='#' target='_blank' rel='noreferrer'>
              <FaLinkedin className='fa' />
          </a> */}
        </div>
        <div class='section3__box'>
          <img className='pic' src={Felipe} alt='' />
          <h3 className='section3__boxtitle'>Felipe Martínez</h3>
          <h3 className='section3__boxsubtitle'>Chief Technology Officer</h3>
          <p className='section3__boxparagraph'>Texto sobre Felipe.</p>
          <a
            href='https://www.linkedin.com/in/felipe-martinez-gonzalez/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='fa' />
          </a>
        </div>
        <div class='section3__box'>
          <img className='pic' src={Analia} alt='' />
          <h3 className='section3__boxtitle'>Analía Río</h3>
          <h3 className='section3__boxsubtitle'>Desarrolladora web</h3>
          <p className='section3__boxparagraph'>
            Programadora con más de un año de experiencia en diferentes
            tecnologías y profesorado de idiomas.
          </p>
          <a
            href='https://www.linkedin.com/in/analia-rio/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='fa' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section3;
