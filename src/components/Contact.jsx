import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram,
  FaRocket,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope style={{ color: 'white' }} />,
      title: "Email Us",
      details: ["info@techhouse.com", "support@techhouse.com"],
      action: "mailto:info@techhouse.com"
    },
    {
      icon: <FaPhone style={{ color: 'white' }} />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "tel:+15551234567"
    },
    {
      icon: <FaMapMarkerAlt style={{ color: 'white' }} />,
      title: "Visit Us",
      details: ["123 Tech Street", "Silicon Valley, CA 94025"],
      action: "https://maps.google.com"
    },
    {
      icon: <FaClock style={{ color: 'white' }} />,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      action: null
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: "#", color: "text-primary" },
    { icon: <FaTwitter />, url: "#", color: "text-info" },
    { icon: <FaFacebook />, url: "#", color: "text-primary" },
    { icon: <FaInstagram />, url: "#", color: "text-danger" }
  ];

  return (
    <section id="contact" style={{
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
                Get In Touch
              </span>
            </div>
            
            <h2 className="display-4 fw-bold mb-4" style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #475569 50%, #667eea 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Ready to Start Your Project?
            </h2>
            
            <p className="fs-4 text-muted" style={{
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontWeight: '400'
            }}>
              Let's discuss your project requirements and how we can help you 
              achieve your business goals with our innovative solutions.
            </p>
          </Col>
        </Row>

        <Row className="g-5">
          {/* Contact Form */}
          <Col lg={8} data-aos="fade-right">
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
              borderRadius: '30px',
              padding: '50px 40px',
              border: '2px solid rgba(255,255,255,0.3)',
              backdropFilter: 'blur(25px)',
              boxShadow: '0 25px 80px rgba(0,0,0,0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background Pattern */}
              <div className="position-absolute" style={{
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
                borderRadius: '50%'
              }}></div>
              
              <div className="position-relative" style={{ zIndex: 2 }}>
                <h3 className="fw-bold mb-4" style={{
                  background: 'linear-gradient(135deg, #1e293b 0%, #667eea 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: '2rem'
                }}>
                  Send Us a Message
                </h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-4" style={{
                    padding: '15px 20px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    borderRadius: '15px',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <FaCheckCircle className="me-2" />
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </div>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Full Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                          style={{
                            padding: '15px 20px',
                            borderRadius: '15px',
                            border: '2px solid rgba(102, 126, 234, 0.2)',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            background: 'rgba(255,255,255,0.8)',
                            backdropFilter: 'blur(10px)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#667eea';
                            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email"
                          style={{
                            padding: '15px 20px',
                            borderRadius: '15px',
                            border: '2px solid rgba(102, 126, 234, 0.2)',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            background: 'rgba(255,255,255,0.8)',
                            backdropFilter: 'blur(10px)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#667eea';
                            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          style={{
                            padding: '15px 20px',
                            borderRadius: '15px',
                            border: '2px solid rgba(102, 126, 234, 0.2)',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            background: 'rgba(255,255,255,0.8)',
                            backdropFilter: 'blur(10px)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#667eea';
                            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Company Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                          style={{
                            padding: '15px 20px',
                            borderRadius: '15px',
                            border: '2px solid rgba(102, 126, 234, 0.2)',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            background: 'rgba(255,255,255,0.8)',
                            backdropFilter: 'blur(10px)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#667eea';
                            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Project Type *</Form.Label>
                        <Form.Select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          required
                          style={{
                            padding: '15px 20px',
                            borderRadius: '15px',
                            border: '2px solid rgba(102, 126, 234, 0.2)',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            background: 'rgba(255,255,255,0.8)',
                            backdropFilter: 'blur(10px)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#667eea';
                            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                            e.target.style.boxShadow = 'none';
                          }}
                        >
                          <option value="">Select project type</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile Application</option>
                          <option value="custom-software">Custom Software</option>
                          <option value="cloud-solutions">Cloud Solutions</option>
                          <option value="ai-ml">AI & Machine Learning</option>
                          <option value="consulting">IT Consulting</option>
                          <option value="other">Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Budget Range</Form.Label>
                        <Form.Select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          style={{
                            padding: '15px 20px',
                            borderRadius: '15px',
                            border: '2px solid rgba(102, 126, 234, 0.2)',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            background: 'rgba(255,255,255,0.8)',
                            backdropFilter: 'blur(10px)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#667eea';
                            e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                            e.target.style.boxShadow = 'none';
                          }}
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="over-100k">Over $100,000</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Project Details *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                      style={{
                        padding: '15px 20px',
                        borderRadius: '15px',
                        border: '2px solid rgba(102, 126, 234, 0.2)',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        background: 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(10px)',
                        resize: 'vertical'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#667eea';
                        e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </Form.Group>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="fw-bold px-5 py-3"
                    disabled={isSubmitting}
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      borderRadius: '25px',
                      boxShadow: '0 12px 35px rgba(102, 126, 234, 0.4)',
                      fontSize: '1.1rem',
                      letterSpacing: '0.5px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px) scale(1.05)';
                      e.target.style.boxShadow = '0 20px 45px rgba(102, 126, 234, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.4)';
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="ms-2" />
                      </>
                    )}
                  </Button>
                </Form>
              </div>
            </div>
          </Col>

          {/* Contact Information */}
          <Col lg={4} data-aos="fade-left">
            <div className="mb-5">
              <h3 className="fw-bold mb-4" style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #667eea 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '1.8rem'
              }}>
                Contact Information
              </h3>
              {contactInfo.map((info, index) => (
                <div key={index} className="mb-4" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  borderRadius: '20px',
                  padding: '25px 20px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: info.action ? 'pointer' : 'default'
                }}
                onMouseEnter={(e) => {
                  if (info.action) {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.12)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (info.action) {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08)';
                  }
                }}
                onClick={() => {
                  if (info.action) {
                    window.open(info.action, '_blank');
                  }
                }}>
                  <div className="d-flex align-items-center">
                    <div className="me-3" style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '15px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                    }}>
                      {React.cloneElement(info.icon, {
                        style: { color: 'white', fontSize: '1.2rem' }
                      })}
                    </div>
                    <div>
                      <h6 className="fw-bold mb-2" style={{ color: '#1e293b', fontSize: '1.1rem' }}>{info.title}</h6>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="mb-1 text-muted" style={{ fontSize: '0.95rem' }}>{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-5">
              <h5 className="fw-bold mb-4" style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #667eea 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '1.4rem'
              }}>
                Follow Us
              </h5>
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    className="text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '15px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-5px) scale(1.1)';
                      e.target.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                    }}
                  >
                    {React.cloneElement(social.icon, {
                      style: { fontSize: '1.2rem' }
                    })}
                  </a>
                ))}
              </div>
            </div>

          </Col>
        </Row>

        {/* Map Section */}
        <Row className="mt-5" data-aos="fade-up">
          <Col lg={12}>
            <div style={{
              background: 'transparent',
              borderRadius: '35px',
              padding: '40px 30px',
              border: 'none',
              backdropFilter: 'none',
              boxShadow: 'none',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background Pattern */}
              <div className="position-absolute" style={{
                top: '-60px',
                right: '-60px',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, rgba(102,126,234,0.08) 0%, transparent 70%)',
                borderRadius: '50%'
              }}></div>
              
              <div className="position-absolute" style={{
                bottom: '-40px',
                left: '-40px',
                width: '180px',
                height: '180px',
                background: 'transparent',
                borderRadius: '50%'
              }}></div>
              
              <div className="position-absolute" style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(102,126,234,0.03) 0%, transparent 70%)',
                borderRadius: '50%'
              }}></div>
              
              <div className="position-relative" style={{ zIndex: 2 }}>
                <div className="text-center mb-4">
                  <span className="badge px-4 py-3 fw-bold mb-3" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}>
                    <span style={{ color: 'white' }}>📍</span> Our Location
                  </span>
                  <h2 className="display-5 fw-bold mb-4">
                    Visit Our State-of-the-Art Office in 
                    <span style={{ 
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}> Silicon Valley</span>
                  </h2>
                  <p className="text-muted mb-0" style={{
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                  }}>
                    We're located in the heart of the tech industry.
                  </p>
                </div>
                
                <div className="ratio ratio-21x9" style={{
                  borderRadius: '25px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  border: 'none'
                }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639110441012!2d-122.08374688469225!3d37.42199997982525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1234567890"
                    title="Office Location"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{
                      border: 'none',
                      borderRadius: '22px',
                      filter: 'brightness(1.1) contrast(1.1)'
                    }}
                  ></iframe>
                </div>
                
                {/* Map Info Cards */}
                <div className="row mt-4 g-3">
                  <div className="col-md-4">
                    <div style={{
                      background: 'white',
                      borderRadius: '15px',
                      padding: '20px',
                      border: '1px solid rgba(0,0,0,0.1)',
                      textAlign: 'center'
                    }}>
                      <h6 className="fw-bold mb-2" style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: '1rem'
                      }}>
                        🚗 Parking Available
                      </h6>
                      <p className="mb-0 text-muted small">Free parking for visitors</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div style={{
                      background: 'white',
                      borderRadius: '15px',
                      padding: '20px',
                      border: '1px solid rgba(0,0,0,0.1)',
                      textAlign: 'center'
                    }}>
                      <h6 className="fw-bold mb-2" style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: '1rem'
                      }}>
                        🚇 Public Transport
                      </h6>
                      <p className="mb-0 text-muted small">Easy access via metro</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div style={{
                      background: 'white',
                      borderRadius: '15px',
                      padding: '20px',
                      border: '1px solid rgba(0,0,0,0.1)',
                      textAlign: 'center'
                    }}>
                      <h6 className="fw-bold mb-2" style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: '1rem'
                      }}>
                        ☕ Amenities
                      </h6>
                      <p className="mb-0 text-muted small">Café & meeting rooms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          #contact {
            min-height: auto !important;
            padding: 3rem 0 !important;
          }
          
          .contact-form-container {
            padding: 30px 20px !important;
            border-radius: 20px !important;
          }
          
          .contact-info-card {
            padding: 20px 15px !important;
            border-radius: 15px !important;
            margin: 15px 0 !important;
          }
          
          .social-link {
            width: 45px !important;
            height: 45px !important;
          }
          
          .quick-contact {
            padding: 25px 20px !important;
            border-radius: 20px !important;
          }
          
        }
        
        @media (max-width: 576px) {
          #contact {
            padding: 2rem 0 !important;
          }
          
          .contact-form-container {
            padding: 25px 15px !important;
            border-radius: 15px !important;
          }
          
          .contact-info-card {
            padding: 18px 12px !important;
            border-radius: 12px !important;
          }
          
          .social-link {
            width: 40px !important;
            height: 40px !important;
          }
          
          .quick-contact {
            padding: 20px 15px !important;
            border-radius: 15px !important;
          }
          
        }
      `}</style>
    </section>
  );
};

export default Contact;
