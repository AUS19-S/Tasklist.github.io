function adicionarTarefa(){
    let inTarefa = document.getElementById("inTarefa");
    let tarefa = inTarefa.value;

    // se não informou...
    if(tarefa ==""){
        alert("Informe a tarefa");
        inTarefa.focus();
        return;
    }
    // crie referência ao elemento divQuadro(local onde tag5 será inserida)
    let divQuadro = document.getElementById("divQuadro");
    let h5 = document.createElement("h5");
    let texto = document.createTextNode(tarefa);
    h5.appendChild(texto);
    divQuadro.appendChild(h5);

    inTarefa.value = "";
    inTarefa.focus();
}
let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarTarefa);

// Outra linha de código

function selecionarTarefa(){
    let h5 = document.getElementsByTagName("h5");
    let numH5 = h5.length;

    if(numH5 == 0){
        alert("Não há tarefa para selecionar");
        return;
    }
    let aux = -1;

    for(let i = 0; i < numH5; i++){
        if(h5[i].className == "tarefaSelecionada"){
            h5[i].className = "tarefaNormal";
            aux = i;
            break;
        }
    }
    // se a linha que está selecionada é a última, irá voltar para a primeira
    if(aux == numH5 - 1){
        aux = -1;
    }

    h5[aux + 1].className = "tarefaSelecionada";
}
let btSelecionar = document.getElementById("btSelecionar");
btSelecionar.addEventListener("click", selecionarTarefa);

function retirarSelecionada(){
    // cria referência de um filho que irá perder um filho;
    let divQuadro = document.getElementById("divQuadro");
    let h5 = document.getElementsByTagName("h5");
    let numH5 = h5.length;

    let aux = -1;

    for(let i = 0; i < numH5; i++){
        if(h5[i].className == "tarefaSelecionada"){
            aux = i;
            break;
        }
    }
    if(aux == -1){
        alert("Selecione uma tarefa para remover.");
        return;
    }
    if(confirm("Confirma Exclusão de " + h5[aux].textContent + "?")){
        divQuadro.removeChild(h5[aux]);
    }
}

let btRetirar = document.getElementById("btRetirar");
btRetirar.addEventListener("click", retirarSelecionada);

function gravarTarefa(){
    let h5 = document.getElementsByTagName("h5");
    let numH5 = h5.length;
    if(numH5 == 0){
        alert("Não há tarefa para serem salvas");
        return;
    }
    let tarefas = "";
    for(let i = 0; i < numH5; i++){
        tarefas += h5[i].textContent + ";";
    }
    localStorage.setItem("TarefasDias", tarefas.substring(0, tarefas.length - 1));
    if(localStorage.getItem("TarefasDias")){
        alert("Ok, Tarefas Salvas");
    }
}
let btGravar = document.getElementById("btGravar");
btGravar.addEventListener("click", gravarTarefa);

function recuperarTarefasSalvas(){
    if(localStorage.getItem("TarefasDias")){
        let tarefas = localStorage.getItem("TarefasDias").split(";");
        let divQuadro = document.getElementById("divQuadro");
        for(let i = 0; i < tarefas.length; i++){
            let h5 = document.createElement("h5");
            let texto = document.createTextNode(tarefas[i]);
            h5.appendChild(texto);
            divQuadro.appendChild(h5);
        }
    }
}
recuperarTarefasSalvas();
