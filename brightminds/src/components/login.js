import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'; // Ensure to import your CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password }); // Log the input values

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log('Response:', response); // Log the response object

      if (response.ok) {
        const teacherData = await response.json(); // Parse the response data
        localStorage.setItem('teacherEmail', teacherData.email); // Correctly save the email
        console.log('Fetching students for teacher:', teacherData);
        console.log('Logged in successfully:', teacherData); // Log teacher data

        // Redirect to the home page after successful login
        navigate('/home'); 
      } else {
        const errorData = await response.json(); // Parse the error response
        console.log('Error response:', errorData);
        alert('Invalid credentials, please try again.'); // Alert for invalid credentials
      }
    } catch (error) {
      console.error('Login error:', error); // Log any error that occurs
      alert('An error occurred while logging in.'); // Alert for general errors
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">EduCare Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
