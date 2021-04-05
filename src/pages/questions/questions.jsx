import './questions.css'
import React, { useEffect, useState } from 'react'
import API from '../../api/api.js'
import Nav from '../../components/nav/nav.jsx'
import Card from '../../components/card/card.jsx'
import Header from '../../components/header/header.jsx'
import LineForPageQuestions from '../../components/line/line_for_page_questions/line_for_page_questions.jsx'


export default function PageQuestions(){

    /* const [number, setNumber] = useState(['1']) */
    const [result, setResult] = useState([])

    useEffect(() =>{

      API.get(`${'1'}`).then((response)=>{

        setResult(response.data)
      })
    },  [result])

    return (
        <div className='content'>
          <Header></Header>
          <LineForPageQuestions></LineForPageQuestions>
          {result.map((resultado)=>(
          <>
            <Card key='resultado.id' logo={resultado.photo}></Card>
            <div className='space-questions questions-mobile'>
                <h2>{resultado.question}</h2>
                <div className='questions'>
                    <span>{resultado.alternative_01}</span>
                    <span>{resultado.alternative_02}</span>
                    <span>{resultado.alternative_03}</span>
                    <span>{resultado.alternative_04}</span>
                </div>
            </div>
          </>
          ))}
          <Nav></Nav>
        </div>
    )
}