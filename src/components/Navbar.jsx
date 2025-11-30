import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaRocket, FaBars, FaTimes } from 'react-icons/fa';
import genLogo from '../assets/Android_portfolio/gen-logo.webp';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or on window resize to desktop
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 992 && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    // Close menu immediately on mobile
    setIsOpen(false);
    
    // Small delay to allow menu to close smoothly before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <Navbar 
      ref={navbarRef}
      expand="lg" 
      fixed="top" 
      expanded={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      className={`transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
      style={{
        paddingTop: '0.1rem',
        paddingBottom: '0.1rem',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.5s ease',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
      }}
      id="main-navbar"
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          className="d-flex align-items-center fw-bold fs-3 navbar-brand-custom"
          style={{
            padding: '0.15rem 0.5rem',
            lineHeight: '1',
            margin: '0'
          }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <img 
            src={genLogo} 
            alt="Gentrons Logo" 
            className="navbar-logo"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            width="120"
            height="40"
            style={{
              height: '40px',
              width: 'auto',
              objectFit: 'contain',
              marginRight: '0.5rem'
            }}
          />
          <span className="navbar-brand-text" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '1.5rem',
            fontWeight: '700',
            lineHeight: '1',
            display: 'inline-block'
          }}>
            Gentrons
          </span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          aria-expanded={isOpen}
          className="border-0 navbar-toggler-right"
          style={{ 
            color: scrolled ? '#333' : 'white',
            border: 'none !important',
            outline: 'none !important',
            boxShadow: 'none !important',
            marginLeft: 'auto'
          }}
        >
          {isOpen ? <FaTimes style={{ color: scrolled ? '#333' : 'white', fontSize: '1.5rem' }} /> : <FaBars style={{ color: scrolled ? '#333' : 'white', fontSize: '1.5rem' }} />}
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-4">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About Us', id: 'about' },
              { name: 'Services', id: 'services' },
              { name: 'Projects', id: 'projects' },
              { name: 'Our Work', id: 'ourwork' },
              // { name: 'Reviews', id: 'reviews' },
              { name: 'Achievements', id: 'achievements' }
            ].map((item) => (
              <Nav.Link 
                key={item.id}
                href={`#${item.id}`} 
                className="mx-3 fw-semibold position-relative"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  scrollToSection(item.id);
                }}
                style={{
                  color: scrolled ? '#333' : '#fff',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.name}
                <span className="nav-underline"></span>
              </Nav.Link>
            ))}
          </Nav>
          <Button 
            variant="primary" 
            className="fw-bold px-4 py-2 rounded-pill"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scrollToSection('contact');
            }}
          >
            Get Started
          </Button>
        </Navbar.Collapse>
      </Container>

      <style>{`
        /* Desktop View Padding */
        @media (min-width: 992px) {
          .navbar {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
          }
        }
        
        /* Mobile - Remove all padding and margins */
        @media (max-width: 991.98px) {
          #main-navbar {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
        }
        
        .navbar-logo {
          filter: brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(1352%) hue-rotate(228deg) brightness(98%) contrast(89%);
        }
        
        .logo-gradient-overlay {
          mix-blend-mode: screen;
        }
        
        .navbar-toggler,
        .navbar-toggler:focus,
        .navbar-toggler:active,
        .navbar-toggler:focus-visible,
        .navbar-toggler:focus-within {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
        
        button.navbar-toggler {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
        
        button.navbar-toggler:focus,
        button.navbar-toggler:active,
        button.navbar-toggler:focus-visible {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
        
        .nav-underline {
          position: absolute;
          bottom: -5px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover .nav-underline {
          width: 100%;
        }
        
        .navbar-nav .nav-link:hover {
          color: #667eea !important;
        }
        
        @media (max-width: 991.98px) {
          .navbar {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            min-height: 50px !important;
            height: auto !important;
            align-items: center !important;
          }
          
          #main-navbar .container {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            padding-left: 8px !important;
            padding-right: 8px !important;
            margin: 0 !important;
            display: flex !important;
            align-items: center !important;
            flex-wrap: nowrap !important;
          }
          
          .navbar-brand-custom {
            font-size: 1rem !important;
            padding: 0.05rem 0.2rem !important;
            margin: 0 !important;
            line-height: 1 !important;
            height: auto !important;
            align-self: center !important;
            position: relative !important;
            top: 0 !important;
            transform: none !important;
            flex-shrink: 0 !important;
          }
          
          .navbar-brand-custom .navbar-logo {
            height: 30px !important;
            margin-right: 0.3rem !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            padding: 0 !important;
          }
          
          .navbar-brand-text {
            font-size: 1.1rem !important;
            line-height: 1 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .navbar-brand svg {
            font-size: 0.95rem !important;
          }
          
          .navbar-toggler,
          .navbar-toggler-right {
            padding: 0.05rem 0.2rem !important;
            margin: 0 !important;
            margin-left: auto !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            height: auto !important;
            line-height: 1 !important;
            align-self: center !important;
            flex-shrink: 0 !important;
            position: absolute !important;
            right: 15px !important;
          }
          
          .navbar > .container {
            position: relative !important;
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
          }
          
          .navbar-collapse {
            position: absolute !important;
            top: 100% !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            z-index: 1000 !important;
            background: rgba(255, 255, 255, 0.95) !important;
            backdrop-filter: blur(20px) !important;
            border-radius: 15px !important;
            margin-top: 5px !important;
            padding: 8px !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
            transition: all 0.3s ease !important;
          }
          
          .navbar-collapse:not(.show) {
            display: none !important;
          }
          
          .navbar-toggler:focus,
          .navbar-toggler:active,
          .navbar-toggler:focus-visible {
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
          }
          
          .navbar-toggler svg {
            font-size: 1.1rem !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          
          .navbar-nav .nav-link {
            color: #333 !important;
            padding: 10px 0;
            font-size: 0.9rem !important;
            border-bottom: 1px solid rgba(0,0,0,0.1);
          }
          
          .navbar-nav .nav-link:last-child {
            border-bottom: none;
          }
          
          .navbar-nav .btn {
            padding: 0.3rem 0.7rem !important;
            font-size: 0.85rem !important;
            margin-top: 3px;
          }
        }
        
        @media (max-width: 768px) {
          .navbar-nav .nav-link {
            padding: 10px 0 !important;
          }
        }
        
        @media (max-width: 576px) {
          .navbar {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            min-height: 45px !important;
            height: auto !important;
            align-items: center !important;
          }
          
          #main-navbar .container {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            padding-left: 6px !important;
            padding-right: 6px !important;
            margin: 0 !important;
            display: flex !important;
            align-items: center !important;
            flex-wrap: nowrap !important;
          }
          
          .navbar-brand-custom {
            font-size: 0.9rem !important;
            padding: 0.03rem 0.15rem !important;
            margin: 0 !important;
            line-height: 1 !important;
            height: auto !important;
            align-self: center !important;
            position: relative !important;
            top: 0 !important;
            transform: none !important;
            flex-shrink: 0 !important;
          }
          
          .navbar-brand-custom .navbar-logo {
            height: 25px !important;
            margin-right: 0.25rem !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            padding: 0 !important;
          }
          
          .navbar-brand-text {
            font-size: 1rem !important;
            line-height: 1 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .navbar-brand svg {
            font-size: 0.85rem !important;
          }
          
          .navbar-toggler {
            padding: 0.03rem 0.15rem !important;
            margin: 0 !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            height: auto !important;
            line-height: 1 !important;
          }
          
          .navbar-toggler:focus,
          .navbar-toggler:active,
          .navbar-toggler:focus-visible {
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
          }
          
          .navbar-toggler svg {
            font-size: 1rem !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .navbar-collapse {
            padding: 6px !important;
            margin-top: 2px !important;
          }
          
          .navbar-nav .nav-link {
            padding: 1px 0;
            font-size: 0.8rem !important;
          }
          
          .navbar-nav .btn {
            padding: 0.25rem 0.6rem !important;
            font-size: 0.75rem !important;
            margin-top: 2px !important;
          }
        }
      `}</style>
    </Navbar>
  );
};

export default NavigationBar;
