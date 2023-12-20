import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from "./Home";
import Cols from "./Cols";
import Account from "./Account";
import Navbar from "./Navbar"
import BookDetails from "./BookDetails";

import "./Navbar.css";
import "./body.css";
import Middleware from "./Middleware";

const Body = () => {


  const [results, setResults] = useState([]);
  const [sorted, setSorted] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedIsLoggedIn = localStorage.getItem('isLoggedIn')
    return savedIsLoggedIn ? JSON.parse(savedIsLoggedIn) : false
  });
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : {username: '', email: ''}
  })

  useEffect(() => {
    if (currentUser.username && currentUser.email) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn))
  }, [isLoggedIn]);


  console.log(currentUser, isLoggedIn, "here is current User");

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };


  const handleLogout = (event) => {
    event.preventDefault();

    setIsLoggedIn(false);
    setCurrentUser({username: '', email: ''})
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
    localStorage.removeItem('currentUser')
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = {
        username,
        email,
        password
      };

      const response = await Middleware.register(user);

      setIsLoggedIn(true);
      setCurrentUser(prevState => ({...prevState, username: response.data.username, email: response.data.email}));
      localStorage.setItem('currentUser', JSON.stringify(response.data));

      setSuccessMessage('Signup Successful!')

      navigate("/")


    } catch (error) {
      setError("Invalid Email or Password");
      console.error("Registration Error:", error);
      setTimeout(() =>{
        setError("");
      }, 5000);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = {
        email,
        password
      };

      const response = await Middleware.login(user);

      setIsLoggedIn(true);
      const loggedInUser = response.data;
      setCurrentUser(loggedInUser);
      localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
      setSuccessMessage('Login Successful!')
      navigate("/");

    } catch (error) {
      setError("Invalid Email or Password");
      console.error("Login Error:", error);
      setTimeout(() =>{
        setError("");
      }, 5000);
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 5000); // Display the success message for 5 seconds (adjust as needed)

      return () => clearTimeout(timer);
    }
  }, [successMessage]);


  return (
    <div className="body">

      {/* ... */}
      {error && (
          <div className="error-popup">
            <p>{error}</p>
            <button onClick={handleCloseError}>Close</button>
          </div>
      )}
      {/*...*/}

      {/* ... */}
      {successMessage && (
          <div className="success-popup">
            <p>{successMessage}</p>
          </div>
      )}
      {/* ... */}


    <Navbar  setResults={setResults} sorted={sorted} isLoggedIn={isLoggedIn} currentUser={currentUser} handleLogout={handleLogout}/>


    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/collection" element={<Cols results={results} sorted={sorted} setSorted={setSorted}/>}/>
    <Route path="/account" element={<Account   handleLogin={handleLogin}
                                               handleSubmit={handleSubmit}
                                               currentUser={currentUser}
                                               isLoggedIn={isLoggedIn}
                                               onUsernameChange={handleUsernameChange}
                                               onPasswordChange={handlePasswordChange}
                                               onEmailChange={handleEmailChange}/>}/>
    <Route path="/book/:id" element={<BookDetails />}/>



    </Routes>

    </div>

    )
}

export default Body