import "../styles/profile.css";
import ProfileBackground from "../components/ProfileBackground";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserById } from "../api/userService";
import Button from "../components/Button";

const Profile = () => {
  const { userId } = useParams();
  const [photoUrl, setPhotoUrl] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const user = await getUserById(userId);
        setUser(user);
        setPhotoUrl(user.photoUrl);
      } catch (err) {
        console.error("error: ", err);
      }
    };

    fetchUserDetails();
  }, [userId]);

  return (
    <div className="profile-page">
      <ProfileBackground minWidth="1250px" minHeight="550px">
        <div className="profile-content">
          <div className="profile-image-container">
            <img className="profile-image" src={photoUrl} alt="user-photo" />
            <h5>Upload a Photo</h5>
          </div>
          <div className="profile-details">
            <div className="profile-title">
              <h2>
                Hello, {user?.firstName} {user?.lastName}
              </h2>
            </div>
            <div className="profile-about">
              <h3>Bio</h3>
              {user?.bio}
            </div>
            <div className="profile-birth">
              <h3>Birth date</h3>
              {user?.birthDate}
            </div>
            <div className="profile-number">
              <h3>Contact phone number</h3>
              {user?.contactPhoneNumber}
            </div>
            <div className="profile-email">
              <h3>Contact email</h3>
              {user?.contactEmail}
            </div>
            <Button
              className="profile-button"
              text="Edit profile"
              type="button"
              variant="auth"
              onClick={() => navigate("/nothing-yet")}
            />
          </div>
        </div>
      </ProfileBackground>
    </div>
  );
};

export default Profile;
