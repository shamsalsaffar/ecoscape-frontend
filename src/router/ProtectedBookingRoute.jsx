import React from 'react';
import { AuthContext } from '../contexts/AuthContext'; // import Context
import { Navigate } from 'react-router-dom';// to route the user if dont logga in 
import { useContext } from 'react';

const ProtectedBookingRoute = ({children}) => {
    const {currentUser} = useContext(AuthContext); // check if the user logga in or in the context

     if (!currentUser){
        //if user dont loggain route user to login page
        return <Navigate to="/login" replace/>;
     }
 // if the user logga in , show content
  return children;
};

export default ProtectedBookingRoute;
