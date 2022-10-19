import React from 'react'
import Shows from '../components/Shows'

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center justify-between w-[15rem] max-w-[15rem] mb-12'>
        <img src='/tvicon.png' alt='tv-icon' className='max-w-[3rem]'></img>
        <h2 className='text-3xl font-black text-white'>TV SHOWS</h2>
      </div>
      <Shows/>
    </div>
  )
}

export default Home