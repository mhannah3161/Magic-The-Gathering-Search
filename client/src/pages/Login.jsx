import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const onButtonClick = async () => {
    setPasswordError("");

    if ("" === password) {
      setPasswordError("Password is required");
      return;
    }

    if (password.length < 7) {
      setPasswordError("Password must be at least 7 characters");
      return;
    }

    // Perform actual authentication check on the server side
    try {
      const response = await fetch("./server/utils/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Authentication successful
        // You might want to handle the response or store user information in your context
        navigate("/"); // Redirect to the home page or any other route
      } else {
        // Authentication failed
        // You might want to handle different error cases
        setPasswordError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setPasswordError("Error during login");
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
