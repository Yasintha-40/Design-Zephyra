# Internship Assignment: Full Stack App

This repository contains the full stack implementation for the Full Stack Developer Intern assignment.

## Tech Stack
- **Frontend**: Next.js (App Router), Vanilla CSS (CSS Modules)
- **Backend**: Node.js, Express.js, JWT Authentication, JSON File DB (`db.json`)

## Links
- **Live Frontend URL (Vercel)**: `[Insert Vercel Link Here]`
- **Live Backend URL (Render)**: `[Insert Render Link Here]`
- **Frontend Repository**: `[Insert Frontend Repo Link Here]`
- **Backend Repository**: `[Insert Backend Repo Link Here]`

---

## 🚀 Setup Instructions (Local Development)

### Backend Setup
1. Open a terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder (or use the existing one) with:
   ```env
   PORT=5000
   JWT_SECRET=supersecretkey123
   DATABASE_FILE=db.json
   ```
4. Start the backend server:
   ```bash
   node index.js
   ```
   *The server will run at http://localhost:5000*

### Frontend Setup
1. Open a new terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Next.js development server:
   ```bash
   npm run dev
   ```
   *The frontend will run at http://localhost:3000*

---

## 🌟 Key Features
- **Pixel-perfect Design**: Precisely matched the provided Figma/image mockup using purely Vanilla CSS (CSS Modules) for optimal control and zero bloat.
- **Micro-Animations**: Added subtle hover states and press feedback on custom inputs and buttons.
- **Custom Authentication Flow**: Built JWT-based registration and login flows.
- **State Management**: Form validations, loading states, and error handling seamlessly integrated between front and back-end.

## Deployment Notes
- **Render (Backend)**: When hosted on Render, file-system storage (`db.json`) is ephemeral on free tiers, so registrations might wipe periodically during server restarts. This is expected for standard file-based mocked DBs unless configured with a disk, but perfectly functional for interview API tests.
- **Vercel (Frontend)**: Standard Next.js deployment. Ensure `http://localhost:5000` fetches in `login/page.js` and `signup/page.js` are updated to your deployed Render URL inside the actual production build.
