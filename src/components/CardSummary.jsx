import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const CardSummary = ({showLink,showSummary, breakPoint, fullSummary}) => {
  const [showMoreClicked,setShowMoreClicked] = useState(false)
  const [summary,setSummary] = useState(showSummary)
  useEffect(() => {
    if(!showMoreClicked && breakPoint !== undefined){
      setSummary(`${showSummary.slice(0,breakPoint)}...`)
    }
    else if(showMoreClicked && fullSummary !== undefined){
      setSummary(showSummary.slice(0,fullSummary))
    }
  },[showMoreClicked,breakPoint,fullSummary,showSummary])
  const handleClick = () => {
    setShowMoreClicked(!showMoreClicked)
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <Link to={showLink}> <p className='leading-6 mb-6 text-center'>{summary}</p></Link>
      <button className='px-4 pt-2 pb-3 bg-[#f6e598] text-white font-bold rounded-3xl text-[#020317]' onClick={() => handleClick()}>Show {!showMoreClicked ? 'More' : 'Less'}</button>
    </div>
  )
}

export default CardSummary