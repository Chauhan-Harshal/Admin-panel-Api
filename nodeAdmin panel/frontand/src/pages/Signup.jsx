import React, { useState } from 'react'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

export default function SignUp({ onNavigate }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setLoading(true)
    try {
      const res = await axios.post(`${API_BASE}/auth/signup`, { name, email, password })
      setSuccess(res.data.message || 'Signup successful. Please verify OTP sent to your email.')
      setLoading(false)
      setTimeout(() => onNavigate?.('verify-otp'), 1000)
    } catch (err) {
      setLoading(false)
      setError(err?.response?.data?.message || err.message || 'Signup failed')
    }
  }

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        </div>
        <button className="btn-primary" type="submit" disabled={loading}>{loading ? 'Signing...' : 'Sign Up'}</button>
        <button type="button" className="btn-secondary" onClick={() => onNavigate?.('signin')}>Back to Sign In</button>
      </form>
    </div>
  )
}
