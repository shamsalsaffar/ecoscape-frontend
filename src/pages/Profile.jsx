import "../styles/profile.css";
import ProfileBackground from "../components/ProfileBackground";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserById, updateUser } from "../api/userService";
import Button from "../components/Button";

const Profile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
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

  /*https://www.geeksforgeeks.org/how-to-use-handlechange-function-in-react-component/*/
  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSave = async () => {
    try {
      const updatedUser = await updateUser(userId, form);
      setUser(updatedUser);
      setIsEditing(false);
    } catch (err) {
      console.error("Failed to update: ", err);
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
                    value={form.firstName}
                    onChange={handleChange}
                  />
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
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
                <input name="bio" value={form.bio} onChange={handleChange} />
              ) : (
                user?.bio
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
            <Button
              className="profile-button"
              text={isEditing ? "Save Changes" : "Edit Profile"}
              type="button"
              variant="auth"
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
            />
          </div>
        </div>
      </ProfileBackground>
    </div>
  );
};

export default Profile;
