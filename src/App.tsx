import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import Languages from './sections/Languages';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log("BIENVENIDO CREMA 😼");
    }
  }, []);

  return (
    <div className="bg-dark text-cream font-outfit selection:bg-maroon selection:text-white min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Languages />
        <Contact />
      </main>

      <footer className="py-8 text-center border-t border-white/5 mt-10">
        <p className="text-cream/50 text-sm">
          © {new Date().getFullYear()} Leonardo Pachas Cleonares. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
