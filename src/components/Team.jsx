import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaEnvelope,
  FaUsers,
  FaStar,
  FaAward
} from 'react-icons/fa';
import CountUp from './CountUp';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      skills: ["Leadership", "Strategy", "Business Development"],
      experience: "15+ years",
      description: "Visionary leader with extensive experience in software development and business strategy.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "sarah@techhouse.com"
      },
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      skills: ["Architecture", "Cloud", "DevOps"],
      experience: "12+ years",
      description: "Technology expert specializing in scalable architecture and cloud solutions.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "michael@techhouse.com"
      },
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      skills: ["React", "Node.js", "Python"],
      experience: "8+ years",
      description: "Full-stack developer passionate about creating innovative and user-friendly applications.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "emily@techhouse.com"
      },
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      name: "David Kim",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      experience: "6+ years",
      description: "Creative designer focused on creating intuitive and beautiful user experiences.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "david@techhouse.com"
      },
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      name: "Lisa Wang",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      skills: ["Agile", "Scrum", "Risk Management"],
      experience: "10+ years",
      description: "Experienced project manager ensuring successful delivery of complex software projects.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "lisa@techhouse.com"
      },
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      name: "Alex Thompson",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      skills: ["Docker", "Kubernetes", "AWS"],
      experience: "7+ years",
      description: "DevOps specialist focused on automation and infrastructure optimization.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "alex@techhouse.com"
      },
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ];

  return (
    <section id="team" className="py-5" style={{
      background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'
    }}>
      <Container className="py-5">
        <Row className="text-center mb-5">
          <Col lg={8} className="mx-auto" data-aos="fade-up">
            <span className="badge px-4 py-3 fw-bold mb-3" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontSize: '0.9rem'
            }}>
              <FaUsers className="me-2" />
              Our Team
            </span>
            <h2 className="display-5 fw-bold mb-4">
              Meet Our 
              <span style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}> Expert Team</span>
            </h2>
            <p className="lead text-muted fs-5">
              Our talented team of professionals brings together diverse expertise 
              to deliver exceptional software solutions for your business.
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {teamMembers.map((member, index) => (
            <Col lg={4} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="h-100 border-0 team-card" style={{
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                borderRadius: '25px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
              }}>
                <div className="team-header" style={{
                  background: member.gradient,
                  padding: '40px 20px 20px',
                  textAlign: 'center',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div className="position-absolute top-0 end-0 w-100 h-100" style={{
                    background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 20 0 L 0 0 0 20\' fill=\'none\' stroke=\'rgba(255,255,255,0.1)\' stroke-width=\'0.5\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100\' height=\'100\' fill=\'url(%23grid)\'/%3E%3C/svg%3E")',
                    opacity: 0.3
                  }}></div>
                  
                  <div className="position-relative" style={{ zIndex: 2 }}>
                    <div className="team-avatar mb-3" style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      margin: '0 auto',
                      border: '4px solid rgba(255,255,255,0.3)',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                    }}>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <h4 className="fw-bold mb-1 fs-4">{member.name}</h4>
                    <p className="mb-2 opacity-90">{member.role}</p>
                    <Badge className="px-3 py-2" style={{
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}>
                      <FaStar className="me-1" />
                      {member.experience}
                    </Badge>
                  </div>
                </div>
                
                <Card.Body className="p-4">
                  <Card.Text className="text-muted mb-4" style={{ lineHeight: '1.7' }}>
                    {member.description}
                  </Card.Text>
                  
                  <div className="mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        className="me-2 mb-2 px-3 py-2"
                        style={{
                          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                          color: '#495057',
                          border: '1px solid #dee2e6',
                          fontWeight: '600'
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="d-flex justify-content-center gap-3">
                    {[
                      { icon: <FaLinkedin />, url: member.social.linkedin, color: '#0077b5' },
                      { icon: <FaGithub />, url: member.social.github, color: '#333' },
                      { icon: <FaTwitter />, url: member.social.twitter, color: '#1da1f2' },
                      { icon: <FaEnvelope />, url: `mailto:${member.social.email}`, color: '#ea4335' }
                    ].map((social, socialIndex) => (
                      <a 
                        key={socialIndex}
                        href={social.url} 
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: '45px',
                          height: '45px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                          color: social.color,
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          border: '2px solid #dee2e6'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-3px) scale(1.1)';
                          e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0) scale(1)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Team Stats */}
        <Row className="text-center mt-5" data-aos="fade-up">
          {[
            { number: 50, suffix: "+", label: "Team Members", icon: <FaUsers />, color: "#667eea" },
            { number: 15, suffix: "+", label: "Years Experience", icon: <FaAward />, color: "#28a745" },
            { number: 25, suffix: "+", label: "Technologies", icon: <FaStar />, color: "#ffc107" },
            { number: 100, suffix: "%", label: "Dedication", icon: <FaAward />, color: "#dc3545" }
          ].map((stat, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <div className="stat-card p-4 rounded-4" style={{
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.background = 'rgba(255,255,255,0.9)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'rgba(255,255,255,0.8)';
              }}>
                <div className="mb-3" style={{ color: stat.color, fontSize: '2.5rem' }}>
                  {stat.icon}
                </div>
                <h3 className="display-6 fw-bold mb-2" style={{ color: stat.color }}>
                  <CountUp 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    duration={2000 + index * 200} 
                    delay={index * 100}
                  />
                </h3>
                <p className="lead text-muted mb-0">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .team-card {
          position: relative;
        }
        
        .team-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          border-radius: 25px;
        }
        
        .team-card:hover::before {
          opacity: 1;
        }
        
        .team-avatar {
          transition: all 0.3s ease;
        }
        
        .team-card:hover .team-avatar {
          transform: scale(1.1);
        }
        
        .social-link:hover {
          text-decoration: none;
        }
        
        @media (max-width: 768px) {
          .stat-card {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
