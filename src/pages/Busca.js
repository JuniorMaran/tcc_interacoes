import React, { Component } from 'react';
import mock from "../models/mocks"

export default class Busca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicamentos: []
    }


  }
  redirectInteracao() {
    window.location.href = '/interacao';
  }
  redirectReceituario() {
    window.location.href = '/receitas';
  }

  getMedicamentos(medicamentos) {
    //aqui receberá os medicamentos do input validados
    // for(var i = 0; i <= medicamentos.length; i++){
    //   console.log("i")
    // }

    // medicamentos.forEach(function (newItem) {
    //   mock.drugs.forEach(function (item) {
    //     item.interaction.forEach(function(interaction){

    //       if (newItem === item.name) {
    //         console.log("medicamentos: ", newItem)
    //         console.log("nome: ", item.name)
    //         console.log("interaction:",interaction)
    //       }

    //     })
    //   })
    // })
  }

  enviarDados() {
    var medicamentos = this.state.medicamentos

    if (medicamentos != "") {
      var medicamentosLista = medicamentos.split(";")
      var medInteractions
      mock.drugs.forEach(function (item) {
        medicamentosLista.forEach(function (medic) {
                medInteractions.append(medic, item)
                
          })
        })
      // medicamentosLista.forEach(medic => 
      // mock.drugs.forEach(item => 

      //   medic === item.name ? medInteractions.push(item) : null)
      // )

      // medicamentosLista.forEach(item => {
      //     medInteractions = mock.drugs.push(medic => medic.name === item);
      // });


      console.log("medInteractions", medInteractions)
      //this.getMedicamentos(medicamentosLista)
    }

    //validar aqui se o medicamento está na api

    else
      console.log("insira os medicamentos")
  }

  handleChange = event => {
    this.setState({ medicamentos: event.target.value });
  };

  render() {
    return (
      <section className="containerBusca">

        <img src="./../logo192.png" className="imagem" alt="imagem" />
        <p className="text_p1"> Insira o nome dos medicamentos </p>
        <div>
          <p className="text_p2"> Insira os nomes dos medicamentos, separados por ";" <br></br> (ponto e vírgula seguido por um espaço)</p>
          <input className="input_busca" placeholder="paracetamol; bepantol" value={this.state.medicamentos} onChange={this.handleChange} />
        </div>
        <div>
          <button className="button" onClick={this.enviarDados.bind(this)}>
            Pesquisar
          </button>
        </div>
        <div>
          <button className="button" onClick={this.redirectReceituario.bind(this)}>
            Receituário
            </button>
        </div>

      </section>
    );
  }
}
