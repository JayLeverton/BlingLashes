import { useTheme } from "../context/ThemeContext";

function Info() {
  const { theme } = useTheme();

  const svgInnerColorLight: string = "#b9d9f0";
  const svgInnerColorDark: string = "#5c5c5c";

  return (
    <div className="info section" id="info">
      <div className="info-grouping">
        <div className="svgContainer svgContainer--medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="7.469 1.606 17.061 28.789"
          >
            <g
              id="g-1"
              fill={theme === "dark" ? svgInnerColorDark : svgInnerColorLight}
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 13.196761131286621, -1.7201260328292847)"
            >
              <path d="M 10.187 3.924 L -3.986 3.924 C -4.783 3.924 -5.131 3.973 -5.131 4.77 L -5.127 30.671 C -5.127 31.469 -5.041 31.479 -4.244 31.479 L 9.929 31.479 C 10.726 31.479 10.812 31.469 10.812 30.671 L 10.808 4.77 C 10.808 3.973 10.984 3.924 10.187 3.924 Z" />
            </g>
            <g
              id="SVGRepo_iconCarrier"
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, -2.220446049250313e-16)"
            >
              <path
                d="M23.086 1.606h-14.173c-0.797 0-1.444 0.647-1.444 1.444v25.901c0 0.798 0.647 1.444 1.444 1.444h14.173c0.797 0 1.444-0.646 1.444-1.444v-25.901c0-0.797-0.647-1.444-1.444-1.444zM23.464 28.951c0 0.208-0.169 0.377-0.377 0.377h-14.173c-0.208 0-0.377-0.169-0.377-0.377v-4.95h14.928v4.95zM23.464 22.934h-14.928v-17.042h14.928v17.042zM23.464 4.826h-14.928v-1.776c0-0.208 0.169-0.378 0.377-0.378h14.173c0.208 0 0.377 0.17 0.377 0.378v1.776z"
                fill={theme === "dark" ? "white" : "black"}
              />
              <path
                d="M14.401 26.129h3.199v1.066h-3.199v-1.066z"
                fill={theme === "dark" ? "white" : "black"}
              />
            </g>
          </svg>
        </div>
        <h3 className="">Contact</h3>
        <p>placeholder number</p>
        <p>placeholder email</p>
      </div>
      <div className="info-grouping">
        <div className="svgContainer svgContainer--medium">
          <svg
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
              <path
                d="M 12.112 20.271 C 17.082 20.271 20.327 16.831 20.327 11.86 C 20.327 6.89 17.082 3.729 12.112 3.729 C 7.141 3.729 3.841 7.03 3.841 12 C 3.841 16.971 7.141 20.271 12.112 20.271 Z"
                stroke={
                  theme === "dark" ? svgInnerColorDark : svgInnerColorLight
                }
                fill={theme === "dark" ? svgInnerColorDark : svgInnerColorLight}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="0.9600000000000002"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 6V12"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="0.9600000000000002"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M16.24 16.24L12 12"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="0.9600000000000002"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </div>
        <h3 className="">Hours</h3>
        <p>
          Mon - Fri: <span className="bold">4pm - 9pm</span>
        </p>
        <p>
          Sat: <span className="bold">Closed</span>
        </p>
        <p>
          Sun: <span className="bold">10am - 9pm</span>
        </p>
      </div>
      <div className="info-grouping">
        <div className="svgContainer svgContainer--medium">
          <svg viewBox="8 0 48 64" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_iconCarrier">
              <g transform="matrix(1, 0, 0, 1, 38.08984, 2.121087)">
                <path
                  fill={
                    theme === "dark" ? svgInnerColorDark : svgInnerColorLight
                  }
                  d="M -5.9 -0.623 C -18.253 -0.623 -28.266 9.482 -28.266 21.947 C -28.266 27.287 -25.934 31.983 -23.354 36.053 L -7.421 58.769 C -7.072 59.268 -6.504 59.564 -5.9 59.564 C -5.296 59.564 -4.729 59.268 -4.38 58.769 L 11.554 36.053 C 14.019 32.703 16.465 27.287 16.465 21.947 C 16.465 9.482 6.452 -0.623 -5.9 -0.623 Z M 1.528 16.344 C 2.026 17.177 2.845 20.047 2.641 22.408 C 2.349 25.773 0.627 27.888 0.715 27.947 L -6.252 31.151 L -11.475 29.672 C -11.806 29.153 -14.865 23.74 -14.807 22.025 C -14.739 20.024 -13.262 16.469 -12.438 15.238 C -11.451 13.763 -6.825 12.444 -5.667 12.463 C -4.065 12.489 0.631 14.845 1.528 16.344 Z"
                />
              </g>
              <g>
                <path
                  fill={theme === "dark" ? "white" : "black"}
                  d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                />
                <path
                  fill={theme === "dark" ? "white" : "black"}
                  d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                />
              </g>
            </g>
          </svg>
        </div>
        <h3 className="">Location</h3>
        <p>placeholder location</p>
      </div>
    </div>
  );
}

export default Info;
