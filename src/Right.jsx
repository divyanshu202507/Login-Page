import React from 'react'
import { FaUser, FaLock, FaUserShield } from "react-icons/fa";
import './Right.css'

const Right = () => {
    return (
        <div className='right-side'>
            <h2>Login</h2>
            <form className='form'>

                
                <div className="input-container">
                    <FaUserShield className='icon' />
                    <select name="role" id="role" defaultValue="">
                        <option value="" disabled>Select the role</option>
                        <option value="admin">Admin</option>
                        <option value="student">Student</option>
                    </select>
                </div>

                {/* Username Field */}
                <div className="input-container">
                    <FaUser className='icon' />
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your username" 
                        required 
                    />
                </div>

                {/* Password Field */}
                <div className="input-container">
                    <FaLock className='icon' />
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        required 
                    />
                </div>

                <a href="#">Forgot Password?</a>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default Right
