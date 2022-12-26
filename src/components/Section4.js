import "../styles/components/Section4.scss";
import Collab from "../images/collab.jpg";

const Section4 = () => {
  return (
    <section className='section1' id='linkToAbout'>
      <h2 className='section1__title'>colabora con nosotros</h2>
      <div className='div'>
        <img className='imgB' src={Collab} alt='' />
        <div>
          <p className='section1__boxparagraph1'>
            Si estás satisfecho con nuestro trabajo, agradeceríamos un aporte
            solidario para ayudarnos a costear el mantenimiento de nuestra web.
          </p>
          <p className='section1__boxparagraph2'>
            Texto texto texto texto texto texto.
          </p>
          <p className='section1__boxparagraph2'>
            Texto texto texto texto texto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section4;
