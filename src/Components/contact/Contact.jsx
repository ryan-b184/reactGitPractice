import React from 'react'
import './contact.css'
import ContactOption from './ContactOption'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {

  return (
    <section id="contact">
      <h5>Contact Me</h5>
      
      <div className="container contact__container">
        <div className="contact__options">
          <ContactOption title="Email" icon={<MdEmail/>} desc="rbyspalko@gmail.com" link="mailto:rbyspalko@gmail.com"/>
          <ContactOption title="Phone" icon={<FaPhoneAlt/>} desc="1303-250-9922" link="tel:306-250-9922"/>
          <ContactOption title="LinkedIn" icon={<FaLinkedin/>} desc="DM me on LinkedIn" link="https://www.linkedin.com/in/ryan-byspalko-024134200/"/>
        </div>
        <form action="">
          <input type="text" name="name" placeholder='Enter Full Name' required />
          <input type="email" name="email" placeholder='Enter Email' required />
          <textarea name='message' rows='7' placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact