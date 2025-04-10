import React from 'react';
// import '../LoginFormModal/LoginForm.css'
import './GoogleAuthButton.css'


function GoogleAuthButton({setWaiting}) {

  const BASE_URL="https://tracker-hog5.onrender.com";

  const backendBaseUrl = BASE_URL;

  const oauthLoginUrl = `${backendBaseUrl}/api/google_auth/oauth_login`;


  return (
    <button className="google-auth-btn" type='button' onClick={() =>{
    setWaiting(true);
    window.location.href = oauthLoginUrl}} >
      <img
        className="google-login-icon"
        src="https://img.icons8.com/color/48/000000/google-logo.png"
        alt="Google logo"
      />
      <span className="google-login-text">Login with Google</span>
    </button>
  );
}

export default GoogleAuthButton;
