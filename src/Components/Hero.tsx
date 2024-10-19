import "../SASS/components/Hero.scss";
import ActionButton from "./ActionButton";
import PassiveButton from "./PassiveButton";

function Hero() {
  return (
    <div className="hero">
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur,
        reprehenderit?
      </h1>
      <div className="">
        <button className="ctaBtn">Book Appointment</button>
        <button className="servicesBtn">View Services</button>

        {/* <ActionButton></ActionButton>
        <PassiveButton></PassiveButton> */}
      </div>
    </div>
  );
}

export default Hero;
