import React from 'react'
import './portfolio.css'



export function PortfolioCard({title, titleLink,imgSrc, imgAlt, skills, desc}) {
  
  //map funciton used to turn the list of strings into a bunch of li tags
  const displaySkills = skills?.map((item) => <li><h4>{item}</h4></li>);
  
  return (
    <article className='portfolio__card'>
        <div>
          <h2><a href={titleLink} target="_blank">{title}</a></h2>
          <img src={imgSrc} alt={imgAlt}/>
          <small>{desc}</small>
        </div>
        <div className='portfolio__skills'>
          <h2>skills learned</h2>
          <ul>
            {displaySkills}
          </ul>
        </div>
    </article>
  )
}
