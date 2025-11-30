import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaRocket, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaArrowUp
} from 'react-icons/fa';
import genLogo from '../assets/Android_portfolio/gen-logo.webp';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: "Home", action: () => scrollToSection('home') },
    { name: "Services", action: () => scrollToSection('services') },
    { name: "Team", action: () => scrollToSection('team') },
    { name: "Projects", action: () => scrollToSection('projects') },
    // { name: "Reviews", action: () => scrollToSection('reviews') },
    { name: "Achievements", action: () => scrollToSection('achievements') },
    { name: "Contact", action: () => scrollToSection('contact') }
  ];

  const services = [
    "Custom Software Development",
    "Mobile App Development",
    "Web Development",
    "Cloud Solutions",
    "AI & Machine Learning",
    "IT Consulting",
    "Digital Transformation",
    "Cybersecurity"
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: "#", color: "text-primary" },
    { icon: <FaTwitter />, url: "#", color: "text-info" },
    { icon: <FaFacebook />, url: "#", color: "text-primary" },
    { icon: <FaInstagram />, url: "#", color: "text-danger" },
    { icon: <FaGithub />, url: "#", color: "text-dark" }
  ];

  return (
    <footer style={{ 
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 1 }}>
        <div className="position-absolute" style={{
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)',
          borderRadius: '50%',
          transform: 'rotate(45deg)'
        }}></div>
        
        <div className="position-absolute" style={{
          bottom: '20%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(45deg, rgba(240,147,251,0.1) 0%, rgba(102,126,234,0.1) 100%)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          transform: 'rotate(-30deg)'
        }}></div>
        
        {/* Grid Pattern */}
        <div className="position-absolute w-100 h-100" style={{
          backgroundImage: `
            linear-gradient(rgba(102,126,234,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(102,126,234,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5
        }}></div>
      </div>

      {/* Main Footer */}
      <div className="py-5 position-relative" style={{ zIndex: 2 }}>
        <Container>
          <Row className="g-4">
            {/* Company Info */}
            <Col lg={4} md={6}>
              <div className="mb-4">
                <div className="d-flex align-items-center mb-4">
                  <img 
                    src={genLogo} 
                    alt="Gentrons Logo" 
                    className="footer-logo"
                    style={{
                      height: '50px',
                      width: 'auto',
                      objectFit: 'contain',
                      marginRight: '15px'
                    }}
                  />
                  <h4 className="fw-bold mb-0 text-white" style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: '1.8rem'
                  }}>
                    Gentrons
                  </h4>
                </div>
                <p className="text-white-50 mb-4" style={{
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  Leading software house delivering innovative solutions that transform 
                  businesses and drive growth. We specialize in custom software development, 
                  mobile applications, and digital transformation.
                </p>
                <div className="d-flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      className="text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(102,126,234,0.2) 0%, rgba(118,75,162,0.2) 100%)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        color: 'white'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(102,126,234,0.2) 0%, rgba(118,75,162,0.2) 100%)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Col>

            {/* Quick Links */}
            <Col lg={2} md={6}>
              <h5 className="fw-bold mb-4 text-white" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '1.2rem'
              }}>
                Quick Links
              </h5>
              <ul className="list-unstyled">
                {quickLinks.map((link, index) => (
                  <li key={index} className="mb-3">
                    <a 
                      href="#" 
                      className="text-decoration-none"
                      onClick={(e) => {
                        e.preventDefault();
                        link.action();
                      }}
                      style={{ 
                        color: 'rgba(255,255,255,0.7)',
                        transition: 'all 0.3s ease',
                        fontSize: '0.95rem',
                        display: 'block',
                        padding: '5px 0'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#667eea';
                        e.target.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'rgba(255,255,255,0.7)';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Services */}
            <Col lg={2} md={6}>
              <h5 className="fw-bold mb-4 text-white" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '1.2rem'
              }}>
                Services
              </h5>
              <ul className="list-unstyled">
                {services.map((service, index) => (
                  <li key={index} className="mb-2">
                    <span style={{ 
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.9rem',
                      lineHeight: '1.4'
                    }}>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Contact Info */}
            <Col lg={4} md={6}>
              <h5 className="fw-bold mb-4 text-white" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '1.2rem'
              }}>
                Contact Information
              </h5>
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                    flexShrink: 0
                  }}>
                    <FaPhone style={{ color: 'white', fontSize: '1rem' }} />
                  </div>
                  <div>
                    <p className="mb-1 text-white" style={{ fontSize: '1rem', fontWeight: '500' }}>03332736688</p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                    flexShrink: 0
                  }}>
                    <FaEnvelope style={{ color: 'white', fontSize: '1rem' }} />
                  </div>
                  <div>
                    <p className="mb-1 text-white" style={{ fontSize: '1rem', fontWeight: '500' }}>fahadshafiq77@gmail.com</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Footer */}
      <div className="py-4" style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(0,0,0,0.2)'
      }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
              <p className="mb-0 text-white-50" style={{ fontSize: '0.95rem' }}>
                © 2024 Gentrons. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-4">
                <a href="#" style={{
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>
                  Privacy Policy
                </a>
                <a href="#" style={{
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>
                  Terms of Service
                </a>
                <a href="#" style={{
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>
                  Cookie Policy
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="position-fixed d-flex align-items-center justify-content-center"
        style={{ 
          width: '55px', 
          height: '55px', 
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          borderRadius: '15px',
          color: 'white',
          fontSize: '1.2rem',
          boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-5px) scale(1.1)';
          e.target.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0) scale(1)';
          e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
        }}
      >
        <FaArrowUp />
      </button>
      
      <style>{`
        .footer-logo {
          filter: brightness(0) invert(1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
