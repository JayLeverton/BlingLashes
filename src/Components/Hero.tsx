import ActionButton from "./ActionButton";
import PassiveButton from "./PassiveButton";

function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur,
          reprehenderit?
        </h1>
      </div>
      <div>
        <ActionButton></ActionButton>
        <PassiveButton></PassiveButton>
      </div>
    </div>
  );
}

export default Hero;
