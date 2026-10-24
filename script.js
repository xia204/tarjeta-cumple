// Efecto de Confeti al hacer clic en la sorpresa
const btnSorpresa = document.getElementById('btn-sorpresa');
const mensajeOculto = document.getElementById('mensaje-oculto');
const cakeBtn = document.getElementById('cake-btn');
const btnMusica = document.getElementById('btn-musica');
const musicaFondo = document.getElementById('musica-fondo');

function lanzarConfeti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff4b2b', '#ff9a9e', '#6f42c1', '#ffd166']
  });
}

btnSorpresa.addEventListener('click', () => {
  lanzarConfeti();
  mensajeOculto.classList.toggle('hidden');
});

// Lanzar confeti al tocar el pastel
cakeBtn.addEventListener('click', () => {
  lanzarConfeti();
});

// Control del botón de música
btnMusica.addEventListener('click', () => {
  if (musicaFondo.paused) {
    musicaFondo.play();
    btnMusica.classList.add('playing');
    btnMusica.textContent = '🎶';
  } else {
    musicaFondo.pause();
    btnMusica.classList.remove('playing');
    btnMusica.textContent = '🎵';
  }
});

// Opcional: Iniciar la música automáticamente al hacer clic en el botón de la sorpresa
btnSorpresa.addEventListener('click', () => {
  if (musicaFondo.paused) {
    musicaFondo.play();
    btnMusica.classList.add('playing');
    btnMusica.textContent = '🎶';
  }
});