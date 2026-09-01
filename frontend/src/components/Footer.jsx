import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <footer className="footer">
        <p className="mb-0">
          Copyright {currentYear} &copy;{' '}
          <Link to="/">Tunkarapalli Raghu</Link>. All Rights Reserved.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/raghavendra-tunkarapalli"
            className="link"
            aria-label="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GH
          </a>
          <a
            href="https://www.linkedin.com/in/raghavendra-tunkarapalli/"
            className="link"
            aria-label="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            IN
          </a>
          <a
            href="mailto:theraghuvaran@gmail.com"
            className="link"
            aria-label="email"
            title="theraghuvaran@gmail.com"
          >
            ✉️
          </a>
        </div>
      </footer>
    </div>
  );
}
