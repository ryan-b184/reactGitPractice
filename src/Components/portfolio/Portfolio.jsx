import React from 'react'
import './portfolio.css'
import { PortfolioCard } from './PortfolioCard'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export const Portfolio = () => {
  return (
    <section className='portfolio__container' id="portfolio">
        <h5>My Project Experience</h5>
        <h2>Portfolio</h2>
        <div className='carousel'>
            <div className='btn arrow__btn arrow__btn-left'>&lt;</div>
            
            <div className='portfolio__cards'>
                <PortfolioCard title="1"/>
                <PortfolioCard title="2"/>
                <PortfolioCard title="3"/>
                
            </div>
            <div className='btn arrow__btn arrow__btn-right'>&gt;</div>
        </div>

    </section>
  )
}
