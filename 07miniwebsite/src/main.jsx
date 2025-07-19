import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/home.jsx'
import About from './components/about/About'
import Contactus from './components/Contact/ContactUs.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/Userr/User.jsx'

const router = createBrowserRouter([
  {path: '/',
  element : <Layout/>,
  children :[ {
    path:"",
    element : <Home/>

  },
  
    {
    path : "about",
    element : <About/>
  },
  {
    path:"contactus",
    element : <Contactus/>

   },
   {
    path:'User/:userid',
    element : <User/>

   },
 {
    path:"github",
    element : <Github/>

   },
   
]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
