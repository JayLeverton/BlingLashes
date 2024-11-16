import SidebarToggle from "./SidebarToggle";
import ThemeToggle from "./ThemeToggle";

type HeaderProps = {
  toggleSidebar: () => void;
};

function Header({ toggleSidebar }: HeaderProps) {
  return (
    <div className="header primaryTone">
      <ThemeToggle />
      <h1>BRB Lashies</h1>
      <SidebarToggle toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Header;
