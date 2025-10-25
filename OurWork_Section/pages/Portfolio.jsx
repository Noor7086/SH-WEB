import './Portfolio.css'
import useSEO from '../hooks/useSEO'
import OurWork from '../components/OurWork'
import '../components/OurWork.css'

const Portfolio = () => {
  // SEO
  useSEO(
    'Portfolio - Web Developers Inc | Our Best Work & Projects',
    'Explore our portfolio showcasing stunning websites, creative logos, branding projects, motion graphics, and mobile applications. See why 150+ clients trust Web Developers Inc.',
    'web development portfolio, website examples, logo design portfolio, branding projects, mobile app portfolio, motion graphics, web design showcase, client work'
  )
  return (
    <div id="portfolio-page">

      {/* Our Work Section */}
      <OurWork isHomePage={false} />

      {/* Stats Section */}
      <section id="portfolio-stats">
        <div id="portfolio-stats-container">
          <h2 id="portfolio-stats-title">Our Achievements</h2>
          <div id="portfolio-stats-grid">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="portfolio-testimonials">
        <div id="portfolio-testimonials-container">
          <h2 id="portfolio-testimonials-title">What Our Clients Say</h2>
          <div id="portfolio-testimonials-grid">
            <div className="testimonial-item">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Web Developers Inc transformed our online presence completely. 
                  Their attention to detail and professionalism is outstanding."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">👤</div>
                  <div className="author-info">
                    <div className="author-name">John Doe</div>
                    <div className="author-title">CEO, TechCorp</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Amazing team! They delivered our project on time and exceeded 
                  our expectations. Highly recommended!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">👤</div>
                  <div className="author-info">
                    <div className="author-name">Sarah Smith</div>
                    <div className="author-title">Founder, FreshFood</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Professional, creative, and reliable. Web Developers Inc 
                  is our go-to partner for all digital projects."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">👤</div>
                  <div className="author-info">
                    <div className="author-name">Mike Johnson</div>
                    <div className="author-title">Manager, BusinessPro</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
