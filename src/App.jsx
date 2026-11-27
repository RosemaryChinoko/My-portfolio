import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
    </>
  );
}

export default App;