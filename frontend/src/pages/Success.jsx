import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Success() {
  const location = useLocation();
  const name = location.state?.name || 'Friend';

  return (
    <section className="about-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="form-container" style={{ textAlign: 'center', padding: '2rem' }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#01760d' }}>
          ✅ Thank you, <span>{name}</span>! Your message has been saved.
        </h2>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#555' }}>
          I appreciate you reaching out and will get back to you as soon as possible.
        </p>
        <Link to="/contact" className="btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
          Back to Contact
        </Link>
      </div>
    </section>
  );
}
