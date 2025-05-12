import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// add stripe for all application ome time 
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise= loadStripe('pk_test_51RLSChQEubero97NhRlRQDb7AHac3FKDb3NtjyaiBRWTG3i1eQeqiUDSYPECCqJgnk81SiqiSvg8NUr6b817hwOl00XhzHVWfT')


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Elements stripe={stripePromise}>
    <App />
    </Elements>
  </StrictMode>,
)