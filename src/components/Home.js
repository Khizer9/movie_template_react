import React, { useState } from 'react'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import Search from './Search'

const Home = () => {
  const [searchQuery, setSearchQuery] =useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  return (
    <div>
      <Navbar />
      <Search onSearch={handleSearch}/>
      <MovieCard searchQuery={searchQuery}/>
    </div>
  )
}

export default Home
