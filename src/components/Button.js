import React, { Component } from "react";
import "./styles.css";
import {Link} from 'react-router-dom';




class Button extends Component {
  render() {
    return (

        <Link  className = "button" to = "/busca">
          Entrar
        </Link>
 
    )

  }
}

export default Button;