import React from 'react'
import "./contact.css"

const ContactOption = ({title, link, icon, desc }) => {
  return (
    <div className='contact__option'>
        <div className='contact__icon'>{icon}</div>
        <h4 className='contact__title'>{title}</h4>
        <h5 className='contact__desc'>{desc}</h5>
        <a href={link} target='_blank' className='contact__link'>Send a message</a>
    </div>
  )
}

export default ContactOption