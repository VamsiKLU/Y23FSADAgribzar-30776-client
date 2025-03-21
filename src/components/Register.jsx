import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Register</h2>
                <form>
                    <input type="text" placeholder="Username" className="form-input" required />
                    <input type="email" placeholder="Email" className="form-input" required />
                    <input type="password" placeholder="Password" className="form-input" required />
                    <button type="submit" className="form-button">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
