import "../styles/components/Main.scss";
import Hero from "../images/hero.png";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

const Main = (props) => {
  return (
    <>
      <section className='main__section1'>
        <div
          className='main__section1__layer'
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className='main__section1__nametitle'>
            <h1 className='main__section1__title'>CHECKIT</h1>
            <h2 className='main__section1__subtitle'>Auditando el futuro.</h2>
          </div>
        </div>

        <div className='main__section1__content'>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </div>
      </section>
    </>
  );
};

export default Main;
