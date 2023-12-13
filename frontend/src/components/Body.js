import React, {useState} from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Cols from "./Cols";
import Account from "./Account";
import Navbar from "./Navbar"
import BookDetails from "./BookDetails";

import "./Navbar.css";
import "./body.css";

const Body = () => {


  const [results, setResults] = useState([]);
  const [sorted, setSorted] = useState("");

  return (
    <div className="body">


    <Navbar  setResults={setResults} sorted={sorted}/>
    

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/collection" element={<Cols results={results} sorted={sorted} setSorted={setSorted}/>}/>  
    <Route path="/account" element={<Account />}/>  
    <Route path="/book/:id" element={<BookDetails />}/>  


   
    </Routes>

    </div>

    )
}

export default Body