// frontend/src/GoogleAuthCallback.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (code) {
      console.log('Authorization Code:', code);
      // Send the code to your backend for processing
      fetch('/api/auth/google/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(err.message || 'Google authentication failed on the backend.');
          });
        }
        return response.json();
      })
      .then(data => {
        // Data should contain your JWT or session information
        console.log('Backend Response:', data);
        localStorage.setItem('authToken', data.token); // Store the JWT
        navigate('/'); // Redirect to your main application
      })
      .catch(error => {
        console.error('Error during Google authentication:', error);
        navigate('/login-failed'); // Redirect to a login failed page
      });
    } else {
      console.error('No authorization code received from Google.');
      navigate('/login-failed');
    }
  }, [navigate]);

  return <div>Processing Google Login...</div>;
};

export default GoogleAuthCallback;