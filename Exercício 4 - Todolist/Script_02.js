const botao = document.getElementById('btn_add');

const inputNome = document.getElementById('campoTarefa');
const listaTarefa = document.getElementById('listaTarefa')
let contador = 0;

botao.addEventListener("click", function (){
    const novoElementoTarefa = document.createElement('div');
    contador+=1;

    novoElementoTarefa.innerHTML = `<span id="span${contador}">${inputNome.value}</span>
                                <button onclick = "removerTarefa('span${contador}')">
                                    OK
                                </button>`;
    listaTarefa.appendChild(novoElementoTarefa);

    
    if(contador == 10){

        alert('Você passou de 10 afarezes, VAI FAZER CLT, VAGABUNDO.')
        location.reload();
    }
});


function removerTarefa(elemento){
  document.getElementById(elemento).style.textDecoration = 'line-through';
}

const botaoPesquisar = document.getElementById('btn_pesquisar');

botaoPesquisar.addEventListener("click", function () {
    const filtro = document.getElementById('pesquisaTarefa').value.toLowerCase();
    const tarefas = listaTarefa.getElementsByTagName('div');

    for (let tarefa of tarefas) {
        const texto = tarefa.querySelector('span').textContent.toLowerCase();
        if (texto.includes(filtro)) {
            tarefa.style.display = '';
        } else {
            tarefa.style.display = 'none';
        }
    }
});