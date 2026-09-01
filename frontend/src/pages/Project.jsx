import React from 'react';
import { Link } from 'react-router-dom';

export default function Project() {
  const projects = [
    {
      title: 'Portfolio Website',
      category: 'Introductory Full-Stack Project',
      description:
        'A personal portfolio project introducing myself and showcasing my work, built using simple and foundational concepts of React.js and Spring Boot. Includes client-side component routing, responsive layout styling, and basic REST endpoints for contact management backed by a MySQL database.',
      tags: ['React.js', 'Spring Boot', 'Java', 'MySQL', 'Vite', 'CSS3'],
      github: 'https://github.com/raghavendra-tunkarapalli/Portfolio',
      liveLink: '/',
    },
    {
      title: 'ImpactSense — Earthquake Impact Prediction',
      category: 'Machine Learning & AI',
      description:
        'An intelligent predictive system forecasting earthquake impact severity, damage scale, and risk zones for disaster response. Utilizes geophysical parameters, seismic wave features, ensemble ML algorithms (Random Forest, XGBoost), and SHAP explainability.',
      tags: ['Python', 'Machine Learning', 'XGBoost', 'Random Forest', 'SHAP', 'Scikit-Learn'],
      github: 'https://github.com/raghavendra-tunkarapalli/earth-quake-prediction',
    },
    {
      title: 'PG-Hunter',
      category: 'Microservices Enterprise Web App',
      description:
        'An innovative accommodation discovery platform architected on top of a scalable microservices architecture reflecting modern industry standards. Solves critical relocation and migration hurdles by enabling students and working professionals to explore, filter, and secure verified PG accommodations matching their exact budget, locality, and amenity preferences through robust RESTful APIs, decoupled service modules, and an interactive React user interface.',
      tags: [
        'Microservices',
        'Netflix Eureka Server',
        'Spring Boot',
        'React.js',
        'RESTful APIs',
        'Java',
        'MySQL',
        'API Gateway',
      ],
      github: 'https://github.com/raghavendra-tunkarapalli/PG-Hunter',
    },
    {
      title: 'Student Feedback & Course Evaluation System',
      category: 'Final-Year Capstone Project',
      description:
        'A digital academic evaluation platform engineered as my final-year project to replace manual paper processes with an automated system. Enables students to submit structured feedback on teaching quality, course content, and learning experience, while providing institutional administrators with centralized database analytics, department reports, and actionable insights to evaluate educational effectiveness.',
      tags: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Database Design', 'JavaScript'],
      github: 'https://github.com/raghavendra-tunkarapalli/PG-Hunter',
    },
    {
      title: 'School Management System',
      category: 'Enterprise Academic ERP',
      description:
        'A comprehensive, end-to-end academic ERP application engineered to satisfy institutional school administration requirements. Features interactive drag-and-drop class and teacher timetable scheduling, a multi-portal architecture with Role-Based Access Control (RBAC for Admins, Teachers, and Students), student admission lifecycle tracking, attendance logging, teacher allocation, and automated fee management backed by secure MySQL relational persistence.',
      tags: [
        'Java',
        'Spring Boot',
        'MySQL',
        'RBAC Security',
        'Drag-and-Drop Scheduling',
        'Multi-Portal System',
        'JPA / Hibernate',
      ],
      github: 'https://github.com/raghavendra-tunkarapalli/School-management-System',
    },
  ];

  return (
    <section className="project-section">
      <div className="project-container">
        <h1 className="project-heading">Featured Projects</h1>
        <p className="project-subtitle">
          A showcase of full-stack web applications, machine learning systems, and enterprise solutions I have engineered.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-header">
                <span className="project-category-badge">{project.category}</span>
              </div>

              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-action-row">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project btn-github"
                >
                  <svg
                    className="btn-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub Repo
                </a>

                {project.liveLink && (
                  <Link to={project.liveLink} className="btn-project btn-live">
                    Live Demo ↗
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
