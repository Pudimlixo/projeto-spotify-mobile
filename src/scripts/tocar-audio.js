const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');

    const audioSrcs = [
      'public/audios/Billie Eilish  CHIHIRO (Official Lyric Video).m4a',
      'public/audios/Billie Eilish  BIRDS OF A FEATHER (Official Lyric Video).m4a',
      'public/audios/Exagerado  Cazuza.m4a',
      'public/audios/Gorillaz  Momentary Bliss ft. slowthai  Slaves (Episode One).m4a',
      'public/audios/Marília Mendonça  Infiel  DVD Realidade.m4a'
    ];

    document.querySelectorAll('.card').forEach((card, index) => {
      card.addEventListener('click', () => {
        audioSource.src = audioSrcs[index];
        audioPlayer.style.display = 'block'; // ou remova isso se quiser invisível
        audioPlayer.load();
        audioPlayer.play();
      });
    });