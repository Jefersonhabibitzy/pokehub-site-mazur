// Função responsável por fazer a transição de telas ocultando uma e mostrando outra
function mudarTela(idDaTela) {
    // Busca todas as telas do documento
    const todasAsTelas = document.querySelectorAll('.tela');
    
    // Remove a classe 'ativa' de todas elas para escondê-las
    todasAsTelas.forEach(tela => {
        tela.classList.remove('ativa');
    });
    
    // Encontra a tela desejada pelo ID e adiciona 'ativa' para mostrá-la
    const telaDestino = document.getElementById(idDaTela);
    if (telaDestino) {
        telaDestino.classList.add('ativa');
        // Rola a página automaticamente para o topo ao mudar de aba
        window.scrollTo(0, 0);
    }
}
