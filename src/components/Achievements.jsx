import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { 
  FaRocket,
  FaMobile,
  FaGlobe,
  FaPalette,
  FaUsers,
  FaDownload,
  FaBuilding,
  FaStar,
  FaTrophy,
  FaCheckCircle
} from 'react-icons/fa';
import CountUp from './CountUp';

const Achievements = () => {
  const stats = [
    {
      number: 20,
      suffix: "+",
      label: "Apps Live",
      icon: <FaMobile />,
      description: "Mobile applications successfully launched and running",
      color: "#667eea"
    },
    {
      number: 50,
      suffix: "+",
      label: "Websites",
      icon: <FaGlobe />,
      description: "Web applications and websites deployed globally",
      color: "#764ba2"
    },
    {
      number: 20000,
      suffix: "+",
      label: "Active Users",
      icon: <FaUsers />,
      description: "Users actively using our applications worldwide",
      color: "#4facfe"
    }
  ];

  return (
    <section id="achievements" style={{
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '50px',
      paddingBottom: '50px'
    }}>
      {/* Premium Background Elements */}
      <div className="position-absolute" style={{
        top: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      
      <div className="position-absolute" style={{
        top: '20%',
        right: '10%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>
      
      <div className="position-absolute" style={{
        bottom: '15%',
        left: '15%',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 7s ease-in-out infinite'
      }}></div>

      <Container style={{ position: 'relative', zIndex: 2, maxWidth: '1200px' }}>
        {/* Header Section */}
        <Row className="text-center mb-5">
          <Col lg={10} md={11} sm={12} className="mx-auto" data-aos="fade-up">
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
              <FaTrophy style={{ 
                color: 'white', 
                marginRight: '8px',
                fontSize: '1.2rem'
              }} />
              <span style={{ 
                color: 'white', 
                fontWeight: '600',
                fontSize: '1rem'
              }}>
                Our Impact in Numbers
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
              Our Impact in Numbers
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
              Transforming ideas into reality with measurable results that speak for themselves
            </p>
          </Col>
        </Row>

        {/* Statistics Grid */}
        <Row className="g-4 justify-content-center">
          {stats.map((stat, index) => (
            <Col lg={4} md={4} sm={12} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="premium-stat-card" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)',
                borderRadius: '25px',
                padding: '35px 25px',
                textAlign: 'center',
                border: '2px solid rgba(255,255,255,0.6)',
                backdropFilter: 'blur(30px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.2)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                height: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.05)';
                e.currentTarget.style.boxShadow = `0 35px 80px rgba(0,0,0,0.15), 0 0 0 2px ${stat.color}30, 0 0 40px ${stat.color}20`;
                e.currentTarget.style.border = `2px solid ${stat.color}50`;
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.2)';
                e.currentTarget.style.border = '2px solid rgba(255,255,255,0.6)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)';
              }}>
                {/* Premium Background Pattern */}
                <div className="position-absolute" style={{
                  top: '-40px',
                  right: '-40px',
                  width: '120px',
                  height: '120px',
                  background: `conic-gradient(from 0deg, ${stat.color}15, transparent, ${stat.color}08)`,
                  borderRadius: '50%',
                  animation: `rotate 25s linear infinite`
                }}></div>
                
                <div className="position-absolute" style={{
                  bottom: '-30px',
                  left: '-30px',
                  width: '80px',
                  height: '80px',
                  background: `radial-gradient(circle, ${stat.color}12 0%, transparent 70%)`,
                  borderRadius: '50%',
                  animation: 'pulse 4s ease-in-out infinite'
                }}></div>
                
                <div className="position-absolute" style={{
                  top: '20%',
                  left: '10%',
                  width: '40px',
                  height: '40px',
                  background: `linear-gradient(45deg, ${stat.color}10, transparent)`,
                  borderRadius: '50%',
                  animation: 'float 6s ease-in-out infinite'
                }}></div>
                
                <div className="position-relative" style={{ zIndex: 2 }}>
                  {/* Premium Icon Container */}
                  <div className="mb-4">
                    <div className="icon-container" style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '20px',
                      background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}E6 50%, ${stat.color}CC 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      boxShadow: `0 12px 35px ${stat.color}40, 0 0 0 3px rgba(255,255,255,0.8)`,
                      border: '2px solid rgba(255,255,255,0.9)',
                      position: 'relative',
                      transition: 'all 0.3s ease'
                    }}>
                      {React.cloneElement(stat.icon, {
                        style: { 
                          color: 'white', 
                          fontSize: '1.6rem',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                        }
                      })}
                      {/* Premium Glow Effect */}
                      <div className="position-absolute" style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}E6 50%, ${stat.color}CC 100%)`,
                        filter: 'blur(12px)',
                        opacity: '0.4',
                        zIndex: -1
                      }}></div>
                    </div>
                  </div>
                  
                  {/* Premium Number Display */}
                  <h2 className="fw-bold mb-3" style={{
                    background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}CC 50%, ${stat.color}99 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: '1.1',
                    fontSize: '2.8rem',
                    margin: '0',
                    textShadow: `0 0 20px ${stat.color}30`,
                    letterSpacing: '-1px'
                  }}>
                    <CountUp 
                      end={stat.number} 
                      suffix={stat.suffix} 
                      duration={2000 + index * 150} 
                      delay={index * 100}
                    />
                  </h2>
                  
                  {/* Premium Label */}
                  <h5 className="fw-bold mb-3" style={{
                    color: '#1e293b',
                    fontSize: '1.2rem',
                    margin: '0',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase'
                  }}>
                    {stat.label}
                  </h5>
                  
                  {/* Premium Description */}
                  <p className="text-muted mb-0" style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    fontWeight: '400',
                    opacity: '0.85',
                    maxWidth: '200px',
                    margin: '0 auto'
                  }}>
                    {stat.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mt-3" style={{
                    width: '60px',
                    height: '3px',
                    background: `linear-gradient(90deg, ${stat.color} 0%, ${stat.color}80 100%)`,
                    borderRadius: '2px',
                    margin: '0 auto',
                    boxShadow: `0 0 10px ${stat.color}40`
                  }}></div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

      </Container>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3); }
          50% { box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6); }
        }
        
        
        .premium-stat-card:hover {
          box-shadow: 0 25px 60px rgba(0,0,0,0.12) !important;
        }
        
        .premium-stat-card:hover .icon-glow {
          animation: glow 2s ease-in-out infinite !important;
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
        
        /* Desktop spacing optimization */
        @media (min-width: 769px) {
          .container {
            padding-left: 30px !important;
            padding-right: 30px !important;
          }
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 992px) {
          .container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
        
        @media (max-width: 768px) {
          #achievements {
            min-height: auto !important;
            padding: 1.5rem 0 !important;
          }
          
          /* Mobile Badge Styles */
          .premium-badge {
            padding: 8px 16px !important;
            font-size: 0.75rem !important;
            margin-bottom: 15px !important;
          }
          
          .premium-badge span {
            font-size: 0.75rem !important;
          }
          
          /* Mobile Heading Sizes */
          h2 {
            font-size: 1.8rem !important;
            padding: 0 10px !important;
          }
          
          p {
            padding: 0 10px !important;
          }
          
          .container {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
          
          /* Smaller, cleaner stat cards on mobile */
          .premium-stat-card {
            padding: 20px 12px !important;
            border-radius: 18px !important;
            margin: 8px auto !important;
            height: 240px !important;
            box-shadow: 0 12px 28px rgba(0,0,0,0.08) !important;
            width: 100% !important;
            max-width: 320px !important;
          }
          
          .premium-stat-card h2 {
            font-size: 1.5rem !important;
            line-height: 1.2 !important;
            margin-bottom: 6px !important;
          }
          
          .premium-stat-card h5 {
            font-size: 0.85rem !important;
            margin-bottom: 6px !important;
          }
          
          .premium-stat-card p {
            font-size: 0.75rem !important;
            max-width: 100% !important;
            line-height: 1.4 !important;
          }
          
          .premium-stat-card .icon-container {
            width: 48px !important;
            height: 48px !important;
            border-radius: 14px !important;
          }
          
          .premium-stat-card .icon-container svg {
            font-size: 1.1rem !important;
          }
          
          .row {
            margin-left: -5px !important;
            margin-right: -5px !important;
          }
        }
        
        @media (max-width: 576px) {
          #achievements {
            padding: 1rem 0 !important;
          }
          
          /* Small Mobile Badge Styles */
          .premium-badge {
            padding: 6px 12px !important;
            font-size: 0.65rem !important;
            margin-bottom: 12px !important;
          }
          
          .premium-badge span {
            font-size: 0.65rem !important;
          }
          
          .premium-badge svg {
            font-size: 1rem !important;
            margin-right: 6px !important;
          }
          
          h2 {
            font-size: 1.5rem !important;
            padding: 0 5px !important;
          }
          
          p {
            padding: 0 5px !important;
          }
          
          .container {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          
          .mb-5 {
            margin-bottom: 1.25rem !important;
          }
          
          /* Smaller, cleaner stat cards on small mobile */
          .premium-stat-card {
            padding: 16px 10px !important;
            border-radius: 16px !important;
            height: 220px !important;
            margin: 6px auto !important;
            box-shadow: 0 10px 22px rgba(0,0,0,0.07) !important;
            width: 100% !important;
            max-width: 300px !important;
          }
          
          .premium-stat-card h2 {
            font-size: 1.3rem !important;
            line-height: 1.2 !important;
            margin-bottom: 4px !important;
          }
          
          .premium-stat-card h5 {
            font-size: 0.75rem !important;
            margin-bottom: 4px !important;
          }
          
          .premium-stat-card p {
            font-size: 0.7rem !important;
            line-height: 1.35 !important;
          }
          
          .premium-stat-card .icon-container {
            width: 44px !important;
            height: 44px !important;
            border-radius: 12px !important;
          }
          
          .premium-stat-card .icon-container svg {
            font-size: 1rem !important;
          }
          
          .row {
            margin-left: -2px !important;
            margin-right: -2px !important;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
          
          h2 {
            font-size: 1.3rem !important;
            padding: 0 !important;
          }
          
          p {
            padding: 0 !important;
            font-size: 0.9rem !important;
          }
          
          .premium-badge {
            padding: 5px 10px !important;
            font-size: 0.6rem !important;
            margin-bottom: 10px !important;
          }
          
          .premium-badge span {
            font-size: 0.6rem !important;
          }
          
          .premium-badge svg {
            font-size: 0.9rem !important;
            margin-right: 5px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Achievements;
