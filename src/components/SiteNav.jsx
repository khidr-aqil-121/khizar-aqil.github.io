import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import { scrollToSection } from '../utils/scrollToSection';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function handleNavClick(e, href) {
  if (href?.startsWith('#')) {
    e.preventDefault();
    scrollToSection(href);
  }
}

const MOBILE_BREAKPOINT = 768;

export function SiteNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    const snapThreshold = 0.4;
    const scrollDelta = 60;
    let ticking = false;
    let lastActive = 'home';
    let lastScrollY = window.scrollY;

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const triggerY = scrollY + window.innerHeight * snapThreshold;
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionBottom = sectionTop + rect.height;
        if (triggerY >= sectionTop && triggerY < sectionBottom) {
          current = id;
          break;
        }
        if (sectionTop > triggerY) break;
        current = id;
      }
      if (current !== lastActive) {
        lastActive = current;
        setActiveSection(current);
      }

      if (window.innerWidth < MOBILE_BREAKPOINT) {
        if (scrollY <= 20) {
          setCollapsed(false);
        } else if (scrollY > lastScrollY + scrollDelta) {
          setCollapsed(true);
        } else if (scrollY < lastScrollY - scrollDelta) {
          setCollapsed(false);
        }
      } else {
        setCollapsed(false);
      }
      lastScrollY = scrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navContent = (
    <>
      <header
        className={`site-nav ${collapsed ? 'site-nav-collapsed' : ''}`}
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99999,
          display: 'block',
          minHeight: 56,
          padding: '12px 16px',
          background: 'rgba(13, 7, 22, 0.5)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          boxSizing: 'border-box',
        }}
      >
        <nav style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          {/* Desktop: nav links centered; mobile: hidden */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {NAV_ITEMS.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="site-nav-desktop-link"
                  style={{
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    padding: '10px 20px',
                    borderRadius: 9999,
                    border: isActive ? '1px solid rgba(255,255,255,0.35)' : '1px solid transparent',
                    background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                    transition: 'border-color 0.2s, background 0.2s, color 0.2s',
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Mobile only: fixed circular button (hamburger / X) + dropdown */}
      <div className="md:hidden" style={{ position: 'fixed', top: 16, right: 16, zIndex: 100000 }}>
        <button
          type="button"
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(13, 7, 22, 0.5)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'background 0.2s, transform 0.2s',
          }}
        >
          {/* Hamburger (3 lines) that morphs to X */}
          <span style={{ position: 'relative', width: 22, height: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span
              style={{
                display: 'block',
                height: 2,
                width: '100%',
                background: 'currentColor',
                borderRadius: 1,
                transform: mobileMenuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                transition: 'transform 0.25s ease',
              }}
            />
            <span
              style={{
                display: 'block',
                height: 2,
                width: '100%',
                background: 'currentColor',
                borderRadius: 1,
                opacity: mobileMenuOpen ? 0 : 1,
                transition: 'opacity 0.2s ease',
              }}
            />
            <span
              style={{
                display: 'block',
                height: 2,
                width: '100%',
                background: 'currentColor',
                borderRadius: 1,
                transform: mobileMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                transition: 'transform 0.25s ease',
              }}
            />
          </span>
        </button>

        {mobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: 8,
              width: 'max-content',
              padding: '10px 8px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              background: 'rgba(13, 7, 22, 0.5)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12,
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            }}
          >
            {NAV_ITEMS.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setMobileMenuOpen(false);
                  }}
                  style={{
                    display: 'block',
                    padding: '10px 20px',
                    borderRadius: 9999,
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    textAlign: 'center',
                    border: isActive ? '1px solid rgba(255,255,255,0.35)' : '1px solid transparent',
                    background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                    transition: 'border-color 0.2s, background 0.2s, color 0.2s',
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </>
  );

  if (typeof document !== 'undefined' && document.body) {
    return createPortal(navContent, document.body);
  }
  return navContent;
}
