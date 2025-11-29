 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
 import App from './App.jsx'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Footer } from './components/Footer/Footer'
import { Intro } from './components/Intro/Intro'
import { Social } from './components/SocialMedia/Social'    
import { RouterProvider } from 'react-router-dom'
import ProjectLanding from './components/Project/ProjectLanding.jsx'
import DomainProjects from './components/Project/DomainProjects.jsx'
import { LandingSkill } from './components/Skills/LandingSkill.jsx'
import { SkillPage } from './components/Skills/SkillPage.jsx'
import { Certificate } from './components/Certificate/Certificate.jsx'

const router= createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Intro/>}/>
      <Route path='about' element={<About />} />
      <Route path='experience' element={<Experience />} />
      <Route path='footer' element={<Footer />} />
      <Route path ="/landingproject" element={<ProjectLanding/>}/>
      <Route path="/projects/:domain" element={<DomainProjects/>} />
      <Route path='/certificate' element={<Certificate/>} />
      <Route path='/skill' element={<LandingSkill/>} />
      <Route path="/skill/:domain" element={<SkillPage/>} />
      <Route path='social' element={<Social />} />
    </Route>
  ])
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
