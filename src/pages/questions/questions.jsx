import './questions.css'
import API from '../../api/api.js'
import { useHistory } from 'react-router'
import Nav from '../../components/nav/nav.jsx'
import Card from '../../components/card/card.jsx'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header.jsx'
import Music from '../../components/nav/sound/sound_01.mp3'
import Questions from '../../components/questions/questions.jsx'
import LineForPageQuestions from '../../components/line/line_for_page_questions/line_for_page_questions.jsx'

export default function PageQuestions (){

    const [result, setResult] = useState([])
    const [question, setQuestions] = useState(0)
    
    useEffect(() =>{

        API.get(`/api?pageNumber=${question}&pageSize=1&sortBy=id&sortDirection=ASC`).then((response)=>{

            setResult(response.data.content[0])
            
    })},[question])

    const history = useHistory()

    function ClickNext(ev){

        if(result.feedback === ev.target.innerHTML){
    
            const Int = parseInt( localStorage.getItem('q')) +1
            const rc = parseInt( localStorage.getItem('rc')) +1
    
            if(Int <= 10){
    
                localStorage.setItem('q', Int)
                localStorage.setItem('rc', rc)
                setQuestions(Int-1)
                console.log(Int-1)
            }else{
    
                if(rc <= 10){
                    
                    localStorage.setItem('rc', rc)
                    history.push('/result')
                }
            }
            
        }else{
    
            const Int = parseInt( localStorage.getItem('q')) +1
            const rr = parseInt( localStorage.getItem('rr')) +1
           
            if( Int <= 10){
    
                localStorage.setItem('q', Int)
                localStorage.setItem('rr', rr)
                setQuestions(Int-1)
            }else{
    
                if(rr <= 10){
                    
                    localStorage.setItem('rr', rr)
                    history.push('/result')
                }
            }
        }  
    }

    return (
      <div className='content'>
          <Header questao={localStorage.getItem('q')}/>
          <LineForPageQuestions/>
         <Card 
            key={result.id}
            logo={result.photo}
          />
          <Questions
            titulo={result.question} 
            q1={result.alternative_01} 
            q2={result.alternative_02}
            q3={result.alternative_03}
            q4={result.alternative_04}
            feedback={result.feedback}
            click={ClickNext}           
          /> 
          <Nav Music={Music}/>
        </div> 
    )
}