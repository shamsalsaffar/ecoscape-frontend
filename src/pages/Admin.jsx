import "../styles/admin.css";
import { useEffect, useState } from "react";
import { getPendingUsers } from "../api/userService";

const Admin = () => {
  const [pendingUsers, setPendingUsers] = useState([]);

  useEffect(() => {
    const fetchPending = async () => {
      try {
        const data = await getPendingUsers();
        setPendingUsers(data);
      } catch (err) {
        console.error("error:", err);
      }
    };

    fetchPending();
  }, []);

  return (
    <div className="admin-page">
      <h2>Pending Host Requests</h2>
      <ul>
        {pendingUsers.map(({ id, firstName, lastName, username }) => (
          <li key={id}>
            {firstName} {lastName} ({username})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
