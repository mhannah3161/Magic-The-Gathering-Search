import React from "react";

export default function Signup() {
        
        return (
        <>
            <div>
                <form>
                    <label>Username</label>
                    <input type="text" placeholder="Username"/>
                    <label>Password</label>
                    <input type="password" placeholder="Password"/>
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm Password"/>
                    <label>Email</label>
                    <input type="email" placeholder="Email"/>
                    <label>Confirm Email</label>
                    <input type="email" placeholder="Confirm Email"/>
                    <button type="submit">Signup!!!</button>
                </form>
            </div>
        </>
        );
}