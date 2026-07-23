import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo2 from '..//assets/logo2.jpeg'
import {FaUserCircle} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import '../sidebars/side.css'

const Resbld = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="bigcont">
            <div className="sidebar">
                        <div className="logo1">
                            <img src={logo2}></img>
                        </div>
                        <div className="rest1">
                            <ul>
                                <li><Link to='/sidebar'>Dashboard</Link></li>
                                <li><Link to='/sidebar/resume'>Resume Builder</Link></li>
                                <li><Link to='/sidebar/mockinter'>AI Mock</Link></li>
                                <li><Link to='/sidebar/ATScore'>ATS Score</Link></li>
                                <li><Link to='/sidebar/pracque'>Question Bank</Link></li>
                                <li><Link to='/sidebar/communication'>Communication</Link></li>
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
            <div className="maincont">
                <Outlet/>
            </div>
        </div>
        

    </div>
  )
}

export default Resbld
