import React, { useState } from 'react';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP:', otp);
  };

  return (
    <div className="auth-page">
      <h1>Verify OTP</h1>
      <p>Enter the 6-digit OTP sent to your email</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter OTP"
          maxLength="6"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default VerifyOtp;
