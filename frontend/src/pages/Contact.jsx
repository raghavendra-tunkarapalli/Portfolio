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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
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

      // Successful submission -> Navigate to success page
      navigate('/success', { state: { name: formData.name } });
    } catch (err) {
      console.error('Contact submission failed:', err);
      setErrorMsg(
        err.message || 'Failed to submit message. Please ensure the backend server is running.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
              backgroundColor: '#f8d7da',
              color: '#721c24',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              marginBottom: '1rem',
              border: '1px solid #f5c6cb',
              fontSize: '0.95rem',
              textAlign: 'center',
            }}
          >
            ⚠️ {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
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
