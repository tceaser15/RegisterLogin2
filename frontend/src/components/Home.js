import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import "./Home.css"



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const Home = () => {

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();


  useEffect((e) => {
    axios
      .get("https://example-data.draftbit.com/books?_limit=50")
      .then((res) => {
        console.log("???", res.data);
        setBooks(res.data);

      })
      .catch((err) => console.log(err));
  }, []);

  const filterById = ([id]) => {
    return books.filter((item) => (item.id === 4) ||(item.id === 12) || (item.id === 7)||(item.id === 6) ||(item.id === 25) || (item.id === 2) );
 };
 const filteredData = filterById([10,4]);


  return (


    <div className="home_container">
      <div className='wrapper'>
        <div className="text">
          <p>
          </p>

        </div>
      </div>

      <div className="featured">
       <h2> Featured Books</h2>

       

        <Carousel showDots={true} responsive={responsive}>

          {
            filteredData.map((book) => {

              return    <div className="card" key={book.id}>
                    <img src={book.image_url} alt="#" onClick={() => navigate(`/book/${book.id}`)}
/>
                    <h2>{book.title}</h2>
                  </div>               
            })
          }
                     




        </Carousel>


      </div>

    </div>


  )
}

export default Home