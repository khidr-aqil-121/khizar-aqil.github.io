import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { SiteNav } from './components/SiteNav';
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
        zIndex={100}
      />
      <SiteNav />
      <div className="app-with-veil relative">
        <div className="pt-[5rem] md:pt-[6rem]">
          <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        </div>
        <footer className="py-8 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <p>&copy; {new Date().getFullYear()} Khizar Aqil's Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
