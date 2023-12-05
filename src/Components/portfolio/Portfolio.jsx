import React, { useState } from 'react'
import './portfolio.css'
import { PortfolioCard } from './PortfolioCard'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export const Portfolio = () => {

  //this list contains all the the portfolio cards to be displayed
  var portCards = [
    PortfolioCard({
      title:"Blazor Scheduling Project", 
      titleLink: "https://github.com/ryan-b184/CSTProject",
      imgSrc:"https://www.codingdojo.com/blog/wp-content/uploads/react.jpg", 
      imgAlt:"", 
      skills: [".NET","BUnit","NUnit","Selenium","C#","SQLite", "Components", "Frontend", "Backend"],
      desc: "This project utalizes the Blazor framework for both frontend and backend design in order to create a scheduling webapp." + 
            " I worked on this project in a team of 7 people for two semesters using the Agile approach with a focus on documentation, planning and testing"
    }),
    PortfolioCard({
      title:"React Personal Website", 
      titleLink: "https://github.com/ryan-b184/reactGitPractice",
      imgSrc:"https://www.codingdojo.com/blog/wp-content/uploads/react.jpg", 
      imgAlt:"", 
      skills: ["React", "JavaScript", "CSS", "HTML", "NPM", "Components", "Props", "UseState", "Frontend"],
      desc: "Followed a tutorial in order to learn the basics of React. I have gotten comfortable with the work flow of frontend development and plan to update this site as my portfolio expands."
    }),
    PortfolioCard({
      title:"Locating Geological Deposits with ML", 
      titleLink: "",
      imgSrc:"https://www.codingdojo.com/blog/wp-content/uploads/react.jpg", 
      imgAlt:"", 
      skills: ["Python", "Research", "MatPlotLib", "SKLearn", "Tensorflow", "Research", "GIS", "CNN", "Random Forest", "Data Extraction", "Clustering", "Semantic Segmentation"],
      desc: "While working for DICE, I was tasked with locating gravel deposits using GIS data (DEM, DTM, DSM) in QGIS to extract useful information to train ML models. " + 
      "These ML models would then be tested against a real test dataset in order to predict on the location of gravel deposits."+
      "While working in this role, I have learned a great deal about geology and working both solo and in pairs. I was able to successfully deliver " +
      "quality code and documentation for every team and client meeting while clearly and concisely presenting about progress."
    }),
    PortfolioCard({
      title:"More To Come...", 
      titleLink: "",
      imgSrc:"https://www.codingdojo.com/blog/wp-content/uploads/react.jpg", 
      imgAlt:"", 
      skills: [],
      desc: ""
    })
  ]

  //the amount of cards that will be displayed int he carousel
  const CARD_COUNT = 2;
  //this represents the current index of the left most card
  const [currInd, setCurrInd] = useState(0);
  
  //this method increments the currInd when the right arrow is clicked
  //if there is no more cards to display on the next page it will not increment
  const increaseCurrInd = () => {
    if (currInd >= portCards.length - CARD_COUNT) return; //dont increase
    setCurrInd(currInd + CARD_COUNT)
  }

  const decreaseCurrInd = () => {
    if (currInd == 0 ) return; //dont decrease
    setCurrInd(currInd - CARD_COUNT)
  }
  

  //This is the function that is used to display the appropriate cards based ont he current index
  function getDisplayCards(list) {
    let retList = []
    for(let i=currInd; i<currInd + CARD_COUNT; i++){
      if (i >list.length) break;
      retList.push(list[i])
    }
    return retList
  }

  


  return (
    <section className='portfolio__container' id="portfolio">
        <h5>My Project Experience</h5>
        <h2>Portfolio</h2>
        <div className='carousel'>
            <div className='btn arrow__btn arrow__btn-left' onClick={decreaseCurrInd}>&lt;</div>
            
            <div className='portfolio__cards'>
                {getDisplayCards(portCards)}
                
            </div>
            
            <div className='btn arrow__btn arrow__btn-right' onClick={ increaseCurrInd}>&gt;</div>
            {/* used to display the current page number
              a visual to represent pages will be added at a later date
            */}
            {currInd / CARD_COUNT} 
        </div>

    </section>
  )
}
