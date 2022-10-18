import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ShowDetails = () => {
  const params = useParams()
  const showId = params.showName.match(/\d+$/)[0]
  console.log(showId)

  return (
    <div>ShowDetails</div>
  )
}

export default ShowDetails