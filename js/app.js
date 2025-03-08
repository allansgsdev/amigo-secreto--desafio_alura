// *PÁGINA DE DESAFIOS*

// Desafio: Sorteio - Amigo Secreto
// Autor: Allan Gomes
// Curso: Lógica de programação - Praticando com desafios
// Instituição: Alura


// DECLARAÇÃO E ATRIBUÇÃO DE VARIÁVEIS
let campoAmigo = document.getElementById('nome-amigo');
let campoAmigosIncluidos = document.getElementById('lista-amigos');
let campoSorteio = document.getElementById('lista-sorteio');
let formulario = document.querySelector('form');
let listaDeAmigos = [];
let listaDeSorteados = [];
let tamanhoDaLista = listaDeAmigos.length;
let listaSorteio = [];
let estadoSorteio = true;

// DECLARAÇÃO DE FUNÇÕES
function limparCampo(campo) {
    campo.value = ''
}

function adicionar() {
    var nomeDoAmigo = campoAmigo.value;
    if (!nomeDoAmigo || nomeDoAmigo.trim() === '') {
        alert('Insira um nome válido.');
    } else {
        if (listaDeAmigos.includes(nomeDoAmigo)) {
            alert('Já existe um nome igual a este na lista.\n\nDigite um nome diferente.');
        } else {
            listaDeAmigos.push(campoAmigo.value);
            campoAmigosIncluidos.innerHTML = listaDeAmigos.join(', ');
        }
    }
    limparCampo(campoAmigo);

    return
}

function realizarSorteio() {
    listaDeSorteados = [];
    listaSorteio = [];
    var listaDeNumeros = [];
    var posicao;
    var ajusteDePosição;
    tamanhoDaLista = listaDeAmigos.length;

    campoSorteio.innerHTML = '';
    limparCampo(campoAmigo);

    if (tamanhoDaLista > 1) {
        for (var i = 0; i < tamanhoDaLista; i++) {
            do {
                do {
                    posicao = parseInt(Math.random() * tamanhoDaLista);
                } while (listaDeNumeros.includes(posicao));
            } while (posicao == i);
            //while (ajusteDePosição = tamanhoDaLista >= 3 ? (posicao == i || posicao == i + 1) : posicao == i);

            listaDeNumeros.push(posicao);
            listaDeSorteados.push(listaDeAmigos[posicao]);
            listaSorteio.push(`${listaDeAmigos[i]} -> ${listaDeSorteados[i]}`);
        }

        campoSorteio.innerHTML = '';
        campoSorteio.innerHTML = listaSorteio.join('<br>');
        estadoSorteio = false;
    } else {
        alert('É necessário possuir mais de um nome na lista de amigos.');
    }

    return
}

function sortear() {
    if (estadoSorteio == false) {
        if (confirm(`Deseja refazer outro sorteio com estes mesmos nomes:\n\n${listaDeAmigos.join(', ')}`)) {
            realizarSorteio();
        }
    } else {
        realizarSorteio();
    }
}

function reiniciar() {
    limparCampo(campoAmigo);
    campoAmigosIncluidos.innerHTML = '';
    campoSorteio.innerHTML = '';
    listaDeAmigos = [];
    listaDeSorteados = [];
    listaSorteio = [];
    estadoSorteio = false;
    return
}

// PROGRAMA PRINCIPAL
const input = document.querySelector('input');

input.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        adicionar();
    }
})

formulario.onsubmit = (event) => {
    event.preventDefault();
}