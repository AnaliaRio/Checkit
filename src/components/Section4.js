import "../styles/components/Section4.scss";

const Section4 = () => {
  return (
    <section className='section4' id='linkToContact'>
      <h2 className='section4__title'>contacto</h2>
      <form className='form' action='mailto:analia.rio@gmail.com' method='post'>
        <div className='width first'>
          <label className='section4__boxparagraph1 name' for='name'>
            Nombre *
          </label>
          <input
            className='section4__boxparagraph2 in'
            type='text'
            id='name'
            name='name'
            placeholder='Escribe tu nombre'
            required
          />
        </div>

        <div className='width'>
          <label className='section4__boxparagraph1' for='tel'>
            Teléfono
          </label>
          <input
            className='section4__boxparagraph2 in'
            type='number'
            id='tel'
            name='tel'
            placeholder='Escribe tu teléfono'
          />
        </div>

        <div className='width'>
          <label className='section4__boxparagraph1' for='email'>
            Email *
          </label>
          <input
            className='section4__boxparagraph2 in'
            type='email'
            id='email'
            name='email'
            placeholder='Escribe tu email'
            required
          />
        </div>

        <div className='width message'>
          <label className='section4__boxparagraph1 ms' for='text'>
            Mensaje *
          </label>
          <textarea
            className='section4__boxparagraph2'
            type='text'
            id='text'
            name='text'
            placeholder='Escribe tu mensaje'
            required
          ></textarea>
        </div>
        <input className='submit' type='submit' value='Submit' />
      </form>
    </section>
  );
};

export default Section4;
