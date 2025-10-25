import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../App.css";
import imgWeb1 from "../assets/Website_Portfolio/web1.webp";
import imgWeb2 from "../assets/Website_Portfolio/web2.webp";
import imgWeb3 from "../assets/Website_Portfolio/web3.webp";
import imgWeb4 from "../assets/Website_Portfolio/web4.webp";
import imgWeb5 from "../assets/Website_Portfolio/web5.webp";
import imgWeb6 from "../assets/Website_Portfolio/web6.webp";
import imgWeb7 from "../assets/Website_Portfolio/web7.webp";
import imgWeb8 from "../assets/Website_Portfolio/web8.webp";
import imgWeb10 from "../assets/Website_Portfolio/evvixafk5uxh3mswenmu.webp";
import imgWeb11 from "../assets/Website_Portfolio/gmwndtlyvsiqeupvrtvy.webp";
import imgWeb12 from "../assets/Website_Portfolio/heulngkjcvew0yvxw0wo.webp";
import imgWeb13 from "../assets/Website_Portfolio/vqzl4mgvv3vbuffeqzsz.webp";
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
import branding1 from "../assets/branding-portfolio/branding1.webp";
import branding2 from "../assets/branding-portfolio/branding2.webp";
import branding3 from "../assets/branding-portfolio/branding3.webp";
import branding4 from "../assets/branding-portfolio/branding4.webp";
import branding5 from "../assets/branding-portfolio/branding5.webp";
import branding6 from "../assets/branding-portfolio/branding6.webp";
import branding7 from "../assets/branding-portfolio/branding7.webp";
import branding8 from "../assets/branding-portfolio/branding8.webp";
import branding9 from "../assets/branding-portfolio/branding9.webp";

import motionDemoVideo from '../assets/Motion_video/motion1.mp4';
import motionPoster from '../assets/Motion_video/motion1.webp';
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
    { id: 1, img: imgWeb1 },
    { id: 2, img: imgWeb2 },
    { id: 3, img: imgWeb3 },
    { id: 4, img: imgWeb4 },
    { id: 5, img: imgWeb5 },
    { id: 6, img: imgWeb6 },
    { id: 7, img: imgWeb7 },
    { id: 8, img: imgWeb8 },
    { id: 10, img: imgWeb10 },
    { id: 11, img: imgWeb11 },
    { id: 12, img: imgWeb12 },
    { id: 13, img: imgWeb13 },
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
    { id: 1, video: motionDemoVideo, poster: motionPoster },
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

  // Reset visible counts on tab change
  useEffect(() => {
    if (isMobile) {
      if (activeTab === 'web') setWebVisibleCount(4);
      if (activeTab === 'logo') setLogoVisibleCount(4);
      if (activeTab === 'branding') setBrandingVisibleCount(4);
      if (activeTab === 'motion') setMotionVisibleCount(4);
      if (activeTab === 'appdev') setAppdevVisibleCount(4);
    } else {
      // For home page, show 8 items, for portfolio page show 8 items
      const defaultCount = 8;
      if (activeTab === 'web') setWebVisibleCount(defaultCount);
      if (activeTab === 'logo') setLogoVisibleCount(defaultCount);
      if (activeTab === 'branding') setBrandingVisibleCount(defaultCount);
      if (activeTab === 'motion') setMotionVisibleCount(defaultCount);
      if (activeTab === 'appdev') setAppdevVisibleCount(defaultCount);
    }
  }, [activeTab, isMobile, isHomePage]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const tabVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

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

  // Show only a limited number for each tab
  let imagesToShow = [];
  if (isMobile) {
    if (activeTab === "web") {
      imagesToShow = WORKS.web.slice(0, webVisibleCount);
    } else if (activeTab === "logo") {
      imagesToShow = WORKS.logo.slice(0, logoVisibleCount);
    } else if (activeTab === "branding") {
      imagesToShow = WORKS.branding.slice(0, brandingVisibleCount);
    } else if (activeTab === "motion") {
      imagesToShow = WORKS.motion.slice(0, motionVisibleCount);
    } else if (activeTab === "appdev") {
      imagesToShow = WORKS.appdev.slice(0, appdevVisibleCount);
    }
  } else {
    if (activeTab === "web") {
      imagesToShow = WORKS.web.slice(0, webVisibleCount);
    } else if (activeTab === "logo") {
      imagesToShow = WORKS.logo.slice(0, logoVisibleCount);
    } else if (activeTab === "branding") {
      imagesToShow = WORKS.branding.slice(0, brandingVisibleCount);
    } else if (activeTab === "motion") {
      imagesToShow = WORKS.motion.slice(0, motionVisibleCount);
    } else if (activeTab === "appdev") {
      imagesToShow = WORKS.appdev.slice(0, appdevVisibleCount);
    }
  }

  const handleImgClick = (img) => {
    const idx = WORKS[activeTab].findIndex((w) => w.img === img);
    setModalImgIdx(idx);
    setSelectedImg(img);
    setShowImgModal(true);
  };

  const closeImgModal = () => {
    setShowImgModal(false);
    setSelectedImg(null);
    setModalImgIdx(null);
  };

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
        className={`ourwork-section ${isHomePage ? 'home-ourwork' : ''}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="about-dot-row"
          style={{ justifyContent: "center", marginBottom: "1rem" }}
          variants={itemVariants}
        >
          <span className="about-label">Our Work</span>
        </motion.div>
        <p className="ourwork_overadecade" variants={itemVariants}>
        Over a Decade of Experience, Infinite Innovation.
        </p>
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
                setActiveTab(tab.key);
                // Always show 8 items for both home and portfolio pages
                if (tab.key === "web") setWebVisibleCount(8);
                if (tab.key === "logo") setLogoVisibleCount(8);
                if (tab.key === "branding") setBrandingVisibleCount(8);
                if (tab.key === "motion") setMotionVisibleCount(8);
                if (tab.key === "appdev") setAppdevVisibleCount(8);
              }}
              variants={tabVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          className="ourwork-gallery"
          variants={galleryVariants}
          initial="hidden"
          animate="visible"
        >
          {isMobile ? (
            <>
              <div className="ourwork-mobile-grid-wrapper">
                <div
                  className="ourwork-mobile-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 12,
                    width: '100%',
                    maxWidth: 420,
                    margin: '0 auto',
                  }}
                >
                  {imagesToShow.map((work) => (
                    <motion.div
                      className={`ourwork-item${activeTab === "web" ? " web scroll-on-hover" : ""}`}
                      key={work.id}
                      variants={imageVariants}
                      whileHover="hover"
                      style={{ width: '100%', maxWidth: 220, margin: '0 auto' }}
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
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16, cursor: 'pointer' }}
                            onClick={() => { setShowVideoModal(work.id); }}
                          />
                        ) : activeTab === "appdev" ? (
                          <img
                            src={work.img}
                            alt="App Development Work"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16, cursor: 'pointer' }}
                            onClick={() => handleImgClick(work.img)}
                          />
                        ) : (
                          <img
                            src={work.img}
                            alt={activeTab === "logo" ? "Logo Work" : "Website Work"}
                            className="ourwork-img"
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
                      style={{ width: '100%', maxHeight: 650, objectFit: 'contain', borderRadius: 12, cursor: 'pointer' }}
                      onClick={() => { setShowVideoModal(work.id); }}
                    />
                  ) : activeTab === "appdev" ? (
                    <img
                      src={work.img}
                      alt="App Development Work"
                      style={{ width: '100%', maxHeight: 650, objectFit: 'contain', borderRadius: 12, cursor: 'pointer' }}
                      onClick={() => handleImgClick(work.img)}
                    />
                  ) : (
                    <img
                      src={work.img}
                      alt={activeTab === "logo" ? "Logo Work" : "Website Work"}
                      className="ourwork-img"
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
        
        {/* Load More buttons */}
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
              maxWidth: 500, 
              maxHeight: 600, 
              padding: 0, 
              overflow: "hidden",
              display: "flex",
              flexDirection: "column"
            }}
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="modal-header">
              <button className="modal-close" onClick={closeImgModal}>
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
            style={{ maxWidth: 400, padding: 0, overflow: "hidden" }}
            onClick={e => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="modal-header">
              <button className="modal-close" onClick={() => setShowVideoModal(false)}>
                ×
              </button>
            </div>
            <div className="modal-body" style={{ padding: 0, position: "relative" }}>
              <video
                src={WORKS.motion.find(v => v.id === showVideoModal).video}
                poster={WORKS.motion.find(v => v.id === showVideoModal).poster}
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
    </>
  );
};

export default OurWork;
