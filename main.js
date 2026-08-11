function goToPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('logo-home').addEventListener('click', () => goToPage('page1'));
    document.getElementById('nav-home').addEventListener('click', () => goToPage('page1'));

    const beachBanner = document.getElementById('btn-to-page2');
    if (beachBanner) {
        beachBanner.addEventListener('click', () => goToPage('page2'));
    }

    const charCards = document.querySelectorAll('.btn-to-page3');
    charCards.forEach(card => {
        card.addEventListener('click', () => goToPage('page3'));
    });
});
