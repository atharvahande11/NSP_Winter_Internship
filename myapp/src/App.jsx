import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes,Navigate, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Home />
      <div className="container">
      <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/faq" element={<Faq />} />
          <Route path="/announcements" elements={<Announce />} />
          <Route path="/helpdesk" elements={<Helpdesk />} /> */}
        </Routes>
      </div>
        
    </>
  )
}

export default App
