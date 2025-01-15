import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes,Navigate, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Topnav from './components/Topnav.jsx'
import Footer from './components/footer.jsx'

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
        </Routes>
    <Footer />
    </>
  )
}

export default App
