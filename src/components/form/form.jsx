import "./form.css"
import React from 'react'
import { useHistory } from "react-router-dom";

export default function Form(){

  function onChange(ev){

    const {name, value} = ev.target;
    localStorage.setItem('user', {name, value}.value)
  }

  let history = useHistory();
  
  function NextPage() {

    history.push("/questions");
  }


  return(

    <form  className="form">
      <input name="username" type="text" placeholder="Seu nome" onChange={onChange}/>
      <button onClick={NextPage}>Iniciar</button>
    </form>
  )
}