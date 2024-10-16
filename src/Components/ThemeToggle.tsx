import { useState, useEffect } from "react";

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

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
