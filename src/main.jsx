 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
 import App from './App.jsx'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Footer } from './components/Footer/Footer'
 
import { Intro } from './components/Intro/Intro'
import { Project } from './components/Project/Project'
import { Skill } from './components/Skills/Skill'
import { Social } from './components/SocialMedia/Social'  
  
import { RouterProvider } from 'react-router-dom'
import { AuraList } from './components/Project/AuraList.jsx'

const router= createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Intro/>}/>
      <Route path='about' element={<About />} />
      <Route path='experience' element={<Experience />} />
      <Route path='footer' element={<Footer />} />
       
    
      <Route path='project' element={<Project />} >
      <Route path='aura' element={<AuraList/>}/>
      </Route>
      <Route path='skill' element={<Skill />} />
      <Route path='social' element={<Social />} />
    </Route>
  ])
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
