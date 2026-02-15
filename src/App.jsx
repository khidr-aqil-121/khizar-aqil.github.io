import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
export default function App() {
  return (
    <div className="min-h-screen w-full max-w-full bg-[#F8F0E3] text-black">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="bg-[#F8F0E3] text-black py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <p>&copy; {new Date().getFullYear()} Khizar Aqil's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
