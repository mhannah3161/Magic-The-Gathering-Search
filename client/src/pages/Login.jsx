import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
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

    // clear form values
    setFormState({
      username: '',
      password: '',
    });
  };

  return (
    <>
      <div>
        {data ? (
          <p>
            Success! You may now head{" "}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
          <div className="form-wrapper loginPage">
            <div>
              <input
                className="form-input"
                name="username"
                type="username"
                value={formState.username}
                placeholder="Username"
                onChange={handleChange}
                size="large" />
            </div>
            <div>
              <input
                className="form-input"
                name="password"
                type="password" 
                value={formState.password}
                placeholder="Password"
                onChange={handleChange}
                size="large" />
            </div>
          </div>
          <div className="button-wrapper">
            <Button type="primary" size="large">
              Login
            </Button>
          </div>
        </form>
        )}
        
      </div>
      <br />
      <p>
        Don't have an account? <Link to="/Signup">Signup!</Link>
      </p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </>
  );
};

export default Login;
