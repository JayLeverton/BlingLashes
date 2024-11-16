type SidebarProps = {
  isOpen: boolean;
};

function Sidebar({ isOpen }: SidebarProps) {
  return (
    <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      Sidebar
    </div>
  );
}

export default Sidebar;
