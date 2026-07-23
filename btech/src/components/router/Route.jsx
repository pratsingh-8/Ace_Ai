import React from 'react'
import {BrowserRouter, createBrowserRouter} from 'react-router-dom'
import Login from '../login/Login'
import App from '../../App'
import Regi from '../reg/Regi'
import Dashboard from '../dashboard/Dashboard'
import Resbld from '../sidebars/Resbld'
import Res from '../resume/Res'
import Protect from '../Protect'
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
            path:'/sidebar',element:(
                <Protect child={<Resbld/>}/>),
            children:[
                {
                    index:true,
                    element:<Dashboard/>
                },{
                    path:'resume',
                    element:<Res/>
                }
            ]
        },
    ]
)
