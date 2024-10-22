import React from 'react'
import './heading.css'

const Heading = ({text1, text2}) => {
  return (
   <>
   <div className="heading">
   <h1>{text1} <span>{text2}</span></h1>

   </div>
   </>
  ) 
}

export default Heading