import './questions.css'
import React from 'react'

export default function Questions(props){
    return (
        <div className='space-questions questions-mobile'>
            <h2>{props.titulo}</h2>
            <div className='questions'>
                <span onClick={props.click}>{props.q1}</span>
                <span onClick={props.click}>{props.q2}</span>
                <span onClick={props.click}>{props.q3}</span>
                <span onClick={props.click}>{props.q4}</span>
            </div>
        </div>
    )
}