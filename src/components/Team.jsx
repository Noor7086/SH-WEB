import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaEnvelope,
  FaUsers,
  FaStar,
  FaAward,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import CountUp from './CountUp';
import fahadImage from '../assets/fahad.webp';
import fahadPortfolio from '../assets/Android_portfolio/fahad .webp';
import mahnoorImage from '../assets/mahnoor profile.webp';
import mahnoorPortfolio from '../assets/Android_portfolio/mahnoor1.webp';
import tahaImage from '../assets/taha profile.webp';
import tahaPortfolio from '../assets/Android_portfolio/taha2.webp';
import ibrahimImage from '../assets/ibrahim profile.jpeg';
import ibrahimPortfolio from '../assets/ibrahim.webp';
import ubaidImage from '../assets/ubaid profile.webp';
import ubaidPortfolio from '../assets/ubaid portfolio .webp';
import fatimaImage from '../assets/fatima profile.jpeg';
import fatimaPortfolio from '../assets/fatima portfolio.png';

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const loadedImageRefs = useRef(new Set());

  // Handle image load
  const handleImageLoad = useCallback((e) => {
    const src = e.target.src;
    if (src && !loadedImageRefs.current.has(src)) {
      loadedImageRefs.current.add(src);
    }
  }, []);

  const teamMembers = [
    {
      name: "Fahad Shafiq",
      role: "Mobile App Developer",
      image: fahadImage,
      portfolioImage: fahadPortfolio,
      skills: ["React Native", "Flutter","Firebase", "Android", "iOS"],
      experience: "5+ years",
      description: "Building smooth, scalable mobile applications with cutting-edge technologies.",
      social: {
        linkedin: "https://www.linkedin.com/in/fahad-shafiq-074526223/",
        github: "https://github.com/Fahad542",
        twitter: "#",
        email: "fahadshafiq77@gmail.com"
      },
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      name: "Mahnoor",
      role: "Full Stack Developer",
      image: mahnoorImage,
      portfolioImage: mahnoorPortfolio,
      skills: ["React", "Node.js", "Django", "Next.js", "Flask"],
      experience: "4+ years",
      description: "Full-stack web developer specializing in modern MERN stack technologies.",
      social: {
        linkedin: "https://www.linkedin.com/in/mahnoor-azhar-75279922b/",
        github: "https://github.com/Noor7086",
        twitter: "#",
        email: "mahnoorazhar70@example.com"
      },
      gradient: "linear-gradient(135deg, #764ba2 0%, #f093fb 100%)"
    },
    {
      name: "Taha",
      role: "Website Developer",
      image: tahaImage,
      portfolioImage: tahaPortfolio,
      skills: ["HTML/CSS", "JavaScript", "React", "WordPress"],
      experience: "3+ years",
      description: "Crafting fast, responsive websites with modern web technologies.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "mirzataha2005@example.com"
      },
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      name: "Fatima",
      role: "Data Science & AI Professional",
      image: fatimaImage,
      portfolioImage: fatimaPortfolio,
      skills: ["Machine Learning", "Python", "Data Analysis", "Deep Learning", "AI Models"],
      experience: "3+ years",
      description: "Transforming data into intelligent solutions with advanced AI and machine learning technologies.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "fatima@example.com"
      },
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      name: "Ibrahim",
      role: "Backend Developer",
      image: ibrahimImage,
      portfolioImage: ibrahimPortfolio,
      skills: ["PHP", "Python", "Laravel", "React"],
      experience: "4+ years",
      description: "Building robust and scalable backend systems with modern technologies.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "ibrahim@example.com"
      },
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      name: "Ubaid",
      role: "Graphic Designer",
      image: ubaidImage,
      portfolioImage: ubaidPortfolio,
      skills: ["Logo Design", "Branding", "UI/UX", "Illustration"],
      experience: "4+ years",
      description: "Designing bold brand visuals and creative graphics.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "ubaid@example.com"
      },
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate cards per slide: 3 for desktop, 1 for mobile
  const cardsPerSlide = windowWidth <= 768 ? 1 : 3;
  const totalSlides = Math.ceil(teamMembers.length / cardsPerSlide);

  // Reset slide when switching between mobile/desktop
  useEffect(() => {
    setCurrentSlide(0);
  }, [cardsPerSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="team" style={{
      background: 'transparent',
      paddingTop: windowWidth <= 768 ? '5px' : '10px',
      paddingBottom: windowWidth <= 768 ? '50px' : '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container style={{ maxWidth: '1000px' }}>
        <Row className="text-center" style={{ marginBottom: windowWidth <= 768 ? '0.8rem' : '1rem' }}>
          <Col lg={8} className="mx-auto" data-aos="fade-up">
            <div className="premium-badge" style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '10px',
              boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
              border: '2px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              marginBottom: windowWidth <= 768 ? '10px' : '12px'
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
                Our Team
              </span>
            </div>
            
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              marginBottom: windowWidth <= 768 ? '0.5rem' : '0.7rem',
              background: 'linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.2'
            }}>
              Our Team
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              color: '#64748b',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto',
              fontWeight: '400'
            }}>
              Meet the talented individuals behind our success
            </p>
          </Col>
        </Row>

        {/* Team Members Slider */}
        <Row className="mb-5">
          <Col lg={12} className="position-relative" style={{
            paddingBottom: windowWidth <= 768 ? '60px' : '0'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden',
              borderRadius: '24px'
            }}>
              {/* Slider Container */}
              <div style={{
                display: 'flex',
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: `translateX(-${currentSlide * 100}%)`,
                willChange: 'transform'
              }}>
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="slider-slide" style={{
                    minWidth: '100%',
                    width: '100%',
                    flexShrink: 0,
                    display: 'flex',
                    gap: windowWidth <= 768 ? '0' : '1.5rem',
                    padding: windowWidth <= 768 ? '0' : '0 15px',
                    boxSizing: 'border-box'
                  }}>
                    <Row className="g-4" style={{ width: '100%', margin: 0 }}>
                      {(() => {
                        const startIndex = slideIndex * cardsPerSlide;
                        const endIndex = startIndex + cardsPerSlide;
                        const currentSlideMembers = teamMembers.slice(startIndex, endIndex);
                        const remainingSlots = cardsPerSlide - currentSlideMembers.length;
                        
                        // If last slide has fewer cards, fill with first cards to complete the row
                        const membersToShow = remainingSlots > 0 && slideIndex === totalSlides - 1
                          ? [...currentSlideMembers, ...teamMembers.slice(0, remainingSlots)]
                          : currentSlideMembers;
                        
                        return membersToShow.map((member, cardIndex) => {
                          const originalIndex = startIndex + cardIndex;
                          const actualIndex = originalIndex >= teamMembers.length 
                            ? cardIndex - currentSlideMembers.length 
                            : originalIndex;
                          return (
                            <Col 
                              lg={4} 
                              md={4} 
                              sm={12} 
                              xs={12} 
                              key={`${slideIndex}-${cardIndex}-${actualIndex}`}
                              style={windowWidth <= 768 ? {
                                width: '100%',
                                maxWidth: '100%',
                                flex: '0 0 100%',
                                paddingLeft: '15px',
                                paddingRight: '15px',
                                paddingBottom: '20px'
                              } : {
                                paddingBottom: '24px'
                              }}
                            >
              <div className="team-card-modern" style={{
                position: 'relative',
                height: '100%',
                borderRadius: '28px',
                overflow: 'visible',
                background: '#ffffff',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.boxShadow = `0 20px 60px ${member.gradient.includes('#667eea') ? 'rgba(102, 126, 234, 0.25)' : member.gradient.includes('#f093fb') ? 'rgba(245, 87, 108, 0.25)' : member.gradient.includes('#4facfe') ? 'rgba(79, 172, 254, 0.25)' : member.gradient.includes('#43e97b') ? 'rgba(67, 233, 123, 0.25)' : member.gradient.includes('#fa709a') ? 'rgba(250, 112, 154, 0.25)' : 'rgba(168, 237, 234, 0.25)'}, 0 8px 24px rgba(0,0,0,0.12)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)';
              }}>
                {/* Image Section with Overlay */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: windowWidth <= 768 ? '140px' : '170px',
                  overflow: 'hidden',
                  background: '#f8f9fa',
                  borderRadius: '28px 28px 0 0'
                }}>
                  {/* Background Portfolio Image */}
                  {(member.portfolioImage || member.image) ? (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 0
                    }}>
                      <img 
                        src={member.portfolioImage || member.image}
                        onLoad={handleImageLoad} 
                        alt={`${member.name} portfolio`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                      />
                    </div>
                  ) : (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: member.gradient,
                      zIndex: 0
                    }}></div>
                  )}
                  
                </div>
                
                {/* Circle Avatar - Overlapping between image and content, above name */}
                <div style={{
                  position: 'absolute',
                  top: windowWidth <= 768 ? 'calc(140px - 40px)' : 'calc(170px - 50px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: windowWidth <= 768 ? '80px' : '100px',
                  height: windowWidth <= 768 ? '80px' : '100px',
                  minWidth: windowWidth <= 768 ? '80px' : '100px',
                  minHeight: windowWidth <= 768 ? '80px' : '100px',
                  maxWidth: windowWidth <= 768 ? '80px' : '100px',
                  maxHeight: windowWidth <= 768 ? '80px' : '100px',
                  borderRadius: '50%',
                  border: windowWidth <= 768 ? '2px solid rgba(255,255,255,0.9)' : '3px solid rgba(255,255,255,0.9)',
                  overflow: 'hidden',
                  boxShadow: windowWidth <= 768 ? '0 10px 30px rgba(0,0,0,0.25), inset 0 0 0 2px rgba(255,255,255,0.2)' : '0 12px 35px rgba(0,0,0,0.25), inset 0 0 0 2px rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(10px)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.transform = 'translate(-50%, -50%) scale(1.1)';
                  }
                  e.currentTarget.style.transform = 'translateX(-50%) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.4), inset 0 0 0 5px rgba(255,255,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.transform = 'translate(-50%, -50%) scale(1)';
                  }
                  e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.25), inset 0 0 0 3px rgba(255,255,255,0.2)';
                }}>
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      onLoad={handleImageLoad}
                      width="300"
                      height="300"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) scale(1)',
                        width: '100%',
                        height: '100%',
                        minWidth: '100%',
                        minHeight: '100%',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block',
                        borderRadius: '50%',
                        transition: 'transform 0.5s ease',
                        willChange: 'transform'
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: member.gradient,
                      color: 'white',
                      fontSize: windowWidth <= 768 ? '2.2rem' : '3rem',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      letterSpacing: '2px'
                    }}>
                      {member.initial || member.name.charAt(0)}
                  </div>
                  )}
                  {/* Glow Effect */}
                  <div style={{
                    position: 'absolute',
                    inset: '-10px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${member.gradient.includes('#667eea') ? 'rgba(102, 126, 234, 0.3)' : 'rgba(118, 75, 162, 0.3)'} 0%, transparent 70%)`,
                    filter: 'blur(20px)',
                    zIndex: -1,
                    opacity: 0,
                    transition: 'opacity 0.5s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '0';
                  }}></div>
                </div>
                
                {/* Content Section */}
                <div style={{
                  padding: windowWidth <= 768 ? '12px' : '16px',
                  paddingTop: windowWidth <= 768 ? '50px' : '60px',
                  background: 'linear-gradient(to bottom, #ffffff 0%, #fafbfc 100%)',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '0 0 28px 28px'
                }}>
                  {/* Name and Role */}
                  <div style={{ 
                    marginBottom: windowWidth <= 768 ? '10px' : '14px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <h4 style={{
                      fontSize: windowWidth <= 768 ? '1rem' : '1.3rem',
                      fontWeight: '800',
                      marginBottom: windowWidth <= 768 ? '4px' : '6px',
                      background: 'linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      letterSpacing: windowWidth <= 768 ? '-0.3px' : '-0.5px',
                      lineHeight: windowWidth <= 768 ? '1.3' : '1.2',
                      textAlign: 'center'
                    }}>
                      {member.name}
                    </h4>
                    
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: windowWidth <= 768 ? '4px' : '6px',
                      padding: windowWidth <= 768 ? '4px 10px' : '6px 14px',
                      borderRadius: windowWidth <= 768 ? '16px' : '18px',
                      background: member.gradient,
                      color: 'white',
                      fontWeight: '700',
                      fontSize: windowWidth <= 768 ? '0.7rem' : '0.85rem',
                      boxShadow: `0 4px 12px ${member.gradient.includes('#667eea') ? 'rgba(102, 126, 234, 0.3)' : 'rgba(118, 75, 162, 0.3)'}`,
                      marginBottom: windowWidth <= 768 ? '6px' : '10px',
                      whiteSpace: 'nowrap'
                    }}>
                      <FaStar style={{ fontSize: windowWidth <= 768 ? '0.55rem' : '0.7rem' }} />
                      <span style={{ color: 'white', fontWeight: '700', fontSize: 'inherit' }}>{member.role}</span>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: windowWidth <= 768 ? '4px' : '5px',
                      marginBottom: windowWidth <= 768 ? '8px' : '12px'
                    }}>
                      <FaAward style={{ color: '#ffc107', fontSize: windowWidth <= 768 ? '0.65rem' : '0.8rem' }} />
                      <span style={{
                        fontSize: windowWidth <= 768 ? '0.7rem' : '0.8rem',
                        color: '#6c757d',
                        fontWeight: '600'
                      }}>
                        {member.experience}
                      </span>
                    </div>
                    
                    <p style={{
                      fontSize: windowWidth <= 768 ? '0.7rem' : '0.85rem',
                      color: '#64748b',
                      lineHeight: windowWidth <= 768 ? '1.5' : '1.6',
                      marginBottom: '0',
                      fontWeight: '400',
                      textAlign: 'center'
                    }}>
                    {member.description}
                    </p>
                  </div>

                  {/* Skills and Social */}
                  <div>
                    {/* Skills */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: windowWidth <= 768 ? '4px' : '6px',
                      marginBottom: windowWidth <= 768 ? '12px' : '16px'
                    }}>
                    {member.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        style={{
                            padding: windowWidth <= 768 ? '4px 10px' : '5px 12px',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                            color: '#475569',
                            border: '1.5px solid #e2e8f0',
                            fontWeight: '600',
                            fontSize: windowWidth <= 768 ? '0.65rem' : '0.7rem',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'default'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.background = member.gradient;
                            e.target.style.color = 'white';
                            e.target.style.borderColor = 'transparent';
                            e.target.style.boxShadow = `0 4px 12px ${member.gradient.includes('#667eea') ? 'rgba(102, 126, 234, 0.3)' : 'rgba(118, 75, 162, 0.3)'}`;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.background = 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)';
                            e.target.style.color = '#475569';
                            e.target.style.borderColor = '#e2e8f0';
                            e.target.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                    {/* Social Links */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: windowWidth <= 768 ? '8px' : '10px',
                      paddingTop: windowWidth <= 768 ? '10px' : '12px',
                      borderTop: '1px solid #e2e8f0'
                    }}>
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
                            width: windowWidth <= 768 ? '32px' : '36px',
                            height: windowWidth <= 768 ? '32px' : '36px',
                            borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                          color: social.color,
                          textDecoration: 'none',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            border: `2px solid ${social.color}20`,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                            fontSize: windowWidth <= 768 ? '0.8rem' : '0.9rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)';
                            e.currentTarget.style.background = social.color;
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.borderColor = social.color;
                            e.currentTarget.style.boxShadow = `0 8px 24px ${social.color}50`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';
                            e.currentTarget.style.color = social.color;
                            e.currentTarget.style.borderColor = `${social.color}20`;
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                        }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  </div>
                </div>
              </div>
            </Col>
                          );
                        });
                      })()}
                    </Row>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons - Outside slider container */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="slider-nav-btn slider-nav-prev"
                  style={{
                    position: 'absolute',
                    left: windowWidth <= 768 ? 'calc(50% - 50px)' : '-60px',
                    top: windowWidth <= 768 ? 'auto' : '50%',
                    bottom: windowWidth <= 768 ? '-50px' : 'auto',
                    transform: windowWidth <= 768 ? 'none' : 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '2px solid rgba(102, 126, 234, 0.3)',
                    borderRadius: '50%',
                    width: windowWidth <= 768 ? '40px' : '50px',
                    height: windowWidth <= 768 ? '40px' : '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    color: '#667eea',
                    padding: 0,
                    margin: 0,
                    lineHeight: 1
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                    e.currentTarget.style.transform = windowWidth <= 768 ? 'scale(1.1)' : 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                    e.currentTarget.style.transform = windowWidth <= 768 ? 'scale(1)' : 'translateY(-50%) scale(1)';
                  }}
                >
                  <FaChevronLeft style={{ 
                    fontSize: windowWidth <= 768 ? '1rem' : '1.2rem',
                    width: windowWidth <= 768 ? '1rem' : '1.2rem',
                    height: windowWidth <= 768 ? '1rem' : '1.2rem',
                    margin: 0,
                    padding: 0,
                    display: 'block'
                  }} />
                </button>

                <button
                  onClick={nextSlide}
                  className="slider-nav-btn slider-nav-next"
                  style={{
                    position: 'absolute',
                    right: windowWidth <= 768 ? 'calc(50% - 50px)' : '-60px',
                    top: windowWidth <= 768 ? 'auto' : '50%',
                    bottom: windowWidth <= 768 ? '-50px' : 'auto',
                    transform: windowWidth <= 768 ? 'none' : 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '2px solid rgba(102, 126, 234, 0.3)',
                    borderRadius: '50%',
                    width: windowWidth <= 768 ? '40px' : '50px',
                    height: windowWidth <= 768 ? '40px' : '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    color: '#667eea',
                    padding: 0,
                    margin: 0
              }}
              onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                    e.currentTarget.style.transform = windowWidth <= 768 ? 'scale(1.1)' : 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                    e.currentTarget.style.transform = windowWidth <= 768 ? 'scale(1)' : 'translateY(-50%) scale(1)';
                  }}
                >
                  <FaChevronRight style={{ 
                    fontSize: windowWidth <= 768 ? '1rem' : '1.2rem',
                    width: windowWidth <= 768 ? '1rem' : '1.2rem',
                    height: windowWidth <= 768 ? '1rem' : '1.2rem',
                    margin: 0,
                    padding: 0,
                    display: 'block'
                  }} />
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {totalSlides > 1 && (
              <div className="slider-dots" style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '2rem',
                position: 'relative',
                zIndex: 10
              }}>
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      width: currentSlide === index ? '30px' : '12px',
                      height: '12px',
                      borderRadius: '6px',
                      border: 'none',
                      background: currentSlide === index 
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                        : 'rgba(102, 126, 234, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      padding: 0
                    }}
                    onMouseEnter={(e) => {
                      if (currentSlide !== index) {
                        e.target.style.background = 'rgba(102, 126, 234, 0.5)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentSlide !== index) {
                        e.target.style.background = 'rgba(102, 126, 234, 0.3)';
                      }
                    }}
                  />
                ))}
              </div>
            )}
            </Col>
        </Row>
      </Container>

      <style>{`
        @keyframes patternMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(20px, 20px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
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
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          border-radius: 30px;
          z-index: 1;
        }
        
        .team-card:hover::before {
          opacity: 1;
        }
        
        .team-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          border-radius: 50%;
        }
        
        .team-card:hover::after {
          opacity: 1;
        }
        
        .team-avatar {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          animation: float 6s ease-in-out infinite;
        }
        
        .team-card:hover .team-avatar {
          transform: scale(1.15) translateY(-5px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), inset 0 0 0 3px rgba(255,255,255,0.3) !important;
        }
        
        .social-link {
          text-decoration: none !important;
        }
        
        .social-link::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transform: translate(-50%, -50%);
          transition: width 0.4s ease, height 0.4s ease;
        }
        
        .social-link:hover::before {
          width: 100%;
          height: 100%;
        }
        
        .skill-badge {
          position: relative;
          overflow: hidden;
        }
        
        .skill-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s ease;
        }
        
        .skill-badge:hover::before {
          left: 100%;
        }
        
        .team-header {
          position: relative;
        }
        
        .team-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        @media (max-width: 768px) {
          .stat-card {
            margin-bottom: 15px;
          }
          
          /* Mobile Badge Styles */
          .premium-badge {
            padding: 6px 12px !important;
            font-size: 0.7rem !important;
            margin-bottom: 12px !important;
          }
          
          /* Mobile Spacing Reduction */
          .position-relative {
            padding-top: 50px !important;
            padding-bottom: 50px !important;
          }
          
          .mb-5 {
            margin-bottom: 2rem !important;
          }
          
          /* Mobile Heading Sizes */
          h2 {
            font-size: 1.75rem !important;
          }
          
          h3 {
            font-size: 1.3rem !important;
          }
          
          .lead {
            font-size: 1rem !important;
          }
          
          .display-6 {
            font-size: 1.8rem !important;
          }
        }
        
        @media (max-width: 576px) {
          /* Small Mobile Badge Styles */
          .premium-badge {
            padding: 4px 8px !important;
            font-size: 0.6rem !important;
            margin-bottom: 10px !important;
          }
          
          /* Small Mobile Spacing Reduction */
          .position-relative {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          
          .mb-5 {
            margin-bottom: 1.5rem !important;
          }
          
          .stat-card {
            margin-bottom: 10px;
          }
          
          /* Small Mobile Heading Sizes */
          h2 {
            font-size: 1.5rem !important;
          }
          
          h3 {
            font-size: 1.1rem !important;
          }
          
          .lead {
            font-size: 0.9rem !important;
          }
          
          .display-6 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
