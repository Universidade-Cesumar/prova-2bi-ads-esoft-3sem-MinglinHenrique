// Arquivo para código javascript

const API_URL = "https://6a29e952f59cb8f65f1dc3a5.mockapi.io/teste/materiais";

const btnCadastrar = document.getElementById("btn-cadastrar");
const inputNome = document.getElementById("input-nome");
const inputQuantidade = document.getElementById("input-quantidade");
const listaMaterial = document.getElementById("lista-materiais");
const inputBusca = document.getElementById("input-busca");
const totalItens = document.getElementById("total-itens");

async function carregarMateriais() {
    try {
    const resposta = await fetch(API_URL);
    const materiais = await resposta.json();

    const busca = inputBusca.value.toLowerCase();

const materiaisFiltrados = materiais.filter(material =>
    material.nome.toLowerCase().includes(busca)
);

    totalItens.textContent = `Total de itens: ${materiais.length}`;

    listaMaterial.innerHTML = "";

    materiaisFiltrados.forEach(material => {

        let classe = "";

    if (Number(material.quantidade) < 10) {
    classe = "estoque-critico";
    }

        listaMaterial.innerHTML += `
        <tr>
            <td id="NomeM">${material.nome}</td>
            <td id="QuantM" class="${classe}">${material.quantidade}</td>
            <td id="AcaoM">
            <button class="btn-baixar" data-id="${material.id}">Baixar</button>
            <button class="btn-excluir" data-id="${material.id}">Excluir</button></td>
        </tr>
        `;
    });

    document.querySelectorAll(".btn-excluir").forEach(botao => {
        botao.addEventListener("click", () => {
            excluirMaterial(botao.dataset.id);
        });
    });

    document.querySelectorAll(".btn-baixar").forEach(botao => {
        botao.addEventListener("click", () => {
            baixarMaterial(botao.dataset.id);
        });
    });
    } catch (erro) {
        console.error(erro);
        alert("Erro ao carregar materiais.");
    }
}

function validarRetirada(estoqueAtual, quantidadeRetirada) {
    estoqueAtual = Number(estoqueAtual);
    quantidadeRetirada = Number(quantidadeRetirada);

    if (quantidadeRetirada <= 0) return false;
    if (quantidadeRetirada > estoqueAtual) return false;

    return true;
}

if (typeof fetch !== "undefined") {
    carregarMateriais();
}

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

async function excluirMaterial(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    carregarMateriais();
}

async function baixarMaterial(id) {

    const retirada = Number(
        document.getElementById("input-retirada").value
    );

    const resposta = await fetch(`${API_URL}/${id}`);
    const material = await resposta.json();

    const estoqueAtual = Number(material.quantidade);

    if (!validarRetirada(estoqueAtual, retirada)) {
        alert("Quantidade inválida");
        return;
    }

    const novaQuantidade = estoqueAtual - retirada;

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: material.nome,
            quantidade: novaQuantidade
        })
    });

    carregarMateriais();
}

inputBusca.addEventListener("input", () => {
    carregarMateriais();
});