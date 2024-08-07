// src/pages/UserData.js
import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const UserData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const session = supabase.auth.session();
      if (session) {
        const { data: userData, error } = await supabase.from('users').select('*').eq('id', session.user.id).single();
        if (error) {
          console.error('Error fetching user data:', error);
        } else {
          setUser(userData);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>User Data</h2>
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserData;
