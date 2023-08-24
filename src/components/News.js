import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import Search from './Search';

const News = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState([])

  const handleSearch = (query) => {
    const filter = data.filter(news => news.title.toLowerCase().includes(query.toLowerCase()))
    setFilter(filter)
  }

  useEffect(() => {
    if(data){
      setFilter(data)
    }
  }, [data])

  useEffect(() => {
      axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f34d3502e8bb4152b75e4e9964e04293')
      .then((res) => {
        console.log(res.data.articles, "news res")
        setData(res.data.articles)
        setLoading(true)
      })
  }, []);


  return (
<>
        <Navbar />
        <Search onSearch={handleSearch}/>

        <div className='App'>
  <h1 style={{marginBottom: '20px', marginTop: '40px', fontSize: '36px'}}>News</h1>
        <div style={{margin: '50px 0px'}} className='movieContainer'>
          {loading ? filter.map((news)=> (
            <div className='movieItem'>
              <img className='movieImg' src={news.urlToImage} alt="newImg" />
              <h2 className='title'>{news.title}</h2>
            </div>
          )
            
          ) : <svg style={{width: '50px', display:'flex', justifyContent: 'center', alignItems:'center'}} className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>}
        </div>
    </div>
    </>
  )
}

export default News
