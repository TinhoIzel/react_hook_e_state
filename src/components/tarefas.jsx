import { useState } from "react";

function Tarefas() {

    const [listaTarefas, mudarTarefas] = useState([]);

    // retorna um Array com estado atual (qualquer coisa)
    // e --função-- que altera o estado
    // Desestruturação...

    const adicionarTarefa = (event) => {
        const texto_da_area = document.getElementById('tarefa')

        // spread -> mudarTarefas muda o listaTarefas
        // pra uma lista com o que tinha na listaTarefas, e coloca ...
        mudarTarefas([... listaTarefas, texto_da_area.value])

        texto_da_area.value = ''
    }

    // Removendo com filter --> retorna os itens dentro da condição
    const removerItem = (index) => mudarTarefas(listaTarefas.filter((valorItem, ind) => index !== ind))

    return (
        <div id="diva">
            {/* LISTA DE TAREFAS */}
            <textarea id='tarefa'></textarea>
            <button onClick={adicionarTarefa}>Salvar</button>
            {/* O Hook que faz a página atualizar é esse */}

            <ul>
                {listaTarefas.map((algo, index) => (
                    <li key={index}>
                        {algo}
                        <button onClick={() => removerItem(index)}>Remover</button>
                        {/* O index do 'removerItem' é o key (acho que isso é específico do React) */}
                    </li>
                ))}

                {/* O motivo de usar Hooks é por essa parte aqui */}
                {/* Sem Hooks, o 'gatilho', a página não vai ser atualizada */}
                {/* E é bem mais fácil mudar o site dessa forma do que manipulando com document! */}
            </ul>
        </div>

    )
}

export default Tarefas