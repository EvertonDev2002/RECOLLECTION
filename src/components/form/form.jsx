import "./form.css"
import React from 'react'
import { useHistory } from "react-router-dom"

export default function Form(){

  localStorage.setItem('q', '1')
  localStorage.setItem('rc', '0')
  localStorage.setItem('rr', '0')
  const history = useHistory() 
  
  function onChange(ev){

    const {name, value} = ev.target;
    localStorage.setItem('user', {name, value}.value)
  }

  function NextPage() {
    if(localStorage.getItem('user') != null ){

      console.log('deu certo' + localStorage.getItem('user'))
      history.push("/questions")
    }
  }

  const valueInput = () =>{

    if(localStorage.getItem('user') === null){

      return 'Nome'
    }else{

      return localStorage.getItem('user')
    }
  }

  return(

    <form className="form">
      <input  type="text" placeholder={null ? valueInput() : valueInput()} onChange={onChange}/>
      <button onClick={NextPage}>Iniciar</button>
    </form>
  )
}