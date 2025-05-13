import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Button from "../components/Button";
import "../styles/auth.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const navigate = useNavigate();
  // konsumerar contexten
  const { register } = useAuth();

  const emailPattern =
    /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*https://www.geeksforgeeks.org/how-to-validate-email-address-using-regexp-in-javascript/*/
    if (!emailPattern.test(username)) {
      window.alert("Please enter a valid email address.");
      return;
    }

    /*https://www.geeksforgeeks.org/how-to-validate-confirm-password-using-javascript/*/
    if (password !== repeatPassword) {
      window.alert("Passwords need to match.");
      return;
    }

    try {
      await register(username, password);
      navigate("/");
    } catch (err) {
      console.log("error: " + err);
    }
  };

  /*https://surajsharma.net/blog/react-onkeypress-form-submit*/
  const handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-text">Sign up</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="repeat-password"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className="button">
            <Button
              className="button-login"
              text="Sign up"
              type="submit"
              variant="auth"
            />
          </div>

          <hr className="hr-text" data-content="Or Login" />
          <div className="button">
            <Button
              className="button-login"
              text="Login"
              type="button"
              variant="auth"
              onClick={() => navigate("/login")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
