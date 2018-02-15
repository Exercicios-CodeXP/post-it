import React from 'react'
import Form from './form.js'
import FormInput from './formInput.js'
import FormTextarea from './formTextarea.js'
import FormButton from './formButton.js'
import formTextarea from './formTextarea.js'
import Nota from '../nota.js'

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

function criaComponenteButtonConcluido(adicionarNota, posicao, notaAlterada) {
    const props = {
        className: 'note__control',
        type: 'button',
        onClick: event => {
        props.adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, posicao);
    }

}
    
    const children = 'Concluido'

    return React.createElement(FormButton, props, children);
  }


// destructuring / immutable
// extract function
// variable shorthand declaration

function FormNotas(props) {
    let notaAlterada = new Nota(props.notaAtual.titulo.props.notaAtual.texto, props.notaAtual.editando)
}

let formNotas;

let inputTitulo = criaComponenteInputTitulo(notaAlterada);

let textareaTexto = criaComponenteTextareaTexto(notaAlterada);

let formProps = { className: 'note' };

let children;
let onClick;

if (props.notaAtual.editando) {
    let buttonRemover = criaComponenteButtonRemover(props.removerNota, props.posicao);

let buttonConcluido = criaComponenteButtonConcluido(props.adicionarNota, props.posicao, notaAlterada);

children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido];
} else {
    children = [inputTitulo, textareaTexto];

    onClick = () => {
        props.editarFormulario(props.posicao);
    }
}

formNotas = React.createElement(form, formProps, children)

return formNotas;
}

export default FormNotas;