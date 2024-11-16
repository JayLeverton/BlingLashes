import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Info from "./Info";
import Instagram from "./Instagram";
// import MediaQueryDebug from "./BreakpointDebugger";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { ThemeProvider } from "../context/ThemeContext";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider>
      <div className={`app`}>
        <Sidebar isOpen={isSidebarOpen}></Sidebar>
        <div
          className={`app-child ${
            isSidebarOpen
              ? "app-child-sidebar-open"
              : "app-child-sidebar-closed"
          }`}
        >
          <Header toggleSidebar={toggleSidebar}></Header>
          <div className="nonHeaderContent">
            <Hero></Hero>
            <Info></Info>
            <Services></Services>
            <About></About>
            <Testimonials></Testimonials>
            <Instagram></Instagram>
            <Footer></Footer>
            {/* <MediaQueryDebug /> */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
