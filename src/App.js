import Hero from "./components/hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import GoToTheTop from "./components/GoToTheTop/GoToTheTop";
import Skills from "./components/Skills/Skills";
import Footer from "./components/footer/Footer";
import ContactMe from "./components/ContactMe/ContactMe";
import NavBar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      {" "}
      <div className='bg-black text-white'>
        <NavBar />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
        <GoToTheTop />
      </div>
    </>
  );
}

export default App;
