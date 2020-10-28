import React from 'react';
import BackButton from '../components/BackButton';
const Receitas = () => {
    return (
        <section className = {"receituario"}>
          <div className= {"tituloReceitas"}>
            Receituário de Junior:
            </div>
            <div className= {"alignReceita"}>
            <ul>
              <div className = {"formatReceita"}>
              <span>Receita </span>          
              <span>10/08/2020</span>
              </div>
              <li>Paracetamol</li>
              <li>Amoxilina</li>
              <li>Ibuprofeno</li>
              <li>Nimesulida</li>

            </ul>
          </div>
          <div className= {"alignReceita"}>
            <ul>
              <div className = {"formatReceita"}>
              <span>Receita </span>          
              <span>10/08/2020</span>
              </div>
              <li>Paracetamol</li>
              <li>Amoxilina</li>
              <li>Ibuprofeno</li>
              <li>Nimesulida</li>

            </ul>
          </div>
          <div className= {"alignReceita"}>
            <ul>
              <div className = {"formatReceita"}>
              <span>Receita </span>          
              <span>10/08/2020</span>
              </div>
              <li>Paracetamol</li>
              <li>Amoxilina</li>
              <li>Ibuprofeno</li>
              <li>Nimesulida</li>

            </ul>
          </div>
          <div>
           <p className = "interacoesReceita"> Dentre todas as receitas inseridas, {Math.floor(Math.random() * 31)}% possuem interação medicamentosa.</p>
          </div>

          <div className = {"alignButton"}>
          <BackButton >
        </BackButton>
        </div>
        </section>
    );  
  }
  
export default Receitas;