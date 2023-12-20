import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import "./cols.css";



const Cols = ({ results, sorted, setSorted }) => {

  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState([]);  
  const navigate = useNavigate();
  

  useEffect((e) => {

    fetchData();
  }, );

  

  
 const fetchData = async () => {
  const response = await  fetch("https://example-data.draftbit.com/books?_sort=$(sort)")

  const data = await response.json();
  setBooks(data);
};






  
  return (
    <div className="collection_container">
      <div className="collection_header">
        <h1>Collection</h1>
      </div>

      <div className="body_area">
        <div className="filter_container">
          <div className="sort_list">
            <h2 className="side_bar_header">Genres</h2>
            <div className="filter_dropdown">
              <label className="sidebar_label_container">
                <input
                  type="radio"
                  name="test"
                  value=""
                  onClick={(e) => setCategory(e.target.value)}
                />
                <span className="checkmark">All</span>
              </label>

             

              <label className="sidebar_label_container">
                <input
                  type="radio"
                  name="test"
                  value="Fantasy"
                  onClick={(e) => setCategory(e.target.value)}
                />
                <span className="checkmark">Fantasy</span>
              </label>

              <label className="sidebar_label_container">
                <input
                  type="radio"
                  name="test"
                  value="Science Fiction"
                  onClick={(e) => setCategory(e.target.value)}
                />
                <span className="checkmark">Science Fiction</span>
              </label>

              <label className="sidebar_label_container">
                <input
                  type="radio"
                  name="test"
                  value="Classics"
                  onClick={(e) => setCategory(e.target.value)}
                />
                <span className="checkmark">Classics</span>
              </label>

              <label className="sidebar_label_container">
                <input
                  type="radio"
                  name="test"
                  value="Childrens"
                  onClick={(e) => setCategory(e.target.value)}
                />
                <span className="checkmark">Childrens</span>
              </label>

              <label className="sidebar_label_container">
                <input
                  type="radio"
                  name="test"
                  value="Young Adult"
                  onClick={(e) => setCategory(e.target.value)}
                />
                <span className="checkmark">Young Adult</span>
              </label>

             
            
            </div>
          </div>
        </div>

        <div className="content_area">
          <div className="book_list"></div>
          {results == '' ? (
            <div>
              <div className="book_list">
                {books.map((book) =>
                  book.genre_list?.includes(category) === true ? (
                    <div className="books" key={book.id}>
                      <h2>{book.title}</h2>
                      <img
                        src={book.image_url}
                        alt="#"
                        onClick={() => navigate(`/book/${book.id}`)}
                      />
                      <button>Read More</button>
                    </div>
                  ) : (
                    <></>
                  ),
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className="book_list">
                {results.map((result) =>
                  result.genre_list?.includes(category) === true ? (
                    <div key={result.id} className="books">
                      <h2>{result.title}</h2>
                      <img
                        src={result.image_url}
                        alt="#"
                        onClick={() => navigate(`/book/${result.id}`)}
                      />
                      <button>Add to Favorites</button>
                    </div>
                  ) : (
                    <></>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

}










export default Cols;