
//----------------------------------------------DARK MODE 

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



// ------------------------------------------ VALIDAÇÃO DO FORMULÁRIO 


const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const JobSelect = document.querySelector("#job");
const messageTextArea = document.querySelector("#message");


form.addEventListener("submit", (event) => {
event.preventDefault();

//verificar se nome ta vazio

if(nameInput.value ===""){
    alert("Por favor, preencha o seu nome");
    return;

}

//verificando e-mail valido

if(emailInput.value ==="" || !isEmailValid(emailInput.value)){
    alert("Por favor, preencha o seu email");
    return;

}

if (JobSelect.value ===""){
    alert("Por favor, escolha uma situação");
return;
}

// Verificar se a situação foi escolhida



form.submit();
alert("Formulário enviado com sucesso!");

});


//função de validação do Email

function isEmailValid(email) {
    const emailRegex = new RegExp(
        //Usuário@host.com.br
/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
);

    if(emailRegex.test(email)){
        return true;
    }
    return false;
}

