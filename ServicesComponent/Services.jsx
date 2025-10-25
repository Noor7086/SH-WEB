import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { 
  FaCode, 
  FaMobile, 
  FaCloud, 
  FaChartLine, 
  FaShieldAlt, 
  FaCogs,
  FaArrowRight,
  FaRocket,
  FaCheckCircle,
  FaPlay,
  FaStar,
  FaUsers,
  FaGlobe,
  FaBrain,
  FaLock
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);
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

  const services = [
    {
      icon: <FaCode />,
      title: "Custom Software Development",
      subtitle: "Tailored Solutions",
      description: "Build scalable, robust applications that grow with your business. From concept to deployment, we deliver excellence.",
      features: ["Full-stack Development", "API Integration", "Database Design", "Performance Optimization"],
      color: "#667eea",
      bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      stats: { projects: "500+", satisfaction: "98%" }
    },
    {
      icon: <FaMobile />,
      title: "Mobile App Development",
      subtitle: "Cross-Platform Excellence",
      description: "Native and hybrid mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"],
      color: "#28a745",
      bgGradient: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
      stats: { projects: "300+", satisfaction: "99%" }
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      subtitle: "Scalable Infrastructure",
      description: "Modern cloud architecture that scales with your business needs and optimizes operational costs.",
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps", "Serverless Architecture"],
      color: "#17a2b8",
      bgGradient: "linear-gradient(135deg, #17a2b8 0%, #6f42c1 100%)",
      stats: { projects: "200+", satisfaction: "97%" }
    },
    {
      icon: <FaChartLine />,
      title: "Digital Transformation",
      subtitle: "Future-Ready Business",
      description: "Transform your operations with AI, automation, and data-driven insights for sustainable growth.",
      features: ["Process Automation", "Data Analytics", "AI Integration", "Business Intelligence"],
      color: "#ffc107",
      bgGradient: "linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)",
      stats: { projects: "150+", satisfaction: "96%" }
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      subtitle: "Fortress Protection",
      description: "Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
      color: "#dc3545",
      bgGradient: "linear-gradient(135deg, #dc3545 0%, #e83e8c 100%)",
      stats: { projects: "100+", satisfaction: "100%" }
    },
    {
      icon: <FaCogs />,
      title: "IT Consulting",
      subtitle: "Strategic Guidance",
      description: "Expert technology consulting to help you make informed decisions and achieve your business objectives.",
      features: ["Technology Strategy", "Architecture Design", "Project Management", "Team Training"],
      color: "#6c757d",
      bgGradient: "linear-gradient(135deg, #6c757d 0%, #495057 100%)",
      stats: { projects: "400+", satisfaction: "98%" }
    }
  ];

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
      className="position-relative overflow-hidden" 
      style={{ 
        margin: 0, 
        padding: '0',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        minHeight: '100vh'
      }}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0 }}>
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="floating-orb"
            style={{
              position: 'absolute',
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              background: `radial-gradient(circle, ${services[i % services.length].color}20 0%, transparent 70%)`,
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `orbFloat ${Math.random() * 20 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`,
              filter: 'blur(40px)',
              opacity: 0.6
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
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            opacity: 0.5
          }}
        />
      </div>

      <Container className="position-relative" style={{ zIndex: 1, paddingTop: '100px', paddingBottom: '100px' }}>
        {/* Header Section */}
        <Row className="text-center mb-5">
          <Col lg={10} className="mx-auto">
            <div 
              className="header-badge mb-4"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50px',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              <FaRocket className="me-2" style={{ color: '#667eea' }} />
              Our Services
            </div>
            
            <h1 
              className="display-4 fw-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #667eea 50%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2'
              }}
            >
              Transform Your Vision Into
              <br />
              <span style={{ color: '#667eea' }}>Digital Reality</span>
            </h1>
            
            <p 
              className="lead mb-5"
              style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '1.2rem',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
            >
              We craft innovative software solutions that drive growth, enhance efficiency, 
              and position your business at the forefront of digital transformation.
            </p>
          </Col>
        </Row>

        {/* Services Grid */}
        <Row className="g-4 mb-0">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index}>
              <div 
                className="service-card-modern"
                style={{
                  height: '100%',
                  position: 'relative',
                  cursor: 'pointer',
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.8s ease ${index * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-20px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                {/* Glassmorphism Card */}
                <div 
                  className="glass-card"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '24px',
                    padding: '2rem',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease'
                  }}
                >
                  {/* Gradient Overlay */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: service.bgGradient,
                      opacity: 0.1,
                      borderRadius: '24px'
                    }}
                  />
                  
                  {/* Icon Section */}
                  <div 
                    className="text-center mb-4"
                    style={{ position: 'relative', zIndex: 2 }}
                  >
                    <div 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '80px',
                        height: '80px',
                        background: service.bgGradient,
                        borderRadius: '20px',
                        marginBottom: '1.5rem',
                        boxShadow: `0 20px 40px ${service.color}30`,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {React.cloneElement(service.icon, {
                        style: { 
                          fontSize: '2rem',
                          color: 'white'
                        }
                      })}
                    </div>
                    
                    <h3 
                      className="fw-bold mb-2"
                      style={{
                        color: 'white',
                        fontSize: '1.5rem',
                        lineHeight: '1.3'
                      }}
                    >
                      {service.title}
                    </h3>
                    
                    <p 
                      style={{
                        color: service.color,
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '1rem'
                      }}
                    >
                      {service.subtitle}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p 
                    className="mb-4"
                    style={{
                      color: 'rgba(255,255,255,0.8)',
                      lineHeight: '1.6',
                      fontSize: '1rem',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-4" style={{ position: 'relative', zIndex: 2 }}>
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="d-flex align-items-center mb-2"
                        style={{
                          padding: '0.5rem 0',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div 
                          style={{
                            width: '6px',
                            height: '6px',
                            background: service.color,
                            borderRadius: '50%',
                            marginRight: '0.75rem',
                            flexShrink: 0
                          }}
                        />
                        <span 
                          style={{
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div 
                    className="d-flex justify-content-between mb-4"
                    style={{ position: 'relative', zIndex: 2 }}
                  >
                    <div className="text-center">
                      <div 
                        style={{
                          color: service.color,
                          fontSize: '1.5rem',
                          fontWeight: 'bold'
                        }}
                      >
                        {service.stats.projects}
                      </div>
                      <div 
                        style={{
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '0.8rem',
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}
                      >
                        Projects
                      </div>
                    </div>
                    <div className="text-center">
                      <div 
                        style={{
                          color: service.color,
                          fontSize: '1.5rem',
                          fontWeight: 'bold'
                        }}
                      >
                        {service.stats.satisfaction}
                      </div>
                      <div 
                        style={{
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '0.8rem',
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}
                      >
                        Satisfaction
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    className="w-100"
                    style={{
                      background: 'transparent',
                      border: `2px solid ${service.color}`,
                      color: service.color,
                      borderRadius: '12px',
                      padding: '0.75rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      zIndex: 2
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = service.color;
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = service.color;
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Learn More
                    <FaArrowRight className="ms-2" />
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Call to Action Section */}
        <Row className="text-center mb-5">
          <Col lg={10} className="mx-auto">
            <div 
              className="cta-section"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '32px',
                padding: '4rem 2rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background Pattern */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cdefs%3E%3Cpattern id=\'dots\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'1\' fill=\'rgba(255,255,255,0.1)\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100\' height=\'100\' fill=\'url(%23dots)\'/%3E%3C/svg%3E")',
                  opacity: 0.5
                }}
              />
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 
                  className="fw-bold mb-4"
                  style={{
                    fontSize: '3rem',
                    background: 'linear-gradient(135deg, #ffffff 0%, #667eea 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: '1.2'
                  }}
                >
                  Ready to Transform Your Business?
                </h2>
                
                <p 
                  className="lead mb-5"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '1.3rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                  }}
                >
                  Join 1000+ successful businesses that have revolutionized their operations 
                  with our cutting-edge software solutions. Let's build something amazing together!
                </p>
                
                <div className="d-flex flex-wrap justify-content-center gap-4">
                  <Button 
                    size="lg" 
                    className="fw-bold px-5 py-3"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      borderRadius: '50px',
                      boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
                      transition: 'all 0.3s ease',
                      fontSize: '1.1rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
                    }}
                    onClick={() => scrollToSection('contact')}
                  >
                    <FaRocket className="me-2" />
                    Start Your Project
                    <FaArrowRight className="ms-2" />
                  </Button>
                  
                  <Button 
                    variant="outline-light" 
                    size="lg" 
                    className="fw-bold px-5 py-3"
                    style={{
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderRadius: '50px',
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      fontSize: '1.1rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255,255,255,0.1)';
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255,255,255,0.05)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                    }}
                    onClick={() => scrollToSection('projects')}
                  >
                    <FaPlay className="me-2" />
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        @keyframes orbFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.6; 
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg); 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(-40px) translateX(0px) rotate(180deg); 
            opacity: 1; 
          }
          75% { 
            transform: translateY(-20px) translateX(-10px) rotate(270deg); 
            opacity: 0.8; 
          }
        }
        
        @keyframes cardGlow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.3); 
          }
          50% { 
            box-shadow: 0 0 40px rgba(102, 126, 234, 0.6); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 1; 
          }
          50% { 
            transform: scale(1.05); 
            opacity: 0.8; 
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
        
        @keyframes fadeInScale {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .service-card-modern {
          animation: slideInUp 0.8s ease forwards;
        }
        
        .glass-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .glass-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }
        
        .floating-orb {
          pointer-events: none;
          will-change: transform;
        }
        
        .header-badge {
          animation: fadeInScale 1s ease 0.2s both;
        }
        
        .cta-section {
          animation: fadeInScale 1s ease 0.5s both;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .floating-orb {
            display: none;
          }
          
          .glass-card {
            padding: 1.5rem !important;
          }
          
          .service-card-modern:hover {
            transform: translateY(-10px) scale(1.01) !important;
          }
          
          .cta-section {
            padding: 2rem 1rem !important;
          }
          
          .cta-section h2 {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .glass-card {
            padding: 1rem !important;
          }
          
          .cta-section h2 {
            font-size: 1.5rem !important;
          }
          
          .cta-section p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;