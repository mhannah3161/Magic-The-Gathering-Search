import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const onButtonClick = () => {
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

    }

    <div>
        <div className="form-wrapper">
            <div>
            <input
                value={username}
                placeholder="Username"
                onClick={e => setUsername(e.target.value)}
                size="large"
                />
            </div>
            <div>
            <input
                value={password}
                placeholder="Password"
                onClick={e => setPassword(e.target.value)}
                size="large"
                type="password"
            />
            <label>{passwordError}</label>
            </div>
            <div>
            <input
                value={email}
                placeholder="Email"
                onClick={e => setEmail(e.target.value)}
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
        <br/>
        <p>Already have an account?<Link to="/Login">Login!</Link></p>
    </div>
}

export default Signup;