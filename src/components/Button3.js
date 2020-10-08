import React, { Component } from "react";
import "./styles.css";
import {Link} from 'react-router-dom';




class Button3 extends Component {
  render() {
    return (

        <Link className = "button" to = "/receitas">
          Receituário
        </Link>

    )

  }
}

export default Button3;