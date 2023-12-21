import React, { useState } from 'react';
import './account.css';


const Account = ({
  handleLogin,
  handleSubmit,
  currentUser,
  isLoggedIn,
  onUsernameChange,
  onPasswordChange,
  onEmailChange,
}) => {
  const [action, setAction] = useState('');


  return (
    <div className="account_container">
      <div className="account_header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className="input">
            <input
              onChange={(e) => {
                onUsernameChange(e.target.value);
              }}
              type="name"
              placeholder=" Name"
            />
          </div>
        )}

        <div className="input">
          <input
            onChange={(e) => {
              onEmailChange(e.target.value);
            }}
            type="email"
            placeholder=" Email"
          />
        </div>
        <div className="input">
          <input
            onChange={(e) => {
              onPasswordChange(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      {action === 'Sign Up' ? (
        <div></div>
      ) : (
        <div className="forgot-password">
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={(event) => {
            handleSubmit(event);
            setAction('Submit');
          }}
        >
          Register
        </div>
        {/*<div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>*/}
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={(event) => {
            handleLogin(event);
            setAction('Login');
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Account;
