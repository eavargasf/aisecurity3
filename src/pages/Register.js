// src/pages/Register.js
import React, { useState } from 'react';
import supabase from '../supabaseClient';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      console.error('Error registering:', error.message);
    } else {
      console.log('User registered:', user);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <img src="/register-image.jpg" alt="Register" />
      </div>
      <div>
        <h2>Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Register;

