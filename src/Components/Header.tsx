import SidebarToggle from "./SidebarToggle";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="header primaryTone">
      <ThemeToggle></ThemeToggle>
      <h1>BlingLashes</h1>
      <SidebarToggle></SidebarToggle>
    </div>
  );
}

export default Header;
