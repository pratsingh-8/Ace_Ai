import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./result.css";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state?.data;

  if (!data) {
    return (
      <div className="ace-result-page">
        <div className="empty-result">
          <div className="empty-icon">✦</div>
          <h2>No Analysis Found</h2>
          <p>Analyze your resume to see your AI-powered results.</p>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    );
  }

  const score = Number(data.score) || 0;

  const getScoreText = () => {
    if (score >= 85) return "Excellent";
    if (score >= 70) return "Good";
    if (score >= 50) return "Needs Work";
    return "Needs Improvement";
  };

  const circumference = 2 * Math.PI * 82;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="ace-result-page">

      {/* Background decoration */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>
      <div className="grid-background"></div>

      <div className="result-wrapper">

        {/* =========================================
            TOP BAR
        ========================================= */}
        <header className="result-topbar">

          <div className="brand-area">
            <div className="brand-symbol">
              <span>✦</span>
            </div>

            <div>
              <h3>Ace<span>AI</span></h3>
              <p>Resume Intelligence</p>
            </div>
          </div>

          <button
            className="new-analysis"
            onClick={() => navigate(-1)}
          >
            <span>＋</span>
            New Analysis
          </button>

        </header>


        {/* =========================================
            PAGE INTRO
        ========================================= */}
        <section className="page-intro">

          <div>
            <div className="eyebrow">
              <span className="pulse-dot"></span>
              AI ANALYSIS COMPLETE
            </div>

            <h1>
              Your Resume
              <span> Intelligence Report</span>
            </h1>

            <p>
              Here's how your resume performs against modern
              recruitment and ATS requirements.
            </p>
          </div>

          <div className="analysis-status">
            <div className="status-dot"></div>
            Analysis Ready
          </div>

        </section>


        {/* =========================================
            SCORE HERO
        ========================================= */}
        <section className="score-hero">

          <div className="score-main">

            {/* Circular score */}
            <div className="score-ring">

              <svg
                className="score-svg"
                width="210"
                height="210"
                viewBox="0 0 210 210"
              >

                <circle
                  className="ring-background"
                  cx="105"
                  cy="105"
                  r="82"
                />

                <circle
                  className="ring-progress"
                  cx="105"
                  cy="105"
                  r="82"
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: offset,
                  }}
                />

              </svg>

              <div className="score-center">

                <span className="score-number">
                  {score}
                </span>

                <span className="score-out-of">
                  /100
                </span>

                <span className="score-label">
                  RESUME SCORE
                </span>

              </div>

            </div>


            {/* Score information */}
            <div className="score-information">

              <div className="score-heading">
                <span className="score-chip">
                  AI EVALUATION
                </span>

                <h2>
                  {getScoreText()}
                  <span className="gradient-dot">.</span>
                </h2>

                <p>
                  Your resume has a solid foundation, but there
                  are several areas where targeted improvements
                  could increase its effectiveness.
                </p>
              </div>


              <div className="score-metrics">

                <div className="metric">
                  <span className="metric-value">
                    {data.strengths?.length || 0}
                  </span>
                  <span className="metric-name">
                    Strengths
                  </span>
                </div>

                <div className="metric-divider"></div>

                <div className="metric">
                  <span className="metric-value purple">
                    {data.weaknesses?.length || 0}
                  </span>
                  <span className="metric-name">
                    Weaknesses
                  </span>
                </div>

                <div className="metric-divider"></div>

                <div className="metric">
                  <span className="metric-value blue">
                    {data.missing_keywords?.length || 0}
                  </span>
                  <span className="metric-name">
                    Keywords Missing
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            AI SUMMARY
        ========================================= */}
        <section className="summary-section">

          <div className="section-heading">

            <div className="section-icon cyan">
              ✦
            </div>

            <div>
              <span>AI INSIGHT</span>
              <h2>What Ace AI found</h2>
            </div>

          </div>


          <div className="summary-content">

            <div className="quote-mark">“</div>

            <p>{data.summary}</p>

            <div className="ai-badge">
              <span>✦</span>
              Generated by Ace AI
            </div>

          </div>

        </section>


        {/* =========================================
            STRENGTH / WEAKNESS
        ========================================= */}
        <section className="two-column">

          {/* Strengths */}
          <div className="insight-card strengths">

            <div className="card-top">

              <div className="card-title">

                <div className="card-icon strength">
                  ✓
                </div>

                <div>
                  <span>WHAT YOU DO WELL</span>
                  <h2>Strengths</h2>
                </div>

              </div>

              <span className="card-count">
                {data.strengths?.length || 0}
              </span>

            </div>


            <div className="insight-list">

              {data.strengths?.map((item, index) => (

                <div
                  className="insight-row"
                  key={index}
                >

                  <div className="row-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p>{item}</p>

                  <span className="row-arrow">↗</span>

                </div>

              ))}

            </div>

          </div>


          {/* Weaknesses */}
          <div className="insight-card weaknesses">

            <div className="card-top">

              <div className="card-title">

                <div className="card-icon weakness">
                  !
                </div>

                <div>
                  <span>AREAS TO IMPROVE</span>
                  <h2>Weaknesses</h2>
                </div>

              </div>

              <span className="card-count purple-count">
                {data.weaknesses?.length || 0}
              </span>

            </div>


            <div className="insight-list">

              {data.weaknesses?.map((item, index) => (

                <div
                  className="insight-row"
                  key={index}
                >

                  <div className="row-number purple-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p>{item}</p>

                  <span className="row-arrow purple-arrow">
                    ↗
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =========================================
            MISSING KEYWORDS
        ========================================= */}
        <section className="keywords-section">

          <div className="keywords-header">

            <div className="section-heading">

              <div className="section-icon purple">
                #
              </div>

              <div>
                <span>ATS OPTIMIZATION</span>
                <h2>Missing Keywords</h2>
              </div>

            </div>

            <div className="keyword-counter">
              <strong>
                {data.missing_keywords?.length || 0}
              </strong>
              <span>detected</span>
            </div>

          </div>


          <p className="keyword-description">
            These keywords were identified as relevant to your
            profile but are currently missing or underrepresented
            in your resume.
          </p>


          <div className="keyword-cloud">

            {data.missing_keywords?.map(
              (keyword, index) => (

                <div
                  className="keyword-item"
                  key={index}
                >
                  <span className="keyword-hash">#</span>
                  {keyword}
                </div>

              )
            )}

          </div>

        </section>


        {/* =========================================
            SUGGESTIONS
        ========================================= */}
        <section className="recommendation-section">

          <div className="recommendation-header">

            <div className="section-heading">

              <div className="section-icon blue">
                ✦
              </div>

              <div>
                <span>YOUR NEXT STEPS</span>
                <h2>AI Recommendations</h2>
              </div>

            </div>

            <div className="recommendation-label">
              {data.suggestions?.length || 0} ACTIONS
            </div>

          </div>


          <div className="recommendation-grid">

            {data.suggestions?.map(
              (item, index) => (

                <div
                  className="recommendation-card"
                  key={index}
                >

                  <div className="recommendation-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="recommendation-text">
                    <p>{item}</p>
                  </div>

                  <div className="recommendation-arrow">
                    →
                  </div>

                </div>

              )
            )}

          </div>

        </section>


        {/* =========================================
            BOTTOM CTA
        ========================================= */}
        <section className="bottom-cta">

          <div className="cta-glow"></div>

          <div className="cta-content">

            <div className="cta-icon">
              ✦
            </div>

            <div>
              <span>READY TO IMPROVE?</span>

              <h2>
                Turn these insights into
                <strong> opportunities.</strong>
              </h2>

              <p>
                Update your resume based on the AI analysis
                and run another scan to track your progress.
              </p>
            </div>

          </div>

          <button
            onClick={() => navigate(-1)}
            className="cta-button"
          >
            Analyze Again
            <span>→</span>
          </button>

        </section>


        {/* Footer */}
        <footer className="result-footer">
          <span>ACE<span>AI</span></span>
          <p>AI-powered career intelligence</p>
        </footer>

      </div>

    </div>
  );
};

export default Result;