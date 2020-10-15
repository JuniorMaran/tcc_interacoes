import React from 'react';
import ChordDiagram from 'react-chord-diagram';
import BackButton from '../components/BackButton';
import { useSelector } from 'react-redux';


export default function Interacao() {
  const drugs = useSelector(state => (state.data))

  function tratarNome() {
    let nome = []
    for (var prop in drugs) {
      if (drugs.hasOwnProperty(prop)) {
        nome.push(drugs[prop]['name'])
      }
    }
    return nome
  }

  function tratarInteracoes() {
    let interacao = []
    for (var prop in drugs) {
      if (drugs.hasOwnProperty(prop)) {
        interacao.push(drugs[prop]['interaction'])
      }
    }
    return interacao
  }

  function criarMatriz() {
      let nomes = tratarNome()
      let interacoes = tratarInteracoes()

      var matriz = new Array(nomes.length).fill(0).map(() => new Array(nomes.length).fill(0))

      nomes.forEach((item, index) => {
          interacoes.forEach((interacao, idx) => {
              if(interacao.includes(item)) {
                  matriz[index][idx] = 1;
              }
          });
      });

      return matriz;
    }


  function exibirMedicamentos() {
    let medicamentos = tratarNome()

    return medicamentos;
  }

  function selecionarCores() {
    var qtdMedicamentos = tratarNome().length

    const arrayCores = ["#FFA500", "#FFDD89", "#957244", "#F26223", "#FFEBCD", "#FFE4C4", "#FFDAB9", "#FFE4B5", "#87CEEB", '#B0C4DE', "#FFA500", "#FFDD89", "#957244", "#F26223", "#FFEBCD", "	#FFE4C4", "#FFDAB9", "#FFE4B5", "#87CEEB", '#B0C4DE']
    let cor = arrayCores.sort(() => 0, 5 - Math.random());
    let cores = cor.slice(0, qtdMedicamentos);

    return cores
  }

  return (
    <section className="alignGraph">
      <div>
        <ChordDiagram
          height={700}
          width={700}
          outerRadius={200}
          matrix={criarMatriz()}
          componentId={1}
          groupLabels={exibirMedicamentos()}
          groupColors={selecionarCores()}
        />
      </div>
      <div className="alignButton">
        <BackButton>
        </BackButton>
      </div>
    </section>
  );
}
