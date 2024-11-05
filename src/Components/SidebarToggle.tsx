import { useTheme } from "../context/ThemeContext";

const SidebarToggle = () => {
  const { theme } = useTheme();

  return (
    <button className="toggleBtn toggleBtn--right">
      <div className="svgContainer">
        <svg
          height="100%"
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
            <path
              d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z"
              stroke={theme === "dark" ? "#ffffff" : "#000000"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M7.96997 2V22"
              stroke={theme === "dark" ? "#ffffff" : "#000000"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M14.97 9.43994L12.41 11.9999L14.97 14.5599"
              stroke={theme === "dark" ? "#ffffff" : "#000000"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </button>
  );
};

export default SidebarToggle;
