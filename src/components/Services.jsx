import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { 
  FaRocket, 
  FaCode, 
  FaMobile, 
  FaDatabase, 
  FaPalette,
  FaMobileAlt,
  FaCloud, 
  FaShieldAlt, 
  FaPhone,
  FaPlay,
  FaArrowRight,
  FaMapMarkerAlt
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
      iconColor: '#667eea',
      bgColor: 'rgba(102, 126, 234, 0.1)',
      features: ['React & Vue.js', 'Node.js & Python', 'Responsive Design', 'API Integration']
    },
    {
      title: 'Mobile Apps',
      subtitle: 'iOS & Android',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: <FaMobile />,
      iconColor: '#764ba2',
      bgColor: 'rgba(118, 75, 162, 0.1)',
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development']
    },
    {
      title: 'Graphic Design',
      subtitle: 'Visual Identity',
      description: 'Creative visual solutions including logos, branding, and digital artwork that make your brand stand out.',
      icon: <FaPalette />,
      iconColor: '#f093fb',
      bgColor: 'rgba(240, 147, 251, 0.1)',
      features: ['Logo Design', 'Brand Identity', 'UI/UX Design', 'Digital Artwork']
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
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Light Particles Background */}
      <div className="position-absolute" style={{
        top: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
        zIndex: 0
      }}></div>
      
      <div className="position-absolute" style={{
        top: '20%',
        right: '10%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse',
        zIndex: 0
      }}></div>
      
      <div className="position-absolute" style={{
        bottom: '15%',
        left: '15%',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 7s ease-in-out infinite',
        zIndex: 0
      }}></div>

      <Container className="position-relative" style={{ zIndex: 1, paddingTop: '40px', paddingBottom: '80px', maxWidth: '1200px' }}>
        {/* Premium Header Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease'
        }}>
          <div className="premium-badge" style={{
            display: 'inline-block',
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '10px',
            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
            border: '2px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            marginBottom: '20px'
          }}>
            <FaRocket style={{ 
              color: 'white', 
              marginRight: '8px',
              fontSize: '1.2rem'
            }} />
            <span style={{ 
              color: 'white', 
              fontWeight: '600',
              fontSize: '1rem'
            }}>
              Our Services
            </span>
          </div>
          
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2'
          }}>
            Excellence in Every<br className="mobile-break" /> Solution
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#6c757d',
            lineHeight: '1.6',
            maxWidth: '550px',
            margin: '0 auto',
            fontWeight: '400',
            padding: '0 15px'
          }}>
            Transform your business with our comprehensive suite of cutting-edge technology services, 
            designed to drive innovation and accelerate growth.
          </p>
        </div>

        {/* Professional Services Grid */}
        <div className="services-grid" style={{
                    position: 'relative',
            width: '100%',
          margin: '40px 0'
        }}>
          
          {/* Premium Service Cards */}
          <Row className="g-5">
            {services.map((service, index) => {
              // Helper function to convert hex to rgba
              const hexToRgba = (hex, alpha) => {
                const r = parseInt(hex.slice(1, 3), 16);
                const g = parseInt(hex.slice(3, 5), 16);
                const b = parseInt(hex.slice(5, 7), 16);
                return `rgba(${r}, ${g}, ${b}, ${alpha})`;
              };

              return (
              <Col lg={4} md={6} sm={12} key={index}>
                <div
                  className="service-card premium-service-card"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)',
                    borderRadius: '32px',
                    padding: '2.5rem 2.25rem',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s`,
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                    cursor: 'pointer',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    textAlign: 'center',
                    border: '1px solid rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-20px) scale(1.02)';
                    e.currentTarget.style.boxShadow = `0 20px 60px ${hexToRgba(service.iconColor, 0.2)}, 0 8px 24px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.95)`;
                    e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';
                    e.currentTarget.style.borderColor = hexToRgba(service.iconColor, 0.2);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)';
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                  }}
                >
                  {/* Premium Background Effects */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-20%',
                    width: '300px',
                    height: '300px',
                    background: `radial-gradient(circle, ${hexToRgba(service.iconColor, 0.15)} 0%, transparent 70%)`,
                    borderRadius: '50%',
                    zIndex: 1,
                    pointerEvents: 'none',
                    filter: 'blur(40px)',
                    animation: 'pulse 6s ease-in-out infinite'
                  }}></div>
                  
                  <div style={{
                    position: 'absolute',
                    bottom: '-30%',
                    left: '-15%',
                    width: '250px',
                    height: '250px',
                    background: `radial-gradient(circle, ${hexToRgba(service.iconColor, 0.1)} 0%, transparent 70%)`,
                    borderRadius: '50%',
                    zIndex: 1,
                    pointerEvents: 'none',
                    filter: 'blur(35px)',
                    animation: 'pulse 8s ease-in-out infinite reverse'
                  }}></div>
                  
                  {/* Shimmer Effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    zIndex: 1,
                    pointerEvents: 'none',
                    animation: 'shimmer 4s ease-in-out infinite'
                  }}></div>
                  
                   {/* Premium Icon Design */}
                   <div className="service-icon-container" style={{
                     position: 'relative',
                     zIndex: 2,
                     textAlign: 'center',
                     marginBottom: '1.2rem',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     justifyContent: 'center',
                     width: '100%'
                   }}>
                     {/* Icon Container with Multiple Layers */}
                     <div style={{
                       display: 'inline-flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       width: '90px',
                       height: '90px',
                       borderRadius: '24px',
                      background: `linear-gradient(135deg, ${service.iconColor} 0%, ${service.iconColor}EE 50%, ${service.iconColor}DD 100%)`,
                       position: 'relative',
                       marginBottom: '1.5rem',
                      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      boxShadow: `0 8px 24px ${hexToRgba(service.iconColor, 0.3)}, 0 4px 12px ${hexToRgba(service.iconColor, 0.2)}`
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'scale(1.12) rotate(5deg)';
                       e.currentTarget.style.boxShadow = `0 12px 32px ${hexToRgba(service.iconColor, 0.4)}, 0 6px 16px ${hexToRgba(service.iconColor, 0.3)}`;
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                       e.currentTarget.style.boxShadow = `0 8px 24px ${hexToRgba(service.iconColor, 0.3)}, 0 4px 12px ${hexToRgba(service.iconColor, 0.2)}`;
                     }}
                     >
                       {/* Outer Glow */}
                       <div style={{
                         position: 'absolute',
                         width: '120%',
                         height: '120%',
                         borderRadius: '24px',
                        background: `radial-gradient(circle, ${hexToRgba(service.iconColor, 0.4)} 0%, transparent 70%)`,
                         zIndex: 0,
                         animation: 'pulse 3s ease-in-out infinite',
                         filter: 'blur(8px)'
                       }}></div>
                       
                       {/* Icon */}
                       <div style={{
                         fontSize: '2.5rem',
                         color: 'white',
                         zIndex: 2,
                         position: 'relative',
                         transition: 'all 0.3s ease',
                         filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
                       }}>
                         {service.icon}
                       </div>
                       
                       {/* Inner Highlight */}
                       <div style={{
                         position: 'absolute',
                         top: '15%',
                         left: '15%',
                         width: '30%',
                         height: '30%',
                         borderRadius: '50%',
                         background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
                         zIndex: 1,
                         pointerEvents: 'none'
                       }}></div>
                     </div>
                     
                     <h3 style={{
                       color: '#0f172a',
                       fontSize: '1.6rem',
                       fontWeight: '900',
                      marginBottom: '0.6rem',
                       lineHeight: '1.3',
                       textAlign: 'center',
                       width: '100%',
                       letterSpacing: '-0.8px',
                      background: `linear-gradient(135deg, #1a1a2e 0%, ${service.iconColor} 50%, #764ba2 100%)`,
                       WebkitBackgroundClip: 'text',
                       WebkitTextFillColor: 'transparent',
                       backgroundClip: 'text'
                     }}>
                       {service.title}
                     </h3>
                    
                    {service.subtitle && (
                      <p style={{
                        color: service.iconColor,
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        {service.subtitle}
                      </p>
                    )}
                   </div>
                   
                   {/* Service Description */}
                   <div style={{
                     position: 'relative',
                     zIndex: 2,
                     marginBottom: '1.2rem',
                     textAlign: 'center',
                     padding: '0 0.5rem'
                   }}>
                     <p style={{
                       color: '#64748b',
                       fontSize: '0.95rem',
                       lineHeight: '1.7',
                       margin: 0,
                       fontWeight: '400',
                       textAlign: 'center'
                     }}>
                       {service.description}
                     </p>
                   </div>
                   
                   {/* Service Features */}
                  {service.features && (
                   <div style={{
                     position: 'relative',
                     zIndex: 2,
                     marginBottom: '0',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     gap: '0.3rem',
                     width: '100%'
                   }}>
                     {service.features.slice(0, 3).map((feature, featureIndex) => (
                       <div key={featureIndex} className="feature-item" style={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'flex-start',
                         marginBottom: '0',
                         padding: '0.65rem 1rem',
                         background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                         borderRadius: '16px',
                         transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                         width: '100%',
                         maxWidth: '100%',
                         backdropFilter: 'blur(10px)',
                         border: '1px solid rgba(0, 0, 0, 0.04)',
                         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                       }}
                       onMouseEnter={(e) => {
                         e.currentTarget.style.transform = 'translateX(6px) scale(1.02)';
                         e.currentTarget.style.background = `linear-gradient(135deg, ${hexToRgba(service.iconColor, 0.08)} 0%, ${hexToRgba(service.iconColor, 0.03)} 100%)`;
                         e.currentTarget.style.borderColor = hexToRgba(service.iconColor, 0.2);
                         e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(service.iconColor, 0.15)}, 0 2px 6px rgba(0, 0, 0, 0.06)`;
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.transform = 'translateX(0) scale(1)';
                         e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';
                         e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.04)';
                         e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                       }}
                       >
                         <div style={{
                           width: '12px',
                           height: '12px',
                            background: `linear-gradient(135deg, ${service.iconColor} 0%, ${service.iconColor}DD 100%)`,
                           marginRight: '0.75rem',
                           borderRadius: '50%',
                            flexShrink: 0,
                            boxShadow: `0 2px 6px ${hexToRgba(service.iconColor, 0.4)}`
                         }} />
                         <span style={{
                           color: '#334155',
                           fontSize: '0.9rem',
                           fontWeight: '600',
                           textAlign: 'left',
                           flex: 1,
                           letterSpacing: '0.2px'
                         }}>
                           {feature}
                         </span>
                       </div>
                     ))}
                   </div>
                  )}
                   
               </div>
             </Col>
            );
            })}
         </Row>
                  </div>
      </Container>

      <style>{`
        
        .service-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .service-card:hover {
          transform: translateY(-15px) scale(1.03) rotateY(2deg);
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.8; 
          }
          25% { 
            transform: translateY(-20px) translateX(10px) scale(1.05); 
            opacity: 1; 
          }
          50% { 
            transform: translateY(-40px) translateX(0px) scale(0.95); 
            opacity: 0.6; 
          }
          75% { 
            transform: translateY(-20px) translateX(-10px) scale(1.05); 
            opacity: 1; 
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.8; 
          }
          50% { 
            transform: scale(1.1); 
            opacity: 1; 
          }
        }
        
        @keyframes bounce {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-10px); 
          }
        }
        
        @keyframes rotate {
          0% { 
            transform: rotate(0deg); 
          }
          100% { 
            transform: rotate(360deg); 
          }
        }
        
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        @keyframes codeLine {
          0% {
            opacity: 0;
            transform: scaleX(0);
          }
          50% {
            opacity: 1;
            transform: scaleX(1);
          }
          100% {
            opacity: 0;
            transform: scaleX(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
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
        
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .premium-service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @media (max-width: 768px) {
          .premium-service-card {
            padding: 2rem 1.5rem !important;
          }
        }
        
        .header-badge {
          animation: fadeIn 1s ease 0.2s both;
        }
        
        
        .floating-orb {
          pointer-events: none;
          will-change: transform;
        }
        
        /* Hide mobile break on desktop */
        .mobile-break {
          display: none;
        }
        
        /* Container Width Reduction */
        @media (min-width: 1200px) {
          .container {
            max-width: 1140px !important;
          }
        }
        
        @media (min-width: 992px) and (max-width: 1199px) {
          .container {
            max-width: 960px !important;
          }
        }
        
        /* Mobile Responsive */
        @media (max-width: 992px) {
          .container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding-left: 15px !important;
            padding-right: 15px !important;
            padding-top: 50px !important;
            padding-bottom: 50px !important;
          }
          
          /* Mobile Heading Sizes */
          h2 {
            font-size: 1.8rem !important;
            padding: 0 10px !important;
          }
          
          /* Mobile Service Cards */
          .service-card-theme {
            padding: 1.5rem 1.2rem !important;
            margin-bottom: 1rem !important;
            border-radius: 18px !important;
            min-height: auto !important;
          }
          
          .service-card-theme h3 {
            font-size: 1.2rem !important;
            margin-bottom: 0.8rem !important;
          }
          
          .service-card-theme p {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
          }
          
          .service-card-theme > div:first-child {
            font-size: 2.5rem !important;
            margin-bottom: 1rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .container {
            padding-left: 12px !important;
            padding-right: 12px !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          
          /* Small Mobile Heading Sizes */
          h2 {
            font-size: 1.5rem !important;
            padding: 0 5px !important;
          }
          
          /* Small Mobile Service Cards */
          .service-card-theme {
            padding: 1.3rem 1rem !important;
            margin-bottom: 0.8rem !important;
            border-radius: 15px !important;
            min-height: auto !important;
          }
          
          .service-card-theme h3 {
            font-size: 1.1rem !important;
            margin-bottom: 0.6rem !important;
          }
          
          .service-card-theme p {
            font-size: 0.85rem !important;
            line-height: 1.4 !important;
          }
          
          .service-card-theme > div:first-child {
            font-size: 2rem !important;
            margin-bottom: 0.8rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding-left: 10px !important;
            padding-right: 10px !important;
            padding-top: 30px !important;
            padding-bottom: 30px !important;
          }
          
          h2 {
            font-size: 1.3rem !important;
            padding: 0 !important;
          }
          
          .service-card-theme {
            padding: 1.2rem 0.9rem !important;
            margin-bottom: 0.6rem !important;
            border-radius: 12px !important;
          }
          
          .service-card-theme h3 {
            font-size: 1rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .service-card-theme p {
            font-size: 0.8rem !important;
            line-height: 1.3 !important;
          }
          
          .service-card-theme > div:first-child {
            font-size: 1.8rem !important;
            margin-bottom: 0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;