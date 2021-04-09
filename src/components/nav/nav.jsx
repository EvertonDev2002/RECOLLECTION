import './nav.css'
import React from 'react'

export default function Nav(){
    return (
        <nav className='nav nav-mobile'>
            <a className='fas fa-home' href='/' real="prev" >&nbsp;</a>
            <span className='fas fa-undo-alt'></span>
        </nav>
    )
}