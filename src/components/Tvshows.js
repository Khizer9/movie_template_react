import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Search from "./Search";
import { useTvShow } from "../context/TvShowContext";
import Footer from "./Footer";

const Tvshows = () => {

  const {data, loading} = useTvShow();
  console.log(data);
  const [filterShow, setFilterShow] = useState([]);

  const handleSearch = (query) => {
    const filter = data.filter(res => res.name.toLowerCase().includes(query.toLowerCase()));
    setFilterShow(filter);
  }

  useEffect(() => {
    if(data){
      setFilterShow(data);
    }
  }, [data]);

  return (
    <>
    <Navbar />
    <div className="App">
      <h1 style={{marginBottom: '40px', marginTop: '40px', fontSize: '36px'}}>TV shows</h1>

      <Search onSearch={handleSearch} style={{
    margin: '30px auto',
    borderColor: 'gray',
    border: '1px solid gray',
    borderRadius: '5px'}}/>

      <div className='movieContainer'>
        {loading ? filterShow.map((show) => (
          <div key={show.id} className='movieItem'>
            <img className='movieImg' src={show.image_thumbnail_path} alt={show.name} />
            <h2 className='title'>{show.name}</h2>
          </div>
        )) : <svg style={{width: '50px', display:'flex', justifyContent: 'center', alignItems:'center'}} className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>}
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Tvshows;
