import React, { useState } from 'react';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here (API call or local check)
    const user = { username };  // Example user object, you may fetch more info here

    // Store the user session in localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Set user state
    setUser(user);

    // Redirect to the profile or home page
    window.location.href = '/userProfile';
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
