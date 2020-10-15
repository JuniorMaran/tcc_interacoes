import React from "react";
import "./styles.css";
import {Link, useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'

export default function BackButton() {

  const history = useHistory();
  const dispatch = useDispatch();

  function limpar() {
    
    dispatch({ type: 'RESET', name: [] }) 
    history.push("/busca")

  }


    return (

        <Link className = "backButton" to = "/busca" onClick= {limpar} >
          Voltar
        </Link>

    )  
}