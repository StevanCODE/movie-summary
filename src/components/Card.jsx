import React from 'react'
import { Link } from 'react-router-dom'
import CardSummary from './CardSummary'

const Card = ({show, showSummary, breakPoint, fullSummary}) => {
  return (
    <div className='flex flex-col space-y-2 items-center justify-start max-w-[450px] text-white border rounded-lg shadow-lg shadow-[#f6e598] border-[#f6e598] p-4 hover:shadow-xl hover:shadow-[#f6e598] hover:-translate-y-1'>
      <Link to={`/shows/${show.name.toLowerCase().replace(/\s/g,'-')}-${show.id}`}> 
        <img src={show.image.medium} alt={show.name}/>
        <h2 className='text-2xl font-[600] text-center mt-2'>{show.name}</h2>
      </Link>
      <CardSummary showSummary={showSummary} breakPoint={breakPoint} fullSummary={fullSummary}/>
  </div>
  )
}

export default Card
