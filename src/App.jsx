import React from 'react'
import './App.css'
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dash from './Component/Dash'
import UserDetails from './Component/UserDetails';


function App() {

  return (
    <Router>
      <div className="all-page">
        <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dash" element={<Dash />} />
              <Route path="/user" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
