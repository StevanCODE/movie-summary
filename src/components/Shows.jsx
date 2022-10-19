import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { getShows } from '../services'
import BarChart from 'react-easy-bar-chart';


const Shows = () => {
  const [shows,setShows] = useState([])
  const [ratingData, setRatingData] = useState([{title:'dummy title', value:1, color:'#fff'}])
  useEffect(() => {
    getShows().then(res => setShows(res.slice(0,3)))
  },[])
  const [breakOffPoints,setBreakOffPoints] = useState([])
  useEffect(() => {
    setBreakOffPoints(shows.map(show => ({ showId:show.id,  breakPoint:show.summary.length > 170 ? 170 : show.summary.length, fullSummary: show.summary.length} )))
    if(shows.length > 0){
      setRatingData(shows.map(show => ({title:show.name, value:parseFloat(show.rating.average), color:'#f6e598'})))
    }
  },[shows])

  return (
    <div className='flex flex-col'>
      <ul className='flex flex-col md:flex-row space-y-4 md:space-x-10 md:space-y-0 min-h-[700px]'>
        {shows.map((show,i) => {
          let showSummary = show.summary.replace(/<\/?\w>/g,'')
          return <li key={show.id} className='cursor-pointer'> 
                <Card show={show} showSummary={showSummary} breakPoint={breakOffPoints[i] ? breakOffPoints[i].breakPoint : undefined} fullSummary={breakOffPoints[i] ? breakOffPoints[i].fullSummary : undefined} ></Card>
            </li>
        })}
      </ul>
        <div className='flex flex-col mt-24'>
          <h3 className='text-2xl text-white font-bold mb-4'>Ratings:</h3>
          <div className='bg-white border rounded-xl md:max-w-[50%] md:pr-12 md:pl-6'>
              <BarChart 
              xAxis='Movies (Hover Bar For Info)'
              yAxis="Ratings"
              height={400}
              width={window.innerWidth <= 350 ? 350 : 450}
              data={ratingData}
            />
          </div>
        </div>
    </div>
  )
}

export default Shows