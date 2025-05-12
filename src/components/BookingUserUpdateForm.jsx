import React from "react";
import { useBookingForm } from "../hooks/useBookingForm";
import Button from "./Button";
const BookingUserUpdateForm = ({userId}) => {
    const {
        formData, 
        handleChange,
        errors,
        handleUpdate,
        response,
    } = useBookingForm("user", userId); // use user to update booking user 

    return (
        <div>
            <h2>Update user reservation</h2>
            <form onSubmit ={handleUpdate}>
                <div>
                    <label> First Name</label>
                    <input
                    type="text" 
                    name= "firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                </div>
               
                <div>
                    <label> Last Name</label>
                    <input
                    type="text" 
                    name= "lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label> Email </label>
                    <input
                    type="email" 
                    name= "usersContactEmail"
                    value={formData.usersContactEmail}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label> Phone Number</label>
                    <input
                    type="tel" //is specifically designe for phone to add phone form
                    name= "usersContactPhoneNumber"
                    value={formData.usersContactPhoneNumber}
                    onChange={handleChange}
                    />
                </div>
                {errors.length > 0 && (
                    <div>
                        <ul>
                            {errors.map((error,index) => (
                                <li key= {index} style={{color:"red"}}>
                                    {error}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <Button type="submit" text="Update User" variant="primary"/>


            </form>
            {response && <p className="response-message">{response}</p>} //to show response message
        </div>
    );
};

export default BookingUserUpdateForm;