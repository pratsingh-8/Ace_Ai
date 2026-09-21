import React from "react";
import { Link } from "react-router-dom";
import '../Assesment/ass.css';

const Assess = () => {
  return (
    <div className="asses">

      {/* Background glow */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* Header */}
      <div className="asses-header">
        <span className="brand-dot"></span>
        <span>ACE AI</span>
        <span className="header-line"></span>
        <span className="header-text">AI TEST SERIES</span>
      </div>

      {/* Hero Section */}
      <div className="hero-section">

        <div className="hero-badge">
          ✦ AI POWERED ASSESSMENT
        </div>

        <h1>
          AceAi <span>Test Series</span>
        </h1>

        <p className="hero-description">
          Prepare smarter. Practice harder. Perform better.
        </p>

        <p className="hero-subtitle">
          Designed by engineers, specially for B.Tech students.
        </p>

        <div className="hero-line">
          <span></span>
          <b>PREPARE</b>
          <i>•</i>
          <b>PRACTICE</b>
          <i>•</i>
          <b>PERFORM</b>
          <span></span>
        </div>
      </div>

      {/* Selection */}
      <section className="preparation-section">

        <div className="section-heading">
          <span>01</span>
          <div>
            <h2>What are you preparing for?</h2>
            <p>
              Choose your engineering domain and start your AI-powered practice.
            </p>
          </div>
        </div>

        <div className="feature">

          <Link to='/cse/test' className="branch-card" state={{department:"Computer Science and Engineering",field:['Database','Computer Network','Operating System','Oops','dsa']}}>
            <div className="card-number">01</div>
            <div className="card-icon">⌘</div>
            <div className="card-content">
              <h3>Computer Science</h3>
              <p>DSA · DBMS · OS · CN · OOP</p>
            </div>
            <div className="arrow">↗</div>
          </Link>

          <Link to="/cse/test" className="branch-card" state={{department:"Electronics and Communication Engineering",field:['Digital','Analog','Communication']}}>
            <div className="card-number">02</div>
            <div className="card-icon">⌁</div>
            <div className="card-content">
              <h3>Electronics & Communication</h3>
              <p>Digital · Analog · Communication · Signals</p>
            </div>
            <div className="arrow">↗</div>
          </Link>

          <Link to="/cse/test" className="branch-card" state={{department:"Electrical",field:['Machine','Power','Control','Networks']}}>
            <div className="card-number">03</div>
            <div className="card-icon">ϟ</div>
            <div className="card-content">
              <h3>Electrical</h3>
              <p>Machines · Power · Control · Networks</p>
            </div>
            <div className="arrow">↗</div>
          </Link>

          <Link to="/cse/test" className="branch-card" state={{department:"Civil Engineering",field:['Structure','GeoTech','RCC','Transportation']}}>
            <div className="card-number">04</div>
            <div className="card-icon">⌂</div>
            <div className="card-content">
              <h3>Civil Engineering</h3>
              <p>Structures · Geotech · RCC · Transportation</p>
            </div>
            <div className="arrow">↗</div>
          </Link>

          <Link to="cse/based" className="branch-card resume-card" state={{department:"Resume Generated Questions"}}>
            <div className="card-number">05</div>
            <div className="card-icon">✦</div>
            <div className="card-content">
              <h3>Resume Based</h3>
              <p>AI-generated questions from your resume</p>
            </div>
            <div className="arrow">↗</div>
          </Link>
        </div>
      </section>

      {/* Bottom */}
      <div className="asses-footer">
        <span>ACE AI</span>
        <p>Your Personal AI Mentor for Interviews</p>
      </div>

    </div>
  );
};

export default Assess;