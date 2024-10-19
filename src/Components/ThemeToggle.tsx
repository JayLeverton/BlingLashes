import { useState, useEffect } from "react";
import "../SASS/components/ThemeToggle.scss";

// Helper function to get the system theme preference
const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeToggle = () => {
  // Get initial theme from localStorage or fall back to system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || getSystemTheme();
  });

  // Apply the theme by adding a class to the body element
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme); // Save the preference in localStorage
  }, [theme]);

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const darkSVG = (
    <div className="svgContainer">
      <svg
        className="svgContainer"
        fill="#000000"
        viewBox="0 0 35 35"
        data-name="Layer 2"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"></path>
        </g>
      </svg>
    </div>
  );
  const lightSVG = (
    <div className="svgContainer">
      <svg
        className="svgContainer"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="Environment / Sun">
            {" "}
            <path
              id="Vector"
              d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );

  return (
    <button className="themeToggleBtn" onClick={toggleTheme}>
      {theme === "dark" ? lightSVG : darkSVG}
    </button>
  );
};

export default ThemeToggle;
