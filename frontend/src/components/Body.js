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
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedIsLoggedIn = localStorage.getItem('isLoggedIn')
    return savedIsLoggedIn ? JSON.parse(savedIsLoggedIn) : false
  });
  const navigate = useNavigate();

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : {username: '', email: ''}
  })

  useEffect(() => {
    if (currentUser.username && currentUser.email){
    localStorage.setItem('currentUser', JSON.stringify(currentUser))}
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username,
      email,
      password
    };
    //Outputs user to console
    console.log(user)
    ////Try is used to handle synchronous errors that might occur in the code within the try block
    try {
      Middleware.register(user).then(
          async (response) => {
            console.log(JSON.stringify(response))
            //Outputs the data from the response to the console.
            // store the user in localStorage
            localStorage.setItem('user', JSON.stringify(response.data))
            console.log(response.data.username)
            // navigate("/")

            setIsLoggedIn(true);
            setCurrentUser(prevState => ({...prevState, username: response.data.username, email: response.data.email}));
            console.log(currentUser)
          }
      )
    }
    catch (error) {
      console.log("Invaild Email or Password", error)
    }
    // Handle form submission here (e.g., authentication)
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const user = {
      email,
      password
    };
    //Outputs user to console
    console.log(user)
    ///Try is used to handle errors that might occur
    try {
      Middleware.login(user).then(
          async (response) =>{
            //Outputs the data from the response to the console
            //navigate("/")
            // window.location.reload();
            setIsLoggedIn(true);
            console.log(response.data, 'response')
            const loggedInUser = response.data;

            setCurrentUser(loggedInUser);
            localStorage.setItem('currentUser', JSON.stringify(loggedInUser))
            navigate("/");
          }
      )
    }
    catch (error) {
      console.log("Invalid Email or Password", error)
    }
    //Handle form submission here (e.g., authentication)
  }

  return (
    <div className="body">


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