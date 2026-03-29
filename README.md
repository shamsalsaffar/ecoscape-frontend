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
* Stripe integration for payments

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
* Reset logic for safe user experience

---

##  Payment Integration (Stripe)

* Payment handled via Stripe
* Uses:

  * CardNumberElement
  * CardExpiryElement
  * CardCvcElement
* Backend integration:

  * create-payment-intent
  * finalize-payment

---

##  Profile Page

Users can:

* view and edit personal information
* validate input (email, phone, name)
* view bookings via modal

---

##  Admin Features

* View pending host requests
* Approve or reject users

---

##  Search & Listings

Users can:

* search listings by:

  * date
  * location
  * guests
  * category
* view:

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

##  Author

**Shams AlSaffar**

---

##  Reflection

This project represents my development as a **full-stack developer**, where I worked on:

* frontend architecture
* booking systems
* payment integration
* API communication
* authentication flows
* teamwork in an agile environment

---

##  Future Improvements

* booking cancellation & update from UI
* chat system between user & host
* reviews & ratings
* favorites system
* improved UI/UX
