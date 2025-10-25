import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { 
  FaQuoteLeft, 
  FaStar, 
  FaLinkedin, 
  FaBuilding,
  FaRocket,
  FaThumbsUp
} from 'react-icons/fa';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Function to limit review text to specified number of words
  const limitWords = (text, maxWords = 25) => {
    const words = text.split(' ');
    if (words.length <= maxWords) {
      return text;
    }
    return words.slice(0, maxWords).join(' ') + '...';
  };

  // Function to handle review change with animation
  const changeReview = (newIndex) => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReview(newIndex);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 200);
  };

  // Function to handle manual navigation (pause auto-play)
  const handleManualNavigation = (newIndex) => {
    setIsAutoPlaying(false); // Pause auto-play when user manually navigates
    changeReview(newIndex);
    
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      changeReview((currentReview + 1) % reviews.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [currentReview, isAutoPlaying]);

  const reviews = [
    {
      id: 1,
      name: "Jennifer Martinez",
      position: "CEO",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      review: "TechHouse transformed our business completely. Their e-commerce platform increased our online sales by 300% in just 6 months. The team's expertise and dedication are unmatched. They didn't just deliver a product; they delivered a solution that perfectly fits our business needs.",
      project: "E-Commerce Platform",
      results: ["300% increase in sales", "50% reduction in cart abandonment", "99.9% uptime"],
      linkedin: "#"
    },
    {
      id: 2,
      name: "Robert Chen",
      position: "CTO",
      company: "HealthCare Network",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      review: "The healthcare management system developed by TechHouse exceeded all our expectations. It's not just HIPAA compliant but also incredibly user-friendly. Our staff efficiency improved by 40%, and patient satisfaction scores are at an all-time high.",
      project: "Healthcare Management System",
      results: ["40% efficiency improvement", "100% HIPAA compliance", "95% staff satisfaction"],
      linkedin: "#"
    },
    {
      id: 3,
      name: "Amanda Rodriguez",
      position: "Product Manager",
      company: "Digital Bank",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      review: "Our mobile banking app developed by TechHouse has been a game-changer. With 500,000+ downloads and a 4.8-star rating, it's clear our customers love it. The security features and user experience are top-notch.",
      project: "FinTech Mobile App",
      results: ["500,000+ downloads", "4.8/5 app store rating", "Zero security breaches"],
      linkedin: "#"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Director of IT",
      company: "Enterprise Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      review: "The cloud migration project was executed flawlessly. TechHouse managed to migrate 100+ applications with less than 1 hour of downtime. Our infrastructure costs reduced by 40%, and performance improved significantly.",
      project: "Cloud Migration Solution",
      results: ["100+ applications migrated", "<1 hour downtime", "40% cost reduction"],
      linkedin: "#"
    },
    {
      id: 5,
      name: "Sarah Williams",
      position: "Operations Director",
      company: "Smart Home Inc.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      review: "TechHouse's IoT solution revolutionized our smart home platform. The integration capabilities and user interface are exceptional. Our customers are saving 30% on energy costs, and we've achieved 98% customer satisfaction.",
      project: "IoT Smart Home System",
      results: ["30% energy savings", "98% customer satisfaction", "1,000+ devices connected"],
      linkedin: "#"
    },
    {
      id: 6,
      name: "Michael Johnson",
      position: "VP of Technology",
      company: "Tech Corporation",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      review: "The AI analytics platform developed by TechHouse has given us unprecedented insights into our business operations. The predictive analytics capabilities have improved our decision-making process by 60%. Truly innovative work!",
      project: "AI-Powered Analytics Platform",
      results: ["95% prediction accuracy", "60% improved decision making", "10,000+ insights generated"],
      linkedin: "#"
    }
  ];


  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={index < rating ? "text-warning" : "text-muted"} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-5 position-relative overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '100px',
      paddingBottom: '100px'
    }}>
      {/* Premium Background Elements */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 1 }}>
        {/* Geometric Patterns */}
        <div className="position-absolute" style={{
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'linear-gradient(45deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%)',
          borderRadius: '50%',
          transform: 'rotate(45deg)'
        }}></div>
        
        <div className="position-absolute" style={{
          bottom: '20%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, rgba(240,147,251,0.05) 0%, rgba(102,126,234,0.05) 100%)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          transform: 'rotate(-30deg)'
        }}></div>
        
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="position-absolute"
            style={{
              width: '60px',
              height: '60px',
              background: `rgba(${102 + i * 20}, ${126 + i * 15}, ${234 + i * 10}, 0.08)`,
              borderRadius: '50%',
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animation: `float ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      <Container className="position-relative" style={{ zIndex: 2 }}>
        {/* Two Column Layout */}
        <Row className="align-items-center">
          {/* Left Section - Text Content */}
          <Col lg={6} md={12} className="mb-5 mb-lg-0">
            <div className="text-content">
              <h2 className="display-4 fw-bold mb-4" style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2',
                fontSize: '3.5rem'
              }}>
                What Our 
                <span style={{ 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'block',
                  marginTop: '10px'
                }}>
                  Clients Say
                </span>
              </h2>
              
              <p className="lead fs-4 mb-4" style={{
                lineHeight: '1.6',
                fontWeight: '400',
                color: '#64748b',
                fontSize: '1.25rem'
              }}>
                Over 700 clients have used our services to grow their businesses with our smart solutions and technologies. Our main goal is to bring superior quality to the innovative technology developed by our professional team.
              </p>
              
              {/* Auto-play Indicator */}
              <div className="d-flex align-items-center gap-2 mb-3 auto-play-indicator">
                <div 
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: isAutoPlaying ? '#28a745' : '#dc3545',
                    animation: isAutoPlaying ? 'pulse 2s infinite' : 'none'
                  }}
                ></div>
                <small style={{ color: '#64748b', fontSize: '0.85rem' }}>
                  {isAutoPlaying ? 'Auto-playing' : 'Paused'}
                </small>
              </div>

              {/* Navigation Arrows */}
              <div className="d-flex gap-3 navigation-buttons">
                <button
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    border: '2px solid #667eea',
                    background: 'transparent',
                    color: '#667eea',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#667eea';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#667eea';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  onClick={() => handleManualNavigation(currentReview === 0 ? reviews.length - 1 : currentReview - 1)}
                >
                  ←
                </button>
                <button
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    border: '2px solid #667eea',
                    background: 'transparent',
                    color: '#667eea',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#667eea';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#667eea';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  onClick={() => handleManualNavigation((currentReview + 1) % reviews.length)}
                >
                  →
                </button>
              </div>
            </div>
          </Col>

          {/* Right Section - Testimonial Container */}
          <Col lg={6} md={12}>
            <div className="testimonial-wrapper">
              <div className="testimonial-container jiggly-blob" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '45% 55% 60% 40% / 50% 45% 55% 50%',
                padding: '50px 40px',
                position: 'relative',
                overflow: 'visible',
                boxShadow: '0 30px 100px rgba(102, 126, 234, 0.4)',
                border: 'none',
                backdropFilter: 'blur(20px)',
                height: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transform: 'rotate(-2deg)',
                width: '100%',
                maxWidth: '100%',
                animation: 'jiggleBlob 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                willChange: 'border-radius, transform'
              }}>
                {/* Background Pattern */}
                <div className="position-absolute" style={{
                  top: '-80px',
                  right: '-60px',
                  width: '250px',
                  height: '250px',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)',
                  borderRadius: '50%',
                  opacity: 0.6
                }}></div>
                
                <div className="position-absolute" style={{
                  bottom: '-50px',
                  left: '-40px',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)',
                  borderRadius: '50%',
                  opacity: 0.4
                }}></div>
                
                <div className="position-absolute" style={{
                  top: '20%',
                  left: '10%',
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
                  borderRadius: '50%',
                  opacity: 0.5
                }}></div>
                
                <div className="position-relative" style={{ zIndex: 2, padding: '30px 30px' }}>
                  {/* Review Text */}
                  <div 
                    key={currentReview}
                    className="review-content"
                    style={{
                      transition: 'all 0.3s ease-in-out',
                      opacity: isAnimating ? 0 : 1,
                      transform: isAnimating ? 'translateY(20px)' : 'translateY(0px)'
                    }}
                  >
                    <p className="lead fs-4 mb-4 text-white" style={{
                      lineHeight: '1.6',
                      fontWeight: '400',
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                      textAlign: 'left',
                      marginBottom: '30px',
                      padding: '20px 20px'
                    }}>
                      "{limitWords(reviews[currentReview].review, 25)}"
                    </p>
                  </div>
                  
                  {/* Client Info */}
                  <div 
                    key={`client-${currentReview}`}
                    className="client-info d-flex align-items-center"
                    style={{ 
                      padding: '20px 20px',
                      transition: 'all 0.3s ease-in-out',
                      opacity: isAnimating ? 0 : 1,
                      transform: isAnimating ? 'translateY(20px)' : 'translateY(0px)'
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid rgba(255,255,255,0.3)',
                      marginRight: '15px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      flexShrink: 0
                    }}>
                      <img 
                        src={reviews[currentReview].image} 
                        alt={reviews[currentReview].name}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover' 
                        }}
                      />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1 text-white" style={{ 
                        fontSize: '1.1rem',
                        lineHeight: '1.2'
                      }}>
                        {reviews[currentReview].name}
                      </h5>
                      <p className="mb-0 text-white-50" style={{ 
                        fontSize: '0.9rem',
                        lineHeight: '1.3'
                      }}>
                        {reviews[currentReview].position} - {reviews[currentReview].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Review Navigation Dots */}
        <Row className="text-center mb-5 navigation-dots-row" data-aos="fade-up" style={{ marginTop: '40px' }}>
          <Col>
            <div className="d-flex justify-content-center gap-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  style={{
                    width: index === currentReview ? '16px' : '12px',
                    height: index === currentReview ? '16px' : '12px',
                    borderRadius: '50%',
                    border: 'none',
                    background: index === currentReview 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'rgba(102,126,234,0.3)',
                    boxShadow: index === currentReview 
                      ? '0 4px 15px rgba(102, 126, 234, 0.4)'
                      : '0 2px 8px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => setCurrentReview(index)}
                  onMouseEnter={(e) => {
                    if (index !== currentReview) {
                      e.currentTarget.style.background = 'rgba(102,126,234,0.5)';
                      e.currentTarget.style.transform = 'scale(1.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentReview) {
                      e.currentTarget.style.background = 'rgba(102,126,234,0.3)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                />
              ))}
            </div>
          </Col>
        </Row>


      </Container>

      <style jsx>{`
        @keyframes jiggleBlob {
          0% { 
            border-radius: 45% 55% 60% 40% / 50% 45% 55% 50%;
            transform: rotate(-2deg) translateX(0px) translateY(0px);
          }
          20% { 
            border-radius: 50% 50% 45% 55% / 45% 50% 50% 55%;
            transform: rotate(-2deg) translateX(1px) translateY(-0.5px);
          }
          40% { 
            border-radius: 40% 60% 50% 50% / 50% 45% 55% 50%;
            transform: rotate(-2deg) translateX(-0.5px) translateY(1px);
          }
          60% { 
            border-radius: 55% 45% 50% 50% / 50% 55% 45% 50%;
            transform: rotate(-2deg) translateX(0.5px) translateY(0.5px);
          }
          80% { 
            border-radius: 50% 50% 55% 45% / 45% 50% 50% 55%;
            transform: rotate(-2deg) translateX(-0.3px) translateY(-0.3px);
          }
          100% { 
            border-radius: 45% 55% 60% 40% / 50% 45% 55% 50%;
            transform: rotate(-2deg) translateX(0px) translateY(0px);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
        
        .fade-in {
          animation: fadeInUp 0.3s ease-out;
        }
        
        .fade-out {
          animation: fadeInUp 0.3s ease-out reverse;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .review-card:hover {
          box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
        }
        
        /* Desktop spacing optimization */
        @media (min-width: 769px) {
          .container {
            max-width: 1200px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          
          .text-content {
            padding-right: 20px !important;
          }
          
          .testimonial-wrapper {
            padding-left: 20px !important;
          }
          
          .testimonial-container {
            max-width: 100% !important;
          }
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          #reviews {
            min-height: auto !important;
            padding: 1.5rem 0 !important;
          }
          
          .testimonial-container {
            height: auto !important;
            min-height: 350px !important;
            padding: 25px 20px !important;
            border-radius: 25px !important;
            transform: rotate(0deg) !important;
            margin: 15px 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          
          .display-4 {
            font-size: 2.2rem !important;
            line-height: 1.2 !important;
            text-align: center !important;
          }
          
          .lead.fs-4 {
            font-size: 1rem !important;
            padding: 0 5px !important;
            text-align: center !important;
          }
          
          .navigation-buttons {
            gap: 15px !important;
            justify-content: center !important;
            margin-top: 20px !important;
          }
          
          .navigation-buttons button {
            width: 40px !important;
            height: 40px !important;
            font-size: 1rem !important;
          }
          
          .client-info {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
            padding: 15px !important;
          }
          
          .client-info img {
            margin: 0 auto 10px auto !important;
            width: 60px !important;
            height: 60px !important;
          }
          
          .review-content p {
            font-size: 0.95rem !important;
            padding: 15px !important;
            text-align: center !important;
            line-height: 1.5 !important;
          }
          
          .container {
            padding-left: 5px !important;
            padding-right: 5px !important;
            max-width: 100% !important;
          }
          
          .row {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          
          .col-lg-6, .col-md-12 {
            padding-left: 5px !important;
            padding-right: 5px !important;
          }
          
          .text-content {
            padding-right: 0 !important;
            text-align: center !important;
          }
          
          .testimonial-wrapper {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          
          .auto-play-indicator {
            justify-content: center !important;
            margin-bottom: 20px !important;
          }
          
          .navigation-dots-row {
            margin-top: 30px !important;
          }
        }
        
        @media (max-width: 576px) {
          #reviews {
            padding: 1rem 0 !important;
          }
          
          .testimonial-container {
            padding: 20px 15px !important;
            border-radius: 20px !important;
            min-height: 300px !important;
            margin: 10px 0 !important;
          }
          
          .display-4 {
            font-size: 1.8rem !important;
            margin-bottom: 15px !important;
          }
          
          .lead.fs-4 {
            font-size: 0.9rem !important;
            padding: 0 !important;
            margin-bottom: 20px !important;
          }
          
          .navigation-buttons {
            gap: 10px !important;
            margin-top: 15px !important;
          }
          
          .navigation-buttons button {
            width: 35px !important;
            height: 35px !important;
            font-size: 0.9rem !important;
          }
          
          .client-info {
            padding: 10px !important;
          }
          
          .client-info img {
            width: 50px !important;
            height: 50px !important;
          }
          
          .review-content p {
            font-size: 0.85rem !important;
            padding: 10px !important;
            line-height: 1.4 !important;
          }
          
          .container {
            padding-left: 2px !important;
            padding-right: 2px !important;
          }
          
          .col-lg-6, .col-md-12 {
            padding-left: 2px !important;
            padding-right: 2px !important;
          }
          
          .navigation-dots-row {
            margin-top: 25px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Reviews;
