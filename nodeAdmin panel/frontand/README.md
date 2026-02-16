# Admin Panel - Frontend

A modern React-based admin panel for employee management with authentication system.

## Features

- User authentication (Sign up, Sign in, OTP verification)
- Employee management (Add, Edit, Delete, View)
- Password reset functionality
- User profile management
- Responsive design
- Real-time API integration

## Tech Stack

- **React 18.2.0** - UI library
- **Vite 5.0.0** - Build tool and dev server
- **React Router 6.18.0** - Client-side routing
- **Axios 1.6.0** - HTTP client
- **CSS3** - Styling with gradients and animations

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend server running on `http://localhost:5000`

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Start development server (runs on http://localhost:3000)
npm run dev
```

The app will be available at `http://localhost:3000`

## Build

```bash
# Build for production
npm run build
```

## Project Structure

```
frontand/
├── src/
│   ├── pages/
│   │   ├── Home.jsx              # Dashboard page
│   │   ├── SignIn.jsx            # Login page
│   │   ├── SignUp.jsx            # Registration page
│   │   ├── VerifyOtp.jsx         # OTP verification page
│   │   ├── ForgetPassword.jsx    # Forgot password page
│   │   ├── VerifyForgetPassword.jsx
│   │   ├── ChangePassword.jsx    # Change password page
│   │   ├── Profile.jsx           # User profile page
│   │   ├── AddEmploye.jsx        # Add employee page
│   │   ├── EditEmployee.jsx      # Edit employee page
│   │   └── Dashboard.jsx         # Main dashboard
│   ├── utils/
│   │   ├── globals.js            # Global constants and config
│   │   ├── auth.js               # Authentication utilities
│   │   └── errorHandler.js       # Error handling utilities
│   ├── assets/
│   │   └── react.svg             # React logo
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App styles
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
└── README.md                     # This file
```

## API Configuration

The frontend communicates with the backend API at:
- **Base URL**: `http://localhost:5000/api`
- **Timeout**: 30 seconds

### Authentication Endpoints

- `POST /auth/signup` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/verify-otp` - Verify OTP
- `POST /auth/resend-otp` - Resend OTP
- `GET /auth/me` - Get current user info

### Employee Endpoints

- `GET /employees` - Get all employees
- `POST /employees` - Add new employee
- `GET /employees/:id` - Get employee by ID
- `PUT /employees/:id` - Update employee
- `DELETE /employees/:id` - Delete employee

## Authentication Flow

1. **Sign Up** - Create new account with email and password
2. **Email Verification** - Enter OTP sent to email
3. **Sign In** - Login with email and password
4. **Dashboard** - Access authenticated pages

## Features Details

### Authentication
- Email-based registration and login
- 6-digit OTP verification via email
- JWT token-based sessions
- Password reset functionality
- Secure token storage in localStorage

### Employee Management
- View all employees in a table
- Add new employee with details
- Edit employee information
- Delete employee records
- Search and filter employees

### User Profile
- View user information
- Edit profile details
- Change password
- Logout functionality

## Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_BASE_URL=http://localhost:5000/api
```

## Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Support

For issues or questions, please contact the development team.
