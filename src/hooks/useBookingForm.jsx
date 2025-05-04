import React from "react";
import api from "../api/axios";
import { useState, useEffect} from "react";
import { submitBooking, updateBookingUser, updateBooking} from "../api/bookingsService";

export const useBookingForm = (type, entityId=null) => {

     // to save input data from user 
     const [formData, setFormData]= useState({
     userId: '',
     listingId: '',
     firstName: '',
     lastName: '',
     usersContactPhoneNumber: '',
     usersContactEmail: '',
     startDate: '',
     endDate: '',
     status: 'PENDING',
     guests: 1// defualt number 1 
    }); 

//  TO SAVE ERRORS IF FOUND IN ARRAY 
    const [errors, setError] = useState([]);

// STATE RESPONSE TO SAVE RESPONSE
const [response, setResponse]= useState(null);

// FETCH BOOKING INFO BY ENTITYID 
    useEffect (() => {
        if (entityId){
            const fetchData = async () => {
                try {
                const {data} = await api.get(`/api/${type}s/${entityId}`);
                setFormData({
                    ... data, // fyll updatedata form 
                });
                } catch (error){ 
                console.error ("an error accourred:", error);

                }
            };
         fetchData();
        }
    },[entityId , type]);

// HANDLING FIELD CHANGES التعامل مع التغييرات في الحقول  
    const handleChange = (e) => { // e is change or obejct  e  هو الحدث اللي يحدث
     const{name, value} = e.target;//  e.target refer to element (input field) that the change accoured on 
      setFormData ({
        ... formData, // ... spread operator mean tat save alla data form   هذة نقاط تعني احفظ البيانات  
        
        [name]:value
      });
    };


// VALIDATE THE ENTERED DATA التحقق من صحة البيانات المدخله 
// IMPROVE THE USER EXPERIENCE AND REDUCE SERVER LOAD تقليل ضغط علي سيرفر وتجربة مسخدم افضل 
// FÖR FÖRBÄTTRA ANVÄNDARUPPLEVELSEN OCH MINSKA SERVERBELSTNING
const validateForm = () =>{
    const newErrors = []
    if (!formData.firstName || formData.firstName.length >50)
       newErrors.push("Invalid First Name");
    if (!formData.lastName || formData.lastName.length >50)
      newErrors.push("Invalid Last Name");
    if (!formData.usersContactEmail || !/\S+@\S+\.\S+/.test(formData.usersContactEmail))
      newErrors.push("Invalid Email");
    if (!formData.usersContactPhoneNumber || !/^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/.test(formData.usersContactPhoneNumber)){
      newErrors.push("Invalid Phon Number");
    }
    if (!formData.startDate || !formData.endDate)
      newErrors.push("Arrival and departure dates must be specified");
    if (!formData.guests ||isNaN(formData.guests) || formData.guests < 1 || formData.guests >10)
      newErrors.push("Number of gustes must be between 1-10");

    setError(newErrors); // update errors function 
    return newErrors.length === 0; // check arayy if have errors or not
  
    }; 


// HANDLE FOR SUBMISSION  التعامل مع ارسال النموذج
   const handleUpdate = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
        let result;
        if (type === "user"){
            // if the update to user 
            result = await updateBookingUser(entityId,formData);
            alert ("Your booking has been successfully updated.");
        } else if (type === "bookings"){
            result = await updateBooking(entityId, formData);
            alert("Booking has been updated");
        }
        setResponse(result);
    } catch(error){
        alert("An error occurred:" + error.message);
    }
   };

  return {
    formData,
    setFormData,
    errors,
    handleChange,
    validateForm,
    handleUpdate,
    response,
  };
};

