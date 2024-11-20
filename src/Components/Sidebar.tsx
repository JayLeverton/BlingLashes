type SidebarProps = {
  isOpen: boolean;
};

function Sidebar({ isOpen }: SidebarProps) {
  return (
    <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <a href="#home">
        <h4>HOME</h4>
      </a>
      <a href="#info">
        <h4>BOOK</h4>
      </a>
      <a className="sidebar-anchor" href="#about">
        <h4>ABOUT</h4>
      </a>
      <a href="#services">
        <h4>SERVICES</h4>
      </a>
      <a href="#testimonials">
        <h4>TESTIMONIALS</h4>
      </a>
      <a href="#instagram">
        <h4>INSTAGRAM</h4>
      </a>
    </div>
  );
}

export default Sidebar;
