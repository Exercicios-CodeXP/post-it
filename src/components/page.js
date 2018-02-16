import React from 'react'
import FormNotas from './formNotas'
import SectionNota from './secaoNotas'

const editarFormulario = posicao => listaNotas.edita(posicao);

const adicionarNota = (inputTitulo, textareaTexto, formulario, posicao) => {
    if (listaNotas.pega(posicao)) {
        listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
}

const removerNota = (evento, posicao) => {
    evento.stopPropagation();
    listaNotas.remove(posicao);
}

function montaFormNotas(adicionarNota, removerNota, editarFormulario) {
    const props = {
        posicao: undefined,
        notaAtual: new Nota('', ''),
        adicionarNota: adicionarNota, //mantive a forma antiga, pois quando o nome do atributo é igual ao nome da função, pode ser omitido um deles
        removerNota, removerNota,
        editarFormulario: editarFormulario
    }


    return React.createElement(FormNotas, props)


}

function montaSecaoNotas(listaNotas, adicionarNota, removerNota, editarFormulario) {
    const props = {
        listaNotas,
        adicionarNota: adicionarNota,
        removerNota, removerNota,
        editarFormulario: editarFormulario
    }

    return React.createElement(SectionNota, props)

}

class Page extends React.component {
    constructor(props) {
        super(props);
        this.state = { //so pode ser alterado chamando a funcao setState. Contem os valores da pagina 
            listaNotas: new ListaNotas(this.atualizarPagina)
        }
    }

    atualizarPagina(novaLista) {
        this.setState({  //funcao setState. Provoca renderizacao da pagina com a nova lista
        });
    }

    editarFormulario(posicao) {
        this.state.listaNotas.edita(posicao);
    }

    adicionarNota = (inputTitulo, textareaTexto, formulario, posicao) => {
        if (this.listaNotas.pega(posicao)) {
            this.listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
        } else {
            this.listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
            formulario.reset();
        }
    }

    removerNota = (evento, posicao) => {
        evento.stopPropagation();
        this.state.listaNotas.remove(posicao);

    }

    render() { //chamado quando o estado for alterado

        const props = { className: 'container' }

        let formNotas = montaFormNotas(this.adicionarNota, this.removerNota, this.editarFormulario)
        let secaoNotas = montaSecaoNotas(this.state.listaNotas, this.adicionarNota, this.removerNota, this.editarFormulario)
        const children = [formNotas, secaoNotas]

        return React.createElement('main', props, children)
    }

}

export default Page

//ler documentacao do react ate state e lifecycle