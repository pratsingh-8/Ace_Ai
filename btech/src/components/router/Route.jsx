import React from 'react'
import {BrowserRouter, createBrowserRouter} from 'react-router-dom'
import Login from '../login/Login'
import App from '../../App'
import Regi from '../reg/Regi'
import Dashboard from '../dashboard/Dashboard'
import Resbld from '../sidebars/Resbld'
import Res from '../resume/Res'
import Protect from '../Protect'
import Ats from '../ATS/Ats'
import Comm from '../profile/Comm'
import Result from '../ATS/Result'
import Assess from '../Assesment/Assess'
import Cse from '../Assesment/Cse'
import Test from '../Assesment/Test'
import NewResult from '../Assesment/NewResult'
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
                },{
                    path:'atschecker',
                    element:<Ats/>
                },{
                    path:'pro',
                    element:<Comm/>
                },{
                    path:'assess',
                    element:<Assess/>
                }
            ]
        },{
            path:'/result',element:<Result/>
        },{
            path:'/cse/test',
            element:<Cse/>
        },{
            path:'/sidebar/assess',
            element:<Assess/>
        },{
            path:'/test',
            element:<Test/>
        },{
            path: "/Testresult",
            element: <NewResult />
        }
    ]
)
