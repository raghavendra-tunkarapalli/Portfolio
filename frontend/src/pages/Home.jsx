import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="main-section">
        <div className="hero-container">
          <div className="main-text">
            <h2>Hello,</h2>
            <h1>I AM RAGHU</h1>
            <p className="hero-tagline-1">An Engineering Graduate</p>
            <p className="hero-tagline-2">Software Developer</p>

            <div className="social-links-main">
              <a
                href="https://github.com/raghavendra-tunkarapalli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-btn github-btn"
                title="GitHub Profile"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/raghavendra-tunkarapalli/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-btn linkedin-btn"
                title="LinkedIn Profile"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6h2.79v-7.6H6.46M7.86 6.32a1.62 1.62 0 1 0 1.62 1.62c0-.9-.73-1.62-1.62-1.62z" />
                </svg>
              </a>

              <a
                href="mailto:theraghuvaran@gmail.com"
                className="hero-email-link"
                title="Send Email to theraghuvaran@gmail.com"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="email-svg-icon"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>theraghuvaran@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Hero image wrapper with blob effect */}
          <div className="hero-image-wrapper">
            <img src="/images/index-main-image.png" alt="Hero Image" className="hero-image" />
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="index-first-section">
        <div className="index-first-container">
          <div className="index-left">
            <img src="/images/index-image1.png" alt="About Illustration" />
          </div>

          <div className="index-right">
            <h2>
              LET’S<br />
              <span>
                INTRODUCE ABOUT<br />
                MYSELF
              </span>
            </h2>
            <p>
              Computer Science Engineering graduate with a strong foundation in programming, Data Structures & Algorithms (DSA), and software development principles. Proficient in Java, Spring Boot, Python, SQL, JavaScript, React.js, HTML, and CSS, with hands-on experience in designing and developing scalable web applications.{' '}
              <Link to="/about">...about</Link>
            </p>
            <a href="/RaghavendraTunkarapalli.pdf" download className="btn-download">
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="home-education-section">
        <div className="education-container">
          <div className="education-header">
            <h2 className="education-main-title">Education</h2>
          </div>

          <div className="education-card">
            <div className="education-card-top">
              <div className="education-icon-box">🎓</div>
              <div className="education-heading-group">
                <div className="education-badge-wrap">
                  <span className="education-badge-distinction">
                    🎖️ First Class With Distinction
                  </span>
                  <span className="education-badge-cgpa">
                    ⭐ CGPA: 7.8 / 10.0
                  </span>
                </div>
                <h3 className="education-degree">
                  Bachelor of Technology (B.Tech) — Computer Science and Engineering
                </h3>
                <h4 className="education-institution">
                  G. Pullaiah College of Engineering and Technology (Autonomous), Kurnool
                </h4>
                <p className="education-affiliation">
                  Affiliated to Jawaharlal Nehru Technological University Anantapur (JNTUA)
                </p>
              </div>

              <div className="education-date-box">
                <span className="education-period">April 2026</span>
                <span className="education-status">Graduated</span>
              </div>
            </div>

            <div className="education-details-row">
              <div className="education-detail-item">
                <span className="detail-label">CGPA / Grade</span>
                <span className="detail-value cgpa-highlight">7.8 / 10.0 (Distinction)</span>
              </div>
              <div className="education-detail-item">
                <span className="detail-label">Institution Accreditation</span>
                <span className="detail-value">NAAC &apos;A&apos; Grade | NBA Accredited</span>
              </div>
              <div className="education-detail-item">
                <span className="detail-label">Medium of Instruction</span>
                <span className="detail-value">English</span>
              </div>
              <div className="education-detail-item">
                <span className="detail-label">Core Focus Areas</span>
                <span className="detail-value">Software Engineering, DSA, Java, Web & Database Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
