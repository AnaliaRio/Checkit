import "../styles/components/Section3.scss";
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
          <h3 className='section3__boxtitle'>José Luis Rodríguez</h3>
          <h3 className='section3__boxsubtitle'>Organizador del proyecto</h3>
          <p className='section3__boxparagraph'>Texto sobre José.</p>
        </div>
        <div class='section3__box'>
          <img className='pic' src={Esperanza} alt='' />
          <h3 className='section3__boxtitle'>Esperanza Castillo</h3>
          <h3 className='section3__boxsubtitle'>Experta en marketing</h3>
          <p className='section3__boxparagraph'>Texto sobre Esperanza.</p>
        </div>
        <div class='section3__box'>
          <img className='pic' src={Osiris} alt='' />
          <h3 className='section3__boxtitle'>Osiris Herrera</h3>
          <h3 className='section3__boxsubtitle'>Experto en ciberseguridad</h3>
          <p className='section3__boxparagraph'>Texto sobre Osiris.</p>
        </div>
        <div class='section3__box'>
          <img className='pic' src={Mauro} alt='' />
          <h3 className='section3__boxtitle'>Mauro Piani</h3>
          <h3 className='section3__boxsubtitle'>Analista de datos</h3>
          <p className='section3__boxparagraph'>
            Analista de datos con Certificacion Profesional de Análisis de Datos
            de Google.
          </p>
        </div>
        <div class='section3__box'>
          <img className='pic' src={Felipe} alt='' />
          <h3 className='section3__boxtitle'>Felipe Martínez</h3>
          <h3 className='section3__boxsubtitle'>Experto en ciberseguridad</h3>
          <p className='section3__boxparagraph'>Texto sobre Felipe.</p>
        </div>
        <div class='section3__box'>
          <img className='pic' src={Analia} alt='' />
          <h3 className='section3__boxtitle'>Analía Río</h3>
          <h3 className='section3__boxsubtitle'>Desarrolladora web</h3>
          <p className='section3__boxparagraph'>
            Programadora con más de un año de experiencia en diferentes
            tecnologías y profesorado de idiomas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
