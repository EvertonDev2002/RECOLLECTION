import './card.css'
import React from 'react'


export default function Card(props){
    return (
        <article className='card card-mobile'>
          <img src={props.logo} alt='Imagem da questão'/>
        </article>
    )
}