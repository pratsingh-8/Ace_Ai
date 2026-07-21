import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{RouterProvider} from 'react-router-dom'
import {Route} from '../src/components/router/Route.jsx'
createRoot(document.getElementById('root')).render(
   <RouterProvider router={Route}/>
)
