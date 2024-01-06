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
                    <div>
                        <p>
                            My name is Ryan Byspalko, I earned my diploma at Saskatchewan Polytechnic after a two year course in the
                            <a href="" target='_blank'> Computer Systems and Technologies</a> course (CST).
                            Throughout my education, I have aquired many useful skills that Have been very useful for my career. 
                            During my projects class, I learned the skills and process to effectively work in a team using the Agile approach.
                            My team utalized pair programing to speed up the documentation process and to gurantee a polished section
                            of code that is easly readable.
                        </p>
                    </div>
                    <a href="#contact" className='btn btn-primary'>Contact Me</a>
                </div>

            </div>
        </section>
    )
}