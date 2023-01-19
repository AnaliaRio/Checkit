import "../styles/components/Section1.scss";
import Audit from "../images/audit.jpeg";

const Section1 = () => {
  return (
    <section className='section1' id='linkToAbout'>
      <h2 className='section1__title'>checkit</h2>
      <div className='div'>
        <div>
          <p className='section1__boxparagraph1'>
            CheckIT Auditors es un grupo de prácticas creado para fortalecer el
            conocimiento adquirido en el bootcamp realizado en INCO Academy y
            patrocinado por Google.
          </p>
          <p className='section1__boxparagraph1'>
            Nosotros ofrecemos una auditoría, de manera voluntaria, para ayudar
            a las pequeñas empresas a mejorar sus prácticas y que eleven su
            nivel de desempeño.
          </p>
          <p className='section1__boxparagraph1'>
            Esta auditoría abarca las áreas de aplicaciones en la nube,
            ciberseguridad, revisión de sitio web, aplicaciones de comunicación
            y green IT, entre otras.
          </p>
        </div>
        <img className='imgA' src={Audit} alt='' />
      </div>
    </section>
  );
};

export default Section1;
