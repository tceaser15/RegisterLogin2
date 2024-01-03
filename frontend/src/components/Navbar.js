import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export const Navbar = ({
  setResults,
  sorted,
  currentUser,
  isLoggedIn,
  handleLogout,
}) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const fetchData = (value) => {
    fetch('https://example-data.draftbit.com/books?_sort=$(sorted)')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((item) => {
          return (
            value &&
            item &&
            item.title &&
            item.title.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="navbar">
      <nav className="bar">
        <p className="logo">
          <span className="b_logo">B</span>ookmark
        </p>
        {isLoggedIn ? (
          <div className="user-info">
            <p>{currentUser.username}</p>
            <p>{currentUser.email}</p>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button
              className="login-button"
              onClick={() => navigate('/account')}
            >
              Login
            </button>
            )
          </div>
        )}
        <div className="search_bar">
          <input
            className="search"
            type="search"
            id="search"
            onClick={() => navigate(`/collection`)}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <ul>
          <span className="b_logo">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collection">Collection</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
          </span>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
