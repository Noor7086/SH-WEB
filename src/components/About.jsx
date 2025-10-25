import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { 
  FaRocket, 
  FaCheckCircle, 
  FaArrowRight, 
  FaCode,
  FaLightbulb,
  FaShieldAlt,
  FaHeart,
  FaStar,
  FaAward,
  FaHandshake,
  FaBrain,
  FaCogs,
  FaChartLine
} from 'react-icons/fa';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coreValues = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology and creative solutions",
      color: "#667eea"
    },
    {
      icon: <FaShieldAlt />,
      title: "Reliability",
      description: "Delivering consistent, high-quality results you can depend on",
      color: "#764ba2"
    },
    {
      icon: <FaHeart />,
      title: "Passion",
      description: "Driven by genuine love for technology and client success",
      color: "#f093fb"
    },
    {
      icon: <FaHandshake />,
      title: "Partnership",
      description: "Building lasting relationships through trust and collaboration",
      color: "#667eea"
    }
  ];


  const teamHighlights = [
    {
      icon: <FaBrain />,
      title: "Expert Team",
      description: "Skilled professionals with diverse expertise"
    },
    {
      icon: <FaCode />,
      title: "Modern Tech",
      description: "Latest technologies and frameworks"
    },
    {
      icon: <FaCogs />,
      title: "Agile Process",
      description: "Flexible and efficient development approach"
    },
    {
      icon: <FaChartLine />,
      title: "Proven Results",
      description: "Track record of successful project delivery"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 25%, #e9ecef 50%, #f1f3f4 75%, #ffffff 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        margin: '0'
      }}
    >
      {/* Advanced Background System */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0 }}>
        {/* Animated Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.03) 0%, rgba(118, 75, 162, 0.03) 25%, rgba(240, 147, 251, 0.03) 50%, rgba(102, 126, 234, 0.03) 75%, rgba(118, 75, 162, 0.03) 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}></div>

        {/* Geometric Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cdefs%3E%3Cpattern id=\'hexagons\' width=\'50\' height=\'50\' patternUnits=\'userSpaceOnUse\'%3E%3Cpolygon points=\'25,5 40,15 40,35 25,45 10,35 10,15\' fill=\'none\' stroke=\'rgba(102,126,234,0.08)\' stroke-width=\'0.5\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100\' height=\'100\' fill=\'url(%23hexagons)\'/%3E%3C/svg%3E")',
          opacity: 0.6,
          transform: `translateY(${scrollY * 0.1}px)`
        }}></div>

        {/* Floating Elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: `translateY(${scrollY * 0.2}px)`
        }}>
          <div style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 20s ease-in-out infinite',
            filter: 'blur(1px)'
          }}></div>
          
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '150px',
            height: '150px',
            background: 'linear-gradient(45deg, rgba(118, 75, 162, 0.04) 0%, rgba(240, 147, 251, 0.04) 100%)',
            borderRadius: '30px',
            animation: 'float 25s ease-in-out infinite reverse',
            filter: 'blur(1px)',
            transform: 'rotate(45deg)'
          }}></div>
        </div>
      </div>

      <Container className="position-relative" style={{ zIndex: 1, paddingTop: '120px', paddingBottom: '120px' }}>
        {/* Header Section */}
        <Row className="text-center mb-5">
          <Col lg={10} className="mx-auto">
            <div 
              className="header-badge mb-4"
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: '1px solid rgba(102, 126, 234, 0.3)',
                borderRadius: '50px',
                color: '#ffffff',
                fontSize: '0.9rem',
                fontWeight: '600',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}
            >
              <FaRocket className="me-2" style={{ color: '#667eea' }} />
              About Our Company
            </div>
            
            <h1 
              className="display-4 fw-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2',
                fontSize: '4rem',
                textShadow: '0 0 40px rgba(102, 126, 234, 0.3)',
                fontWeight: '800'
              }}
            >
              Crafting Digital Excellence
              <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Since Day One</span>
            </h1>
            
            <p 
              className="lead mb-5"
              style={{
                color: '#6c757d',
                fontSize: '1.3rem',
                lineHeight: '1.6',
                maxWidth: '800px',
                margin: '0 auto',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              We are passionate innovators dedicated to transforming your vision into reality. 
              Our team combines technical expertise with creative thinking to deliver solutions 
              that not only meet your needs but exceed your expectations.
            </p>
          </Col>
        </Row>

        {/* Core Values Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <h2 
              className="text-center mb-5"
              style={{
                color: '#1a1a2e',
                fontSize: '2.5rem',
                fontWeight: '700',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              Our Core Values
            </h2>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {coreValues.map((value, index) => (
            <Col lg={3} md={6} key={index}>
              <div
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.8s ease ${index * 0.1}s`
                }}
              >
                <div 
                  className="value-card"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid rgba(102, 126, 234, 0.2)',
                    borderRadius: '24px',
                    padding: '2.5rem 2rem',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: `
                      0 20px 60px rgba(102, 126, 234, 0.15),
                      0 8px 25px rgba(102, 126, 234, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.8),
                      inset 0 -1px 0 rgba(102, 126, 234, 0.1)
                    `,
                    cursor: 'pointer',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-10px) scale(1.02)';
                    e.target.style.boxShadow = `
                      0 30px 80px rgba(102, 126, 234, 0.25),
                      0 15px 40px rgba(102, 126, 234, 0.15),
                      inset 0 1px 0 rgba(255, 255, 255, 0.9),
                      inset 0 -1px 0 rgba(102, 126, 234, 0.2)
                    `;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = `
                      0 20px 60px rgba(102, 126, 234, 0.15),
                      0 8px 25px rgba(102, 126, 234, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.8),
                      inset 0 -1px 0 rgba(102, 126, 234, 0.1)
                    `;
                  }}
                >
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(135deg, ${value.color}15 0%, transparent 100%)`,
                      opacity: 0.3
                    }}
                  ></div>
                  
                  <div className="text-center">
                    <div 
                      style={{
                        width: '80px',
                        height: '80px',
                        background: `linear-gradient(135deg, ${value.color} 0%, ${value.color}80 100%)`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        boxShadow: `0 15px 35px ${value.color}40`,
                        fontSize: '2rem',
                        color: 'white'
                      }}
                    >
                      {value.icon}
                    </div>
                    
                    <h4 
                      style={{
                        color: '#1a1a2e',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {value.title}
                    </h4>
                    
                    <p 
                      style={{
                        color: '#6c757d',
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        margin: 0
                      }}
                    >
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Team Highlights Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                borderRadius: '30px',
                padding: '3rem 2rem',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(102, 126, 234, 0.15)'
              }}
            >
              <h2 
                className="text-center mb-5"
                style={{
                  color: '#1a1a2e',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                Why Choose Us?
              </h2>
              
              <Row className="g-4">
                {teamHighlights.map((highlight, index) => (
                  <Col lg={3} md={6} key={index}>
                    <div 
                      style={{
                        textAlign: 'center',
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        opacity: isVisible ? 1 : 0,
                        transition: `all 0.6s ease ${index * 0.1}s`
                      }}
                    >
                      <div 
                        style={{
                          width: '60px',
                          height: '60px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 1rem',
                          boxShadow: '0 10px 25px rgba(102, 126, 234, 0.4)',
                          fontSize: '1.5rem',
                          color: 'white'
                        }}
                      >
                        {highlight.icon}
                      </div>
                      
                      <h5 
                        style={{
                          color: '#1a1a2e',
                          fontSize: '1.2rem',
                          fontWeight: '600',
                          marginBottom: '0.5rem'
                        }}
                      >
                        {highlight.title}
                      </h5>
                      
                      <p 
                        style={{
                          color: '#6c757d',
                          fontSize: '0.95rem',
                          margin: 0
                        }}
                      >
                        {highlight.description}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>


        {/* CTA Section */}
        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                borderRadius: '25px',
                padding: '3rem 2rem',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(102, 126, 234, 0.15)'
              }}
            >
              <h2 
                style={{
                  color: '#1a1a2e',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                Ready to Start Your Project?
              </h2>
              
              <p 
                style={{
                  color: '#6c757d',
                  fontSize: '1.2rem',
                  marginBottom: '2rem',
                  maxWidth: '600px',
                  margin: '0 auto 2rem'
                }}
              >
                Let's discuss how we can help transform your ideas into digital reality. 
                Our team is ready to bring your vision to life.
              </p>
              
              <Button 
                size="lg" 
                className="fw-bold px-5 py-3"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  fontSize: '1.1rem',
                  letterSpacing: '0.5px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px) scale(1.05)';
                  e.target.style.boxShadow = '0 20px 50px rgba(102, 126, 234, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
                }}
                onClick={() => scrollToSection('contact')}
              >
                <span style={{ position: 'relative', zIndex: 2 }}>
                  Get Started Today
                  <FaArrowRight className="ms-2" />
                </span>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transition: 'left 0.5s'
                }}></div>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* Mobile Responsive */
        @media (max-width: 1200px) {
          .display-4 {
            font-size: 3.5rem !important;
          }
        }
        
        @media (max-width: 992px) {
          .display-4 {
            font-size: 3rem !important;
          }
          
          .value-card {
            margin-bottom: 2rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem !important;
          }
          
          .lead {
            font-size: 1.1rem !important;
          }
          
          .header-badge {
            padding: 10px 20px !important;
            font-size: 0.8rem !important;
          }
          
          .value-card {
            padding: 2rem 1.5rem !important;
          }
          
          .position-relative {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
        }
        
        @media (max-width: 576px) {
          .display-4 {
            font-size: 2rem !important;
          }
          
          .lead {
            font-size: 1rem !important;
          }
          
          .header-badge {
            padding: 8px 16px !important;
            font-size: 0.7rem !important;
          }
          
          .value-card {
            padding: 1.5rem 1rem !important;
          }
          
          .position-relative {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
        }
        
        @media (max-width: 480px) {
          .display-4 {
            font-size: 1.8rem !important;
          }
          
          .position-relative {
            padding-top: 50px !important;
            padding-bottom: 50px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;