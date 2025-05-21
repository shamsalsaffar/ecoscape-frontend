import "../styles/profile.css";
import ProfileBackground from "../components/ProfileBackground";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserById, updateUser } from "../api/userService";
import Button from "../components/Button";
import MyBookings from "../components/MyBookings";
import MyBookingsModal from "../components/MyBookingsModal";

const Profile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showBookings, setShowBookings] = useState(false); // state to show my bookings
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    birthDate: "",
    contactPhoneNumber: "",
    contactEmail: "",
    photoUrl: "",
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const user = await getUserById(userId);
        setUser(user);
        setForm(user);
      } catch (err) {
        console.error("error: ", err);
      }
    };

    fetchUserDetails();
  }, [userId]);

  //if input is empty it gets stored as null
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value === "" ? null : value,
    }));
  };

  const handleSave = async () => {
    const namePattern = /^$|^[A-Za-zÀ-ÖØ-öø-ÿ'\s-]+$/;

    const maxBioLength = 600;

    const contactEmailPattern =
      /(^$|^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$)/;

    const contactPhonePattern = /(^$|^\+\d{1,3}\d{9}$)/;

    if (!namePattern.test(form.firstName)) {
      alert("Invalid characters in first name");
      return;
    }

    if (!namePattern.test(form.lastName)) {
      alert("Invalid characters in last name");
      return;
    }

    if (form.bio && form.bio.length > maxBioLength) {
      alert(`Your bio cannot be longer than 600 characters.`);
      return;
    }

    if (!contactPhonePattern.test(form.contactPhoneNumber ?? "")) {
      alert("That's not a valid phone number.");
      return;
    }

    if (!contactEmailPattern.test(form.contactEmail ?? "")) {
      alert("That's not a valid email.");
      return;
    }

    try {
      const updatedUser = await updateUser(userId, form);
      setUser(updatedUser);
      setIsEditing(false);
    } catch (err) {
      //if the server error equals 409 (conflict) it responds accordingly why (contact email&password needs to be unique)
      if (err.response && err.response.status === 409) {
        alert(err.response.data);
      } else {
        console.error("Failed to update: ", err);
      }
    }
  };

  return (
    <div className="profile-page">
      <ProfileBackground minWidth="1250px" minHeight="550px">
        <div className="profile-content">
          <div className="profile-image-container">
            {/* implement photo upload later */}
            <img
              className="profile-image"
              src={form.photoUrl || null}
              alt="user-photo"
            />
            <h5>Upload a Photo</h5>
          </div>
          <div className="profile-details">
            <div className="profile-title">
              {/* https://www.youtube.com/watch?v=fqZrlSLU1Uw&ab_channel=HongLyTech */}
              {isEditing ? (
                <>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    name="firstName"
                    value={form.firstName ?? ""}
                    onChange={handleChange}
                  />
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    name="lastName"
                    value={form.lastName ?? ""}
                    onChange={handleChange}
                  />
                </>
              ) : (
                <h2 className="profile-hello">
                  Hello, {user?.firstName} {user?.lastName}
                </h2>
              )}
            </div>
            <div className="profile-about">
              <h3>Bio</h3>
              {isEditing ? (
                <textarea
                  className="profile-bio"
                  name="bio"
                  value={form.bio ?? ""}
                  onChange={handleChange}
                />
              ) : (
                <p>{user?.bio}</p>
              )}
            </div>
            <div className="profile-birth">
              <h3>Birth date</h3>
              {isEditing ? (
                <input
                  name="birthDate"
                  type="date"
                  value={form.birthDate}
                  onChange={handleChange}
                  //can't set birthdate to future, need to fix so you can't set birthdate to a certain age
                  max={new Date().toLocaleDateString("sv-SE")}
                />
              ) : (
                user?.birthDate
              )}
            </div>
            <div className="profile-number">
              <h3>Contact phone number</h3>
              {isEditing ? (
                <input
                  name="contactPhoneNumber"
                  value={form.contactPhoneNumber}
                  onChange={handleChange}
                />
              ) : (
                user?.contactPhoneNumber
              )}
            </div>
            <div className="profile-email">
              <h3>Contact email</h3>
              {isEditing ? (
                <input
                  name="contactEmail"
                  value={form.contactEmail}
                  onChange={handleChange}
                />
              ) : (
                user?.contactEmail
              )}
            </div>
            <div className="profile-button-container">
              <Button
                className="profile-button"
                text={isEditing ? "Save Changes" : "Edit Profile"}
                type="button"
                variant="auth"
                onClick={isEditing ? handleSave : () => setIsEditing(true)}
              />
              <Button
                className="profile-button"
                text={showBookings ? "Hide My Bookings" : "My Bookings"}
                type="button"
                variant="auth"
                onClick={() => setShowBookings(!showBookings)}
              />

              {showBookings && (
                <MyBookingsModal onClose={() => setShowBookings(false)} />
              )}
            </div>
          </div>
        </div>
      </ProfileBackground>
    </div>
  );
};

export default Profile;
