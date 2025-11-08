const botao = document.getElementById('btn_add');
const inputNome = document.getElementById('campoTarefa');
const listaTarefa = document.getElementById('listaTarefa');
const listaConclusao = document.getElementById('listaConclusao');

let contador = 0;
let existentTasksCounter = 0;
let concludedTasksCounter = 0;

// Adicionar tarefa
botao.addEventListener("click", function () {
    if (!inputNome.value) return;

    contador++;
    existentTasksCounter++;

    const novoElementoTarefa = document.createElement('div');
    novoElementoTarefa.innerHTML = `
        <input type="checkbox" id="check${contador}" onchange="checkTaskState(this)">
        <span id="span${contador}">${inputNome.value}</span>
    `;
    listaTarefa.appendChild(novoElementoTarefa);

    inputNome.value = '';

    if (contador >= 10) {
        alert('Você passou de 10 afazeres');
    }

    updateCounters();
});

// Marcar/desmarcar tarefa
function checkTaskState(element) {
    const currentTask = element.parentNode;
    const span = currentTask.querySelector('span');

    if (element.checked) {
        // Risca o texto e move para concluídas
        span.style.textDecoration = 'line-through';
        span.style.fontStyle = 'italic';
        listaConclusao.appendChild(currentTask);

        concludedTasksCounter++;
        existentTasksCounter--;
    } else {
        // Remove o risco do texto e move para pendentes
        span.style.textDecoration = 'none';
        span.style.fontStyle = 'normal';
        listaTarefa.appendChild(currentTask);

        concludedTasksCounter--;
        existentTasksCounter++;
    }

    updateCounters();
}

// Buscar tarefas (apenas na lista de pendentes)
const botaoPesquisar = document.getElementById('btn_pesquisar');
botaoPesquisar.addEventListener("click", function () {
    const filtro = document.getElementById('pesquisaTarefa').value.toLowerCase();
    const tarefas = listaTarefa.getElementsByTagName('div');

    for (let tarefa of tarefas) {
        const texto = tarefa.querySelector('span').textContent.toLowerCase();
        tarefa.style.display = texto.includes(filtro) ? '' : 'none';
    }
});

// Atualizar contadores
function updateCounters() {
    console.log("Tarefas pendentes:", existentTasksCounter);
    console.log("Tarefas concluídas:", concludedTasksCounter);
}
