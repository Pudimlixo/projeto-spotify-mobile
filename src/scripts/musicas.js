const audioPlayer = document.getElementById('audio-player');

// Exemplo de evento de clique em uma música
document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('click', () => {
        // Trocar a música conforme o card clicado
        const audioSrcs = [
            'public\audios\Billie Eilish  CHIHIRO (Official Lyric Video).m4a',
            'public\audios\Billie Eilish  BIRDS OF A FEATHER (Official Lyric Video).m4a',
            'public\audios\Exagerado  Cazuza.m4a',
            'public\audios\Gorillaz  Momentary Bliss ft. slowthai  Slaves (Episode One).m4a',
            'public\audios\Marília Mendonça  Infiel  DVD Realidade.m4a'
        ];
        audioPlayer.src = audioSrcs[index];
        audioPlayer.play();
    });
});
