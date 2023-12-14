import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Login = (props, selectedTheme) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {data ? (
          <p style={{ color: "green", fontWeight: "bold", fontSize: "1.2rem" }}>
            Success! You may now head{" "}
            <Link
              to="/"
              style={{ color: "#3498db", textDecoration: "underline" }}
            >
              back to the homepage.
            </Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                className="form-input"
                name="username"
                type="text"
                value={formState.username}
                label="Username"
                onChange={handleChange}
                size="large"
                fullWidth
                style={{
                  marginBottom: "15px",
                  borderRadius: "5px",
                  backgroundColor: "#ecf0f1",
                  padding: "10px",
                }}
              />
              <TextField
                className="form-input"
                name="password"
                type="password"
                value={formState.password}
                label="Password"
                onChange={handleChange}
                size="large"
                fullWidth
                style={{
                  marginBottom: "15px",
                  borderRadius: "5px",
                  backgroundColor: "#ecf0f1",
                  padding: "10px",
                }}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                style={{
                  backgroundColor: "#3498db",
                  borderRadius: "5px",
                  padding: "10px 20px",
                }}
              >
                Login
              </Button>
            </div>
          </form>
        )}
      </div>
      <br />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        mt={2}
      >
        <p
          style={{
            backgroundColor: "#34495e",
            color: "white",
            width: "200px",
            border: "10px",
            borderColor: "selectedTheme.colors.color",
            borderRadius: "5px",
            padding: "10px",
            textAlign: "center",
            fontSize: "1rem",
            fontFamily: "sans-serif",
          }}
        >
          <Link
          
            to="/Signup"
            style={{
              color: "white",
              marginLeft: "10px",
              borderRadius: "20px",
              padding: "3px",
              textDecoration: "none",
              fontFamily: "sans-serif",
            }}
          >
             Don't have an account? <br/>Signup!
          </Link>
        </p>
      </Box>
      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          backgroundColor: "#34495e",
          width: "100px",
          color: "white",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color:"white", fontFamily: "sans-serif" }}>
          Back to Home
        </Link>
      </p>
    </>
  );
};

export default Login;