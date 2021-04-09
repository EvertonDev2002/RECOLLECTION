import './header.css'
import React from 'react'

export default function Header(props){
    return (
        <header className='header'>
          <h1>Questão</h1>
          <p>{props.questao}</p>
        </header>
    )
}