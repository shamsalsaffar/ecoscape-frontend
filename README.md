#  EcoScape Frontend

EcoScape is a full-stack eco-tourism platform that allows users to explore, book, and manage environmentally friendly accommodations.

This repository contains the **frontend application built with React**, integrated with a Spring Boot backend and Stripe for payments.

---

##  Purpose

EcoScape aims to:

* promote sustainable travel
* connect users with eco-friendly listings
* provide a smooth and secure booking experience

---

##  Features

* User authentication (login & signup)
* Role-based access (USER, HOST, ADMIN)
* Listing browsing and search
* Detailed listing pages with images and availability
* Multi-step booking flow
* Stripe payment integration
* Profile management
* Admin dashboard for host approvals

---

##  Architecture Overview

EcoScape follows a **three-layer architecture**:

### 1. Database

* PostgreSQL
* Entities: User, Listings, Bookings, Payments, Images, Available Dates

### 2. Backend

* Spring Boot
* JWT Authentication
* REST APIs
* Stripe integration

### 3. Frontend (this project)

* React
* Context API
* Axios
* React Router

---

##  Frontend Structure

The frontend is modular and organized into:

* **pages/** → main application views
* **components/** → reusable UI components
* **contexts/** → global state (Auth & Booking)
* **api/** → backend communication (Axios services)
* **hooks/** → reusable logic
* **styles/** → CSS styling

---

##  Authentication & Authorization

* Managed using Context API (`AuthContext`)
* Protected routes with role-based access
* Redirects:

  * not logged in → `/login`
  * wrong role → `/unauthorized`

---

##  Booking Flow

The booking process is implemented as a **3-step flow**:

1. BookingForm
2. PaymentForm (Stripe)
3. Confirmation

### Key Features

* Shared state using `BookingContext`
* Validation before submission
* Integration with backend booking system
* Stripe PaymentIntent flow
* Reset logic for better user experience

---

##  Payment Integration (Stripe)

* Payment handled using Stripe

* Implemented with:

  * CardNumberElement
  * CardExpiryElement
  * CardCvcElement

* Backend endpoints:

  * `create-payment-intent`
  * `finalize-payment`

---

##  Profile Page

Users can:

* view and edit personal information
* validate inputs (email, phone, name)
* view bookings via modal

---

##  Admin Features

* View pending host requests
* Approve or reject users

---

##  Search & Listings

Users can search listings by:

* date
* location
* number of guests
* category

Listings include:

* images
* amenities
* sustainability features
* host information

---

##  Environment Variables

```env
VITE_API_URL=your_backend_url
VITE_STRIPE_PUBLISHABLE_KEY=your_key
```

---

## ▶️ Run the Project

```bash
npm install
npm run dev
```

---

##  Team & Contribution

This project was developed as part of a team collaboration.

### My Contribution

I played a major role in the frontend development, with a primary focus on the **booking system and payment flow**, including:

* Designing and implementing the multi-step booking flow
* Managing booking state using Context API (`BookingContext`)
* Integrating frontend with backend booking endpoints
* Implementing Stripe payment flow (PaymentIntent & confirmation)
* Handling form validation and error states
* Ensuring a smooth and user-friendly booking experience

I also contributed to:

* frontend architecture decisions
* API integration
* authentication flow handling

### Team Collaboration

The project was developed in an agile team environment, where responsibilities were shared across frontend and backend development.

---

##  Reflection

This project represents my development as a **full-stack developer**, where I gained experience in:

* building scalable frontend architecture
* integrating payment systems (Stripe)
* handling API communication
* implementing authentication flows
* collaborating in an agile team

---

##  Future Improvements

* booking cancellation & update from UI
* chat system between user & host
* reviews & ratings
* favorites system
* improved UI/UX
