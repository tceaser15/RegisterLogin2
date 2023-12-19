import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { BOOK_DETAILS_URL } from "./API";
import axios from 'axios';
import "./bookdetails.css";
//import "./styles.css"



const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();



  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="book_details_container">

     

      <div className="book_details_body">

        <div className="book_details_image">
          <img src={book?.image_url} alt="#" />
        </div>

        <div className="book_details_content">
        <div className="book_details_header">
        {book?.title}
      </div>

          <div className="section">
            <span className="book_info">by: </span>
            <span className="book_info">{book?.authors}</span>
          </div>
          <br /> <br /><br />


          <div className="section">
            <span className="section_header">Genres: </span>
            <span className="book_info">{book?.genres}</span>
          </div>

          <div className="section">
            <span className="section_header">Num of pages: </span>
            <span className="book_info">{book?.num_pages}</span>
          </div>

          <div className="section">
            <p className="section_header"  >Description: </p>
            <span className="book_info" >{book?.description}</span>
          </div>

        </div>

      </div>

      
    </div>
  )
}

export default BookDetails















