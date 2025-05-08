import { useState } from "react";
import { useNavigate , useLocation} from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Button from "../components/Button";
import "../styles/auth.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location= useLocation(); // get the distantion the user try to access نحصل علو موقع اللي كان عليه المستخدم 
  // konsumerar contexten
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(username, password);

      // check if there is saved distination , and route to it 
      // التحقق اذا كان هاك موقع محفوظ والتوجه اليه
      const form = location.state?.form || "/"; // if dont save distantion route to home page
      navigate(location.state?.form || "/bookings"); // otherwise return to saved destination 
    } catch (err) {
      console.log("error: " + err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-text">Login or Sign up</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
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
