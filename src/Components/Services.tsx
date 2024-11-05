import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Services() {
  const { theme } = useTheme();

  const lashesText =
    "Lashes, ipsum dolor sit amet consectetur adipisicing elit. Molestias id quae molestiae? Eum, esse possimus!";
  const browsText =
    "Brows ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ab sunt ut! Corrupti nam dolorum dolore et tenetur consequatur doloremque?";
  const otherText =
    "Other ipsum dolor sit amet consectetur adipisicing elit. Omnis reiciendis suscipit impedit dolores ut ab quidem a nostrum odio voluptatum!";

  const [serviceText, setServiceText] = useState<string>("");

  return (
    <div className="services section">
      <h2>Services</h2>
      <div className="allServicesContainer">
        <div className="serviceContainer">
          <button className="button button--secondary">
            <div className="svgContainer">
              <svg
                height="100px"
                width="100px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                fill={theme === "dark" ? "#ffffff" : "#000000"}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M404.946,230.669C428.2,245.234,463.907,261.977,512,268.662c-32.248-25.252-53.918-48.832-67.492-66.023 c14.297-12.091,27.43-25.52,39.049-40.207l-37.515-29.708c-21.308,26.916-48.434,49.013-79.43,64.366 c-31.011,15.346-65.853,23.971-102.884,23.985c-37.027-0.014-71.872-8.639-102.883-23.985c-31-15.353-58.129-37.45-79.43-64.366 l-37.522,29.708c9.073,11.461,19.068,22.154,29.791,32.067C60.933,211.915,37.696,239.141,0,268.662 c53.55-7.446,91.748-27.35,114.486-42.848c8.111,5.122,16.475,9.884,25.121,14.159c1.249,0.615,2.515,1.208,3.774,1.802 c-3.662,21.749-12.658,60.502-33.55,94.696c40.634-18.03,69.264-54.359,83.775-76.427c10.882,2.807,22.017,4.971,33.362,6.461 l29.028,112.77l28.623-111.15c12.177-0.897,24.155-2.554,35.866-4.963c15.075,22.242,42.917,56.103,81.691,73.308 c-18.993-31.083-28.153-65.928-32.414-88.351c6.135-2.51,12.184-5.217,18.096-8.147 C393.68,237.087,399.352,233.932,404.946,230.669z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <p>Lashes</p>
          </button>
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

      <p className="serviceDescription">{serviceText}</p>
    </div>
  );
}

export default Services;
