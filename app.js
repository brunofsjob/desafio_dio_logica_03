// Função para criar e adicionar conteúdo no body da página HTML
function exibirNaTela(mensagem) {
    // Criar um novo elemento de parágrafo
    const novoElemento = document.createElement("p");
    
    // Definir o conteúdo do parágrafo com a mensagem passada
    novoElemento.textContent = mensagem;
    
    // Adicionar o parágrafo ao elemento com id 'resultados'
    document.getElementById("resultados").appendChild(novoElemento);
}

// Quando o botão for clicado, pegar os valores dos inputs e exibir os resultados
document.getElementById("mostrarDados").onclick = function() {
    // Pegar os valores dos campos de entrada
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const tipo = document.getElementById("tipo").value;

    // Verificar se todos os campos estão preenchidos
    if (!nome || !idade || !tipo) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Mensagens a serem exibidas na tela
    const mensagem1 = `Nome: ${nome}`;
    const mensagem2 = `Idade: ${idade}`;
    const mensagem3 = `Tipo: ${tipo}`;

    // Exibir as variáveis na tela
    exibirNaTela(mensagem1);
    exibirNaTela(mensagem2);
    exibirNaTela(mensagem3);

    // Determinar a mensagem de ataque de acordo com o tipo
    let ataque;
    if (tipo.toLowerCase() === "mago") {
        ataque = "usou magia";
    } else if (tipo.toLowerCase() === "guerreiro") {
        ataque = "usou espada";
    } else if (tipo.toLowerCase() === "monge") {
        ataque = "usou artes marciais";
    } else if (tipo.toLowerCase() === "ninja") {
        ataque = "usou shuriken";
    } else {
        ataque = "tipo de ataque desconhecido";
    }

    // Exibir a mensagem do ataque
    const mensagemAtaque = `${tipo} atacou usando ${ataque}`;
    exibirNaTela(mensagemAtaque);
};
