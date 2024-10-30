import { useState } from "react";

function Services() {
  const lashesText =
    "Lashes, ipsum dolor sit amet consectetur adipisicing elit. Molestias id quae molestiae? Eum, esse possimus!";
  const browsText =
    "Brows ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ab sunt ut! Corrupti nam dolorum dolore et tenetur consequatur doloremque?";
  const otherText =
    "Other ipsum dolor sit amet consectetur adipisicing elit. Omnis reiciendis suscipit impedit dolores ut ab quidem a nostrum odio voluptatum!";

  const [serviceText, setServiceText] = useState<string>("");

  return (
    <div className="section services">
      <h2>Services</h2>
      <div className="allServicesContainer">
        <div className="serviceContainer">
          <button className="button">
            <div> {/* svg */} </div>
          </button>
          <p>Lashes</p>
        </div>

        <div className="serviceContainer">
          <button className="button">
            <div> {/* svg */} </div>
          </button>
          <p>Brows</p>
        </div>

        <div className="serviceContainer">
          <button className="button">
            <div> {/* svg */} </div>
          </button>
          <p>Other</p>
        </div>
      </div>

      <div className="serviceDescription">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
        officia assumenda quibusdam, similique est ex.
      </div>
    </div>
  );
}

export default Services;
