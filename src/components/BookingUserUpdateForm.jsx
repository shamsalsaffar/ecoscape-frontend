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

    retun (
        <div>
            <h2>Update user reservation</h2>
            <form onUpdate ={handleUpdate}>
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
                    <label> First Name</label>
                    <input
                    type="text" 
                    name= "firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label> First Name</label>
                    <input
                    type="text" 
                    name= "firstName" // must be match with backend 100%
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label> Last Name</label>
                    <input
                    type="text" 
                    name= "lasttName"
                    value={formData.lastName}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label> Email </label>
                    <input
                    type="usersContactEmail" 
                    name= "firstName"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label> First Name</label>
                    <input
                    type="text" 
                    name= "usersContactPhoneNumber"
                    value={formData.phonNumber}
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
        </div>
    );
};

export default BookingUserUpdateForm;