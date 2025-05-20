import "../styles/admin.css";
import { useEffect, useState } from "react";
import { getPendingUsers, rejectHost, approveHost } from "../api/userService";

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

  const handleApprove = async (userId) => {
    try {
      await approveHost(userId);
      setPendingUsers((currentUsers) =>
        currentUsers.filter((user) => user.id !== userId)
      );
    } catch (err) {
      console.error("error:" + err);
    }
  };

  const handleReject = async (userId) => {
    try {
      await rejectHost(userId);
      setPendingUsers((currentUsers) =>
        currentUsers.filter((user) => user.id !== userId)
      );
    } catch (err) {
      console.error("error:" + err);
    }
  };

  return (
    <div className="admin-page">
      <h2>Pending Host Requests</h2>
      <ul>
        {pendingUsers.map(({ id, firstName, lastName, username }) => (
          <li key={id}>
            {firstName} {lastName} ({username})
            <button onClick={() => handleApprove(id)}>Approve</button>
            <button onClick={() => handleReject(id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
