import React from 'react'
import Section from './section'
import FormNotas from './formNotas'

// receber lista de notas
// para cada item da lista (array)
// retornar elemento react

function SecaoNotas(props) {
    const propsSecao = { className: 'notes' };
    const children = [];
    for (let i = 0; i < props.listaNotas.contaTotal(); i++) {
        const propsFormNotas = {
            notaAtual: props.listaNotas.pega(i),
            removerNota: props.removerNota,
            adicionarNota: props.adicionarNota,
            editarFormulario: props.editarFormulario,
            posicao: i
        }
        let formNotas = React.criaFormNotas(FormNota, propsFormNotas);
        children.push(formNotas);
    }

    return React.createElement(Section, propsSecao, children);
}

export default SecaoNotas;
