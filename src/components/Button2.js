import React, { Component } from "react";
import "./styles.css";
import {Link} from 'react-router-dom';




class Button2 extends Component {

    
  enviarDados() {

  }

  render() {
    return (

        <Link className = "button" to = "/interacao" onClick = {this.enviarDados}>
          Pesquisar
        </Link>

    )

  }
}

export default Button2;