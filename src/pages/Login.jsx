import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Button from "../components/Button";
import "../styles/auth.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  
  // konsumerar contexten
  const { login, user, checkAuthStatus} = useAuth();

  const from = location.state?.from?.pathname || "/"; 

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(username, password);
      await checkAuthStatus();  
     
      navigate(from, { replace: true }); // العودة إلى الصفحة السابقة بعد التسجيل
    
    } catch (err) {
      console.log("error: " + err);
    }
  };
  
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-text">Login or Sign up</div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-group">
            <input className="login-input"
              type="text"
              id="username"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-form-group">
            <input className="login-input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="button">
            <Button
              className="button-login"
              text="Login"
              type="submit"
              variant="auth"
            />
          </div>

          <hr className="hr-text" data-content="Or Sign Up" />
          <div className="button">
            <Button
              className="button-login"
              text="Sign up"
              type="submit"
              variant="auth"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;