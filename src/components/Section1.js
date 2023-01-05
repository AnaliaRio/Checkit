import "../styles/components/Section1.scss";
import Audit from "../images/audit.jpeg";

const Section1 = () => {
  return (
    <section className='section1' id='linkToAbout'>
      <h2 className='section1__title'>checkit</h2>
      <div className='div'>
        <div>
          <p className='section1__boxparagraph1'>
            Somos CheckIT, un grupo de expertos especializados en auditorías,
            nuestra misión es ayudar a las empresas a construir un futuro
            sostenible a través de nuestros servicios.
          </p>
        </div>
        <img className='imgA' src={Audit} alt='' />
      </div>
    </section>
  );
};

export default Section1;
