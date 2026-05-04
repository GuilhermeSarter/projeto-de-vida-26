const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function() {
        // Remove classe ativo de todos os botões e abas
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            abas[j].classList.remove("ativo");
        }
        // Adiciona classe ativo ao botão e aba clicados
        this.classList.add("ativo");
        abas[i].classList.add("ativo");
    }
}