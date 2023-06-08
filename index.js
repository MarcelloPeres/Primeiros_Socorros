
/* DARK MODE */

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector(".conteudo-geral");
const header = document.querySelector(".cabecalho");
const footer = document.querySelector(".rodape");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// Verifica se o tema escuro está ativo no carregamento inicial da página
let modoEscuroAtivo = localStorage.getItem("modoEscuro") === "true";

// Função para aplicar o tema
const aplicarTema = () => {
    body.classList.toggle("modo-escuro", modoEscuroAtivo);
    header.classList.toggle("modo-escuro", modoEscuroAtivo);
    footer.classList.toggle("modo-escuro", modoEscuroAtivo);
    if (modoEscuroAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./images/lua.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./images/sol.png");
    }
};

// Evento de clique no botão para alternar o tema
botaoAlterarTema.addEventListener("click", () => {
    modoEscuroAtivo = !modoEscuroAtivo; // Inverte o estado do tema

    // Armazena o estado do tema no localStorage
    localStorage.setItem("modoEscuro", modoEscuroAtivo);

    aplicarTema(); // Aplica o tema atualizado
});

// Aplica o tema inicial ao carregar a página
aplicarTema();

