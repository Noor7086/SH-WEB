import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Container, Row, Col, Card, Badge, Button, Modal } from 'react-bootstrap';
import scuolaImage from '../assets/scuola.jpeg';
import sucola2Image from '../assets/sucola2.jpeg';
import scuola3Image from '../assets/scuola3.jpeg';
import premierPulseImage from '../assets/premier pulse.jpeg';
import premierPulse2Image from '../assets/premier pulse 2.jpeg';
import premierPulse3Image from '../assets/premier pulse 3.jpeg';
import weflexImage from '../assets/weflex.png';
import americanImage from '../assets/american.png';
import museumImage from '../assets/museum.png';
import ess1Image from '../assets/ess1.jpeg';
import ess2Image from '../assets/ess2.jpeg';
import virtual1Image from '../assets/virtual1.PNG';
import virtual2Image from '../assets/virtual2.PNG';
import virtual3Image from '../assets/virtual3.PNG';
import labImage from '../assets/lab.jpg';
import lab2Image from '../assets/lab2.jpg';
import lab3Image from '../assets/lab3.jpg';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaEye, 
  FaCode,
  FaRocket,
  FaStar,
  FaUsers,
  FaChartLine,
  FaMobile,
  FaLaptop,
  FaPalette,
  FaDesktop,
  FaPlay
} from 'react-icons/fa';
import CountUp from './CountUp';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('mobile');
  const [scrollY, setScrollY] = useState(0);
  const [currentAppIndex, setCurrentAppIndex] = useState(0);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [currentDesktopAppIndex, setCurrentDesktopAppIndex] = useState(0);
  const [currentGraphicPage, setCurrentGraphicPage] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Auto-advance screen every 3 seconds
  useEffect(() => {
    if (activeCategory === 'mobile') {
      const interval = setInterval(() => {
        setCurrentScreenIndex((prev) => (prev + 1) % 2);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [activeCategory]);

  // Auto-advance desktop app screen every 3 seconds
  useEffect(() => {
    if (activeCategory === 'desktop') {
      const interval = setInterval(() => {
        setCurrentScreenIndex((prev) => (prev + 1) % 3);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [activeCategory]);

  const projects = {
    mobile: [
      {
        id: 1,
        title: "Scuola Video LMS",
        description: "A comprehensive Learning Management System mobile application with video courses, interactive learning, progress tracking, and personalized educational content.",
        image: scuolaImage,
        technologies: ["React Native", "Node.js", "MongoDB", "Video Streaming"],
        features: ["Video courses", "Progress tracking", "Offline learning", "User profiles"],
        metrics: { users: "10K+", rating: "4.8/5", downloads: "50K+" },
        links: { live: "#", github: "#" },
        mockupImages: [scuolaImage, sucola2Image]
      },
      {
        id: 4,
        title: "Premier Pulse",
        description: "A premium mobile application featuring advanced UI/UX design, real-time analytics, and seamless user experience with modern interface elements.",
        image: premierPulseImage,
        technologies: ["React Native", "TypeScript", "Redux", "Firebase"],
        features: ["Modern UI/UX", "Real-time analytics", "Premium design", "Seamless navigation"],
        metrics: { users: "20K+", rating: "4.9/5", downloads: "85K+" },
        links: { live: "#", github: "#" },
        mockupImages: [premierPulseImage, premierPulse2Image]
      },
      {
        id: 5,
        title: "Employee Self Services",
        description: "A comprehensive employee self-service mobile application that enables employees to manage their HR tasks, view payslips, request time off, and access company resources efficiently.",
        image: ess1Image,
        technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
        features: ["HR management", "Payslip access", "Time off requests", "Company resources"],
        metrics: { users: "5K+", rating: "4.6/5", downloads: "25K+" },
        links: { live: "#", github: "#" },
        mockupImages: [ess1Image, ess2Image]
      }
    ],
    website: [
      {
        id: 7,
        title: "WeFlex",
        description: "A modern and flexible web platform designed for optimal user experience with responsive design, advanced functionality, and seamless performance.",
        image: weflexImage,
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
        features: ["Responsive design", "Advanced functionality", "Seamless performance", "User-friendly interface"],
        metrics: { users: "12K+", performance: "97%", uptime: "99.9%" },
        links: { live: "#", github: "#" }
      },
      {
        id: 8,
        title: "American Design Eagle",
        description: "A premium design and development website showcasing American creativity and innovation with cutting-edge web technologies.",
        image: americanImage,
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
        features: ["Premium design", "American creativity", "Innovation showcase", "Stunning visuals"],
        metrics: { users: "15K+", performance: "99%", uptime: "99.9%" },
        links: { live: "#", github: "#" }
      },
      {
        id: 9,
        title: "Museum of Conspiracies",
        description: "An immersive digital museum experience exploring the world of conspiracies and mysticism with interactive exhibits and engaging storytelling.",
        image: museumImage,
        technologies: ["React", "Three.js", "WebGL", "Node.js"],
        features: ["Interactive exhibits", "3D artifacts", "Mysterious storytelling", "Immersive experience"],
        metrics: { visitors: "25K+", engagement: "95%", uptime: "99.8%" },
        links: { live: "#", github: "#" }
      }
    ],
    graphic: [
      {
        id: 8,
        title: "Brand Identity Design",
        description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
        technologies: ["Adobe Creative Suite", "Figma", "Sketch"],
        features: ["Logo design", "Brand guidelines", "Print materials", "Digital assets"],
        metrics: { projects: "50+", clients: "30+", satisfaction: "100%" },
        links: { live: "#", github: "#" }
      }
    ],
    desktop: [
      {
        id: 8,
        title: "Virtual Super Mart",
        description: "An advanced virtual supermarket desktop application with 3D shopping experience, inventory management, and seamless checkout system for modern retail operations.",
        image: virtual1Image,
        technologies: ["Electron", "Three.js", "React", "MongoDB"],
        features: ["3D shopping experience", "Inventory management", "Virtual checkout", "Real-time updates"],
        metrics: { users: "8K+", transactions: "50K+", efficiency: "85%" },
        links: { live: "#", github: "#" },
        mockupImages: [virtual1Image, virtual2Image, virtual3Image]
      },
      {
        id: 9,
        title: "Lab Automation",
        description: "A comprehensive laboratory automation desktop application designed to streamline lab operations, manage equipment, track samples, and automate testing procedures for enhanced efficiency and accuracy.",
        image: labImage,
        technologies: ["Electron", "Python", "React", "SQLite"],
        features: ["Equipment management", "Sample tracking", "Automated testing", "Data analysis"],
        metrics: { labs: "15+", tests: "100K+", accuracy: "99.8%" },
        links: { live: "#", github: "#" },
        mockupImages: [labImage, lab2Image, lab3Image]
      }
    ]
  };

  const categories = useMemo(() => [
    { id: 'mobile', name: 'Mobile Apps', icon: FaMobile, color: '#667eea' },
    { id: 'website', name: 'Web Development', icon: FaLaptop, color: '#28a745' },
    { id: 'graphic', name: 'Graphic Design', icon: FaPalette, color: '#ff6b6b' },
    { id: 'desktop', name: 'Desktop Apps', icon: FaDesktop, color: '#dc3545' }
  ], []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const prevApp = useCallback(() => {
    setCurrentAppIndex((prev) => (prev - 1 + projects[activeCategory].length) % projects[activeCategory].length);
  }, [activeCategory]);

  const nextApp = useCallback(() => {
    setCurrentAppIndex((prev) => (prev + 1) % projects[activeCategory].length);
  }, [activeCategory]);

  return (
    <>
      <style>
        {`
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
          
          @keyframes pulse {
            0% {
              box-shadow: 0 0 25px rgba(0,255,153,1), 0 0 50px rgba(0,255,153,0.6), inset 0 3px 6px rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.4), 0 0 0 2px rgba(255,255,255,0.4);
            }
            50% {
              box-shadow: 0 0 40px rgba(0,255,153,1.2), 0 0 80px rgba(0,255,153,0.8), inset 0 3px 6px rgba(255,255,255,0.6), inset 0 -3px 6px rgba(0,0,0,0.4), 0 0 0 3px rgba(255,255,255,0.6);
            }
            100% {
              box-shadow: 0 0 25px rgba(0,255,153,1), 0 0 50px rgba(0,255,153,0.6), inset 0 3px 6px rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.4), 0 0 0 2px rgba(255,255,255,0.4);
            }
          }
          
          /* Desktop Setup Hover Effects */
          .desktop-setup {
            transition: all 0.3s ease !important;
          }
          
          .desktop-setup:hover {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1.08) !important;
            filter: brightness(1.1) !important;
          }
          
          /* MacBook Container Hover Effects */
          .macbook-container {
            transition: all 0.4s ease !important;
          }
          
          .macbook-container:hover {
            transform: perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1.05) !important;
          }
          
          @media (max-width: 768px) {
            #projects {
              padding: 10px 0 80px 0 !important;
            }
            
            .container {
              padding-left: 15px !important;
              padding-right: 15px !important;
            }
            
            .display-4 {
              font-size: 2.2rem !important;
              line-height: 1.2 !important;
            }
            
            .text-center.mb-5 {
              margin-bottom: 2.5rem !important;
            }
            
            /* Technologies and Metrics - Center in Mobile View */
            .tech-heading,
            .metrics-heading {
              text-align: center !important;
            }
            
            .tech-badges,
            .website-tech-badges,
            .website-metrics-badges {
              justify-content: center !important;
            }
            
            .modal-tech-heading {
              text-align: center !important;
            }
            
            .modal-tech-badges {
              justify-content: center !important;
            }
            
            /* Mobile Action Buttons - Center in Mobile View */
            .mobile-action-buttons {
              justify-content: center !important;
            }
            
            /* Website Action Buttons - Center in Mobile View */
            .website-action-buttons {
              justify-content: center !important;
            }
            
            /* Mobile App Section Buttons */
            .mobile-action-buttons button {
              padding: 10px 20px !important;
              font-size: 0.9rem !important;
              border-radius: 25px !important;
              min-width: 140px !important;
            }
            
            /* Website Section Buttons */
            .website-action-buttons button {
              padding: 10px 20px !important;
              font-size: 0.9rem !important;
              border-radius: 25px !important;
              min-width: 140px !important;
            }
            
            /* Desktop Section Buttons */
            .desktop-action-buttons button {
              padding: 10px 20px !important;
              font-size: 0.9rem !important;
              border-radius: 25px !important;
              min-width: 140px !important;
            }
            
            .app-showcase-content {
              flex-direction: column !important;
              gap: 12px !important;
              text-align: center !important;
              min-height: auto !important;
            }
            
            .app-info-section {
              padding: 15px 12px !important;
              order: 2 !important;
            }
            
            .app-info-section h2 {
              font-size: 1.8rem !important;
              margin-bottom: 10px !important;
            }
            
            .app-info-section p {
              font-size: 1rem !important;
              margin-bottom: 12px !important;
            }
            
            .app-info-section h5 {
              font-size: 1rem !important;
            }
            
            .tech-badges, .metrics-badges {
              justify-content: center !important;
              gap: 6px !important;
              flex-wrap: wrap !important;
            }
            
            .tech-badges .badge, .metrics-badges .badge {
              padding: 1px 2px !important;
              font-size: 0.4rem !important;
              margin: 1px !important;
              white-space: nowrap !important;
            }
            
            .phone-display-section {
              order: 1 !important;
              padding: 12px 8px !important;
            }
            
            .mobile-phone-container {
              transform: scale(0.8) !important;
            }
            
            .category-nav-btn {
              min-width: 100px !important;
              padding: 8px 16px !important;
              font-size: 0.75rem !important;
              margin: 2px !important;
            }
            
            .badge {
              font-size: 0.8rem !important;
              padding: 6px 12px !important;
            }
            
            .lead {
              font-size: 1rem !important;
              line-height: 1.4 !important;
              padding: 0 15px !important;
            }
            
            .action-buttons {
              display: flex !important;
              flex-direction: row !important;
              flex-wrap: nowrap !important;
              justify-content: center !important;
              align-items: center !important;
              gap: 20px !important;
              margin-top: 25px !important;
            }
            
            .action-buttons button {
              flex: 1 !important;
              max-width: 140px !important;
              padding: 12px 20px !important;
              font-size: 0.85rem !important;
              white-space: nowrap !important;
              border-radius: 25px !important;
            }
            
            .app-navigation {
              display: flex !important;
              flex-direction: row !important;
              flex-wrap: nowrap !important;
              justify-content: center !important;
              align-items: center !important;
              gap: 20px !important;
              margin-top: 0px !important;
              margin-bottom: 0px !important;
              padding: 0px 0 !important;
              width: 100% !important;
            }
            
            .app-navigation button {
              width: 45px !important;
              height: 45px !important;
              font-size: 1rem !important;
              flex-shrink: 0 !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              border-radius: 50% !important;
              transition: all 0.3s ease !important;
            }
            
            .app-dots {
              display: flex !important;
              flex-direction: row !important;
              gap: 8px !important;
              flex-shrink: 0 !important;
              align-items: center !important;
              justify-content: center !important;
            }
            
            .app-dots button {
              width: 10px !important;
              height: 10px !important;
              border-radius: 50% !important;
              transition: all 0.3s ease !important;
              flex-shrink: 0 !important;
            }
          }
          
          @media (max-width: 576px) {
            #projects {
              padding: 60px 0 60px 0 !important;
            }
            
            .container {
              padding-left: 10px !important;
              padding-right: 10px !important;
            }
            
            .display-4 {
              font-size: 1.6rem !important;
              line-height: 1.1 !important;
            }
            
            .text-center.mb-5 {
              margin-bottom: 1rem !important;
            }
            
            .badge {
              font-size: 0.7rem !important;
              padding: 4px 8px !important;
            }
            
            .lead {
              font-size: 0.9rem !important;
              line-height: 1.3 !important;
              padding: 0 10px !important;
            }
            
            .app-showcase-content {
              gap: 2px !important;
            }
            
            .app-info-section {
              padding: 5px 5px !important;
            }
            
            .app-info-section h2 {
              font-size: 1.5rem !important;
              margin-bottom: 4px !important;
            }
            
            .app-info-section p {
              font-size: 0.9rem !important;
              margin-bottom: 5px !important;
            }
            
            .app-info-section h5 {
              font-size: 0.9rem !important;
            }
            
            .tech-badges, .metrics-badges {
              gap: 4px !important;
              justify-content: center !important;
              flex-wrap: wrap !important;
            }
            
            .tech-badges .badge, .metrics-badges .badge {
              padding: 1px 2px !important;
              font-size: 0.3rem !important;
              margin: 1px !important;
              white-space: nowrap !important;
            }
            
            .phone-display-section {
              padding: 2px 2px !important;
            }
            
            .mobile-phone-container {
              transform: scale(0.7) !important;
            }
            
            .category-nav-btn {
              min-width: 80px !important;
              padding: 6px 12px !important;
              font-size: 0.65rem !important;
              margin: 2px !important;
            }
            
            .action-buttons {
              display: flex !important;
              flex-direction: row !important;
              flex-wrap: nowrap !important;
              justify-content: center !important;
              align-items: center !important;
              gap: 15px !important;
              margin-top: 8px !important;
            }
            
            .action-buttons button {
              flex: 1 !important;
              max-width: 120px !important;
              padding: 10px 15px !important;
              font-size: 0.8rem !important;
              white-space: nowrap !important;
              border-radius: 20px !important;
            }
            
            .app-navigation {
              display: flex !important;
              flex-direction: row !important;
              flex-wrap: nowrap !important;
              justify-content: center !important;
              align-items: center !important;
              gap: 15px !important;
              margin-top: 0px !important;
              margin-bottom: 0px !important;
              padding: 0px 0 !important;
              width: 100% !important;
            }
            
            .app-navigation button {
              width: 40px !important;
              height: 40px !important;
              font-size: 0.9rem !important;
              flex-shrink: 0 !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              border-radius: 50% !important;
              transition: all 0.3s ease !important;
            }
            
            .app-dots {
              display: flex !important;
              flex-direction: row !important;
              gap: 6px !important;
              flex-shrink: 0 !important;
              align-items: center !important;
              justify-content: center !important;
            }
            
            .app-dots button {
              width: 8px !important;
              height: 8px !important;
              border-radius: 50% !important;
              transition: all 0.3s ease !important;
              flex-shrink: 0 !important;
            }
          }
          
          @media (max-width: 480px) {
            #projects {
              padding: 1rem 0 1.5rem 0 !important;
            }
            
            .app-navigation {
              gap: 12px !important;
              margin-top: 1px !important;
              margin-bottom: 3px !important;
              padding: 3px 0 !important;
            }
            
            .app-navigation button {
              width: 36px !important;
              height: 36px !important;
              font-size: 0.8rem !important;
            }
            
            .app-dots {
              gap: 5px !important;
            }
            
            .app-dots button {
              width: 7px !important;
              height: 7px !important;
            }
            
            .category-nav-btn {
              min-width: 70px !important;
              padding: 4px 8px !important;
              font-size: 0.6rem !important;
              margin: 1px !important;
            }
            
            .display-4 {
              font-size: 1.4rem !important;
            }
            
            .badge {
              font-size: 0.6rem !important;
              padding: 3px 6px !important;
            }
            
            .lead {
              font-size: 0.8rem !important;
              padding: 0 5px !important;
            }
            
            .tech-badges .badge, .metrics-badges .badge {
              padding: 1px 1px !important;
              font-size: 0.25rem !important;
            }
            
            .action-buttons button {
              max-width: 100px !important;
              padding: 8px 12px !important;
              font-size: 0.7rem !important;
            }
          }
          
          /* Mobile-Only Redesigned Layout */
          @media (max-width: 768px) {
            .mobile-container {
              padding: 0 !important;
              margin: 0 !important;
            }
            
            .mobile-showcase {
              transform: none !important;
            }
            
            .app-showcase-content {
              flex-direction: column !important;
              gap: 0 !important;
              min-height: auto !important;
              padding: 0 !important;
              margin-top: -20px !important;
            }
            
            .app-info-section {
              order: 2 !important;
              padding: 15px 10px !important;
              text-align: center !important;
              background: transparent !important;
              border-radius: 0 !important;
              margin-top: 0 !important;
              position: relative !important;
              z-index: 2 !important;
            }
            
            .app-info-section h2 {
              font-size: 1.4rem !important;
              margin-bottom: 8px !important;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
              -webkit-background-clip: text !important;
              -webkit-text-fill-color: transparent !important;
            }
            
            .app-info-section p {
              font-size: 0.85rem !important;
              line-height: 1.4 !important;
              margin-bottom: 12px !important;
              color: #495057 !important;
            }
            
            .phone-display-section {
              order: 1 !important;
              padding: 30px 15px !important;
              background: transparent !important;
              border-radius: 0 !important;
              position: relative !important;
              z-index: 1 !important;
              min-height: 180px !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
            
            .mobile-phone-container {
              transform: scale(0.85) !important;
              margin: 0 auto !important;
              filter: drop-shadow(0 6px 20px rgba(0,0,0,0.3)) !important;
              position: relative !important;
              padding-top: 0px !important;
            }
            
            
            .tech-badges, .metrics-badges {
              justify-content: center !important;
              gap: 2px !important;
              margin: 4px 0 !important;
            }
            
            .tech-badges .badge, .metrics-badges .badge {
              padding: 1px 1px !important;
              font-size: 0.2rem !important;
              border-radius: 6px !important;
            }
            
            .action-buttons {
              margin-top: 12px !important;
              gap: 10px !important;
            }
            
            .action-buttons button {
              flex: 1 !important;
              max-width: 120px !important;
              padding: 8px 12px !important;
              font-size: 0.75rem !important;
              border-radius: 15px !important;
            }
            
            .app-navigation {
              margin-top: 2px !important;
              margin-bottom: 3px !important;
              padding: 3px 0 !important;
            }
          }
          
          /* Modal Mobile Responsiveness */
          @media (max-width: 768px) {
            .modal-dialog {
              margin: 10px !important;
              max-width: calc(100% - 20px) !important;
            }
            
            .modal-content {
              border-radius: 15px !important;
            }
            
            .modal-header {
              padding: 15px !important;
            }
            
            .modal-body {
              padding: 15px !important;
            }
            
            .modal-footer {
              padding: 15px !important;
              flex-direction: column !important;
              gap: 10px !important;
            }
            
            .modal-footer .btn {
              width: 100% !important;
              margin: 0 !important;
            }
          }
          
          @media (max-width: 576px) {
            .modal-dialog {
              margin: 5px !important;
              max-width: calc(100% - 10px) !important;
            }
            
            .modal-header {
              padding: 10px !important;
            }
            
            .modal-body {
              padding: 10px !important;
            }
            
            .modal-footer {
              padding: 10px !important;
            }
            
            .modal-title {
              font-size: 1.1rem !important;
            }
          }
          
          /* Projects Section General Tablet Responsiveness */
          @media (max-width: 1203px) and (min-width: 769px) {
            #projects {
              padding: 10px 0 80px 0 !important;
            }
            
            /* Typography */
            .display-4 {
              font-size: 2.8rem !important;
              line-height: 1.2 !important;
            }
            
            .lead {
              font-size: 1.1rem !important;
              line-height: 1.4 !important;
            }
            
            /* Category Navigation */
            .category-nav-btn {
              padding: 10px 20px !important;
              font-size: 0.9rem !important;
              margin: 3px !important;
            }
            
            /* Section Headings */
            h2 {
              font-size: 2.2rem !important;
              line-height: 1.2 !important;
            }
            
            h5 {
              font-size: 1.2rem !important;
              line-height: 1.3 !important;
            }
            
            /* Buttons */
            .btn {
              padding: 10px 25px !important;
              font-size: 0.95rem !important;
            }
            
            /* Badges */
            .badge {
              padding: 8px 16px !important;
              font-size: 0.85rem !important;
            }
            
            /* Container and Spacing */
            .container {
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
            
            /* Section Spacing */
            #projects {
              padding: 100px 0 80px 0 !important;
            }
            
            /* Showcase Sections */
            .showcase-section {
              padding: 40px 0 !important;
            }
            
            /* Info Sections */
            .info-section {
              padding: 25px !important;
            }
            
            /* Mockup Containers */
            .mockup-container {
              margin: 0 auto !important;
              max-width: 100% !important;
            }
            
            /* Technologies and Metrics - Center in Tablet View */
            .tech-heading,
            .metrics-heading {
              text-align: center !important;
            }
            
            .tech-badges,
            .metrics-badges,
            .website-tech-badges,
            .website-metrics-badges {
              justify-content: center !important;
            }
            
            .modal-tech-heading {
              text-align: center !important;
            }
            
            .modal-tech-badges {
              justify-content: center !important;
            }
            
            /* Mobile Action Buttons - Center in Tablet View */
            .mobile-action-buttons {
              justify-content: center !important;
            }
            
            /* Website Action Buttons - Center in Tablet View */
            .website-action-buttons {
              justify-content: center !important;
            }
            
            /* Mobile App Section Buttons - Tablet */
            .mobile-action-buttons button {
              padding: 12px 24px !important;
              font-size: 1rem !important;
              border-radius: 25px !important;
              min-width: 150px !important;
            }
            
            /* Website Section Buttons - Tablet */
            .website-action-buttons button {
              padding: 12px 24px !important;
              font-size: 1rem !important;
              border-radius: 25px !important;
              min-width: 150px !important;
            }
            
            /* Desktop Section Buttons - Tablet */
            .desktop-action-buttons button {
              padding: 12px 24px !important;
              font-size: 1rem !important;
              border-radius: 25px !important;
              min-width: 150px !important;
            }
          }
          
          /* Mobile App Section Tablet Responsiveness */
          @media (max-width: 1203px) and (min-width: 769px) {
            .mobile-container {
              padding-top: -15px !important;
              margin-top: -15px !important;
              padding-bottom: 80px !important;
            }
            
            .app-showcase-content {
              flex-direction: column !important;
              gap: 15px !important;
              padding: 0px 0 20px 0 !important;
              min-height: auto !important;
              margin-top: -25px !important;
            }
            
            .app-info-section {
              order: 2 !important;
              flex: none !important;
              max-width: 100% !important;
              padding: 20px !important;
              text-align: center !important;
            }
            
            .mobile-phone-container {
              order: 1 !important;
              flex: none !important;
              margin: 0 auto !important;
              padding-top: -10px !important;
            }
            
            .phone-frame.iphone-15-pro {
              width: 280px !important;
              height: 560px !important;
            }
          }
          
          /* iPad Air Specific Styling */
          @media (max-width: 1024px) and (min-width: 820px) {
            .mobile-container {
              padding-top: -20px !important;
              margin-top: -20px !important;
              padding-bottom: 80px !important;
            }
            
            .app-showcase-content {
              margin-top: -30px !important;
              padding-top: 0px !important;
              padding-bottom: 20px !important;
            }
            
            .mobile-showcase {
              margin-top: -15px !important;
            }
          }
          
          /* Advanced Mobile-Only Design for Small Screens */
          @media (max-width: 576px) {
            .mobile-container {
              padding: 0 !important;
              margin: 0 !important;
              border-radius: 0 !important;
            }
            
            .app-showcase-content {
              background: transparent !important;
              border-radius: 0 !important;
              box-shadow: none !important;
              margin: 0 !important;
              overflow: visible !important;
              width: 100% !important;
            }
            
            .phone-display-section {
              background: transparent !important;
              padding: 25px 10px !important;
              border-radius: 0 !important;
              position: relative !important;
              min-height: 200px !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
            
            
            .mobile-phone-container {
              transform: scale(0.9) !important;
              margin: 0 auto !important;
              filter: drop-shadow(0 8px 25px rgba(0,0,0,0.4)) !important;
              position: relative !important;
            }
            
            
            .app-info-section {
              background: transparent !important;
              padding: 20px 15px !important;
              border-radius: 0 !important;
              margin-top: 0 !important;
              position: relative !important;
            }
            
            .app-info-section h2 {
              font-size: 1.2rem !important;
              margin-bottom: 6px !important;
              text-align: center !important;
            }
            
            .app-info-section p {
              font-size: 0.8rem !important;
              line-height: 1.3 !important;
              margin-bottom: 10px !important;
              text-align: center !important;
              color: #6c757d !important;
            }
            
            .tech-badges, .metrics-badges {
              gap: 1px !important;
              margin: 3px 0 !important;
              justify-content: center !important;
            }
            
            .tech-badges .badge, .metrics-badges .badge {
              padding: 1px 1px !important;
              font-size: 0.2rem !important;
              border-radius: 4px !important;
              font-weight: 500 !important;
            }
            
            .action-buttons {
              margin-top: 15px !important;
              gap: 8px !important;
              padding: 0 10px !important;
            }
            
            .action-buttons button {
              flex: 1 !important;
              max-width: 110px !important;
              padding: 10px 8px !important;
              font-size: 0.7rem !important;
              border-radius: 12px !important;
              font-weight: 600 !important;
            }
            
            .app-navigation {
              margin-top: 2px !important;
              margin-bottom: 0 !important;
              padding: 3px 0 !important;
              background: transparent !important;
              border-radius: 0 !important;
            }
            
            .app-navigation button {
              width: 35px !important;
              height: 35px !important;
              font-size: 0.8rem !important;
            }
            
            .app-dots button {
              width: 6px !important;
              height: 6px !important;
            }
          }
          
          /* Mobile Mockup Element Sizing */
          @media (max-width: 768px) {
            /* Mobile Mockup Default Curve and Hover Effect */
            .phone-frame.iphone-15-pro {
              border: 0.2px solid rgba(255,255,255,0.02) !important;
              box-shadow: 0 15px 50px rgba(0,0,0,0.25), inset 0 0 0 0.2px rgba(255,255,255,0.01), 0 0 0 0.2px rgba(0,0,0,0.1) !important;
              border-radius: 50px !important;
              transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) !important;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
            }
            
            .phone-frame.iphone-15-pro:hover {
              transform: perspective(1000px) rotateY(0deg) rotateX(0deg) !important;
              border-radius: 45px !important;
              box-shadow: 0 15px 40px rgba(0,0,0,0.2), inset 0 0 0 0.2px rgba(255,255,255,0.01), 0 0 0 0.2px rgba(0,0,0,0.1) !important;
            }
            
            .phone-screen.iphone-15-pro-screen {
              border: 0.2px solid #000000 !important;
              box-shadow: inset 0 0 50px rgba(0,0,0,0.8), inset 0 0 0 0.2px rgba(255,255,255,0.01) !important;
            }
            
            .dynamic-island {
              width: 100px !important;
              height: 26px !important;
              top: 16px !important;
              padding-top: 4px !important;
            }
            
            .dynamic-island div:first-child {
              width: 6px !important;
              height: 6px !important;
              left: 12px !important;
            }
            
            .dynamic-island div:last-child {
              width: 40px !important;
              height: 3px !important;
              right: 8px !important;
            }
            
            .iphone-home-indicator {
              width: 100px !important;
              height: 4px !important;
              bottom: 10px !important;
            }
          }
          
          @media (max-width: 576px) {
            /* Mobile Mockup Default Curve and Hover Effect for Small Screens */
            .phone-frame.iphone-15-pro {
              border: 0.1px solid rgba(255,255,255,0.01) !important;
              box-shadow: 0 12px 45px rgba(0,0,0,0.2), inset 0 0 0 0.1px rgba(255,255,255,0.005), 0 0 0 0.1px rgba(0,0,0,0.08) !important;
              border-radius: 45px !important;
              transform: perspective(1000px) rotateY(-12deg) rotateX(3deg) !important;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
            }
            
            .phone-frame.iphone-15-pro:hover {
              transform: perspective(1000px) rotateY(0deg) rotateX(0deg) !important;
              border-radius: 40px !important;
              box-shadow: 0 12px 35px rgba(0,0,0,0.15), inset 0 0 0 0.1px rgba(255,255,255,0.005), 0 0 0 0.1px rgba(0,0,0,0.08) !important;
            }
            
            .phone-screen.iphone-15-pro-screen {
              border: 0.1px solid #000000 !important;
              box-shadow: inset 0 0 50px rgba(0,0,0,0.8), inset 0 0 0 0.1px rgba(255,255,255,0.005) !important;
            }
            
            .dynamic-island {
              width: 80px !important;
              height: 22px !important;
              top: 14px !important;
              padding-top: 3px !important;
            }
            
            .dynamic-island div:first-child {
              width: 5px !important;
              height: 5px !important;
              left: 10px !important;
            }
            
            .dynamic-island div:last-child {
              width: 30px !important;
              height: 2px !important;
              right: 6px !important;
            }
            
            .iphone-home-indicator {
              width: 80px !important;
              height: 3px !important;
              bottom: 8px !important;
            }
          }
          
          /* Website Development Section Tablet Responsiveness */
          @media (max-width: 1203px) and (min-width: 769px) {
            .website-showcase-content {
              flex-direction: column !important;
              gap: 30px !important;
              padding: 20px 0 !important;
              min-height: auto !important;
            }
            
            .website-info-section {
              order: 2 !important;
              flex: none !important;
              max-width: 100% !important;
              padding: 20px !important;
              text-align: center !important;
            }
            
            .macbook-container {
              order: 1 !important;
              flex: none !important;
              transform: perspective(1200px) rotateY(-15deg) rotateX(10deg) !important;
              margin: 0 auto !important;
              transition: all 0.4s ease !important;
            }
            
            .macbook-container:hover {
              transform: perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1.05) !important;
            }
            
            .macbook-pro {
              width: 600px !important;
              height: 380px !important;
            }
            
            .macbook-screen {
              width: 600px !important;
              height: 350px !important;
            }
            
            .macbook-base {
              width: 640px !important;
              height: 28px !important;
            }
          }
          
          /* Website Development Section Mobile Responsiveness */
          @media (max-width: 768px) {
            /* Website Section Typography */
            .website-section h2 {
              font-size: 2rem !important;
              line-height: 1.1 !important;
              margin-bottom: 15px !important;
            }
            
            .website-section p {
              font-size: 1rem !important;
              line-height: 1.5 !important;
              margin-bottom: 20px !important;
            }
            
            .website-section h5 {
              font-size: 1.1rem !important;
              margin-bottom: 12px !important;
            }
            
            /* Website Technology Badges */
            .website-tech-badges {
              gap: 8px !important;
              flex-wrap: wrap !important;
              justify-content: center !important;
            }
            
            .website-tech-badges .badge {
              padding: 8px 16px !important;
              font-size: 0.8rem !important;
              border-radius: 20px !important;
              margin: 2px !important;
            }
            
            /* Website Performance Metrics */
            .website-metrics-badges {
              gap: 8px !important;
              flex-wrap: wrap !important;
              justify-content: center !important;
            }
            
            .website-metrics-badges .badge {
              padding: 8px 16px !important;
              font-size: 0.8rem !important;
              border-radius: 20px !important;
              margin: 2px !important;
            }
            
            /* Website Action Buttons */
            .website-action-buttons {
              flex-direction: column !important;
              gap: 15px !important;
              align-items: center !important;
            }
            
            .website-action-buttons button {
              width: 100% !important;
              max-width: 200px !important;
              padding: 12px 25px !important;
              font-size: 1rem !important;
              border-radius: 25px !important;
            }
            
            /* Website Browser Mockup */
            .website-browser-mockup {
              transform: scale(0.8) !important;
              margin: 20px auto !important;
            }
            
            /* Website Navigation */
            .website-navigation {
              gap: 15px !important;
             
            }
            
            .website-navigation button {
              width: 45px !important;
              height: 45px !important;
              font-size: 1rem !important;
            }
            
            .website-navigation .dots {
              gap: 6px !important;
            }
            
            .website-navigation .dots div {
              width: 8px !important;
              height: 8px !important;
            }
          }
          
          @media (max-width: 576px) {
            /* Website Section Typography */
            .website-section h2 {
              font-size: 1.6rem !important;
              line-height: 1.1 !important;
              margin-bottom: 12px !important;
            }
            
            .website-section p {
              font-size: 0.9rem !important;
              line-height: 1.4 !important;
              margin-bottom: 15px !important;
            }
            
            .website-section h5 {
              font-size: 1rem !important;
              margin-bottom: 10px !important;
            }
            
            /* Website Technology Badges */
            .website-tech-badges {
              gap: 6px !important;
              justify-content: center !important;
            }
            
            .website-tech-badges .badge {
              padding: 6px 12px !important;
              font-size: 0.7rem !important;
              border-radius: 15px !important;
              margin: 1px !important;
            }
            
            /* Website Performance Metrics */
            .website-metrics-badges {
              gap: 6px !important;
              justify-content: center !important;
            }
            
            .website-metrics-badges .badge {
              padding: 6px 12px !important;
              font-size: 0.7rem !important;
              border-radius: 15px !important;
              margin: 1px !important;
            }
            
            /* Website Action Buttons */
            .website-action-buttons {
              gap: 12px !important;
              padding: 0 10px !important;
            }
            
            .website-action-buttons button {
              max-width: 180px !important;
              padding: 10px 20px !important;
              font-size: 0.9rem !important;
              border-radius: 20px !important;
            }
            
            /* Website Browser Mockup */
            .website-browser-mockup {
              transform: scale(0.7) !important;
              margin: 15px auto !important;
            }
            
            /* Website Navigation */
            .website-navigation {
              gap: 12px !important;
           
            }
            
            .website-navigation button {
              width: 40px !important;
              height: 40px !important;
              font-size: 0.9rem !important;
            }
            
            .website-navigation .dots {
              gap: 5px !important;
            }
            
            .website-navigation .dots div {
              width: 7px !important;
              height: 7px !important;
            }
          }
          
          @media (max-width: 480px) {
            /* Website Section Typography */
            .website-section h2 {
              font-size: 1.4rem !important;
              margin-bottom: 10px !important;
            }
            
            .website-section p {
              font-size: 0.8rem !important;
              line-height: 1.3 !important;
              margin-bottom: 12px !important;
            }
            
            .website-section h5 {
              font-size: 0.9rem !important;
              margin-bottom: 8px !important;
            }
            
            /* Website Technology Badges */
            .website-tech-badges .badge {
              padding: 4px 8px !important;
              font-size: 0.6rem !important;
              border-radius: 12px !important;
            }
            
            /* Website Performance Metrics */
            .website-metrics-badges .badge {
              padding: 4px 8px !important;
              font-size: 0.6rem !important;
              border-radius: 12px !important;
            }
            
            /* Website Action Buttons */
            .website-action-buttons button {
              max-width: 160px !important;
              padding: 8px 16px !important;
              font-size: 0.8rem !important;
              border-radius: 15px !important;
            }
            
            /* Website Browser Mockup */
            .website-browser-mockup {
              transform: scale(0.6) !important;
              margin: 10px auto !important;
            }
            
            /* Website Navigation */
            .website-navigation button {
              width: 35px !important;
              height: 35px !important;
              font-size: 0.8rem !important;
            }
            
            .website-navigation .dots div {
              width: 6px !important;
              height: 6px !important;
            }
          }
          
          /* Graphic Design Tablet Responsiveness */
          @media (max-width: 1203px) and (min-width: 769px) {
            .design-grid-container {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 20px !important;
              max-width: 100% !important;
              padding: 0 15px !important;
            }
            
            .design-grid-container > div {
              height: 200px !important;
              border-radius: 18px !important;
            }
            
            .graphic-showcase {
              padding: 15px 0 50px 0 !important;
            }
          }
          
          /* Graphic Design Mobile Responsiveness */
          @media (max-width: 768px) {
            .design-grid-container {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 15px !important;
              max-width: 100% !important;
              padding: 0 10px !important;
            }
            
            .design-grid-container > div {
              height: 180px !important;
              border-radius: 15px !important;
            }
            
            .graphic-showcase {
              padding: 10px 0 40px 0 !important;
            }
          }
          
          @media (max-width: 576px) {
            .design-grid-container {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 10px !important;
              padding: 0 5px !important;
            }
            
            .design-grid-container > div {
              height: 140px !important;
              border-radius: 12px !important;
            }
            
            .graphic-showcase {
              padding: 5px 0 30px 0 !important;
            }
          }
          
          @media (max-width: 480px) {
            .design-grid-container {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 8px !important;
              padding: 0 5px !important;
            }
            
            .design-grid-container > div {
              height: 120px !important;
              border-radius: 10px !important;
            }
          }
          
          /* Desktop App Section Tablet Responsiveness */
          @media (max-width: 1203px) and (min-width: 769px) {
            .desktop-showcase-content {
              flex-direction: column !important;
              gap: 30px !important;
              padding: 20px 0 !important;
              min-height: auto !important;
            }
            
            .desktop-info-section {
              order: 2 !important;
              flex: none !important;
              max-width: 100% !important;
              padding: 20px !important;
              text-align: center !important;
            }
            
            .desktop-setup {
              order: 1 !important;
              flex: none !important;
              transform: perspective(1000px) rotateX(12deg) rotateY(-12deg) rotateZ(3deg) !important;
              margin: 0 auto !important;
              transition: all 0.3s ease !important;
              padding-bottom: 80px !important;
            }
            
            .desktop-setup:hover {
              transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1.08) !important;
              filter: brightness(1.1) !important;
            }
            
            .desktop-monitor {
              width: 550px !important;
              height: 360px !important;
              border-radius: 20px !important;
              background: linear-gradient(145deg, #1a1a1a 0%, #000000 50%, #1a1a1a 100%) !important;
              box-shadow: 0 30px 100px rgba(0,0,0,0.5), 0 0 0 2px rgba(255,255,255,0.1), inset 0 0 0 1px rgba(255,255,255,0.05) !important;
              position: relative !important;
              overflow: visible !important;
            }
            
            .desktop-monitor::before {
              content: '' !important;
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              right: 0 !important;
              height: 40px !important;
              background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%) !important;
              border-radius: 20px 20px 0 0 !important;
            }
            
            .monitor-stand {
              width: 160px !important;
              height: 45px !important;
              bottom: -45px !important;
              border-radius: 20px 20px 0 0 !important;
              background: linear-gradient(145deg, #c0c0c0 0%, #a8a8a8 30%, #909090 70%, #787878 100%) !important;
              box-shadow: 0 15px 45px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2) !important;
              border: 1px solid rgba(255,255,255,0.3) !important;
              border-bottom: none !important;
            }
            
            .monitor-base {
              width: 320px !important;
              height: 40px !important;
              bottom: -80px !important;
              border-radius: 25px !important;
              background: linear-gradient(145deg, #d0d0d0 0%, #b8b8b8 20%, #a0a0a0 50%, #888888 80%, #707070 100%) !important;
              box-shadow: 0 20px 55px rgba(0,0,0,0.4), inset 0 3px 6px rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.3) !important;
              border: 2px solid rgba(255,255,255,0.4) !important;
            }
            
            .monitor-screen {
              width: 520px !important;
              height: 320px !important;
              border-radius: 15px !important;
              margin: 20px auto 0 !important;
              background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;
              box-shadow: inset 0 0 25px rgba(0,0,0,0.1) !important;
              border: 2px solid rgba(0,0,0,0.1) !important;
            }
          }
          
          /* Desktop Section Mobile Layout - Properly Responsive */
          @media (max-width: 768px) {
            .desktop-showcase-content {
              flex-direction: column !important;
              gap: 30px !important;
              padding: 20px !important;
              min-height: auto !important;
            }
            
            .desktop-monitor-container {
              order: 1 !important;
              flex: none !important;
              width: 100% !important;
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
            }
            
            .desktop-info-section {
              order: 2 !important;
              text-align: center !important;
              flex: none !important;
              max-width: 100% !important;
              padding: 20px !important;
            }
            
            /* Desktop Mockup Mobile Optimization - Amazing Design */
            .desktop-setup {
              transform: perspective(1000px) rotateX(12deg) rotateY(-12deg) rotateZ(3deg) !important;
              gap: 20px !important;
              width: 100% !important;
              max-width: 350px !important;
              padding: 0 0 60px 0 !important;
              background: transparent !important;
              border-radius: 0 !important;
              backdrop-filter: none !important;
              border: none !important;
              transition: all 0.3s ease !important;
            }
            
            .desktop-setup:hover {
              transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1.08) !important;
              filter: brightness(1.1) !important;
            }
            
            .desktop-monitor {
              width: 350px !important;
              height: 240px !important;
              border-radius: 18px !important;
              background: linear-gradient(145deg, #1a1a1a 0%, #000000 50%, #1a1a1a 100%) !important;
              box-shadow: 0 25px 70px rgba(0,0,0,0.5), 0 0 0 2px rgba(255,255,255,0.1), inset 0 0 0 1px rgba(255,255,255,0.05) !important;
              position: relative !important;
              overflow: visible !important;
            }
            
            .desktop-monitor::before {
              content: '' !important;
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              right: 0 !important;
              height: 35px !important;
              background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%) !important;
              border-radius: 18px 18px 0 0 !important;
            }
            
            .monitor-stand {
              width: 120px !important;
              height: 32px !important;
              bottom: -32px !important;
              border-radius: 16px 16px 0 0 !important;
              background: linear-gradient(145deg, #c0c0c0 0%, #a8a8a8 30%, #909090 70%, #787878 100%) !important;
              box-shadow: 0 12px 35px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2) !important;
              border: 1px solid rgba(255,255,255,0.3) !important;
              border-bottom: none !important;
            }
            
            .monitor-base {
              width: 200px !important;
              height: 28px !important;
              bottom: -60px !important;
              border-radius: 18px !important;
              background: linear-gradient(145deg, #d0d0d0 0%, #b8b8b8 20%, #a0a0a0 50%, #888888 80%, #707070 100%) !important;
              box-shadow: 0 15px 40px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.3) !important;
              border: 1px solid rgba(255,255,255,0.4) !important;
            }
            
            .monitor-screen {
              width: 330px !important;
              height: 210px !important;
              border-radius: 12px !important;
              margin: 18px auto 0 !important;
              background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;
              box-shadow: inset 0 0 20px rgba(0,0,0,0.1) !important;
              border: 2px solid rgba(0,0,0,0.1) !important;
            }
            
            /* Desktop Mockup Content Mobile Fix */
            .desktop-app-content {
              height: 100% !important;
              overflow: visible !important;
            }
            
            .desktop-app-content > div {
              width: 100% !important;
              height: 100% !important;
            }
            
            .desktop-app-content h1 {
              font-size: 12px !important;
              margin-bottom: 3px !important;
            }
            
            .desktop-app-content p {
              font-size: 7px !important;
            }
            
            .desktop-app-content span {
              font-size: 8px !important;
              padding: 2px 4px !important;
            }
            
            .desktop-app-content button {
              padding: 4px 8px !important;
              font-size: 7px !important;
              border-radius: 3px !important;
            }
            
            /* Desktop Interface Elements Mobile Fix */
            .desktop-app-content div[style*="display: flex"] {
              gap: 5px !important;
              padding: 5px 0 !important;
            }
            
            .desktop-app-content div[style*="height: 60%"] {
              height: 65% !important;
              padding: 10px !important;
            }
            
            .desktop-app-content div[style*="height: 20%"] {
              height: 15% !important;
              padding: 5px 10px !important;
            }
            
            .desktop-info-section h2 {
              font-size: 24px !important;
              margin-bottom: 15px !important;
            }
            
            .desktop-info-section p {
              font-size: 14px !important;
              line-height: 1.5 !important;
              margin-bottom: 20px !important;
            }
            
            .desktop-info-section h3 {
              font-size: 16px !important;
              margin-bottom: 10px !important;
            }
            
            .desktop-info-section ul li {
              font-size: 13px !important;
              padding: 6px 0 !important;
            }
            
            .desktop-info-section button {
              padding: 8px 16px !important;
              font-size: 0.8rem !important;
              border-radius: 20px !important;
              min-width: 120px !important;
            }
            
            /* Mobile App Section Buttons */
            .mobile-action-buttons button {
              padding: 8px 16px !important;
              font-size: 0.8rem !important;
              border-radius: 20px !important;
              min-width: 120px !important;
            }
            
            /* Website Section Buttons */
            .website-action-buttons button {
              padding: 8px 16px !important;
              font-size: 0.8rem !important;
              border-radius: 20px !important;
              min-width: 120px !important;
            }
            
            /* Desktop Section Buttons */
            .desktop-action-buttons button {
              padding: 8px 16px !important;
              font-size: 0.8rem !important;
              border-radius: 20px !important;
              min-width: 120px !important;
            }
          }
          
          /* Desktop Section Small Mobile Layout */
          @media (max-width: 576px) {
            .desktop-showcase-content {
              gap: 20px !important;
              padding: 15px !important;
            }
            
            .desktop-setup {
              max-width: 280px !important;
              gap: 12px !important;
              padding-bottom: 50px !important;
            }
            
            .desktop-monitor {
              width: 300px !important;
              height: 200px !important;
              border-radius: 16px !important;
              background: linear-gradient(145deg, #1a1a1a 0%, #000000 50%, #1a1a1a 100%) !important;
              box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 2px rgba(255,255,255,0.1), inset 0 0 0 1px rgba(255,255,255,0.05) !important;
              position: relative !important;
              overflow: visible !important;
            }
            
            .desktop-monitor::before {
              content: '' !important;
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              right: 0 !important;
              height: 30px !important;
              background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%) !important;
              border-radius: 16px 16px 0 0 !important;
            }
            
            .monitor-stand {
              width: 100px !important;
              height: 28px !important;
              bottom: -28px !important;
              border-radius: 14px 14px 0 0 !important;
              background: linear-gradient(145deg, #c0c0c0 0%, #a8a8a8 30%, #909090 70%, #787878 100%) !important;
              box-shadow: 0 10px 30px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2) !important;
              border: 1px solid rgba(255,255,255,0.3) !important;
              border-bottom: none !important;
            }
            
            .monitor-base {
              width: 160px !important;
              height: 24px !important;
              bottom: -52px !important;
              border-radius: 15px !important;
              background: linear-gradient(145deg, #d0d0d0 0%, #b8b8b8 20%, #a0a0a0 50%, #888888 80%, #707070 100%) !important;
              box-shadow: 0 12px 35px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.3) !important;
              border: 1px solid rgba(255,255,255,0.4) !important;
            }
            
            .monitor-screen {
              width: 280px !important;
              height: 170px !important;
              border-radius: 10px !important;
              margin: 15px auto 0 !important;
              background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;
              box-shadow: inset 0 0 15px rgba(0,0,0,0.1) !important;
              border: 2px solid rgba(0,0,0,0.1) !important;
            }
            
            /* Desktop Mockup Content Small Mobile Fix */
            .desktop-app-content h1 {
              font-size: 10px !important;
              margin-bottom: 2px !important;
            }
            
            .desktop-app-content p {
              font-size: 6px !important;
            }
            
            .desktop-app-content span {
              font-size: 7px !important;
              padding: 1px 3px !important;
            }
            
            .desktop-app-content button {
              padding: 3px 6px !important;
              font-size: 6px !important;
              border-radius: 2px !important;
            }
            
            /* Desktop Interface Elements Small Mobile Fix */
            .desktop-app-content div[style*="display: flex"] {
              gap: 3px !important;
              padding: 3px 0 !important;
            }
            
            .desktop-app-content div[style*="height: 60%"] {
              height: 70% !important;
              padding: 8px !important;
            }
            
            .desktop-app-content div[style*="height: 20%"] {
              height: 10% !important;
              padding: 3px 8px !important;
            }
            
            .desktop-info-section h2 {
              font-size: 20px !important;
              margin-bottom: 12px !important;
            }
            
            .desktop-info-section p {
              font-size: 13px !important;
              margin-bottom: 15px !important;
            }
            
            .desktop-info-section h3 {
              font-size: 14px !important;
              margin-bottom: 8px !important;
            }
            
            .desktop-info-section ul li {
              font-size: 12px !important;
              padding: 4px 0 !important;
            }
            
            .desktop-info-section button {
              padding: 8px 16px !important;
              font-size: 13px !important;
              border-radius: 18px !important;
            }
          }
        `}
      </style>
      <section id="projects" style={{ 
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        animation: 'fadeInUp 0.8s ease-out',
        paddingTop: '20px',
        paddingBottom: '120px',
        marginTop: '90px'
      }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
           
            <h2 className="display-4 fw-bold mb-4" style={{ 
              color: '#2c3e50',
              fontSize: '3rem',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Our Projects
            </h2>
            <p className="lead" style={{ 
              color: '#6c757d',
              fontSize: '1.25rem',
              lineHeight: '1.5'
            }}>
              Explore our portfolio of innovative projects across different platforms and technologies.
            </p>
          </Col>
        </Row>

        {/* Category Navigation */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="d-flex justify-content-center flex-wrap gap-2 gap-md-3" style={{
              padding: '0 15px'
            }}>
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                    className={`btn d-flex align-items-center gap-2 category-nav-btn ${
                      activeCategory === category.id ? 'active' : ''
                    }`}
                  style={{
                      borderColor: 'rgba(26, 26, 26, 0.3)',
                      color: activeCategory === category.id ? '#ffffff' : '#2c3e50',
                      backgroundColor: activeCategory === category.id ? '#2c3e50' : '#ffffff',
                      border: '1px solid rgba(26, 26, 26, 0.3)',
                      borderRadius: '25px',
                      padding: '12px 24px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      minWidth: '140px',
                      justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                    if (activeCategory !== category.id) {
                         e.target.style.backgroundColor = '#f8f9fa';
                         e.target.style.borderColor = 'rgba(26, 26, 26, 0.3)';
                         e.target.style.color = '#2c3e50';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
                    } else {
                        e.target.style.backgroundColor = '#1a1a1a';
                        e.target.style.borderColor = 'rgba(26, 26, 26, 0.3)';
                        e.target.style.color = '#ffffff';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
                    }
              }}
              onMouseLeave={(e) => {
                    if (activeCategory !== category.id) {
                        e.target.style.backgroundColor = '#ffffff';
                         e.target.style.borderColor = 'rgba(26, 26, 26, 0.3)';
                         e.target.style.color = '#2c3e50';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                    } else {
                        e.target.style.backgroundColor = '#2c3e50';
                        e.target.style.borderColor = 'rgba(26, 26, 26, 0.3)';
                        e.target.style.color = '#ffffff';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                >
                    <Icon />
                    {category.name}
                </button>
                );
              })}
            </div>
          </Col>
        </Row>

        {/* Projects Content */}
        <Row className="justify-content-center" style={{ marginTop: '0px' }}>
          <Col lg={12}>
            <div className="project-container" data-aos="fade-up" data-aos-delay="400">
              {activeCategory === 'mobile' && (
                <div className="mobile-container" style={{ 
                  width: '100%', 
                  maxWidth: '1600px', 
                  margin: '0 auto', 
                  paddingBottom: '60px', 
                  paddingTop: '0px',
                  marginTop: '-20px'
                }}>
                  {/* Main Carousel Container */}
                  <div className="mobile-showcase" style={{
                    position: 'relative',
                    maxWidth: '1600px',
                    margin: '0 auto',
                    transform: `translateY(${scrollY * 0.02}px)`
                  }}>
                    
                    {/* App Content */}
                    <div className="app-showcase-content" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '30px',
                      minHeight: '200px',
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      padding: '0px 20px 20px 20px'
                    }}>
                      
                      {/* Left Side - App Info */}
                      <div className="app-info-section" style={{
                        flex: '1',
                        padding: '20px',
                        textAlign: 'left'
                      }}>
                        {/* App Title */}
                        <h2 className="fw-bold mb-4" style={{ 
                          fontSize: '3rem',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          marginBottom: '25px'
                        }}>
                          {projects.mobile[currentAppIndex].title}
                        </h2>
                        
                          {/* App Description */}
                          <p className="mb-4" style={{ 
                          fontSize: '1.2rem',
                          lineHeight: '1.8',
                          color: '#2c3e50',
                          marginBottom: '35px'
                        }}>
                          {projects.mobile[currentAppIndex].description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="mb-4">
                          <h5 className="fw-bold mb-3 tech-heading" style={{ 
                            color: '#2c3e50', 
                            fontSize: '1.2rem',
                            marginBottom: '16px'
                          }}>Technologies Used</h5>
                          <div className="d-flex flex-wrap tech-badges" style={{ gap: '12px' }}>
                            {projects.mobile[currentAppIndex].technologies.map((tech, index) => (
                              <span
                                key={index}
                    style={{
                                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                  color: 'white',
                                  padding: '8px 16px',
                                  borderRadius: '20px',
                                  fontSize: '0.85rem',
                                  fontWeight: '600',
                                  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                  </div>
                </div>
                
                        {/* Metrics */}
                  <div className="mb-4">
                          <h5 className="fw-bold mb-3 metrics-heading" style={{ 
                            color: '#2c3e50', 
                            fontSize: '1.2rem',
                            marginBottom: '16px'
                          }}>App Performance</h5>
                          <div className="d-flex flex-wrap metrics-badges" style={{ gap: '12px' }}>
                            {Object.entries(projects.mobile[currentAppIndex].metrics).map(([key, value], index) => (
                              <span
                                key={index}
                                style={{
                                  background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                                  color: 'white',
                                  padding: '8px 16px',
                                  borderRadius: '20px',
                                  fontSize: '0.85rem',
                                  fontWeight: '600',
                                  boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                }}
                              >
                                {key}: {value}
                              </span>
                            ))}
                          </div>
                  </div>
                  
                        {/* Action Buttons */}
                        <div className="d-flex gap-4 mt-5 action-buttons mobile-action-buttons">
                          <button
                            onClick={() => window.open(projects.mobile[currentAppIndex].links.live, '_blank')}
                            style={{
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              color: 'white',
                              border: 'none',
                              padding: '15px 30px',
                              borderRadius: '30px',
                              fontSize: '1rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                transition: 'all 0.3s ease',
                              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
              }}
              onMouseEnter={(e) => {
                              e.target.style.transform = 'translateY(-3px)';
                              e.target.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
                            }}
                          >
                            <FaPlay className="me-2" />
                            View App
                          </button>
                          <button
                            onClick={() => window.open(projects.mobile[currentAppIndex].links.github, '_blank')}
                    style={{
                              background: 'transparent',
                              color: '#667eea',
                              border: '2px solid #667eea',
                              padding: '13px 30px',
                              borderRadius: '30px',
                              fontSize: '1rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.background = '#667eea';
                              e.target.style.color = 'white';
                              e.target.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = 'transparent';
                              e.target.style.color = '#667eea';
                              e.target.style.transform = 'translateY(0)';
                            }}
                          >
                            View Code
                          </button>
                    </div>
                        </div>
                      
                      {/* Right Side - Phone Display */}
                      <div className="phone-display-section mobile-phone-container" style={{
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '30px',
                        borderRadius: '20px',
                        background: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(10px)',
                        padding: '0px 20px 40px 20px',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}>
                        
                        {/* Phone Container */}
                        <div className="phone-container" style={{
                          position: 'relative',
                          transform: 'perspective(1000px) rotateY(-15deg) rotateX(12deg)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          borderRadius: '50px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'perspective(1000px) rotateY(-15deg) rotateX(12deg) scale(1)';
                        }}
                        >
                          {/* iPhone 15 Pro Mockup Frame */}
                          <div className="phone-frame iphone-15-pro" style={{
                            width: '280px',
                            height: '560px',
                             background: 'linear-gradient(145deg, #000000 0%, #0a0a0a 15%, #000000 30%, #000000 60%, #000000 100%)',
                            borderRadius: '45px',
                            padding: '8px',
                             position: 'relative',
                             boxShadow: '0 25px 80px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 0 1px rgba(0,0,0,0.6)',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                             border: '1px solid rgba(255,255,255,0.1)'
                           }}>
                             {/* Dynamic Island */}
                             <div className="dynamic-island" style={{
                               position: 'absolute',
                              top: '18px',
                               left: '50%',
                               transform: 'translateX(-50%)',
                              width: '110px',
                              height: '36px',
                               background: 'linear-gradient(145deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
                              borderRadius: '20px',
                               zIndex: 10,
                               boxShadow: '0 4px 20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.5)',
                               paddingTop: '3px',
                               border: '1px solid rgba(255,255,255,0.05)'
                             }}>
                               {/* Dynamic Island Camera */}
                               <div style={{
                                 position: 'absolute',
                                left: '14px',
                                 top: '50%',
                                 transform: 'translateY(-50%)',
                                width: '6px',
                                height: '6px',
                                 background: 'radial-gradient(circle, #2a2a2a 0%, #000000 70%)',
                                 borderRadius: '50%',
                                 border: '1px solid #444',
                                 boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1)'
                               }}></div>
                               {/* Dynamic Island Speaker */}
                               <div style={{
                                 position: 'absolute',
                                right: '14px',
                                 top: '50%',
                                 transform: 'translateY(-50%)',
                                width: '18px',
                                height: '3px',
                                 background: 'linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
                                 borderRadius: '2px',
                                 border: '1px solid #333',
                                 boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)'
                               }}></div>
                        </div>
                             
                             {/* iPhone Side Buttons */}
                             {/* Volume Up Button */}
                             <div style={{
                               position: 'absolute',
                               left: '-3px',
                              top: '120px',
                               width: '6px',
                              height: '40px',
                               background: 'linear-gradient(90deg, #2a2a2a 0%, #1a1a1a 100%)',
                               borderRadius: '3px 0 0 3px',
                               boxShadow: 'inset 1px 0 0 rgba(255,255,255,0.05)'
                             }}></div>
                             
                             {/* Volume Down Button */}
                             <div style={{
                               position: 'absolute',
                               left: '-3px',
                              top: '170px',
                               width: '6px',
                              height: '40px',
                               background: 'linear-gradient(90deg, #2a2a2a 0%, #1a1a1a 100%)',
                               borderRadius: '3px 0 0 3px',
                               boxShadow: 'inset 1px 0 0 rgba(255,255,255,0.05)'
                             }}></div>
                             
                             {/* Power Button */}
                             <div style={{
                               position: 'absolute',
                               right: '-3px',
                              top: '140px',
                               width: '6px',
                              height: '60px',
                               background: 'linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 100%)',
                               borderRadius: '0 3px 3px 0',
                               boxShadow: 'inset -1px 0 0 rgba(255,255,255,0.05)'
                             }}></div>
                             
                             {/* iPhone Home Indicator */}
                             <div className="iphone-home-indicator" style={{
                               position: 'absolute',
                              bottom: '12px',
                               left: '50%',
                               transform: 'translateX(-50%)',
                              width: '120px',
                              height: '5px',
                               background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)',
                               borderRadius: '3px',
                               zIndex: 10,
                               backdropFilter: 'blur(20px)',
                               border: '1px solid rgba(255,255,255,0.1)',
                               boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                             }}></div>
                            
                            {/* iPhone 15 Pro Screen */}
                            <div className="phone-screen iphone-15-pro-screen" style={{
                               width: '100%',
                               height: '100%',
                               background: 'linear-gradient(145deg, #000000 0%, #000000 100%)',
                              borderRadius: '42px',
                               overflow: 'hidden',
                               position: 'relative',
                               boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.05)',
                               border: '1px solid #000000'
                             }}>
                               {/* Animated Slides Container */}
                               <div className="slides-container" style={{
                                 width: '100%',
                                 height: '100%',
                                 position: 'relative',
                                overflow: 'hidden',
                                borderRadius: 'inherit'
                               }}>
                                 {/* Slide 1 - Scuola Video LMS Interface */}
                                 <div className="slide" style={{
                                   width: '100%',
                                   height: '100%',
                                   position: 'absolute',
                                  top: '0',
                                   left: '0',
                                   transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                  transform: `translateY(${currentScreenIndex * 100}%)`,
                                  boxSizing: 'border-box',
                                  overflow: 'hidden',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                 }}>
                                   <img 
                                     src={projects.mobile[currentAppIndex].mockupImages ? projects.mobile[currentAppIndex].mockupImages[0] : projects.mobile[currentAppIndex].image} 
                                     alt={`${projects.mobile[currentAppIndex].title} App`}
                                     style={{
                                       width: '100%',
                                       height: '100%',
                                       objectFit: 'cover',
                                       borderRadius: 'inherit'
                                     }}
                                     onError={(e) => {
                                       e.target.style.display = 'none';
                                       e.target.nextSibling.style.display = 'flex';
                                     }}
                                   />
                                   <div style={{
                                     width: '100%',
                                     height: '100%',
                                     background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
                                     display: 'none',
                                     flexDirection: 'column',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     color: 'white',
                                     padding: '20px',
                                     textAlign: 'center'
                                   }}>
                                     <div style={{
                                       fontSize: '24px',
                                       marginBottom: '10px'
                                     }}>
                                       📱
                                     </div>
                                     <h3 style={{
                                       fontSize: '16px',
                                       marginBottom: '8px',
                                       fontWeight: 'bold'
                                     }}>
                                       Scuola Video LMS
                                     </h3>
                                     <p style={{
                                       fontSize: '12px',
                                       opacity: 0.9
                                     }}>
                                       Learning Management System
                                     </p>
                                   </div>
                                 </div>
                                 
                                 {/* Slide 2 - Second App Image */}
                                 <div className="slide" style={{
                                   width: '100%',
                                   height: '100%',
                                   position: 'absolute',
                                  top: '0',
                                   left: '0',
                                   transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                  transform: `translateY(${(currentScreenIndex - 1) * 100}%)`,
                                  boxSizing: 'border-box',
                                  overflow: 'hidden',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                 }}>
                                   <img 
                                     src={projects.mobile[currentAppIndex].mockupImages ? projects.mobile[currentAppIndex].mockupImages[1] : projects.mobile[currentAppIndex].image} 
                                     alt={`${projects.mobile[currentAppIndex].title} App - Second View`}
                                     style={{
                                       width: '100%',
                                       height: '100%',
                                       objectFit: 'cover',
                                       borderRadius: 'inherit'
                                     }}
                                     onError={(e) => {
                                       e.target.style.display = 'none';
                                       e.target.nextSibling.style.display = 'flex';
                                     }}
                                   />
                                   <div style={{
                                     width: '100%',
                                     height: '100%',
                                     background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                     display: 'none',
                                     flexDirection: 'column',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     color: 'white',
                                     padding: '20px',
                                     textAlign: 'center'
                                   }}>
                                     <div style={{
                                       fontSize: '24px',
                                       marginBottom: '10px'
                                     }}>
                                       ⭐
                                     </div>
                                     <h3 style={{
                                       fontSize: '16px',
                                       marginBottom: '8px',
                                       fontWeight: 'bold'
                                     }}>
                                       App Features
                                     </h3>
                                     <p style={{
                                       fontSize: '12px',
                                       opacity: 0.9
                                     }}>
                                       Advanced Learning Features
                                     </p>
                                   </div>
                                 </div>
                                 
                                 {/* Slide 3 - Third App Image */}
                                 <div className="slide" style={{
                                   width: '100%',
                                   height: '100%',
                                   position: 'absolute',
                                  top: '0',
                                   left: '0',
                                   transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                  transform: `translateY(${(currentScreenIndex - 1) * 100}%)`,
                                  boxSizing: 'border-box',
                                  overflow: 'hidden',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                 }}>
                                   <img 
                                     src={projects.mobile[currentAppIndex].mockupImages ? projects.mobile[currentAppIndex].mockupImages[1] : projects.mobile[currentAppIndex].image} 
                                     alt={`${projects.mobile[currentAppIndex].title} App - Third View`}
                                     style={{
                                       width: '100%',
                                       height: '100%',
                                       objectFit: 'cover',
                                       borderRadius: 'inherit'
                                     }}
                                     onError={(e) => {
                                       e.target.style.display = 'none';
                                       e.target.nextSibling.style.display = 'flex';
                                     }}
                                   />
                                   <div style={{
                                     width: '100%',
                                     height: '100%',
                                     background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                     display: 'none',
                                     flexDirection: 'column',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     color: 'white',
                                     padding: '20px',
                                     textAlign: 'center'
                                   }}>
                                     <div style={{
                                       fontSize: '24px',
                                       marginBottom: '10px'
                                     }}>
                                       📊
                                     </div>
                                     <h3 style={{
                                       fontSize: '16px',
                                       marginBottom: '8px',
                                       fontWeight: 'bold'
                                     }}>
                                       App Performance
                                     </h3>
                                     <p style={{
                                       fontSize: '12px',
                                       opacity: 0.9
                                     }}>
                                       Fast & Reliable
                                     </p>
                                   </div>
                                 </div>
                                 
                                {/* Enhanced Scroll Indicator */}
                                 <div style={{
                                   position: 'absolute',
                                  bottom: '14px',
                                  right: '14px',
                                   display: 'flex',
                                   flexDirection: 'column',
                                  gap: '4px'
                                 }}>
                                   {[0, 1].map((index) => (
                                     <div 
                                       key={index} 
                                       onClick={() => setCurrentScreenIndex(index)}
                                       style={{
                                        width: '4px',
                                        height: '4px',
                                         borderRadius: '50%',
                                        background: currentScreenIndex === index ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: currentScreenIndex === index ? '0 0 8px rgba(255,255,255,0.5)' : 'none',
                                        cursor: 'pointer'
                                       }}
                                     ></div>
                                   ))}
                                 </div>
                               </div>
                        </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Navigation */}
                    <div className="app-navigation" style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '30px',
                      marginTop: '0px',
                      marginBottom: '0px',
                      padding: '0px 0'
                    }}>
                      <button
                        onClick={prevApp}
                        style={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '55px',
                          height: '55px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem',
                          cursor: 'pointer',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
                          border: '2px solid rgba(255,255,255,0.1)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-3px) scale(1.05)';
                          e.target.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0) scale(1)';
                          e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
                        }}
                      >
                        ←
                      </button>
                      
                      {/* App Dots */}
                      <div className="d-flex gap-2 dots">
                        {projects.mobile.map((_, index) => (
                          <div
                            key={index}
                            onClick={() => setCurrentAppIndex(index)}
                            style={{
                              width: index === currentAppIndex ? '30px' : '10px',
                              height: '10px',
                              borderRadius: '5px',
                              background: index === currentAppIndex 
                                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                                : 'rgba(102, 126, 234, 0.3)',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                          />
                        ))}
                      </div>
                      
                      <button
                        onClick={nextApp}
                        style={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '55px',
                          height: '55px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem',
                          cursor: 'pointer',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
                          border: '2px solid rgba(255,255,255,0.1)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-3px) scale(1.05)';
                          e.target.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0) scale(1)';
                          e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
                        }}
                      >
                        →
                      </button>
                </div>
                  </div>
                        </div>
                      )}

              {activeCategory === 'website' && (
                <div className="website-container" style={{ 
                  paddingBottom: '60px', 
                  paddingTop: '0px' 
                }}>
                  {/* Enhanced Website Showcase with Carousel */}
                  <div className="website-showcase" style={{
                    position: 'relative',
                    maxWidth: '1600px',
                    margin: '0 auto'
                  }}>
                    
                    {/* Main Website Display */}
                    <div className="website-showcase-content" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '60px',
                      minHeight: '600px',
                      padding: '40px 0',
                      justifyContent: 'flex-start',
                      flexDirection: 'row'
                    }}>
                      
                      {/* Left Side - Website Info */}
                      <div className="website-info-section" style={{
                        flex: '1.2',
                        padding: '40px 20px 40px 0',
                        maxWidth: '600px',
                        marginLeft: '0',
                        textAlign: 'left'
                      }}>
                        {/* Website Title */}
                        
                        <h2 className="fw-bold mb-4 website-section" style={{ 
                          fontSize: '2.2rem',
                          background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          marginBottom: '20px',
                          lineHeight: '1.2'
                        }}>
                          {projects.website[currentAppIndex]?.title || "Modern Web Solutions"}
                        </h2>
                        
                        {/* Website Description */}
                        <p className="mb-4 website-section" style={{
                          fontSize: '1.1rem',
                          lineHeight: '1.6',
                          color: '#2c3e50',
                          marginBottom: '25px'
                        }}>
                          {projects.website[currentAppIndex]?.description || "Creating stunning web experiences with cutting-edge technologies and modern design principles."}
                        </p>
                        
                        {/* Technologies */}
                  <div className="mb-4">
                          <h5 className="fw-bold mb-3 website-section tech-heading" style={{ 
                            color: '#2c3e50', 
                            fontSize: '1.1rem',
                            marginBottom: '12px'
                          }}>Technologies Used</h5>
                          <div className="d-flex flex-wrap website-tech-badges" style={{ gap: '8px' }}>
                            {(projects.website[currentAppIndex]?.technologies || ["React", "Node.js", "MongoDB"]).map((tech, index) => (
                              <span
                                key={index}
                                className="badge"
                                style={{
                                  background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                                  color: 'white',
                                  padding: '12px 24px',
                                  borderRadius: '25px',
                                  fontSize: '1rem',
                                  fontWeight: '600',
                                  boxShadow: '0 8px 25px rgba(40, 167, 69, 0.3)',
                                  transition: 'all 0.3s ease'
                                }}
                      >
                        {tech}
                              </span>
                            ))}
                          </div>
                  </div>
                  
                        {/* Metrics */}
                        <div className="mb-4">
                          <h5 className="fw-bold mb-3 website-section metrics-heading" style={{ 
                            color: '#2c3e50', 
                            fontSize: '1.1rem',
                            marginBottom: '12px'
                          }}>Performance Metrics</h5>
                          <div className="d-flex flex-wrap website-metrics-badges" style={{ gap: '8px' }}>
                            {Object.entries(projects.website[currentAppIndex]?.metrics || {users: "50K+", performance: "98%"}).map(([key, value], index) => (
                              <span
                                key={index}
                                className="badge"
                                style={{
                                  background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
                                  color: 'white',
                                  padding: '12px 24px',
                                  borderRadius: '25px',
                                  fontSize: '1rem',
                                  fontWeight: '600',
                                  boxShadow: '0 8px 25px rgba(255, 193, 7, 0.3)'
                                }}
                              >
                                {key}: {value}
                              </span>
                            ))}
                    </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="d-flex gap-4 website-action-buttons">
                          <button
                            onClick={() => window.open(projects.website[currentAppIndex]?.links?.live || "#", '_blank')}
                            style={{
                              background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                              color: 'white',
                              border: 'none',
                              borderRadius: '50px',
                              padding: '15px 35px',
                              fontSize: '1.1rem',
                              fontWeight: '600',
                              boxShadow: '0 15px 35px rgba(40, 167, 69, 0.4)',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-3px)';
                              e.currentTarget.style.boxShadow = '0 20px 40px rgba(40, 167, 69, 0.6)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 15px 35px rgba(40, 167, 69, 0.4)';
                            }}
                          >
                            <FaPlay className="me-2" />
                            Live Demo
                          </button>
                          
                          <button
                            onClick={() => window.open(projects.website[currentAppIndex]?.links?.github || "#", '_blank')}
                            style={{
                              background: 'rgba(40, 167, 69, 0.1)',
                              color: '#28a745',
                              border: '2px solid #28a745',
                              borderRadius: '50px',
                              padding: '15px 35px',
                              fontSize: '1.1rem',
                              fontWeight: '600',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#28a745';
                              e.currentTarget.style.color = 'white';
                              e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'rgba(40, 167, 69, 0.1)';
                              e.currentTarget.style.color = '#28a745';
                              e.currentTarget.style.transform = 'translateY(0)';
                            }}
                          >
                            View Code
                          </button>
                        </div>
                        </div>
                      
                      {/* Right Side - MacBook Mockup */}
                      <div className="macbook-container" style={{
                        flex: '0.8',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        transform: 'perspective(1200px) rotateY(-15deg) rotateX(10deg)',
                        transition: 'all 0.4s ease',
                        marginRight: '0'
                      }}>
                        {/* MacBook Pro Mockup */}
                        <div className="macbook-pro" style={{
                          width: '680px',
                          height: '450px',
                          position: 'relative',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.parentElement.style.transform = 'perspective(1200px) rotateY(-5deg) rotateX(5deg) scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.parentElement.style.transform = 'perspective(1200px) rotateY(-15deg) rotateX(10deg) scale(1)';
                        }}>
                          
                          {/* MacBook Base */}
                          <div className="macbook-base" style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '720px',
                            height: '24px',
                            background: 'linear-gradient(180deg, #d1d1d1 0%, #e8e8e8 20%, #f5f5f5 50%, #e8e8e8 80%, #d1d1d1 100%)',
                            borderRadius: '0 0 20px 20px',
                            boxShadow: '0 15px 45px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.8)',
                            zIndex: 1,
                            border: '1px solid rgba(0,0,0,0.1)'
                          }}>
                            {/* MacBook Hinge */}
                            <div style={{
                              position: 'absolute',
                              top: '-4px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '240px',
                              height: '8px',
                              background: 'linear-gradient(180deg, #a8a8a8 0%, #c8c8c8 50%, #a8a8a8 100%)',
                              borderRadius: '4px',
                              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)'
                            }}></div>
                            
                            {/* MacBook Logo Area */}
                            <div style={{
                              position: 'absolute',
                              top: '8px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '60px',
                              height: '8px',
                              background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                              borderRadius: '4px'
                            }}></div>
                            
                            {/* MacBook Feet */}
                            <div style={{
                              position: 'absolute',
                              bottom: '2px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '100px',
                              height: '2px',
                              background: 'rgba(0,0,0,0.1)',
                              borderRadius: '1px'
                            }}></div>
                        </div>
                          
                          {/* MacBook Screen */}
                          <div className="macbook-screen" style={{
                            position: 'relative',
                            width: '680px',
                            height: '420px',
                            background: 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
                            borderRadius: '25px',
                            padding: '25px',
                            boxShadow: '0 30px 80px rgba(0,0,0,0.5), inset 0 0 0 3px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
                            transform: 'rotateX(-5deg)',
                            zIndex: 2,
                            border: '2px solid rgba(0,0,0,0.3)'
                          }}>
                            
                            {/* MacBook Camera */}
                            <div style={{
                              position: 'absolute',
                              top: '15px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '10px',
                              height: '10px',
                              background: 'radial-gradient(circle, #000 30%, #333 70%, #666 100%)',
                              borderRadius: '50%',
                              boxShadow: '0 0 8px rgba(255,255,255,0.2), inset 0 1px 2px rgba(0,0,0,0.5)',
                              zIndex: 10,
                              border: '1px solid rgba(255,255,255,0.1)'
                            }}></div>
                            
                            {/* MacBook Speaker Grille */}
                            <div style={{
                              position: 'absolute',
                              top: '18px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '120px',
                              height: '4px',
                              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 80%, transparent 100%)',
                              borderRadius: '2px',
                              zIndex: 9
                            }}></div>
                            
                            {/* Simple Scrolling Image Display */}
                            <div className="image-display" style={{
                              width: '100%',
                              height: '100%',
                              background: '#ffffff',
                              borderRadius: '12px',
                              overflow: 'hidden',
                              position: 'relative',
                              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)'
                            }}>
                              <img 
                                src={projects.website[currentAppIndex]?.image || weflexImage} 
                                alt={projects.website[currentAppIndex]?.title || "Website"}
                                style={{
                                  width: '100%',
                                  height: 'auto',
                                  minHeight: '100%',
                                  objectFit: 'cover',
                                  objectPosition: 'top',
                                  position: 'absolute',
                                  top: '0',
                                  left: '0',
                                  transition: 'transform 25s ease-in-out',
                                  transform: 'translateY(0)'
                                }}
                                onLoad={(e) => {
                                  const img = e.target;
                                  const container = img.parentElement;
                                  const containerHeight = container.clientHeight;
                                  const containerWidth = container.clientWidth;
                                  
                                  // Calculate the actual height the image will have when scaled to full width
                                  const imageAspectRatio = img.naturalWidth / img.naturalHeight;
                                  const scaledHeight = containerWidth / imageAspectRatio;
                                  
                                  // Set the image height to show the complete image
                                  img.style.height = `${scaledHeight}px`;
                                  
                                  // Calculate how much we need to scroll to show the complete image
                                  // This ensures we stop exactly when the image ends
                                  const scrollAmount = Math.max(0, scaledHeight - containerHeight);
                                  img.scrollAmount = scrollAmount;
                                  img.maxScroll = scrollAmount;
                                }}
                                onMouseEnter={(e) => {
                                  const img = e.target;
                                  if (img.scrollAmount > 0) {
                                    // Calculate the exact translateY to stop at the end of the image
                                    const translateY = -(img.scrollAmount / img.parentElement.clientHeight) * 100;
                                    // Ensure we don't scroll beyond the image
                                    const maxTranslateY = Math.min(translateY, -(img.maxScroll / img.parentElement.clientHeight) * 100);
                                    img.style.transform = `translateY(${maxTranslateY}%)`;
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.transform = 'translateY(0)';
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Website Navigation */}
                    <div className="website-navigation" style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '25px',
              
                      marginBottom: '30px',
                      padding: '25px 0'
                    }}>
                      <button
                        onClick={() => setCurrentAppIndex((prev) => (prev - 1 + projects.website.length) % projects.website.length)}
                        style={{
                          background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '55px',
                          height: '55px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem',
                          cursor: 'pointer',
                          boxShadow: '0 10px 25px rgba(40, 167, 69, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)';
                          e.currentTarget.style.boxShadow = '0 15px 35px rgba(40, 167, 69, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 10px 25px rgba(40, 167, 69, 0.3)';
                        }}
                      >
                        ←
                      </button>
                      
                      {/* Website Indicators */}
                      <div className="d-flex gap-2 dots">
                        {projects.website.map((_, index) => (
                          <div
                            key={index}
                            onClick={() => setCurrentAppIndex(index)}
                            style={{
                              width: index === currentAppIndex ? '30px' : '10px',
                              height: '10px',
                              borderRadius: '5px',
                              background: index === currentAppIndex 
                                ? 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' 
                                : 'rgba(40, 167, 69, 0.3)',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                          />
                        ))}
                      </div>
                      
                      <button
                        onClick={() => setCurrentAppIndex((prev) => (prev + 1) % projects.website.length)}
                        style={{
                          background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '55px',
                          height: '55px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem',
                          cursor: 'pointer',
                          boxShadow: '0 10px 25px rgba(40, 167, 69, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)';
                          e.currentTarget.style.boxShadow = '0 15px 35px rgba(40, 167, 69, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 10px 25px rgba(40, 167, 69, 0.3)';
                        }}
                      >
                        →
                      </button>
                    </div>
                  </div>
                        </div>
                      )}

              {activeCategory === 'graphic' && (
                <div className="graphic-showcase" style={{
                  paddingTop: '20px',
                  paddingBottom: '60px'
                }}>
                  
                  {/* Design Grid Container */}
                    <div className="design-grid-container" style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '25px',
                      perspective: '1000px',
                      width: '100%',
                      maxWidth: '1200px',
                      marginTop: '30px'
                    }}>
                      {[
                        { image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=400&fit=crop', title: 'Brand Identity' },
                        { image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=400&fit=crop', title: 'Logo Design' },
                        { image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop', title: 'Web Design' },
                        { image: 'https://images.unsplash.com/photo-1558655146-8d4b08db4a2b?w=400&h=400&fit=crop', title: 'Print Design' },
                        { image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=400&fit=crop', title: 'UI/UX Design' },
                        { image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=400&fit=crop', title: 'Social Media' },
                        { image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop', title: 'Packaging' },
                      { image: 'https://images.unsplash.com/photo-1558655146-8d4b08db4a2b?w=400&h=400&fit=crop', title: 'Illustration' }
                      ].slice(currentGraphicPage * 8, (currentGraphicPage + 1) * 8).map((design, index) => (
                        <div key={index} style={{
                          borderRadius: '25px',
                          overflow: 'hidden',
                          boxShadow: `0 15px 40px rgba(0,0,0,0.2)`,
                          transform: `perspective(1000px) rotateX(${Math.random() * 8 + 12}deg) rotateY(${Math.random() * 16 - 8}deg) translateZ(${Math.random() * 15}px)`,
                          transformStyle: 'preserve-3d',
                          position: 'relative',
                          cursor: 'pointer',
                          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          height: '280px',
                          background: 'transparent',
                          border: 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'perspective(1000px) rotateX(8deg) rotateY(0deg) translateZ(35px) scale(1.08)';
                          e.currentTarget.style.boxShadow = '0 25px 80px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.4)';
                          e.currentTarget.style.zIndex = '10';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = `perspective(1000px) rotateX(${Math.random() * 8 + 12}deg) rotateY(${Math.random() * 16 - 8}deg) translateZ(${Math.random() * 15}px) scale(1)`;
                          e.currentTarget.style.boxShadow = `0 15px 40px rgba(0,0,0,0.2)`;
                          e.currentTarget.style.zIndex = '1';
                        }}
                        >
                          {/* Background Image */}
                          <div style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            backgroundImage: `url(${design.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                          }} />
                          
                        {/* Overlay */}
                          <div style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: '0',
                            transition: 'opacity 0.3s ease'
                          }} />
                          
                        {/* Design Title */}
                          <div style={{
                            position: 'absolute',
                          bottom: '0',
                            left: '0',
                            right: '0',
                          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                        color: 'white',
                          padding: '20px 15px 15px',
                          transform: 'translateY(100%)',
                          transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(100%)';
                        }}
                        >
                          <h4 style={{ 
                            fontSize: '16px', 
                            fontWeight: '600', 
                            margin: '0',
                            textAlign: 'center'
                          }}>
                            {design.title}
                          </h4>
                    </div>
                        </div>
                      ))}
                  </div>
                  
                  {/* Navigation Controls */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '25px',
                    marginTop: '20px',
                    marginBottom: '30px',
                    padding: '25px 0'
                  }}>
                    <button
                      onClick={() => setCurrentGraphicPage((prev) => Math.max(0, prev - 1))}
                      style={{
                        background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '55px',
                        height: '55px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 12px 35px rgba(255, 107, 107, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.3)';
                      }}
                    >
                      ←
                    </button>
                    
                    <div className="d-flex gap-2 dots">
                      {Array.from({ length: Math.ceil(8 / 8) }, (_, index) => (
                        <div
                          key={index}
                          onClick={() => setCurrentGraphicPage(index)}
                          style={{
                            width: index === currentGraphicPage ? '30px' : '10px',
                            height: '10px',
                            borderRadius: '5px',
                            background: index === currentGraphicPage 
                              ? 'linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)' 
                              : 'rgba(255, 107, 107, 0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={() => setCurrentGraphicPage((prev) => Math.min(Math.ceil(8 / 8) - 1, prev + 1))}
                      style={{
                        background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '55px',
                        height: '55px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 12px 35px rgba(255, 107, 107, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.3)';
                      }}
                    >
                      →
                    </button>
                  </div>
                  
                  {/* Design Categories Info */}
                  <div style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    padding: '20px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    maxWidth: '800px',
                    margin: '20px auto 0'
                  }}>
                    <h3 style={{ 
                      color: '#2c3e50', 
                      fontSize: '1.8rem', 
                      marginBottom: '15px',
                      background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Creative Design Solutions
                    </h3>
                    <p style={{ 
                      color: '#6c757d', 
                      fontSize: '1.1rem', 
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}>
                      From brand identity to digital illustrations, we create stunning visual experiences that captivate and inspire.
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      gap: '15px'
                    }}>
                      {['Brand Identity', 'Logo Design', 'UI/UX', 'Print Design', 'Social Media', 'Packaging'].map((category, index) => (
                        <span key={index} style={{
                          background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)',
                          color: 'white',
                          padding: '8px 16px',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
                        }}>
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                        </div>
                      )}

              {activeCategory === 'desktop' && (
                <div className="desktop-showcase" style={{
                  maxWidth: '1600px',
                  margin: '0 auto 0 auto',
                  paddingTop: '20px',
                  paddingBottom: '60px',
                  padding: '20px 20px 0 20px'
                }}>
                  <div className="desktop-showcase-content" style={{
                    display: 'flex',
                    gap: '60px',
                    alignItems: 'center',
                    minHeight: '600px',
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                  }}>
                    {/* Desktop Application Info Section */}
                    <div className="desktop-info-section" style={{
                      flex: 1,
                      padding: '40px',
                      maxWidth: '500px',
                      textAlign: 'left'
                    }}>
                      <h2 style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        background: 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        transition: 'opacity 0.5s ease-in-out'
                      }}>
                        {projects.desktop[currentAppIndex]?.title || "Desktop Application Solutions"}
                      </h2>
                      <p style={{
                        fontSize: '16px',
                        color: '#6c757d',
                        marginBottom: '30px',
                        lineHeight: '1.6',
                        transition: 'opacity 0.5s ease-in-out'
                      }}>
                        {projects.desktop[currentAppIndex]?.description || "Building powerful desktop applications with cutting-edge technology and exceptional user experience."}
                      </p>
                      
                      <div style={{ marginBottom: '30px' }}>
                        <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#2c3e50' }}>Application Features:</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {(projects.desktop[currentAppIndex]?.features || ['Cross-Platform', 'High Performance', 'Secure & Reliable', 'User-Friendly']).map((feature, index) => (
                            <li key={index} style={{
                              padding: '8px 0',
                              borderBottom: '1px solid rgba(255,255,255,0.1)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              transition: 'opacity 0.5s ease-in-out'
                            }}>
                              <span style={{
                                width: '6px',
                                height: '6px',
                                background: 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)',
                                borderRadius: '50%'
                              }}></span>
                              <span style={{ color: '#6c757d' }}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                    </div>

                      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <button style={{
                          background: 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)',
                          color: 'white',
                          border: 'none',
                          padding: '12px 24px',
                          borderRadius: '25px',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          boxShadow: '0 8px 20px rgba(220, 53, 69, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 12px 25px rgba(220, 53, 69, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 8px 20px rgba(220, 53, 69, 0.3)';
                        }}
                        >
                          Download App
                        </button>
                        <button style={{
                          background: 'transparent',
                          color: '#dc3545',
                          border: '2px solid #dc3545',
                          padding: '10px 22px',
                          borderRadius: '25px',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#dc3545';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#dc3545';
                        }}
                        >
                          Learn More
                        </button>
                  </div>
                    </div>
                    
                    {/* Desktop Monitor Mockup */}
                    <div className="desktop-monitor-container" style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1
                    }}>
                      <div className="desktop-setup" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '25px',
                        transform: 'perspective(1000px) rotateX(12deg) rotateY(-12deg) rotateZ(3deg)',
                        transformStyle: 'preserve-3d',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        paddingBottom: '80px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1.08)';
                        e.currentTarget.style.filter = 'brightness(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'perspective(1000px) rotateX(12deg) rotateY(-12deg) rotateZ(3deg) scale(1)';
                        e.currentTarget.style.filter = 'brightness(1)';
                      }}
                      >
                        {/* Desktop Monitor */}
                        <div className="desktop-monitor" style={{
                          width: '650px',
                          height: '420px',
                          background: 'linear-gradient(145deg, #3a3a3a 0%, #2a2a2a 15%, #1a1a1a 30%, #0f0f0f 50%, #1a1a1a 70%, #2a2a2a 85%, #3a3a3a 100%)',
                          borderRadius: '30px',
                          position: 'relative',
                          boxShadow: '0 25px 80px rgba(0,0,0,0.4), 0 0 0 3px rgba(255,255,255,0.15), inset 0 2px 8px rgba(255,255,255,0.1), inset 0 -2px 8px rgba(0,0,0,0.3)',
                          border: '3px solid rgba(255,255,255,0.15)',
                          overflow: 'visible',
                          transform: 'translateZ(0)',
                          backdropFilter: 'blur(10px)'
                        }}>
                          {/* Monitor Stand */}
                          <div className="monitor-stand" style={{
                            position: 'absolute',
                            bottom: '-45px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '180px',
                            height: '45px',
                            background: 'linear-gradient(145deg, #f5f5f5 0%, #e8e8e8 10%, #d8d8d8 25%, #c8c8c8 40%, #b8b8b8 55%, #a8a8a8 70%, #989898 85%, #888888 100%)',
                            borderRadius: '25px 25px 0 0',
                            boxShadow: '0 15px 40px rgba(0,0,0,0.3), inset 0 3px 6px rgba(255,255,255,0.6), inset 0 -3px 6px rgba(0,0,0,0.3), 0 0 0 2px rgba(255,255,255,0.2)',
                            zIndex: 1,
                            border: '3px solid rgba(255,255,255,0.4)',
                            borderBottom: 'none',
                            transform: 'translateX(-50%) translateZ(0)'
                          }}></div>
                          
                          {/* Monitor Base */}
                          <div className="monitor-base" style={{
                            position: 'absolute',
                            bottom: '-90px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '360px',
                            height: '50px',
                            background: 'linear-gradient(145deg, #f8f8f8 0%, #f0f0f0 8%, #e8e8e8 16%, #e0e0e0 24%, #d8d8d8 32%, #d0d0d0 40%, #c8c8c8 48%, #c0c0c0 56%, #b8b8b8 64%, #b0b0b0 72%, #a8a8a8 80%, #a0a0a0 88%, #989898 96%, #909090 100%)',
                            borderRadius: '30px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.4), inset 0 4px 8px rgba(255,255,255,0.7), inset 0 -4px 8px rgba(0,0,0,0.4), 0 0 0 2px rgba(255,255,255,0.2)',
                            border: '3px solid rgba(255,255,255,0.5)',
                            borderTop: '2px solid rgba(255,255,255,0.7)',
                            zIndex: 0
                          }}></div>
                          
                          {/* Monitor Screen */}
                          <div className="monitor-screen" style={{
                            width: '590px',
                            height: '360px',
                            background: 'linear-gradient(135deg, #000000 0%, #050505 20%, #0a0a0a 40%, #0f0f0f 60%, #1a1a1a 80%, #000000 100%)',
                            borderRadius: '22px',
                            margin: '35px auto 0',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '4px solid rgba(0,0,0,0.6)',
                            boxShadow: 'inset 0 0 40px rgba(0,0,0,0.9), inset 0 0 0 3px rgba(255,255,255,0.15), 0 0 20px rgba(0,0,0,0.5)',
                            transform: 'translateZ(0)'
                          }}>
                            {/* Monitor Power Button */}
                            <div className="monitor-power" style={{
                              position: 'absolute',
                              top: '22px',
                              right: '22px',
                              width: '18px',
                              height: '18px',
                              background: 'radial-gradient(circle, #00ff99 0%, #00dd77 25%, #00bb55 50%, #009933 75%, #007722 100%)',
                              borderRadius: '50%',
                              boxShadow: '0 0 25px rgba(0,255,153,1), 0 0 50px rgba(0,255,153,0.6), inset 0 3px 6px rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.4), 0 0 0 2px rgba(255,255,255,0.4)',
                              border: '3px solid rgba(255,255,255,0.3)',
                              animation: 'pulse 2s infinite',
                              filter: 'drop-shadow(0 0 10px rgba(0,255,153,0.8))'
                            }}></div>
                            
                            {/* Monitor Brand */}
                            <div className="monitor-brand" style={{
                              position: 'absolute',
                              top: '20px',
                              left: '20px',
                              fontSize: '12px',
                              color: 'rgba(255,255,255,0.8)',
                              fontWeight: '800',
                              letterSpacing: '1.5px',
                              textShadow: '0 2px 4px rgba(0,0,0,0.7)'
                            }}>
                              VIRTUAL MART
                            </div>
                            
                            {/* Webcam */}
                            <div className="webcam" style={{
                              position: 'absolute',
                              top: '15px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '8px',
                              height: '8px',
                              background: 'radial-gradient(circle, #333 0%, #111 70%, #000 100%)',
                              borderRadius: '50%',
                              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), 0 0 5px rgba(0,0,0,0.8)',
                              border: '1px solid rgba(255,255,255,0.1)'
                            }}></div>
                            
                            {/* Speaker Grilles */}
                            <div className="speaker-left" style={{
                              position: 'absolute',
                              top: '25px',
                              left: '50px',
                              width: '60px',
                              height: '4px',
                              background: 'linear-gradient(90deg, #333 0%, #222 50%, #333 100%)',
                              borderRadius: '2px',
                              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)'
                            }}></div>
                            
                            <div className="speaker-right" style={{
                              position: 'absolute',
                              top: '25px',
                              right: '50px',
                              width: '60px',
                              height: '4px',
                              background: 'linear-gradient(90deg, #333 0%, #222 50%, #333 100%)',
                              borderRadius: '2px',
                              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)'
                            }}></div>

                            {/* Desktop Application Interface */}
                            <div className="desktop-app-content" style={{
                              height: '100%',
                              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                              overflow: 'hidden',
                              position: 'relative',
                              boxShadow: 'inset 0 0 30px rgba(0,0,0,0.1)'
                            }}>
                              {/* Animated Screen Container */}
                              <div style={{
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                                overflow: 'hidden'
                              }}>
                                {/* Screen 1 - Dashboard */}
                                <div style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  transform: `translateX(${currentScreenIndex === 0 ? '0%' : currentScreenIndex > 0 ? '-100%' : '100%'})`,
                                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                  opacity: currentScreenIndex === 0 ? 1 : 0,
                                  overflow: 'hidden'
                                }}>
                                  {projects.desktop[currentAppIndex]?.mockupImages ? (
                                    <img 
                                      src={projects.desktop[currentAppIndex].mockupImages[0]} 
                                      alt={projects.desktop[currentAppIndex]?.title || "Desktop Application"}
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center center'
                                      }}
                                    />
                                  ) : (
                                    <div style={{
                                      width: '100%',
                                      height: '100%',
                                      background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      color: '#666',
                                      fontSize: '16px',
                                      fontWeight: 'bold'
                                    }}>
                                      📊 Dashboard Overview
                                    </div>
                                  )}
                                  
                                </div>

                                {/* Screen 2 - Settings */}
                                <div style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  transform: `translateX(${currentScreenIndex === 1 ? '0%' : currentScreenIndex > 1 ? '-100%' : '100%'})`,
                                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                  opacity: currentScreenIndex === 1 ? 1 : 0,
                                  overflow: 'hidden'
                                }}>
                                  {projects.desktop[currentAppIndex]?.mockupImages ? (
                                    <img 
                                      src={projects.desktop[currentAppIndex].mockupImages[1] || projects.desktop[currentAppIndex].mockupImages[0]} 
                                      alt={projects.desktop[currentAppIndex]?.title || "Desktop Application"}
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                      }}
                                    />
                                  ) : (
                                    <div style={{
                                      width: '100%',
                                      height: '100%',
                                      background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      color: '#666',
                                      fontSize: '16px',
                                      fontWeight: 'bold'
                                    }}>
                                      ⚙️ System Settings
                                    </div>
                                  )}
                                  
                                  {/* App Interface */}
                                  <div style={{
                                    height: '60%',
                                    background: 'white',
                                    padding: '15px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                  }}>
                                    {/* Menu Bar */}
                                    <div style={{
                                      display: 'flex',
                                      gap: '15px',
                                      padding: '8px 0',
                                      borderBottom: '1px solid #eee'
                                    }}>
                                      {['File', 'Edit', 'View', 'Tools', 'Help'].map((menu, index) => (
                                        <span key={index} style={{
                                          fontSize: '9px',
                                          color: '#666',
                                          cursor: 'pointer',
                                          padding: '2px 5px',
                                          borderRadius: '3px',
                                          transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.background = '#f0f0f0';
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.background = 'transparent';
                                        }}
                                        >
                                          {menu}
                                        </span>
                                      ))}
                  </div>
                                    
                                    {/* Toolbar */}
                                    <div style={{
                                      display: 'flex',
                                      gap: '8px',
                                      padding: '8px 0',
                                      borderBottom: '1px solid #eee'
                                    }}>
                                      {['New', 'Open', 'Save', 'Print'].map((tool, index) => (
                                        <button key={index} style={{
                                          fontSize: '8px',
                                          padding: '4px 8px',
                                          border: '1px solid #ddd',
                                          borderRadius: '3px',
                                          background: 'white',
                                          cursor: 'pointer',
                                          transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.background = '#f0f0f0';
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.background = 'white';
                                        }}
                                        >
                                          {tool}
                                        </button>
                                      ))}
                                    </div>
                                    
                                    {/* Main Content Area */}
                                    <div style={{
                                      flex: 1,
                                      padding: '0px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      overflow: 'hidden',
                                      position: 'relative'
                                    }}>
                                      {projects.desktop[currentAppIndex]?.mockupImages ? (
                                        <img 
                                          src={projects.desktop[currentAppIndex].mockupImages[1] || projects.desktop[currentAppIndex].mockupImages[0]} 
                                          alt={projects.desktop[currentAppIndex]?.title || "Desktop Application"}
                                          style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                          }}
                                        />
                                      ) : (
                                        <div style={{
                                          width: '100%',
                                          height: '100%',
                                          background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
                                          borderRadius: '5px',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          color: '#666',
                                          fontSize: '11px',
                                          fontWeight: 'bold'
                                        }}>
                                          ⚙️ System Settings
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  
                                  {/* App Status Bar */}
                                  <div style={{
                                    height: '20%',
                                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                                    padding: '10px 15px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderTop: '1px solid #ddd'
                                  }}>
                                    <div style={{ fontSize: '7px', color: '#666' }}>
                                      Settings Mode
                                    </div>
                                    <div style={{ fontSize: '7px', color: '#666' }}>
                                      Screen 2/3
                                    </div>
                                  </div>
                                </div>

                                {/* Screen 3 - Analytics */}
                                <div style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  transform: `translateX(${currentScreenIndex === 2 ? '0%' : currentScreenIndex < 2 ? '100%' : '-100%'})`,
                                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                  opacity: currentScreenIndex === 2 ? 1 : 0,
                                  background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                                  overflow: 'hidden'
                                }}>
                                  {projects.desktop[currentAppIndex]?.mockupImages ? (
                                    <img 
                                      src={projects.desktop[currentAppIndex].mockupImages[2] || projects.desktop[currentAppIndex].mockupImages[0]} 
                                      alt={projects.desktop[currentAppIndex]?.title || "Desktop Application"}
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                      }}
                                    />
                                  ) : (
                                    <div style={{
                                      width: '100%',
                                      height: '100%',
                                      background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      color: '#666',
                                      fontSize: '16px',
                                      fontWeight: 'bold'
                                    }}>
                                      📈 Analytics & Reports
                                    </div>
                                  )}
                                  {/* App Header */}
                                  <div style={{
                                    height: '20%',
                                    background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                                    padding: '15px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'white',
                                    position: 'relative'
                                  }}>
                                    <h1 style={{ fontSize: '16px', marginBottom: '5px', fontWeight: 'bold' }}>
                                      {projects.desktop[currentAppIndex]?.title || "Desktop Application"}
                                    </h1>
                                    <p style={{ fontSize: '8px', opacity: 0.9 }}>
                                      Analytics View
                                    </p>
                                  </div>
                                  
                                  {/* App Interface */}
                                  <div style={{
                                    height: '60%',
                                    background: 'white',
                                    padding: '15px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                  }}>
                                    {/* Menu Bar */}
                                    <div style={{
                                      display: 'flex',
                                      gap: '15px',
                                      padding: '8px 0',
                                      borderBottom: '1px solid #eee'
                                    }}>
                                      {['File', 'Edit', 'View', 'Tools', 'Help'].map((menu, index) => (
                                        <span key={index} style={{
                                          fontSize: '9px',
                                          color: '#666',
                                          cursor: 'pointer',
                                          padding: '2px 5px',
                                          borderRadius: '3px',
                                          transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.background = '#f0f0f0';
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.background = 'transparent';
                                        }}
                                        >
                                          {menu}
                                        </span>
                                      ))}
                                    </div>
                                    
                                    {/* Toolbar */}
                                    <div style={{
                                      display: 'flex',
                                      gap: '8px',
                                      padding: '8px 0',
                                      borderBottom: '1px solid #eee'
                                    }}>
                                      {['New', 'Open', 'Save', 'Print'].map((tool, index) => (
                                        <button key={index} style={{
                                          fontSize: '8px',
                                          padding: '4px 8px',
                                          border: '1px solid #ddd',
                                          borderRadius: '3px',
                                          background: 'white',
                                          cursor: 'pointer',
                                          transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.background = '#f0f0f0';
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.background = 'white';
                                        }}
                                        >
                                          {tool}
                                        </button>
                                      ))}
                                    </div>
                                    
                                    {/* Main Content Area */}
                                    <div style={{
                                      flex: 1,
                                      padding: '0px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      overflow: 'hidden',
                                      position: 'relative'
                                    }}>
                                      {projects.desktop[currentAppIndex]?.mockupImages ? (
                                        <img 
                                          src={projects.desktop[currentAppIndex].mockupImages[2] || projects.desktop[currentAppIndex].mockupImages[0]} 
                                          alt={projects.desktop[currentAppIndex]?.title || "Desktop Application"}
                                          style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                          }}
                                        />
                                      ) : (
                                        <div style={{
                                          width: '100%',
                                          height: '100%',
                                          background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)',
                                          borderRadius: '5px',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          color: '#666',
                                          fontSize: '11px',
                                          fontWeight: 'bold'
                                        }}>
                                          📈 Analytics & Reports
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  
                                  {/* App Status Bar */}
                                  <div style={{
                                    height: '20%',
                                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                                    padding: '10px 15px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderTop: '1px solid #ddd'
                                  }}>
                                    <div style={{ fontSize: '7px', color: '#666' }}>
                                      Analytics Running
                                    </div>
                                    <div style={{ fontSize: '7px', color: '#666' }}>
                                      Screen 3/3
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '25px',
                    marginTop: '20px',
                    marginBottom: '30px',
                    padding: '25px 0'
                  }}>
                    <button
                      onClick={() => setCurrentAppIndex((prev) => (prev - 1 + projects.desktop.length) % projects.desktop.length)}
                      style={{
                        background: 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '55px',
                        height: '55px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        boxShadow: '0 10px 25px rgba(220, 53, 69, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(220, 53, 69, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(220, 53, 69, 0.3)';
                      }}
                    >
                      ←
                    </button>
                    
                    <div className="d-flex gap-2 dots">
                      {projects.desktop.map((_, index) => (
                        <div
                          key={index}
                          onClick={() => setCurrentAppIndex(index)}
                          style={{
                            width: index === currentAppIndex ? '30px' : '10px',
                            height: '10px',
                            borderRadius: '5px',
                            background: index === currentAppIndex 
                              ? 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)' 
                              : 'rgba(220, 53, 69, 0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      ))}
                  </div>
                    
                    <button
                      onClick={() => setCurrentAppIndex((prev) => (prev + 1) % projects.desktop.length)}
                      style={{
                        background: 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '55px',
                        height: '55px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        boxShadow: '0 10px 25px rgba(220, 53, 69, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(220, 53, 69, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(220, 53, 69, 0.3)';
                      }}
                    >
                      →
                    </button>
                  </div>
                </div>
              )}
            </div>
            </Col>
        </Row>
      </Container>

      {/* Project Details Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="lg"
        centered
      >
            <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
          {selectedProject && (
            <div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                className="img-fluid rounded mb-4"
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
              <p className="mb-4">{selectedProject.description}</p>
              
              <div className="mb-4">
                <h6 className="fw-bold modal-tech-heading">Technologies Used:</h6>
                <div className="d-flex flex-wrap gap-2 modal-tech-badges">
                {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index} bg="primary" className="px-3 py-2">
                    {tech}
                  </Badge>
                ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h6 className="fw-bold">Key Features:</h6>
                <ul>
                {selectedProject.features.map((feature, index) => (
                    <li key={index} className="mb-1">{feature}</li>
                ))}
              </ul>
              </div>
              
              <div className="mb-4">
                <h6 className="fw-bold">Project Metrics:</h6>
                <div className="row">
                {Object.entries(selectedProject.metrics).map(([key, value], index) => (
                    <div key={index} className="col-md-4 text-center mb-3">
                      <div className="fw-bold text-primary fs-4">{value}</div>
                      <small className="text-muted text-capitalize">{key}</small>
                    </div>
                ))}
                </div>
              </div>
            </div>
          )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button 
                variant="primary"
            onClick={() => window.open(selectedProject?.links.live, '_blank')}
              >
                <FaExternalLinkAlt className="me-2" />
            View Live
          </Button>
          <Button 
            variant="outline-primary" 
            onClick={() => window.open(selectedProject?.links.github, '_blank')}
          >
            <FaGithub className="me-2" />
            View Code
              </Button>
            </Modal.Footer>
      </Modal>
      </section>
    </>
  );
};

export default Projects;
