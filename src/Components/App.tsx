import "../SASS/components/App.scss";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Info from "./Info";
import Instagram from "./Instagram";
import Services from "./Services";
import Testimonials from "./Testimonials";

function App() {
  return (
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
      </div>
    </div>
  );
}

export default App;
