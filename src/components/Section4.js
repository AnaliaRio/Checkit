import "../styles/components/Section4.scss";
import Collab from "../images/collab.jpg";

const Section4 = () => {
  return (
    <section className='section4' id='linkToAbout'>
      <h2 className='section4__title'>colabora con nosotros</h2>
      <div className='div'>
        <img className='imgB' src={Collab} alt='' />
        <p className='section4__boxparagraph1'>
          Gracias por ayudarnos y creer en nuestra causa, tus fondos se
          utilizarán para permitirnos continuar asesorando gratuitamente a todas
          las empresas que lo necesitan.
        </p>
      </div>
    </section>
  );
};

export default Section4;
