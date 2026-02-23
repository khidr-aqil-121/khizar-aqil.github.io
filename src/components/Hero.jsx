import { ArrowRight, Download } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

export function Hero() {
  return (
    <section
      id="home"
      className="section-shell items-center bg-[#F8F0E3] text-left"
      style={{ textAlign: 'left' }}
    >
      <div className="section-inner max-w-7xl w-full flex flex-col items-center justify-center gap-8 mx-auto">
        <div className="flex flex-col items-center">
          <div className="max-w-2xl" style={{ verticalAlign: 'middle' }}>
            <h1
              className="heading-luxe text-6xl sm:text-7xl mb-4 text-center"
              style={{
                letterSpacing: '1px',
                fontFamily: '"Times New Roman", serif',
                fontWeight: 900,
                color: 'rgba(74, 85, 101, 1)',
                backgroundColor: 'unset',
                background: 'unset',
                boxShadow: 'none',
              }}
            >
              HI, I&apos;M KHIZAR!
            </h1>
            <p
              className="text-gray-700 mb-8 text-center"
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                verticalAlign: 'middle',
                backgroundColor: 'unset',
                background: 'unset',
                fontWeight: 600,
                color: 'rgba(74, 85, 101, 1)',
              }}
            >
              I'm a third-year Honours Bachelor of Science student in Applied Statistics at the University of Toronto Mississauga,
              minoring in Mathematics and Geospatial Data Science.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" className="animated-button" onClick={(e) => { e.preventDefault(); scrollToSection('#projects'); }}>
                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
                <span className="text">View Projects</span>
                <span className="circle" aria-hidden="true" />
                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </a>
              <a href="/resume/resume.pdf" download className="animated-button">
                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
                <span className="text">Download Resume</span>
                <span className="circle" aria-hidden="true" />
                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
