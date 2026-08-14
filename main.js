function mudarTela(idDaTela) {
    const todasAsTelas = document.querySelectorAll('.tela');
    
    todasAsTelas.forEach(tela => {
        tela.classList.remove('ativa');
    });
    
    const telaDestino = document.getElementById(idDaTela);
    if (telaDestino) {
        telaDestino.classList.add('ativa');
        window.scrollTo(0, 0);
    }
}
