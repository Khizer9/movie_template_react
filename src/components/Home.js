import React, { useState } from 'react'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import Search from './Search'
import NewsCard from './NewsCard'
import TvShowCard from './TvShowCard'
import Footer from './Footer'

const Home = () => {
  const [searchQuery, setSearchQuery] =useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  return (
    <div>
      <Navbar />
      <Search onSearch={handleSearch} style={{width: '30%', 
    margin: '50px auto',
    borderColor: 'gray',
    border: '1px solid gray',
    borderRadius: '5px'}}/>
    <h1 className='mainTitle'>Movies</h1>
      <MovieCard searchQuery={searchQuery}/>
      <h1 className='mainTitle'>News</h1>
      <NewsCard searchQuery={searchQuery}/>
      <h1 className='mainTitle'>TV Shows</h1>
      <TvShowCard searchQuery={searchQuery}/>

      <Footer />

    </div>
  )
}

export default Home
