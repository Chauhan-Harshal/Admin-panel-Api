# Admin Panel Backend

This is a Node.js backend for an admin panel with authentication.

## Setup

1. Install dependencies: `npm install`
2. Set up database: Use MongoDB Atlas (free) - get connection string and update ATLAS_URL in .env
3. Run the server: `npm start` or `npm run dev` for development.

## API

- POST /api/users/register: Register user
- POST /api/users/login: Login
- POST /api/users/logout: Logout
- GET /api/posts: Get posts
- POST /api/posts: Create post (auth required)
- PUT /api/posts/:id: Update post
- DELETE /api/posts/:id: Delete post
- GET /api/admin/dashboard: Admin dashboard
- GET /api/admin/users: Get users (admin)
- DELETE /api/admin/users/:id: Delete user (admin)

## MongoDB Setup

1. Go to https://www.mongodb.com/atlas
2. Sign up and create free cluster
3. Get connection string from Connect > Connect your application
4. Update .env: ATLAS_URL=your_connection_string (requires Bearer token)