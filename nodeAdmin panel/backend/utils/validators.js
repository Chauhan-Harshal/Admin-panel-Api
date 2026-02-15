// Email validation
const validateEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

// Password validation
const validatePassword = (password) => {
  return password && password.length >= 6;
};

// Name validation
const validateName = (name) => {
  return name && name.trim().length >= 2;
};

// Validate signup data
const validateSignupData = (data) => {
  const errors = {};

  if (!data.name || !validateName(data.name)) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please provide a valid email';
  }

  if (!data.password || !validatePassword(data.password)) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Validate OTP
const validateOTP = (otp) => {
  return otp && otp.length === 6 && /^\d+$/.test(otp);
};

module.exports = {
  validateEmail,
  validatePassword,
  validateName,
  validateSignupData,
  validateOTP,
};
