import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getShows } from '../services'
import { AiOutlineClockCircle } from 'react-icons/ai'
import {MdScheduleSend} from "react-icons/md"
import {BiCalendarEvent} from "react-icons/bi"
import {BiCalendarAlt} from "react-icons/bi"
import { v4 as uuidv4 } from 'uuid';
import Rating from './Rating'



const ShowSummary = () => {
  const [show,setShow] = useState(undefined)
  const [backgroundUrl,setBackgroundUrl] = useState('')
  const params = useParams()
  const showId = parseInt(params.showName.match(/\d+$/)[0])
  useEffect(() => {
    getShows().then(res => setShow(res.length > 0 ? res.find(show => show.id === showId) : undefined))
  },[showId])

  useEffect(() => {
    if(show !== undefined){
      setBackgroundUrl(show.image.original)
    }
  },[show])

  return (
    <>
      <img src={backgroundUrl} className='absolute top-0 bottom-0 overflow-hidden left-0 object-cover object-top w-[100vw] h-[100vh] z-[-1] opacity-10' alt="cover"></img>
      <div className='px-4 md:px-24 z-20'>
        {show !== undefined ?
        <div className='flex flex-col md:max-w-[50%] space-y-5 leading-8 font-serif text-[18px] text-white'>
          <h2 className='text-white text-5xl font-serif'>{show.name}</h2>
          <div className='flex flex-col md:flex-row items-start md:items-center md:space-x-4'>
            <Rating rating={show.rating.average}/>
            <p>{show.rating.average} (Average)</p>
          </div>
          <div className='flex justify-start'>
            {show.genres.map(genre => <div key={uuidv4()} className='text-[12px] md:text-[18px] mr-2 md:mr-4 px-2 py-1 md:px-3 md:py-2 bg-[#f6e598] text-white font-bold rounded-3xl text-[#020317]'>{genre}</div>)}
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
          <Link to='/' className='z-50 text-white px-16 py-1 cursor-pointer border border-white max-w-min uppercase text-xl'> Back </Link>
        </div>
        : <p className='text-white'>Waiting for Response</p>}
      </div>
    </>

  )
}

export default ShowSummary