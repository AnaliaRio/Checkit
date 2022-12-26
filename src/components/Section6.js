import "../styles/components/Section6.scss";
// import Footer from "./Footer";
import { FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const Section6 = (props) => {
  return (
    <section className='section6'>
      {/* <h2 className='section6__title'></h2> */}
      <div className='section6__icons'>
        <a
          href='https://www.linkedin.com/in/checkitauditors/'
          target='_blank'
          rel='noreferrer'
          className='section6__icon1'
        >
          <FaLinkedin className='section6__icon' />
        </a>
        <a
          href='mailto:checkitauditors@gmail.com'
          target='_blank'
          rel='noreferrer'
          className='section6__icon3'
        >
          <FaRegEnvelope className='section6__icon ' />
        </a>
      </div>
      {/* <Footer /> */}
    </section>
  );
};

export default Section6;
