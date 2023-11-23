import React from 'react'
import './about.css'
import { IoRibbon } from "react-icons/io5";
import { FaList } from "react-icons/fa"; 
import { FaGraduationCap } from "react-icons/fa";

export default function About(){
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h1>About Me</h1>

            <div className='container about__container'>
                <div className='about__me'>
                    {/* div for an image */}
                    <div className="about__me-image">
                        <img src="https://www.codingdojo.com/blog/wp-content/uploads/react.jpg" alt=""/>
                    </div>
                </div>

                <div className='about__content'>
                    {/* div for cards */}
                    <div className='about__cards'>
                        <article className='about__card'>
                            <IoRibbon className='about__icon'/>
                            <h5>Work Experience</h5>
                            <small>1 Year Experience in Python, Tensorflow, and SKLearn</small>
                        </article>
                        <article className='about__card'>
                            <FaGraduationCap className='about__icon'/>
                            <h5>Education</h5>
                            <small>Diploma from SaskPolytech's CST Program</small>
                        </article>
                        <article className='about__card'>
                            <FaList className='about__icon'/>
                            <h5>My Ideals</h5>
                            <ul>
                                <li><small>Clean and Commented Code</small></li>
                                <li><small>Consistant Code Style</small></li>
                                <li><small>Effective Documentation</small></li>
                            </ul>
                        </article>
                    </div>

                    {/* div for paragraphs and buttons */}
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of 
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                    <a href="#contact" className='btn btn-primary'>Contact Me</a>
                </div>

            </div>
        </section>
    )
}