// Global configuration and constants
export const GLOBALS = {
  // API Configuration
  API: {
    BASE_URL: 'http://localhost:5000/api',
    TIMEOUT: 30000,
  },

  // Auth Configuration
  AUTH: {
    TOKEN_KEY: 'token',
    USER_KEY: 'user',
    TOKEN_EXPIRY: 86400000, // 1 day in milliseconds
  },

  // API Endpoints
  ENDPOINTS: {
    // Auth
    AUTH_SIGNUP: '/auth/signup',
    AUTH_LOGIN: '/auth/login',
    AUTH_VERIFY_OTP: '/auth/verify-otp',
    AUTH_RESEND_OTP: '/auth/resend-otp',
    AUTH_ME: '/auth/me',

    // Admin/Employees
    EMPLOYEES_LIST: '/employees',
    EMPLOYEES_CREATE: '/employees',
    EMPLOYEES_UPDATE: '/employees/:id',
    EMPLOYEES_DELETE: '/employees/:id',
    EMPLOYEES_GET: '/employees/:id',
  },
};

export default GLOBALS;


