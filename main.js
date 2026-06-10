// Arquivo para código javascript

const API_URL = "https://6a29e952f59cb8f65f1dc3a5.mockapi.io/teste/:endpoint";

const btnCadastrar = document.getElementById("btn-cadastrar");
const inputNome = document.getElementById("input-nome");
const inputQuantidade = document.getElementById("input-quantidade");
const listaMaterial = document.getElementById("lista-materiais");

async function carregarMateriais() {
    const resposta = await fetch(API_URL);
    const materiais = await resposta.json();

    listaMateriais.innerHTML = "";

    materiais.forEach(material => {
        listaMateriais.innerHTML += `
            <li>${material.nome} - ${material.quantidade}</li>
        `;
    });
}