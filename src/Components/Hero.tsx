function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        {/* <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur?
        </h1> */}
        <div className="buttons-column">
          <button className="button button--primary button--white-text button--black-border">
            Book Appointment
          </button>
          <button className="button button--white button--black-text button--black-border">
            View Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
