import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Info from "./Info";
import Instagram from "./Instagram";
import MediaQueryDebug from "./BreakpointDebugger";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { ThemeProvider } from "../context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header></Header>
        <div className="nonHeaderContent">
          <Hero></Hero>
          <Info></Info>
          <Services></Services>
          <About></About>
          <Testimonials></Testimonials>
          <Instagram></Instagram>
          <Footer></Footer>
          <MediaQueryDebug />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
