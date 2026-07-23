import React from 'react'
import { replace, useNavigate } from 'react-router-dom';
const Protect = ({child}) =>{
    const navigate = useNavigate()
    const token = localStorage.getItem('Token');
    if(!token){
        return navigate('/login',replace=true)
    }
    return child;
}

export default Protect
