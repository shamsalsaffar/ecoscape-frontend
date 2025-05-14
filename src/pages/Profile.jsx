import "../styles/profile.css";
import ProfileBackground from "../components/ProfileBackground";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserById } from "../api/userService";

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
        <div className="profile-image">
          <img src={photoUrl} alt="user-photo" />
        </div>
        <div className="profile-about">{user?.bio}</div>
        <div className="profile-birth">{user?.birthDate}</div>
        <div className="profile-number">{user?.contactPhoneNumber}</div>
        <div className="profile-email">{user?.contactEmail}</div>
      </ProfileBackground>
    </div>
  );
};

export default Profile;
