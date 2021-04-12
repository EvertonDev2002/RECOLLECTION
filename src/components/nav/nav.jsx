import './nav.css'
import React, { useState } from 'react'

export default function Nav(props){


    const [play, setPlay] = useState(false)
    const [icon, setIcon] = useState('fas fa-play')
   
    function Click(){

        const audio = document.querySelector("#play")
        audio.volume = 0.3
    
        if(play){

            audio.pause()
            setPlay(false)
            setIcon("fas fa-play")
        }else{
            
            audio.play()
            setPlay(true)
            setIcon("fas fa-pause")
        }
    }
    
        return (
            <nav className='nav nav-mobile'>
               <a className='fas fa-home iconHome' href='/' real='prev' >&nbsp;</a>
                <span className={'play ' + icon} onClick={Click}>
                    <audio id='play' preload="auto" loop>
                        <source src={props.Music} type="audio/mpeg"/>
                    </audio>
                </span>
            </nav>
        )
    
}