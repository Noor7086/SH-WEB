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
      number: 150,
      suffix: "+",
      label: "Apps Live",
      icon: <FaMobile />,
      description: "Mobile applications successfully launched and running",
      color: "#667eea"
    },
    {
      number: 200,
      suffix: "+",
      label: "Websites Live",
      icon: <FaGlobe />,
      description: "Web applications and websites deployed globally",
      color: "#764ba2"
    },
    {
      number: 500,
      suffix: "+",
      label: "Designs Created",
      icon: <FaPalette />,
      description: "Creative designs and UI/UX solutions delivered",
      color: "#f093fb"
    },
    {
      number: 50000,
      suffix: "+",
      label: "Active Users",
      icon: <FaUsers />,
      description: "Users actively using our applications worldwide",
      color: "#4facfe"
    },
    {
      number: 100000,
      suffix: "+",
      label: "App Downloads",
      icon: <FaDownload />,
      description: "Total downloads across all our mobile applications",
      color: "#43e97b"
    },
    {
      number: 75,
      suffix: "+",
      label: "Startups Helped",
      icon: <FaBuilding />,
      description: "Startups we've helped launch and scale their business",
      color: "#fa709a"
    }
  ];

  return (
    <section id="achievements" style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
      paddingBottom: '80px'
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

      <Container style={{ position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <Row className="text-center mb-5">
          <Col lg={10} className="mx-auto" data-aos="fade-up">
            <div style={{
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
                Celebrating Our Success
              </span>
            </div>
            
            <h2 className="display-4 fw-bold mb-4" style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #475569 50%, #667eea 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Our Impact in Numbers
            </h2>
            
            <p className="fs-4 text-muted" style={{
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontWeight: '400'
            }}>
              Transforming ideas into reality with measurable results that speak for themselves
            </p>
          </Col>
        </Row>

        {/* Statistics Grid */}
        <Row className="g-4">
          {stats.map((stat, index) => (
            <Col lg={4} md={6} sm={12} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
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

      <style jsx>{`
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
        
        /* Desktop spacing optimization */
        @media (min-width: 769px) {
          .container {
            padding-left: 30px !important;
            padding-right: 30px !important;
          }
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          #achievements {
            min-height: auto !important;
            padding: 2rem 0 !important;
          }
          
          .container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          
          .display-4 {
            font-size: 2.2rem !important;
            line-height: 1.2 !important;
          }
          
          .fs-4 {
            font-size: 1rem !important;
            padding: 0 10px !important;
          }
          
          .badge {
            padding: 8px 16px !important;
            font-size: 0.9rem !important;
          }
          
          .badge svg {
            font-size: 1rem !important;
          }
          
          .premium-stat-card {
            padding: 25px 15px !important;
            border-radius: 20px !important;
            margin: 10px 0 !important;
            height: 280px !important;
          }
          
          .premium-stat-card h2 {
            font-size: 2.2rem !important;
          }
          
          .premium-stat-card h5 {
            font-size: 1rem !important;
          }
          
          .premium-stat-card p {
            font-size: 0.8rem !important;
            max-width: 100% !important;
          }
          
          .premium-stat-card .icon-container {
            width: 60px !important;
            height: 60px !important;
            border-radius: 15px !important;
          }
          
          .premium-stat-card .icon-container svg {
            font-size: 1.4rem !important;
          }
          
          .row {
            margin-left: -5px !important;
            margin-right: -5px !important;
          }
          
          .col-lg-4, .col-md-6 {
            padding-left: 5px !important;
            padding-right: 5px !important;
          }
        }
        
        @media (max-width: 576px) {
          #achievements {
            padding: 1.5rem 0 !important;
          }
          
          .container {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
          
          .display-4 {
            font-size: 1.8rem !important;
            margin-bottom: 15px !important;
          }
          
          .fs-4 {
            font-size: 0.9rem !important;
            padding: 0 5px !important;
          }
          
          .badge {
            padding: 6px 12px !important;
            font-size: 0.8rem !important;
          }
          
          .premium-stat-card {
            padding: 20px 10px !important;
            border-radius: 15px !important;
            height: 260px !important;
            margin: 8px 0 !important;
          }
          
          .premium-stat-card h2 {
            font-size: 2rem !important;
          }
          
          .premium-stat-card h5 {
            font-size: 0.9rem !important;
          }
          
          .premium-stat-card p {
            font-size: 0.75rem !important;
            line-height: 1.4 !important;
          }
          
          .premium-stat-card .icon-container {
            width: 50px !important;
            height: 50px !important;
            border-radius: 12px !important;
          }
          
          .premium-stat-card .icon-container svg {
            font-size: 1.2rem !important;
          }
          
          .row {
            margin-left: -2px !important;
            margin-right: -2px !important;
          }
          
          .col-lg-4, .col-md-6 {
            padding-left: 2px !important;
            padding-right: 2px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Achievements;
