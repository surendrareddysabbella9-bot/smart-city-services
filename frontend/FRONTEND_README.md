# Smart City Services - Frontend Application

## Overview

This is a complete, production-ready frontend application for the Smart City Services platform - a trust-based worker-first digital service platform connecting verified skilled workers with customers.

## Features

### 1. Landing Page
- Hero section with platform overview
- Service categories showcase
- How it works section
- Trust & verification highlights
- Call-to-action buttons

### 2. Customer Interface
- **Registration & Login** (`/customer/register`, `/customer/login`)
- **Search Workers** (`/customer/search`) - Search by category, location, keywords
- **Worker Profile** (`/customer/worker/:id`) - View detailed worker profiles with ratings
- **Book Service** (`/customer/book/:workerId`) - Book workers for services
- **Dashboard** (`/customer/dashboard`) - Manage bookings and view history

### 3. Worker Interface
- **Registration** (`/worker/register`) - Comprehensive profile creation
- **Login** (`/worker/login`)
- **Dashboard** (`/worker/dashboard`) - Manage job requests, view earnings, track ratings

### 4. Admin Dashboard
- **Admin Login** (`/admin/login`)
- **Dashboard** (`/admin/dashboard`) - Worker verification, booking monitoring, dispute management, analytics

## Tech Stack

- **React 18.3.1** - UI framework
- **React Router 7** - Client-side routing
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons
- **Sonner** - Toast notifications

## Backend Integration Points

The application is designed with clear API integration points. Replace the mock data with actual API calls to your backend:

### Customer APIs
- `POST /api/customer/register` - Customer registration
- `POST /api/customer/login` - Customer login
- `GET /api/workers` - Get list of workers (with filters)
- `GET /api/workers/:id` - Get worker profile
- `POST /api/bookings` - Create new booking
- `GET /api/customer/bookings` - Get customer bookings

### Worker APIs
- `POST /api/worker/register` - Worker registration
- `POST /api/worker/login` - Worker login
- `GET /api/worker/dashboard` - Get worker dashboard data
- `GET /api/worker/requests` - Get job requests
- `PUT /api/worker/requests/:id` - Accept/decline job request
- `PUT /api/worker/jobs/:id/complete` - Mark job as complete

### Admin APIs
- `POST /api/admin/login` - Admin login
- `GET /api/admin/dashboard` - Get admin dashboard statistics
- `GET /api/admin/workers/pending` - Get pending worker verifications
- `PUT /api/admin/workers/:id/verify` - Approve worker
- `PUT /api/admin/workers/:id/reject` - Reject worker
- `GET /api/admin/bookings` - Get all bookings
- `GET /api/admin/disputes` - Get disputes

## Key Files to Update for Backend Integration

1. **Customer Pages**
   - `/src/app/pages/customer/CustomerRegister.tsx` - Line 21
   - `/src/app/pages/customer/CustomerLogin.tsx` - Line 21
   - `/src/app/pages/customer/SearchWorkers.tsx` - Line 17
   - `/src/app/pages/customer/WorkerProfile.tsx` - Line 19
   - `/src/app/pages/customer/BookWorker.tsx` - Line 47
   - `/src/app/pages/customer/CustomerDashboard.tsx` - Line 18

2. **Worker Pages**
   - `/src/app/pages/worker/WorkerRegister.tsx` - Line 31
   - `/src/app/pages/worker/WorkerLogin.tsx` - Line 21
   - `/src/app/pages/worker/WorkerDashboard.tsx` - Line 18

3. **Admin Pages**
   - `/src/app/pages/admin/AdminLogin.tsx` - Line 22
   - `/src/app/pages/admin/AdminDashboard.tsx` - Line 22

## Design Features

### Accessibility & UX for Low Digital Literacy
- Large, clear buttons with icons
- Simple navigation structure
- Clear visual hierarchy
- Card-based layouts for easy scanning
- Status badges with colors and icons
- Responsive design (desktop-first, mobile-adaptable)

### Trust & Verification
- Verified worker badges
- Admin verification system
- Rating and review system
- Transparent worker profiles

## Reusable Components

Located in `/src/app/components/`:

- **Navbar.tsx** - Context-aware navigation
- **Footer.tsx** - Site footer with links
- **WorkerCard.tsx** - Worker profile card
- **ServiceCategoryCard.tsx** - Service category display
- **StatusBadge.tsx** - Status indicators (verified, pending, etc.)
- **RatingDisplay.tsx** - Star rating component

## Getting Started

1. Install dependencies (already done in this environment)
2. Update API endpoints in the page components
3. Configure authentication/session management
4. Test with your backend API

## Notes

- All forms have TODO comments marking where backend API calls should be added
- Mock data is provided for demonstration
- The UI is fully functional and ready for backend integration
- All routes are configured in `/src/app/routes.tsx`

## Recommendations for Enhancement

1. Add authentication state management (Context API or state management library)
2. Implement protected routes for authenticated pages
3. Add loading states for API calls
4. Implement error handling and validation feedback
5. Add image upload for worker profiles
6. Implement real-time notifications
7. Add payment gateway integration
8. Implement geolocation for location-based search
