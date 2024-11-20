import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Services() {
  const { theme } = useTheme();

  const lashesText =
    "Lashes, ipsum dolor sit amet consectetur adipisicing elit. Molestias id quae molestiae? Eum, esse possimus!";
  const browsText =
    "Brows ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ab sunt ut! Corrupti nam dolorum dolore et tenetur consequatur doloremque?";

  const [serviceText, setServiceText] = useState<string>(lashesText);

  return (
    <div className="services section" id="services">
      <h2>Services</h2>
      <div className="allServicesContainer">
        <div className="serviceContainer">
          <button
            className="button button--secondary button--no-border"
            onClick={() => setServiceText(lashesText)}
          >
            <div className="serviceSVGContainer">
              <svg
                height="50px"
                width="50px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill={theme === "dark" ? "white" : "black"}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <style type="text/css"> </style>{" "}
                  <g>
                    {" "}
                    <path d="M404.946,230.669C428.2,245.234,463.907,261.977,512,268.662c-32.248-25.252-53.918-48.832-67.492-66.023 c14.297-12.091,27.43-25.52,39.049-40.207l-37.515-29.708c-21.308,26.916-48.434,49.013-79.43,64.366 c-31.011,15.346-65.853,23.971-102.884,23.985c-37.027-0.014-71.872-8.639-102.883-23.985c-31-15.353-58.129-37.45-79.43-64.366 l-37.522,29.708c9.073,11.461,19.068,22.154,29.791,32.067C60.933,211.915,37.696,239.141,0,268.662 c53.55-7.446,91.748-27.35,114.486-42.848c8.111,5.122,16.475,9.884,25.121,14.159c1.249,0.615,2.515,1.208,3.774,1.802 c-3.662,21.749-12.658,60.502-33.55,94.696c40.634-18.03,69.264-54.359,83.775-76.427c10.882,2.807,22.017,4.971,33.362,6.461 l29.028,112.77l28.623-111.15c12.177-0.897,24.155-2.554,35.866-4.963c15.075,22.242,42.917,56.103,81.691,73.308 c-18.993-31.083-28.153-65.928-32.414-88.351c6.135-2.51,12.184-5.217,18.096-8.147 C393.68,237.087,399.352,233.932,404.946,230.669z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <p className={serviceText === lashesText ? "underlined" : ""}>
              Lashes
            </p>
          </button>
        </div>

        <div className="serviceContainer">
          <button
            className="button button--secondary button--no-border"
            onClick={() => setServiceText(browsText)}
          >
            <div className="serviceSVGContainer">
              <svg
                height="50px"
                width="50px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill={theme === "dark" ? "white" : "black"}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g
                    id="页面-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Part"
                      transform="translate(-192.000000, -48.000000)"
                      fillRule="nonzero"
                    >
                      <g
                        id="eyebrow_fill"
                        transform="translate(192.000000, 48.000000)"
                      >
                        <path
                          d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                          id="MingCute"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M18.9372,9.36167 C20.6395,10.1301 22.108,11.2831 22.8998,12.9158 C23.0681,13.2628 23.0219,13.6757 22.781,13.9769 C22.5401,14.278 22.1474,14.4138 21.772,14.3258 C15.8145,12.93 9.78907,15.3311 6.61118,16.6414 C4.618,17.4633 2.68113,16.7923 1.68066,15.44 C1.18289,14.7672 0.915929,13.9186 1.02369,13.0307 C1.36416,10.2254 4.88953,9.02468 7.21626,8.49728 C10.9972,7.64025 15.3643,7.74879 18.9372,9.36167 Z"
                          fill={theme === "dark" ? "white" : "black"}
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <p className={serviceText === browsText ? "underlined" : ""}>
              Brows
            </p>
          </button>
        </div>
      </div>

      <p className="serviceDescription" key={serviceText}>
        {serviceText}
      </p>
    </div>
  );
}

export default Services;
