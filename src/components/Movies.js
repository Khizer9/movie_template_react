// import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
// import axios from "axios";
import { useData } from "../context/DataContext";
import Search from "./Search";
import { useEffect, useState } from "react";
import Footer from "./Footer";

const Movies = () => {

  const {data, loading} = useData();
  const [filteredMovie, setFilteredMovie] = useState([]);

  useEffect(()=> {
    if(data){
      setFilteredMovie(data)
    }
   }, [data])

  const handleSearch =(query) => {
    const filter = data.filter(movie => movie.Title.toLowerCase().includes(query.toLowerCase()))
    setFilteredMovie(filter);
  } 

    return (
      <>
      <Navbar />
      <div className='App'>
  <h1 style={{ marginBottom: "40px", marginTop: "40px", fontSize: "36px" }}>Movies</h1>
      
      <Search onSearch={handleSearch} style={{
    margin: '40px auto',
    borderColor: 'gray',
    border: '1px solid gray',
    borderRadius: '5px'}}/>

  {loading ?   
    <div className='movieContainer'>
      {filteredMovie.map((res, index) => (
        <div key={index} className='movieItem'>
          <img className='movieImg' src={res.Poster} alt="movieImg" />
          <h2 className='title'>{res.Title}</h2>
          <h4 className='title'>Year: {res.Year}</h4>
          <h4 className='title'>Type: {res.Type}</h4>
        </div>
      ))}
    </div> 
    : 
    <div className='loadingIcon'>
      <svg style={{width: '50px', display:'flex', justifyContent: 'center', alignItems:'center'}} className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    </div>}
</div>
<Footer />
  </>
    )
};

export default Movies;
