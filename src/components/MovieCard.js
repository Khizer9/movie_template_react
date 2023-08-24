import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { useEffect, useState } from 'react';

const MovieCard = ({ searchQuery }) => {

    const {data, loading} = useData();
    const [filteredMovie, setFilteredMovie] = useState([])

    useEffect(()=> {
        if(loading && data){
            const filter = data.filter(movie => movie.Title.toLowerCase().includes(searchQuery.toLowerCase()))
            setFilteredMovie(filter)
        }
    }, [data, loading, searchQuery])

  return (
    <>
    <div className='cards grid grid-cols-4 gap-4'>
  {loading ? filteredMovie.map((res) => (
    <Link to='/' className="group relative block bg-black">
      <img
        alt={res.Title}
        src={res.Poster}
        className="img absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          {res.Type}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">{res.Title}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
              {res.Year}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )): <svg style={{width: '50px'}} className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>}
</div>
    </>
  )
}

export default MovieCard
