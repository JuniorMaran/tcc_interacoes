import React, { useState } from 'react';
import mock from "../models/mocks"
import { useDispatch } from 'react-redux'
import { Link, useHistory } from "react-router-dom";


export default function Busca() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [medicamentos, setMedicamentos] = useState([]);
  const [interacoes, setInteracoes] = useState([]);



  const enviarDados = () => {
    if (medicamentos && medicamentos.length > 0 && medicamentos !== "") {
      var medicamentosLista = medicamentos.split(";")

      medicamentosLista.forEach(medic => mock.drugs.forEach(item => item.name === medic ? interacoes.push(item) : null));

      setInteracoes(interacoes);
      
      for (let i = 0; i < interacoes.length; i++) {
        
        dispatch({ type: 'ADD_DRUG', name: interacoes[i] }) 
      }
      
      history.push("/interacao")
      
      

    }

    //validar aqui se o medicamento está na api

    else
      console.log("insira os medicamentos")



  }

  function handleChange(event) {
    setMedicamentos(event.target.value)
  };

  
  return (

    <section className="containerBusca">
      <img src="./../logo192.png" className="imagem" alt="imagem" />

      <p className="text_p1"> Insira o nome dos medicamentos </p>
      <div>
        <p className="text_p2"> Insira os nomes dos medicamentos, separados por ";" <br></br> (ponto e vírgula)</p>
        <input className="input_busca" placeholder="paracetamol; bepantol" onChange={handleChange} />
      </div>
      <div>
        <button className="button" onClick={enviarDados}>
          Pesquisar
          </button>
      </div>
      <div>
        <Link to="/receitas">
          <button className="button" >
            Receituário
            </button></Link>

      </div>

    </section>
  );

}
