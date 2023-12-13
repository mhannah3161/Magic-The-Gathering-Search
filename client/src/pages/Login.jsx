import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const onButtonClick = async (e) => {

    e.preventDefault();
    
    setPasswordError("");

    if ("" === password) {
      setPasswordError("Password is required");
      return;
    }

    if (password.length < 7) {
      setPasswordError("Password must be at least 7 characters");
      return;      
    }

    try {
    const response = await fetch("/graphql",
    {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation Login($username: String!, $password: String!) {
              login(username: $username, password: $password) {
                token
              }
            }
          `,
          variables: {
            username,
            password,
          },
        }),
      });

      if (response.ok) {
        const { token } = await response.json();
        // Token verification
        const verificationResponse = await fetch("../../server/utils/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (verificationResponse.ok) {
          navigate("/"); // Redirect to the home page
        } else {
          setPasswordError("Invalid credentials");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      setPasswordError("Error during login");
    }
  };

  return (
    <div>
     <form onSubmit={onButtonClick}>
      <Box display="flex" justifyContent="center">

      <Box display="flex" flexDirection="column"  className="form-wrapper loginPage">
        <div style={{backgroundColor: "#FFFFFF"}}>
        <div>
        <TextField label="Username" variant="filled" color="success" focused onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
        <TextField label="Password" variant="filled" color="success" focused onChange={(e) => setPassword(e.target.value)} />
          <label>{passwordError}</label>
        </div>
        </div>
      </Box>
      <div className="button-wrapper">
        <Button onClick={onButtonClick} type="primary" size="large" style={{ backgroundColor: "blue", color:"white", borderRadius: "10px", marginLeft: "10px", marginTop: "40px"}}>
          Login
        </Button>
        </div>
            </Box>
        </form>
      <br />
      <Box display="flex" flexDirection="row" justifyContent="center">

      <p style={{ backgroundColor: "blue", color:"white", width: "200px", borderRadius: "20px", padding:"10px"}}>
        Don't have an account? 
      </p>
      <Link to="/Signup" style={{ backgroundColor: "white", color: "green", marginLeft:"10px", borderRadius: "5px", padding: "3px", textDecoration: "none"}}>Signup!</Link>
      </Box>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default Login;
