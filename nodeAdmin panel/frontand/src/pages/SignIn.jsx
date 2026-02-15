import React from 'react'

export default function SignIn({ onNavigate, onLoginSuccess }) {
  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <p>Placeholder sign-in form.</p>
      <div style={{display:'flex',gap:8}}>
        <button className="btn-primary" onClick={() => onLoginSuccess?.()}>Mock Sign In</button>
        <button className="btn-secondary" onClick={() => onNavigate?.('signup')}>Go to Sign Up</button>
      </div>
    </div>
  )
}
