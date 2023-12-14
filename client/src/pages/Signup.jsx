import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
export const Signup = () => {
    const navigate = useNavigate();
    const [newUser, { data, loading, error }] = useMutation(ADD_USER);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [username, setUsername] = useState("");
    const onButtonClick = async () => {
        setEmailError("");
        setPasswordError("");

        if ("" === email) {
            setEmailError("Email is required");
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setEmailError("Invalid email address");
        }

        if ("" === password) {
            setPasswordError("Password is required");
        }

        if (password.length < 7) {
            setPasswordError("Password must be at least 7 characters");
        }
        try {
            const response = await newUser({ variables: { username, email, password } });
            navigate('/login');
        } catch (error) {
            throw error.message;
        }

    };

    return (
        <div>
            <div className="form-wrapper">
                <div>
                    <input
                        value={username}
                        placeholder="Username"
                        onChange={e => setUsername(e.target.value)}
                        size="large"
                    />
                </div>
                <div>
                    <input
                        value={password}
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        size="large"
                        type="password"
                    />
                    <label>{passwordError}</label>
                </div>
                <div>
                    <input
                        value={email}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        size="large"
                        type="email"
                    />
                    <label>{emailError}</label>
                </div>
            </div>
            <div className="button-wrapper">
                <Button
                    onClick={onButtonClick}
                    type="primary"
                    size="large"
                >
                    Create Login
                </Button>
            </div>
            <br />
            <p>Already have an account?<Link to="/Login">Login!</Link></p>
        </div>
    );
}

export default Signup;