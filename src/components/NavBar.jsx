import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-20 bg-[#f6e598] h-[70px] max-h-[70px] mb-12 z-0'>
      <Link to='/' className='text-white font-bold text-2xl text-[#020317] flex items-center space-x-4 z-20'>
        <img src="https://img.freepik.com/free-vector/cinema-film-festival-movie-poster-background_1017-33461.jpg?w=2000" alt='movie camera' className='max-h-[70px]'></img>
        <p>Home</p>
      </Link>
      
    </div>
  )
}

export default NavBar