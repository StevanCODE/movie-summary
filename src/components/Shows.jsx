import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { getShows } from '../services'

const Shows = () => {
  const [shows,setShows] = useState([])
  useEffect(() => {
    getShows().then(res => setShows(res.slice(0,3)))
    console.log(shows)
  },[])
  const [breakOffPoints,setBreakOffPoints] = useState([])
  useEffect(() => {
    setBreakOffPoints(shows.map(show => ({ showId:show.id,  breakPoint:show.summary.length > 170 ? 170 : show.summary.length, fullSummary: show.summary.length} )))
  },[shows])

  return (
    <ul className='flex flex-col md:flex-row space-y-4 md:space-x-10 md:space-y-0'>
    {shows.map((show,i) => {
      let showSummary = show.summary.replace(/<\/?\w>/g,'')
      return <li key={show.id} className='cursor-pointer'> 
            <Card show={show} showSummary={showSummary} breakPoint={breakOffPoints[i] ? breakOffPoints[i].breakPoint : undefined} fullSummary={breakOffPoints[i] ? breakOffPoints[i].fullSummary : undefined} ></Card>
        </li>
    })}
    </ul>
  )
}

export default Shows