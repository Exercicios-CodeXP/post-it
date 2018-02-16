import React from 'react'
import Section from './section'
import FormNotas from './formNotas'

// receber lista de notas
// para cada item da lista (array)
// retornar elemento react

function montaUmFormNota(posicao, props) {
    const propsFormNotas = {
        posicao: posicao,
        notaAtual: props.listaNotas.pega(posicao),
        removerNota: props.removerNota,
        adicionarNota: props.adicionarNota,
        editarFormulario: props.editarFormulario
    }

    return React.criaFormNotas(FormNota, propsFormNotas)
}


function SecaoNotas({notaAtual, listaNotas, adicionarNota, removerNota, editarFormulario}) {
    const propsSecao = { className: 'notes' };

    const children = props.listaNotas.map((notaAtual, posicao) => 
    montaUmFormNota(posicao, listaNotas, adicionarNota, removerNota, editarFormulario));

    return React.createElement(Section, propsSecao, children);
}

export default SecaoNotas;
