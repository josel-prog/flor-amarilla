// Estrellas animadas
let useHearts = false;
function createStar() {
  if (!useHearts) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.width = '8px';
    star.style.height = '8px';
    star.style.borderRadius = '50%';
    star.style.background = '#fff';
    star.style.boxShadow = '0 0 12px #FFD600, 0 0 24px #FFD60088';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.opacity = Math.random() * 0.7 + 0.3;
    star.style.zIndex = 1;
    document.getElementById('star-bg').appendChild(star);
    setTimeout(() => star.remove(), 6000);
  } else {
    const heart = document.createElement('div');
    heart.style.position = 'absolute';
    heart.style.fontSize = '22px';
    heart.style.color = '#FFD600';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.opacity = Math.random() * 0.7 + 0.3;
    heart.style.zIndex = 1;
    heart.textContent = '💛';
    document.getElementById('star-bg').appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
}
setInterval(createStar, 120);

// Frases para Jhen (más frases)
const frases = [
  "Te amo 💛",
  "Eres bella 🌟",
  "Eres hermosa ✨",
  "Eres mi alegría",
  "Gracias por existir",
  "Eres mi niña especial",
  "Siempre te elijo",
  "Tu sonrisa ilumina mi vida",
  "Eres mi flor amarilla",
  "Contigo todo es mejor",
  "Te pienso y sonrío",
  "Eres mi razón de ser",
  "Eres mi sol en días nublados",
  "Siempre estás en mi corazón",
  "Tu ternura me enamora cada día",
  "Eres mi sueño hecho realidad",
  "No hay nadie como tú",
  "Quiero estar contigo siempre",
  "Eres mi niña a la que amo mucho muchoooo",
  "Tu amor me hace fuerte",
  "Eres mi felicidad",
  "Te pienso a cada momento nunca para",
  "Eres mi mundo",
  "Eres mi princesa",
  "Te adoro"
];

// Mostrar frase inicial en el botón corazón
const phrasesDiv = document.getElementById('phrases');
phrasesDiv.textContent = "FELIZ DIA MI NIÑA, TE AMO";

// Animación de flor y frases (solo una vez)
document.getElementById('yellow-heart').onclick = function() {
  this.style.display = 'none';
  useHearts = true;
  const flowerContainer = document.getElementById('flower-container');
  flowerContainer.innerHTML = '';

  // Muestra el gif de la flor
  const flowerGif = document.createElement('img');
  flowerGif.src = 'FlowerGif.gif';
  flowerGif.alt = 'Flor animada';
  flowerGif.style.width = '320px';
  flowerGif.style.height = 'auto';
  flowerGif.style.display = 'block';
  flowerGif.style.margin = '0 auto';
  flowerContainer.appendChild(flowerGif);

  // Frases animadas (bucle infinito)
  let idx = 0;
  function showPhrase() {
    phrasesDiv.textContent = frases[idx];
    idx = (idx + 1) % frases.length;
    setTimeout(showPhrase, 1200);
  }
  showPhrase();

  // Forzar reproducción de música en todos los navegadores
  const audio = document.getElementById('bg-music');
  audio.volume = 10;
  audio.play().catch(() => {
    document.body.addEventListener('click', () => {
      audio.play();
    }, { once: true });
  });
};

// Música auto-play (puedes cambiar el archivo en index.html)
document.getElementById('bg-music').volume = 10;