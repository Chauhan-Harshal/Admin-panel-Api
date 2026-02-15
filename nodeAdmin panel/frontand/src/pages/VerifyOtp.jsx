import React from 'react'

export default function VerifyOtp({ onNavigate }) {
  return (
    <div className="form-container">
      <h2>Verify OTP</h2>
      <p>Enter the 6-digit OTP sent to your email.</p>
      <div style={{display:'flex',gap:8}}>
        <button className="btn-primary" onClick={() => onNavigate?.('signin')}>Mock Verify</button>
      </div>
    </div>
  )
}
