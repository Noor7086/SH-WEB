import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, 
  FaPhone, 
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
    
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        project_type: formData.projectType || 'General Inquiry',
        budget: formData.budget || 'Not specified',
        message: formData.message,
        to_email: 'fahadshafiq77@gmail.com',
        subject: `New Contact Form Submission - ${formData.projectType || 'General Inquiry'}`
      };

      // Send email using EmailJS with SMTP
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Show success message
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
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope style={{ color: 'white' }} />,
      title: "Email Us",
      details: ["fahadshafiq77@gmail.com"],
      action: "mailto:fahadshafiq77@gmail.com"
    },
    {
      icon: <FaPhone style={{ color: 'white' }} />,
      title: "Call Us",
      details: ["03332736688"],
      action: "tel:+923332736688"
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
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '60px',
      paddingBottom: '60px'
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

      <Container style={{ position: 'relative', zIndex: 2, maxWidth: '1400px' }}>
        <Row className="text-center mb-4">
          <Col lg={10} md={11} sm={12} className="mx-auto" data-aos="fade-up">
            <div className="premium-badge" style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '10px',
              boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
              border: '2px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              marginBottom: '15px'
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
            
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.2'
            }}>
              Ready to Start Your Project?
            </h2>
            
            <p style={{
              fontSize: '1.25rem',
              color: '#6c757d',
              lineHeight: '1.6',
              maxWidth: '550px',
              margin: '0 auto',
              fontWeight: '400',
              padding: '0 15px'
            }}>
              Let's discuss your project requirements and how we can help you 
              achieve your business goals with our innovative solutions.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Contact Form */}
          <Col lg={8} md={12} data-aos="fade-right">
            <div className="contact-form-container" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
              borderRadius: '30px',
              padding: '35px 30px',
              border: '2px solid rgba(255,255,255,0.3)',
              backdropFilter: 'blur(25px)',
              boxShadow: '0 25px 80px rgba(0,0,0,0.1)',
              position: 'relative',
              overflow: 'hidden',
              maxWidth: '100%'
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
                <h3 className="fw-bold mb-3 text-center" style={{
                  background: 'linear-gradient(135deg, #1e293b 0%, #667eea 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: '2.2rem'
                }}>
                  Send Us a Message
                </h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-4" style={{
                    padding: '12px 18px',
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
                
                {submitStatus === 'error' && (
                  <div className="mb-4" style={{
                    padding: '12px 18px',
                    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                    borderRadius: '15px',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    There was an error. Please try again or email us directly at fahadshafiq77@gmail.com
                  </div>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Full Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                          style={{
                            padding: '12px 18px',
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
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email"
                          style={{
                            padding: '12px 18px',
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
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          style={{
                            padding: '12px 18px',
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
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Company Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                          style={{
                            padding: '12px 18px',
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
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Project Type *</Form.Label>
                        <Form.Select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          required
                          style={{
                            padding: '12px 18px',
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
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Budget Range</Form.Label>
                        <Form.Control
                          type="text"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          placeholder="Enter your budget"
                          style={{
                            padding: '12px 18px',
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

                  <Form.Group className="mb-3">
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
                        padding: '12px 18px',
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
                    className="fw-bold px-3 py-3 d-block mx-auto"
                    disabled={isSubmitting}
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      borderRadius: '25px',
                      boxShadow: '0 12px 35px rgba(102, 126, 234, 0.4)',
                      fontSize: '1.1rem',
                      letterSpacing: '0.5px',
                      transition: 'all 0.3s ease',
                      display: 'block',
                      margin: '0 auto'
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
          <Col lg={4} md={12} data-aos="fade-left">
            <div className="mb-4 contact-info-section" style={{ maxWidth: '100%' }}>
              <h3 className="fw-bold mb-3 text-center contact-info-heading" style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #667eea 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '1.8rem'
              }}>
                Contact Information
              </h3>
              {contactInfo.map((info, index) => (
                <div key={index} className="mb-3 contact-info-card" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  borderRadius: '20px',
                  padding: '20px 18px',
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
                  <div className="d-flex align-items-center contact-info-item">
                    <div className="me-3 contact-info-icon" style={{
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
                    <div className="contact-info-content">
                      <h6 className="fw-bold mb-2 contact-info-title" style={{ color: '#1e293b', fontSize: '1.1rem' }}>{info.title}</h6>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="mb-1 text-muted contact-info-detail" style={{ fontSize: '0.95rem' }}>{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-4 follow-us-section">
              <h5 className="fw-bold mb-3 text-center follow-us-heading" style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #667eea 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '1.4rem'
              }}>
                Follow Us
              </h5>
              <div className="d-flex gap-3 justify-content-start social-links-container">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    className="text-decoration-none social-link-item"
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
                      className: 'social-icon',
                      style: { fontSize: '1.2rem' }
                    })}
                  </a>
                ))}
              </div>
            </div>

          </Col>
        </Row>
      </Container>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        /* Container Width Reduction */
        @media (min-width: 1200px) {
          .container {
            max-width: 1400px !important;
          }
        }
        
        @media (min-width: 992px) and (max-width: 1199px) {
          .container {
            max-width: 1200px !important;
          }
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 992px) {
          .container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
        
        @media (max-width: 768px) {
          #contact {
            min-height: auto !important;
            padding: 1.5rem 0 !important;
          }
          
          .container {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          
          /* Center Follow Us Social Links on Mobile */
          .social-links-container {
            justify-content: center !important;
            gap: 12px !important;
          }
          
          /* Follow Us Mobile Styles */
          .follow-us-heading {
            font-size: 1.2rem !important;
            margin-bottom: 1rem !important;
          }
          
          .social-link-item {
            width: 45px !important;
            height: 45px !important;
            border-radius: 12px !important;
          }
          
          .social-link-item .social-icon {
            font-size: 1.1rem !important;
          }
          
          /* Contact Information Mobile Styles */
          .contact-info-heading {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
          }
          
          .contact-info-card {
            padding: 14px 12px !important;
            border-radius: 18px !important;
            margin-bottom: 10px !important;
          }
          
          .contact-info-icon {
            width: 45px !important;
            height: 45px !important;
            min-width: 45px !important;
            border-radius: 12px !important;
          }
          
          .contact-info-icon svg {
            font-size: 1.1rem !important;
          }
          
          .contact-info-title {
            font-size: 1rem !important;
            margin-bottom: 8px !important;
          }
          
          .contact-info-detail {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
          }
          
          .contact-form-container {
            padding: 20px 15px !important;
            border-radius: 20px !important;
            max-width: 100% !important;
            margin: 0 auto !important;
          }
          
          .contact-form-container input,
          .contact-form-container select,
          .contact-form-container textarea {
            padding: 10px 12px !important;
            border-radius: 12px !important;
            font-size: 0.95rem !important;
          }
          
          .map-section-container {
            padding: 12px !important;
          }
          
          .contact-form-container button[type="submit"] {
            padding: 10px 14px !important;
            font-size: 0.95rem !important;
            border-radius: 18px !important;
            width: 100% !important;
            max-width: 320px !important;
          }
          
          /* Mobile Heading Sizes */
          h2 {
            font-size: 1.8rem !important;
            padding: 0 10px !important;
          }
          
          h3 {
            font-size: 1.3rem !important;
          }
          
          .lead {
            font-size: 1rem !important;
          }
          
          p {
            padding: 0 10px !important;
          }
          
          /* Our Location Badge Mobile */
          .location-badge {
            padding: 4px 8px !important;
          }
          
          .location-badge .location-icon {
            font-size: 0.8rem !important;
            margin-right: 6px !important;
          }
          
          .location-badge .location-text {
            font-size: 0.7rem !important;
          }
          
          /* Our Location Heading Mobile */
          .location-heading {
            font-size: 1.5rem !important;
            line-height: 1.2 !important;
          }
          
          h2.location-heading {
            font-size: 1.5rem !important;
            line-height: 1.2 !important;
          }
          
          /* Override inline style for mobile */
          h2.location-heading[style] {
            font-size: 1.5rem !important;
            line-height: 1.2 !important;
          }
          
          /* Mobile Badge Styles */
          .premium-badge {
            padding: 6px 12px !important;
            font-size: 0.7rem !important;
            margin-bottom: 12px !important;
          }
          
          /* Mobile fw-bold mb-4 Elements */
          .fw-bold.mb-4 {
            margin-bottom: 24px !important;
          }
        }
        
        @media (max-width: 576px) {
          /* Small Mobile Spacing Reduction */
          #contact {
            padding: 1.5rem 0 !important;
          }
          
          .container {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          
          .contact-form-container {
            padding: 18px 12px !important;
            border-radius: 18px !important;
            max-width: 100% !important;
          }
          
          .map-section-container {
            padding: 10px !important;
          }
          
          .contact-form-container input,
          .contact-form-container select,
          .contact-form-container textarea {
            padding: 10px 12px !important;
            border-radius: 10px !important;
            font-size: 0.9rem !important;
          }
          
          .contact-form-container button[type="submit"] {
            padding: 9px 12px !important;
            font-size: 0.9rem !important;
            border-radius: 16px !important;
            width: 100% !important;
            max-width: 280px !important;
          }
          
          .mb-5 {
            margin-bottom: 1.5rem !important;
          }
          
          /* Small Mobile Heading Sizes */
          h2 {
            font-size: 1.5rem !important;
            padding: 0 5px !important;
          }
          
          h3 {
            font-size: 1.1rem !important;
          }
          
          .lead {
            font-size: 0.9rem !important;
          }
          
          p {
            padding: 0 5px !important;
          }
          
          /* Our Location Badge Small Mobile */
          .location-badge {
            padding: 4px 8px !important;
          }
          
          .location-badge .location-icon {
            font-size: 0.7rem !important;
            margin-right: 5px !important;
          }
          
          .location-badge .location-text {
            font-size: 0.65rem !important;
          }
          
          /* Our Location Heading Small Mobile */
          .location-heading {
            font-size: 1.3rem !important;
            line-height: 1.2 !important;
          }
          
          h2.location-heading {
            font-size: 1.3rem !important;
            line-height: 1.2 !important;
          }
          
          /* Override inline style for small mobile */
          h2.location-heading[style] {
            font-size: 1.3rem !important;
            line-height: 1.2 !important;
          }
          
          /* Small Mobile Badge Styles */
          .premium-badge {
            padding: 4px 8px !important;
            font-size: 0.6rem !important;
            margin-bottom: 10px !important;
          }
          
          /* Mobile fw-bold mb-4 Elements */
          .fw-bold.mb-4 {
            margin-bottom: 24px !important;
          }
          
          .contact-info-heading {
            font-size: 1.3rem !important;
            margin-bottom: 0.8rem !important;
          }
          
          .contact-info-card {
            padding: 16px 12px !important;
            border-radius: 15px !important;
            margin-bottom: 10px !important;
          }
          
          .contact-info-icon {
            width: 40px !important;
            height: 40px !important;
            min-width: 40px !important;
            border-radius: 10px !important;
            margin-right: 12px !important;
          }
          
          .contact-info-icon svg {
            font-size: 1rem !important;
          }
          
          .contact-info-title {
            font-size: 0.95rem !important;
            margin-bottom: 6px !important;
          }
          
          .contact-info-detail {
            font-size: 0.85rem !important;
            line-height: 1.4 !important;
          }
          
          /* Follow Us Small Mobile Styles */
          .follow-us-heading {
            font-size: 1.1rem !important;
            margin-bottom: 0.8rem !important;
          }
          
          .social-links-container {
            gap: 10px !important;
          }
          
          .social-link-item {
            width: 40px !important;
            height: 40px !important;
            border-radius: 10px !important;
          }
          
          .social-link-item .social-icon {
            font-size: 1rem !important;
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
        
        @media (max-width: 480px) {
          #contact {
            padding: 1.5rem 0 !important;
          }
          
          .container {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
          
          .contact-form-container {
            padding: 15px 10px !important;
            border-radius: 15px !important;
          }
          
          .map-section-container {
            padding: 8px !important;
          }
          
          .contact-info-heading {
            font-size: 1.2rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .contact-info-card {
            padding: 14px 10px !important;
            border-radius: 12px !important;
            margin-bottom: 8px !important;
          }
          
          .contact-info-icon {
            width: 35px !important;
            height: 35px !important;
            min-width: 35px !important;
            border-radius: 8px !important;
            margin-right: 10px !important;
          }
          
          .contact-info-icon svg {
            font-size: 0.9rem !important;
          }
          
          .contact-info-title {
            font-size: 0.9rem !important;
            margin-bottom: 5px !important;
          }
          
          .contact-info-detail {
            font-size: 0.8rem !important;
            line-height: 1.3 !important;
          }
          
          /* Follow Us Very Small Mobile Styles */
          .follow-us-heading {
            font-size: 1rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .social-links-container {
            gap: 8px !important;
          }
          
          .social-link-item {
            width: 35px !important;
            height: 35px !important;
            border-radius: 8px !important;
          }
          
          .social-link-item .social-icon {
            font-size: 0.9rem !important;
          }
          
          .social-link {
            width: 40px !important;
            height: 40px !important;
          }
          
          .quick-contact {
            padding: 20px 15px !important;
            border-radius: 15px !important;
          }
          
          /* Our Location Badge Very Small Mobile */
          .location-badge {
            padding: 3px 6px !important;
          }
          
          .location-badge .location-icon {
            font-size: 0.65rem !important;
            margin-right: 4px !important;
          }
          
          .location-badge .location-text {
            font-size: 0.6rem !important;
          }
          
          /* Our Location Heading Very Small Mobile */
          .location-heading {
            font-size: 1.2rem !important;
            line-height: 1.2 !important;
          }
          
          h2.location-heading {
            font-size: 1.2rem !important;
            line-height: 1.2 !important;
          }
          
          /* Override inline style for very small mobile */
          h2.location-heading[style] {
            font-size: 1.2rem !important;
            line-height: 1.2 !important;
          }
          
          h2 {
            font-size: 1.3rem !important;
            padding: 0 !important;
          }
          
          p {
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
