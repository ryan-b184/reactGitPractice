import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ryan-byspalko-024134200/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/ryan-b184" target='_blank'><FaGithub /></a>
    </div>
  )
}
