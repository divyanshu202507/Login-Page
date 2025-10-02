import React, { useState } from 'react'
import { FaUser, FaLock, FaUserShield, FaUserGraduate } from "react-icons/fa";
import './Right.css'

const Right = () => {
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) {
      alert("Please select a role before signing in!");
      return;
    }

    const formData = {
      role: e.target.role.value,
      email: e.target.email.value,
      password: e.target.password.value
    };
    console.log(formData); // send to backend
  };

  return (
    <div className='right-side'>
      <h2>Login</h2>
      <form className='form' onSubmit={handleSubmit}>

        {/* Role Selection */}
        <div className="role-selection">
          <button
            type="button"
            className={`role-btn admin ${role === "admin" ? "active" : ""}`}
            onClick={() => setRole("admin")}
          >
            <FaUserShield className="role-icon" /> 
            <span>Admin</span>
          </button>

          <button
            type="button"
            className={`role-btn student ${role === "student" ? "active" : ""}`}
            onClick={() => setRole("student")}
          >
            <FaUserGraduate className="role-icon" /> 
            <span>Student</span>
          </button>
        </div>

        {/* Hidden input so role is submitted */}
        <input type="hidden" name="role" value={role} />

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
        
        {/* Disable button until role is chosen */}
        <button type="submit" disabled={!role}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default Right;
