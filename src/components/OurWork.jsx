import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { FaRocket } from "react-icons/fa";

// Website Portfolio Assets
import imgWeb4 from "../assets/Website_Portfolio/web4.webp";
import imgWeb8 from "../assets/Website_Portfolio/web8.webp";
import imgWeb9 from "../assets/Website_Portfolio/web9.webp";
import imgWeb10 from "../assets/Website_Portfolio/web10.webp";
import imgWeb11 from "../assets/Website_Portfolio/web11.webp";
import imgWeb12 from "../assets/Website_Portfolio/web12.webp";
import imgWeb13 from "../assets/weflex.png";
import imgWeb14 from "../assets/american.png";
import imgWeb15 from "../assets/museum.png";
import imgWeb16 from "../assets/tidyspaces.png";
import imgWeb17 from "../assets/art.png";
import imgWeb18 from "../assets/ajmartpk.png";

// Logo Portfolio Assets
import imgLogo1 from "../assets/logo-portfolio/logo1.webp";
import imgLogo2 from "../assets/logo-portfolio/logo2.webp";
import imgLogo3 from "../assets/logo-portfolio/logo3.webp";
import imgLogo4 from "../assets/logo-portfolio/logo4.webp";
import imgLogo5 from "../assets/logo-portfolio/logo5.webp";
import imgLogo6 from "../assets/logo-portfolio/logo6.webp";
import imgLogo7 from "../assets/logo-portfolio/logo7.webp";
import imgLogo8 from "../assets/logo-portfolio/logo8.webp";
import imgLogo9 from "../assets/logo-portfolio/logo9.webp";
import imgLogo10 from "../assets/logo-portfolio/logo10.webp";
import imgLogo11 from "../assets/logo-portfolio/logo11.webp";
import imgLogo12 from "../assets/logo-portfolio/logo12.webp";
import imgLogo13 from "../assets/logo-portfolio/logo13.webp";
import imgLogo14 from "../assets/logo-portfolio/logo14.webp";
import imgLogo15 from "../assets/logo-portfolio/logo15.webp";
import imgLogo16 from "../assets/logo-portfolio/logo16.webp";

// Branding Portfolio Assets
import branding1 from "../assets/branding-portfolio/branding1.webp";
import branding2 from "../assets/branding-portfolio/branding2.webp";
import branding3 from "../assets/branding-portfolio/branding3.webp";
import branding4 from "../assets/branding-portfolio/branding4.webp";
import branding5 from "../assets/branding-portfolio/branding5.webp";
import branding6 from "../assets/branding-portfolio/branding6.webp";
import branding7 from "../assets/branding-portfolio/branding7.webp";
import branding8 from "../assets/branding-portfolio/branding8.webp";
import branding9 from "../assets/branding-portfolio/branding9.webp";

// Motion Graphics Assets
import motionDemoVideo1 from '../assets/Motion_video/motion1.mp4';
import motionPoster1 from '../assets/Motion_video/motion1.webp';
import motionDemoVideo2 from '../assets/Motion_video/motion2.mp4';
import motionPoster2 from '../assets/Motion_video/motion2.webp';
import motionDemoVideo3 from '../assets/Motion_video/motion3.mp4';
import motionPoster3 from '../assets/Motion_video/motion3.webp';
import motionDemoVideo4 from '../assets/Motion_video/motion4.mp4';
import motionPoster4 from '../assets/Motion_video/motion4.webp';
import motionDemoVideo5 from '../assets/Motion_video/motion5.mp4';
import motionPoster5 from '../assets/Motion_video/motion5.webp';
import motionDemoVideo6 from '../assets/Motion_video/motion6.mp4';
import motionPoster6 from '../assets/Motion_video/motion6.webp';
import motionDemoVideo7 from '../assets/Motion_video/motion7.mp4';
import motionPoster7 from '../assets/Motion_video/motion7.webp';
import motionDemoVideo8 from '../assets/Motion_video/motion8.mp4';
import motionPoster8 from '../assets/Motion_video/motion8.webp';

// Android Portfolio Assets
import appDev1 from '../assets/Android_portfolio/app1.webp';
import appDev2 from '../assets/Android_portfolio/app2.webp';
import appDev3 from '../assets/Android_portfolio/app3.webp';
import appDev4 from '../assets/Android_portfolio/app4.webp';
import appDev5 from '../assets/Android_portfolio/app5.webp';
import appDev6 from '../assets/Android_portfolio/app6.webp';
import appDev7 from '../assets/Android_portfolio/app7.webp';
import appDev8 from '../assets/Android_portfolio/app8.webp';

const TABS = [
  { label: "Website Development", key: "web" },
  { label: "Logo Design", key: "logo" },
  { label: "Branding", key: "branding" },
  { label: "Motion Graphics", key: "motion" },
  { label: "App Development", key: "appdev" },
];

const WORKS = {
  web: [
    { id: 1, img: imgWeb13 },
    { id: 2, img: imgWeb14 },
    { id: 3, img: imgWeb15 },
    { id: 4, img: imgWeb4 },
    { id: 5, img: imgWeb17 },
    { id: 6, img: imgWeb18 },
    { id: 7, img: imgWeb16 },
    { id: 8, img: imgWeb8 },
    { id: 9, img: imgWeb9 },
    { id: 10, img: imgWeb10 },
    { id: 11, img: imgWeb11 },
    { id: 12, img: imgWeb12 },
  ],
  logo: [
    { id: 1, img: imgLogo1 },
    { id: 2, img: imgLogo2 },
    { id: 3, img: imgLogo3 },
    { id: 4, img: imgLogo4 },
    { id: 5, img: imgLogo5 },
    { id: 6, img: imgLogo6 },
    { id: 7, img: imgLogo7 },
    { id: 8, img: imgLogo8 },
    { id: 9, img: imgLogo9 },
    { id: 10, img: imgLogo10 },
    { id: 11, img: imgLogo11 },
    { id: 12, img: imgLogo12 },
    { id: 13, img: imgLogo13 },
    { id: 14, img: imgLogo14 },
    { id: 15, img: imgLogo15 },
    { id: 16, img: imgLogo16 },
  ],
  branding: [
    { id: 1, img: branding1 },
    { id: 2, img: branding2 },
    { id: 3, img: branding3 },
    { id: 4, img: branding4 },
    { id: 5, img: branding5 },
    { id: 6, img: branding6 },
    { id: 7, img: branding7 },
    { id: 8, img: branding8 },
    { id: 9, img: branding9 },
  ],
  motion: [
    { id: 1, video: motionDemoVideo1, poster: motionPoster1 },
    { id: 2, video: motionDemoVideo2, poster: motionPoster2 },
    { id: 3, video: motionDemoVideo3, poster: motionPoster3 },
    { id: 4, video: motionDemoVideo4, poster: motionPoster4 },
    { id: 5, video: motionDemoVideo5, poster: motionPoster5 },
    { id: 6, video: motionDemoVideo6, poster: motionPoster6 },
    { id: 7, video: motionDemoVideo7, poster: motionPoster7 },
    { id: 8, video: motionDemoVideo8, poster: motionPoster8 },
  ],
  appdev: [
    { id: 1, img: appDev1 },
    { id: 2, img: appDev2 },
    { id: 3, img: appDev3 },
    { id: 4, img: appDev4 },
    { id: 5, img: appDev5 },
    { id: 6, img: appDev6 },
    { id: 7, img: appDev7 },
    { id: 8, img: appDev8 },
  ],
};

const OurWork = ({ isHomePage = false }) => {
  const [activeTab, setActiveTab] = useState("web");
  const [selectedImg, setSelectedImg] = useState(null);
  const [showImgModal, setShowImgModal] = useState(false);
  const [modalImgIdx, setModalImgIdx] = useState(null);
  const [webVisibleCount, setWebVisibleCount] = useState(8);
  const [logoVisibleCount, setLogoVisibleCount] = useState(8);
  const [brandingVisibleCount, setBrandingVisibleCount] = useState(8);
  const [motionVisibleCount, setMotionVisibleCount] = useState(8);
  const [appdevVisibleCount, setAppdevVisibleCount] = useState(8);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset visible counts on tab change - Optimized to reduce re-renders
  useEffect(() => {
    const defaultCount = isMobile ? 4 : 8;
    // Batch all state updates together
    if (activeTab === 'web') setWebVisibleCount(defaultCount);
    if (activeTab === 'logo') setLogoVisibleCount(defaultCount);
    if (activeTab === 'branding') setBrandingVisibleCount(defaultCount);
    if (activeTab === 'motion') setMotionVisibleCount(defaultCount);
    if (activeTab === 'appdev') setAppdevVisibleCount(defaultCount);
  }, [activeTab, isMobile]);

  // Memoize animation variants to prevent recreation on every render - Optimized for speed
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { y: isMobile ? 5 : 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.15 : 0.2,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  }), [isMobile]);

  const tabVariants = useMemo(() => ({
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.15 },
    },
    tap: {
      scale: 0.95,
    },
  }), []);

  const galleryVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        delayChildren: 0,
      },
    },
  }), []);

  const imageVariants = useMemo(() => ({
    hidden: { scale: 0.98, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    hover: isMobile ? {} : {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  }), [isMobile]);

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  // Memoize images to show - only recalculate when dependencies change
  const imagesToShow = useMemo(() => {
    const counts = {
      web: webVisibleCount,
      logo: logoVisibleCount,
      branding: brandingVisibleCount,
      motion: motionVisibleCount,
      appdev: appdevVisibleCount
    };
    
    const works = WORKS[activeTab] || [];
    return works.slice(0, counts[activeTab] || 8);
  }, [activeTab, webVisibleCount, logoVisibleCount, brandingVisibleCount, motionVisibleCount, appdevVisibleCount]);

  const handleImgClick = useCallback((img) => {
    const idx = WORKS[activeTab].findIndex((w) => w.img === img);
    setModalImgIdx(idx);
    setSelectedImg(img);
    setShowImgModal(true);
  }, [activeTab]);

  const handleImageError = (e) => {
    console.error("Image failed to load:", e.target.src);
    e.target.style.display = 'none';
  };

  const closeImgModal = () => {
    setShowImgModal(false);
    setSelectedImg(null);
    setModalImgIdx(null);
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        if (showImgModal) closeImgModal();
        if (showVideoModal) setShowVideoModal(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showImgModal, showVideoModal]);

  const handlePrevImg = (e) => {
    e.stopPropagation();
    setModalImgIdx((prev) => {
      const newIdx = prev === 0 ? WORKS[activeTab].length - 1 : prev - 1;
      setSelectedImg(WORKS[activeTab][newIdx].img);
      return newIdx;
    });
  };
  
  const handleNextImg = (e) => {
    e.stopPropagation();
    setModalImgIdx((prev) => {
      const newIdx = prev === WORKS[activeTab].length - 1 ? 0 : prev + 1;
      setSelectedImg(WORKS[activeTab][newIdx].img);
      return newIdx;
    });
  };

  return (
    <>
      <motion.section
        id="ourwork"
        className={`ourwork-section ${isHomePage ? 'home-ourwork' : ''}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
        style={{
          paddingTop: isMobile ? '10px' : '30px',
          paddingBottom: '10px',
          marginTop: isMobile ? '20px' : '40px',
          position: 'relative',
          overflow: 'visible'
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

        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <motion.div
                className="premium-badge"
                variants={itemVariants}
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '10px',
                  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  marginBottom: '20px'
                }}
              >
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
                  Our Work
                </span>
              </motion.div>
              
              <motion.h2 
                style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1.2'
                }}
                variants={itemVariants}
              >
                Our Work
              </motion.h2>
              
              <motion.p 
                style={{
                  fontSize: '0.9rem',
                  color: '#6c757d',
                  lineHeight: '1.6',
                  maxWidth: '600px',
                  margin: '0 auto',
                  fontWeight: '400'
                }}
                variants={itemVariants}
              >
                Discover our creative portfolio showcasing innovative projects across web development, 
                mobile apps, graphic design, and motion graphics.
              </motion.p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={12}>
              <motion.div
                className="ourwork-tabs"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {TABS.map((tab) => (
                  <motion.button
                    key={tab.key}
                    className={`ourwork-tab${activeTab === tab.key ? " active" : ""}`}
                    onClick={() => {
                      // Immediate state update for instant response
                      setActiveTab(tab.key);
                      // Batch state updates
                      if (tab.key === "web") setWebVisibleCount(8);
                      if (tab.key === "logo") setLogoVisibleCount(8);
                      if (tab.key === "branding") setBrandingVisibleCount(8);
                      if (tab.key === "motion") setMotionVisibleCount(8);
                      if (tab.key === "appdev") setAppdevVisibleCount(8);
                    }}
                    variants={tabVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{ 
                      transition: 'all 0.2s ease',
                      willChange: 'transform'
                    }}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </motion.div>
            </Col>
          </Row>
          
          <Row>
            <Col lg={12}>
              <motion.div
                className="ourwork-gallery"
                key={activeTab}
                variants={galleryVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.2 }}
              >
          {isMobile ? (
            <>
              <div className="ourwork-mobile-grid-wrapper">
                <div
                  className="ourwork-mobile-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: 16,
                    width: '100%',
                    maxWidth: 520,
                    margin: '0 auto',
                  }}
                >
                  {imagesToShow.map((work) => (
                    <motion.div
                      className={`ourwork-item${activeTab === "web" ? " web scroll-on-hover" : ""}`}
                      key={work.id}
                      variants={imageVariants}
                      whileHover="hover"
                      style={{ width: '100%', maxWidth: 300, margin: '0 auto' }}
                    >
                      <div
                        className="ourwork-img-container"
                        style={{
                          width: '100%',
                          height: 180,
                          minHeight: 160,
                          maxHeight: 220,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                        }}
                      >
                        {activeTab === "motion" ? (
                          <img
                            src={work.poster}
                            alt="Motion Poster"
                            loading="lazy"
                            decoding="async"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16, cursor: 'pointer' }}
                            onClick={() => { setShowVideoModal(work.id); }}
                          />
                        ) : activeTab === "appdev" ? (
                          <img
                            src={work.img}
                            alt="App Development Work"
                            loading="lazy"
                            decoding="async"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16, cursor: 'pointer' }}
                            onClick={() => handleImgClick(work.img)}
                          />
                        ) : (
                          <img
                            src={work.img}
                            alt={activeTab === "logo" ? "Logo Work" : "Website Work"}
                            className="ourwork-img"
                            loading="lazy"
                            decoding="async"
                            onError={handleImageError}
                            onClick={() => handleImgClick(work.img)}
                            style={{
                              cursor: 'pointer',
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              borderRadius: 16,
                            }}
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            imagesToShow.map((work) => (
              <motion.div
                className={`ourwork-item${activeTab === "web" ? " web scroll-on-hover" : ""}`}
                key={work.id}
                variants={imageVariants}
                whileHover="hover"
              >
                <div
                  className="ourwork-img-container"
                  style={
                    activeTab === "logo"
                      ? {
                          height: 400,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                      : {}
                  }
                >
                  {activeTab === "motion" ? (
                    <img
                      src={work.poster}
                      alt="Motion Poster"
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', maxHeight: 650, objectFit: 'contain', borderRadius: 12, cursor: 'pointer' }}
                      onClick={() => { setShowVideoModal(work.id); }}
                    />
                  ) : activeTab === "appdev" ? (
                    <img
                      src={work.img}
                      alt="App Development Work"
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', maxHeight: 650, objectFit: 'contain', borderRadius: 12, cursor: 'pointer' }}
                      onClick={() => handleImgClick(work.img)}
                    />
                  ) : (
                    <img
                      src={work.img}
                      alt={activeTab === "logo" ? "Logo Work" : "Website Work"}
                      className="ourwork-img"
                      loading="lazy"
                      decoding="async"
                      onError={handleImageError}
                      onClick={() => handleImgClick(work.img)}
                      style={{
                        cursor: "pointer",
                        maxHeight: activeTab === "logo" ? 80 : undefined,
                        width: activeTab === "web" ? "100%" : "auto",
                        maxWidth: "100%",
                        height: activeTab === "web" ? "auto" : undefined,
                        objectFit: activeTab === "web" ? "contain" : undefined,
                        ...(activeTab === "web"
                          ? {
                              maxHeight: window.innerWidth <= 600 ? 180 : undefined,
                            }
                          : {}),
                      }}
                    />
                  )}
                </div>
              </motion.div>
            ))
          )}
              </motion.div>
            </Col>
          </Row>
          
          {/* Load More buttons */}
          <Row className="justify-content-center">
            <Col lg={12} className="text-center">
              {activeTab === "web" && webVisibleCount < WORKS.web.length && (
                <button
                  className="ourwork-loadmore-btn"
                  onClick={() => setWebVisibleCount((prev) => prev + 4)}
                >
                  Load More
                </button>
              )}
              {activeTab === "logo" && logoVisibleCount < WORKS.logo.length && (
                <button
                  className="ourwork-loadmore-btn"
                  onClick={() => setLogoVisibleCount((prev) => prev + 4)}
                >
                  Load More
                </button>
              )}
              {activeTab === "branding" && brandingVisibleCount < WORKS.branding.length && (
                <button
                  className="ourwork-loadmore-btn"
                  onClick={() => setBrandingVisibleCount((prev) => prev + 4)}
                >
                  Load More
                </button>
              )}
              {activeTab === "motion" && motionVisibleCount < WORKS.motion.length && (
                <button
                  className="ourwork-loadmore-btn"
                  onClick={() => setMotionVisibleCount((prev) => prev + 4)}
                >
                  Load More
                </button>
              )}
              {activeTab === "appdev" && appdevVisibleCount < WORKS.appdev.length && (
                <button
                  className="ourwork-loadmore-btn"
                  onClick={() => setAppdevVisibleCount((prev) => prev + 4)}
                >
                  Load More
                </button>
              )}
            </Col>
          </Row>
        </Container>
      </motion.section>
      
      {/* Image Modal */}
      {showImgModal && (
        <motion.div
          className="modal-overlay"
          onClick={closeImgModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            style={{ 
              maxWidth: isMobile ? '95vw' : '500px', 
              maxHeight: isMobile ? '90vh' : '600px', 
              padding: 0, 
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="modal-header" style={{
              position: 'absolute',
              top: isMobile ? '5px' : '10px',
              right: isMobile ? '5px' : '10px',
              zIndex: 1001
            }}>
              <button 
                className="modal-close" 
                onClick={closeImgModal}
                style={{
                  background: '#fff',
                  color: '#333',
                  border: '2px solid rgba(0, 0, 0, 0.2)',
                  width: isMobile ? '50px' : '45px',
                  height: isMobile ? '50px' : '45px',
                  borderRadius: '50%',
                  fontSize: isMobile ? '32px' : '28px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  fontWeight: 'bold',
                  zIndex: 1002,
                  lineHeight: 1,
                  padding: 0,
                  margin: 0
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.background = '#fff';
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.background = '#fff';
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                  }
                }}
                onTouchStart={(e) => {
                  e.target.style.background = '#f0f0f0';
                  e.target.style.transform = 'scale(0.95)';
                }}
                onTouchEnd={(e) => {
                  e.target.style.background = '#fff';
                  e.target.style.transform = 'scale(1)';
                }}
                title="Close"
              >
                ×
              </button>
            </div>
            <div
              className="modal-body"
              style={{ 
                padding: 0, 
                position: "relative", 
                overflow: "auto",
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start"
              }}
            >
              <div
                className="modal-img-scroll"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  padding: "10px"
                }}
              >
                {WORKS[activeTab].map((work, idx) => (
                  <img
                    key={work.id}
                    src={work.img}
                    alt="Work"
                    loading={idx === modalImgIdx ? "eager" : "lazy"}
                    decoding="async"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: 12,
                      display: idx === modalImgIdx ? "block" : "none",
                      objectFit: "contain"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {/* Video Modal */}
      {showVideoModal && activeTab === "motion" && (
        <motion.div
          className="modal-overlay"
          onClick={() => setShowVideoModal(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            style={{ 
              maxWidth: isMobile ? '95vw' : '400px', 
              maxHeight: isMobile ? '90vh' : 'auto',
              padding: 0, 
              overflow: "hidden",
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="modal-header" style={{
              position: 'absolute',
              top: isMobile ? '5px' : '10px',
              right: isMobile ? '5px' : '10px',
              zIndex: 1001
            }}>
              <button 
                className="modal-close" 
                onClick={() => setShowVideoModal(false)}
                style={{
                  background: '#fff',
                  color: '#333',
                  border: '2px solid rgba(0, 0, 0, 0.2)',
                  width: isMobile ? '50px' : '45px',
                  height: isMobile ? '50px' : '45px',
                  borderRadius: '50%',
                  fontSize: isMobile ? '32px' : '28px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  fontWeight: 'bold',
                  zIndex: 1002,
                  lineHeight: 1,
                  padding: 0,
                  margin: 0
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.background = '#fff';
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.background = '#fff';
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                  }
                }}
                onTouchStart={(e) => {
                  e.target.style.background = '#f0f0f0';
                  e.target.style.transform = 'scale(0.95)';
                }}
                onTouchEnd={(e) => {
                  e.target.style.background = '#fff';
                  e.target.style.transform = 'scale(1)';
                }}
                title="Close"
              >
                ×
              </button>
            </div>
            <div className="modal-body" style={{ padding: 0, position: "relative" }}>
              <video
                src={WORKS.motion.find(v => v.id === showVideoModal).video}
                poster={WORKS.motion.find(v => v.id === showVideoModal).poster}
                preload="metadata"
                style={{ width: '100%', maxHeight: 650, objectFit: 'contain', borderRadius: 12 }}
                controls
                muted
                loop={true}
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      <style>{`
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .ourwork-section {
            padding-top: 10px !important;
            padding-bottom: 80px !important;
            margin-top: 20px !important;
          }
        }
        
        /* Tablet: 2 items per row */
        @media (min-width: 601px) and (max-width: 768px) {
          .ourwork-gallery {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .ourwork-item { width: 100% !important; }
        }
        
        @media (max-width: 576px) {
          .ourwork-section {
            padding-top: 10px !important;
            padding-bottom: 80px !important;
            margin-top: 20px !important;
          }
        }
      `}</style>
    </>
  );
};

export default OurWork;
