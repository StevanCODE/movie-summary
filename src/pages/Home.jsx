import React from 'react'
import Shows from '../components/Shows'

const Home = ({shows}) => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-3xl font-black mb-12 text-white'>TV SHOWS</h2>
      <Shows/>
    </div>
  )
}

export default Home