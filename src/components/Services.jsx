import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { 
  FaRocket, 
  FaCode, 
  FaMobile, 
  FaDatabase, 
  FaCloud, 
  FaShieldAlt, 
  FaPhone,
  FaPlay,
  FaArrowRight
} from 'react-icons/fa';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      title: 'Web Development',
      subtitle: 'Frontend & Backend',
      description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
      icon: <FaCode />,
      color: '#667eea',
      features: ['React & Vue.js', 'Node.js & Python', 'Responsive Design', 'API Integration']
    },
    {
      title: 'Mobile Apps',
      subtitle: 'iOS & Android',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: <FaMobile />,
      color: '#667eea',
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development']
    },
    {
      title: 'Database Solutions',
      subtitle: 'Data Management',
      description: 'Robust database architectures and data management solutions for scalable applications.',
      icon: <FaDatabase />,
      color: '#764ba2',
      features: ['MySQL & PostgreSQL', 'MongoDB', 'Data Analytics', 'Cloud Databases']
    },
    {
      title: 'Cloud Services',
      subtitle: 'Infrastructure',
      description: 'Cloud-based solutions and infrastructure management for modern applications.',
      icon: <FaCloud />,
      color: '#667eea',
      features: ['AWS & Azure', 'DevOps', 'Microservices', 'Containerization']
    },
    {
      title: 'Security',
      subtitle: 'Cyber Protection',
      description: 'Comprehensive security solutions to protect your applications and data.',
      icon: <FaShieldAlt />,
      color: '#764ba2',
      features: ['Security Audits', 'Penetration Testing', 'Data Encryption', 'Compliance']
    },
    {
      title: 'Consulting',
      subtitle: 'Expert Guidance',
      description: 'Strategic technology consulting to help you make informed decisions.',
      icon: <FaRocket />,
      color: '#667eea',
      features: ['Technology Strategy', 'Architecture Design', 'Code Reviews', 'Training']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
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

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="services-section position-relative overflow-hidden" 
      style={{ 
        margin: 0, 
        padding: '0',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Enhanced Background */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0 }}>
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
            <div
              key={i}
            className="floating-orb"
              style={{
                position: 'absolute',
              width: `${Math.random() * 200 + 80}px`,
              height: `${Math.random() * 200 + 80}px`,
              background: `radial-gradient(circle, ${i % 3 === 0 ? '#667eea' : i % 3 === 1 ? '#764ba2' : '#f093fb'}20 0%, transparent 70%)`,
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              animation: `floatOrb ${Math.random() * 20 + 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`,
              filter: 'blur(40px)',
              opacity: 0.8
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div 
          className="grid-pattern"
              style={{
                position: 'absolute',
            top: 0,
          left: 0,
          width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(rgba(102, 126, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(102, 126, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            opacity: 0.3
          }}
        />
      </div>

      <Container className="position-relative" style={{ zIndex: 1, paddingTop: '150px', paddingBottom: '150px' }}>
        {/* Header Section */}
        <Row className="text-center mb-5">
          <Col lg={10} className="mx-auto">
            <div 
              className="header-badge mb-4"
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                color: '#ffffff',
                fontSize: '0.9rem',
                fontWeight: '600',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
              }}
            >
              <FaRocket className="me-2" style={{ color: '#667eea' }} />
              Our Services
            </div>
            
            <h1 
              className="display-4 fw-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #667eea 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2',
                fontSize: '4rem',
                textShadow: '0 0 40px rgba(102, 126, 234, 0.5)',
                fontWeight: '800'
              }}
            >
              Innovation at Work
              <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '0.8em'
              }}>Building the future, one project at a time</span>
            </h1>
            
            <p 
              className="lead mb-5"
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.2rem',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              We deliver cutting-edge software solutions that transform businesses, 
              accelerate digital innovation, and create exceptional user experiences that drive success.
            </p>
          </Col>
        </Row>

        {/* Professional Services Grid */}
        <div className="services-grid" style={{
                    position: 'relative',
            width: '100%',
          margin: '50px 0'
        }}>
          
          {/* Service Cards in 3x2 Grid */}
          <Row className="g-4">
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index}>
                <div
                  className="service-card-wrapper"
                          style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.8s ease ${index * 0.1}s`
                  }}
                >
                  {/* Compact Glass Service Card */}
                  <div className="glass-card" style={{
                    width: '100%',
                    maxWidth: '350px',
                    height: 'auto',
                    minHeight: '420px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '24px',
                    padding: '2rem',
                      position: 'relative',
                      overflow: 'hidden',
                    boxShadow: `
                      0 20px 60px rgba(0, 0, 0, 0.4),
                      0 8px 25px rgba(0, 0, 0, 0.2),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                    `,
                    cursor: 'pointer',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-20px) rotateX(8deg) rotateY(8deg) scale(1.05)';
                    e.currentTarget.style.boxShadow = `
                      0 40px 80px rgba(0, 0, 0, 0.6),
                      0 20px 40px rgba(0, 0, 0, 0.4),
                      inset 0 1px 0 rgba(255, 255, 255, 0.3),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.3),
                      0 0 0 1px rgba(255, 255, 255, 0.2)
                    `;
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.backdropFilter = 'blur(35px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                    e.currentTarget.style.boxShadow = `
                      0 20px 60px rgba(0, 0, 0, 0.4),
                      0 8px 25px rgba(0, 0, 0, 0.2),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                    `;
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.backdropFilter = 'blur(30px)';
                  }}>
                    {/* Compact Glass Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      borderRadius: '24px',
                      pointerEvents: 'none',
                      zIndex: 1
                    }} />
                    
                    {/* Subtle Grid Pattern Inside Card */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                      `,
                      backgroundSize: '35px 35px',
                      borderRadius: '24px',
                      pointerEvents: 'none',
                      zIndex: 1
                    }} />

                    {/* Compact Icon with Glass Effect */}
                    <div style={{
                      textAlign: 'center',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                          display: 'inline-flex',
                        width: '80px',
                        height: '80px',
                        background: `rgba(255, 255, 255, 0.1)`,
                        border: `1px solid rgba(255, 255, 255, 0.2)`,
                        borderRadius: '20px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                        boxShadow: `
                          0 15px 40px rgba(0, 0, 0, 0.3),
                          inset 0 1px 0 rgba(255, 255, 255, 0.3),
                          inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                        `,
                        transition: 'all 0.4s ease',
                        position: 'relative',
                        transformStyle: 'preserve-3d',
                        backdropFilter: 'blur(25px)',
                        WebkitBackdropFilter: 'blur(25px)',
                        zIndex: 2
                      }}>
                            {React.cloneElement(service.icon, {
                              style: { 
                            fontSize: '2rem',
                            color: '#ffffff',
                            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))',
                            transition: 'all 0.4s ease'
                          }
                        })}
                        {/* Compact Glow Effect */}
                        <div style={{
                          position: 'absolute',
                          top: '-4px',
                          left: '-4px',
                          right: '-4px',
                          bottom: '-4px',
                          background: `radial-gradient(circle, ${service.color}40 0%, transparent 70%)`,
                          borderRadius: '24px',
                          zIndex: -1,
                          filter: 'blur(15px)',
                          opacity: 0.8,
                          transform: 'translateZ(-10px)'
                        }} />
                </div>
                
                      <h3 style={{
                        color: '#ffffff',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        textAlign: 'center',
                        lineHeight: '1.3',
                        textShadow: '0 4px 8px rgba(0,0,0,0.5)',
                        zIndex: 2,
                        position: 'relative'
                        }}>
                          {service.title}
                        </h3>
                      
                      <div style={{
                        color: service.color,
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        textAlign: 'center',
                        marginBottom: '1.5rem',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        zIndex: 2,
                        position: 'relative'
                      }}>
                        {service.subtitle}
                      </div>
                    </div>
                    
                    {/* Compact Description */}
                    <div style={{
                      marginBottom: '1.5rem',
                      flex: 1,
                      zIndex: 2,
                      position: 'relative'
                    }}>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '1rem',
                        lineHeight: '1.5',
                        textAlign: 'center',
                        margin: 0,
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}>
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Compact Features */}
                    <div style={{
                      marginBottom: '1.5rem',
                      zIndex: 2,
                      position: 'relative'
                    }}>
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} style={{
                              display: 'flex',
                              alignItems: 'center',
                          marginBottom: '0.75rem',
                          padding: '0.75rem 1rem',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(15px)',
                          WebkitBackdropFilter: 'blur(15px)',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                        }}>
                              <div style={{
                            width: '8px',
                            height: '8px',
                            background: service.color,
                            marginRight: '0.75rem',
                            borderRadius: '50%',
                            flexShrink: 0,
                            boxShadow: `0 0 8px ${service.color}80`
                          }} />
                          <span style={{
                            color: 'rgba(255, 255, 255, 0.9)',
                              fontSize: '0.9rem',
                            flex: 1,
                            fontWeight: '500',
                            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                          }}>
                            {feature}
                          </span>
                      </div>
                    ))}
                  </div>
                  
                    {/* Compact Glass Button */}
                    <div style={{
                      textAlign: 'center',
                      zIndex: 2,
                      position: 'relative'
                    }}>
                      <button style={{
                        background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                        border: `1px solid rgba(255, 255, 255, 0.2)`,
                        color: '#ffffff',
                        borderRadius: '12px',
                        padding: '1rem 2rem',
                        fontWeight: '700',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.4s ease',
                        textTransform: 'none',
                        letterSpacing: '0.5px',
                        width: '100%',
                        boxShadow: `
                          0 15px 40px rgba(0, 0, 0, 0.3),
                          inset 0 1px 0 rgba(255, 255, 255, 0.3),
                          inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                        `,
                            position: 'relative',
                            overflow: 'hidden',
                        transformStyle: 'preserve-3d',
                        backdropFilter: 'blur(25px)',
                        WebkitBackdropFilter: 'blur(25px)',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-6px) rotateX(8deg) scale(1.05)';
                        e.target.style.boxShadow = `
                          0 25px 60px rgba(0, 0, 0, 0.4),
                          inset 0 1px 0 rgba(255, 255, 255, 0.4),
                          inset 0 -1px 0 rgba(0, 0, 0, 0.3)
                        `;
                        e.target.style.background = `linear-gradient(135deg, ${service.color}dd 0%, ${service.color} 100%)`;
                        e.target.style.border = '1px solid rgba(255, 255, 255, 0.3)';
                        e.target.style.backdropFilter = 'blur(30px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
                        e.target.style.boxShadow = `
                          0 15px 40px rgba(0, 0, 0, 0.3),
                          inset 0 1px 0 rgba(255, 255, 255, 0.3),
                          inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                        `;
                        e.target.style.background = `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`;
                        e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                        e.target.style.backdropFilter = 'blur(25px)';
                    }}
                  >
                        <span style={{ position: 'relative', zIndex: 2 }}>
                          Learn More
                        </span>
                        {/* Glass Shine Effect */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                          transition: 'left 0.5s ease',
                          borderRadius: '12px'
                        }} />
                      </button>
                    </div>
                    
                      </div>
                    </div>
              </Col>
            ))}
          </Row>
                  </div>
      </Container>

      <style jsx>{`
        
        .glass-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .glass-card:hover {
          transform: translateY(-15px) rotateX(5deg) rotateY(5deg) scale(1.03);
        }

        @keyframes floatOrb {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.8; 
          }
          25% { 
            transform: translateY(-40px) translateX(20px) scale(1.1); 
            opacity: 1; 
          }
          50% { 
            transform: translateY(-80px) translateX(0px) scale(0.9); 
            opacity: 0.6; 
          }
          75% { 
            transform: translateY(-40px) translateX(-20px) scale(1.05); 
            opacity: 0.9; 
          }
        }
        
        @keyframes slideInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.8;
          }
          50% { 
            transform: scale(1.05);
            opacity: 1;
          }
        }
        
        .header-badge {
          animation: fadeIn 1s ease 0.2s both;
        }
        
        
        .floating-orb {
          pointer-events: none;
          will-change: transform;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .glass-card {
            min-height: 400px !important;
          }
          

          .floating-orb {
            display: none;
          }
          
          /* Mobile Padding */
          .position-relative {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
        }
        
        @media (max-width: 576px) {
          .glass-card {
            min-height: 380px !important;
          }
          
          
          /* Small Mobile Padding */
          .position-relative {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;