import React from 'react'
import ReactDOM from 'react-dom'
import Page from './components/page'

ReactDOM.render(
    React.createElement(Page, null),
    document.getElementById('root')
)

// let secao = document.getElementsByClassName('notes')[0];
// const observaMudancasNaLista = () => {
//     atualizarSecao(secao);
// };

// const atualizarSecao = secao => {
//     while (secao.firstChild) {
//         secao.removeChild(secao.firstChild);
//     }

//     for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
//         let notaAtual = listaNotas.pega(posicao);

//         // property shorthand
//         const props = {
//             posicao: posicao, 
//             notaAtual: notaAtual, 
//             editarFormulario: editarFormulario, 
//             adicionarNota: adicionarNota, 
//             removerNota: removerNota
//         };

//         secao.appendChild(new FormNotas(props));
//     }
// }



// window.adicionarNota = adicionarNota;