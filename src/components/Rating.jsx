import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';


const starArray = [...Array(10).keys()].map(i => i + 1);

const Rating = ({ rating }) =>
 <div className='flex space-x-1'>
  {starArray.map(i => ( // use many times
    <FontAwesomeIcon
      key={uuidv4()}
      icon={faStar}
      color={rating >= i ? "yellow" : "lightgrey"}
    />
  ))}
 </div>
;
export default Rating