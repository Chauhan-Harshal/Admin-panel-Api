import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/Signup'
import VerifyOtp from './pages/VerifyOtp'
import Dashboard from './pages/Dashboard'

function App() {
  const [currentPage, setCurrentPage] = useState('signin')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true)
      setCurrentPage('dashboard')
    }
  }, [])

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    setCurrentPage('signin')
  }

  return (
    <div className="app">
      {!isLoggedIn && currentPage === 'signin' && (
        <SignIn onNavigate={handleNavigate} onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
      {!isLoggedIn && currentPage === 'signup' && (
        <SignUp onNavigate={handleNavigate} />
      )}
      {!isLoggedIn && currentPage === 'verify-otp' && (
        <VerifyOtp onNavigate={handleNavigate} />
      )}
      {!isLoggedIn && currentPage === 'home' && (
        <Home />
      )}
      {isLoggedIn && (
        <Dashboard onLogout={handleLogout} />
      )}
    </div>
  )
}

export default App
