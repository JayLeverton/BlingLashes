import ThemeToggle from "./ThemeToggle";
import "/src/SASS/components/Header.scss";

function Header() {
  return (
    <div className="header primaryColor">
      <h1>BlingLashes</h1>
      <ThemeToggle></ThemeToggle>
    </div>
  );
}

export default Header;
