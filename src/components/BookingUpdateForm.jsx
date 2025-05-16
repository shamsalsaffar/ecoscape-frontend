// UPDATE BOOKING BY ADMIN OR HOST
import React from 'react';
import { useBookingForm } from '../hooks/useBookingForm';

const BookingUpdateForm = ({ bookingId }) => {
  const {
    formData,
    handleChange,
    errors,
    handleUpdate,
    response,
  } = useBookingForm("bookings", bookingId); // skickar typ + ID till hook

  return (
    <div className="bookingUpdate-form">
      <h2>Uppdate bookning</h2>

      <form onSubmit={handleUpdate}>
        <label>User ID</label>
        <input
          type="number"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
        />
        {errors?.userId && <span className="error">{errors.userId}</span>}

        <label>Listing ID</label>
        <input
          type="number"
          name="listingId"
          value={formData.listingId}
          onChange={handleChange}
        />
        {errors?.listingId && <span className="error">{errors.listingId}</span>}

        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors?.firstName && <span className="error">{errors.firstName}</span>}

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors?.lastName && <span className="error">{errors.lastName}</span>}

        <label>Phon Number</label>
        <input
          type="tel"
          name="usersContactPhoneNumber"
          value={formData.usersContactPhoneNumber}
          onChange={handleChange}
        />
        {errors?.usersContactPhoneNumber && (
          <span className="error">{errors.usersContactPhoneNumber}</span>
        )}

        <label>Email</label>
        <input
          type="email"
          name="usersContactEmail"
          value={formData.usersContactEmail}
          onChange={handleChange}
        />
        {errors?.usersContactEmail && (
          <span className="error">{errors.usersContactEmail}</span>
        )}

        <label>Check-in</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
        {errors?.startDate && <span className="error">{errors.startDate}</span>}

        <label>Check-out</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
        {errors?.endDate && <span className="error">{errors.endDate}</span>}

        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="CONFIRMED">CONFIRMED</option>
          <option value="CANCELLED_BY_USER">CANCELLED BY USER</option>
          <option value="CANCELLED_BY_HOST">CANCELLED BY HOST</option>
        </select>
        {errors?.status && <span className="error">{errors.status}</span>}

        <label> Guests</label>
        <input
          type="number"
          name="guests"
          min={1}
          max={10}
          value={formData.guests}
          onChange={handleChange}
        />
        {errors?.guests && <span className="error">{errors.guests}</span>}
        <Button type="submit"
        text="Send"
        onClick={handleSubmit} // Work with hanlesubmit to be ensur for "secondory", and primary button 
        variant="primary"
        disabled={false}
        />
      </form>

      {response && <p className="response-message">{response}</p>} //to show response message

    </div>
  );
};

export default BookingUpdateForm;
