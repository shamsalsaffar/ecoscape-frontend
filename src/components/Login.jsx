import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Button from "../components/Button";
import "../styles/auth.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // konsumerar contexten
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(username, password);
      navigate("/");
    } catch (err) {
      console.log("error: " + err);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button">
          <Button
            style={{
              display: "flex",
              justifySelf: "center",
              borderRadius: "80px",
              paddingLeft: "4.5rem",
              paddingRight: "4.5rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              backgroundColor: "#49613D",
              color: "white",
              width: "auto",
              fontSize: "1rem",
              cursor: "pointer",
              border: "none",
              textTransform: "uppercase",
              fontFamily: "Montserrat",
              fontWeight: "600",
            }}
            text="Login"
            type="submit"
            variant="auth"
          />
        </div>
        <div className="button">
          <Button
            style={{
              display: "flex",
              justifySelf: "center",
              borderRadius: "80px",
              paddingLeft: "4rem",
              paddingRight: "4rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              backgroundColor: "#49613D",
              color: "white",
              width: "auto",
              fontSize: "1rem",
              cursor: "pointer",
              border: "none",
              textTransform: "uppercase",
              fontFamily: "Montserrat",
              fontWeight: "600",
            }}
            text="Sign up"
            type="submit"
            variant="auth"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
