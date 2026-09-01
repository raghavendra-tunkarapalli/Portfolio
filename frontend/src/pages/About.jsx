import React, { useState } from 'react';

export default function About() {
  const [activeSkill, setActiveSkill] = useState(null);

  const hardSkills = [
    {
      name: 'Java',
      percent: '70%',
      concepts: [
        'OOP Principles',
        'Collections Framework',
        'Multithreading & Concurrency',
        'Exception Handling',
        'Streams API & Lambdas',
        'Generics & Annotations',
        'JVM Architecture',
      ],
    },
    {
      name: 'Spring Boot',
      percent: '60%',
      concepts: [
        'Spring MVC',
        'RESTful APIs',
        'Spring Data JPA',
        'Hibernate ORM',
        'Dependency Injection (IoC)',
        'Bean Lifecycle',
        'Profiles & Configuration',
        'MySQL Integration',
      ],
    },
    {
      name: 'Python',
      percent: '60%',
      concepts: [
        'Core Syntax & Data Types',
        'OOP (Classes & Methods)',
        'File Handling',
        'List Comprehensions',
        'Lambdas & Decorators',
        'Modules & Packages',
        'NumPy & Pandas Basics',
      ],
    },
    {
      name: 'DSA',
      percent: '70%',
      concepts: [
        'Arrays & Strings',
        'Linked Lists',
        'Stacks & Queues',
        'Binary Trees & BST',
        'Graphs (BFS / DFS)',
        'Sorting & Searching',
        'Recursion & Backtracking',
        'Big-O Complexity',
      ],
    },
    {
      name: 'SQL',
      percent: '70%',
      concepts: [
        'Joins (Inner/Left/Right)',
        'Subqueries & CTEs',
        'Normalization (1NF-3NF)',
        'Indexing & Optimization',
        'CRUD Operations',
        'ACID Transactions',
        'GROUP BY & Aggregations',
      ],
    },
    {
      name: 'JavaScript',
      percent: '60%',
      concepts: [
        'ES6+ Features',
        'DOM Manipulation',
        'Promises & Async/Await',
        'Closures & Scope',
        'Array Methods (map, filter, reduce)',
        'Fetch API & JSON',
        'Event Loop',
      ],
    },
    {
      name: 'HTML',
      percent: '70%',
      concepts: [
        'Semantic HTML5 Tags',
        'Forms & Input Validation',
        'DOM Hierarchy',
        'SEO & Meta Tags',
        'Media Elements',
        'Accessibility (ARIA)',
      ],
    },
    {
      name: 'CSS',
      percent: '70%',
      concepts: [
        'Flexbox Layout',
        'CSS Grid',
        'Responsive Design',
        'Keyframe Animations',
        'Glassmorphism & Gradients',
        'Box Model',
        'CSS Variables',
      ],
    },
  ];

  const softSkills = [
    { name: 'Communication', percent: '70%' },
    { name: 'Teamwork', percent: '70%' },
    { name: 'Problem Solving', percent: '75%' },
    { name: 'Creativity', percent: '80%' },
    { name: 'Adaptability', percent: '70%' },
    { name: 'Time Management', percent: '70%' },
  ];

  return (
    <>
      {/* 1. About / Profile & Skills Section */}
      <section id="about-section" className="about-section">
        <div className="about-container">
          <h2 className="about-title">Who am I</h2>
          <div className="about-intro-card">
            <p>
              I am a Computer Science Engineering graduate with a strong foundation in programming,
              Data Structures & Algorithms (DSA), and modern full-stack web development. I have practical experience
              building scalable web applications with Java, Spring Boot, Python, SQL, JavaScript, React.js, HTML, and CSS, and continuously enhance my technical skills through hands-on projects.
            </p>
          </div>

          {/* Skills Grid (Hard & Soft Skills) */}
          <div className="skills-section">
            {/* Hard Skills (Left - Interactive with concepts) */}
            <div className="hard-skill-container">
              <div className="skill-header">
                <span className="skill-icon">⚡</span>
                <div>
                  <h3>Hard Skills</h3>
                  <span className="skill-subtitle">Hover or click any skill to expand covered concepts</span>
                </div>
              </div>
              <div className="skills-list">
                {hardSkills.map((skill) => {
                  const isExpanded = activeSkill === skill.name;
                  return (
                    <div
                      key={skill.name}
                      className={`skill-item ${isExpanded ? 'is-active' : ''}`}
                      onMouseEnter={() => setActiveSkill(skill.name)}
                      onMouseLeave={() => setActiveSkill(null)}
                      onClick={() => setActiveSkill(isExpanded ? null : skill.name)}
                    >
                      <div className="skill-label-row">
                        <span className="hard-skill-name">
                          {skill.name}
                          <span className={`expand-chevron ${isExpanded ? 'open' : ''}`}>▾</span>
                        </span>
                        <span className="skill-badge hard-badge">{skill.percent}</span>
                      </div>

                      <div className="hard-skill-bar">
                        <div className="hard-skill-fill" style={{ width: skill.percent }} />
                      </div>

                      {/* Smooth Inline Concept Tag Cloud */}
                      <div className={`concept-drawer ${isExpanded ? 'drawer-open' : ''}`}>
                        <div className="concept-tags-grid">
                          {skill.concepts.map((concept, idx) => (
                            <span key={idx} className="concept-chip hard-chip">
                              ✓ {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Soft Skills (Right - Clean static layout) */}
            <div className="soft-skill-container">
              <div className="skill-header">
                <span className="skill-icon">✨</span>
                <div>
                  <h3>Soft Skills</h3>
                  <span className="skill-subtitle">Professional & interpersonal proficiencies</span>
                </div>
              </div>
              <div className="skills-list">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="soft-skill-item">
                    <div className="skill-label-row">
                      <span className="soft-skill-name">{skill.name}</span>
                      <span className="skill-badge soft-badge">{skill.percent}</span>
                    </div>

                    <div className="soft-skill-bar">
                      <div className="soft-skill-fill" style={{ width: skill.percent }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Standalone Experience Section */}
      <section id="experience-section" className="experience-standalone-section">
        <h2 className="experience-main-heading">Experience</h2>

        <div className="experience-container">
          <div className="experience-left">
            <img
              src="/images/earthquake-prediction.jpg"
              alt="ImpactSense - Earthquake Impact Prediction"
              className="experience-img"
            />
          </div>

          <div className="experience-right">
            <div className="experience-badge-row">
              <span className="experience-tag">Machine Learning Internship</span>
              <span className="experience-duration">🗓️ Nov 4, 2025 – Jan 10, 2026</span>
            </div>

            <h2>
              INFOSYS SPRINGBOARD<br />
              <span>INTERNSHIP 6.0 (B6-7)</span>
            </h2>

            <h3 className="experience-role-title">
              ImpactSense — Earthquake Impact Prediction
            </h3>

            <p>
              Engineered an end-to-end Machine Learning predictive system designed to estimate earthquake damage severity,
              magnitude, and risk zones for urban disaster response and infrastructure planning. Preprocessed geospatial and
              geophysical parameters (latitude, longitude, depth, seismic wave characteristics), engineered location-risk features,
              and trained classification & regression models with explainability analysis.
            </p>

            {/* Algorithms & Core Skills Used in the Project */}
            <div className="experience-tech-stack">
              <span className="tech-pill highlight-pill">Random Forest</span>
              <span className="tech-pill highlight-pill">XGBoost</span>
              <span className="tech-pill highlight-pill">Gradient Boosting</span>
              <span className="tech-pill highlight-pill">Decision Trees</span>
              <span className="tech-pill highlight-pill">Logistic Regression</span>
              <span className="tech-pill">SHAP Explainability</span>
              <span className="tech-pill">Geospatial Clustering</span>
              <span className="tech-pill">Feature Engineering</span>
              <span className="tech-pill">Confusion Matrix & F1-Score</span>
              <span className="tech-pill">MAE / MSE & R² Evaluation</span>
              <span className="tech-pill">Python & Scikit-Learn</span>
              <span className="tech-pill">Streamlit / FastAPI</span>
            </div>

            <div className="experience-actions">
              <a
                href="https://drive.google.com/file/d/1lKRTWmg5M2pTjHmeycjtbVhuTFsy_B1D/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-verify"
              >
                VIEW CERTIFICATE 📄
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
