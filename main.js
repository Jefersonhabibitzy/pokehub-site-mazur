// Função principal para gerenciar a troca de telas (Abas)
function goToPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// Configuração dos Eventos após o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', () => {
    
    // Retorno para a Página 1 (Home) ao clicar no Logo ou no link Home
    document.getElementById('logo-home').addEventListener('click', () => goToPage('page1'));
    document.getElementById('nav-home').addEventListener('click', () => goToPage('page1'));

    // Navegação: Clicar no banner de praia vai para a Página 2
    const beachBanner = document.getElementById('btn-to-page2');
    if (beachBanner) {
        beachBanner.addEventListener('click', () => goToPage('page2'));
    }

    // Navegação: Clicar nos cards de pokémons em destaque vai para a Página 3
    const charCards = document.querySelectorAll('.btn-to-page3');
    charCards.forEach(card => {
        card.addEventListener('click', () => goToPage('page3'));
    });
});
