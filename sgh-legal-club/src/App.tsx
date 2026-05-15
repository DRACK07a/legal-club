import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <AboutUs />
      <Projects />
      <CTA />
      <Footer />
    </main>
  );
}

