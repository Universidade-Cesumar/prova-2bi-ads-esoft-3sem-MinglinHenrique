// Arquivo para código javascript

const API_URL = "https://6a29e952f59cb8f65f1dc3a5.mockapi.io/teste/materiais";

const btnCadastrar = document.getElementById("btn-cadastrar");
const inputNome = document.getElementById("input-nome");
const inputQuantidade = document.getElementById("input-quantidade");
const listaMaterial = document.getElementById("lista-materiais");

async function carregarMateriais(material) {
    const resposta = await fetch(API_URL);
    const materiais = await resposta.json();

    listaMaterial.innerHTML = "";

    materiais.forEach(material => {
        listaMaterial.innerHTML += `
            <li>${material.nome} - ${material.quantidade}</li>
        `;
    });
}

carregarMateriais();

btnCadastrar.addEventListener("click", async () => {
    if (inputNome.value === "" || inputQuantidade.value === "") {
        return;
    }
    
    const material = {
        nome: inputNome.value,
        quantidade: inputQuantidade.value
    };

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(material)
    });

    inputNome.value = "";
    inputQuantidade.value = "";

    carregarMateriais();

});