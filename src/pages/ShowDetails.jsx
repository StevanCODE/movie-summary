import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getShows } from '../services'
import { AiOutlineClockCircle } from 'react-icons/ai'
import {MdScheduleSend} from "react-icons/md"
import {BiCalendarEvent} from "react-icons/bi"
import {BiCalendarAlt} from "react-icons/bi"
import { v4 as uuidv4 } from 'uuid';
import Rating from '../components/Rating'



const ShowDetails = () => {
  const [show,setShow] = useState(undefined)
  const [backgroundUrl,setBackgroundUrl] = useState('')
  const params = useParams()
  const showId = parseInt(params.showName.match(/\d+$/)[0])
  useEffect(() => {
    getShows().then(res => setShow(res.length > 0 ? res.find(show => show.id === showId) : undefined))
  },[])

  useEffect(() => {
    if(show != undefined){
      setBackgroundUrl(show.image.original)
    }
  },[show])

  return (
    <>
      <img src={backgroundUrl} className='absolute top-0 bottom-0 left-0 object-cover object-top w-[100vw] h-[100vh] z-0 opacity-10'></img>
      <div className='px-24 z-20'>
        {show !== undefined ?
        <div className='flex flex-col max-w-[50%] space-y-5 leading-8 font-serif text-[18px] text-white'>
          <h2 className='text-white text-5xl font-serif'>{show.name}</h2>
          <div className='flex items-center space-x-4'>
            <Rating rating={show.rating.average}/>
            <p>{show.rating.average} (Average)</p>
          </div>
          <div className='flex justify-start'>
            {show.genres.map(genre => <div key={uuidv4()} className='mr-4 px-3 py-2 bg-[#f6e598] text-white font-bold rounded-3xl text-[#020317]'>{genre}</div>)}
          </div>
          <div className='space-y-5'>
            <p>{show.summary.replace(/<\/?\w>/g,'')}</p>
            <div className='flex space-x-4 items-center'>
              <AiOutlineClockCircle className='text-white text-3xl'/>
              <p>{show.runtime} Minutes</p>
            </div>
            <div className='flex space-x-4 items-center'>
              <MdScheduleSend className='text-white text-3xl'/>
              <p>Schedule: {show.schedule.time}</p>
              {show.schedule.days.map(day => <p className='mr-2' key={uuidv4()}>{day}</p>)}
            </div>
            <div className='flex space-x-4 items-center'>
              <BiCalendarEvent className='text-white text-3xl'/>
              <p>Premiered: {show.premiered} </p>
            </div>
            <div className='flex space-x-4 items-center'>
              <BiCalendarAlt className='text-white text-3xl'/>
              <p>Ended: {show.ended} </p>
            </div>
          </div>
        </div>
        : <p className='text-white'>Waiting for Response</p>}

      </div>
    </>

  )
}

export default ShowDetails