// import React, { useState } from 'react';
// import '../css/login.css';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here (e.g., API calls)
//     console.log('Email:', email, 'Password:', password);
//     if (email === 'test@gmail.com' && password === '123') {
//       navigate('/home'); // Navigate to ListenandLearnPage
//   } else {
//       console.log('Invalid credentials');// Handle invalid login
//   }
    
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2 className="login-title">EduCare Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import '../css/login.css';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       console.log('Attempting login with:', { Name: name, PASS: password }); // Log for debugging

//       const response = await fetch('http://localhost:5000/api/student/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ Name: name, PASS: password }),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed. Invalid credentials.');
//       }

//       const data = await response.json();
//       console.log('Login successful:', data);
//       navigate('/home');

//     } catch (error) {
//       console.error('Error:', error.message);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2 className="login-title">EduCare Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import '../css/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log('Attempting login with:', { Name: name, PASS: password }); // Debug: Logging input values

  //     const response = await fetch('http://localhost:5000/api/student/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ Name: name, PASS: password }),
  //     });

  //     console.log('Response status:', response.status); // Debug: Log response status

  //     if (!response.ok) {
  //       throw new Error('Login failed. Invalid credentials.');
  //     }

  //     const studentData = await response.json();
  //     console.log('Student data received:', studentData); // Debug: Log the received data

  //     // Navigate to HomePage with student details passed as state
  //     navigate('/home', {
  //       state: {
  //         studentName: studentData.Name,
  //         studentAge: studentData.AGE,
  //       },
  //     });

  //   } catch (error) {
  //     console.error('Error during login:', error.message); // Debug: Log error message
  //     alert(error.message);
  //   }
  // };
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log('Attempting login with:', { Name: name, PASS: password }); // Debug
  
  //     const response = await fetch('http://localhost:5000/api/student/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ Name: name, PASS: password }),
  //     });
  
  //     console.log('Response status:', response.status); // Debug
  
  //     if (!response.ok) {
  //       throw new Error('Login failed. Invalid credentials.');
  //     }
  
  //     const responseData = await response.json();
  //     console.log('Student data received:', responseData); // Debug
  
  //     const student = responseData.student;
  //     if (!student) {
  //       throw new Error('Student data is missing from response.');
  //     }
  
  //     console.log('Extracted student details:', student); // Debug
  
  //     navigate('/home', {
  //       state: {
  //         studentName: student.Name,
  //         studentAge: student.AGE,
  //       },
  //     });
  
  //   } catch (error) {
  //     console.error('Error during login:', error.message); // Debug
  //     alert(error.message);
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Attempting login with:', { Name: name, PASS: password });
  
      const response = await fetch('http://localhost:5000/api/student/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Name: name, PASS: password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed. Invalid credentials.');
      }
  
      const data = await response.json();
      console.log('Login successful:', data);
  
      // Pass the entire student object to HomePage
      navigate('/home', { state: { student: data.student } });
  
    } catch (error) {
      console.error('Error:', error.message);
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">EduCare Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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


