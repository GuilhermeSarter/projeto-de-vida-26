const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

botoes.forEach((botao, i) => {
    botao.addEventListener("click", () => {
        // Remove classe ativo de todos os botões
        botoes.forEach(b => b.classList.remove("ativo"));
        // Adiciona classe ativo ao botão clicado
        botao.classList.add("ativo");

        // Remove classe ativo de todas as abas
        abas.forEach(aba => aba.classList.remove("ativo"));
        // Adiciona classe ativo à aba correspondente
        abas[i].classList.add("ativo");
    });
});