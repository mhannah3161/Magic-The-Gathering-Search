import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Auth from "../utils/auth";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

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
      <Box display="flex" flexDirection="row" justifyContent="center">

      <p style={{ backgroundColor: "blue", color:"white", width: "200px", borderRadius: "20px", padding:"10px"}}>
        Don't have an account? 
      </p>
      <Link to="/Signup" style={{ backgroundColor: "white", color: "green", marginLeft:"10px", borderRadius: "5px", padding: "3px", textDecoration: "none"}}>Signup!</Link>
      </Box>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </>
  );
};

export default Login;
// const Login = (props) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const navigate = useNavigate();

//   const onButtonClick = async (e) => {

//     e.preventDefault();
    
//     setPasswordError("");

//     if ("" === password) {
//       setPasswordError("Password is required");
//       return;
//     }

//     if (password.length < 7) {
//       setPasswordError("Password must be at least 7 characters");
//       return;      
//     }

//     try {
//     const response = await fetch("/graphql",
//     {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           query: `
//             mutation Login($username: String!, $password: String!) {
//               login(username: $username, password: $password) {
//                 token
//               }
//             }
//           `,
//           variables: {
//             username,
//             password,
//           },
//         }),
//       });

//       if (response.ok) {
//         const { token } = await response.json();
//         // Token verification
//         const verificationResponse = await fetch("../../../server/utils/auth", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`,
//           },
//         });

//         if (verificationResponse.ok) {
//           navigate("/"); // Redirect to the home page
//         } else {
//           setPasswordError("Invalid credentials");
//         }
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setPasswordError("Error during login");
//     }
//   };

//   return (
//     <div>
//      <form onSubmit={onButtonClick}>
//       <Box display="flex" justifyContent="center">

//       <Box display="flex" flexDirection="column"  className="form-wrapper loginPage">
//         <div style={{backgroundColor: "#FFFFFF"}}>
//         <div>
//         <TextField label="Username" variant="filled" color="success" focused onChange={(e) => setUsername(e.target.value)} />
//         </div>
//         <div>
//         <TextField label="Password" variant="filled" color="success" focused onChange={(e) => setPassword(e.target.value)} />
//           <label>{passwordError}</label>
//         </div>
//         </div>
//       </Box>
//       <div className="button-wrapper">
//         <Button onClick={onButtonClick} type="primary" size="large" style={{ backgroundColor: "blue", color:"white", borderRadius: "10px", marginLeft: "10px", marginTop: "40px"}}>
//           Login
//         </Button>
//         </div>
//             </Box>
//         </form>
//       <br />
//       <Box display="flex" flexDirection="row" justifyContent="center">

//       <p style={{ backgroundColor: "blue", color:"white", width: "200px", borderRadius: "20px", padding:"10px"}}>
//         Don't have an account? 
//       </p>
//       <Link to="/Signup" style={{ backgroundColor: "white", color: "green", marginLeft:"10px", borderRadius: "5px", padding: "3px", textDecoration: "none"}}>Signup!</Link>
//       </Box>

//       <p>
//         <Link to="/">Back to Home</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;
