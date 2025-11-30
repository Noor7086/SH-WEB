import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Quote = () => {
  return (
    <section 
      style={{
        background: '#ffffff',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(102, 126, 234, 0.05)',
        filter: 'blur(80px)',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-50%',
        left: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(118, 75, 162, 0.05)',
        filter: 'blur(80px)',
        zIndex: 0
      }}></div>

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row>
          <Col lg={10} className="mx-auto text-center" data-aos="fade-up">
            <FaQuoteLeft 
              style={{ 
                fontSize: '3rem', 
                color: 'rgba(102, 126, 234, 0.3)',
                marginBottom: '20px'
              }} 
            />
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #1a1a2e 0%, #667eea 50%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.4',
              marginBottom: '30px',
              fontStyle: 'italic'
            }}>
              "Innovation distinguishes between a leader and a follower. 
              We don't just build software, we craft digital experiences 
              that transform businesses and inspire change."
            </h2>
            <FaQuoteRight 
              style={{ 
                fontSize: '3rem', 
                color: 'rgba(102, 126, 234, 0.3)',
                marginTop: '20px',
                display: 'block',
                textAlign: 'right',
                marginRight: '20%'
              }} 
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Quote;

