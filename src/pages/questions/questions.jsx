import './questions.css'
import React, { useEffect, useState } from 'react'
import API from '../../api/api.js'
import Nav from '../../components/nav/nav.jsx'
import Card from '../../components/card/card.jsx'
import Header from '../../components/header/header.jsx'
import Questions from '../../components/questions/questions.jsx'
import LineForPageQuestions from '../../components/line/line_for_page_questions/line_for_page_questions.jsx'


export default function PageQuestions(){

    const [result, setResult] = useState([])
   
    useEffect(() =>{

    API.get(`/api/questions/${localStorage.getItem('q')}`).then((response)=>{

        setResult(response.data)
      })},[result])
      
    return (
        <div className='content'>
          <Header questao={localStorage.getItem('q')}/>
          <LineForPageQuestions/>
            <Card 
              key={result.id}
              logo={result.photo}
            />
            <Questions feedback={result.feedback}
              titulo={result.question} 
              q1={result.alternative_01} 
              q2={result.alternative_02}
              q3={result.alternative_03}
              q4={result.alternative_04}
            />
          <Nav/>
        </div>
    )
}