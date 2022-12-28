import "../styles/components/Section2.scss";
import Services from "../images/services.png";

const Section2 = () => {
  return (
    <section className='section2' id='linkToAbout'>
      <h2 className='section2__title'>servicios</h2>
      <div className='div'>
        <img className='imgS' src={Services} alt='' />
        <div>
          <p className='section2__boxparagraph1'>1. Auditoría IT</p>
          <p className='section2__boxparagraph2'>
            La auditoría tiene como misión inspeccionar diferentes áreas
            relacionadas con la tecnología, identificando puntos de mejora y
            riesgos.
          </p>
          <p className='section2__boxparagraph1'>2. Tutoría</p>
          <p className='section2__boxparagraph2'>
            La tutoría tiene como finalidad mejorar esos puntos de riesgo y/o
            debilidades de la empresa auditada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
