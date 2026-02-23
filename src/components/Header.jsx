import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { scrollToSection } from '../utils/scrollToSection';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 20) {
        setIsHidden(false);
        lastScrollY.current = current;
        return;
      }

      const scrollingDown = current > lastScrollY.current + 5;
      const scrollingUp = current < lastScrollY.current - 5;

      if (scrollingDown) {
        setIsHidden(true);
      } else if (scrollingUp) {
        setIsHidden(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-50 ${
        isHidden ? 'header-hide' : 'header-show'
      }`}
    >
      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <a
              href="#home"
              className="text-gray-900 header-brand nav-hover"
              style={{ fontFamily: '"Times New Roman", serif' }}
              onClick={(e) => handleNavClick(e, '#home')}
            >
              Khizar Aqil
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-900 nav-hover"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 min-h-[44px] min-w-[44px] inline-flex items-center justify-center -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-900 nav-hover"
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
