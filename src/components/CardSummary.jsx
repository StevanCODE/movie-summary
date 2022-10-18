import React, { useEffect } from 'react'
import { useState } from 'react'


const CardSummary = ({showSummary, breakPoint, fullSummary}) => {
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
      <p className='leading-6 mb-6 text-center'>{summary}</p>
      <button className='px-4 pt-2 pb-3 bg-[#07092b] text-white font-bold border-max rounded-3xl' onClick={() => handleClick()}>Show {!showMoreClicked ? 'More' : 'Less'}</button>
    </div>
  )
}

export default CardSummary