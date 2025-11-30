import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { 
  FaUsers,
  FaRocket, 
  FaLightbulb,
  FaHandshake,
  FaCode,
  FaAward,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaStar,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import aboutUsImage from '../assets/aboutus.webp';
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

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageLoad = useCallback((e) => {
    // Image loaded handler
  }, []);

  const teamMembers = [
    {
      name: "Fahad Shafiq",
      role: "Mobile App Developer",
      image: fahadImage,
      portfolioImage: fahadPortfolio,
      skills: ["React Native", "Flutter", "Firebase", "Android", "iOS"],
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

  // Calculate cards per slide: 3 for desktop, 2 for tablet, 1 for mobile
  const cardsPerSlide = windowWidth <= 768 ? 1 : windowWidth <= 992 ? 2 : 3;
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

        {/* Our Team Slider */}
        <Row className="mt-5">
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
                    gap: windowWidth <= 768 ? '0' : windowWidth <= 992 ? '1rem' : '1.5rem',
                    padding: windowWidth <= 768 ? '0' : windowWidth <= 992 ? '0 10px' : '0 15px',
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
                              md={6} 
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
                              } : windowWidth <= 992 ? {
                                flex: '0 0 50%',
                                maxWidth: '50%',
                                paddingBottom: '24px'
                              } : {
                                paddingBottom: '24px'
                              }}
                            >
                              <div className="team-card-modern" style={{
                                position: 'relative',
                                height: '100%',
                                borderRadius: '28px',
                                overflow: 'visible',
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-12px)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.15)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                              }}>
                                {/* Image Section */}
                                <div style={{
                                  position: 'relative',
                                  width: '100%',
                                  height: windowWidth <= 768 ? '140px' : '170px',
                                  overflow: 'hidden',
                                  background: '#f8f9fa',
                                  borderRadius: '28px 28px 0 0'
                                }}>
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
                                
                                {/* Circle Avatar */}
                                <div style={{
                                  position: 'absolute',
                                  top: windowWidth <= 768 ? 'calc(140px - 40px)' : 'calc(170px - 50px)',
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  width: windowWidth <= 768 ? '80px' : '100px',
                                  height: windowWidth <= 768 ? '80px' : '100px',
                                  borderRadius: '50%',
                                  border: windowWidth <= 768 ? '2px solid #000000' : '3px solid #000000',
                                  overflow: 'hidden',
                                  boxShadow: windowWidth <= 768 ? '0 10px 30px rgba(0,0,0,0.25)' : '0 12px 35px rgba(0,0,0,0.25)',
                                  background: 'rgba(255,255,255,0.95)',
                                  backdropFilter: 'blur(10px)',
                                  zIndex: 10
                                }}>
                                  {member.image ? (
                                    <img 
                                      src={member.image} 
                                      alt={member.name}
                                      loading="lazy"
                                      decoding="async"
                                      onLoad={handleImageLoad}
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                        display: 'block',
                                        borderRadius: '50%'
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
                                      {member.name.charAt(0)}
                                    </div>
                                  )}
                                </div>
                                
                                {/* Content Section */}
                                <div style={{
                                  padding: windowWidth <= 768 ? '12px' : '16px',
                                  paddingTop: windowWidth <= 768 ? '50px' : '60px',
                                  background: 'transparent',
                                  flex: 1,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'space-between',
                                  borderRadius: '0 0 28px 28px'
                                }}>
                                  {/* Name and Role */}
                                  <div style={{ 
                                    marginBottom: windowWidth <= 768 ? '10px' : '14px',
                                    textAlign: 'center'
                                  }}>
                                    <h4 style={{
                                      fontSize: windowWidth <= 768 ? '1rem' : '1.3rem',
                                      fontWeight: '800',
                                      marginBottom: windowWidth <= 768 ? '4px' : '6px',
                                      background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
                                      WebkitBackgroundClip: 'text',
                                      WebkitTextFillColor: 'transparent',
                                      backgroundClip: 'text',
                                      textAlign: 'center'
                                    }}>
                                      {member.name}
                                    </h4>
                                    
                                    <div style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: windowWidth <= 768 ? '4px' : '6px',
                                      padding: windowWidth <= 768 ? '4px 10px' : '6px 14px',
                                      borderRadius: windowWidth <= 768 ? '16px' : '18px',
                                      background: member.gradient,
                                      color: 'white',
                                      fontWeight: '700',
                                      fontSize: windowWidth <= 768 ? '0.7rem' : '0.85rem',
                                      marginBottom: windowWidth <= 768 ? '6px' : '10px'
                                    }}>
                                      <FaStar style={{ fontSize: windowWidth <= 768 ? '0.55rem' : '0.7rem' }} />
                                      <span>{member.role}</span>
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
                                        color: 'rgba(255,255,255,0.9)',
                                        fontWeight: '600'
                                      }}>
                                        {member.experience}
                                      </span>
                                    </div>
                                    
                                    <p style={{
                                      fontSize: windowWidth <= 768 ? '0.7rem' : '0.85rem',
                                      color: 'rgba(255,255,255,0.9)',
                                      lineHeight: windowWidth <= 768 ? '1.5' : '1.6',
                                      marginBottom: '0',
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
                                      gap: windowWidth <= 768 ? '4px' : '6px',
                                      marginBottom: windowWidth <= 768 ? '12px' : '16px'
                                    }}>
                                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                                        <Badge 
                                          key={skillIndex} 
                                          style={{
                                            padding: windowWidth <= 768 ? '4px 10px' : '5px 12px',
                                            borderRadius: '10px',
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            color: 'rgba(255,255,255,0.95)',
                                            border: '1px solid rgba(255,255,255,0.3)',
                                            fontWeight: '600',
                                            fontSize: windowWidth <= 768 ? '0.65rem' : '0.7rem',
                                            backdropFilter: 'blur(5px)'
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
                                      borderTop: '1px solid rgba(255,255,255,0.2)'
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
                                          target="_blank"
                                          rel="noopener noreferrer"
                          style={{
                            width: windowWidth <= 768 ? '32px' : '36px',
                            height: windowWidth <= 768 ? '32px' : '36px',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(5px)',
                            color: social.color,
                            textDecoration: 'none',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            border: `1px solid rgba(255,255,255,0.3)`,
                            fontSize: windowWidth <= 768 ? '0.8rem' : '0.9rem'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)';
                            e.currentTarget.style.background = social.color;
                            e.currentTarget.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                            e.currentTarget.style.color = social.color;
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

            {/* Navigation Buttons */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="slider-nav-btn slider-nav-prev"
                  style={{
                    position: 'absolute',
                    left: windowWidth <= 768 ? 'calc(50% - 50px)' : windowWidth <= 1494 ? '10px' : '-60px',
                    top: windowWidth <= 768 ? 'auto' : '50%',
                    bottom: windowWidth <= 768 ? '-50px' : 'auto',
                    transform: windowWidth <= 768 ? 'none' : 'translateY(-50%)',
                    background: 'transparent',
                    border: '2px solid rgba(102, 126, 234, 0.3)',
                    borderRadius: '50%',
                    width: windowWidth <= 768 ? '40px' : windowWidth <= 992 ? '45px' : '50px',
                    height: windowWidth <= 768 ? '40px' : windowWidth <= 992 ? '45px' : '50px',
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
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.transform = windowWidth <= 768 ? 'scale(1.1)' : 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = windowWidth <= 768 ? 'scale(1)' : 'translateY(-50%) scale(1)';
                  }}
                >
                  <FaChevronLeft style={{ 
                    fontSize: windowWidth <= 768 ? '1rem' : windowWidth <= 992 ? '1.1rem' : '1.2rem',
                    width: windowWidth <= 768 ? '1rem' : windowWidth <= 992 ? '1.1rem' : '1.2rem',
                    height: windowWidth <= 768 ? '1rem' : windowWidth <= 992 ? '1.1rem' : '1.2rem',
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
                    right: windowWidth <= 768 ? 'calc(50% - 50px)' : windowWidth <= 1494 ? '10px' : '-60px',
                    top: windowWidth <= 768 ? 'auto' : '50%',
                    bottom: windowWidth <= 768 ? '-50px' : 'auto',
                    transform: windowWidth <= 768 ? 'none' : 'translateY(-50%)',
                    background: 'transparent',
                    border: '2px solid rgba(102, 126, 234, 0.3)',
                    borderRadius: '50%',
                    width: windowWidth <= 768 ? '40px' : windowWidth <= 992 ? '45px' : '50px',
                    height: windowWidth <= 768 ? '40px' : windowWidth <= 992 ? '45px' : '50px',
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
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.transform = windowWidth <= 768 ? 'scale(1.1)' : 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = windowWidth <= 768 ? 'scale(1)' : 'translateY(-50%) scale(1)';
                  }}
                >
                  <FaChevronRight style={{ 
                    fontSize: windowWidth <= 768 ? '1rem' : windowWidth <= 992 ? '1.1rem' : '1.2rem',
                    width: windowWidth <= 768 ? '1rem' : windowWidth <= 992 ? '1.1rem' : '1.2rem',
                    height: windowWidth <= 768 ? '1rem' : windowWidth <= 992 ? '1.1rem' : '1.2rem',
                    margin: 0,
                    padding: 0,
                    display: 'block'
                  }} />
                </button>
              </>
            )}
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

      <style>{`
        /* Slider Responsive Styles */
        @media (max-width: 1494px) and (min-width: 993px) {
          .slider-nav-btn {
            width: 50px !important;
            height: 50px !important;
          }
          
          .slider-nav-prev {
            left: 10px !important;
          }
          
          .slider-nav-next {
            right: 10px !important;
          }
        }
        
        @media (max-width: 992px) and (min-width: 769px) {
          .slider-nav-btn {
            width: 45px !important;
            height: 45px !important;
          }
          
          .slider-nav-prev {
            left: 10px !important;
          }
          
          .slider-nav-next {
            right: 10px !important;
          }
        }
        
        @media (max-width: 768px) {
          .slider-nav-btn {
            width: 40px !important;
            height: 40px !important;
          }
          
          .slider-nav-prev {
            left: calc(50% - 50px) !important;
            bottom: -50px !important;
            top: auto !important;
            transform: none !important;
          }
          
          .slider-nav-next {
            right: calc(50% - 50px) !important;
            bottom: -50px !important;
            top: auto !important;
            transform: none !important;
          }
          
          .slider-slide {
            padding: 0 !important;
            gap: 0 !important;
          }
        }
        
        @media (max-width: 576px) {
          .slider-nav-btn {
            width: 35px !important;
            height: 35px !important;
            font-size: 0.9rem !important;
          }
          
          .slider-nav-prev {
            left: calc(50% - 45px) !important;
            bottom: -45px !important;
          }
          
          .slider-nav-next {
            right: calc(50% - 45px) !important;
            bottom: -45px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
