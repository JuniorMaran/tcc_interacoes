import React from 'react';
import Button from '../components/Button';


const Home = () => {

  return (
    <section className="containerHome">

      <img src="./../logo192.png" className="imagem" alt="imagem"/>

      <div className = "text_Nome">
        <p> Nome completo: </p>
      <input className="input_text" placeholder="Ex: João Silva">
      </input>

      </div>
      <div className = "text_Nome">
        <p> CPF:</p>
      <input className="input_text" placeholder="Ex: 11122233344">
      </input>
      </div>
      <Button>
      </Button>
    </section>
  );  
}

export default Home;