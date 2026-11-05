# StayEase – React + Vite

## Run locally
```
npm install
npm run dev
```
## Build
```
npm run build
```
## Deploy on Vercel
1. Push this folder to GitHub.
2. Vercel → New Project → import repo (Framework: Vite, Build: `npm run build`, Output: `dist`).

## Modules
- **User**: Home, Signup, Login (localStorage `users`), plus hotels/booking/payment pages
- **Admin**: Admin Login (`admin@stayease.com` / `admin123`), protected Dashboard, hotels/bookings/users/reviews/analytics pages

## Structure
- `src/pages`, `src/components`, `src/utils/auth.js` – React code
- `public/pages`, `public/admin` – pages not yet converted (original HTML)
- Converted so far: Home, Login, Signup, Wishlist, Loyalty Points, Notifications, Admin Login, Admin Dashboard
