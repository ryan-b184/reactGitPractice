import React, { useEffect, useState } from 'react'

import { PortfolioCard } from './PortfolioCard'

export const APIPort = () => {

var portCards = [
    PortfolioCard({
        title:"Blazor Scheduling Project", 
        titleLink: "https://github.com/ryan-b184/CSTProject",
        imgSrc:"https://www.codingdojo.com/blog/wp-content/uploads/react.jpg", 
        imgAlt:"", 
        skills: [".NET","BUnit","NUnit","Selenium","C#","SQLite", "Components", "Frontend", "Backend"],
        desc: "This project utalizes the Blazor framework for both frontend and backend design in order to create a scheduling webapp." + 
            " I worked on this project in a team of 7 people for two semesters using the Agile approach with a focus on documentation, planning and testing"
    })]

//contact the GITHUB api to see if we can automatically import projects
const [cardList, setCardList] = useState([])
  
function getDisplayCards(list) {
  let retList = []
  for(let i = 0; i<list.length; i++){
    if (i >list.length) break;
    retList.push(list[i])
  }
  return retList
}

async function makeRequest(urlReq) {
  // let retData = null
  // await fetch(urlReq)
  //   .then((response) => response.json())
  //   .then((data) => (retData = data))

  let res = await fetch(urlReq)
  let retData = await res.json()

  return retData
}

async function onLoad() {
  
    let temp = await makeRequest('https://api.github.com/users/ryan-b184/repos')
    processApi(temp)
  
}

function processLanguages(langs){
  let retList = []
  let lines = []
  let total = 0
  
  for (let key in langs) {
    retList.push(key)
    total += langs[key]
    lines.push(langs[key])
  }

  //calculate the percentages
  for (let i = 0; i < lines.length; i++){
    lines[i] = lines[i]/total *100
  }

  retList.push(lines)
  return retList
}

//calls api on page load
useEffect(() => {
    onLoad()
  }, [])

async function processApi(data) {
  let cardList = []
  //grab main data
  // let data = makeRequest('https://api.github.com/users/ryan-b184/repos')
  


  for (let key in data){
    let obj = data[key]
    let languages = processLanguages(await makeRequest(obj.languages_url))
    let langPercent = languages.pop()
    
    cardList.push(
        PortfolioCard({
            title: obj.name,
            titleLink: obj.html_url,
            imgSrc:"https://www.codingdojo.com/blog/wp-content/uploads/react.jpg", 
            imgAlt:"", 
            skills: languages,
            skillPercent: langPercent,
            startDate: obj.created_at,
            updateDate: obj.updated_at,
            desc: obj.description == null ? "No Description" : obj.description
        })
    )
  }

  setCardList(cardList)
}


  return (
    <div>
        <h1>API Tests</h1>
        <div>
            {getDisplayCards(cardList)}
        </div>
    </div>

  )
}
