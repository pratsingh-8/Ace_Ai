import React from 'react'
import './App.css'
import Login from './components/login/Login'
import { Link } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <header className='navbar'>
        <nav>
          <ul className='logo'><a href='/'>ACE<span>AI</span></a></ul>
          <ul className='right'>
            <li><a href='#feature'>feature</a></li>
            <li><a href='#work'>How It work</a></li>
            <li><Link to='/login'>login</Link></li>
          </ul>
        </nav>
      </header>
      
      <div className="hero">
        <section>
          <p>ACE EVERY<br/>interview<br/>with confidence</p>
          <p>AceAI gives you a real interview environment, AI resume refinement, speech analysis, and deep performance analytics — all in one place.    </p>
          <button>START FREE TRIAL</button>
        </section>
      </div>
      <div id="feature">
        <p>What We Offer</p>
        <p>Everything You Need
to Land the Job</p>
        <p>Five powerful modules designed to prepare you for any interview at any company — from fresher to senior roles.</p>
        <div className="f1">
          <div className="car">
            5card
          </div>
        </div>
      </div>  
      <div id="work">
          <p>From Zero to
Interview-Ready</p>
          <p>A simple 4-step journey to transform you into a confident, interview-ready professional.</p>
          <div className="work-card">
            5card
          </div>
      </div>
      <div id="freetrial">
        <section>
          <h2>READY TO ACE<br/>YOUR NEXT INTERVIEW ?</h2>
          <p>Join thousands of students already preparing smarter with AceAI.</p>
          <button>start feature</button>
        </section>
      </div>
      <div className="footer">
        <footer>
          <ul>
            <li><a href=''>ACE<span>AI</span></a></li>
            <li>© 2026 AceAI. Built with ❤️ for students.</li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

export default App
