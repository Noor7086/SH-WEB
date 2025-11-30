import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaUsers,
  FaRocket, 
  FaLightbulb,
  FaHandshake,
  FaCode,
  FaAward
} from 'react-icons/fa';
import aboutUsImage from '../assets/aboutus.webp';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Throttle scroll handler for better performance
  useEffect(() => {
    // Disable parallax on mobile to prevent white space issues
    if (windowWidth <= 768) {
      setParallaxOffset(0);
      return;
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          setScrollY(scrollPosition);
          
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionTop = rect.top;
            
            // Calculate parallax offset when section is in view
            const parallaxSpeed = 0.2;
            if (sectionTop < windowHeight && sectionTop > -rect.height) {
              setParallaxOffset((windowHeight - sectionTop) * parallaxSpeed);
            } else {
              setParallaxOffset(0);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [windowWidth]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: windowWidth <= 768 ? '0px' : windowWidth <= 375 ? '60px' : '80px',
        paddingBottom: windowWidth <= 375 ? '60px' : '80px',
        marginTop: windowWidth <= 768 ? '0px' : '0px'
      }}
    >
      {/* Parallax Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${aboutUsImage})`,
          backgroundSize: windowWidth <= 768 ? 'cover' : '120%',
          backgroundPosition: windowWidth <= 768 ? 'center top' : 'center -100px',
          backgroundOrigin: 'border-box',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: windowWidth <= 768 ? 'scroll' : 'fixed',
          zIndex: 0
        }}
      >
        {/* Overlay for better text readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.85) 0%, rgba(26, 26, 46, 0.9) 25%, rgba(22, 33, 62, 0.85) 50%, rgba(15, 52, 96, 0.8) 75%, rgba(83, 52, 131, 0.85) 100%)',
            zIndex: 1
          }}
        />
      </div>

      {/* Content */}
      <Container style={{ 
        position: 'relative', 
        zIndex: 2,
        paddingTop: windowWidth <= 768 ? '60px' : '0px'
      }}>
        <Row className="text-center mb-5">
          <Col lg={8} className="mx-auto" data-aos="fade-up">
            <div className="premium-badge" style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
              borderRadius: '10px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
              border: '2px solid rgba(255,255,255,0.3)',
              backdropFilter: 'blur(10px)',
              marginBottom: '20px'
            }}>
              <FaUsers style={{ 
                color: 'white', 
                marginRight: '8px',
                fontSize: '1.2rem'
              }} />
              <span style={{ 
                color: 'white', 
                fontWeight: '600',
                fontSize: '1rem'
              }}>
                About Us
              </span>
            </div>
            
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}>
              Who We Are
            </h2>
            
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.95)',
              lineHeight: '1.8',
              maxWidth: '800px',
              margin: '0 auto 40px',
              fontWeight: '400'
            }}>
              We are a passionate team of developers, designers, and innovators dedicated to creating 
              exceptional digital experiences. With years of expertise in cutting-edge technologies, 
              we transform ideas into reality.
            </p>
          </Col>
        </Row>

        {/* Mission & Vision */}
        <Row className="g-4 mt-5">
          <Col lg={6} data-aos="fade-up" data-aos-delay="100">
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(255,255,255,0.2)',
              height: '100%',
              transition: 'all 0.4s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            >
              <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                marginBottom: '20px',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                <FaRocket style={{ fontSize: '1.5rem', color: 'white' }} />
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                          color: 'white',
                marginBottom: '15px'
              }}>
                Our Mission
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.9)',
                        lineHeight: '1.7',
                margin: 0
              }}>
                To empower businesses with innovative technology solutions that drive growth, 
                enhance productivity, and create meaningful connections with their audience. 
                We strive to deliver excellence in every project, ensuring our clients achieve 
                their digital transformation goals.
              </p>
              </div>
            </Col>

          <Col lg={6} data-aos="fade-up" data-aos-delay="200">
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(255,255,255,0.2)',
              height: '100%',
              transition: 'all 0.4s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            >
              <div style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                marginBottom: '20px',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                <FaLightbulb style={{ fontSize: '1.5rem', color: 'white' }} />
                      </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '15px'
              }}>
                Our Vision
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.7',
                          margin: 0
              }}>
                To become a globally recognized leader in software development, known for 
                our commitment to innovation, quality, and client success. We envision a 
                future where technology seamlessly integrates with business needs, creating 
                sustainable growth and positive impact.
              </p>
            </div>
          </Col>
        </Row>

        {/* Key Highlights */}
        <Row className="g-4 mt-5">
          <Col lg={12}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'white',
              textAlign: 'center',
              marginBottom: '30px'
            }} data-aos="fade-up">
              Why Choose Us
            </h3>
          </Col>
          <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="100">
            <div style={{
              textAlign: 'center',
              padding: '1.5rem'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                <FaCode style={{ fontSize: '1.8rem', color: 'white' }} />
              </div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '10px'
              }}>
                Expert Team
              </h4>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: '1.6',
                margin: 0
              }}>
                Skilled professionals with years of experience in modern technologies
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="200">
                                <div style={{
              textAlign: 'center',
              padding: '1.5rem'
            }}>
                                    <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                margin: '0 auto 20px',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                <FaHandshake style={{ fontSize: '1.8rem', color: 'white' }} />
              </div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                                      color: 'white',
                marginBottom: '10px'
              }}>
                Client Focused
              </h4>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: '1.6',
                margin: 0
              }}>
                Your success is our priority. We work closely with you every step of the way
              </p>
                                    </div>
          </Col>
          <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="300">
            <div style={{
              textAlign: 'center',
              padding: '1.5rem'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
                                  display: 'flex',
                alignItems: 'center',
                                  justifyContent: 'center',
                margin: '0 auto 20px',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                <FaAward style={{ fontSize: '1.8rem', color: 'white' }} />
              </div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '10px'
              }}>
                Quality First
              </h4>
                                  <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: '1.6',
                margin: 0
              }}>
                We maintain the highest standards in every project we deliver
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="400">
            <div style={{
              textAlign: 'center',
              padding: '1.5rem'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                  borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                <FaRocket style={{ fontSize: '1.8rem', color: 'white' }} />
              </div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '10px'
              }}>
                Innovation
              </h4>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: '1.6',
                margin: 0
              }}>
                Cutting-edge solutions that keep you ahead of the competition
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
