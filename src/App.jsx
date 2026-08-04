import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience'; // ADD THIS
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience /> {/* ADD THIS LINE */}
      <Projects />
      <Skills />
      <EducationCertifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;