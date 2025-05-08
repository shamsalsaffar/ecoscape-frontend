import React from 'react';
import { AuthContext } from '../contexts/AuthContext'; // import Context
import { Navigate, useLocation } from 'react-router-dom';// to route the user if dont logga in 
import { useContext } from 'react';

const ProtectedBookingRoute = ({children}) => {
    const {currentUser} = useContext(AuthContext); // check if the user logga in or in the context
    // محاولة حصولة علي الموقع الحالي الموجد فيه ال مستخدم 
    // get the current location the use is try to access 
    const location = useLocation(); 

     if (!currentUser){
        //if user dont loggain route user to login page
        return <Navigate 
        to="/login"
        replace
        state={{form:location.pathname}}/>;
     }
 // if the user logga in , show content
  return children;
};

export default ProtectedBookingRoute;
