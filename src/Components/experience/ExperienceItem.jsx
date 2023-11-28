import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import "./experience.css"

export function ExperienceItem({skill, rating}) {

    
  return (
    <article className='experience__details'>
        <FaCircleCheck className='experience__details-icon'/>
        <div>
            <h4>{skill}</h4>
            <small className='text-light'>{rating}</small>
        </div>
    </article>
  )
}
