import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaRocket, FaBars, FaTimes } from 'react-icons/fa';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`py-3 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.5s ease',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
      }}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          className="d-flex align-items-center fw-bold fs-3"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <FaRocket className="me-2" style={{ color: '#667eea' }} />
          TechHouse
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="border-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? 'show' : ''}>
          <Nav className="ms-auto me-4">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Services', id: 'services' },
              { name: 'Team', id: 'team' },
              { name: 'Projects', id: 'projects' },
              // { name: 'Reviews', id: 'reviews' },
              { name: 'Achievements', id: 'achievements' }
            ].map((item) => (
              <Nav.Link 
                key={item.id}
                href={`#${item.id}`} 
                className="mx-3 fw-semibold position-relative"
                onClick={(e) => {
                  e.preventDefault();
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
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </Button>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
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
          .navbar-collapse {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 15px;
            margin-top: 10px;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
          
          .navbar-nav .nav-link {
            color: #333 !important;
            padding: 10px 0;
            border-bottom: 1px solid rgba(0,0,0,0.1);
          }
          
          .navbar-nav .nav-link:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </Navbar>
  );
};

export default NavigationBar;
