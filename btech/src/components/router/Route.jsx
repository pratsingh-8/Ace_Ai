import React from 'react'
import {BrowserRouter, createBrowserRouter} from 'react-router-dom'
import Login from '../login/Login'
import App from '../../App'
import Regi from '../reg/Regi'
import Dashboard from '../dashboard/Dashboard'
export const Route = createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>
        }
        ,{
            path:'/login',element:<Login/>
        }
        ,{
            path:'/register',element:<Regi/>
        },{
            path:'/dashboard',element:<Dashboard/>
        }
    ]
)
