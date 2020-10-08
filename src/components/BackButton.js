import React, { Component } from "react";
import "./styles.css";
import {Link} from 'react-router-dom';




class BackButton extends Component {
  render() {
    return (

        <Link className = "backButton" to = "/busca">
          Voltar
        </Link>

    )

  }
}

export default BackButton;