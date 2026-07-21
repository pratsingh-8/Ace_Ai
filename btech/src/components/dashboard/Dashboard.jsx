import React from 'react'
import logo2 from '../dashboard/logo2.jpeg'
import '../dashboard/dash.css'
import { Link, useNavigate} from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
const Dashboard = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="sidebar">
            <div className="logo1">
                <img src={logo2}></img>
            </div>
            <div className="rest1">
                <ul>
                    <li><Link to='/dashboard/resume'>Resume Builder</Link></li>
                    <li><Link to='/dashboard/mockinter'>AI Mock</Link></li>
                    <li><Link to='/dashboard/ATScore'>Resume Score</Link></li>
                    <li><Link to='/dashboard/pracque'>Smart Question</Link></li>
                    <li><Link to='/dashboard/communication'>speaking</Link></li>
                </ul>
            </div>
            <div className="logout">
                <FaUserCircle size={34} color="#2563eb" />
                <button onClick={()=>{
                    localStorage.removeItem('Token');
                    navigate('/login',{replace:true});
                }}>log out</button>
            </div>
        </div>
        <div className="maincont"></div>
    </div>
  )
}

export default Dashboard
