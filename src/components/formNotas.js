import React from 'react'
import Form from './form'
import FormInput from './formInput'
import FormTextarea from './formTextarea'
import FormButton from './formButton'
import formTextarea from './formTextarea'
import Nota from '../nota'

//esta funcao abaixo precisa criar e retornar um elemento FormInput
//definir as propriedes do componente



function criaComponenteInputTitulo(notaAlterada) {
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        readOnly: !notaAlterada.editando,
        defaultValue: notaAlterada.titulo,
        onChange: event => {
            notaAlterada.titulo = event.target.value;
        }
    }

    return React.createElement(FormInput, props);
};

function criaComponenteTextareaTexto(notaAlterada) {
    const props = {
        className: 'note__body',
        name: 'texto',
        placeholder: 'Criar uma nota...',
        rows: 5,
        readOnly: !notaAlterada.editando,
        defaultValue: notaAlterada.texto,
        onChange: event => {
            notaAlterada.texto = event.target.value;
        }
    }

    return React.createElement(FormTextarea, props);

};

function criaComponenteButtonRemover(removerNota, posicao) {
    const props = {
        className: 'note__control',
        type: 'button',
        onClick: event => removerNota(event, props.posicao)
    }

    const children = React.createElement('i', {
        className: 'fa fa-times',
        'aria-hidden': true
    });

    return React.createElement(FormButton, props.children);
}

function criaComponenteButtonConcluir(adicionarNota, posicao, notaAlterada) {
    const props = {
        className: 'note__control',
        type: 'button',
        onClick: event => {
            adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, posicao);
        }

    }

    const children = 'Concluido'

    return React.createElement(FormButton, props, children);
}


// destructuring / immutable
// extract function
// variable shorthand declaration

function FormNotas({ notaAtual, posicao, adicionarNota, removerNota, editarFormulario}) {
    let notaAlterada = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando);
    let inputTitulo = criaComponenteInputTitulo(notaAlterada);
    let textareaTexto = criaComponenteTextareaTexto(notaAlterada);
    let props = { className: 'note' };
    let children;

    if (notaAlterada.editando) {
        let buttonRemover = criaComponenteButtonRemover(removerNota, posicao);
        let buttonConcluido = criaComponenteButtonConcluir(adicionarNota, posicao, notaAlterada);
        children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido];
    } else {
        children = [inputTitulo, textareaTexto];

        props.onClick = () => editarFormulario(posicao);
    }

    formNotas = React.createElement(form, props, children)

    return formNotas;

}

export default FormNotas;