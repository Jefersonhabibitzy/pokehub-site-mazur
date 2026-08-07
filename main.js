document.addEventListener("DOMContentLoaded", () => {
    // Seleção das Telas
    const tela1 = document.getElementById("tela-1");
    const tela2 = document.getElementById("tela-2");
    const tela3 = document.getElementById("tela-3");

    // Seleção dos Botões e Gatilhos de cliques
    const btnPraia = document.getElementById("btn-praia");
    const elementosTela3 = document.querySelectorAll(".trigger-tela3");
    const botoesVoltar = document.querySelectorAll(".btn-voltar");

    // Função auxiliar para gerenciar qual tela fica visível
    function alternarTela(telaAtiva) {
        // Remove a classe active de todas as seções
        tela1.classList.remove("active");
        tela2.classList.remove("active");
        tela3.classList.remove("active");

        // Adiciona à tela selecionada
        telaAtiva.classList.add("active");
    }

    // Regra 1: Clicar na imagem de praia (Banner) direciona para a Tela 2
    btnPraia.addEventListener("click", () => {
        alternarTela(tela2);
    });

    // Regra 2: Clicar em qualquer outra imagem/card da home direciona para a Tela 3
    elementosTela3.forEach(elemento => {
        elemento.addEventListener("click", () => {
            alternarTela(tela3);
        });
    });

    // Função dos botões de voltar para retornar à Home (Tela 1)
    botoesVoltar.forEach(botao => {
        botao.addEventListener("click", () => {
            alternarTela(tela1);
        });
    });
});
