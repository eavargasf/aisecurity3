// src/pages/Login.js
import React, { useState } from 'react';
import supabase from '../supabaseClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    if (error) {
      console.error('Error logging in:', error.message);
    } else {
      console.log('User logged in:', user);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <img src="/login-image.jpg" alt="Login" />
      </div>
      <div>
        <h2>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
