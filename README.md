[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/B74p-HKt)

# Sistema de Almoxarifado

**Deploy:** [https://universidade-cesumar.github.io/prova-2bi-ads-esoft-3sem-MinglinHenrique/]

Sistema de controle de almoxarifado desenvolvido com HTML, CSS e JavaScript, com o objetivo de gerenciar o cadastro, listagem, busca e retirada de materiais. Os dados são persistidos em uma API REST externa (MockAPI).

## Funcionalidades

- Cadastro de materiais com nome e quantidade
- Listagem de materiais em tabela, consumida via API
- Busca/filtro de materiais por nome em tempo real
- Contador de total de itens cadastrados
- Indicação visual de estoque crítico (quantidade abaixo de 10 unidades)
- Retirada (baixa) de quantidade de um material, com validação de valores inválidos ou superiores ao estoque disponível
- Exclusão de materiais
- Tratamento de erros de rede/API (try/catch) com aviso ao usuário
- Atualização dinâmica da interface após cada operação, sem reload da página

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Fetch API, async/await)
- API REST mock (MockAPI) para persistência dos dados

## Estrutura do projeto

- `index.html` -> Estrutura principal da aplicação
- `style.css` -> Estilização da interface
- `main.js` -> Lógica do sistema e integração com a API (constante `API_URL`)

## Como executar

- Baixe ou clone este repositório
- Abra o arquivo `index.html` em qualquer navegador moderno
- É necessária conexão com a internet, pois os dados são buscados e salvos em uma API externa
- Utilize a interface para cadastrar, buscar, retirar e excluir materiais