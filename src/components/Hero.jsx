import React, { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaRocket, FaArrowRight, FaPlay, FaCheckCircle } from 'react-icons/fa';
import CountUp from './CountUp';
import earthImage from '../assets/earth.webp';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="hero-section position-relative overflow-hidden"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        position: 'relative',
        margin: 0,
        padding: '120px 0 0 0',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
      }}
    >
      {/* Premium Background System */}
      <div className="hero-bg-system position-absolute w-100 h-100" style={{ zIndex: 1, top: 0, left: 0, margin: 0, padding: 0 }}>
        {/* Animated Gradient Overlay */}
        <div className="gradient-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 25%, rgba(240, 147, 251, 0.1) 50%, rgba(102, 126, 234, 0.1) 75%, rgba(118, 75, 162, 0.1) 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}></div>


        {/* Floating Premium Elements */}
        <div className="floating-elements" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: `translateY(${scrollY * 0.2}px)`
        }}>
          {/* Premium Geometric Shapes */}
          <div className="premium-shape shape-1" style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'premiumFloat 20s ease-in-out infinite',
            filter: 'blur(1px)'
          }}></div>
          
          <div className="premium-shape shape-2" style={{
            position: 'absolute',
            top: '60%',
            right: '8%',
            width: '250px',
            height: '250px',
            background: 'linear-gradient(45deg, rgba(118, 75, 162, 0.08) 0%, rgba(240, 147, 251, 0.08) 100%)',
            borderRadius: '40px',
            animation: 'premiumFloat 25s ease-in-out infinite reverse',
            filter: 'blur(1px)',
            transform: 'rotate(45deg)'
          }}></div>
          
          <div className="premium-shape shape-3" style={{
            position: 'absolute',
            bottom: '20%',
            left: '20%',
            width: '200px',
            height: '200px',
            background: 'conic-gradient(from 0deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1), rgba(240, 147, 251, 0.1), rgba(102, 126, 234, 0.1))',
            borderRadius: '50%',
            animation: 'premiumFloat 18s ease-in-out infinite',
            filter: 'blur(1px)'
          }}></div>

          {/* Premium Glow Effects */}
          <div className="glow-effect glow-1" style={{
            position: 'absolute',
            top: '30%',
            right: '15%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 60%)',
            borderRadius: '50%',
            animation: 'glowPulse 12s ease-in-out infinite',
            filter: 'blur(2px)'
          }}></div>
          
          <div className="glow-effect glow-2" style={{
            position: 'absolute',
            bottom: '30%',
            right: '25%',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(240, 147, 251, 0.12) 0%, transparent 65%)',
            borderRadius: '50%',
            animation: 'glowPulse 15s ease-in-out infinite reverse',
            filter: 'blur(2px)'
          }}></div>
        </div>

        {/* Premium Particle System */}
        <div className="particle-system" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: `translateY(${scrollY * 0.3}px)`
        }}>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="premium-particle"
              style={{
                position: 'absolute',
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                background: `linear-gradient(45deg, rgba(102, 126, 234, ${Math.random() * 0.8 + 0.2}), rgba(240, 147, 251, ${Math.random() * 0.6 + 0.2}))`,
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `premiumParticleFloat ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 8}s`,
                boxShadow: '0 0 10px rgba(102, 126, 234, 0.5)'
              }}
            ></div>
          ))}
        </div>
      </div>

      <Container className="position-relative" style={{ zIndex: 2, paddingTop: '130px', paddingBottom: '80px', maxWidth: '1200px' }}>
        <Row className="align-items-center hero-content-row" style={{ paddingTop: '0px' }}>
          <Col lg={6} md={12} sm={12} className="text-white hero-text-col order-1 order-lg-1" data-aos="fade-right" data-aos-delay="200">
            {/* Premium Badge */}
            <div className="mb-5" >
              <div className="premium-badge d-inline-block" style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(102, 126, 234, 0.3)',
                borderRadius: '50px',
                padding: '12px 30px',
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '0.5px',
                boxShadow: '0 8px 32px rgba(102, 126, 234, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  animation: 'shimmer 3s infinite'
                }}></div>
                <FaRocket className="me-2" style={{ color: '#667eea' }} />
                <span style={{ position: 'relative', zIndex: 2 }}>Gentrons</span>
              </div>
            </div>
            
            {/* Premium Heading */}
            <h1 className="display-2 fw-bold mb-4" style={{ 
              lineHeight: '1.1',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              color: 'white'
            }}>
              <span style={{ color: 'white' }}>Transform Your Business with</span>
              <span style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                marginTop: '10px',
                color: '#667eea',
                fontWeight: '900'
              }}> Innovative Solutions</span>
            </h1>
            
            {/* Premium Description */}
            <p className="lead mb-5" style={{ 
              fontSize: '1.3rem',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.9)',
              fontWeight: '400',
              maxWidth: '550px',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              textAlign: 'left',
              padding: '0 15px'
            }}>
              We deliver cutting-edge software solutions that drive growth, 
              enhance efficiency, and create lasting value for your business. 
              From concept to deployment, we're your trusted technology partner.
            </p>
            
            {/* Premium CTA Buttons */}
            <div className="d-flex flex-wrap gap-4 mb-5 justify-content-start">
              <Button 
                size="lg" 
                className="fw-bold px-5 py-3 premium-btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4), 0 0 0 1px rgba(255,255,255,0.1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  fontSize: '1.1rem',
                  letterSpacing: '0.5px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px) scale(1.05)';
                  e.target.style.boxShadow = '0 20px 50px rgba(102, 126, 234, 0.6), 0 0 0 1px rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4), 0 0 0 1px rgba(255,255,255,0.1)';
                }}
                onClick={() => scrollToSection('contact')}
              >
                <span style={{ position: 'relative', zIndex: 2 }}>
                  Start Your Project
                  <FaArrowRight className="ms-2" />
                </span>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transition: 'left 0.5s'
                }}></div>
              </Button>
              
              <Button 
                variant="outline-light" 
                size="lg" 
                className="fw-bold px-5 py-3 premium-btn-secondary"
                style={{
                  border: '2px solid rgba(102, 126, 234, 0.6)',
                  borderRadius: '15px',
                  background: 'rgba(102, 126, 234, 0.1)',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  fontSize: '1.1rem',
                  letterSpacing: '0.5px',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  e.target.style.borderColor = 'transparent';
                  e.target.style.transform = 'translateY(-5px) scale(1.05)';
                  e.target.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(102, 126, 234, 0.1)';
                  e.target.style.borderColor = 'rgba(102, 126, 234, 0.6)';
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
                onClick={() => scrollToSection('projects')}
              >
                <FaPlay className="me-2" />
                View Our Work
              </Button>
            </div>
            
            {/* Premium Stats */}
            <div className="premium-stats" style={{ 
              display: 'flex', 
              justifyContent: 'flex-start', 
              gap: '40px', 
              marginLeft: '0',
              flexWrap: 'wrap'
            }}>
              <div className="premium-stat-item text-left">
                <h3 className="fw-bold mb-2 display-5" style={{ 
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textAlign: 'left'
                }}>
                  <CountUp end={80} suffix="" duration={2500} />
                </h3>
                <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', fontWeight: '500', textAlign: 'left' }}>Projects Delivered</p>
              </div>
              <div className="premium-stat-item text-left">
                <h3 className="fw-bold mb-2 display-5" style={{ 
                  background: 'linear-gradient(135deg, #764ba2, #f093fb)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textAlign: 'left'
                }}>
                  <CountUp end={98} suffix="%" duration={2000} />
                </h3>
                <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', fontWeight: '500', textAlign: 'left' }}>Client Satisfaction</p>
              </div>
              <div className="premium-stat-item text-left">
                <h3 className="fw-bold mb-2 display-5" style={{ 
                  background: 'linear-gradient(135deg, #f093fb, #667eea)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textAlign: 'left'
                }}>
                  <CountUp end={8} suffix="" duration={2200} />
                </h3>
                <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', fontWeight: '500', textAlign: 'left' }}>Team Members</p>
              </div>
            </div>
          </Col>
          
          {/* Earth Image on Right Side */}
          <Col lg={6} md={12} sm={12} className="hero-visual-col order-2 order-lg-2" data-aos="fade-left" data-aos-delay="400">
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              padding: '20px'
            }}>
              <img 
                src={earthImage} 
                alt="Earth" 
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                width="600"
                height="600"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 60px rgba(102, 126, 234, 0.3))',
                  animation: 'float 6s ease-in-out infinite',
                  transition: 'all 0.5s ease'
                }}
                className="hero-earth-image"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.filter = 'drop-shadow(0 25px 80px rgba(102, 126, 234, 0.5))';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.filter = 'drop-shadow(0 20px 60px rgba(102, 126, 234, 0.3))';
                }}
              />
            </div>
          </Col>
          
        </Row>
      </Container>


      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes particleFloat {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes premiumFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes glowPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes premiumParticleFloat {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes patternMove {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(20px) translateY(20px); }
        }
        
        @keyframes innerFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
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
        
        .hero-section {
          background-attachment: fixed;
          margin: 0 !important;
          padding: 0 !important;
          position: relative;
        }
        
        
        .floating-shape {
          pointer-events: none;
        }
        
        .particle {
          pointer-events: none;
        }
        
        .stat-item {
          padding: 20px 10px;
          border-radius: 15px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }
        
        .stat-item:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.15);
        }
        
        .feature-badge {
          background: rgba(255,255,255,0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        
        .hero-image {
          transition: all 0.5s ease;
        }
        
        .hero-image:hover {
          transform: scale(1.02) translateY(${scrollY * 0.1}px);
        }
        
        .parallax-layer {
          will-change: transform;
        }
        
        
        @media (max-width: 768px) {
          .hero-section {
            background-attachment: scroll;
            padding-bottom: 100px;
          }
          
          .stat-item {
            margin-bottom: 15px;
          }
          
          .floating-shape {
            display: none;
          }
          
        }
        
        @media (max-width: 375px) {
          .hero-section {
            padding-bottom: 120px;
          }
          
          .premium-visual-container {
            /* Dynamic height */
          }
          
          .premium-icon-container {
            width: 100px !important;
            height: 100px !important;
          }
          
          .premium-feature-card {
            min-width: 150px !important;
            padding: 15px 20px !important;
            font-size: 0.9rem !important;
          }
          
        }
      }
      
      /* Hero Section Mobile Responsiveness */
      @media (max-width: 992px) {
        .container {
          padding-left: 20px !important;
          padding-right: 20px !important;
        }
      }
      
      @media (max-width: 768px) {
        .hero-section {
          padding: 0 0 0 0 !important;
          margin-top: 0 !important;
          margin: 0 !important;
        }
        
        .premium-stats {
          display: flex !important;
          flex-direction: row !important;
          justify-content: space-around !important;
          gap: 20px !important;
          flex-wrap: wrap !important;
          margin-top: 30px !important;
        }
        
        .premium-stat-item {
          flex: 1 !important;
          min-width: 100px !important;
          text-align: center !important;
        }
        
        .premium-stat-item h3 {
          font-size: 2rem !important;
          text-align: center !important;
        }
        
        .premium-stat-item p {
          font-size: 0.9rem !important;
          text-align: center !important;
        }
        
        .hero-bg-system {
          top: 0 !important;
          left: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        
        .container {
          padding-left: 15px !important;
          padding-right: 15px !important;
        }
        
        .hero-section .position-relative {
          padding-top: 60px !important;
        }
        
        .hero-content-row {
          margin: 0 !important;
          flex-direction: column !important;
        }
        
        .hero-text-col {
          order: 1 !important;
          padding: 0 5px !important;
          margin-bottom: 20px !important;
          text-align: center !important;
        }
        
        .hero-visual-col {
          order: 2 !important;
          padding: 0 5px !important;
          margin-bottom: 15px !important;
        }
        
        /* Premium Badge Mobile */
        .premium-badge {
          padding: 8px 20px !important;
          font-size: 0.85rem !important;
          margin-bottom: 20px !important;
          display: inline-block !important;
        }
        
        /* Leading Software House Spacing Mobile */
        .hero-text-col .mb-5 {
          margin-top: 80px !important;
        }
        
        /* Heading Mobile */
        .display-2 {
          font-size: 1.8rem !important;
          line-height: 1.2 !important;
          margin-bottom: 20px !important;
          word-wrap: break-word !important;
          text-align: center !important;
        }
        
        /* Description Mobile */
        .lead {
          font-size: 1rem !important;
          line-height: 1.5 !important;
          margin-bottom: 25px !important;
          padding: 0 5px !important;
          word-wrap: break-word !important;
          text-align: center !important;
          max-width: 100% !important;
        }
        
        /* Mobile fw-bold mb-4 Elements */
        .fw-bold.mb-4 {
          margin-bottom: 24px !important;
        }
        
        /* CTA Buttons Mobile */
        .d-flex.flex-wrap.gap-4 {
          flex-direction: row !important;
          gap: 12px !important;
          margin-bottom: 30px !important;
          align-items: center !important;
          justify-content: center !important;
          flex-wrap: wrap !important;
        }
        
        .premium-btn-primary,
        .premium-btn-secondary {
          width: auto !important;
          flex: 1 1 auto !important;
          min-width: 140px !important;
          max-width: 48% !important;
          padding: 12px 16px !important;
          font-size: 0.95rem !important;
          border-radius: 12px !important;
        }
        
        /* Stats Mobile */
        .premium-stats {
          margin-top: 20px !important;
          margin-bottom: 30px !important;
        }
        
        .premium-stats .col-4 {
          margin-bottom: 20px !important;
          padding: 0 5px !important;
        }
        
        .premium-stat-item h3 {
          font-size: 2rem !important;
          margin-bottom: 5px !important;
        }
        
        .premium-stat-item p {
          font-size: 0.85rem !important;
          line-height: 1.3 !important;
        }
        
        /* Visual Container Mobile */
        .premium-visual-container {
          border-radius: 20px !important;
          margin: 0 auto !important;
          max-width: 400px !important;
        }
        
        /* Floating Elements Mobile */
        .premium-shape {
          display: none !important;
        }
        
        .inner-shape {
          display: none !important;
        }
        
        .visual-bg-pattern {
          opacity: 0.3 !important;
        }
        
        /* Innovation at Work Section Mobile - ULTRA NO CUTOFF */
        .innovation-heading {
          font-size: 1.3rem !important;
          line-height: 1.4 !important;
          margin-bottom: 25px !important;
          text-align: center !important;
          word-wrap: break-word !important;
          letter-spacing: 0 !important;
          padding: 0 30px !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
        }
        
        /* Innovation Description Mobile - ULTRA NO CUTOFF */
        .premium-visual-container p {
          font-size: 0.85rem !important;
          line-height: 1.6 !important;
          margin-bottom: 30px !important;
          max-width: 100% !important;
          padding: 0 35px !important;
          text-align: center !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
        }
        
        /* Innovation Feature Cards Mobile - ULTRA NO CUTOFF */
        .premium-visual-container .d-flex {
          flex-direction: column !important;
          gap: 18px !important;
          align-items: center !important;
          width: 100% !important;
          padding: 0 10px !important;
        }
        
        .premium-feature-card {
          width: 100% !important;
          max-width: 250px !important;
          min-width: auto !important;
          padding: 20px 30px !important;
          font-size: 0.9rem !important;
          border-radius: 20px !important;
          text-align: center !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
        }
        
        /* Innovation Visual Container Mobile - ULTRA NO CUTOFF */
        .premium-visual-container {
          padding: 40px 25px 70px 25px !important;
          margin: 0 20px !important;
          min-height: auto !important;
          height: auto !important;
          width: calc(100% - 40px) !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
        }
        
        /* Mobile Layout Improvements */
        .hero-visual-col {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
        }
        
        .premium-hero-visual {
          width: 100% !important;
          max-width: 100% !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
      }
      
      @media (max-width: 576px) {
        .hero-section {
          padding: 90px 0 0 0 !important;
        }
        
        .container {
          padding-left: 12px !important;
          padding-right: 12px !important;
        }
        
        .hero-text-col {
          padding: 0 8px !important;
          margin-bottom: 25px !important;
        }
        
        .hero-visual-col {
          padding: 0 8px !important;
          margin-bottom: 15px !important;
        }
        
        /* Premium Badge Small Mobile */
        .premium-badge {
          padding: 6px 18px !important;
          font-size: 0.8rem !important;
          margin-bottom: 18px !important;
        }
        
        /* Leading Software House Spacing Small Mobile */
        .hero-text-col .mb-5 {
          margin-top: 15px !important;
        }
        
        /* Heading Small Mobile */
        .display-2 {
          font-size: 1.6rem !important;
          line-height: 1.2 !important;
          margin-bottom: 18px !important;
          word-wrap: break-word !important;
        }
        
        /* Description Small Mobile */
        .lead {
          font-size: 0.95rem !important;
          line-height: 1.4 !important;
          margin-bottom: 22px !important;
          padding: 0 3px !important;
          word-wrap: break-word !important;
        }
        
        /* CTA Buttons Small Mobile */
        .d-flex.flex-wrap.gap-4 {
          flex-direction: row !important;
          gap: 10px !important;
          margin-bottom: 25px !important;
          justify-content: center !important;
          flex-wrap: wrap !important;
        }
        
        .premium-btn-primary,
        .premium-btn-secondary {
          width: auto !important;
          flex: 1 1 auto !important;
          min-width: 130px !important;
          max-width: 48% !important;
          padding: 10px 14px !important;
          font-size: 0.9rem !important;
          border-radius: 10px !important;
        }
        
        /* Stats Small Mobile */
        .premium-stats {
          margin-top: 18px !important;
          margin-bottom: 25px !important;
        }
        
        .premium-stats .col-4 {
          margin-bottom: 18px !important;
          padding: 0 3px !important;
        }
        
        .premium-stat-item h3 {
          font-size: 1.7rem !important;
          margin-bottom: 4px !important;
        }
        
        .premium-stat-item p {
          font-size: 0.8rem !important;
          line-height: 1.2 !important;
        }
        
        /* Visual Container Small Mobile */
        .premium-visual-container {
          border-radius: 18px !important;
          max-width: 350px !important;
        }
        
        /* Innovation at Work Section Small Mobile - ULTRA NO CUTOFF */
        .innovation-heading {
          font-size: 1.1rem !important;
          line-height: 1.4 !important;
          margin-bottom: 22px !important;
          text-align: center !important;
          word-wrap: break-word !important;
          letter-spacing: 0 !important;
          padding: 0 35px !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
        }
        
        /* Innovation Description Small Mobile - ULTRA NO CUTOFF */
        .premium-visual-container p {
          font-size: 0.75rem !important;
          line-height: 1.5 !important;
          margin-bottom: 25px !important;
          max-width: 100% !important;
          padding: 0 40px !important;
          text-align: center !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
        }
        
        /* Innovation Feature Cards Small Mobile - ULTRA NO CUTOFF */
        .premium-visual-container .d-flex {
          flex-direction: column !important;
          gap: 15px !important;
          align-items: center !important;
          width: 100% !important;
          padding: 0 15px !important;
        }
        
        .premium-feature-card {
          width: 100% !important;
          max-width: 220px !important;
          min-width: auto !important;
          padding: 18px 25px !important;
          font-size: 0.85rem !important;
          border-radius: 18px !important;
          text-align: center !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
        }
        
        /* Innovation Visual Container Small Mobile - ULTRA NO CUTOFF */
        .premium-visual-container {
          padding: 35px 20px 65px 20px !important;
          margin: 0 15px !important;
          min-height: auto !important;
          height: auto !important;
          width: calc(100% - 30px) !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
        }
        
        /* Small Mobile Layout Improvements */
        .hero-visual-col {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
        }
        
        .premium-hero-visual {
          width: 100% !important;
          max-width: 100% !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
      }
      
      @media (max-width: 480px) {
        .hero-section {
          padding: 80px 0 80px 0 !important;
        }
        
        .container {
          padding-left: 10px !important;
          padding-right: 10px !important;
        }
        
        .hero-text-col {
          padding: 0 5px !important;
          margin-bottom: 20px !important;
        }
        
        .hero-visual-col {
          padding: 0 5px !important;
          margin-bottom: 12px !important;
        }
        
        /* Premium Badge Ultra Small */
        .premium-badge {
          padding: 5px 15px !important;
          font-size: 0.75rem !important;
          margin-bottom: 15px !important;
        }
        
        /* Leading Software House Spacing Ultra Small */
        .hero-text-col .mb-5 {
          margin-top: 10px !important;
        }
        
        /* Heading Ultra Small */
        .display-2 {
          font-size: 1.4rem !important;
          line-height: 1.2 !important;
          margin-bottom: 15px !important;
          word-wrap: break-word !important;
        }
        
        /* Description Ultra Small */
        .lead {
          font-size: 0.85rem !important;
          line-height: 1.3 !important;
          margin-bottom: 20px !important;
          padding: 0 2px !important;
          word-wrap: break-word !important;
        }
        
        /* CTA Buttons Ultra Small */
        .d-flex.flex-wrap.gap-4 {
          flex-direction: row !important;
          gap: 8px !important;
          margin-bottom: 20px !important;
          justify-content: center !important;
          flex-wrap: wrap !important;
        }
        
        .premium-btn-primary,
        .premium-btn-secondary {
          width: auto !important;
          flex: 1 1 auto !important;
          min-width: 120px !important;
          max-width: 48% !important;
          padding: 8px 12px !important;
          font-size: 0.85rem !important;
          border-radius: 8px !important;
        }
        
        /* Stats Ultra Small */
        .premium-stats {
          margin-top: 15px !important;
          margin-bottom: 20px !important;
        }
        
        .premium-stats .col-4 {
          margin-bottom: 15px !important;
          padding: 0 2px !important;
        }
        
        .premium-stat-item h3 {
          font-size: 1.5rem !important;
          margin-bottom: 3px !important;
        }
        
        .premium-stat-item p {
          font-size: 0.75rem !important;
          line-height: 1.1 !important;
        }
        
        /* Visual Container Ultra Small */
        .premium-visual-container {
          border-radius: 15px !important;
          max-width: 300px !important;
        }
        
        /* Innovation at Work Section Ultra Small - ULTRA NO CUTOFF */
        .innovation-heading {
          font-size: 0.95rem !important;
          line-height: 1.4 !important;
          margin-bottom: 20px !important;
          text-align: center !important;
          word-wrap: break-word !important;
          letter-spacing: 0 !important;
          padding: 0 40px !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
        }
        
        /* Innovation Description Ultra Small - ULTRA NO CUTOFF */
        .premium-visual-container p {
          font-size: 0.7rem !important;
          line-height: 1.4 !important;
          margin-bottom: 22px !important;
          max-width: 100% !important;
          padding: 0 45px !important;
          text-align: center !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
        }
        
        /* Innovation Feature Cards Ultra Small - ULTRA NO CUTOFF */
        .premium-visual-container .d-flex {
          flex-direction: column !important;
          gap: 12px !important;
          align-items: center !important;
          width: 100% !important;
          padding: 0 20px !important;
        }
        
        .premium-feature-card {
          width: 100% !important;
          max-width: 200px !important;
          min-width: auto !important;
          padding: 15px 22px !important;
          font-size: 0.8rem !important;
          border-radius: 15px !important;
          text-align: center !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
        }
        
        /* Innovation Visual Container Ultra Small - ULTRA NO CUTOFF */
        .premium-visual-container {
          padding: 30px 18px 60px 18px !important;
          margin: 0 12px !important;
          min-height: auto !important;
          height: auto !important;
          width: calc(100% - 24px) !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
        }
        
        /* Ultra Small Mobile Layout Improvements */
        .hero-visual-col {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
        }
        
        .premium-hero-visual {
          width: 100% !important;
          max-width: 100% !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
      }
      
      /* Extra Small Mobile - Ultra Responsive */
      @media (max-width: 360px) {
        .hero-section {
          padding: 70px 0 0 0 !important;
        }
        
        .container {
          padding: 0 8px !important;
        }
        
        .hero-text-col {
          padding: 0 3px !important;
          margin-bottom: 15px !important;
        }
        
        .hero-visual-col {
          padding: 0 3px !important;
          margin-bottom: 10px !important;
        }
        
        /* Leading Software House Spacing Extra Small */
        .hero-text-col .mb-5 {
          margin-top: 5px !important;
        }
        
        /* Innovation at Work Section Extra Small - ULTRA RESPONSIVE */
        .innovation-heading {
          font-size: 0.85rem !important;
          line-height: 1.3 !important;
          margin-bottom: 15px !important;
          text-align: center !important;
          word-wrap: break-word !important;
          letter-spacing: 0 !important;
          padding: 0 45px !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
        }
        
        /* Innovation Description Extra Small - ULTRA RESPONSIVE */
        .premium-visual-container p {
          font-size: 0.65rem !important;
          line-height: 1.3 !important;
          margin-bottom: 18px !important;
          max-width: 100% !important;
          padding: 0 50px !important;
          text-align: center !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
        }
        
        /* Innovation Feature Cards Extra Small - ULTRA RESPONSIVE */
        .premium-visual-container .d-flex {
          flex-direction: column !important;
          gap: 10px !important;
          align-items: center !important;
          width: 100% !important;
          padding: 0 25px !important;
        }
        
        .premium-feature-card {
          width: 100% !important;
          max-width: 180px !important;
          min-width: auto !important;
          padding: 12px 18px !important;
          font-size: 0.75rem !important;
          border-radius: 12px !important;
          text-align: center !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          hyphens: auto !important;
        }
        
        /* Innovation Visual Container Extra Small - ULTRA RESPONSIVE */
        .premium-visual-container {
          padding: 25px 15px 55px 15px !important;
          margin: 0 8px !important;
          min-height: auto !important;
          height: auto !important;
          width: calc(100% - 16px) !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
        }
        
        /* Extra Small Mobile Layout Improvements */
        .hero-visual-col {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
        }
        
        .premium-hero-visual {
          width: 100% !important;
          max-width: 100% !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
      }
      `}</style>
    </section>
  );
};

export default Hero;
