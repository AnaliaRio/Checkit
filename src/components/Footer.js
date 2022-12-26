import "../styles/components/Footer.scss";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='footer'>
      <h2 className='footer__title'>CheckIT 2022</h2>
      <FaCopyright className='footer__icon' />
    </section>
  );
};

export default Footer;
