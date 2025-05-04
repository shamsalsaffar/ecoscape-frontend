import api from "./axios";

const submitBooking = async(formData) => {
    try {
        const response = await api.post('/api/bookings', formData, {
            method:"POST", 
            headers:{
                "Content-Type": "application/json",
            },
        });

        return response.data; //Booking success 
    } catch (error){
        console.error("Error in submitBooking:" , error); //log the error  for beter debugging occurred
        throw new Error(error.message || 'an error occurred while sending');

    }
};
export {submitBooking};


//  TO UPDATE BOOKING BY USER
export const updateBookingUser = async (bookingId, bookingData) => {
    try {
        const response = await api.patch(`/api/bookings/${bookingId}/update-contact`, bookingData);
        return response.data;
    } catch (error){
        throw new Error ('failed to update booking data:' + error.message);
    }
    
};


// TO UPDATE  BOOKING BY ADMIN OR HOST 
export const updateBooking = async(bookingId, bookingData) => {
    try {
        const response = await api.put(`/api/bookings/${bookingId}`, bookingData);
        return response.data;
    } catch (error){
        throw new Error ('Faild to update booking data:' + error.message);
        
    }
}