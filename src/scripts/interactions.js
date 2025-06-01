

// No seu arquivo src/scripts/interactions.js

let container_cards_musica = document.querySelector('#container-musicas');
let container_cards_artista = document.querySelector('#container-artistas');

// Função para adicionar a funcionalidade de arrastar a um container
function makeDraggable(container) {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active-dragging'); // Opcional: adicionar um estilo de "arrastando"
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active-dragging');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active-dragging');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return; // Parar a função de ser executada
        e.preventDefault(); // Evitar seleção de texto ou outros comportamentos padrão do navegador
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5; // Multiplicador para tornar a rolagem mais rápida
        container.scrollLeft = scrollLeft - walk;
    });

    // Eventos de toque para dispositivos móveis
    container.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchend', () => {
        isDown = false;
    });

    container.addEventListener('touchcancel', () => { // Caso o toque seja interrompido (ex: ligação)
        isDown = false;
    });

    container.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5;
        container.scrollLeft = scrollLeft - walk;
    });
}

// Aplica a funcionalidade de arrastar aos containers
makeDraggable(container_cards_musica);
makeDraggable(container_cards_artista);