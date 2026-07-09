import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from "./sections/Education";

const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Achievements = lazy(() => import('./sections/Achievements'));
const Contact = lazy(() => import('./sections/Contact'));

function SectionFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<SectionFallback />}>
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
