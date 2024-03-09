'use client'
import React, { useEffect, useState } from 'react';
import '../login/page.css';
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
    useEffect(()=>{
        AOS.init({duration:1000, once:true})
    },[])
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const handleReset = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            <div className="login-container" data-aos="zoom-in">
                <h2>Login</h2>
                <div className="underline"></div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">
                            <FaUser className="fa-user" />
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group password-input-group">
                        <label htmlFor="password">
                            <FaLock className='fa-lock' />
                            Password:
                        </label>
                        <div className="password-input-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className="eye-icon" /> : <FaEye className="eye-icon" />}
                            </span>
                        </div>
                    </div>
                    <p className="forgot-password">Forgot password?</p>
                    <div className="button-group">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
