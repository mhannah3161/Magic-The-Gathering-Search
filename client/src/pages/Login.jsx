import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const onButtonClick = () => {
    setPasswordError("");

    if ("" === password) {
      setPasswordError("Password is required");
    }

    if (password.length < 7) {
      setPasswordError("Password must be at least 7 characters");
    } else {
      window.location.href = "./";
    }
  };

  return (
    <div>
      <div className="form-wrapper loginPage">
        <div>
          <input
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            size="large"
          />
        </div>
        <div>
          <input
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            size="large"
            type="password"
          />
          <label>{passwordError}</label>
        </div>
      </div>
      <div className="button-wrapper">
        <Button onClick={onButtonClick} type="primary" size="large">
          Login
        </Button>
      </div>
      <br />
      <p>
        Don't have an account? <Link to="/Signup">Signup!</Link>
      </p>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default Login;
