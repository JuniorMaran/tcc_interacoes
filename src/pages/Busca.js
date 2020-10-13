import React, { useState } from 'react';
import mock from "../models/mocks"
import { useDispatch, useSelector } from 'react-redux'


export default function Busca() {

  const drugs = useSelector(state => state.data)
  const dispatch = useDispatch();
  const [medicamentos, setMedicamentos] = useState([]);
  const [interacoes, setInteracoes] = useState([]);


  function redirectInteracao() {
    window.location.href = '/interacao';
  }

  function redirectReceituario() {
    window.location.href = '/receitas';
  }


  function enviarDados() {

    if (medicamentos && medicamentos.length > 0 && medicamentos !== "") {
      var medicamentosLista = medicamentos.split(";")

      medicamentosLista.forEach(medic => mock.drugs.forEach(item => item.name === medic ? interacoes.push(item) : null));

      setInteracoes(interacoes);



      dispatch({ type: 'ADD_DRUG', name: medicamentosLista })

      //redirectInteracao()

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
      <div> BIG FAN HERE
        <ul>
          {drugs.map(drug => <li key={drug}>{drug}</li>)}
        </ul>
      </div>
      <p className="text_p1"> Insira o nome dos medicamentos </p>
      <div>
        <p className="text_p2"> Insira os nomes dos medicamentos, separados por ";" <br></br> (ponto e vírgula seguido por um espaço)</p>
        <input className="input_busca" placeholder="paracetamol; bepantol" onChange={handleChange} />
      </div>
      <div>
        <button className="button" onClick={enviarDados}>
          Pesquisar
          </button>
      </div>
      <div>
        <button className="button" onClick={redirectReceituario.bind()}  >
          Receituário
            </button>
      </div>

    </section>
  );

}
