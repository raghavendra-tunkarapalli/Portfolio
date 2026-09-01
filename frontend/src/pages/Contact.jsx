import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    const apiBase = import.meta.env.VITE_API_BASE_URL;

    try {
      if (apiBase) {
        // Option A: Custom Spring Boot Backend REST API
        const response = await fetch(`${apiBase}/api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json().catch(() => null);

        if (!response.ok) {
          const errorDetail = result?.message || `Server responded with status ${response.status}`;
          throw new Error(errorDetail);
        }
      } else {
        // Option B: Netlify Serverless Form Processing
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            ...formData,
          }),
        });

        if (!response.ok) {
          throw new Error(`Netlify form submission status ${response.status}`);
        }
      }

      // Successful submission -> Navigate to success page
      navigate('/success', { state: { name: formData.name } });
    } catch (err) {
      console.error('Contact submission failed:', err);
      setErrorMsg(
        'Unable to process form directly. Please use the direct email button below to send your message to theraghuvaran@gmail.com!'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:theraghuvaran@gmail.com?subject=${encodeURIComponent(
    `Portfolio Contact from ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="about-section">
      <div className="form-container">
        <h2>Get In Touch</h2>

        <div className="contact-direct-card">
          <span className="contact-direct-icon">✉️</span>
          <div className="contact-direct-info">
            <span className="contact-direct-label">Direct Email Address</span>
            <a href="mailto:theraghuvaran@gmail.com" className="contact-direct-email">
              theraghuvaran@gmail.com
            </a>
          </div>
        </div>

        {errorMsg && (
          <div
            style={{
              backgroundColor: '#fef2f2',
              color: '#991b1b',
              padding: '1rem',
              borderRadius: '0.75rem',
              marginBottom: '1.25rem',
              border: '1.5px solid #fecaca',
              fontSize: '0.92rem',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: '0 0 0.6rem 0' }}>⚠️ {errorMsg}</p>
            <a
              href={mailtoHref}
              style={{
                display: 'inline-block',
                background: '#dc2626',
                color: '#fff',
                padding: '0.4rem 0.9rem',
                borderRadius: '0.4rem',
                fontWeight: '700',
                fontSize: '0.85rem',
                textDecoration: 'none',
              }}
            >
              Send via Email App ↗
            </a>
          </div>
        )}

        {/* Netlify Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Required hidden inputs for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
}
