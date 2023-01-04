import "../styles/components/Section4.scss";
import Collab from "../images/collab.jpg";
import { FaPaypal } from "react-icons/fa";

const Section4 = () => {
  return (
    <section className='section4' id='linkToAbout'>
      <h2 className='section4__title'>colabora con nosotros</h2>
      <div className='div'>
        <img className='imgB' src={Collab} alt='' />
        <div className='section4__content'>
          <p className='section4__boxparagraph1'>
            Gracias por ayudarnos y creer en nuestra causa, tus fondos se
            utilizarán para permitirnos continuar asesorando gratuitamente a
            todas las empresas que lo necesitan.
          </p>
          <a
            className='section4__link'
            href='https://www.google.com'
            target='_blank'
            rel='noreferrer'
          >
            <FaPaypal className='section4__icon' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section4;
