import React from 'react'
import './portfolio.css'
export function PortfolioCard({title}) {
  return (
    <article className='portfolio__card'>
        <h2>{title}</h2>
        <img src="https://www.codingdojo.com/blog/wp-content/uploads/react.jpg" alt=""/>
        <small>this is a project example</small>
    </article>
  )
}
