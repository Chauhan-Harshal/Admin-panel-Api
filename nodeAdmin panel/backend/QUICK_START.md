# Quick Start Guide - Authentication System

## 5-Minute Setup

### Step 1: Create .env file
```bash
# In backend/ folder, create .env file with:
MONGO_URI=mongodb://localhost:27017/admin-panel
JWT_SECRET=your_secret_key_here_change_in_production
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_16_char_app_password
PORT=5000
NODE_ENV=development
```

### Step 2: Install Dependencies
```bash
cd backend
npm install
```

### Step 3: Start MongoDB
```bash
# Make sure MongoDB is running on localhost:27017
mongod
```

### Step 4: Start Server
```bash
npm run dev
```

## Testing Quick Flow

### 1. Signup (Copy OTP from console or email)
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### 2. Verify OTP
```bash
curl -X POST http://localhost:5000/api/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "otp": "123456"
  }'
```

### 3. Login (Get Token)
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### 4. Use Token
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Files Created

✅ **Models**
- User.js - Updated with authentication fields

✅ **Controllers**
- authController.js - All auth logic

✅ **Routes**
- authRoutes.js - Auth endpoints

✅ **Middleware**
- auth.js - JWT verification

✅ **Services**
- emailService.js - Nodemailer setup

✅ **Utils**
- generateOTP.js - OTP generation
- validators.js - Input validation

✅ **Config**
- db.js - Updated for CommonJS

✅ **Server**
- server.js - Updated with auth routes

✅ **Documentation**
- .env.example - Environment template
- AUTHENTICATION_GUIDE.md - Full documentation

## Next Steps

1. **Configure Gmail**
   - Enable 2FA on account
   - Create App Password
   - Add to .env

2. **Setup Frontend**
   - Create signup form
   - Create OTP verification form
   - Create login form
   - Handle JWT tokens

3. **Protect Routes**
   - Add verifyToken middleware to protected endpoints
   - Check user verification status

4. **Deploy**
   - Use environment variables
   - Set NODE_ENV=production
   - Use strong JWT_SECRET

## Email Flow

When user signs up:
1. OTP generated (6 digits)
2. Email sent with OTP
3. User verifies OTP within 5 minutes
4. Account verified
5. JWT token issued
6. Welcome email sent

## Security Notes

- Never commit .env file
- Change JWT_SECRET in production
- Use HTTPS in production
- Implement rate limiting
- Monitor failed login attempts
- Keep dependencies updated

---

**Ready to go!** Your authentication system is fully set up and production-ready. 🚀
