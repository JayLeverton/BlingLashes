import "../SASS/components/App.scss";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Info from "./Info";
import Instagram from "./Instagram";
import Services from "./Services";
import Testimonials from "./Testimonials";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="background">
        <ThemeToggle></ThemeToggle>
        <Hero></Hero>
        <Info></Info>
        <Services></Services>
        <About></About>
        <Testimonials></Testimonials>
        <Instagram></Instagram>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
