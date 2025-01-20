import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import {Route,Routes,Navigate, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Topnav from './components/Topnav.jsx'
import Footer from './components/footer.jsx'
import StudentLogin from './components/StudentLogin.jsx'
import StudentSignup from './components/StudentSignup.jsx'
import StudentDashboard from './components/StudentDashboard.jsx'
import InstituteLogin from './components/InstituteLogin.jsx'
import InstituteSignup from './components/InstituteSignup.jsx'
import InstituteDashboard from './components/InstituteDashboard.jsx'
import StudentDetails from './components/StudentDetails.jsx'
import InstituteRegistration1 from './components/InstituteRegistration1.jsx'
import InstituteRegistration2 from './components/InstituteRegistration2.jsx'


function App() {

  return (
    <>
    <Topnav />
    <Navbar />
      <Routes>
          <Route path="/" element={<Navigate to ="/home" />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/faq" element={<Faq />} />
          <Route path="/announcements" elements={<Announce />} />
          <Route path="/helpdesk" elements={<Helpdesk />} /> */}
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/student-signup" element={<StudentSignup />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student-details" element={<StudentDetails />} />
          <Route path="/institute-login" element={<InstituteLogin />} />
          <Route path="/institute-signup" element={<InstituteSignup />} />  
          <Route path="/institute-dashboard" element={<InstituteDashboard />} />
          <Route path="/institute-register1" element={<InstituteRegistration1 />} />
          <Route path="/institute-register2" element={<InstituteRegistration2 />} />
        </Routes>
    <Footer />
    </>
  )
}

export default App
