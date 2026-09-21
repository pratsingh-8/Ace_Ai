import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './NewRes.css'

const NewResult = () => {

  const { state } = useLocation();
  const navigate = useNavigate();

  const { newans, depa } = state;

  return (
    <div className="result-page">

      <div className="result-card">

        <h1>Assessment Result</h1>

        <p className="department">
          {depa}
        </p>

        {/* SCORE */}

        <div className="score-section">

          <div className="score-circle">
            <span>{newans.percentage}%</span>
          </div>

          <h2>
            {newans.obtainedMarks} / {newans.totalMarks}
          </h2>

          <p>Marks Obtained</p>

        </div> 

        {/* STATISTICS */}

        <div className="stats">

          <div className="stat">
            <h3>{newans.totalQuestions}</h3>
            <p>Total Questions</p>
          </div>

          <div className="stat">
            <h3>{newans.attemptedQuestions}</h3>
            <p>Attempted</p>
          </div>

          <div className="stat">
            <h3>{newans.correctAnswers}</h3>
            <p>Correct</p>
          </div>

          <div className="stat">
            <h3>{newans.incorrectAnswers}</h3>
            <p>Incorrect</p>
          </div>

          <div className="stat">
            <h3>{newans.unansweredQuestions}</h3>
            <p>Unanswered</p>
          </div>

        </div> 

        {/* FEEDBACK */}

        <div className="feedback">

          <h2>AI Feedback</h2>

          <h3>Strengths</h3>

          <ul>
            {newans.feedback.strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Areas To Improve</h3>

          <ul>
            {newans.feedback.areasToImprove.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Recommendations</h3>

          <ul>
            {newans.feedback.recommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div> 

        <button
          className="back-btn"
          onClick={() => navigate('/sidebar/assess')}
        >
          Take Another Test
        </button>

      </div>

    </div>
  );
};

export default NewResult;