import './main.css'
import React from 'react'
import Logo from '../../components/logo/logo.jsx'
import Form from '../../components/form/form.jsx'
import LineForPageMain from '../../components/line/line_for_page_main/line_for_page_main.jsx'

export default function PageMain(){

    return (
        <div className='content'>
            <LineForPageMain></LineForPageMain>
            <Logo></Logo>
            <Form></Form> 
        </div>
    )
}