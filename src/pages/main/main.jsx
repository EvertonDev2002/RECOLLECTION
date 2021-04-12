import './main.css'
import React from 'react'
import Nav from '../../components/nav/nav.jsx'
import Logo from '../../components/logo/logo.jsx'
import Form from '../../components/form/form.jsx'
import Music from '../../components/nav/sound/sound_00.mp3'
import LineForPageMain from '../../components/line/line_for_page_main/line_for_page_main.jsx'

export default function PageMain(){

    return (
        <div className='content'>
            <LineForPageMain/>
            <Logo/>
            <Form/> 
            <Nav Music={Music}/>
        </div>
    )
}