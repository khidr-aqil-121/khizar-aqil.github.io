import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { DarkVeil } from './components/DarkVeil';
import GradualBlur from './components/GradualBlur';

export default function App() {
  return (
    <>
      <DarkVeil
        hueShift={0}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={0.5}
        scanlineFrequency={0}
        warpAmount={0}
        resolutionScale={1}
      />
      <GradualBlur
        target="page"
        position="bottom"
        height="8rem"
        strength={2.5}
        divCount={6}
        curve="bezier"
        exponential
        opacity={1}
      />
      <div className="app-with-veil">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <footer className="py-8 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <p>&copy; {new Date().getFullYear()} Khizar Aqil's Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
