import './questions.css'
import React from 'react'


export default function Questions(props){


    function ClickNext(ev){

        if(props.feedback === ev.target.innerHTML){

            const Int = parseInt( localStorage.getItem('q')) +1
            const rc = parseInt( localStorage.getItem('rc')) +1

            if(Int <= 10){

                localStorage.setItem('q', Int)
                localStorage.setItem('rc', rc)
                window.location.reload()
            }else{

                if(rc <= 10){
                    
                    localStorage.setItem('rc', rc)
                   /* Passa para tela de resultado */
                }
            }
            
        }else{

            const Int = parseInt( localStorage.getItem('q')) +1
            const rr = parseInt( localStorage.getItem('rr')) +1
           
            if( Int <= 10){

                localStorage.setItem('q', Int)
                localStorage.setItem('rr', rr)
                window.location.reload()
            }else{

                if(rr <= 10){
                    
                    localStorage.setItem('rc', rr)
                    /* Passa para tela de resultado */
                }
            }
        }  
    }
    return (
        <div className='space-questions questions-mobile'>
            <h2>{props.titulo}</h2>
            <div className='questions'>
                <span onClick={ClickNext}>{props.q1}</span>
                <span onClick={ClickNext}>{props.q2}</span>
                <span onClick={ClickNext}>{props.q3}</span>
                <span onClick={ClickNext}>{props.q4}</span>
            </div>
        </div>
    )
}