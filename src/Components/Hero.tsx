function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero-content">
        {/* <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur?
        </h1> */}
        <div className="buttons-column">
          <a href="#info">
            <button className="button button--primary button--white-text button--black-border">
              Book Appointment
            </button>
          </a>
          <a href="#services">
            <button className="button button--white button--black-text button--black-border">
              View Services
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
