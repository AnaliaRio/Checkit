import "../styles/components/Section1.scss";
import Building from "../images/building.png";

const Section1 = () => {
  return (
    <section className='section1' id='linkToAbout'>
      <h2 className='section1__title'>checkit</h2>
      <div className='div'>
        <img className='imgB' src={Building} alt='' />
        <div>
          <p className='section1__boxparagraph1'>
            Somos CheckIT, un grupo de expertos especializados en auditorías.
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

export default Section1;
