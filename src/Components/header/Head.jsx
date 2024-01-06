import React from 'react'
import './head.css'
import { Socials } from './Socials'
import { FaFileDownload } from "react-icons/fa";

export const Head = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ryan Byspalko</h1>
        <h5 className='text-light'>Developer</h5>
 
        <div className='flexCont'>
          <Socials></Socials>
          <div className='buttons'>
            <a href="#contact" className='btn'>Contact Me</a>
            <a href="" className='btn btn-primary'><FaFileDownload /> Resume</a>
          </div>

          
          <a href="#contact" className="scroll__btn">Scroll Down</a>
        </div>
      </div>
    </header>
  )
}
