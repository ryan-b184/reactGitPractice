import React from 'react'
import "./experience.css"
import {ExperienceItem}from "./ExperienceItem"

export const Experience = () => {
  return (
    <section id="experience">
      <h5>Work Experience and Projects</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <ExperienceItem skill="HTML" rating="8/10"/>
            <ExperienceItem skill="CSS" rating="7/10"/>
            <ExperienceItem skill="Javascript" rating="6/10"/>
            <ExperienceItem skill="Bootstrap" rating="6/10"/>
            <ExperienceItem skill="React/Vue/Blazor" rating="6/10"/>
            <ExperienceItem skill="HTML" rating="6/10"/>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            
            <ExperienceItem skill="NodeJS" rating="6/10"/>
            <ExperienceItem skill="SQL" rating="8/10"/>
            <ExperienceItem skill=".NET Core" rating="6/10"/>
            
          </div>
        </div>
      </div>
    </section>
  )
}

