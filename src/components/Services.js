import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <p className="section-tag">Look At Our Services</p>
          <h2 className="section-title">
            Explore Our <span className="highlight">Services</span>
          </h2>
          <p className="section-description">
            With DODEAL, Your Goals Are Our Mission. From Ground Breaking Marketing Campaigns To Seamless Tech Integrations
          </p>
        </div>

        <div className="services-content">
          <div className="services-diagram">
            <div className="central-service">
              <div className="service-card main-service">
                <div className="service-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 21l4-7 4 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Digital Marketing</h3>
              </div>
            </div>

            <div className="surrounding-services">
              <div className="service-item top-right">
                <div className="service-icon-small">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>Paid Campaigns</span>
              </div>

              <div className="service-item middle-right">
                <div className="service-icon-small">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="currentColor" strokeWidth="2"/>
                    <line x1="7" y1="7" x2="7.01" y2="7" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span>Branding Services</span>
              </div>

              <div className="service-item bottom-right">
                <div className="service-icon-small">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 11h4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 16h4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 11h.01" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 16h.01" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span>Social Media</span>
              </div>

              <div className="service-item bottom-left">
                <div className="service-icon-small">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4" stroke="currentColor" strokeWidth="2"/>
                    <rect x="9" y="3" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 17h.01" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span>Creative Projects</span>
              </div>
            </div>
          </div>

          <div className="detailed-service">
            <div className="service-card detailed">
              <h3 className="service-title">Social Media Marketing</h3>
              <p className="service-description">
                Amplify Your Brand's Online Impact Transform Your Social Media Presence Into A Powerful Marketing Asset With Our Expert Solutions
              </p>
              <a href="#learn-more" className="btn-secondary">
                See More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{marginLeft: '8px'}}>
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
