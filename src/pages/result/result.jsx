import './result.css'
import React from 'react'
import Nav from '../../components/nav/nav.jsx'
import Logo from '../../components/logo/logo.jsx'
import Music from '../../components/nav/sound/sound_02.mp3'
import LineForPageMain from '../../components/line/line_for_page_main/line_for_page_main.jsx'

export default function PagePageResult(){

    const result = () =>{

        if(parseInt(localStorage.getItem('rc')) === 10){

            return <>
                <span>Total: {parseInt(localStorage.getItem('rc')) +'/' + parseInt(localStorage.getItem('q'))}</span>
                <p>Parabéns,{String(localStorage.getItem('user'))}! Você esteve presente o ano todo!</p>
                </>

        } else if(parseInt(localStorage.getItem('rr')) === 10){

            return  <>
                <span>Total: {parseInt(localStorage.getItem('rc')) +'/' + parseInt(localStorage.getItem('q'))}</span>
                <p>Parabéns, {String(localStorage.getItem('user'))}! Você faltou meio ano, está na média!</p>
                </>

        }else if(parseInt(localStorage.getItem('rr')) <= 5 || parseInt(localStorage.getItem('rc')) <= 5 ){

            return <>
                <span>Total: {parseInt(localStorage.getItem('rc')) +'/' + parseInt(localStorage.getItem('q'))}</span>
                <p> Parabéns, {String(localStorage.getItem('user'))}! Você é aquele que passa de ano sem ir na sala!</p>
                </>
        }
    }
       
    return (
        <div className='content'>
            <LineForPageMain/>
            <Logo/>
            <div className="result">
                {result()}
            </div>
            <Nav Music={Music}/>
        </div>
    )
}